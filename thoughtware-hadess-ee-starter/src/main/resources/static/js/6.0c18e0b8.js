(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{921:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));n(397);var r=n(398),a=(n(399),n(400)),i=(n(395),n(394)),o=(n(255),n(188)),l=(n(112),n(58)),u=(n(186),n(59)),c=n(0),s=n.n(c),f=n(6),d=n(428),m=n(391),p=n(956),y=n(183),b=(n(251),n(184)),h=n(131),v=n(392),g=n(176),w=n(117),S=function(e){var t=e.currentPage,n=e.changPage,r=e.page,a=r.totalPage,i=void 0===a?1:a,o=r.totalRecord,l=void 0===o?1:o;return i>1&&s.a.createElement("div",{className:"licence-page"},s.a.createElement("div",{className:"".concat(1===t?"licence-page-ban":"licence-page-allow"),onClick:function(){return 1===t?null:n(t-1)}},s.a.createElement(g.default,null)),s.a.createElement("div",{className:"licence-page-current"},t),s.a.createElement("div",{className:"licence-page-line"}," / "),s.a.createElement("div",null,i),s.a.createElement("div",{className:"".concat(t===i?"licence-page-ban":"licence-page-allow"),onClick:function(){return t===i?null:n(t+1)}},s.a.createElement(w.default,null)),s.a.createElement("div",{className:"licence-page-record"},"  共",l,"条 "))};function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||I(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===O(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||I(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=function(e){var t=e.visible,n=e.handleOk,r=e.handleCancel,a=e.allSelectIds,o=e.selectedRowKeys,u=e.setSelectedRowKeys,d=e.userDir,p=x(Object(c.useState)([]),2),y=p[0],g=p[1],w=x(Object(c.useState)({pageSize:6,currentPage:1}),1)[0],O=x(Object(c.useState)(1),2),j=O[0],P=O[1],I=x(Object(c.useState)({}),2),k=I[0],C=I[1],N=x(Object(c.useState)({pageParam:w}),2),R=N[0],T=N[1],U=x(Object(c.useState)([]),2),z=U[0],D=U[1];Object(c.useEffect)((function(){d?D(d):f.Axios.post("/user/userdir/findAllList").then((function(e){e.code||D(e.data)}))}),[d]),Object(c.useEffect)((function(){K(A({},R))}),[R]);var K=function(e){f.Axios.post("/user/user/findUserPage",e).then((function(e){e.code||(C({totalRecord:e.data.totalRecord,totalPage:e.data.totalPage}),g(e.data.dataList))}))},_=function(e){return a&&a.some((function(t){return t===e.id}))},M={selectedRowKeys:o,onSelectAll:function(e,t,n){var r=n.map((function(e){return e&&e.id})).filter((function(e){return void 0!==e}));if(e){var a=Array.from(new Set([].concat(E(r),E(o))));u(a)}else{var i=o.filter((function(e){return!r.includes(e)}));u(i)}},onSelect:function(e){return Y(e)},getCheckboxProps:function(e){return{disabled:_(e)}}},Y=function(e){_(e)||(o.indexOf(e.id)>=0?o.splice(o.indexOf(e.id),1):o.push(e.id),u(E(o)))},$=[{title:"姓名",dataIndex:"nickname",key:"nickname",width:"30%",ellipsis:!0,render:function(e,t){return s.a.createElement(l.default,null,s.a.createElement(m.a,{userInfo:t}),e)}},{title:"手机号",dataIndex:"phone",key:"phone",width:"25%",ellipsis:!0,render:function(e){return e||"--"}},{title:"邮箱",dataIndex:"email",key:"email",width:"25%",ellipsis:!0,render:function(e){return e||"--"}},{title:"用户目录",dataIndex:"dirId",key:"dirId",width:"15%",ellipsis:!0,render:function(e){var t=z.findIndex((function(t){return t.id===e}));return t>-1?z[t].name:"--"}}];return s.a.createElement(v.a,{title:"选择用户",visible:t,onCancel:r,onOk:n,width:800,destroyOnClose:!0},s.a.createElement("div",{style:{padding:"15px"}},s.a.createElement(b.default,{placeholder:"搜索用户名、手机号、邮箱",style:{width:240},onPressEnter:function(e){return function(e){var t=A(A({},R),{},{nickname:e.target.value,pageParam:w});T(t)}(e)},prefix:s.a.createElement(h.default,{style:{fontSize:"var(--thoughtware-icon-size-16)"}})}),s.a.createElement("div",{style:{width:"100%"}},s.a.createElement(i.default,{columns:$,dataSource:y,rowSelection:M,onRow:function(e){return{onClick:function(){return Y(e)}}},rowKey:function(e){return e.id},pagination:!1}),s.a.createElement(S,{currentPage:j,changPage:function(e){P(e);var t=A(A({},R),{},{pageParam:{pageSize:6,currentPage:e}});T(t)},page:k}))))};function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=function(e){var t=e.visible,n=e.setVisible,r=e.authUser,a=e.findAllProductAuth,i=N(Object(c.useState)([]),2),o=i[0],l=i[1],u=N(Object(c.useState)([]),2),d=u[0],m=u[1];Object(c.useEffect)((function(){t&&(m(r&&r.map((function(e){var t;return null==e||null===(t=e.user)||void 0===t?void 0:t.id}))),l(r&&r.map((function(e){var t;return null==e||null===(t=e.user)||void 0===t?void 0:t.id}))))}),[t]);var p=function(){n(!1),l([]),m([])};return s.a.createElement(C,{visible:t,allSelectIds:d,selectedRowKeys:o,setSelectedRowKeys:l,handleOk:function(){var e=o.filter((function(e){return!d.includes(e)})),t=e&&e.map((function(e){return f.Axios.post("/appAuthorization/createProductAuthUser",{user:{id:e}})}));Promise.all(t).then((function(e){setTimeout((function(){a(),p()}),200)}))},handleCancel:p})},U=n(393),z=n.n(U);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=function(e){var t=D(Object(c.useState)([]),2),n=t[0],b=t[1],h=D(Object(c.useState)(!1),2),v=h[0],g=h[1];Object(c.useEffect)((function(){w()}),[]);var w=function(){f.Axios.post("/appAuthorization/findAllProductAuth").then((function(e){0===e.code&&b(e.data)}))},S=[{title:"姓名",dataIndex:["user","nickname"],key:["user","nickname"],width:"30%",ellipsis:!0,render:function(e,t){return s.a.createElement(l.default,null,s.a.createElement(m.a,{userInfo:t})," ",e)}},{title:"过期时间",dataIndex:"expiresTime",key:"expiresTime",width:"30%",ellipsis:!0,render:function(e){return e?z()(e).format("YYYY-MM-DD HH:mm:ss"):"不限"}},{title:"状态",dataIndex:"state",key:"state",width:"25%",ellipsis:!0,render:function(e){return 1===e?s.a.createElement("span",{style:{color:"var(--thoughtware-blue)"}},"已激活"):s.a.createElement("span",{style:{color:"#ff0000"}},"未激活")}},{title:"操作",render:function(e,t){if(1===t.type)return null;var n=t.id,r=t.user;return s.a.createElement(s.a.Fragment,null,2===t.state&&s.a.createElement(d.PrivilegeButton,{code:"version_open"},s.a.createElement("span",{className:"thoughtware_productauth-action",onClick:function(){return e=r.id,void f.Axios.post("/appAuthorization/createProductAuthUser",{user:{id:e}}).then((function(e){0===e.code?w():u.default.info("失败")}));var e}},"激活")),s.a.createElement(d.PrivilegeButton,{code:"version_delete"},s.a.createElement(o.default,{placement:"topRight",title:"你确定移除吗",onConfirm:function(){return r.id,e=n,(t=new FormData).append("id",e),void f.Axios.post("/appAuthorization/deleteProductAuthUser",t).then((function(e){0===e.code?w():u.default.error(e.msg)}));var e,t},okText:"确定",cancelText:"取消"},s.a.createElement("span",{className:"thoughtware_productauth-action"},"移除"))))}}];return s.a.createElement(r.default,{className:"thoughtware_productauth"},s.a.createElement(a.default,{sm:{span:24},xs:{span:24},md:{span:24},lg:{span:"18",offset:"3"},xl:{span:"18",offset:"3"},className:"thoughtware_productauth_container"},s.a.createElement(p.a,{firstItem:"应用访问权限"},s.a.createElement("div",null,s.a.createElement(y.a,{title:"添加用户",type:"primary",onClick:function(){return g(!0)}}),s.a.createElement(T,{visible:v,setVisible:g,authUser:n,findAllProductAuth:w}))),s.a.createElement(i.default,{dataSource:n,columns:S,pagination:!1,rowKey:function(e){return e.id}})))},M=function(e){return s.a.createElement(_,e)}}}]);