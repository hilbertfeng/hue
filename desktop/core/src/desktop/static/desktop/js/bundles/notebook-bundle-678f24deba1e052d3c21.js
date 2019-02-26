/*!
 * 
 * Licensed to Cloudera, Inc. under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  Cloudera, Inc. licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 */!function(e){function t(t){for(var a,n,r=t[0],d=t[1],l=t[2],p=0,c=[];p<r.length;p++)n=r[p],i[n]&&c.push(i[n][0]),i[n]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);for(h&&h(t);c.length;)c.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,r=1;r<s.length;r++){var d=s[r];0!==i[d]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},i={notebook:0},o=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var r=window.webpackJsonp=window.webpackJsonp||[],d=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var h=d;o.push([2,"vendors~hue~notebook","vendors~notebook","hue~notebook"]),s()}({"./desktop/core/src/desktop/js/apps/notebook/notebook.js":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/notebook/notebook.js ***!
  \***************************************************************/
/*! no exports provided */function(e,t,s){"use strict";s.r(t);s(/*! ext/bootstrap-datepicker.min */"./desktop/core/src/desktop/js/ext/bootstrap-datepicker.min.js"),s(/*! jquery/plugins/jquery.hdfstree */"./desktop/core/src/desktop/js/jquery/plugins/jquery.hdfstree.js"),s(/*! ext/jquery.hotkeys */"./desktop/core/src/desktop/js/ext/jquery.hotkeys.js");var a=s(/*! clipboard */"./node_modules/clipboard/lib/clipboard.js"),i=s.n(a);window.Clipboard=i.a},"./desktop/core/src/desktop/js/ext/bootstrap-datepicker.min.js":
/*!*********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/bootstrap-datepicker.min.js ***!
  \*********************************************************************/
/*! no exports provided */function(e,t,s){"use strict";s.r(t);var a=s(/*! jquery */"./node_modules/jquery/dist/jquery.js");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var t=function(t,a){if(this.element=e(t),this.format=s.parseFormat(a.format||this.element.data("date-format")||"mm/dd/yyyy"),this.picker=e(s.template).appendTo("body").on({click:e.proxy(this.click,this),mousedown:e.proxy(this.mousedown,this)}),this.isInput=this.element.is("input"),this.component=!!this.element.is(".date")&&this.element.find(".add-on"),this.isInput?this.element.on({focus:e.proxy(this.show,this),blur:e.proxy(this.hide,this),keyup:e.proxy(this.update,this)}):this.component?this.component.on("click",e.proxy(this.show,this)):this.element.on("click",e.proxy(this.show,this)),this.minViewMode=a.minViewMode||this.element.data("date-minviewmode")||0,"string"==typeof this.minViewMode)switch(this.minViewMode){case"months":this.minViewMode=1;break;case"years":this.minViewMode=2;break;default:this.minViewMode=0}if(this.viewMode=a.viewMode||this.element.data("date-viewmode")||0,"string"==typeof this.viewMode)switch(this.viewMode){case"months":this.viewMode=1;break;case"years":this.viewMode=2;break;default:this.viewMode=0}this.startViewMode=this.viewMode,this.weekStart=a.weekStart||this.element.data("date-weekstart")||0,this.weekEnd=0===this.weekStart?6:this.weekStart-1,this.fillDow(),this.fillMonths(),this.update(),this.showMode()};t.prototype={constructor:t,show:function(t){this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.place(),e(window).on("resize",e.proxy(this.place,this)),t&&(t.stopPropagation(),t.preventDefault()),this.isInput||e(document).on("mousedown",e.proxy(this.hide,this)),this.element.trigger({type:"show",date:this.date})},hide:function(){this.picker.hide(),e(window).off("resize",this.place),this.viewMode=this.startViewMode,this.showMode(),this.isInput||e(document).off("mousedown",this.hide),this.set(),this.element.trigger({type:"hide",date:this.date})},set:function(){var e=s.formatDate(this.date,this.format);this.isInput?this.element.prop("value",e):(this.component&&this.element.find("input").prop("value",e),this.element.data("date",e))},setValue:function(e){this.date="string"==typeof e?s.parseDate(e,this.format):new Date(e),this.set(),this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0),this.fill()},place:function(){var e=this.component?this.component.offset():this.element.offset();this.picker.css({top:e.top+this.height,left:e.left})},update:function(e){this.date=s.parseDate("string"==typeof e?e:this.isInput?this.element.prop("value"):this.element.data("date"),this.format),this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0),this.fill()},fillDow:function(){for(var e=this.weekStart,t="<tr>";e<this.weekStart+7;)t+='<th class="dow">'+s.dates.daysMin[e++%7]+"</th>";t+="</tr>",this.picker.find(".datepicker-days thead").append(t)},fillMonths:function(){for(var e="",t=0;t<12;)e+='<span class="month">'+s.dates.monthsShort[t++]+"</span>";this.picker.find(".datepicker-months td").append(e)},fill:function(){var e=new Date(this.viewDate),t=e.getFullYear(),a=e.getMonth(),i=this.date.valueOf();this.picker.find(".datepicker-days th:eq(1)").text(s.dates.months[a]+" "+t);var o=new Date(t,a-1,28,0,0,0,0),n=s.getDaysInMonth(o.getFullYear(),o.getMonth());o.setDate(n),o.setDate(n-(o.getDay()-this.weekStart+7)%7);var r,d=new Date(o);for(d.setDate(d.getDate()+42),d=d.valueOf(),html=[];o.valueOf()<d;)o.getDay()===this.weekStart&&html.push("<tr>"),r="",o.getMonth()<a?r+=" old":o.getMonth()>a&&(r+=" new"),o.valueOf()===i&&(r+=" active"),html.push('<td class="day'+r+'">'+o.getDate()+"</td>"),o.getDay()===this.weekEnd&&html.push("</tr>"),o.setDate(o.getDate()+1);this.picker.find(".datepicker-days tbody").empty().append(html.join(""));var l=this.date.getFullYear(),h=this.picker.find(".datepicker-months").find("th:eq(1)").text(t).end().find("span").removeClass("active");l===t&&h.eq(this.date.getMonth()).addClass("active"),html="",t=10*parseInt(t/10,10);var p=this.picker.find(".datepicker-years").find("th:eq(1)").text(t+"-"+(t+9)).end().find("td");t-=1;for(var c=-1;c<11;c++)html+='<span class="year'+(-1===c||10===c?" old":"")+(l===t?" active":"")+'">'+t+"</span>",t+=1;p.html(html)},click:function(t){t.stopPropagation(),t.preventDefault();var a=e(t.target).closest("span, td, th");if(1===a.length)switch(a[0].nodeName.toLowerCase()){case"th":switch(a[0].className){case"switch":this.showMode(1);break;case"prev":case"next":this.viewDate["set"+s.modes[this.viewMode].navFnc].call(this.viewDate,this.viewDate["get"+s.modes[this.viewMode].navFnc].call(this.viewDate)+s.modes[this.viewMode].navStep*("prev"===a[0].className?-1:1)),this.fill(),this.set()}break;case"span":if(a.is(".month")){var i=a.parent().find("span").index(a);this.viewDate.setMonth(i)}else{var o=parseInt(a.text(),10)||0;this.viewDate.setFullYear(o)}0!==this.viewMode&&(this.date=new Date(this.viewDate),this.element.trigger({type:"changeDate",date:this.date,viewMode:s.modes[this.viewMode].clsName})),this.showMode(-1),this.fill(),this.set();break;case"td":if(a.is(".day")){var n=parseInt(a.text(),10)||1;i=this.viewDate.getMonth();a.is(".old")?i-=1:a.is(".new")&&(i+=1);o=this.viewDate.getFullYear();this.date=new Date(o,i,n,0,0,0,0),this.viewDate=new Date(o,i,Math.min(28,n),0,0,0,0),this.fill(),this.set(),this.element.trigger({type:"changeDate",date:this.date,viewMode:s.modes[this.viewMode].clsName})}}},mousedown:function(e){e.stopPropagation(),e.preventDefault()},showMode:function(e){e&&(this.viewMode=Math.max(this.minViewMode,Math.min(2,this.viewMode+e))),this.picker.find(">div").hide().filter(".datepicker-"+s.modes[this.viewMode].clsName).show()}},e.fn.datepicker=function(s,a){return this.each(function(){var o=e(this),n=o.data("datepicker"),r="object"==i(s)&&s;n||o.data("datepicker",n=new t(this,e.extend({},e.fn.datepicker.defaults,r))),"string"==typeof s&&n[s](a)})},e.fn.datepicker.defaults={},e.fn.datepicker.Constructor=t;var s={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],dates:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},isLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},getDaysInMonth:function(e,t){return[31,s.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},parseFormat:function(e){var t=e.match(/[.\/\-\s].*?/),s=e.split(/\W+/);if(!t||!s||0===s.length)throw new Error("Invalid date format.");return{separator:t,parts:s}},parseDate:function(e,t){var s,a=e.split(t.separator);if((e=new Date).setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),a.length===t.parts.length)for(var i=0,o=t.parts.length;i<o;i++)switch(s=parseInt(a[i],10)||1,t.parts[i]){case"dd":case"d":e.setDate(s);break;case"mm":case"m":e.setMonth(s-1);break;case"yy":e.setFullYear(2e3+s);break;case"yyyy":e.setFullYear(s)}return e},formatDate:function(e,t){var s={d:e.getDate(),m:e.getMonth()+1,yy:e.getFullYear().toString().substring(2),yyyy:e.getFullYear()};s.dd=(s.d<10?"0":"")+s.d,s.mm=(s.m<10?"0":"")+s.m;e=[];for(var a=0,i=t.parts.length;a<i;a++)e.push(s[t.parts[a]]);return e.join(t.separator)},headTemplate:'<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>'};s.template='<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">'+s.headTemplate+'<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">'+s.headTemplate+s.contTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+s.headTemplate+s.contTemplate+"</table></div></div>"}(s.n(a).a)},"./desktop/core/src/desktop/js/ext/jquery.hotkeys.js":
/*!***********************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/jquery.hotkeys.js ***!
  \***********************************************************/
