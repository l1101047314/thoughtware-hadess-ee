(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{907:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));n(390);var r=n(389),a=(n(187),n(100)),l=(n(253),n(188)),o=n(0),i=n.n(o),c=n(397),u=n(391),s=n(403),d=n(474),f=n(377),m=n(99);Object(m.a)(".scanHole .scanHole-up {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.scanHole .scanHole-table {\n  padding-top: var(--xpack-table-top);\n}");n(196);var p=n(136),y=(n(252),n(186)),b=(n(255),n(174)),h=n(74),v=n(135),g=n(680);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===w(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object(m.a)(".hole-add .hole-add-style {\n  display: flex;\n}\n.hole-add .hole-add-style .hole-add-title {\n  width: 100px;\n  color: #999999;\n}\n\n.hole-add-top {\n  margin-top: 10px;\n}\n.hole-add-top .hole-add-search {\n  display: flex;\n  gap: 20px;\n}\n\n.hole-table-top {\n  margin-top: 20px;\n}");var x=[{key:1,value:"严重漏洞"},{key:2,value:"高危漏洞"},{key:3,value:"中危漏洞"},{key:4,value:"低危漏洞"}],I=function(e){var t=e.visible,n=e.setVisible;d.a.findNotScanHolePage;var a=E(Object(o.useState)([]),2);a[0];var l=a[1],c=E(Object(o.useState)([]),2),u=c[0];c[1];var s=E(Object(o.useState)(""),2);s[0];var f=s[1],m=E(Object(o.useState)(""),2);m[0];var w=m[1],O=[{title:"漏洞名称",dataIndex:"holeName",key:"holeName",width:"40%",ellipsis:!0,render:function(e,t){return i.a.createElement("div",{className:"text-color",onClick:function(){return k()}},e)}},{title:"漏洞编号",dataIndex:"cweId",key:"cweId",width:"20%",ellipsis:!0},{title:"产品",dataIndex:"product",key:"product",width:"30%",ellipsis:!0},{title:"漏洞等级",dataIndex:"holeLeve",key:"holeLeve",width:"10%",ellipsis:!0}],j=function(){n(!1)},k=function(e){},I={onChange:function(e,t){l(e)}},N=function(e){f(e)};return i.a.createElement(p.default,{title:"添加漏洞",placement:"right",closable:!1,width:"60%",className:"library-drawer",onClose:j,visible:t,extra:i.a.createElement(h.default,{style:{cursor:"pointer"},onClick:j})},i.a.createElement("div",{className:"hole-add-top"},i.a.createElement("div",{className:"hole-add-search"},i.a.createElement(b.default,{allowClear:!0,style:{width:130},onChange:N,placeholder:"漏洞等级",className:"input-style"},x.map((function(e){return i.a.createElement(g.a,{key:e.key,value:e.key},e.value)}))),i.a.createElement(b.default,{allowClear:!0,style:{width:130},onChange:N,placeholder:"语言",className:"input-style"},x.map((function(e){return i.a.createElement(g.a,{key:e.key,value:e.key},e.value)}))),i.a.createElement(y.default,{placeholder:"漏洞名称",onChange:function(e){var t=e.target.value;w(t)},onPressEnter:function(){},size:"middle",style:{width:200},prefix:i.a.createElement(v.default,null)})),i.a.createElement("div",{className:"hole-table-top"},i.a.createElement(r.default,{rowSelection:S({type:"checkbox"},I),dataSource:u,rowKey:function(e){return e.id},columns:O,pagination:!1}))))},N=n(685),P=n(472),C=n(114);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=Object(C.observer)((function(e){var t=e.match.params,n=d.a.findSchemeHolePage,m=d.a.deleteScanHole,p=P.a.findScanScheme,y=A(Object(o.useState)(""),2),b=y[0],h=y[1],v=A(Object(o.useState)([]),2),g=v[0],w=v[1],O=A(Object(o.useState)(1),2),S=O[0],j=O[1],E=A(Object(o.useState)(),2),k=E[0],x=E[1],C=A(Object(o.useState)(15),1)[0],H=A(Object(o.useState)(!1),2),T=H[0],L=H[1],D=A(Object(o.useState)(!1),2),V=D[0],z=D[1],J=A(Object(o.useState)(""),2),K=J[0],M=J[1],U=A(Object(o.useState)([]),2),$=U[0],B=U[1];Object(o.useEffect)((function(){F(S),p(t.schemeId).then((function(e){h(e.data),R(e.data)}))}),[]);var R=function(e){"default"===e.schemeType?B(q):B(q.concat({title:"操作",dataIndex:"action",key:"action",width:"10%",render:function(e,t){return i.a.createElement(a.default,{title:"移除"},i.a.createElement(l.default,{placement:"topRight",title:"你确定移除吗",onConfirm:function(){return m(t.id)},okText:"确定",cancelText:"取消"},i.a.createElement("span",{style:{cursor:"pointer"}},i.a.createElement(f.default,null))))}}))},q=[{title:"漏洞名称",dataIndex:"holeName",key:"holeName",width:"30%",ellipsis:!0,render:function(e,t){return i.a.createElement("div",{className:"text-color",onClick:function(){return G(t)}},e)}},{title:"漏洞编号",dataIndex:"holeNumber",key:"holeNumber",width:"20%",ellipsis:!0},{title:"漏洞等级",dataIndex:"holeLevel",key:"holeLevel",width:"10%",ellipsis:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",width:"20%",ellipsis:!0}],F=function(e){n({scanSchemeId:t.schemeId,pageParam:{currentPage:e,pageSize:C}}).then((function(e){0===e.code&&(w(e.data.dataList),x(e.data.totalPage))}))},G=function(e){M(e),z(!0)};return i.a.createElement("div",{className:"scanHole"},i.a.createElement("div",{className:"xpack-home-limited"},i.a.createElement("div",{className:"scanHole-up"},i.a.createElement(c.a,{firstItem:"方案漏洞",goBack:function(){e.history.go(-1)}}),b&&"default"!==b.schemeType&&i.a.createElement(u.a,{type:"primary",title:"添加漏洞",onClick:function(){L(!0)}})),i.a.createElement("div",{className:"scanHole-table"},i.a.createElement(r.default,{bordered:!1,columns:$,dataSource:g,rowKey:function(e){return e.id},pagination:!1}),i.a.createElement(s.a,{pageCurrent:S,changPage:function(e){j(e),F(e)},totalPage:k}))),i.a.createElement(I,{visible:T,setVisible:L}),i.a.createElement(N.a,{visible:V,setVisible:z,hole:K}))}))}}]);