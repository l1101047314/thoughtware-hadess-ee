(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{930:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return F}));r(395);var n=r(394),o=r(0),a=r.n(o),i=r(100);Object(i.a)(".proxy .proxy-head-up {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.proxy .proxy-table-style {\n  margin-top: 10px;\n}\n.proxy .proxy-icon-style {\n  display: flex;\n  gap: 10px;\n  cursor: pointer;\n}\n.proxy .proxy-icon-no {\n  color: #cccccc;\n}");var c=r(401),l=r(111),u=r(483),s=r(424),f=r(3),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"},p=r(15),h=function(e,t){return o.createElement(p.a,Object(f.a)(Object(f.a)({},e),{},{ref:t,icon:y}))};h.displayName="StopOutlined";var d=o.forwardRef(h),m=r(396),v=(r(251),r(184)),g=(r(253),r(172)),b=(r(252),r(114)),w=r(415);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(){return(O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */E=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof y?t:y,i=Object.create(a.prototype),c=new L(o||[]);return n(i,"_invoke",{value:O(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function y(){}function p(){}function h(){}var d={};l(d,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(N([])));v&&v!==t&&r.call(v,a)&&(d=v);var g=h.prototype=y.prototype=Object.create(d);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==x(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function O(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===x(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function N(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){L(a,n,o,i,c,"next",e)}function c(e){L(a,n,o,i,c,"throw",e)}i(void 0)}))}}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var I={labelCol:{span:6},wrapperCol:{span:25}},_=function(e){var t=k(b.default.useForm(),1)[0],r=e.editVisible,n=e.setEditVisible,i=e.compileType,c=e.remoteProxy,l=e.createRemoteProxy,u=e.updateRemoteProxy,s=e.setRemoteProxy,f=k(Object(o.useState)("maven"),2),y=f[0],p=f[1];Object(o.useEffect)((function(){c&&t.setFieldsValue({agencyType:c.agencyType,agencyUrl:c.agencyUrl,agencyName:c.agencyName,userName:c.userName,password:c.password})}),[c,r]);var h=function(){var e=N(E().mark((function e(){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.validateFields().then(function(){var e=N(E().mark((function e(t){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c?u(S(S({},c),{},{agencyType:t.agencyType,agencyName:t.agencyName,agencyUrl:t.agencyUrl})).then((function(e){0===e.code&&d()})):l(S(S({},t),{},{agencyType:y,type:1})).then((function(e){0===e.code&&d()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){t.resetFields(),s(null),n(!1)},x=a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{onClick:d,title:"取消",isMar:!0}),a.a.createElement(m.a,{onClick:h,title:"确定",type:"primary"}));return a.a.createElement(w.a,{open:r,closable:!1,footer:x,destroyOnClose:!0,width:500,title:"add"===i?"添加来源":"修改来源"},a.a.createElement(b.default,O({},I,{form:t,preserve:!1,layout:"vertical"}),a.a.createElement(b.default.Item,{name:"agencyType",label:"代理类型"},a.a.createElement(g.default,{defaultValue:"maven",options:[{value:"maven",label:"maven"},{value:"npm",label:"npm"},{value:"docker",label:"docker"}],onChange:function(e){p(e)}})),a.a.createElement(b.default.Item,{name:"agencyName",label:"代理来源",rules:[{required:!0,message:"名称必填"}]},a.a.createElement(v.default,{placeholder:"请输入来源名称"})),a.a.createElement(b.default.Item,{name:"agencyUrl",label:"代理地址",rules:[{required:!0,message:"地址必填"}]},a.a.createElement(v.default,{placeholder:"请输入来源地址"}))))},A=r(457);function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var F=Object(l.observer)((function(e){var t=u.a.createRemoteProxy,r=u.a.updateRemoteProxy,i=u.a.findRemoteProxyList,l=u.a.deleteRemoteProxy,f=u.a.fresh,y=C(Object(o.useState)([]),2),p=y[0],h=y[1],v=C(Object(o.useState)(!1),2),g=v[0],b=v[1],w=C(Object(o.useState)("add"),2),x=w[0],O=w[1],E=C(Object(o.useState)(null),2),j=E[0],S=E[1];Object(o.useEffect)((function(){i({}).then((function(e){0===e.code&&h(e.data)}))}),[f]);var P=[{title:"代理来源",dataIndex:"agencyName",key:"agencyName",width:"20%",ellipsis:!0},{title:"地址",dataIndex:"agencyUrl",key:"agencyUrl",width:"50%",ellipsis:!0},{title:"类型",dataIndex:"agencyType",key:"agencyType",width:"20%",ellipsis:!0},{title:"操作",dataIndex:"action",key:"action",width:"5%",render:function(e,t){return 1===t.type?a.a.createElement("div",{className:"proxy-icon-style"},a.a.createElement(s.default,{className:"actions-se",onClick:function(){return L(t)}}),a.a.createElement(A.a,{value:t,deleteData:l,title:"确认删除"})):a.a.createElement(d,{className:"proxy-icon-no"})}}],L=function(e){O("update"),b(!0),S(e)};return a.a.createElement("div",{className:"proxy hadess-setting-large-width"},a.a.createElement("div",{className:"proxy-head-up"},a.a.createElement(c.a,{firstItem:"代理管理"}),a.a.createElement(m.a,{type:"primary",title:"添加代理",onClick:function(){return b(!0)}})),a.a.createElement("div",{className:"proxy-table-style"},a.a.createElement(n.default,{bordered:!1,columns:P,dataSource:p,rowKey:function(e){return e.id},pagination:!1})),a.a.createElement(_,{editVisible:g,setEditVisible:b,compileType:x,createRemoteProxy:t,updateRemoteProxy:r,remoteProxy:j,setRemoteProxy:S}))}))}}]);