/*! no exports provided */function(e,t,s){"use strict";s.r(t);var a=s(/*! jquery */"./node_modules/jquery/dist/jquery.js");!function(e){function t(t){if("string"==typeof t.data){var s=t.handler,a=t.data.toLowerCase().split(" "),i=["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color"];t.handler=function(t){if(this===t.target||!(/textarea|select/i.test(t.target.nodeName)||e.inArray(t.target.type,i)>-1)){var o="keypress"!==t.type&&e.hotkeys.specialKeys[t.which],n=String.fromCharCode(t.which).toLowerCase(),r="",d={};t.altKey&&"alt"!==o&&(r+="alt+"),t.ctrlKey&&"ctrl"!==o&&(r+="ctrl+"),t.metaKey&&!t.ctrlKey&&"meta"!==o&&(r+="meta+"),t.shiftKey&&"shift"!==o&&(r+="shift+"),o?d[r+o]=!0:(d[r+n]=!0,d[r+e.hotkeys.shiftNums[n]]=!0,"shift+"===r&&(d[e.hotkeys.shiftNums[n]]=!0));for(var l=0,h=a.length;l<h;l++)if(d[a[l]])return s.apply(this,arguments)}}}}e.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}},e.each(["keydown","keyup","keypress"],function(){e.event.special[this]={add:t}})}(s.n(a).a)},"./desktop/core/src/desktop/js/jquery/plugins/jquery.hdfstree.js":
/*!***********************************************************************!*\
  !*** ./desktop/core/src/desktop/js/jquery/plugins/jquery.hdfstree.js ***!
  \***********************************************************************/
