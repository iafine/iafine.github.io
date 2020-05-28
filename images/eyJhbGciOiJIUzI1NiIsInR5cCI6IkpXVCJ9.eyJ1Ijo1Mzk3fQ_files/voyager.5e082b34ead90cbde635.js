/*! For license information please see voyager.5e082b34ead90cbde635.js.LICENSE */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=57)}([,,function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},,,,,,,,,,function(e,t){function n(e,t,n,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function u(e){n(a,i,o,u,s,"next",e)}function s(e){n(a,i,o,u,s,"throw",e)}u(void 0)}))}}},function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";window.__Voyager=n(58)},function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(59)),o=r(n(60)),a=r(n(64)),u=r(n(12)),s=r(n(68)),c=r(n(69)),f=r(n(70)),l=r(n(71)),d=r(n(72)),v=r(n(73)),p=n(74),g=n(76),h=n(80),y=n(81),m=n(82),_=function(){function e(t){(0,s.default)(this,e),Object.defineProperty(this,b,{value:w});var n=Object.assign({},{needPageView:!0},t);this.initDefaultParams(),!0===n.needPageView&&this.pageViewProcess(n.pageViewParams||{}),this.rensendFailedData()}var t,n,r;return(0,c.default)(e,[{key:"pageViewProcess",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.callPageViewEvent("begin",t),/iPhone|iPad|iTouch/i.test(navigator.userAgent)&&window.addEventListener("unload",(function(){e.callPageViewEvent("end",t)})),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&e.callPageViewEvent("end",t),"visible"===document.visibilityState&&e.callPageViewEvent("begin",t)}))}},{key:"callPageViewEvent",value:function(e,t){window.MaiMai_Native;if("begin"===e){var n=this.initDurableEvent("page_view",t);this.isInApp()||(0,f.default)(this,b)[b](n.events[0])}else if("end"===e){var r=this.getCurrentPageViewEvent();if(!r.length)throw new Error("get current page view event failed!");this.isInApp()||(0,f.default)(this,b)[b](r[0].events[1])}}},{key:"initDurableEvent",value:function(t,n){var r=(0,h.uuid)(),i={event_id:r,event_name:t,event_type:"begin",params:n},o={event_id:r,event_name:t,events:[i,Object.assign({},i,{begin_event_id:r,event_id:(0,h.uuid)(),event_type:"end"})]};return e.currentDurableEvents.push(o),o}},{key:"getCurrentPageViewEvent",value:function(){return e.currentDurableEvents.reverse().filter((function(e){return"page_view"===e.event_name}))}},{key:"purifierParams",value:function(e){var t=["event_name","app","event_type","event_id","event_key","begin_event_id","duration","timestamp","event_source","uid","feature","platform","imei","idfa","udid","android_id","gaid","mac_address","brand","model","os_version","network","carrier","qilu","lang","country","battery","app_version_name","app_version_code","edition","mm_app_id","install_id","push_enabled","channel","media_source","agency","store","campaign","launch_id","raw_session_id","time_since_raw_session_begin","session_id","adcode","page","from_page","src_page","browser_id","service","process_id","service_ip","params","sdk_extra"],n={};for(var r in e)t.includes(r)?console.warn("Parameter ".concat(r," is a reserved field, please change the field")):n[r]=e[r];return n}},{key:"trackEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"!=typeof e||""===e)throw new Error("eventName is neccessary while call trackEvent fn ");void 0!==n.event_type&&"single"!==n.event_type||""===t||console.warn("%cparameter event_key will not work when event_type=single!!!","background: #222; font-size: 24px; color: yellow");var r=this.purifierParams(n),i={event_name:e,event_key:t,params:r},o=window,a=o.MaiMai_Native;if(!this.isInApp())return(0,f.default)(this,b)[b](i);try{a&&a.log_v2_track_event&&a.log_v2_track_event(e,JSON.stringify(r))}catch(e){throw new Error(e)}}},{key:"beginTrackEvent",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.isInApp()){var i={event_name:e,event_key:t,params:n,end_with_raw_session:r};return(0,f.default)(this,b)[b](i)}MaiMai_Native&&MaiMai_Native.log_v2_begin_event&&MaiMai_Native.log_v2_begin_event(e,t,JSON.stringify(n),r)}},{key:"endTrackEvent",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!this.isInApp()){var r={event_name:e,event_key:t,params:n};return(0,f.default)(this,b)[b](r)}MaiMai_Native&&MaiMai_Native.log_v2_end_event(e,t,JSON.stringify(n))}},{key:"checkBodySize",value:function(e){return(0,m.jsonSize)(e)<=8388608}},{key:"getK",value:function(){return this.getUid()||this.getBrowserId()}},{key:"getUid",value:function(){try{var e=window.share_data.auth_info.u;return-1===e?"":e.toString()}catch(e){return""}}},{key:"getBrowserId",value:function(){return v.default.get("_buuid")||(0,h.uuid)()}},{key:"getAfData",value:function(){var e=d.default.parse(location.search.substr(1)).regfr;if(!e)return{};var t=e.split("_"),n=/sem_(baidu|sogou|shenm)/i.exec(e);if(n&&t.length>4){var r="smsearch_int";return"baidu"===n[1]?r="baidusearch_int":"sogou"===n[1]&&(r="sogousearch"),{agency:t[t.length-4],campaign:t[t.length-2],media_source:r}}return{}}},{key:"isInApp",value:function(){return navigator.userAgent.match(/MaiMai/i)}},{key:"getCountry",value:(r=(0,u.default)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.request)("https://ipinfo.io",{method:"GET"});case 3:return t=e.sent,n=t.country,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("cannot get country info throughout ipinfo.io",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),function(){return r.apply(this,arguments)})},{key:"send",value:(n=(0,u.default)(regeneratorRuntime.mark((function t(n){var r,i,o,u,s,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,y.xor)(JSON.stringify(n),"42"),i=this.getK(),o=(0,g.md5Hash)(r,i),u=this.parseWebSDKConfig(),t.next=6,(0,p.request)(e.url+"app=maimai&".concat(u,"k=").concat(i,"&s=").concat(o),{body:r});case 6:return!1===(s=t.sent)&&((c=new Image).src="/sdk/voyager/send?app=maimai&".concat(u,"k=").concat(i,"&s=").concat(o,"&body=").concat(encodeURIComponent(r)),c.onerror=function(){var e=localStorage.getItem("sendFailedEvents");if(e)try{var t=JSON.parse(e);t.events=[].concat((0,a.default)(t.events),(0,a.default)(n.events)),localStorage.setItem("sendFailedEvents",JSON.stringify(t))}catch(e){throw new Error("save cacheData failed!")}else localStorage.setItem("sendFailedEvents",JSON.stringify(n))}),t.abrupt("return",s);case 9:case"end":return t.stop()}}),t,this)}))),function(e){return n.apply(this,arguments)})},{key:"rensendFailedData",value:(t=(0,u.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("sendFailedEvents"))){e.next=10;break}e.prev=2,this.send(JSON.parse(t)),localStorage.removeItem("sendFailedEvents"),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(2),new Error("parse localStorage sendFailedEvents failed "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[2,7]])}))),function(){return t.apply(this,arguments)})},{key:"parseWebSDKConfig",value:function(){var e="",t=d.default.parse(decodeURIComponent(location.search.substr(1)));if(t&&t.web_sdk_config)try{var n=JSON.parse(t.web_sdk_config);"string"!=typeof n&&Object.entries(n).forEach((function(t){var n=(0,o.default)(t,2),r=n[0],i=n[1];e+="".concat(r,"=").concat(i,"&")}))}catch(e){throw new Error("failed to parse query.web_sdk_config",e)}return e}},{key:"initDefaultParams",value:function(){e.defaultParams=Object.assign({},e.defaultParams,{page:this.getPageParams()})}},{key:"getPageParams",value:function(){return"undefined"!=typeof window?window.location.href:""}}]),e}(),b=(0,l.default)("track");_.url="https://track.mm.taou.com/v2/track?",_.eventList=[],_.currentDurableEvents=[],_.defaultParams={app:"maimai",lang:"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage),qilu:0,from_page:"undefined"!=typeof document&&document.referrer,page:"",event_source:"web",mm_app_id:0,duration:0};var w=function(){var e=(0,u.default)(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isInApp()){e.next=2;break}return e.abrupt("return");case 2:if((n=Object.assign({},t,this.getAfData(),_.defaultParams)).event_id=n.event_id||(0,h.uuid)(),n.timestamp=(new Date).getTime(),n.event_type=n.event_type||"single",void 0===n.params||"object"!==(0,i.default)(n.params)){e.next=15;break}e.prev=7,delete(n=Object.assign({},n.params,n)).params,e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(7),new Error("stringify opts.params ",n.params," failed",e.t0);case 15:if("end"===n.event_type&&(r=_.eventList.filter((function(e){return e.event_id===n.begin_event_id})),n.duration=n.timestamp-r[0].timestamp),n.browser_id=this.getBrowserId(),n.uid=this.getUid(),this.checkBodySize(n)){e.next=20;break}throw new Error("request body is larger than 8M!");case 20:return e.next=22,this.send({events:[n]});case 22:return o=e.sent,_.eventList.push(n),e.abrupt("return",o);case 25:case"end":return e.stop()}}),e,this,[[7,12]])})));return function(t){return e.apply(this,arguments)}}(),x=e.exports=_;t.default=x},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){var r=n(61),i=n(62),o=n(63);e.exports=function(e,t){return r(e)||i(e,t)||o()}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,n){var r=n(65),i=n(66),o=n(67);e.exports=function(e){return r(e)||i(e)||o()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){e.exports=function(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}},function(e,t){var n=0;e.exports=function(e){return"__private_"+n+++"_"+e}},function(e,t){e.exports=__Querystring},function(e,t){e.exports=__TinyCookie},function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.request=function(e,t){return a.apply(this,arguments)};var i=r(n(12)),o=n(75);function a(){return(a=(0,i.default)(regeneratorRuntime.mark((function e(t,n){var r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"POST",credentials:"include",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"}},i=Object.assign({},r,n),e.next=4,new Promise((function(e,n){if("undefined"==typeof navigator||!navigator.sendBeacon||"function"!=typeof navigator.sendBeacon||window.location.href.includes("debug=1")||(0,o.isWeixinBrowser)()&&(0,o.isIOS)())return fetch(t,i).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){n(e)}));try{var r=navigator.sendBeacon(t,i.body);e(r)}catch(e){n(e)}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isWeixinBrowser=function(){return"undefined"!=typeof navigator&&void 0!==navigator.userAgent&&/micromessenger/.test(navigator.userAgent.toLowerCase())},t.isIOS=function(){return"undefined"!=typeof navigator&&void 0!==navigator.userAgent&&/iPhone|iPad|iTouch/i.test(navigator.userAgent)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.md5Hash=function(e,t){if("string"!=typeof e)throw new Error("bodyXorResult must be string");if("string"!=typeof t)throw new Error("browserId must be string");return r(i+e+t)};var r=n(77),i="odqwejirnabmxfzl"},function(e,t,n){var r,i,o,a,u;r=n(78),i=n(13).utf8,o=n(79),a=n(13).bin,(u=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?a.stringToBytes(e):i.stringToBytes(e):o(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var n=r.bytesToWords(e),s=8*e.length,c=1732584193,f=-271733879,l=-1732584194,d=271733878,v=0;v<n.length;v++)n[v]=16711935&(n[v]<<8|n[v]>>>24)|4278255360&(n[v]<<24|n[v]>>>8);n[s>>>5]|=128<<s%32,n[14+(s+64>>>9<<4)]=s;var p=u._ff,g=u._gg,h=u._hh,y=u._ii;for(v=0;v<n.length;v+=16){var m=c,_=f,b=l,w=d;c=p(c,f,l,d,n[v+0],7,-680876936),d=p(d,c,f,l,n[v+1],12,-389564586),l=p(l,d,c,f,n[v+2],17,606105819),f=p(f,l,d,c,n[v+3],22,-1044525330),c=p(c,f,l,d,n[v+4],7,-176418897),d=p(d,c,f,l,n[v+5],12,1200080426),l=p(l,d,c,f,n[v+6],17,-1473231341),f=p(f,l,d,c,n[v+7],22,-45705983),c=p(c,f,l,d,n[v+8],7,1770035416),d=p(d,c,f,l,n[v+9],12,-1958414417),l=p(l,d,c,f,n[v+10],17,-42063),f=p(f,l,d,c,n[v+11],22,-1990404162),c=p(c,f,l,d,n[v+12],7,1804603682),d=p(d,c,f,l,n[v+13],12,-40341101),l=p(l,d,c,f,n[v+14],17,-1502002290),c=g(c,f=p(f,l,d,c,n[v+15],22,1236535329),l,d,n[v+1],5,-165796510),d=g(d,c,f,l,n[v+6],9,-1069501632),l=g(l,d,c,f,n[v+11],14,643717713),f=g(f,l,d,c,n[v+0],20,-373897302),c=g(c,f,l,d,n[v+5],5,-701558691),d=g(d,c,f,l,n[v+10],9,38016083),l=g(l,d,c,f,n[v+15],14,-660478335),f=g(f,l,d,c,n[v+4],20,-405537848),c=g(c,f,l,d,n[v+9],5,568446438),d=g(d,c,f,l,n[v+14],9,-1019803690),l=g(l,d,c,f,n[v+3],14,-187363961),f=g(f,l,d,c,n[v+8],20,1163531501),c=g(c,f,l,d,n[v+13],5,-1444681467),d=g(d,c,f,l,n[v+2],9,-51403784),l=g(l,d,c,f,n[v+7],14,1735328473),c=h(c,f=g(f,l,d,c,n[v+12],20,-1926607734),l,d,n[v+5],4,-378558),d=h(d,c,f,l,n[v+8],11,-2022574463),l=h(l,d,c,f,n[v+11],16,1839030562),f=h(f,l,d,c,n[v+14],23,-35309556),c=h(c,f,l,d,n[v+1],4,-1530992060),d=h(d,c,f,l,n[v+4],11,1272893353),l=h(l,d,c,f,n[v+7],16,-155497632),f=h(f,l,d,c,n[v+10],23,-1094730640),c=h(c,f,l,d,n[v+13],4,681279174),d=h(d,c,f,l,n[v+0],11,-358537222),l=h(l,d,c,f,n[v+3],16,-722521979),f=h(f,l,d,c,n[v+6],23,76029189),c=h(c,f,l,d,n[v+9],4,-640364487),d=h(d,c,f,l,n[v+12],11,-421815835),l=h(l,d,c,f,n[v+15],16,530742520),c=y(c,f=h(f,l,d,c,n[v+2],23,-995338651),l,d,n[v+0],6,-198630844),d=y(d,c,f,l,n[v+7],10,1126891415),l=y(l,d,c,f,n[v+14],15,-1416354905),f=y(f,l,d,c,n[v+5],21,-57434055),c=y(c,f,l,d,n[v+12],6,1700485571),d=y(d,c,f,l,n[v+3],10,-1894986606),l=y(l,d,c,f,n[v+10],15,-1051523),f=y(f,l,d,c,n[v+1],21,-2054922799),c=y(c,f,l,d,n[v+8],6,1873313359),d=y(d,c,f,l,n[v+15],10,-30611744),l=y(l,d,c,f,n[v+6],15,-1560198380),f=y(f,l,d,c,n[v+13],21,1309151649),c=y(c,f,l,d,n[v+4],6,-145523070),d=y(d,c,f,l,n[v+11],10,-1120210379),l=y(l,d,c,f,n[v+2],15,718787259),f=y(f,l,d,c,n[v+9],21,-343485551),c=c+m>>>0,f=f+_>>>0,l=l+b>>>0,d=d+w>>>0}return r.endian([c,f,l,d])})._ff=function(e,t,n,r,i,o,a){var u=e+(t&n|~t&r)+(i>>>0)+a;return(u<<o|u>>>32-o)+t},u._gg=function(e,t,n,r,i,o,a){var u=e+(t&r|n&~r)+(i>>>0)+a;return(u<<o|u>>>32-o)+t},u._hh=function(e,t,n,r,i,o,a){var u=e+(t^n^r)+(i>>>0)+a;return(u<<o|u>>>32-o)+t},u._ii=function(e,t,n,r,i,o,a){var u=e+(n^(t|~r))+(i>>>0)+a;return(u<<o|u>>>32-o)+t},u._blocksize=16,u._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(u(e,t));return t&&t.asBytes?n:t&&t.asString?a.bytesToString(n):r.bytesToHex(n)}},function(e,t){var n,r;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],r=0;r<e.length;r+=3)for(var i=e[r]<<16|e[r+1]<<8|e[r+2],o=0;o<4;o++)8*r+6*o<=8*e.length?t.push(n.charAt(i>>>6*(3-o)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],r=0,i=0;r<e.length;i=++r%4)0!=i&&t.push((n.indexOf(e.charAt(r-1))&Math.pow(2,-2*i+8)-1)<<2*i|n.indexOf(e.charAt(r))>>>6-2*i);return t}},e.exports=r},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uuid=function(){var e=Date.now();"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now());return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)})).replace(/-/g,"")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.xor=function(e,t){for(var n="",r=0;r<e.length;r++)n+=String.fromCharCode(e.charCodeAt(r)^t);return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.jsonSize=function(e){try{var t=JSON.stringify(e);return~-encodeURI(t).split(/%..|./).length}catch(e){throw new Error("expected a json",e)}}}]);