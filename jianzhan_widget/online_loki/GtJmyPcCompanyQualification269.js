!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.GtJmyPcCompanyQualification=n():(t.groot=t.groot||{},t.groot.GtJmyPcCompanyQualification=n())}(this,(function(){return function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=1)}([function(t,n,e){var i=e(3),o=e(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1},a=(i(o,r),o.locals?o.locals:{});t.exports=a},function(t,n,e){t.exports=e(6)},function(t,n,e){"use strict";var i=e(0);e.n(i).a},function(t,n,e){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function c(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function s(t,n){for(var e={},i=[],o=0;o<t.length;o++){var r=t[o],s=n.base?r[0]+n.base:r[0],l=e[s]||0,u="".concat(s," ").concat(l);e[s]=l+1;var f=c(u),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:u,updater:y(p,n),references:1}),i.push(u)}return i}function l(t){var n=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=e.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){n.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(n);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,f=(u=[],function(t,n){return u[t]=n,u.filter(Boolean).join("\n")});function p(t,n,e,i){var o=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=f(n,o);else{var r=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(r,a[n]):t.appendChild(r)}}function m(t,n,e){var i=e.css,o=e.media,r=e.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */"));var a=window&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--foo: red)");if(t.styleSheet&&a)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d=null,g=0;function y(t,n){var e,i,o;if(n.singleton){var r=g++;e=d||(d=l(n)),i=p.bind(null,e,r,!1),o=p.bind(null,e,r,!0)}else e=l(n),i=m.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<e.length;i++){var o=c(e[i]);a[o].references--}for(var r=s(t,n),l=0;l<e.length;l++){var u=c(e[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=r}}}},function(t,n,e){(n=e(5)(!1)).push([t.i,".flex-pack-justify[data-v-773879c2] {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -moz-box-pack: justify;\n  -moz-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n.gt-jmy-pc-company-qualification[data-v-773879c2] {\n  color: var(--groot-ui-color-gray-9);\n}\n.gt-jmy-pc-company-qualification-title span[data-v-773879c2] {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.gt-jmy-pc-company-qualification-title span[data-v-773879c2]:nth-child(1) {\n  font-size: 30px;\n  margin-top: calc(16 * var(--groot-ui-rpx));\n  margin-bottom: var(--groot-ui-spacing-unit-1);\n  font-weight: var(--groot-ui-font-weight-2);\n  line-height: 1;\n}\n.gt-jmy-pc-company-qualification-title span[data-v-773879c2]:nth-child(2) {\n  color: var(--groot-ui-color-gray-7);\n  line-height: 1;\n  margin-top: var(--groot-ui-spacing-unit-3);\n  margin-bottom: var(--groot-ui-spacing-unit-5);\n  font-size: var(--groot-ui-font-size-l);\n}\n.gt-jmy-pc-company-qualification-list[data-v-773879c2] {\n  width: calc(1190 * var(--groot-ui-rpx));\n  margin: auto;\n  text-align: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: -moz-box;\n  display: -moz-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -moz-box-align: center;\n  -moz-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-flex-wrap: wrap;\n  -moz-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n  -moz-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n.gt-jmy-pc-company-qualification-list-item[data-v-773879c2] {\n  display: inline-block;\n  width: calc(290 * var(--groot-ui-rpx));\n  margin-right: calc(10 * var(--groot-ui-rpx));\n}\n.gt-jmy-pc-company-qualification-list-item-content[data-v-773879c2] {\n  text-align: center;\n  overflow: hidden;\n  font-weight: var(--groot-ui-font-weight-1);\n  color: var(--groot-ui-color-gray-9);\n  height: var(--groot-ui-height-unit-7);\n  line-height: var(--groot-ui-height-unit-7);\n  font-size: var(--groot-ui-font-size-l);\n}\n.gt-jmy-pc-company-qualification-list-item-img[data-v-773879c2] {\n  width: calc(290 * var(--groot-ui-rpx));\n  height: calc(290 * var(--groot-ui-rpx));\n  position: relative;\n  overflow: hidden;\n  border-radius: var(--groot-ui-border-radius-1);\n  padding: calc(20 * var(--groot-ui-rpx));\n  box-sizing: border-box;\n  background-color: var(--groot-ui-color-gray-2);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: -moz-box;\n  display: -moz-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -moz-box-align: center;\n  -moz-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n  -moz-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n.gt-jmy-pc-company-qualification-list-item-img-single[data-v-773879c2] {\n  width: 100%;\n}\n.gt-jmy-pc-company-qualification-list-item-img-single[data-v-773879c2] .groot-ui-image {\n  height: 100%;\n}\n.gt-jmy-pc-company-qualification-list-item-img-single[data-v-773879c2] .groot-ui-image img {\n  height: 100%;\n}\n.gt-jmy-pc-company-qualification-list-item[data-v-773879c2]:last-child {\n  margin-right: 0;\n}\n.gt-jmy-pc-company-qualification-list-bottom[data-v-773879c2] {\n  margin-top: var(--groot-ui-spacing-unit-4);\n}\n",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var o=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[e].concat(r).concat([o]).join("\n")}var a,c,s;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);i&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},function(t,n,e){"use strict";e.r(n);function i(t,n){return"https://duzhanread.cdn.bcebos.com/jianzhan_widget/online_loki/".concat(t).concat(n,".js")}function o(t,n){return+window.location.port>80?(e=t,"http://".concat(window.location.hostname,":8858/").concat(e,"/").concat(e,".js")):document.location.hostname.indexOf("preonline")>-1?i(t,n):document.location.hostname.indexOf("offline")>-1||document.location.hostname.indexOf("preview")>-1?function(t,n){return"https://duzhanread.bj.bcebos.com/jianzhan_widget/loki/".concat(t).concat(n,".js")}(t,n):i(t,n);var e}function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=function(t){var n=t.getData("pageConfig")||{},e=n.siteid,i=n.pageid,o="editor"===(t.getData("env")&&t.getData("env").platform)||0===e&&0===i;return o};function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){f(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var p,m,d={name:"gt-jmy-pc-company-qualification",mixins:[{computed:{isEditor:function(){return s(this.$loki)}}},(p={GetCompanyInfo:"GtJmyPcGetCompanyInfo"},m={},Object.keys(p).forEach((function(t){var n=null,e=null;"string"==typeof p[t]?(n=p[t],e=269):"object"===c(p[t])&&(n=p[t].filename,e=p[t].appid),n&&e&&(m[t]=function(t,i){try{var a=o(n,e),c=r(document.getElementsByTagName("script")).filter((function(t){return t.src===a}))[0],s=function(){window.groot[n]?t(window.groot[n].default):i()};if(c)if(window.groot[n])s();else{var l=c.onload;c.onload=function(){s(),"function"==typeof l&&l()}}else{var u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.type="text/javascript",f.src=a,f.onload=s,u.appendChild(f)}}catch(t){}})})),{components:m})],props:{properties:{type:Object,default:function(){return{}}}},data:function(){return{prefixCls:"gt-jmy-pc-company-qualification",qualificationData:u({},this.properties),imagesTop:[],imagesBottom:[]}},mounted:function(){if(this.isEditor){var t=this.properties.images||[];this.transImages(t)}},methods:{transImages:function(t){if(t.length>4){var n=JSON.parse(JSON.stringify(t));this.imagesTop=n.splice(0,Math.round(n.length/2)),this.imagesBottom=n}else this.imagesTop=t},gotCompanyInfo:function(t){var n=(function(t){var n={};try{n=JSON.parse(t)}catch(t){n={}}return n}(t.companyInfo).honorList||[]).map((function(t){return{image:t.pic,title:t.title}}));this.transImages(n)}}};e(2);var g=function(t,n,e,i,o,r,a,c){var s,l="function"==typeof t?t.options:t;if(n&&(l.render=n,l.staticRenderFns=e,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=s):o&&(s=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(l.functional){l._injectStyles=s;var u=l.render;l.render=function(t,n){return s.call(n),u(t,n)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:l}}(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:""+t.prefixCls},[t.imagesTop.length>0?e("div",{class:t.prefixCls+"-title"},[e("span",[t._v(t._s(t.qualificationData.title))]),t._v(" "),e("span",[t._v(t._s(t.qualificationData.subTitle))])]):t._e(),t._v(" "),e("div",{class:t.prefixCls+"-list"},t._l(t.imagesTop,(function(n,i){return e("div",{key:i,class:t.prefixCls+"-list-item"},[e("div",{class:t.prefixCls+"-list-item-img"},[e("gt-jmy-pc-image-single",{class:t.prefixCls+"-list-item-img-single",attrs:{properties:Object.assign({},n)}})],1),t._v(" "),e("div",{class:t.prefixCls+"-list-item-content"},[t._v("\n                "+t._s(n.title)+"\n            ")])])})),0),t._v(" "),t.imagesBottom.length?e("div",{class:t.prefixCls+"-list "+t.prefixCls+"-list-bottom"},t._l(t.imagesBottom,(function(n,i){return e("div",{key:i,class:t.prefixCls+"-list-item"},[e("div",{class:t.prefixCls+"-list-item-img"},[e("gt-jmy-pc-image-single",{class:t.prefixCls+"-list-item-img-single",attrs:{properties:Object.assign({},n)}})],1),t._v(" "),e("div",{class:t.prefixCls+"-list-item-content"},[t._v("\n                "+t._s(n.title)+"\n            ")])])})),0):t._e(),t._v(" "),e("get-company-info",{on:{response:t.gotCompanyInfo}})],1)}),[],!1,null,"773879c2",null);n.default=g.exports}])}));