/*! no exports provided */function(e,t,s){"use strict";s.r(t);var a=s(/*! jquery */"./node_modules/jquery/dist/jquery.js"),i=s.n(a),o=s(/*! ../../utils/hueUtils */"./desktop/core/src/desktop/js/utils/hueUtils.js"),n=window.$||i.a,r="jHueHdfsTree",d={home:"",initialPath:"/",isS3:!1,withTopPadding:!0,onPathChange:function(){},createFolder:!0,labels:{CREATE_FOLDER:"Create folder",FOLDER_NAME:"Folder name",CANCEL:"Cancel",HOME:"Home"}};function l(e,t){this.element=e,this.options=n.extend({},d,t),this.options.labels=n.extend({},d.labels,HUE_I18n.jHueHdfsTree,t?t.labels:{}),this._defaults=d,this._name=r,this.lastPath="",this.previousPath="",this.init()}l.prototype.init=function(e){var t=this;void 0!==e&&(t.options.initialPath=e);var s,a=n(t.element);a.empty(),a.addClass("jHueHdfsTree"),""!=t.options.home&&(s=n("<a>").html('<i class="fa fa-home"></i> '+t.options.labels.HOME).click(function(){var e=t.options.home;t.options.onPathChange(e),t.lastPath=e,i.find("a").removeClass("selected");for(var s,a=[],o=/\//g;null!=(s=o.exec(e));)a.push(e.substr(0,s.index));a.push(e),p({paths:a,scroll:!0})})).css({cursor:"pointer",position:"fixed","padding-bottom":"4px","font-size":"16px","border-bottom":"1px solid #FFF","background-color":"#FFF",width:560-o.default.scrollbarWidth()+"px"});var i=n("<ul>").addClass("content unstyled").html('<li><a class="pointer"><i class="fa fa-folder-open-o"></i> /</a></li>');t.options.withTopPadding&&i.css("padding-top","30px"),""!=t.options.home&&(s.appendTo(a),a.parent().on("scroll",function(){a.parent().scrollTop()>0?s.css({"border-bottom":"1px solid #EEE"}):s.css({"border-bottom":"1px solid #FFF"})})),i.appendTo(a),i.find("a").on("click",function(){t.options.onPathChange("/"),i.find("a").removeClass("selected"),i.find("a:eq(0)").addClass("selected")}),n("<ul>").addClass("content unstyled").attr("data-path","__JHUEHDFSTREE__ROOT__").attr("data-loaded","true").appendTo(i.find("li"));var r="/filebrowser/view=";function d(e){return e.replace(/\'/gi,"\\'")}function h(e){return 0==e.indexOf("/")?e.substr(1):e}function p(e){var s=r,o="";if(null!=e.paths&&e.paths.length>0){var l=e.paths.shift();o=t.options.isS3?l:""!=l?l:"/"}else o=null!=e.leaf?e.leaf:"/";s+=o,n.getJSON(s+"?pagesize=1000&format=json",function(s){if([],null==s.error){var r=t.options.isS3?o.substr(5):o,l=""!=r?h(r):"__JHUEHDFSTREE__ROOT__";if(a.find("[data-path='"+d(l)+"']").attr("data-loaded",!0),a.find("[data-path='"+d(l)+"']").siblings("a").find(".fa-folder-o").removeClass("fa-folder-o").addClass("fa-folder-open-o"),i.find("a").removeClass("selected"),a.find("[data-path='"+d(l)+"']").siblings("a").addClass("selected"),e.scroll&&a.parent().scrollTop(a.find("[data-path='"+d(l)+"']").siblings("a").position().top+a.parent().scrollTop()-30),n(s.files).each(function(e,s){if("."!=s.name&&".."!=s.name&&"dir"==s.type){var o=s.path,r=t.options.isS3?o.substr(5):o,l=d(r);if(0==a.find("[data-path='"+h(l)+"']").length){var c=n("<li>").html('<a class="pointer"><i class="fa fa-folder-o"></i> '+s.name+'</a><ul class="content unstyled" data-path="'+h(l)+'" data-loaded="false"></ul>'),u=r.substr(0,r.lastIndexOf("/"));""==u&&(u="__JHUEHDFSTREE__ROOT__"),u=h(u),c.appendTo(a.find("[data-path='"+d(u)+"']")),c.find("a").on("click",function(){t.options.onPathChange(o),t.lastPath=o,i.find("a").removeClass("selected"),c.find("a:eq(0)").addClass("selected"),"false"==c.find(".content").attr("data-loaded")?p({leaf:o,scroll:!1}):c.find(".content").is(":visible")?c.find(".content").hide():c.find(".content").show()})}}}),t.options.createFolder){var c=t.options.isS3?o.substr(5):o,u=n("<li>").html('<a class="pointer"><i class="fa fa-plus-square-o"></i> '+t.options.labels.CREATE_FOLDER+"</a>");u.appendTo(a.find("[data-path='"+h(d(c))+"']"));var f=n("<form>").css("margin-top","10px").addClass("form-inline");f.hide();var m=n("<input>").attr("type","text").attr("placeholder",t.options.labels.FOLDER_NAME).appendTo(f);n("<span> </span>").appendTo(f);var y=n("<input>").attr("type","button").attr("value",t.options.labels.CREATE_FOLDER).addClass("btn primary").appendTo(f);n("<span> </span>").appendTo(f),n("<input>").attr("type","button").attr("value",t.options.labels.CANCEL).addClass("btn").appendTo(f).click(function(){f.slideUp()}),y.click(function(){n.ajax({type:"POST",url:"/filebrowser/mkdir",data:{name:m.val(),path:o},beforeSend:function(e){e.setRequestHeader("X-Requested-With","Hue")},success:function(e,s){if("success"==s){f.slideUp();var a=o+"/"+m.val();t.init(a),t.options.onPathChange(a)}}})}),f.appendTo(a.find("[data-path='"+h(d(c))+"']")),u.find("a").on("click",function(){f.slideDown()})}null!=e.paths&&e.paths.length>0&&p({paths:e.paths,scroll:e.scroll})}else n.jHueNotify.error(s.error)})}l.prototype.showHdfsLeaf=p;var c=[];if("/"!=t.options.initialPath){for(var u,f=/\//g;null!=(u=f.exec(t.options.initialPath));)c.push(t.options.initialPath.substr(0,u.index));c.push(t.options.initialPath)}t.options.isS3&&(c.shift(),c[0]="s3a://"),p({paths:c})},l.prototype.setOptions=function(e){this.options=n.extend({},d,e)},n.fn[r]=function(e){return this.each(function(){n.data(this,"plugin_"+r)||n.data(this,"plugin_"+r,new l(this,e))})},n[r]=function(e){"undefined"!=typeof console&&console.warn("$(elem).jHueHdfsTree() is a preferred call method."),n(e.element).jHueHdfsTree(e)}},2:
/*!*********************************************************************!*\
  !*** multi ./desktop/core/src/desktop/js/apps/notebook/notebook.js ***!
  \*********************************************************************/
/*! no static exports found */function(e,t,s){e.exports=s(/*! ./desktop/core/src/desktop/js/apps/notebook/notebook.js */"./desktop/core/src/desktop/js/apps/notebook/notebook.js")}});
//# sourceMappingURL=notebook-bundle-678f24deba1e052d3c21.js.map