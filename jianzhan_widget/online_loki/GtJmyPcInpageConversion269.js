!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.GtJmyPcInpageConversion=e():(t.groot=t.groot||{},t.groot.GtJmyPcInpageConversion=e())}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});t.exports=a},function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";var r=n(0);n.n(r).a},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function c(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],u=n[s]||0,f="".concat(s," ").concat(u);n[s]=u+1;var l=c(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:f,updater:v(p,e),references:1}),r.push(f)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */"));var a=window&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--foo: red)");if(t.styleSheet&&a)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,y=0;function v(t,e){var n,r,o;if(e.singleton){var i=y++;n=m||(m=u(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=u(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(t,e),u=0;u<n.length;u++){var f=c(n[u]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}n=i}}}},function(t,e,n){(e=n(5)(!1)).push([t.i,".gt-jmy-pc-inpage-conversion[data-v-627861cb] {\n  box-sizing: border-box;\n}\n.inpage-conversion-edge[data-v-627861cb] {\n  margin-bottom: 30px;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},function(t,e,n){"use strict";n.r(e);var r=function(t){var e=t.getData("pageConfig")||{},n=e.siteid,r=e.pageid,o="editor"===(t.getData("env")&&t.getData("env").platform)||0===n&&0===r;return o};function o(t,e){return"https://duzhanread.cdn.bcebos.com/jianzhan_widget/online_loki/".concat(t).concat(e,".js")}function i(t,e){return+window.location.port>80?(n=t,"http://".concat(window.location.hostname,":8858/").concat(n,"/").concat(n,".js")):document.location.hostname.indexOf("preonline")>-1?o(t,e):document.location.hostname.indexOf("offline")>-1||document.location.hostname.indexOf("preview")>-1?function(t,e){return"https://duzhanread.bj.bcebos.com/jianzhan_widget/loki/".concat(t).concat(e,".js")}(t,e):o(t,e);var n}function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m,y,v={name:"gt-jmy-pc-inpage-conversion",mixins:[{computed:{isEditor:function(){return r(this.$loki)}}},(m={GetTransInfo:"GtJmyPcGetTransInfo"},y={},Object.keys(m).forEach((function(t){var e=null,n=null;"string"==typeof m[t]?(e=m[t],n=269):"object"===s(m[t])&&(e=m[t].filename,n=m[t].appid),e&&n&&(y[t]=function(t,r){try{var o=i(e,n),c=a(document.getElementsByTagName("script")).filter((function(t){return t.src===o}))[0],s=function(){window.groot[e]?t(window.groot[e].default):r()};if(c)if(window.groot[e])s();else{var u=c.onload;c.onload=function(){s(),"function"==typeof u&&u()}}else{var f=document.getElementsByTagName("head")[0],l=document.createElement("script");l.type="text/javascript",l.src=o,l.onload=s,f.appendChild(l)}}catch(t){}})})),{components:y})],props:{properties:{type:Object,default:function(){}},widgetInfoId:{type:[Number,String],default:""},widgetMoldName:{type:String,default:""}},data:function(){return{inpageConversionData:null}},computed:{isXiaoduTemplate:function(){return"GtJmyPcInpageConversion-xiaodu"===this.widgetMoldName},ctnClass:function(){var t=["gt-jmy-pc-inpage-conversion"];return this.inpageConversionData&&t.push("inpage-conversion-edge"),t}},created:function(){this.inpageConversionData=this.isEditor?this.properties:null},methods:{gotTransSettingInfo:function(t){var e=p((t=function(t){var e={};try{e=JSON.parse(t)}catch(t){e={}}return e}(t.settingInfo)).list).filter((function(t){return 4===t.locationType}))[0];if(e&&"{}"!==JSON.stringify(e)){e=e.form;var n=JSON.parse(e.formProject);this.inpageConversionData=f(f({},n),{},{formSubmissionSuccessfulHints:e.formSubmissionSuccessfulHints,button:f(f({},this.properties.button),e.contentButton),count:e.count,registeredUserDisplay:e.registeredUserDisplay,title:e.title})}}}};n(2);var b=function(t,e,n,r,o,i,a,c){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var f=u.render;u.render=function(t,e){return s.call(e),f(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:u}}(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.ctnClass},[n("get-trans-info",{on:{response:t.gotTransSettingInfo}}),t._v(" "),t.inpageConversionData?n("gt-jmy-pc-trans-form-blank",{attrs:{properties:t.inpageConversionData,"widget-info-id":t.widgetInfoId,"is-xiaodu-template":t.isXiaoduTemplate}}):t._e()],1)}),[],!1,null,"627861cb",null);e.default=b.exports}])}));