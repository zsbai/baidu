!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.GtJmyPcImageSingle=t():(e.groot=e.groot||{},e.groot.GtJmyPcImageSingle=t())}(this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],g=n[s]||0,u="".concat(s," ").concat(g);n[s]=g+1;var A=c(u),l={css:i[1],media:i[2],sourceMap:i[3]};-1!==A?(a[A].references++,a[A].updater(l)):a.push({identifier:u,updater:C(l,t),references:1}),o.push(u)}return o}function g(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,A=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function l(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=A(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */"));var a=window&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--foo: red)");if(e.styleSheet&&a)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,d=0;function C(e,t){var n,o,r;if(t.singleton){var i=d++;n=p||(p=g(t)),o=l.bind(null,n,i,!1),r=l.bind(null,n,i,!0)}else n=g(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=s(e,t),g=0;g<n.length;g++){var u=c(n[g]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){var o;o=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="../../",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=function(e){return"number"==typeof e?"".concat(e,"px"):"string"==typeof e?e.endsWith("px")?e:"".concat(e,"px"):"0px"};function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(e,t,n,o,r,i,a,c){var s,g="function"==typeof e?e.options:e;if(t&&(g.render=t,g.staticRenderFns=n,g._compiled=!0),o&&(g.functional=!0),i&&(g._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},g._ssrRegister=s):r&&(s=c?function(){r.call(this,this.$root.$options.shadowRoot)}:r),s)if(g.functional){g._injectStyles=s;var u=g.render;g.render=function(e,t){return s.call(t),u(e,t)}}else{var A=g.beforeCreate;g.beforeCreate=A?[].concat(A,s):[s]}return{exports:e,options:g}}({name:"groot-ui-image",props:{url:{type:String,default:""},blankUrl:{type:String,default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAAGGCAYAAAB/gCblAAAAAXNSR0IArs4c6QAAF5hJREFUeAHt3ely28a2BlA5g+Mx7/+U/hHHUwbn1McT3KvWEQmQmwSJzYUqltIWG0Cv7uAjGiD04sOHD/88WAgQIECAwL8CP5AgQIAAAQKPBQTDYw3/TYAAAQIPgsEgIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBATDwKFAgAABAoLBGCBAgACBQUAwDBwKBAgQICAYjAECBAgQGAQEw8ChQIAAAQKCwRggQIAAgUFAMAwcCgQIECAgGIwBAgQIEBgEBMPAoUCAAAECgsEYIECAAIFBQDAMHAoECBAgIBiMAQIECBAYBH4aSgoELijw/fv3h7///vshP//555/d64Kb2/yqX7x48ZDXDz/88PDjjz/ufm6+URqwCQHBsIlu2u5OJgC+ffv28Mcff+xCYbstuf6eJxxevnz58Msvv+wC4/p7ZA+6Crz48OHDP10bp13XFUggfPnyxZnBmbshZxGvX7/eBcSZV211BHYCzhgMhLML5Czh8+fPu7OEs6/cCndBG9+//vrr4c2bN84ejImzC7j4fHbS+15hQuHjx49CYYVhkOm5WMfcQuCcAoLhnJrW9fDp0yfXElYcB7mYH3MLgXMKCIZzat75unJN4c8//7xzhfWbH/PYWwicS0AwnEvyzteT6YxcaLZcR8BF/uu4d92qi89de3blduUT65K57txR89NPP+3uy195Fze5uUwV5SLznG1+nz549erVJttpp29LQDDcVn9sdm9yIXRuyf33uc0y4WBZLjCdjc1NF6UPBMNyV+/cL2Aqab+N3ywUmL7RfOjtCQW3Vh4S2v+7BGnsYnhomb5Vfug9fkdgiYBgWKLkPQcFckA6tExfyDr0Hr+bF1hytjXXF/Nb8Q4CDw+CwSgoC+SM4dCSawqmjw4JLftdDGN5aJnri0N1/Y7AJCAYJgk/TxaYuzCaZ/xYziMwZznXF+fZC2vpLnD440f31mvfWQTmDkb3dLYQi+mVdufJqOdc5izn+uKc+2JdfQUEQ9++1bKVBHIwzh1BeeXW0sdLDuQ///zz7qmo+WkhsAUBwbCFXrKPNyuQMMiXy/bN7T8OjVwfyN1Fc9NBN9tYO3Y3Auc9z70bNg0l8LALhDynaF8oPDXK2UQeeuexIU9llG9NQDDcWo/Yn00IfP369SGvY5ecQXjQ4LFq3r+2gGBYW9z2Ni+QT/6V50IlHH7//ffZx1xsHkoDNisgGDbbdXb8WgJzoZALznPXETL9NPeIi2u1z3YJuPhsDBA4QiBnC0/vPJqq59bUXFye7j7KmUEO/vuCxEPvJjk/b03AGcOt9Yj9uWmBfReOc5bw/v37/wuFNCL/lofavX379tk25axhX8g8W8E/ElhJQDCsBG0zPQT2HcgTAPu+zPby5cu9j7LwbKMe46JbKwRDtx7VnosKZHrouWXuGUb7fr/0VtfntunfCFxKQDBcStZ6WwrsC4ZMG1kIdBEQDF16UjtWEdg3XbRvimnaqX1TRvvWN9Xzk8A1BATDNdRtc7MC+25DzZfd9p1N5IL1vovW+9a3WSA73kJAMLToRo1YS2C6FfXp9nKtIF9ae3pmkGcp5ZvOzy2Zftp37eG59/s3AmsJ+B7DWtK200IgwZBP+U8DII3LdNJvv/22+32miPKeQxeX5/5UZwswjdikgDOGTXabnb6mQP7E5qElgZCpo0OhMH3H4dB6/I7AtQQEw7Xk72i7+SQ9/a2CQwfLrZDkrKH6aT9fenMn01Z6/P7201TS/fX56i1+7uJrplryyrRMXplr39KF2Dz6IhebE3jHLo8fm3FsXe8nsIaAYFhD2Tb+RyBnDnk9vc3zcVDkk/kt386ZT/3Z30N3JD1ueNqSOi44P1bx37coIBhusVfueJ8yP5/X9Ek8B9McSBMS+XlrQZFHYeSRFwmHfdcVEh6ZeqpOP93xsND0lQUEw8rgNnecQM4qEhJTUEwhkYPxrYRE9iPTQ1mmO5EyzZR/n17Htdq7CVxXQDBc19/WjxTI1FNeeZT1LYbENBV2ZLO8ncBNCQiGm+oOO3OMwOOQyBlEpmoSFhYCBGoC/i+q+al9IwLTdNM0n5+gcDvojXSO3dicgGDYXJdtb4fzKT4H6elOpH3PFDpHyzLH//nz591UUy4M5yxCQJxD1jruSUAw3FNvX6mtuaMoB+lpSTAkJHIQz3RQfuZ1zsDIunIdYvrzme4ImvT9JDAvIBjmjbzjzAL5BD9dpM2Uz7RM32tIWOy79XN679KfWWfOIBIQeZRFQspCgMBhAcFw2MdvVxTIrZ0JiikspqCYvjldOaPIGUmefppprQSEi9QrdqxNbU5AMGyuy+5nhx8HRUIhZxK5yJygODUkso6PHz/urj0kIFx/uJ/xpKXLBQTDcivvvKJADuCZBsoroZBwyPRQDvSnLFPd6bEWp6xDHQJdBQRD155t3K6ExDTllCmiHORzJnHsWUTq5u8n5Mzh8cXxW6PLlNr0OjUIb61N9ue2BQTDbfePvZsRyEXsPI4iB/eEQ+5EOjYgUicH3Kwn01fXWhJUT18JBAuBtQUEw9ritncRgZxF5JbUnEnkgXY5izgmIDI1lbOHTC2tcedS9i1hNL0SCMfs70UQrZTAvwKCwVBoJZCAyNlDQmIKiKUNzIE5dy4lHKY7o5bWXfK+HPynO6xMCS0R855rCQiGa8nb7kUFMiWUqaEERKaKckBeunz69Gn31nOEQ8JgupMq/20hsAUBwbCFXrKPJwvkGsS7d+92B+d80W3pdE3CIe895RvTqZcwyHSWMDi561S8ooBguCK+Ta8nkE//+VJbDvhLp3GmIFl6x1IuFCcMjr2+sZ6CLRFYJiAYljl5VwOBTC+9f/9+N7WU6w9Llukup1y32LfkDCHvSyBYCHQQEAwdelEbjhLIQT53HuXsYcntoAmRXNR+euaQQJgucOe/L7Vk2wm1vLKdpWc8l9of6+0vIBj697EWPiOQaaWcPeQupCXXAXJGkDrTM5ZyMTtTTUuC5ZnN7/2nHPyzjekhg/mZf5uWBJFgmDT8vJSAYLiUrPXevEAOuAmHPDtpSTgkRPL+HJxzcbm65EwgIZCzlykI8m8WAtcWEAzX7gHbv6pADsTTmcPcJ/FM4+RLcJUlYZQgmC6GV9alLoFLCQiGS8la72YEEg65pTVnBHPhcEqjsv4pDPLTQuDWBQTDrfeQ/VtF4BLhkLODfA8ir6zfQmArAoJhKz1lPy8uMIVDposqF5UTCLnz6RzfnL54o22AwDMCguEZFP90vwIJhzwrKRekj10SCLml9ZRvSx+7Le8ncEmB/78P7pJbsW4CGxLInUJ5ztIxS84Ofv31V6FwDJr33qyAM4ab7Ro7dk2BfOrPhei521JzlpAQcVH5mr1l2+cWEAznFrW+NgI54Of7Dfu+45Azi9zN5MJymy7XkH8FTCUZCgT2COSAn+845MtnT5dcS8jvhMJTGeUOAs4YOvSiNlxMYAqHPAIjU0uZOsq00XNhcbGdsGICKwsIhpXBbW57AgmHXFx2++n2+s4enyZgKuk0N7UIECDQVkAwtO1aDSNAgMBpAoLhNDe1CBAg0FZAMLTtWg0jQIDAaQKC4TQ3tQgQINBWQDC07VoNI0CAwGkCguE0N7UIECDQVkAwtO1aDSNAgMBpAoLhNDe1HgnMPRYifxLTch6BOcu5vjjPXlhLdwHB0L2HV2jf3MFo30PoVti1dpuYs5zri3YgGnQRAcFwEdb7WmmeH3RoyTOG5j7pHqrvd/8ViOHc36Se6wuWBJYIHP4/eskavOfuBeYeKJcD2pcvX+7eqQoQw7mAneuL6j6ofx8CguE++vmircyn1LkD0rdv3x4+f/48e2C76I5udOUJg9jF8NCSPnDGcEjI75YKeLrqUinvOyiQJ4/OnRXkwJa/iJY/cDMXJAc3dke/zDWFpVNxnv56RwPjwk0VDBcGvpfV509hfv36dfaMIJ9+87cN8rKcTyAXndMHFgLnEDCVdA5F69j9JbPXr1+TuJJA7N2RdCX8hpsVDA079VpNyidW0xnr68fc2cL67p23KBg69+4V2vbmzZvdNYQrbPouN5nrNTG3EDingGA4p6Z17aYz3r1758xhhbGQM4VYm0JaAfvONuHi8511+BrNzYHq7du3uzOHXJD+/v37Gpu9m23kltRXr16ZPrqbHl+/oYJhffO72eJ0zWG6TXXucQ53A3NiQ3OL73Q9wVnCiYiqLRIQDIuYvOlUgRzA8uk2r5w5JBzyc+4bvKdur1u9+E1fIPTltW69e7vtEQy32zft9iwHNge3dt2qQQ0FXHxu2KmaRIAAgYqAYKjoqUuAAIGGAoKhYadqEgECBCoCgqGipy4BAgQaCgiGhp2qSQQIEKgICIaKnroECBBoKCAYGnaqJhEgQKAiIBgqeuoSIECgoYBgaNipmkSAAIGKgGCo6KlLgACBhgKCoWGnahIBAgQqAoKhoqcuAQIEGgoIhoadqkkECBCoCAiGip66BAgQaCggGBp2qiYRIECgIiAYKnrqEiBAoKGAYGjYqZpEgACBioBgqOipS4AAgYYCgqFhp2oSAQIEKgKCoaKnLgECBBoKCIaGnapJBAgQqAgIhoqeugQIEGgoIBgadqomESBAoCIgGCp66hIgQKChgGBo2KmaRIAAgYqAYKjoqUuAAIGGAoKhYadqEgECBCoCgqGipy4BAgQaCgiGhp2qSQQIEKgICIaKnroECBBoKCAYGnaqJhEgQKAiIBgqeuoSIECgoYBgaNipmkSAAIGKgGCo6KlLgACBhgKCoWGnahIBAgQqAoKhoqcuAQIEGgoIhoadqkkECBCoCAiGip66BAgQaCggGBp2qiYRIECgIiAYKnrqEiBAoKGAYGjYqZpEgACBioBgqOipS4AAgYYCgqFhp2oSAQIEKgKCoaKnLgECBBoKCIaGnapJBAgQqAgIhoqeugQIEGgoIBgadqomESBAoCIgGCp66hIgQKChgGBo2KmaRIAAgYqAYKjoqUuAAIGGAoKhYadqEgECBCoCgqGipy4BAgQaCgiGhp2qSQQIEKgICIaKnroECBBoKCAYGnaqJhEgQKAiIBgqeuoSIECgoYBgaNipmkSAAIGKgGCo6KlLgACBhgKCoWGnahIBAgQqAoKhoqcuAQIEGgoIhoadqkkECBCoCAiGip66BAgQaCggGBp2qiYRIECgIiAYKnrqEiBAoKGAYGjYqZpEgACBioBgqOipS4AAgYYCgqFhp2oSAQIEKgKCoaKnLgECBBoKCIaGnapJBAgQqAgIhoqeugQIEGgoIBgadqomESBAoCIgGCp66hIgQKChgGBo2KmaRIAAgYqAYKjoqUuAAIGGAoKhYadqEgECBCoCgqGipy4BAgQaCgiGhp2qSQQIEKgICIaKnroECBBoKCAYGnaqJhEgQKAiIBgqeuoSIECgoYBgaNipmkSAAIGKgGCo6KlLgACBhgKCoWGnahIBAgQqAoKhoqcuAQIEGgoIhoadqkkECBCoCAiGip66BAgQaCggGBp2qiYRIECgIiAYKnrqEiBAoKGAYGjYqZpEgACBioBgqOipS4AAgYYCgqFhp2oSAQIEKgKCoaKnLgECBBoKCIaGnapJBAgQqAgIhoqeugQIEGgoIBgadqomESBAoCIgGCp66hIgQKChgGBo2KmaRIAAgYqAYKjoqUuAAIGGAoKhYadqEgECBCoCgqGipy4BAgQaCgiGhp2qSQQIEKgICIaKnroECBBoKCAYGnaqJhEgQKAiIBgqeuoSIECgoYBgaNipmkSAAIGKgGCo6KlLgACBhgKCoWGnahIBAgQqAoKhoqcuAQIEGgoIhoadqkkECBCoCAiGip66BAgQaCggGBp2qiYRIECgIiAYKnrqEiBAoKGAYGjYqZpEgACBioBgqOipS4AAgYYCgqFhp2oSAQIEKgKCoaKnLgECBBoKCIaGnapJBAgQqAgIhoqeugQIEGgoIBgadqomESBAoCIgGCp66hIgQKChgGBo2KmaRIAAgYqAYKjoqUuAAIGGAoKhYadqEgECBCoCgqGipy4BAgQaCgiGhp2qSQQIEKgICIaKnroECBBoKCAYGnaqJhEgQKAiIBgqeuoSIECgoYBgaNipmkSAAIGKgGCo6KlLgACBhgKCoWGnahIBAgQqAoKhoqcuAQIEGgoIhoadqkkECBCoCAiGip66BAgQaCggGBp2qiYRIECgIiAYKnrqEiBAoKGAYGjYqZpEgACBioBgqOipS4AAgYYCgqFhp2oSAQIEKgKCoaKnLgECBBoKCIaGnapJBAgQqAgIhoqeugQIEGgoIBgadqomESBAoCIgGCp66hIgQKChgGBo2KmaRIAAgYqAYKjoqUuAAIGGAoKhYadqEgECBCoCgqGipy4BAgQaCgiGhp2qSQQIEKgICIaKnroECBBoKPAfpRQlMkVwKGgAAAAASUVORK5CYII="},height:{type:Number,default:0},borderRadius:{type:[String,Number],default:"0px"},className:{type:String,default:""},prefixCls:{type:String,default:"groot-ui-image"},unset:{type:Boolean,default:!1}},computed:{imageClassName:function(){return[this.prefixCls,this.className]},ctnStyle:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({borderRadius:o(this.borderRadius),overflowY:"hidden"},this.height?{height:o(this.height)}:{})},imgStyle:function(){return{width:this.unset?"unset":"100%"}}}},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.imageClassName,style:this.ctnStyle},[t("img",{class:this.prefixCls+"-inner",style:this.imgStyle,attrs:{src:this.url}})])}),[],!1,null,null,null).exports;n(1),t.default=a}])},e.exports=o()},function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";var o=n(0);n.n(o).a},function(e,t,n){(t=n(2)(!1)).push([e.i,".gt-jmy-pc-image-single-container[data-v-60fc2dce] {\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n.gt-jmy-pc-image-single-container.groot-image-adaptive-ctn[data-v-60fc2dce] {\n  min-width: 88.75em;\n  max-width: 120em;\n}\n.gt-jmy-pc-image-single-container.groot-image-unset-no[data-v-60fc2dce] {\n  width: 100%;\n}\n.gt-jmy-pc-image-single-container .gt-jmy-pc-image-single-title[data-v-60fc2dce] {\n  height: 5em;\n  line-height: 5em;\n  width: 100%;\n  text-align: center;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  color: var(--groot-ui-color-gray-1);\n  font-weight: var(--groot-ui-font-weight-2);\n  box-sizing: border-box;\n}\n.gt-jmy-pc-image-single-container .opaticy-image[data-v-60fc2dce] {\n  opacity: 0;\n}\n.gt-jmy-pc-image-single-container.groot-image-hurdle[data-v-60fc2dce] {\n  height: 31.25em;\n  position: relative;\n  z-index: 5;\n  width: 100%;\n}\n.gt-jmy-pc-image-single-container.groot-image-hurdle .groot-image-hurdle-bg[data-v-60fc2dce] {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: auto 100%;\n}\n",""]),e.exports=t},function(e,t,n){var o=n(1),r=n(8);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){(t=n(2)(!1)).push([e.i,".groot-ui-image {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */\n  display: -moz-box;\n  /* 老版本语法: Firefox (buggy) */\n  display: -ms-flexbox;\n  /* 混合版本语法: IE 10 */\n  display: -webkit-flex;\n  /* 新版本语法: Chrome 21+ */\n  display: flex;\n  /* 新版本语法: Opera 12.1, Firefox 22+ */\n  -webkit-box-align: center;\n  -moz-align-items: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -moz-justify-content: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);n(7);var o=n(3),r=n.n(o);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return"";var n={},o=e.split("?"),r=[];o[1]&&(r=o[1].split("&"));for(var i=0;i<r.length;i++){var c=r[i].split("=");n[c[0]]=c[1]}var s=a(a({},t),n),g=[];for(var u in s)g.push("".concat(u,"=").concat(s[u]));return o[0]+"?"+g.join("&")}var g=function(e){return"editor"===(e.getData("env")&&e.getData("env").platform)},u={PNG:"png",JPG:"jpg",JPEG:"jpeg",WEBP:"webp"};var A=function(e){return function(){try{return 0===document.createElement("canvas").toDataURL("image/webp",.5).indexOf("data:image/webp")}catch(e){return!1}}()&&e&&"[object String]"===Object.prototype.toString.call(e)&&function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.lastIndexOf("."),n=e.substr(t+1);return n}(e);return-1!==[u.PNG,u.JPG,u.JPEG].indexOf(t.toLowerCase())}(e)?function(e,t){var n=e.indexOf("@")>-1?e+","+t:e+"@"+t;return t?n:e}(e,"f_".concat(u.WEBP,",q_90")):e};function l(e,t){return"https://duzhanread.cdn.bcebos.com/jianzhan_widget/online_loki/".concat(e).concat(t,".js")}function f(e,t){return+window.location.port>80?(n=e,"http://".concat(window.location.hostname,":8858/").concat(n,"/").concat(n,".js")):document.location.hostname.indexOf("preonline")>-1?l(e,t):document.location.hostname.indexOf("offline")>-1||document.location.hostname.indexOf("preview")>-1?function(e,t){return"https://duzhanread.bj.bcebos.com/jianzhan_widget/loki/".concat(e).concat(t,".js")}(e,t):l(e,t);var n}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function C(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t,n,o,r,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(o,r)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){B(i,o,r,a,c,"next",e)}function c(e){B(i,o,r,a,c,"throw",e)}a(void 0)}))}}var E=["SITE_BAR_CLICK","SITE_COMP_CLICK","SITE_TO_IMLP","SITE_REQ_RECV","SITE_COMP_SHOW"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t||e.title||"",o=e.field||"",r=e.orderBy||"",i=e.categoryId||0,a="title="+("other"===n?"":n)+"&field="+o+"&orderBy="+r+"&categoryId="+i;return a};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K,O,S={name:"gt-jmy-pc-image-single",mixins:[{methods:{$jump:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!g(this.$loki)){var t=e&&e.jumpUrl,n=e&&e.urlType;"systemPage"===n&&(t=t.replace(/^\/{1}/,""));var o=this.$loki.router&&this.$loki.router.route&&this.$loki.router.route.query||{},r={normalPage:{path:t=s(t,o),type:"absolute"},systemPage:{path:t}};e&&e.target&&(r.normalPage.target=e.target),this.$loki.router.push(r[n||"normalPage"])}}}},{methods:{$loadWidgets:function(e,t){var n=this;if(!e||!e.length)return Promise.reject("this.$loadWidget must have an array argument.");var o=this.$loki.getData("pageConfig").appid||269,r=p(document.getElementsByTagName("script")).filter((function(e){return!!e.src})).reduce((function(e,t){return Object.assign(e,(n={},o=t.src,r=!0,o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n));var n,o,r}),{}),i=e.map((function(e){return{widgetName:e,url:"string"==typeof t[e]?t[e]:f(e,o)}})).filter((function(e){return!r[e.url]}));if(!i.length)return Promise.resolve();var a=document.getElementsByTagName("head")[0],c=i.map((function(e){var t=e.url,o=e.widgetName;return new Promise((function(e,r){var i=document.createElement("script");i.type="text/javascript",i.src=t,i.onload=function(){window.groot[o]&&(n.$loki.registeWidget(o),e())},a.appendChild(i)}))}));return Promise.all(c)}},mounted:function(){var e=this;if("function"==typeof this.$depWidgetsHotLoader){var t=this.$depWidgetsHotLoader();if(t){var n=Object.keys(t).filter((function(e){return t[e]}));n.length&&this.$loadWidgets(n,t).then((function(){e.$loki.emitEvent("$widgetsLoaded",!0,n)}),(function(){}))}else console.warn("this.$depWidgetsHotLoader() did not return an object.")}else console.warn("this.$depWidgetsHotLoader is not a function.")}},{methods:{$addLog:function(e,t){var n=arguments,o=this;return I(regeneratorRuntime.mark((function r(){var i,a,c,s,g,u,A;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=n.length>2&&void 0!==n[2]?n[2]:1,a=n.length>3&&void 0!==n[3]?n[3]:"",o.$loki&&o.$loki.getLogger&&"function"==typeof o.$loki.getLogger){r.next=4;break}return r.abrupt("return",Promise.reject("this.$loki.getLogger is not a function"));case 4:if(e||"workspace"!==o.$loki.getData("env")){r.next=6;break}return r.abrupt("return",Promise.reject("widgetInfoId in $addLog is required"));case 6:return r.next=8,o.$loki.getLogger(e);case 8:c=r.sent,s=c.addUserDefinedLog,g=c.configOfLogAction,u=c.addTelLog,A=c.addImlpLog,"consult"===a?A(t):"callback"===a?u(t):s({actionId:g.actionIdForDeveloper[E[i]],userExtra:t||{}});case 11:case"end":return r.stop()}}),r)})))()}}},(K={GetTransInfo:"GtJmyPcGetTransInfo"},O={},Object.keys(K).forEach((function(e){var t=null,n=null;"string"==typeof K[e]?(t=K[e],n=269):"object"===m(K[e])&&(t=K[e].filename,n=K[e].appid),t&&n&&(O[e]=function(e,o){try{var r=f(t,n),i=C(document.getElementsByTagName("script")).filter((function(e){return e.src===r}))[0],a=function(){window.groot[t]?e(window.groot[t].default):o()};if(i)if(window.groot[t])a();else{var c=i.onload;i.onload=function(){a(),"function"==typeof c&&c()}}else{var s=document.getElementsByTagName("head")[0],g=document.createElement("script");g.type="text/javascript",g.src=r,g.onload=a,s.appendChild(g)}}catch(e){}})})),{components:O})],components:{"m-groot-ui-image":r.a},props:{properties:{type:Object,default:function(){return{}}},widgetInfoId:{type:[String,Number],default:""},consultCompTargetId:{type:String,default:"button-consult"}},data:function(){return{showFormDialog:!1,showConsultDialog:!1,jumpAction:this.properties.action||{}}},mounted:function(){var e=this;this.consultInitTimer=setInterval((function(){window.groot.GtJmyPcCallConsult&&(e.showConsultDialog=!0,clearInterval(e.consultInitTimer))}),200)},computed:{actionType:function(){return this.properties.action&&this.properties.action.actionType},image:function(){var e=this.properties.image||"";return A(e)},style:function(){return this.properties.style||{}},isWidthAdaptive:function(){return!!this.properties.isWidthAdaptive},title:function(){return this.properties.title||""},showTitle:function(){return!!this.properties.showTitle},width:function(){return this.style.width||null},height:function(){return this.style.height||null},borderRadius:function(){return this.style.borderRadius||null},ctnClass:function(){var e=["gt-jmy-pc-image-single-container"];return this.isWidthAdaptive&&e.push("groot-image-adaptive-ctn"),this.properties.unset||e.push("groot-image-unset-no"),this.properties.isHurdle&&e.push("groot-image-hurdle"),e},ctnStyle:function(){return j({},this.isWidthAdaptive?{}:{width:(e=this.width,"number"==typeof e?"".concat(e,"px"):"string"==typeof e?e.endsWith("rem")||e.endsWith("em")||e.endsWith("%")||e.endsWith("px")?e:Number(e)||0===Number(e)?"".concat(e,"px"):"unset":"unset")});var e},unset:function(){return this.properties.unset||!1},hurdleBgStyle:function(){var e=this.properties.image||"";return{backgroundImage:"url(".concat(A(e),")")}},hasFormParams:function(){return!(!this.jumpAction||"form"!==this.jumpAction.actionType||!this.jumpAction.formParams)},hasConsultParams:function(){return!(!this.jumpAction||"consult"!==this.jumpAction.actionType||!this.jumpAction.consultUrl)},consultProperities:function(){return{imlpUrl:this.jumpAction.consultUrl||"",dialogType:this.jumpAction.dialogType,solutionType:this.jumpAction.solutionType||"",solutionId:this.jumpAction.solutionId||""}}},methods:{$depWidgetsHotLoader:function(){return{GtJmyPcFormInputs:this.hasFormParams,GtJmyPcForm:this.hasFormParams,GtJmyPcTransFormBlank:this.hasFormParams,GtJmyPcCallForm:this.hasFormParams,GtJmyPcCallConsult:this.hasConsultParams}},callConsult:function(){try{this.$refs.callConsult.callImlp()}catch(e){}},onClick:function(){if("jump"===this.actionType){if(this.properties.action&&this.properties.action.jumpUrl){var e=this.properties.action,t=e.categoryId,n=e.sort,o=void 0===n?{}:n,r=e.jumpUrl,i={field:o.field,orderBy:o.orderBy,categoryId:t};this.$jump({actionType:"jump",jumpUrl:"".concat(r,"?").concat(b.call(this,i))})}}else if(this.hasConsultParams){this.callConsult();this.$addLog(this.widgetInfoId,{compTargetId:"pc-image-single-consult-open"})}else if(this.hasFormParams){this.showFormDialog=!0;this.$addLog(this.widgetInfoId,{compTargetId:"pc-image-single-form-open"})}},closeDialog:function(e){this[e]=!1},onUnreadMessageReceive:function(e){this.$emit("onUnreadMessageReceive",e)},onInviteMessageReceive:function(e){this.$emit("onInviteMessageReceive",e)},clearUnreadMessage:function(e){this.$emit("clearUnreadMessage")},clearInviteMessage:function(e){this.$emit("clearInviteMessage")},gotTransSettingInfo:function(e){var t=function(e){var t={};try{t=JSON.parse(e)}catch(e){t={}}return t}(e.settingInfo),n=t&&t.list||[],o=this.jumpAction,r=o.locationType,i=o.actionType;"jump"!==i&&(this.jumpAction=j(j({},this.jumpAction),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;if(!(e&&e.length&&n&&t))return{};for(var o=0;o<e.length;o++)if(e[o].locationType===t){var r=e[o],i=r.consult&&"{}"!==JSON.stringify(r.consult),a=r.form&&"{}"!==JSON.stringify(r.form);if("form"===n&&a){var c=r.form,s=c.formProject&&JSON.parse(c.formProject),g=v(v({},s),{},{formSubmissionSuccessfulHints:c.formSubmissionSuccessfulHints,button:c.contentButton,count:c.count,registeredUserDisplay:c.registeredUserDisplay,title:c.title});return{formParams:g}}if("consult"===n&&i){var u=r.consult,A=u.consultProject&&JSON.parse(u.consultProject),l=v(v({dialogType:u.dialogStyle},A),{},{consultUrl:A.imlpUrl});return l}}return{}}(n,r,i)))}}};n(5);var P=function(e,t,n,o,r,i,a,c){var s,g="function"==typeof e?e.options:e;if(t&&(g.render=t,g.staticRenderFns=n,g._compiled=!0),o&&(g.functional=!0),i&&(g._scopeId="data-v-"+i),a?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},g._ssrRegister=s):r&&(s=c?function(){r.call(this,(g.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(g.functional){g._injectStyles=s;var u=g.render;g.render=function(e,t){return s.call(t),u(e,t)}}else{var A=g.beforeCreate;g.beforeCreate=A?[].concat(A,s):[s]}return{exports:e,options:g}}(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.ctnClass,style:e.ctnStyle,on:{click:e.onClick}},[e.properties.isHurdle?n("div",{staticClass:"groot-image-hurdle-bg",style:e.hurdleBgStyle}):n("m-groot-ui-image",{attrs:{url:e.image,height:e.height,"border-radius":e.borderRadius,unset:e.unset,"class-name":e.image?"":"opaticy-image"}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showTitle,expression:"showTitle"}],staticClass:"gt-jmy-pc-image-single-title"},[e._v(e._s(e.title))]),e._v(" "),e.hasFormParams&&e.showFormDialog?n("gt-jmy-pc-call-form",{attrs:{show:e.showFormDialog,properties:e.jumpAction.formParams,"widget-info-id":e.widgetInfoId},on:{close:function(t){return e.closeDialog("showFormDialog")}}}):e._e(),e._v(" "),e.hasConsultParams&&e.showConsultDialog?n("gt-jmy-pc-call-consult",{ref:"callConsult",attrs:{properties:e.consultProperities,"widget-info-id":e.widgetInfoId,"comp-target-id":e.consultCompTargetId},on:{onUnreadMessageReceive:e.onUnreadMessageReceive,onInviteMessageReceive:e.onInviteMessageReceive,clearUnreadMessage:e.clearUnreadMessage,clearInviteMessage:e.clearInviteMessage}}):e._e(),e._v(" "),n("get-trans-info",{on:{response:e.gotTransSettingInfo}})],1)}),[],!1,null,"60fc2dce",null);t.default=P.exports}])}));