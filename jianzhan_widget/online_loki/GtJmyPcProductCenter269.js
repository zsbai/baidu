!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.GtJmyPcProductCenter=e():(t.groot=t.groot||{},t.groot.GtJmyPcProductCenter=e())}(this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=1)}([function(t,e,r){var n=r(3),o=r(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=(n(o,i),o.locals?o.locals:{});t.exports=a},function(t,e,r){t.exports=r(6)},function(t,e,r){"use strict";var n=r(0);r.n(n).a},function(t,e,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),a=[];function c(t){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===t){e=r;break}return e}function u(t,e){for(var r={},n=[],o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],s=r[u]||0,d="".concat(u," ").concat(s);r[u]=s+1;var p=c(d),l={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(l)):a.push({identifier:d,updater:v(l,e),references:1}),n.push(d)}return n}function s(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,p=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function l(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=p(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */"));var a=window&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--foo: red)");if(t.styleSheet&&a)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var g=null,m=0;function v(t,e){var r,n,o;if(e.singleton){var i=m++;r=g||(g=s(e)),n=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else r=s(e),n=f.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=c(r[n]);a[o].references--}for(var i=u(t,e),s=0;s<r.length;s++){var d=c(r[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=i}}}},function(t,e,r){(e=r(5)(!1)).push([t.i,".gt-jmy-pc-product-center-container[data-v-22b47426] {\n  padding-bottom: var(--groot-ui-spacing-unit-5);\n  overflow: hidden;\n}\n.gt-jmy-pc-product-center-container .gt-jmy-pc-product-center-title-container .gt-jmy-pc-product-center-title[data-v-22b47426] {\n  text-align: center;\n  font-size: 30px;\n  margin: calc(16 * var(--groot-ui-rpx)) 0 0 0;\n  font-weight: var(--groot-ui-font-weight-2);\n  line-height: 1;\n}\n.gt-jmy-pc-product-center-container .gt-jmy-pc-product-center-title-container .gt-jmy-pc-product-center-sub-title[data-v-22b47426] {\n  font-size: var(--groot-ui-font-size-l);\n  text-align: center;\n  margin-top: var(--groot-ui-spacing-unit-3);\n  margin-bottom: calc(30 * var(--groot-ui-rpx));\n  color: var(--groot-ui-color-gray-7);\n}\n.gt-jmy-pc-product-center-container[data-v-22b47426] .gt-jmy-pc-image-multi-container .groot-ui-image {\n  border-top-left-radius: var(--groot-ui-border-radius-1) !important;\n  border-top-right-radius: var(--groot-ui-border-radius-1) !important;\n}\n.gt-jmy-pc-product-center-container[data-v-22b47426] .gt-jmy-pc-image-multi-container .multi-img-content-item {\n  cursor: pointer;\n}\n.gt-jmy-pc-product-center-container .gt-jmy-pc-product-center-button[data-v-22b47426] {\n  text-align: center;\n  margin-top: calc(40 * var(--groot-ui-rpx));\n}\n.gt-jmy-pc-product-center-container .gt-jmy-pc-product-center-button[data-v-22b47426] button {\n  font-weight: var(--groot-ui-font-weight-2);\n  background-color: var(--groot-ui-color-gray-1);\n  color: var(--groot-ui-color-gray-8);\n  border: 1px solid var(--groot-ui-color-gray-5);\n}\n.gt-jmy-pc-product-center-container .gt-jmy-pc-product-center-button[data-v-22b47426] button:hover {\n  font-weight: var(--groot-ui-font-weight-2);\n  background-color: var(--groot-ui-color-brand-6);\n  border: 1px solid var(--groot-ui-color-brand-6);\n  color: var(--groot-ui-color-gray-1);\n}\n.gt-jmy-pc-product-center-container .gt-jmy-pc-product-center-button[data-v-22b47426] button > span {\n  font-size: calc(20 * var(--groot-ui-rpx));\n}\n.gt-jmy-pc-product-center-container[data-v-22b47426] .context-title {\n  color: var(--groot-ui-color-gray-9);\n  background-color: var(--groot-ui-color-gray-3);\n  font-size: var(--groot-ui-font-size-l);\n  box-sizing: border-box;\n  height: var(--groot-ui-height-unit-8);\n  padding: calc(16 * var(--groot-ui-rpx));\n  border-bottom-left-radius: var(--groot-ui-border-radius-1);\n  border-bottom-right-radius: var(--groot-ui-border-radius-1);\n}\n.gt-jmy-pc-product-center-container[data-v-22b47426] .multi-img-content-item:hover .context-title {\n  color: var(--groot-ui-color-gray-1);\n  background-color: var(--groot-ui-color-brand-6);\n  font-size: var(--groot-ui-font-size-l);\n  box-sizing: border-box;\n  height: var(--groot-ui-height-unit-8);\n  padding: calc(16 * var(--groot-ui-rpx));\n  border-bottom-left-radius: var(--groot-ui-border-radius-1);\n  border-bottom-right-radius: var(--groot-ui-border-radius-1);\n}\n",""]),t.exports=e},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[r].concat(i).concat([o]).join("\n")}var a,c,u;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},function(t,e,r){"use strict";r.r(e);var n=function(t){var e=t.getData("pageConfig")||{},r=e.siteid,n=e.pageid,o="editor"===(t.getData("env")&&t.getData("env").platform)||0===r&&0===n;return o},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=e||t.title||"",n=t.field||"",o=t.orderBy||"",i=t.categoryId||0,a="title="+("other"===r?"":r)+"&field="+n+"&orderBy="+o+"&categoryId="+i;return a};function i(t,e){return"https://duzhanread.cdn.bcebos.com/jianzhan_widget/online_loki/".concat(t).concat(e,".js")}function a(t,e){return+window.location.port>80?(r=t,"http://".concat(window.location.hostname,":8858/").concat(r,"/").concat(r,".js")):document.location.hostname.indexOf("preonline")>-1?i(t,e):document.location.hostname.indexOf("offline")>-1||document.location.hostname.indexOf("preview")>-1?function(t,e){return"https://duzhanread.bj.bcebos.com/jianzhan_widget/loki/".concat(t).concat(e,".js")}(t,e):i(t,e);var r}function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f,g,m={name:"gt-jmy-pc-product-center",mixins:[{computed:{isEditor:function(){return n(this.$loki)}}},(f={GetProductList:"GtJmyPcGetProductList"},g={},Object.keys(f).forEach((function(t){var e=null,r=null;"string"==typeof f[t]?(e=f[t],r=269):"object"===s(f[t])&&(e=f[t].filename,r=f[t].appid),e&&r&&(g[t]=function(t,n){try{var o=a(e,r),i=c(document.getElementsByTagName("script")).filter((function(t){return t.src===o}))[0],u=function(){window.groot[e]?t(window.groot[e].default):n()};if(i)if(window.groot[e])u();else{var s=i.onload;i.onload=function(){u(),"function"==typeof s&&s()}}else{var d=document.getElementsByTagName("head")[0],p=document.createElement("script");p.type="text/javascript",p.src=o,p.onload=u,d.appendChild(p)}}catch(t){}})})),{components:g})],props:{properties:{type:Object,default:function(){}},widgetInfoId:{type:[String,Number],default:""},widgetMoldName:{type:String,default:""}},data:function(){return{env:this.$loki.getData("env"),productList:[],pagination:{pageNum:1,pageSize:10}}},computed:{isXiaoduTemplate:function(){return"GtJmyPcProductCenter-xiaodu"===this.widgetMoldName},images:function(){var t=this.properties.productList;return this.isEditor?{images:this.isXiaoduTemplate?t.slice(0,4):t.slice(0,3),themeType:"two"}:{images:this.productList,themeType:"two"}},jumpButton:function(){var t=this.properties.jumpButton||{},e=t.action||{},r=this.properties,n=r.title,i=r.categoryId,a=r.sort,c=void 0===a?{}:a,u={field:(c=c||{}).field,orderBy:c.orderBy,title:n,categoryId:i};return p(p({},t),{},{action:p(p({},e),{},{jumpUrl:"".concat(e.jumpUrl,"?").concat(o.call(this,u))})})},requestParams:function(){return{pagination:this.pagination,sort:this.properties.sort,categoryIds:+this.properties.categoryId>0?[this.properties.categoryId]:[]}}},methods:{getProductList:function(t){var e=t.list;e=e.map((function(t){return{title:t.title,date:t.addTime,image:t.headImage&&t.headImage[0]?t.headImage[0]:"",action:{actionType:"jump",jumpUrl:t.onlineUrl}}})),this.isXiaoduTemplate?this.productList=e.splice(0,4):this.productList=e.splice(0,3)}}};r(2);var v=function(t,e,r,n,o,i,a,c){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=r,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var d=s.render;s.render=function(t,e){return u.call(e),d(t,e)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:s}}(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("get-product-list",{attrs:{"req-params":t.requestParams},on:{response:t.getProductList}}),t._v(" "),t.images.images.length>2?r("div",{staticClass:"gt-jmy-pc-product-center-container"},[r("div",{staticClass:"gt-jmy-pc-product-center-title-container"},[r("h3",{staticClass:"gt-jmy-pc-product-center-title"},[t._v("\n                "+t._s(t.properties.title)+"\n            ")]),t._v(" "),r("p",{staticClass:"gt-jmy-pc-product-center-sub-title"},[t._v("\n                "+t._s(t.properties.subTitle)+"\n            ")])]),t._v(" "),r("gt-jmy-pc-image-multi",{attrs:{properties:t.images}}),t._v(" "),t.jumpButton.show?r("div",{staticClass:"gt-jmy-pc-product-center-button"},[r("gt-jmy-pc-button",{attrs:{properties:t.jumpButton,"widget-info-id":t.widgetInfoId}})],1):t._e()],1):t._e()],1)}),[],!1,null,"22b47426",null);e.default=v.exports}])}));