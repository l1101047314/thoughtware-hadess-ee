(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{849:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return N}));r(135);var n=r(60),o=(r(167),r(116)),i=(r(230),r(140)),a=(r(249),r(231)),c=(r(99),r(81)),u=r(0),s=r.n(u),l=r(98);Object(l.a)(".repository-info {\n  max-width: var(--page-max-width);\n  margin: 0 auto;\n}\n.repository-info .info-title {\n  font-weight: bold;\n  font-size: 16px;\n  margin-top: 20px;\n}\n.repository-info .info-table {\n  margin-top: 15px;\n}\n.repository-info .delete-style {\n  border-top: 1px solid #E8E8E8;\n  margin-top: 25px;\n}\n.repository-info .delete-text {\n  color: red;\n  margin-top: 4px;\n}\n.repository-info .repository-type-table {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #DCDCDC;\n  width: 100px;\n  padding: 15px 0;\n  border-radius: 5px;\n}\n.repository-info .repository-type-table .type-text {\n  flex-direction: row;\n  text-align: center;\n}\n.repository-info .repository-group {\n  display: flex;\n  justify-content: space-between;\n}\n.repository-info .repository-group .group-bord {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #DCDCDC;\n  width: 40%;\n  height: 150px;\n  overflow: auto;\n}\n.repository-info .repository-group .cut-repository.hover {\n  background-color: #EBECF0;\n  cursor: pointer;\n}\n.repository-info .repository-group .opt-color {\n  background-color: #DCDCDC;\n}\n.repository-info .repository-group .opt-text {\n  padding: 5px;\n}\n.repository-info .repository-group .icon-style {\n  font-size: 20px;\n  cursor: pointer;\n  color: #999999;\n  margin-top: 30px;\n}\n.repository-info .click-cursor {\n  cursor: pointer;\n}");var p=r(179),f=r(855),d=r(856),y=r(600);r(8);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(){return(v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===h(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */w=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new S(o||[]);return n(a,"_invoke",{value:O(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p={};function f(){}function d(){}function y(){}var v={};u(v,i,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(N([])));g&&g!==e&&r.call(g,i)&&(v=g);var b=y.prototype=f.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e((function(o,a){!function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==h(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(n,i,o,a)}))}return o=o?o.then(a,a):a()}})}function O(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=y,n(b,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:d,configurable:!0}),d.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function x(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function E(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){x(i,n,o,a,c,"next",t)}function c(t){x(i,n,o,a,c,"throw",t)}a(void 0)}))}}function O(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var k=c.default.TextArea,L=a.default.confirm;i.default.Option;var S={labelCol:{span:6}},N=function(t){var e=t.match.params,r=O(o.default.useForm(),1)[0],i=O(Object(u.useState)([]),2);i[0];var a=i[1],c=O(Object(u.useState)(null),2),l=c[0],h=c[1],m=O(Object(u.useState)([]),2),b=m[0],x=m[1],j=O(Object(u.useState)(),2),N=j[0],P=j[1],T=O(Object(u.useState)(null),2),C=T[0],D=T[1],_=O(Object(u.useState)([]),2),F=_[0],G=_[1];Object(u.useEffect)(E(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:return t.next=4,I();case 4:case"end":return t.stop()}}),t)}))),[e.id]);var I=function(){var t=E(w().mark((function t(){var e;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.findAllStorage();case 2:0===(e=t.sent).code&&a(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=E(w().mark((function t(){var n,o;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("id",e.id),t.next=4,y.a.findRepository(n);case 4:if(0!==(o=t.sent).code){t.next=12;break}return r.setFieldsValue({type:o.agencyUrl,name:o.data.name,description:o.data.description}),h(o.data),t.next=10,R(o.data.type,e.id);case 10:return t.next=12,U(e.id);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=E(w().mark((function t(e,r){var n,o;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("repositoryType",e),n.append("repositoryGroupId",r),t.next=5,y.a.findUnRelevanceRepository(n);case 5:0===(o=t.sent).code&&x(o.data);case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),U=function(){var t=E(w().mark((function t(e){var r,n;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("repositoryGroupId",e),t.next=4,y.a.findRepositoryByGroup(r);case 4:0===(n=t.sent).code&&G(n.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=E(w().mark((function t(e){var r;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={repositoryGroupId:e,repositoryList:F},t.next=3,y.a.compileRepositoryGroup(r);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=E(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L({title:"注意：下面的制品也会被删除",icon:s.a.createElement(p.a,null),content:"",okText:"确认",okType:"danger",cancelText:"取消",onOk:function(){J(e.id)},onCancel:function(){}});case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=function(){var e=E(w().mark((function e(r){var n;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("id",r),e.next=4,y.a.deleteRepository(n);case 4:0===e.sent.code&&t.history.push("/index/repository");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var t=E(w().mark((function t(e){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),q=function(){var t=E(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C&&(x(b.concat(C)),G(F.filter((function(t){return(null==C?void 0:C.id)!==t.id}))),D(null));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),M=function(){var t=E(w().mark((function t(e){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),V=function(){var t=E(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l&&(x(b.filter((function(t){return(null==N?void 0:N.id)!==t.id}))),G(F.concat(N)),P(null));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return s.a.createElement("div",{className:"repository-info"},s.a.createElement("div",{className:"info-title"},"制品库信息"),s.a.createElement("div",{className:"info-table"},s.a.createElement(o.default,v({},S,{form:r,onFinish:function(){r.validateFields().then(function(){var t=E(w().mark((function t(e){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.updateRepository(g(g({},e),{},{id:l.id,repositoryUrl:l.repositoryUrl,repositoryType:l.repositoryType,storage:{id:e.storage},type:null==l?void 0:l.type}));case 2:if(0!==t.sent.code){t.next=9;break}if("group"!==(null==l?void 0:l.repositoryType)){t.next=7;break}return t.next=7,z(l.id);case 7:return t.next=9,A();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},layout:"vertical"}),s.a.createElement(o.default.Item,{label:"制品仓库",name:"type"},s.a.createElement("div",{className:"repository-type-table"},s.a.createElement("div",{className:"type-text"},null==l?void 0:l.type))),s.a.createElement(o.default.Item,{label:"仓库名称",name:"name",rules:[{required:!0,message:"仓库名称必填"}]},s.a.createElement("div",null,null==l?void 0:l.repositoryUrl)),"group"===(null==l?void 0:l.repositoryType)&&s.a.createElement(o.default.Item,{label:"组合选择",name:"name"},s.a.createElement("div",{className:"repository-group"},s.a.createElement("div",{className:"group-bord"},null==b?void 0:b.map((function(t){return s.a.createElement("div",{className:"".concat((null==N?void 0:N.id)===t.id&&" opt-color"," cut-repository click-cursor"),onClick:function(){return M(t)}},s.a.createElement("div",{className:"opt-text "},t.name+" ("+t.repositoryType+")"))}))),s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(f.a,{className:"icon-style",onClick:V})),s.a.createElement(d.a,{className:"icon-style ",onClick:q})),s.a.createElement("div",{className:"group-bord"},null==F?void 0:F.map((function(t){return s.a.createElement("div",{className:"".concat((null==C?void 0:C.id)===t.id&&" opt-color","  cut-repository click-cursor"),onClick:function(){return Y(t)}},s.a.createElement("div",{className:"opt-text "},t.name+" ("+t.repositoryType+")"))}))))),s.a.createElement(o.default.Item,{label:"描述",name:"description"},s.a.createElement(k,{rows:4})),s.a.createElement(n.default,{type:"primary",htmlType:"submit"},"提交")),s.a.createElement("div",{className:"delete-style "},s.a.createElement("div",{className:"info-title "},"删除制品库"),s.a.createElement("div",{className:"delete-text"},"此操作无法恢复！请慎重操作！"),s.a.createElement(n.default,{type:"primary",htmlType:"submit",onClick:B,className:"mt-2"},"删除"))))}}}]);