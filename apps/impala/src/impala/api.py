#!/usr/bin/env python
# Licensed to Cloudera, Inc. under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  Cloudera, Inc. licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

## Main views are inherited from Beeswax.

import base64
import logging
import json
import struct
import tempfile
import os

from django.utils.translation import ugettext as _
from django.views.decorators.http import require_POST

from desktop.lib.django_util import JsonResponse
from desktop.lib.exceptions_renderable import PopupException
from desktop.lib.rest import http_client, resource
from desktop.lib.rest.http_client import RestException
from desktop.models import Document2

from beeswax.api import error_handler
from beeswax.server.dbms import get_cluster_config
from beeswax.models import Session
from beeswax.server import dbms as beeswax_dbms
from beeswax.views import authorized_get_query_history

from impala import dbms
from impala.dbms import _get_server_name
from impala.server import get_api as get_impalad_api, ImpalaDaemonApiException, _get_impala_server_url

from lxml import html

from libanalyze import analyze as analyzer
from libanalyze import rules

LOG = logging.getLogger(__name__)
ANALYZER = rules.TopDownAnalysis() # We need to parse some files so save as global

@require_POST
@error_handler
def invalidate(request):
  cluster = json.loads(request.POST.get('cluster', '{}'))
  database = request.POST.get('database', None)
  table = request.POST.get('table', None)
  flush_all = request.POST.get('flush_all', 'false').lower() == 'true'

  cluster_config = get_cluster_config(cluster)
  query_server = dbms.get_query_server_config(cluster_config=cluster_config)
  db = beeswax_dbms.get(request.user, query_server=query_server)

  response = {'status': 0, 'message': ''}

  db.invalidate(database=database, table=table, flush_all=flush_all)
  response['message'] = _('Successfully invalidated metadata')

  return JsonResponse(response)


@require_POST
@error_handler
def refresh_table(request, database, table):
  query_server = dbms.get_query_server_config()
  db = beeswax_dbms.get(request.user, query_server=query_server)

  response = {'status': 0, 'message': ''}

  db.refresh_table(database, table)
  response['message'] = _('Successfully refreshed metadata for `%s`.`%s`') % (database, table)

  return JsonResponse(response)


@require_POST
@error_handler
def get_exec_summary(request, query_history_id):
  query_server = dbms.get_query_server_config()
  db = beeswax_dbms.get(request.user, query_server=query_server)

  response = {'status': -1}
  query_history = authorized_get_query_history(request, query_history_id, must_exist=True)

  if query_history is None:
    response['message'] = _('get_exec_summary requires a valid query_history_id')
  else:
    session = Session.objects.get_session(request.user, query_server['server_name'])
    operation_handle = query_history.get_handle().get_rpc_handle()
    session_handle = session.get_handle()
    summary = db.get_exec_summary(operation_handle, session_handle)
    response['status'] = 0
    response['summary'] = summary

  return JsonResponse(response)


@require_POST
@error_handler
def get_runtime_profile(request, query_history_id):
  query_server = dbms.get_query_server_config()
  db = beeswax_dbms.get(request.user, query_server=query_server)

  response = {'status': -1}
  query_history = authorized_get_query_history(request, query_history_id, must_exist=True)

  if query_history is None:
    response['message'] = _('get_runtime_profile requires a valid query_history_id')
  else:
    session = Session.objects.get_session(request.user, query_server['server_name'])
    operation_handle = query_history.get_handle().get_rpc_handle()
    session_handle = session.get_handle()
    profile = db.get_runtime_profile(operation_handle, session_handle)
    response['status'] = 0
    response['profile'] = profile

  return JsonResponse(response)

@require_POST
@error_handler
def alanize(request):
  response = {'status': -1}
  cluster = json.loads(request.POST.get('cluster', '{}'))
  query_id = json.loads(request.POST.get('query_id'))
  application = _get_server_name(cluster)
  query_server = dbms.get_query_server_config()
  session = Session.objects.get_session(request.user, query_server['server_name'])
  server_url = _get_impala_server_url(session)
  if query_id:
    LOG.debug("Attempting to get Impala query profile at server_url %s for query ID: %s" % (server_url, query_id))
    doc = Document2.objects.get(id=query_id)
    snippets = doc.data_dict.get('snippets', [])
    secret = snippets[0]['result']['handle']['secret']
    api = get_impalad_api(user=request.user, url=server_url)
    impala_query_id = "%x:%x" % struct.unpack(b"QQ", base64.decodestring(secret))
    api.kill(impala_query_id) # There seems to be a bug where ExecSummary is not present in profile if query is opened. We could fetch it from query_summary, but just close query for demo purpose
    query_profile = api.get_query_profile_encoded(impala_query_id)
    profile = analyzer.analyze(analyzer.parse_data(query_profile))
    result = ANALYZER.run(profile)
    heatmap = {}
    summary = analyzer.summary(profile)
    heatmapMetrics = ['AverageThreadTokens', 'BloomFilterBytes', 'PeakMemoryUsage', 'PerHostPeakMemUsage', 'PrepareTime', 'RowsProduced', 'TotalCpuTime', 'TotalNetworkReceiveTime', 'TotalNetworkSendTime', 'TotalStorageWaitTime', 'TotalTime']
    for key in heatmapMetrics:
      heatmap[key] = analyzer.heatmap_by_host(profile, key)
    response['data'] = { 'query': { 'healthChecks' : result[0]['result'], 'summary': summary, 'heatmap': heatmap, 'heatmapMetrics': heatmapMetrics } }
    response['status'] = 0
  return JsonResponse(response)