var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.owns=function(b,f){return Object.prototype.hasOwnProperty.call(b,f)};$jscomp.assign="function"==typeof Object.assign?Object.assign:function(b,f){for(var e=1;e<arguments.length;e++){var h=arguments[e];if(h)for(var k in h)$jscomp.owns(h,k)&&(b[k]=h[k])}return b};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,f,e){b!=Array.prototype&&b!=Object.prototype&&(b[f]=e.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(b,f,e,h){if(f){e=$jscomp.global;b=b.split(".");for(h=0;h<b.length-1;h++){var k=b[h];k in e||(e[k]={});e=e[k]}b=b[b.length-1];h=e[b];f=f(h);f!=h&&null!=f&&$jscomp.defineProperty(e,b,{configurable:!0,writable:!0,value:f})}};$jscomp.polyfill("Object.assign",function(b){return b||$jscomp.assign},"es6","es3");
(function(){function b(a){a=Object.assign({url:"",type:"POST",data:{},success:function(a){},error:function(a){}},a);if(a.url){var d=XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),g=a.data;d.open("POST",a.url,!0);d.setRequestHeader("Content-type","application/json");d.send(g);d.onreadystatechange=function(){4!==d.readyState||200!==d.status&&304!==d.status?a.error(d.responseText):a.success(JSON.parse(d.responseText))}}}function f(a,d,g,c){if(window.PassMachine&&window.PassMachine.mkd){var b=
window.PassMachine.mkd;g={type:a,testurl:!1,id:"duedge-ai-captcha-div-id-1QhfV9AB",ak:g,verifySuccessFn:k,maskModule:d,initApiSuccessFn:function(){l.initVcode()}};"spin"===a&&"object"===typeof c?g.spinConfig=c:"slide"===a&&"object"===typeof c&&(g.slideConfig=c);d&&(g.verifySuccessFn=m);l=new b(g)}}function e(){if(!document.getElementById("duedge-ai-captcha-div-id-1QhfV9AB")){var a=document.createElement("div"),d=document.createElement("div");a.appendChild(d);d.setAttribute("id","duedge-ai-captcha-div-id-1QhfV9AB");
document.getElementsByTagName("body")[0].appendChild(a)}}var h={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var d="",g=0;for(a=h._utf8_encode(a);g<a.length;){var c=a.charCodeAt(g++);var b=a.charCodeAt(g++);var e=a.charCodeAt(g++);var p=c>>2;c=(c&3)<<4|b>>4;var f=(b&15)<<2|e>>6;var k=e&63;isNaN(b)?f=k=64:isNaN(e)&&(k=64);d=d+this._keyStr.charAt(p)+this._keyStr.charAt(c)+this._keyStr.charAt(f)+this._keyStr.charAt(k)}return d},decode:function(a){var d=
"",g=0;for(a=a.replace(/[^A-Za-z0-9\+\/=]/g,"");g<a.length;){var c=this._keyStr.indexOf(a.charAt(g++));var b=this._keyStr.indexOf(a.charAt(g++));var e=this._keyStr.indexOf(a.charAt(g++));var f=this._keyStr.indexOf(a.charAt(g++));c=c<<2|b>>4;b=(b&15)<<4|e>>2;var k=(e&3)<<6|f;d+=String.fromCharCode(c);64!=e&&(d+=String.fromCharCode(b));64!=f&&(d+=String.fromCharCode(k))}return d=h._utf8_decode(d)},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");for(var d="",b=0;b<a.length;b++){var c=a.charCodeAt(b);
128>c?d+=String.fromCharCode(c):(127<c&&2048>c?d+=String.fromCharCode(c>>6|192):(d+=String.fromCharCode(c>>12|224),d+=String.fromCharCode(c>>6&63|128)),d+=String.fromCharCode(c&63|128))}return d},_utf8_decode:function(a){var d="",b=0;for(c1=c2=0;b<a.length;){var c=a.charCodeAt(b);128>c?(d+=String.fromCharCode(c),b++):191<c&&224>c?(c2=a.charCodeAt(b+1),d+=String.fromCharCode((c&31)<<6|c2&63),b+=2):(c2=a.charCodeAt(b+1),c3=a.charCodeAt(b+2),d+=String.fromCharCode((c&15)<<12|(c2&63)<<6|c3&63),b+=3)}return d}};
"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(b,d){if(null==b)throw new TypeError("Cannot convert undefined or null to object");for(var a=Object(b),c=1;c<arguments.length;c++){var e=arguments[c];if(null!=e)for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(a[f]=e[f])}return a},writable:!0,configurable:!0});window.__duedge_isActive=!0;window.addEventListener("blur",function(){window.__duedge_isActive=!1});window.addEventListener("focus",function(){window.__duedge_isActive=
!0});var k=function(a){b({url:"/.well-known/yunjiasu-cgi/security/ai_captcha/verify",type:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(a),success:function(b){window.location.reload()}})},l,m=function(a){l.removeMask();b({url:"/.well-known/yunjiasu-cgi/security/ai_captcha/verify",type:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(a),success:function(b){b?document.getElementById("duedge-ai-captcha-div-id-1QhfV9AB").parentNode.removeChild(document.getElementById("duedge-ai-captcha-div-id-1QhfV9AB")):
l.initVcode()}})};window.__duedge__renderPage__=function(b,d,g,c){if("string"===typeof c&&"nil"!==c&&0<c.length){var a=void 0;try{a=JSON.parse(c)}catch(n){console.log("failed to parse conf:",c,". err:",n.toString())}c=a}else c=void 0;"fullPage"===b?(e(),f(d,!1,g,c)):setInterval(function(){if(window.__duedge_isActive){var b=c;var a=document.cookie.match(/(^| )__yjs_captcha_challenge_embed_need=([^;]*)(;|$)/);a=a instanceof Array&&3<=a.length?unescape(a[2]):null;"string"===typeof a&&0<a.length&&(a=
JSON.parse(h.decode(a)),"zwuwzmjjot"===a.key&&(a.callback&&h.decode(a.callback),document.cookie="__yjs_captcha_challenge_embed_need=; Domain=."+a.host+"; expires=Thu, 01-Jan-70 00:00:01 GMT; Path=/",e(),f(d,!0,g,b)))}},1E3)}})();
