(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{835:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ke}));n(90);var r=n(91),a=(n(74),n(73)),o=(n(71),n(72)),i=(n(230),n(140)),l=(n(135),n(60)),c=(n(57),n(53)),u=(n(92),n(64)),s=n(0),f=n.n(s),m=n(129),d=n(185),p=n(118),y=n(99),b=n(860),g=n(128),v=n(101),O=function(e){var t=e.pageCurrent,n=e.changPage,r=e.page;return f.a.createElement("div",{className:"message-page"},f.a.createElement("span",{className:"".concat(1===t?"message-page-ban":"message-page-allow"),onClick:function(){return 1===t?null:n(t-1)}},f.a.createElement(v.default,null)),f.a.createElement("span",{className:"message-page-current"},t),f.a.createElement("span",null," / ",r&&r.total),t!==r.total&&r.total?f.a.createElement("span",{className:"message-page-allow",onClick:function(){return n(t+1)}},f.a.createElement(g.default,null)):f.a.createElement("span",{className:"message-page-ban"},f.a.createElement(g.default,null)))},S=(n(184),n(110)),j=(n(167),n(115)),h=n(857),E=n(858),w=(n(181),n(93)),P=(n(235),n(124)),k=(n(144),n(76)),I=(n(141),n(142)),A=n(165),C=(n(98),n(81)),x=n(859);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===T(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=function(e){var t=e.visible,n=e.onClose,i=e.prefixApi,l=e.onSelectUsers,c=e.users,u=e.messageNoticeStore.findUserListPageAction,d=Object(m.a)().t,p=[{title:"昵称",dataIndex:"nickname"},{title:"账号",dataIndex:"name"},{title:d("orga-table.email"),dataIndex:"email"}],y=_(Object(s.useState)([]),2),b=y[0],g=y[1],v=_(Object(s.useState)([]),2),S=v[0],j=v[1],h=_(Object(s.useState)({}),2),w=h[0],P=h[1],k=_(Object(s.useState)({pageSize:6,currentPage:1}),1)[0],I=_(Object(s.useState)({pageParam:k}),2),A=I[0],T=I[1],N=_(Object(s.useState)([]),2),z=N[0],M=N[1];Object(s.useEffect)((function(){if(t){j(c);var e=c.map((function(e){return e.id}));g(e)}}),[c,t]),Object(s.useEffect)((function(){L()}),[A]);var L=function(){u(A,i).then((function(e){e.code||(P({total:e.data.totalPage}),M(e.data.dataList))}))},D=function(){T({pageParam:k}),g([]),j([]),n()},U=f.a.createElement(f.a.Fragment,null,f.a.createElement(E.a,{onClick:D,title:"取消",isMar:!0}),f.a.createElement(E.a,{onClick:function(){T({pageParam:k}),l(S),n()},title:"确定",type:"primary"}));return f.a.createElement(f.a.Fragment,null,f.a.createElement(x.a,{visible:t,title:"添加用户",destroyOnClose:!0,okText:d("tiklab-actions.save"),cancelText:d("tiklab-actions.close"),footer:U,onCancel:D},f.a.createElement(o.default,null,f.a.createElement(r.default,{span:12},f.a.createElement(C.default,{placeholder:"输入昵称查询",onPressEnter:function(e){T(R(R({},A),{},{nickname:e.target.value,pageParam:k}))}}))),f.a.createElement(a.default,{columns:p,dataSource:z,rowSelection:{selectedRowKeys:b,preserveSelectedRowKeys:!0,onChange:function(e,t){g(e),j(t)}},rowKey:function(e){return e.id},pagination:!1}),w&&w.total>1&&f.a.createElement(O,{pageCurrent:A.pageParam.currentPage,changPage:function(e){var t=R(R({},A),{},{pageParam:{pageSize:6,currentPage:e}});T(t)},page:w})))};function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===D(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=function(e){var t=e.visible,n=e.prefixApi,r=e.onClose,o=e.onSelectRoles,i=e.roles,l=e.messageNoticeStore.findSystemRolePageService,c=Object(m.a)().t,u=B(Object(s.useState)([]),2),d=u[0],p=u[1],y=B(Object(s.useState)([]),2),b=y[0],g=y[1],v=B(Object(s.useState)([]),2),S=v[0],j=v[1],h=B(Object(s.useState)({pageParam:{pageSize:13,currentPage:1}}),2),w=h[0],P=h[1],k=B(Object(s.useState)({}),2),I=k[0],A=k[1];Object(s.useEffect)((function(){if(t){j(i);var e=i.map((function(e){return e.id}));g(e)}}),[i,t]),Object(s.useEffect)((function(){N()}),[]);var C=[{title:"角色名称",dataIndex:"name"},{title:"类型",dataIndex:"group",render:function(e){return T(e)}}],T=function(e){switch(e){case"system":return"内置";case"custom":default:return c("privilege-role.custom")}},N=function(){l(w,n).then((function(e){e.code||(A({total:e.data.totalPage}),p(e.data.dataList))}))},R=function(){g([]),j([]),r()},z=f.a.createElement(f.a.Fragment,null,f.a.createElement(E.a,{onClick:R,title:"取消",isMar:!0}),f.a.createElement(E.a,{onClick:function(){o(S),r()},title:"确定",type:"primary"}));return f.a.createElement(x.a,{visible:t,title:"添加角色",destroyOnClose:!0,okText:c("tiklab-actions.save"),cancelText:c("tiklab-actions.close"),footer:z,onCancel:R},f.a.createElement(a.default,{columns:C,dataSource:d,rowSelection:{selectedRowKeys:b,onChange:function(e,t){j(t),g(e)},preserveSelectedRowKeys:!0},rowKey:function(e){return e.id},pagination:!1}),I&&I.total>1&&f.a.createElement(O,{pageCurrent:w.pageParam.currentPage,changPage:function(e){P(K(K({},w),{},{pageParam:{pageSize:6,currentPage:e}}))},page:I}))},J=["children"];function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=function(e){var t=e.visible,n=e.prefixApi,r=e.onClose,o=e.onSelectOrgas,i=e.messageNoticeStore,l=i.findOrgaTreeAction,c=i.findUserDirAction,u=Object(m.a)().t,d=G(Object(s.useState)([]),2),p=d[0],y=d[1],b=G(Object(s.useState)([]),2),g=b[0],v=b[1],O=G(Object(s.useState)([]),2),S=O[0],j=O[1],h=G(Object(s.useState)([]),2),w=h[0],P=h[1],k=[{title:"组织名称",dataIndex:"orgaName"},{title:"用户目录",dataIndex:"userType",render:function(e){var t=p.findIndex((function(t){return t.id===e}));return t>-1?p[t].name:"--"}}];Object(s.useEffect)((function(){A(),I()}),[]);var I=function(){c(n).then((function(e){e.code||y(e.data)}))},A=function(){l({},n).then((function(e){if(!e.code){var t=e.data.map((function(e){e.children;return V(e,J)}));v(t)}}))},C=function(){j([]),P([]),r()},T=f.a.createElement(f.a.Fragment,null,f.a.createElement(E.a,{onClick:C,title:"取消",isMar:!0}),f.a.createElement(E.a,{onClick:function(){o(w),r()},title:"确定",type:"primary"}));return f.a.createElement(x.a,{visible:t,title:"添加部门",destroyOnClose:!0,okText:u("tiklab-actions.save"),cancelText:u("tiklab-actions.close"),footer:T,onCancel:C},f.a.createElement("div",{className:"tiklab_message_notice_orga_item"},f.a.createElement(a.default,{columns:k,dataSource:g,rowSelection:{selectedRowKeys:S,onChange:function(e,t){P(t),j(e)},preserveSelectedRowKeys:!0},rowKey:function(e){return e.orgaId},pagination:!1})))},W=["children"];function X(e){return function(e){if(Array.isArray(e))return te(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ee(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||ee(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=function(e){var t=e.value,n=void 0===t?null:t,i=e.prefixApi,l=e.onChange,d=e.messageNoticeStore,b=d.findOrgaByIdsAction,g=d.findRoleByIdsAction,v=d.findUserByIdsAction,O=(Object(m.a)().t,Object(s.useRef)(null)),S=Z(Object(s.useState)(!1),2),j=S[0],h=S[1],C=Z(Object(s.useState)([]),2),x=C[0],T=C[1],N=Z(Object(s.useState)(!1),2),R=N[0],z=N[1],_=Z(Object(s.useState)([]),2),M=_[0],D=_[1],U=Z(Object(s.useState)(!1),2),K=U[0],F=U[1],B=Z(Object(s.useState)([]),2),q=B[0],J=B[1],V=[{title:"名称",dataIndex:["name"],width:"40%",render:function(e,t){return t.nickname?f.a.createElement(c.default,null,f.a.createElement(c.default,null,t.nickname),1===t.type&&f.a.createElement(I.default,null,"管理员用户")):[0,1].includes(t.defaultRole)?f.a.createElement(c.default,null,t.name,1===t.businessType&&f.a.createElement(I.default,null,"管理员")):t.orgaId?f.a.createElement(c.default,null,t.orgaName):"--"}},{title:"类别",dataIndex:["type"],width:"50%",render:function(e,t){return t.nickname?"用户":[0,1].includes(t.defaultRole)?"角色":t.orgaId?"部门":"--"}},{title:"操作",dataIndex:["action"],width:"10%",render:function(e,t){return t.nickname?f.a.createElement(u.default,{title:"删除"},f.a.createElement(p.default,{onClick:function(){return ee(t.id)},style:{fontSize:"var(--tiklab-icon-size-16)"}})):[0,1].includes(t.defaultRole)?f.a.createElement(u.default,{title:"删除"},f.a.createElement(p.default,{onClick:function(){return ne(t.id)},style:{fontSize:"var(--tiklab-icon-size-16)"}})):t.orgaId?f.a.createElement(u.default,{title:"删除"},f.a.createElement(p.default,{onClick:function(){return ae(t.orgaId)},style:{fontSize:"var(--tiklab-icon-size-16)"}})):void 0}}];Object(s.useEffect)((function(){n&&!O.current&&(O.current=!0,n.systemRole.length>0&&te(n.systemRole),n.users.length>0&&H(n.users),n.orgas.length>0&&re(n.orgas))}),[n]);var G=function(e){null==l||l(e)},H=function(e){v(e,i).then((function(e){e.code||(T(e.data),G(n))}))},ee=function(e){var t=x.filter((function(t){return t.id!==e}));T(t);var r=t.map((function(e){return e.id}));G({systemRole:n.systemRole,users:r,orgas:n.orgas})},te=function(e){g(e,i).then((function(e){e.code||(D(e.data),G(n))}))},ne=function(e){var t=M.filter((function(t){return t.id!==e}));D(t);var r=t.map((function(e){return e.id}));G({systemRole:r,users:n.users,orgas:n.orgas})},re=function(e){b(e,i).then((function(e){if(!e.code){var t=e.data.map((function(e){e.children;return Y(e,W)}));J(t),G(n)}}))},ae=function(e){var t=q.filter((function(t){return t.orgaId!==e}));J(t);var r=t.map((function(e){return e.orgaId}));G({systemRole:n.systemRole,users:n.users,orgas:r})},oe=f.a.createElement(k.default,{onClick:function(e){switch(e.key){case"1":h(!0);break;case"2":z(!0);break;default:F(!0)}}},f.a.createElement(k.default.Item,{key:"1"},f.a.createElement(y.default,{style:{fontSize:"var(--tiklab-icon-size-16)"}}),"新增成员"),f.a.createElement(k.default.Item,{key:"2"},f.a.createElement(y.default,{style:{fontSize:"var(--tiklab-icon-size-16)"}}),"新增角色"),f.a.createElement(k.default.Item,{key:"3"},f.a.createElement(y.default,{style:{fontSize:"var(--tiklab-icon-size-16)"}}),"新增部门"));return f.a.createElement("div",{className:"tiklab_message_notice_object"},f.a.createElement(o.default,{justify:"space-between"},f.a.createElement("label",{className:"custom-form-item-required"},"通知对象"),f.a.createElement(P.default,{overlay:oe},f.a.createElement("div",null,f.a.createElement(E.a,{type:"primary",icon:f.a.createElement(A.a,null)},"新增通知对象")))),f.a.createElement(o.default,{gutter:[16,16],style:{marginTop:8}},f.a.createElement(r.default,{span:24},f.a.createElement(a.default,{columns:V,dataSource:[].concat(X(x),X(q),X(M)),rowKey:function(e){return e.nickname?"user_"+e.id:[0,1].includes(e.defaultRole)?"role_"+e.id:e.orgaId?"orga_"+e.orgaId:e.id},pagination:!1,locale:{emptyText:f.a.createElement(w.default,{description:"无通知对象"})}}))),f.a.createElement(L,{prefixApi:i,visible:j,onClose:function(){h(!1)},onSelectUsers:function(e){T(e);var t=e.map((function(e){return e.id}));G({systemRole:n.systemRole,users:t,orgas:n.orgas})},users:x,messageNoticeStore:d}),f.a.createElement($,{prefixApi:i,visible:R,onClose:function(){z(!1)},onSelectRoles:function(e){D(e);var t=e.map((function(e){return e.id}));G({systemRole:t,users:n.users,orgas:n.orgas})},roles:M,messageNoticeStore:d}),f.a.createElement(Q,{prefixApi:i,visible:K,onClose:function(){F(!1)},onSelectOrgas:function(e){J(e);var t=e.map((function(e){return e.orgaId}));G({systemRole:n.systemRole,users:n.users,orgas:t})},roles:q,messageNoticeStore:d}))};function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var oe=function(e){var t=e.onClose,n=e.initParam,r=e.data,a=e.messageTypeList,o=void 0===a?[]:a,l=e.messageSendTypeList,c=void 0===l?[]:l,u=e.bgroup,d=e.prefixApi,p=e.isBase,y=e.messageNoticeStore,b=y.createMessageNoticeAction,g=y.updateMessageNoticeAction,v=(Object(m.a)().t,re(j.default.useForm(),1)[0]),O=[{click:t,breadcrumbName:r?r.messageType.name:"新增"}];Object(s.useEffect)((function(){r?v.setFieldsValue({messageType:r.messageType,messageSendTypeId:r.messageSendTypeId,noticeObject:{systemRole:r.systemRole||[],users:r.users||[],orgas:r.orgas||[]}}):v.setFieldsValue({noticeObject:{systemRole:[],users:[],orgas:[]}})}),[r]);return f.a.createElement("main",{className:"tiklab_message_notice_main"},f.a.createElement(h.a,{routes:O}),f.a.createElement(j.default,{form:v,layout:"vertical"},f.a.createElement(j.default.Item,{name:["messageType","id"],label:"通知事件",rules:[{required:!0,message:"通知事件"}],wrapperCol:{span:8}},f.a.createElement(i.default,{placeholder:"选择通知事件",disabled:!p,bordered:!!p,showArrow:!!p},o.map((function(e){return f.a.createElement(i.default.Option,{value:e.id,key:e.id},e.name)})))),f.a.createElement(j.default.Item,{name:["messageSendTypeId"],label:"通知方式",rules:[{required:!0,message:"通知方式"}]},f.a.createElement(S.default.Group,{options:c.map((function(e){return{label:e.name,value:e.id}})).filter((function(e){return"dingding"!==e.value}))})),f.a.createElement(j.default.Item,{label:"",name:"noticeObject",rules:[{required:!0,message:"通知方式"},{validator:function(e,t){return t.systemRole.length>0||t.users.length>0||t.orgas.length>0?Promise.resolve():Promise.reject(new Error("请选择通知角色、通知成员、通知部门一项或者多项!"))}}]},f.a.createElement(ne,{bgroup:u,prefixApi:d,messageNoticeStore:y})),f.a.createElement("div",{style:{paddingTop:15}},f.a.createElement(E.a,{type:"primary",isMar:!0,onClick:function(){v.validateFields().then((function(e){var a={bgroup:u,type:1};Object.keys(e).map((function(t){switch(t){case"messageSendTypeId":a[t]=e[t].join(",");break;case"noticeObject":Object.keys(e[t]).forEach((function(n){var r=e[t][n]||[];switch(n){case"users":a[n]={id:r,type:6};break;case"systemRole":a[n]={id:r,type:7};break;case"orgas":a[n]={id:r,type:8}}}));break;default:a[t]=e[t]}return a})),r&&r.id?(a.bgroup=r.bgroup,a.type=r.type,a.id=r.id,g(a).then((function(e){e.code||(t(),n())}))):b(a).then((function(e){e.code||(t(),n())}))}))}},r?"保存":"创建"),f.a.createElement(E.a,{onClick:t},"取消"))))},ie=n(48),le=n(174),ce=n(736),ue=n(737),se=n(738),fe=n(739),me=n(740);function de(e){return(de="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var pe=["messageTypeId"],ye=["messageSendTypeId"];function be(){return(be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ge(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){Se(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Se(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==de(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==de(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===de(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function je(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return he(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return he(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ee={email:ce.a,site:ue.a,dingding:se.a,qywechat:fe.a,app:me.a},we=Object(ie.inject)(le.a)(Object(ie.observer)((function(e){var t=e.bgroup,n=void 0===t?"eas":t,g=e.isBase,v=void 0!==g&&g,S=e.prefixApi,j=void 0===S?null:S,h=e.messageNoticeStore,E=h.getAllMessageTypeAction,w=h.getMessageSendTypeAllAction,P=h.deleteMessageNoticeAction,k=h.findMessageNoticeConnectOrgaListAction,I=h.findMessageNoticeConnectRoleListAction,A=h.findMessageNoticeConnectUserListAction,C=h.findMessageNoticePageAction,x=Object(m.a)().t,T=je(Object(s.useState)({}),2),N=T[0],R=T[1],z=je(Object(s.useState)({pageSize:13,currentPage:1}),1)[0],_=je(Object(s.useState)({pageParam:z}),2),M=_[0],L=_[1],D=je(Object(s.useState)([]),2),U=D[0],K=D[1],F=je(Object(s.useState)(!1),2),B=F[0],q=F[1],$=je(Object(s.useState)([]),2),J=$[0],V=$[1],G=je(Object(s.useState)([]),2),H=G[0],Q=G[1],W=je(Object(s.useState)(null),2),X=W[0],Y=W[1],Z=[{title:"事件",dataIndex:["messageType","name"],render:function(e,t){return f.a.createElement("span",{onClick:function(){return ie(t)},className:"tiklab_message_notice_name"},e)}},{title:"标识",dataIndex:["id"]},{title:"通知方式",dataIndex:["messageSendTypeId"],render:function(e,t){return ae(e)}},{title:x("message-table-action"),dataIndex:"action",key:"action",width:"10%",render:function(e,t){return f.a.createElement(c.default,{size:"middle"},f.a.createElement(u.default,{title:"编辑"},f.a.createElement(d.default,{onClick:function(){return ie(t)},style:{fontSize:"var(--tiklab-icon-size-16)"}})),v&&f.a.createElement(u.default,{title:"删除"},f.a.createElement(p.default,{onClick:function(){return le(t.id)},style:{fontSize:"var(--tiklab-icon-size-16)"}})))}}];Object(s.useEffect)((function(){ee(M)}),[M]),Object(s.useEffect)((function(){te(),ne()}),[]);var ee=function(e){C(Oe({bgroup:n,type:1},e),j).then((function(e){e.code||(K(e.data.dataList),R({total:e.data.totalPage}))}))},te=function(){E({bgroup:n},j).then((function(e){e.code||V(e.data)}))},ne=function(){w(j).then((function(e){e.code||Q(e.data)}))},re=function(e){switch(e){case"app":return"App通知";case"dingding":return"钉钉通知";case"email":return"邮箱通知";case"qywechat":return"企业微信通知";case"site":return"站内信通知"}},ae=function(e){var t=e.split(",");return f.a.createElement(c.default,null,t.map((function(e){if("dingding"!==e)return f.a.createElement(c.default,{key:e},f.a.createElement(u.default,{title:re(e)},f.a.createElement("img",{src:Ee[e],alt:re(e),style:{width:20,height:20}})))})))},ie=function(e){var t=Oe(Oe({},e),{},{messageSendTypeId:e.messageSendTypeId.split(",")}),n={messageNoticeId:e.id},r={};Promise.all([A(n,j),I(n,j),k(n,j)]).then((function(e){var n=je(e.filter((function(e){return 0===e.code})).map((function(e){return e.data})),3),a=n[0],o=n[1],i=n[2];r.users=a.map((function(e){return e.user.id})),r.systemRole=o.map((function(e){return e.role.id})),r.orgas=i.map((function(e){return e.orga.orgaId})),Y(Oe(Oe({},t),r)),q(!0)})).catch((function(e){Y(t),q(!0)}))},le=function(e){P(e,j).then((function(e){if(!e.code){var t=Oe(Oe({},M),{},{pageParam:z});L(t)}}))};return f.a.createElement("div",{className:"tiklab_message_notice"},B?f.a.createElement(oe,be({},e,{visible:B,onClose:function(){q(!1),Y(null)},initParam:function(){L({pageParam:z})},messageTypeList:J,messageSendTypeList:H,messageNoticeStore:h,bgroup:n,data:X,isBase:v,prefixApi:j})):f.a.createElement("main",{className:"tiklab_message_notice_main"},f.a.createElement(b.a,{title:"消息通知方案",style:{paddingLeft:8}},v&&f.a.createElement(l.default,{onClick:function(){return q(!0)},type:"primary",icon:f.a.createElement(y.default,{style:{fontSize:"var(--tiklab-icon-size-16)"}})},"新增")),f.a.createElement(o.default,{justify:"space-between",style:{paddingBottom:16,paddingLeft:8}},f.a.createElement(c.default,null,f.a.createElement(i.default,{placeholder:"消息类型",style:{width:240},allowClear:!0,onSelect:function(e){var t=Oe(Oe({},M),{},{messageTypeId:e,pageParam:z});L(t)},onClear:function(){M.messageTypeId;var e=Oe(Oe({},ge(M,pe)),{},{pageParam:z});L(e)}},J.map((function(e){return f.a.createElement(i.default.Option,{value:e.id,key:e.id},e.name)}))),f.a.createElement(i.default,{placeholder:"发送方式",style:{width:240},allowClear:!0,onSelect:function(e){var t=Oe(Oe({},M),{},{messageSendTypeId:e,pageParam:z});L(t)},onClear:function(){M.messageSendTypeId;var e=Oe(Oe({},ge(M,ye)),{},{pageParam:z});L(e)}},H.map((function(e){if("dingding"!==e.id)return f.a.createElement(i.default.Option,{value:e.id,key:e.id},e.name)}))))),f.a.createElement(o.default,null,f.a.createElement(r.default,{span:24},f.a.createElement(a.default,{dataSource:U,columns:Z,rowKey:function(e){return e.id},tableLayout:"fixed",pagination:!1}),N&&N.total>1&&f.a.createElement(O,{pageCurrent:M.pageParam.currentPage,changPage:function(e){var t=Oe(Oe({},M),{},{pageParam:{pageSize:13,currentPage:e}});L(t)},page:N})))))})));function Pe(){return(Pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ke=function(e){return f.a.createElement(we,Pe({},e,{bgroup:"xpack"}))}}}]);