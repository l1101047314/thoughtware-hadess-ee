(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{881:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return L}));r(159);var n=r(63),o=(r(343),r(346)),a=(r(239),r(122)),i=(r(238),r(173)),c=r(0),u=r.n(c),l=r(89);Object(l.a)('.repository-add {\n  padding: var(--tiklab-padding-item);\n  overflow: auto;\n  height: calc(100vh - 50px);\n  min-width: 1080px;\n}\n.repository-add .repository-add-width {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.repository-add .add-top {\n  padding-top: 20px;\n}\n.repository-add .ant-modal-header {\n  display: none;\n}\n.repository-add .project-type-col {\n  padding: var(--tiklab-padding-item);\n}\n.repository-add .title {\n  font-weight: bold;\n  font-size: 16px;\n}\n.repository-add .repository-type {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  grid-row-gap: 10px;\n  margin-top: 5px;\n}\n.repository-add .repository-type .type-border {\n  border-style: solid;\n  border-color: #DCDCDC;\n  border-width: 1px;\n  width: 100px;\n  padding: 12px 0;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.repository-add .repository-type .type-opt {\n  color: #0063FF;\n  border-color: #0063FF;\n}\n.repository-add .repository-type .type-text {\n  text-align: center;\n}\n.repository-add .repository-group {\n  display: flex;\n  justify-content: space-between;\n}\n.repository-add .repository-group .group-bord {\n  border-style: solid;\n  border-color: #DCDCDC;\n  border-width: 1px;\n  width: 40%;\n  height: 150px;\n  overflow: auto;\n}\n.repository-add .repository-group .cut-repository.hover {\n  background-color: #EBECF0;\n  cursor: pointer;\n}\n.repository-add .repository-group .opt-color {\n  background-color: #DCDCDC;\n}\n.repository-add .repository-group .opt-text {\n  padding: 5px;\n}\n.repository-add .repository-group .icon-style {\n  font-size: 20px;\n  cursor: pointer;\n  color: #999999;\n  margin-top: 30px;\n}\n.repository-add .name-nav {\n  margin-bottom: 15px;\n}\n.repository-add .error-text {\n  color: #ff0000;\n}\n.repository-add .add-power {\n  display: flex;\n}\n.repository-add .add-power .repository-power-item {\n  width: 260px;\n  background: #ffffff;\n  padding: 10px;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n}\n.repository-add .add-power .repository-power-item .power-item {\n  display: flex;\n  justify-content: space-between;\n}\n.repository-add .add-power .repository-power-item .power-title {\n  font-size: 16px;\n}\n.repository-add .add-power .repository-power-item .power-desc {\n  padding-top: 20px;\n}\n.repository-add .add-power .power-not {\n  margin-left: 60px;\n}\n.repository-add .add-power .repository-power-select {\n  border: 2px solid var(--tiklab-blue) !important;\n}\n\n.add-table-nav {\n  display: flex;\n  margin-bottom: 10px;\n}\n.add-table-nav::after {\n  display: inline-block;\n  margin-right: 4px;\n  padding-left: 2px;\n  padding-top: 3px;\n  color: #ff4d4f;\n  font-size: 14px;\n  font-family: SimSun, sans-serif;\n  line-height: 1;\n  content: "*";\n}\n\n.add-table-proxy {\n  display: flex;\n  margin-bottom: 10px;\n}\n.add-table-proxy-text {\n  color: #999999;\n  margin-left: 10px;\n}');var s=r(890),p=r(891),d=r(6),f=r(424),y=r(24),m=r(171),h=r(469),v=r(373),g=r(423);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){return(w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */x=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var a=t&&t.prototype instanceof d?t:d,i=Object.create(a.prototype),c=new S(o||[]);return n(i,"_invoke",{value:k(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p={};function d(){}function f(){}function y(){}var m={};u(m,a,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(L([])));v&&v!==t&&r.call(v,a)&&(m=v);var g=y.prototype=d.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,c){var u=s(e[o],e,a);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==b(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function k(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=N(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function N(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=y,n(g,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:f,configurable:!0}),f.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},w(E.prototype),u(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(g),u(g,c,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}function E(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function k(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){E(a,n,o,i,c,"next",e)}function c(e){E(a,n,o,i,c,"throw",e)}i(void 0)}))}}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O=i.default.TextArea,S={labelCol:{span:6}},L=Object(y.o)(Object(m.inject)("repositoryStore")(Object(m.observer)((function(e){var t=N(a.default.useForm(),1)[0],r=e.match.params,l=e.repositoryStore,y=l.createRepository,m=l.createRepositoryMaven,b=l.repositoryAllList,E=l.findAllRepository,j=l.findLocalAndRemoteRepository,L=l.createRepositoryGroup,C=N(Object(c.useState)("Maven"),2),P=C[0],G=C[1],I=N(Object(c.useState)([]),2);I[0],I[1];var F=N(Object(c.useState)([]),2),_=F[0],T=F[1],A=N(Object(c.useState)(null),2),D=A[0],R=A[1],M=N(Object(c.useState)("https://repo1.maven.org/maven2"),2),U=M[0],z=M[1],H=N(Object(c.useState)(null),2),B=H[0],J=H[1],V=N(Object(c.useState)([]),2),Y=V[0],$=V[1],q=N(Object(c.useState)({}),2),K=q[0],Q=q[1],W=N(Object(c.useState)("public"),2);W[0],W[1];var X=N(Object(c.useState)("Release"),2),Z=X[0],ee=X[1];Object(c.useEffect)(k(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(P);case 2:return e.next=4,E();case 4:case"end":return e.stop()}}),e)}))),[]);var te=function(){var e=k(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(t.toLowerCase()).then((function(e){0===e.code&&T(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=k(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!=K&&K.key||t.validateFields().then(function(){var e=k(x().mark((function e(t){var n,o;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:t.name,type:P,repositoryType:r.type,description:t.description,createUser:Object(d.getUser)().userId,repositoryUrl:Object(d.getUser)().tenant?Object(d.getUser)().tenant+"/"+t.name:t.name,storage:{id:t.storage}},e.next=3,y(n);case 3:if(0!==(o=e.sent).code){e.next=19;break}e.t0=r.type,e.next="remote"===e.t0?8:"group"===e.t0?11:"local"===e.t0?14:17;break;case 8:return e.next=10,oe(o.data);case 10:return e.abrupt("break",17);case 11:return e.next=13,ne(o.data);case 13:return e.abrupt("break",17);case 14:return e.next=16,m({repository:{id:o.data},version:Z});case 16:return e.abrupt("break",17);case 17:return e.next=19,pe();case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=k(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Y.map((function(e){L({repositoryGroup:{id:t},repository:{id:e.id}})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=k(x().mark((function e(t){var r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={repository:{id:t,agencyName:"Maven Central"},agencyUrl:U},e.next=3,f.a.createRepositoryRemoteProxy(r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=k(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="Maven"===e.t0?3:"Npm"===e.t0?5:7;break;case 3:return z("https://repo1.maven.org/maven2"),e.abrupt("break",9);case 5:return z(" https://registry.npmjs.org"),e.abrupt("break",9);case 7:return z(null),e.abrupt("break",9);case 9:return G(t),$([]),e.next=13,te(t);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=k(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=k(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D&&(T(_.filter((function(e){return(null==D?void 0:D.id)!==e.id}))),$(Y.concat(D)),R(null));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=k(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=k(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B&&(T(_.concat(B)),$(Y.filter((function(e){return(null==B?void 0:B.id)!==e.id}))),J(null));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=k(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target.value&&/^((([Hh][Tt])|(Ff))[Tt][Pp][Ss]?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/.test(t.target.value)?Q({key:"agency",value:"请输入正确地址格式"}):Q(null),z(t.target.value);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var t=k(x().mark((function t(){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.history.push("/index/repository");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return u.a.createElement("div",{className:"repository-add "},u.a.createElement("div",{className:"repository-add-width"},u.a.createElement(v.a,{className:"add-title",firstItem:"新建".concat(r.type,"仓库"),goBack:function(){e.history.go(-1)}}),u.a.createElement("div",{className:"add-top"},u.a.createElement(a.default,w({},S,{form:t,onFinish:re,layout:"vertical"}),u.a.createElement(a.default.Item,{label:"制品仓库",name:"type"},u.a.createElement("div",{className:"repository-type"},u.a.createElement("div",{className:"type-border ".concat("Maven"===P&&" type-opt "),onClick:function(){return ae("Maven")}},u.a.createElement(g.a,{type:"maven",width:40,height:40}),u.a.createElement("div",{className:"type-text"},"Maven")),u.a.createElement("div",{className:"type-border ".concat("Npm"===P&&" type-opt"),onClick:function(){return ae("Npm")}},u.a.createElement(g.a,{type:"npm",width:40,height:40}),u.a.createElement("div",{className:"type-text"},"Npm")),u.a.createElement("div",{className:"type-border ".concat("Docker"===P&&" type-opt"),onClick:function(){return ae("Docker")}},u.a.createElement(g.a,{type:"docker",width:40,height:40}),u.a.createElement("div",{className:"type-text"},"Docker")),u.a.createElement("div",{className:"type-border ".concat("Generic"===P&&" type-opt"),onClick:function(){return ae("Generic")}},u.a.createElement(g.a,{type:"generic",width:40,height:40}),u.a.createElement("div",{className:"type-text"},"Generic")),u.a.createElement("div",{className:"type-border ".concat("PyPI"===P&&" type-opt"),onClick:function(){return ae("PyPI")}},u.a.createElement(g.a,{type:"pypi",width:40,height:40}),u.a.createElement("div",{className:"type-text"},"PyPI")),u.a.createElement("div",{className:"type-border ".concat("HeIm"===P&&" type-opt"),onClick:function(){return ae("HeIm")}},u.a.createElement(g.a,{type:"helm",width:40,height:40}),u.a.createElement("div",{className:"type-text"},"HeIm")),u.a.createElement("div",{className:"type-border ".concat("NuGet"===P&&" type-opt"),onClick:function(){return ae("NuGet")}},u.a.createElement(g.a,{type:"nuget",width:40,height:40}),u.a.createElement("div",{className:"type-text"},"NuGet")),u.a.createElement("div",{className:"type-border ".concat("Go"===P&&" type-opt"),onClick:function(){return ae("Go")}},u.a.createElement(g.a,{type:"go",width:40,height:40}),u.a.createElement("div",{className:"type-text"},"Go")))),u.a.createElement(a.default.Item,{label:"制品库名称",name:"name",placeholder:"请输入制品库名称",rules:[{required:!0,message:"请输入名称"},{max:30,message:"请输入1~31位以内的名称"},Object(h.a)("名称","appoint"),function(e){return e.getFieldValue,{validator:function(e,t){var r=[];return b&&(r=b&&b.map((function(e){return e.name}))),r.includes(t)?Promise.reject("名称已经存在"):Promise.resolve()}}}]},u.a.createElement(i.default,{style:{background:"#fff"}})),"local"===r.type&&"Maven"===P&&u.a.createElement(a.default.Item,{label:"版本控制",name:"version"},u.a.createElement(o.default,{defaultValue:"Release",options:[{value:"Release",label:"Release"},{value:"Snapshot",label:"Snapshot"},{value:"Mixed",label:"Mixed"}],onChange:ee})),"remote"===r.type&&u.a.createElement("div",{className:"name-nav"},u.a.createElement("div",{className:"add-table-proxy"},u.a.createElement("div",null,"代理地址"),u.a.createElement("div",{className:"add-table-proxy-text"},"(创建后也可以在该制品库设置里面配置, 默认",U," )")),u.a.createElement(i.default,{placeholder:"请输入代理地址",value:U,onChange:se,className:"agency"===(null==K?void 0:K.key)&&"border-red-500"}),"agency"===(null==K?void 0:K.key)&&u.a.createElement("div",{className:"error-text"},null==K?void 0:K.value)),"group"===r.type&&u.a.createElement(a.default.Item,{label:"组合选择",name:"name"},u.a.createElement("div",{className:"repository-group"},u.a.createElement("div",{className:"group-bord"},null==_?void 0:_.map((function(e){return u.a.createElement("div",{className:"".concat((null==D?void 0:D.id)===e.id&&" opt-color"," cut-repository"),onClick:function(){return ie(e)}},u.a.createElement("div",{className:"opt-text "},e.name+" ("+e.repositoryType+")"))}))),u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(s.a,{className:"icon-style",onClick:ce})),u.a.createElement(p.a,{className:"icon-style ",onClick:le})),u.a.createElement("div",{className:"group-bord"},null==Y?void 0:Y.map((function(e){return u.a.createElement("div",{className:"".concat((null==B?void 0:B.id)===e.id&&" opt-color"," cut-repository"),onClick:function(){return ue(e)}},u.a.createElement("div",{className:"opt-text"},e.name+" ("+e.repositoryType+")"))}))))),u.a.createElement(a.default.Item,{label:"描述",name:"description"},u.a.createElement(O,{rows:4})),u.a.createElement(n.default,{style:{margin:"0 8px 0 0"},onClick:pe},"取消"),u.a.createElement(n.default,{type:"primary",htmlType:"submit"},"提交")))))}))))}}]);