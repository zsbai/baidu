function query2Json(n){if(!n)return null;for(var e,r=n.split("&"),t={},o=0,i=r.length;i>o;o++)e=r[o].match(/([^=]+)=(.*)/),t[e[1]]=e[2];return t}var UserMonitor=function(){function n(n){if(n){var r="log__"+(new Date).getTime(),t=window[r]=new Image;t.onload=t.onerror=function(){window[r]=null},t.src=n,t=null,e(n)}}function e(n){if(n){var e=RegExp("http://nsclick.baidu.com/v.gif","g"),r=n.replace(e,"https://log.news.baidu.com/v.gif"),t="log__"+(new Date).getTime(),o=window[t]=new Image;o.onload=o.onerror=function(){window[t]=null},o.src=r,o=null}}function r(n){var e=[];if(!n)return"";for(var r in n)e.push(r+"="+encodeURIComponent(n[r]));return e.join("&")}function t(n,e){var r="";return n?(e&&(r=e+"&"),r+="ra="+Math.random(),-1<n.indexOf("?")?n+"&"+r:n+"?"+r):""}function o(n){return n?(n=n.replace(/<[^>]*>/g,""),n.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g,"")):""}function i(n,e){for(var r in n)(void 0===e[r]||null===e[r])&&(e[r]=n[r])}function a(e,a,c){var u,f,l,e=e||window.event,d=e.srcElement||e.target,v=g[a],p="//nsclick.baidu.com/v.gif";l={pid:107,url:"",type:0,t:o(d.innerHTML),u:""},i(c,l),i(v,l),f=r(l),u=t(p,f),n(u)}function c(e,a,c){var u,f,l,e=e||window.event,d=e.srcElement||e.target,v=g[a],p="//nsclick.baidu.com/v.gif";"A"==d.tagName.toUpperCase()&&(l={pid:107,url:d.href,type:0},i(v,l),i(c,l),l.t=o(d.innerHTML),l.u=d.href,f=r(l),u=t(p,f),n(u))}function u(e,a,c){var u,f,l,d,e=e||window.event,v=e.srcElement||e.target,p=g[a],m="//nsclick.baidu.com/v.gif";if("IMG"==v.tagName.toUpperCase()){for(d=v.parentNode;d&&"A"!=d.tagName.toUpperCase();)d=d.parentNode;d&&(l={pid:107,url:d.href,type:0},i(p,l),i(c,l),l.t=o(d.innerHTML),l.u=d.href,f=r(l),u=t(m,f),n(u))}}function f(e,o,a){var c,u,f,l=e||window.event,d=l.srcElement||l.target,v=g[o],p="//nsclick.baidu.com/v.gif";"INPUT"==d.tagName.toUpperCase()&&"´úÂë/Ãû³Æ/Æ´Òô"!=d.form.code.value&&(f={pid:107,url:t(d.form.action,"code="+d.form.code.value),type:0},i(v,f),i(a,f),f.t=d.form.code.value,f.u=t(d.form.action,"code="+d.form.code.value),u=r(f),c=t(p,u),n(c))}function l(e,o,a){var c,u,f,e=e||window.event,l=(e.srcElement||e.target,g[o]),d="//nsclick.baidu.com/v.gif";f={pid:107,url:"",type:0},i(l,f),i(a,f),f.u="",u=r(f),c=t(d,u),n(c)}function d(e,o,a){var c,u,f,e=e||window.event,l=(e.srcElement||e.target,g[o]),d="//nsclick.baidu.com/v.gif";f={pid:107,url:"",type:0},i(l,f),i(a,f),f.u="",f.t="",u=r(f),c=t(d,u),n(c)}function v(n,e,r){var t=p[e];t&&t(n,e,r)}var p={1:a,2:c,3:u,4:f,5:l,6:d},m=parent.extraInfo?parent.extraInfo:window.extraInfo,g={1:m,2:m,3:m,4:m,5:m,6:m};return m||(m={}),{send:v}}();