(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{922:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return k}));r(423);var n=r(418),o=(r(130),r(60)),a=(r(251),r(184)),i=(r(186),r(59)),c=(r(252),r(114)),l=r(0),u=r.n(l),s=r(137),f=r(6),h=r(105),p=r(90),m=r.p+"images/thoughtware.png",d=r.p+"images/qywechat.jpeg",g=r.p+"images/ldap.jpeg";function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */E=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof g?t:g,i=Object.create(a.prototype),c=new F(n||[]);return o(i,"_invoke",{value:S(e,r,c)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var h="suspendedStart",p="executing",m="completed",d={};function g(){}function v(){}function b(){}var w={};u(w,i,(function(){return this}));var O=Object.getPrototypeOf,j=O&&O(O(T([])));j&&j!==r&&n.call(j,i)&&(w=j);var x=b.prototype=g.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function r(o,a,i,c){var l=f(e[o],e,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==y(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(s).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function S(t,r,n){var o=h;return function(a,i){if(o===p)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=N(c,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=f(t,r,n);if("normal"===u.type){if(o=n.done?m:"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function N(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(y(t)+" is not iterable")}return v.prototype=b,o(x,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:v,configurable:!0}),v.displayName=u(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},L(P.prototype),u(P.prototype,c,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new P(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(x),u(x,l,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}function O(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var L=c.default.Item,P={wrapperCol:{span:24}},S=function(e){var t=e.loginGoRouter,r=e.vaildUserAuthRouter,y=p.b.loginAction,x=Object(h.useHasPointPlugin)("wechatLoginBtn"),S=Object(h.useHasPointPlugin)("ldapLoginBtn"),N=Object(s.a)(),k=N.t,_=(N.i18n,Object(f.urlQuery)(window.location.href)),F=Object(f.getUser)(),T=j(c.default.useForm(),1)[0],I=j(c.default.useForm(),1)[0],A=j(Object(l.useState)("1"),2),G=A[0],z=A[1],B=j(Object(l.useState)(""),2),R=B[0],q=B[1],C=j(Object(l.useState)({}),2),U=C[0],D=C[1],J=j(Object(l.useState)(!1),2),M=J[0],H=J[1],V=function(){return"{}"!==JSON.stringify(U)&&!U.expired};Object(l.useEffect)((function(){Object(p.d)().then((function(e){0===e.code&&D(e.data)}))}),[]),Object(l.useEffect)((function(){if(F.ticket&&Object(p.c)(F.ticket).then((function(e){if(0===e.code&&("{}"===JSON.stringify(_)||_.redirect))return $(e.data,"init")})),_.demo)return T.setFieldsValue({account:"1"===_.demo?"admin":"thoughtware",password:"123456"}),void localStorage.setItem("demo",_.demo);var e=localStorage.getItem("demo");e?T.setFieldsValue({account:"1"===e?"admin":"thoughtware",password:"123456"}):_.redirect?localStorage.setItem("redirect",_.redirect):(localStorage.removeItem("redirect"),localStorage.removeItem("demo"))}),[_]);var Y=function(){var e,t=(e=E().mark((function e(t){var r,n;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={account:t.account,password:t.password,dirId:"1"},e.next=3,y(r);case 3:if(0===(n=e.sent).code){e.next=14;break}e.t0=n.code,e.next=5e4===e.t0?8:10;break;case 8:return q(k("loginError.accountError")),e.abrupt("break",12);case 10:return q(n.msg),e.abrupt("break",12);case 12:e.next=16;break;case 14:q(""),$(n.data);case 16:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){O(a,n,o,i,c,"next",e)}function c(e){O(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}(),$=function(t,n){Object(p.f)(t.userId).then((function(o){return 0===o.code&&o.data?Q(t.ticket):"init"!==n?e.history.push(r):void 0}))},Q=function(r){if(_.redirect){var n=Object(f.parseUserSearchParams)({ticket:r});return/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(_.redirect)?window.location.href="".concat(_.redirect,"?").concat(n):e.history.push(_.redirect)}return t?e.history.push(t):e.history.push("/")},K=function(){H(!1),I.resetFields(null)},W=function(){H(!0),q(null),T.resetFields(null)},X=function(e){Object(p.e)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)).then((function(e){0===e.code?(i.default.info("成功"),K()):i.default.info(e.msg)}))};return u.a.createElement("div",{className:"login"},u.a.createElement("div",{className:"login-header"},u.a.createElement("div",{className:"login-logo"},u.a.createElement("img",{src:m,alt:"logo",width:55,height:55}),u.a.createElement("div",null,u.a.createElement("span",{className:"thought"},"thought"),u.a.createElement("span",null,"ware"))),u.a.createElement("div",{className:"login-main"},u.a.createElement("div",{className:"login-main_title"},u.a.createElement("h5",null,M?"重置密码":"1"===G?"登录你的账号":"登录你的LDAP账号")),R&&u.a.createElement("div",{className:"login-error"},u.a.createElement("span",null,R)),u.a.createElement("div",{className:"login-main_form"},M?u.a.createElement(c.default,v({name:"horizontal_login"},P,{onFinish:X,form:I}),u.a.createElement(L,{name:"name",rules:[{required:!0,message:"用户名不能为空"}]},u.a.createElement(a.default,{size:"large",placeholder:"用户名"})),u.a.createElement(L,{name:"email",rules:[{required:!0,message:"手机号或邮箱不能为空"}]},u.a.createElement(a.default,{size:"large",placeholder:"手机号或邮箱"})),u.a.createElement(L,{name:"newPassword",rules:[{required:!0,message:"新密码不能为空"}]},u.a.createElement(a.default.Password,{size:"large",placeholder:"新密码"})),u.a.createElement(L,{shouldUpdate:!0},(function(){return u.a.createElement(o.default,{size:"large",type:"primary",htmlType:"submit",style:{width:"100%"}},"确定")})),u.a.createElement("div",{className:"login-tip-nextstep"},u.a.createElement("span",{onClick:K},"返回上一步"))):"1"===G?u.a.createElement(c.default,v({name:"horizontal_login"},P,{onFinish:Y,form:T}),u.a.createElement(L,{name:"account",rules:[{required:!0,message:k("loginForm.usernameRequired")}]},u.a.createElement(a.default,{size:"large",placeholder:k("loginForm.usernamePlaceholder")})),u.a.createElement(L,{name:"password",rules:[{required:!0,message:k("loginForm.passwordRequired")}]},u.a.createElement(a.default.Password,{size:"large",placeholder:k("loginForm.passwordPlaceholder")})),u.a.createElement(L,{shouldUpdate:!0},(function(){return u.a.createElement(o.default,{size:"large",type:"primary",htmlType:"submit",style:{width:"100%"}},k("loginForm.LoginBtn"))})),u.a.createElement("div",null,u.a.createElement("div",{className:"login-tip-status"},u.a.createElement("div",null,u.a.createElement(n.default,null,"记住登录状态")),u.a.createElement("div",{onClick:W},"忘记密码")),u.a.createElement("div",{className:"login-tip-otherText"},"其他登录方式"),u.a.createElement("div",{className:"login-tip-disableBtn"},V()&&x?u.a.createElement(h.RemoteComponent,{point:"wechatLoginBtn",isModalType:!0,extraProps:{setLoginError:q}}):u.a.createElement("div",{className:"disableBtn"},u.a.createElement("img",{src:d,alt:"企业微信"})),V()&&S?u.a.createElement(h.RemoteComponent,{point:"ldapLoginBtn",isModalType:!0,extraProps:{setUseType:z}}):u.a.createElement("div",{className:"disableBtn"},u.a.createElement("img",{src:g,alt:"企业微信"}))))):u.a.createElement(h.RemoteComponent,{point:"ldapLogin",isModalType:!0,extraProps:{setUseType:z,setLoginError:q,loginGoRouter:t,history:e.history,versionInfo:U,useTranslation:s.a}})))),u.a.createElement("div",{className:"login-footer"},"© 2020-2023 thoughtware.cn 版权所有 ICP证：苏B2-20200101"))};function N(){return(N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var k=function(e){return u.a.createElement(S,N({loginGoRouter:"/"},e))}}}]);