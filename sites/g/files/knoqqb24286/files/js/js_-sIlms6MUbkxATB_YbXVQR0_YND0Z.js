/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
;
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);

/* Adobe Tag Container Loader version: 1.0.7
Copyright 1996-2012 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */
var s=new TagContainerLoader()
s.tagContainerDC="d2"
s.tagContainerNamespace="thomsonreuterscorporategroupweb"
s.tagContainerName="CoreClientCode"
s.loadTagContainer()

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
function TagContainerLoader(){var t=this,w=t.w=window;t.d=w.document;t._c='s_l';if(!w.s_c_il){w.s_c_il=[];w.s_c_in=0}t._il=w.s_c_il;t._in=w.s_c_in;t._il[t._in]=t;w.s_c_in++;t.timeout=5000;t.to=
new Function('var t=s_c_il['+t._in+'];if(t.mt)t.mt(0)');t.loadTagContainer=function(){var t=this,l,p=t.d.body,n,a=t.tagContainerServer?t.tagContainerServer:'www.adobetag.com',b=
t.tagContainerServerSecure?t.tagContainerServerSecure:a,c=t.d.cookie,d=t.tagContainerEnv?t.tagContainerEnv:(c?(c.indexOf('s_tagEnv=dev')>=0?'dev':(c.indexOf('s_tagEnv=stage')>=0?'stage':'live')):
'live'),u=(t.w.location.protocol.toLowerCase().indexOf('https')>=0?'https://'+b:'http://'+a)+'/'+(t.tagContainerDC?t.tagContainerDC+'/':'')+t.tagContainerNamespace+'/'+d+'/'+t.tagContainerName+'.js'
if(t.tagContainerURL)u=t.tagContainerURL;if(t.timeout)t.ti=setTimeout(t.to,t.timeout);if(t.d.getElementsByTagName){l=t.d.getElementsByTagName('HEAD');if(l&&l[0])p=l[0]}else p=0;if(
p&&!t.tagContainerSynchronous){n=t.d.createElement('SCRIPT');if(n){n.type='text/javascript';n.setAttribute('async','async');n.src=u;if(p.firstChild)p.insertBefore(n,p.firstChild);else p.appendChild(n)
}}else t.d.write('<sc'+'ript language="JavaScript" type="text/javascript" sr'+'c="'+u+'"></sc'+'ript>')};t.fs=function(x,y){if(x&&y){var a=x.split(','),b=y.split(','),i,j;for(i=0;i<a.length;i++){
for(j=0;j<b.length;j++)if(a[i]==b[j])return 1}}return 0};t.aa=function(a){var b=0,i;if(a){b=[];for(i=0;i<a.length;i++)b[i]=a[i]}return b};t.wl=[];t.wq=[];t.createAsynchronousCustomTagHandler=function(
o,f){var t=this,x,i;if(!f){f=o;o=0;x=t.w}else{if(!t.w[o])t.w[o]={};x=t.wl[o]=t.w[o]}if(typeof(f)!='object')f=[f];for(i=0;i<f.length;i++)if(!x[f[i]])x[f[i]]=new Function('var t=s_c_il['+t._in+
'];t.wq[t.wq.length]={'+(o?'o:"'+o+'",':'')+'f:"'+f[i]+'",a:t.aa(arguments)}')};t.as=function(x){var y=[],i;for(i=1;i<x.length;i++)y[y.length]=x[i];return y};t.s=0;t.contextData={}
t.retrieveLightData={};if(!w.s_giq)w.s_giq=[];t._gi=w.s_gi;w.s_gi=new Function('u','var t=s_c_il['+t._in+
'],w=t.w,l=t._il,i,j,x,s;u=u.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=="s_c"||(j>0&&x=="s_l"))&&s.oun&&(s.oun==u||(s.fs&&s.sa&&s.fs(s.oun,u)))){'+
'if(s.sa)s.sa(u);return s}}if(!t.oun){t.sa(u);return t}if(t._gi)return t._gi(u);s=new TagContainerLoader();s.tagContainerName="s_tca_"+w.s_giq.length;s.sa(u);w.s_giq[w.s_giq.length]=s;return s');t.sa=
function(u){var t=this;if(t.s)t.s.sa(u);t.un=u;if(!t.oun)t.oun=u;else if(!t.fs(t.oun,u))t.oun+=','+u};t.tq=[];t.track=t.t=function(vo){var t=this,m;if(t.s)return t.s.t(vo);if(!vo)vo={};for(m in t){if(
m!='un'||t.u!=t.un)vo[m]=t[m]}t.tq[t.tq.length]=vo;t.lnk=t.linkName=t.linkType='';return '';};t.trackLink=t.tl=function(o,u,n,vo){var t=this;if(t.s)return t.s.tl(o,u,v,vo);t.lnk=o;t.linkType=u
t.linkName=n;return t.t(vo)};t.trackLight=function(p,ss,i,vo){var t=this;if(t.s)return t.s.trackLight(p,ss,i,vo);t.lightProfileID=p;t.lightStoreForSeconds=ss;t.lightIncrementBy=i;return t.t(vo)}
t.lmq=[];t.loadModule=function(n,u,d){var t=this;if(t.s)return t.s.loadModule(n,u,d);t.lmq[t.lmq.length]={n:n,u:u,d:d};return 0};t.ml=[];t.mmq=[];t.mo=function(m,f){var t=this,i;t.ml[m]=t[m]={};if(f)
for(i=0;i<f.length;i++)t[m][f[i]]=new Function('var t=s_c_il['+t._in+'];t.mmq[t.mmq.length]={m:"'+m+'",f:"'+f[i]+'",a:t.aa(arguments)}')};t.mo('Media',['open','play','stop','close','track']);t.mo(
'Survey',['launch']);t.mci=[];t.mn=[];t.mc=function(n,m,p,k){var t=this,b,l=0;if(typeof(mboxFactoryDefault)=='undefined'||t.d.getElementById(m)==null)return;if(!mboxFactoryDefault.isEnabled()){
clearInterval(t.mci[k]);t.mt(true);return}if(typeof(mboxFactoryDefault.get(t.mn[0],0))!='undefined')l=mboxFactoryDefault.get(t.mn[0],0).isShown();if(k==0||l){clearInterval(t.mci[k]);b=
mboxFactoryDefault.create(n,p.split("&"));if(b)b.load()}};if(!w.mboxCreate&&!w.mboxDefine&&!w.mboxUpdate){w.mboxVersion='mini';if(!t.d.getElementById('mboxScriptContainer'))t.d.write(
'<div id="mboxScriptContainer" style="display:none;visibility:hidden;"></div><style>.mboxDefault{visibility:hidden;}</style>');t.mt=function(f){var t=this,i,j,d;if(typeof(mboxFactoryDefault)==
'undefined'||f){for(i in t.mci)clearInterval(t.mci[i]);d=(t.d.getElementsByClassName)?t.d.getElementsByClassName('mboxDefault'):t.d.getElementsByTagName('div');for(j in d)if(d[j].className==
"mboxDefault")d[j].style.visibility="visible"}};t.mpi={};t.mp=function(x,m){var t=this;t.mpi[x]=setInterval(function(){if(typeof(mboxFactoryDefault)==='undefined')return;m();clearInterval(t.mpi[x])},
13)};w.mboxCreate=function(n){var j=0,i,m,p,k;for(i in t.mn)if(t.mn[i]==n)j++;t.mn[t.mn.length]=n;m='mboxMarker-default-'+n+'-'+j;t.d.write('<div id="'+m+
'" style="visibility:hidden;display:none">&nbsp;</div>');p=t.as(arguments).join("&");k=t.mci.length;t.mci[k]=setInterval(function(){t.mc(n,m,p,k);},5)};w.mboxDefine=function(d,n){var a=t.as(arguments)
t.mp('define_'+n,function(){mboxFactoryDefault.create(n,a,d);})};w.mboxUpdate=function(n){var a=t.as(arguments),x;x='update_'+n;t.mpi[x]=setInterval(function(){if(typeof(mboxFactoryDefault)===
'undefined'||typeof(mboxFactoryDefault.get(n))==='undefined')return;mboxFactoryDefault.update(n,a);clearInterval(t.mpi[x]);},13)};w.mboxLoadSCPlugin=function(s){(function(){if(typeof(
mboxFactoryDefault)==='undefined'||typeof(mboxExternalLoadSCPlugin)==='undefined'||(s._c=='s_l'&&!s.s)){setTimeout(arguments.callee,19);return}if(s._c=='s_l')s=s.s;mboxExternalLoadSCPlugin(s)})()};}};
/**
 * For jQuery versions less than 3.5.0, this replaces the jQuery.htmlPrefilter()
 * function with one that fixes these security vulnerabilities while also
 * retaining the pre-3.5.0 behavior where it's safe to do so.
 * - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11022
 * - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11023
 */

(function (jQuery) {

  // No backport is needed if we're already on jQuery 3.5 or higher.
  var versionParts = jQuery.fn.jquery.split('.');
  var majorVersion = parseInt(versionParts[0]);
  var minorVersion = parseInt(versionParts[1]);
  if ( (majorVersion > 3) || (majorVersion === 3 && minorVersion >= 5) ) {
    return;
  }

  // Prior to jQuery 3.5, jQuery converted XHTML-style self-closing tags to
  // their XML equivalent: e.g., "<div />" to "<div></div>". This is
  // problematic for several reasons, including that it's vulnerable to XSS
  // attacks. However, since this was jQuery's behavior for many years, many
  // Drupal modules and jQuery plugins may be relying on it. Therefore, we
  // preserve that behavior, but for a limited set of tags only, that we believe
  // to not be vulnerable. This is the set of HTML tags that satisfy all of the
  // following conditions:
  // - In DOMPurify's list of HTML tags. If an HTML tag isn't safe enough to
  //   appear in that list, then we don't want to mess with it here either.
  //   @see https://github.com/cure53/DOMPurify/blob/2.0.11/dist/purify.js#L128
  // - A normal element (not a void, template, text, or foreign element).
  //   @see https://html.spec.whatwg.org/multipage/syntax.html#elements-2
  // - An element that is still defined by the current HTML specification
  //   (not a deprecated element), because we do not want to rely on how
  //   browsers parse deprecated elements.
  //   @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  // - Not 'html', 'head', or 'body', because this pseudo-XHTML expansion is
  //   designed for fragments, not entire documents.
  // - Not 'colgroup', because due to an idiosyncrasy of jQuery's original
  //   regular expression, it didn't match on colgroup, and we don't want to
  //   introduce a behavior change for that.
  var selfClosingTagsToReplace = [
    'a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo',
    'blockquote', 'button', 'canvas', 'caption', 'cite', 'code', 'data',
    'datalist', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em',
    'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3',
    'h4', 'h5', 'h6', 'header', 'hgroup', 'i', 'ins', 'kbd', 'label', 'legend',
    'li', 'main', 'map', 'mark', 'menu', 'meter', 'nav', 'ol', 'optgroup',
    'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt',
    'ruby', 's', 'samp', 'section', 'select', 'small', 'source', 'span',
    'strong', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th',
    'thead', 'time', 'tr', 'u', 'ul', 'var', 'video'
  ];

  // Define regular expressions for <TAG/> and <TAG ATTRIBUTES/>. Doing this as
  // two expressions makes it easier to target <a/> without also targeting
  // every tag that starts with "a".
  var xhtmlRegExpGroup = '(' + selfClosingTagsToReplace.join('|') + ')';
  var whitespace = '[\\x20\\t\\r\\n\\f]';
  var rxhtmlTagWithoutSpaceOrAttributes = new RegExp('<' + xhtmlRegExpGroup + '\\/>', 'gi');
  var rxhtmlTagWithSpaceAndMaybeAttributes = new RegExp('<' + xhtmlRegExpGroup + '(' + whitespace + '[^>]*)\\/>', 'gi');

  // jQuery 3.5 also fixed a vulnerability for when </select> appears within
  // an <option> or <optgroup>, but it did that in local code that we can't
  // backport directly. Instead, we filter such cases out. To do so, we need to
  // determine when jQuery would otherwise invoke the vulnerable code, which it
  // uses this regular expression to determine.
  // @see https://github.com/jquery/jquery/blob/3.4.1/dist/jquery.js#L4716
  var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

  jQuery.extend({
    htmlPrefilter: function (html) {
      // This is how jQuery determines the first tag in the HTML.
      // @see https://github.com/jquery/jquery/blob/3.4.1/dist/jquery.js#L4815
      var tag = ( rtagName.exec( html ) || [ "", "" ] )[ 1 ].toLowerCase();

      // It is not valid HTML for <option> or <optgroup> to have <select> as
      // either a descendant or sibling, and attempts to inject one can cause
      // XSS on jQuery versions before 3.5. Since this is invalid HTML and a
      // possible XSS attack, reject the entire string.
      // @see https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11023
      if ((tag === 'option' || tag === 'optgroup') && html.match(/<\/?select/i)) {
        html = '';
      }

      // Retain jQuery 3.4's conversion of pseudo-XHTML, but for only the
      // tags in the `selfClosingTagsToReplace` list defined above.
      // @see https://github.com/jquery/jquery/blob/3.4.1/dist/jquery.js#L5979
      // @see https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-11022
      html = html.replace(rxhtmlTagWithoutSpaceOrAttributes, "<$1></$1>");
      html = html.replace(rxhtmlTagWithSpaceAndMaybeAttributes, "<$1$2></$1>");

      return html;
    }
  });

})(jQuery);
;
/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):a(this[0].form)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],a):a(jQuery)}(function(a){return a.fn.labels=function(){var b,c,d,e,f;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),d=this.attr("id"),d&&(b=this.eq(0).parents().last(),f=b.add(b.length?b.siblings():this.siblings()),c="label[for='"+a.ui.escapeSelector(d)+"']",e=e.add(f.find(c).addBack(c))),this.pushStack(e))}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){"1.7"===a.fn.jquery.substring(0,3)&&(a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],a):a(jQuery)}(function(a){return a.extend(a.expr[":"],{tabbable:function(b){var c=a.attr(b,"tabindex"),d=null!=c;return(!d||c>=0)&&a.ui.focusable(b,d)}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return a.ui=a.ui||{},a.ui.version="1.12.1"});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.escapeSelector=function(){var a=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;return function(b){return b.replace(a,"\\$1")}}()});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){function b(a){for(var b=a.css("visibility");"inherit"===b;)a=a.parent(),b=a.css("visibility");return"hidden"!==b}return a.ui.focusable=function(c,d){var e,f,g,h,i,j=c.nodeName.toLowerCase();return"area"===j?(e=c.parentNode,f=e.name,!(!c.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']"),g.length>0&&g.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(j)?(h=!c.disabled,h&&(i=a(c).closest("fieldset")[0],i&&(h=!i.disabled))):h="a"===j?c.href||d:d,h&&a(c).is(":visible")&&b(a(c)))},a.extend(a.expr[":"],{focusable:function(b){return a.ui.focusable(b,null!=a.attr(b,"tabindex"))}}),a.ui.focusable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeActiveElement=function(a){var b;try{b=a.activeElement}catch(c){b=a.body}return b||(b=a.body),b.nodeName||(b=a.body),b}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.safeBlur=function(b){b&&"body"!==b.nodeName.toLowerCase()&&a(b).trigger("blur")}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){var b=0,c=Array.prototype.slice;return a.cleanData=function(b){return function(c){var d,e,f;for(f=0;null!=(e=c[f]);f++)try{d=a._data(e,"events"),d&&d.remove&&a(e).triggerHandler("remove")}catch(g){}b(c)}}(a.cleanData),a.widget=function(b,c,d){var e,f,g,h={},i=b.split(".")[0];b=b.split(".")[1];var j=i+"-"+b;return d||(d=c,c=a.Widget),a.isArray(d)&&(d=a.extend.apply(null,[{}].concat(d))),a.expr[":"][j.toLowerCase()]=function(b){return!!a.data(b,j)},a[i]=a[i]||{},e=a[i][b],f=a[i][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new f(a,b)},a.extend(f,e,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),g=new c,g.options=a.widget.extend({},g.options),a.each(d,function(b,d){return a.isFunction(d)?void(h[b]=function(){function a(){return c.prototype[b].apply(this,arguments)}function e(a){return c.prototype[b].apply(this,a)}return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(h[b]=d)}),f.prototype=a.widget.extend(g,{widgetEventPrefix:e?g.widgetEventPrefix||b:b},h,{constructor:f,namespace:i,widgetName:b,widgetFullName:j}),e?(a.each(e._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,f,c._proto)}),delete e._childConstructors):c._childConstructors.push(f),a.widget.bridge(b,f),f},a.widget.extend=function(b){for(var d,e,f=c.call(arguments,1),g=0,h=f.length;g<h;g++)for(d in f[g])e=f[g][d],f[g].hasOwnProperty(d)&&void 0!==e&&(a.isPlainObject(e)?b[d]=a.isPlainObject(b[d])?a.widget.extend({},b[d],e):a.widget.extend({},e):b[d]=e);return b},a.widget.bridge=function(b,d){var e=d.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=c.call(arguments,1),i=this;return g?this.length||"instance"!==f?this.each(function(){var c,d=a.data(this,e);return"instance"===f?(i=d,!1):d?a.isFunction(d[f])&&"_"!==f.charAt(0)?(c=d[f].apply(d,h),c!==d&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0):a.error("no such method '"+f+"' for "+b+" widget instance"):a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):i=void 0:(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,e);b?(b.option(f||{}),b._init&&b._init()):a.data(this,e,new d(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(c,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=b++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),this.classesElementLookup={},d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){var b=this;this._destroy(),a.each(this.classesElementLookup,function(a,c){b._removeClass(c,a)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},d=b.split("."),b=d.shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return"classes"===a&&this._setOptionClasses(b),this.options[a]=b,"disabled"===a&&this._setOptionDisabled(b),this},_setOptionClasses:function(b){var c,d,e;for(c in b)e=this.classesElementLookup[c],b[c]!==this.options.classes[c]&&e&&e.length&&(d=a(e.get()),this._removeClass(e,c),d.addClass(this._classes({element:d,keys:c,classes:b,add:!0})))},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(b){function c(c,f){var g,h;for(h=0;h<c.length;h++)g=e.classesElementLookup[c[h]]||a(),g=a(b.add?a.unique(g.get().concat(b.element.get())):g.not(b.element).get()),e.classesElementLookup[c[h]]=g,d.push(c[h]),f&&b.classes[c[h]]&&d.push(b.classes[c[h]])}var d=[],e=this;return b=a.extend({element:this.element,classes:this.options.classes||{}},b),this._on(b.element,{remove:"_untrackClassesElement"}),b.keys&&c(b.keys.match(/\S+/g)||[],!0),b.extra&&c(b.extra.match(/\S+/g)||[]),d.join(" ")},_untrackClassesElement:function(b){var c=this;a.each(c.classesElementLookup,function(d,e){a.inArray(b.target,e)!==-1&&(c.classesElementLookup[d]=a(e.not(b.target).get()))})},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(a,b,c,d){d="boolean"==typeof d?d:c;var e="string"==typeof a||null===a,f={extra:e?b:c,keys:e?a:b,element:e?this.element:a,add:d};return f.element.toggleClass(this._classes(f),d),this},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.on(j,k,h):c.on(j,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.off(c).off(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){this._addClass(a(b.currentTarget),null,"ui-state-hover")},mouseleave:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){this._addClass(a(b.currentTarget),null,"ui-state-focus")},focusout:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget});;
/**
 * @file
 * A JavaScript file for the theme.
 *
 */

(function ($, Drupal, window, document) {
  'use strict';

  Drupal.behaviors.nirOmniture = {
    attach: function (context, settings) {
      $('a[type*="application/pdf"]').on('click', function (event) {
        // Log file download event for Adobe analytics.
        // Use the file name if available or the href if not.
        var dload_name = ($(this).attr('title') == null) ? $(this).attr('href') : $(this).attr('title');
        s.tl(this,'d',dload_name);
      });
    }
  };

})(jQuery, Drupal, this, this.document);
;
/*! DataTables 1.10.9
 * Â©2008-2015 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.9
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2008-2015 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(/** @lends <global> */function( window, document, undefined ) {

	(function( factory ) {
		"use strict";

		if ( typeof define === 'function' && define.amd ) {
			// Define as an AMD module if possible
			define( 'datatables', ['jquery'], factory );
		}
		else if ( typeof exports === 'object' ) {
			// Node/CommonJS
			module.exports = factory( require( 'jquery' ) );
		}
		else if ( jQuery && !jQuery.fn.dataTable ) {
			// Define using browser globals otherwise
			// Prevent multiple instantiations if the script is loaded twice
			factory( jQuery );
		}
	}
	(/** @lends <global> */function( $ ) {
		"use strict";

		/**
		 * DataTables is a plug-in for the jQuery Javascript library. It is a highly
		 * flexible tool, based upon the foundations of progressive enhancement,
		 * which will add advanced interaction controls to any HTML table. For a
		 * full list of features please refer to
		 * [DataTables.net](href="http://datatables.net).
		 *
		 * Note that the `DataTable` object is not a global variable but is aliased
		 * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
		 * be  accessed.
		 *
		 *  @class
		 *  @param {object} [init={}] Configuration object for DataTables. Options
		 *    are defined by {@link DataTable.defaults}
		 *  @requires jQuery 1.7+
		 *
		 *  @example
		 *    // Basic initialisation
		 *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
		 *
		 *  @example
		 *    // Initialisation with configuration options - in this case, disable
		 *    // pagination and sorting.
		 *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "paginate": false,
	 *        "sort": false
	 *      } );
	 *    } );
		 */
		var DataTable;


		/*
		 * It is useful to have variables which are scoped locally so only the
		 * DataTables functions can access them and they don't leak into global space.
		 * At the same time these functions are often useful over multiple files in the
		 * core and API, so we list, or at least document, all variables which are used
		 * by DataTables as private variables here. This also ensures that there is no
		 * clashing of variable names and that they can easily referenced for reuse.
		 */


		// Defined else where
		//  _selector_run
		//  _selector_opts
		//  _selector_first
		//  _selector_row_indexes

		var _ext; // DataTable.ext
		var _Api; // DataTable.Api
		var _api_register; // DataTable.Api.register
		var _api_registerPlural; // DataTable.Api.registerPlural

		var _re_dic = {};
		var _re_new_lines = /[\r\n]/g;
		var _re_html = /<.*?>/g;
		var _re_date_start = /^[\w\+\-]/;
		var _re_date_end = /[\w\+\-]$/;

		// Escape regular expression special characters
		var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );

		// http://en.wikipedia.org/wiki/Foreign_exchange_market
		// - \u20BD - Russian ruble.
		// - \u20a9 - South Korean Won
		// - \u20BA - Turkish Lira
		// - \u20B9 - Indian Rupee
		// - R - Brazil (R$) and South Africa
		// - fr - Swiss Franc
		// - kr - Swedish krona, Norwegian krone and Danish krone
		// - \u2009 is thin space and \u202F is narrow no-break space, both used in many
		//   standards as thousands separators.
		var _re_formatted_numeric = /[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi;


		var _empty = function ( d ) {
			return !d || d === true || d === '-' ? true : false;
		};


		var _intVal = function ( s ) {
			var integer = parseInt( s, 10 );
			return !isNaN(integer) && isFinite(s) ? integer : null;
		};

		// Convert from a formatted number with characters other than `.` as the
		// decimal place, to a Javascript number
		var _numToDecimal = function ( num, decimalPoint ) {
			// Cache created regular expressions for speed as this function is called often
			if ( ! _re_dic[ decimalPoint ] ) {
				_re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
			}
			return typeof num === 'string' && decimalPoint !== '.' ?
				num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
				num;
		};


		var _isNumber = function ( d, decimalPoint, formatted ) {
			var strType = typeof d === 'string';

			// If empty return immediately so there must be a number if it is a
			// formatted string (this stops the string "k", or "kr", etc being detected
			// as a formatted number for currency
			if ( _empty( d ) ) {
				return true;
			}

			if ( decimalPoint && strType ) {
				d = _numToDecimal( d, decimalPoint );
			}

			if ( formatted && strType ) {
				d = d.replace( _re_formatted_numeric, '' );
			}

			return !isNaN( parseFloat(d) ) && isFinite( d );
		};


		// A string without HTML in it can be considered to be HTML still
		var _isHtml = function ( d ) {
			return _empty( d ) || typeof d === 'string';
		};


		var _htmlNumeric = function ( d, decimalPoint, formatted ) {
			if ( _empty( d ) ) {
				return true;
			}

			var html = _isHtml( d );
			return ! html ?
				null :
				_isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
					true :
					null;
		};


		var _pluck = function ( a, prop, prop2 ) {
			var out = [];
			var i=0, ien=a.length;

			// Could have the test in the loop for slightly smaller code, but speed
			// is essential here
			if ( prop2 !== undefined ) {
				for ( ; i<ien ; i++ ) {
					if ( a[i] && a[i][ prop ] ) {
						out.push( a[i][ prop ][ prop2 ] );
					}
				}
			}
			else {
				for ( ; i<ien ; i++ ) {
					if ( a[i] ) {
						out.push( a[i][ prop ] );
					}
				}
			}

			return out;
		};


		// Basically the same as _pluck, but rather than looping over `a` we use `order`
		// as the indexes to pick from `a`
		var _pluck_order = function ( a, order, prop, prop2 )
		{
			var out = [];
			var i=0, ien=order.length;

			// Could have the test in the loop for slightly smaller code, but speed
			// is essential here
			if ( prop2 !== undefined ) {
				for ( ; i<ien ; i++ ) {
					if ( a[ order[i] ][ prop ] ) {
						out.push( a[ order[i] ][ prop ][ prop2 ] );
					}
				}
			}
			else {
				for ( ; i<ien ; i++ ) {
					out.push( a[ order[i] ][ prop ] );
				}
			}

			return out;
		};


		var _range = function ( len, start )
		{
			var out = [];
			var end;

			if ( start === undefined ) {
				start = 0;
				end = len;
			}
			else {
				end = start;
				start = len;
			}

			for ( var i=start ; i<end ; i++ ) {
				out.push( i );
			}

			return out;
		};


		var _removeEmpty = function ( a )
		{
			var out = [];

			for ( var i=0, ien=a.length ; i<ien ; i++ ) {
				if ( a[i] ) { // careful - will remove all falsy values!
					out.push( a[i] );
				}
			}

			return out;
		};


		var _stripHtml = function ( d ) {
			return d.replace( _re_html, '' );
		};


		/**
		 * Find the unique elements in a source array.
		 *
		 * @param  {array} src Source array
		 * @return {array} Array of unique items
		 * @ignore
		 */
		var _unique = function ( src )
		{
			// A faster unique method is to use object keys to identify used values,
			// but this doesn't work with arrays or objects, which we must also
			// consider. See jsperf.com/compare-array-unique-versions/4 for more
			// information.
			var
				out = [],
				val,
				i, ien=src.length,
				j, k=0;

			again: for ( i=0 ; i<ien ; i++ ) {
				val = src[i];

				for ( j=0 ; j<k ; j++ ) {
					if ( out[j] === val ) {
						continue again;
					}
				}

				out.push( val );
				k++;
			}

			return out;
		};



		/**
		 * Create a mapping object that allows camel case parameters to be looked up
		 * for their Hungarian counterparts. The mapping is stored in a private
		 * parameter called `_hungarianMap` which can be accessed on the source object.
		 *  @param {object} o
		 *  @memberof DataTable#oApi
		 */
		function _fnHungarianMap ( o )
		{
			var
				hungarian = 'a aa ai ao as b fn i m o s ',
				match,
				newKey,
				map = {};

			$.each( o, function (key, val) {
				match = key.match(/^([^A-Z]+?)([A-Z])/);

				if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
				{
					newKey = key.replace( match[0], match[2].toLowerCase() );
					map[ newKey ] = key;

					if ( match[1] === 'o' )
					{
						_fnHungarianMap( o[key] );
					}
				}
			} );

			o._hungarianMap = map;
		}


		/**
		 * Convert from camel case parameters to Hungarian, based on a Hungarian map
		 * created by _fnHungarianMap.
		 *  @param {object} src The model object which holds all parameters that can be
		 *    mapped.
		 *  @param {object} user The object to convert from camel case to Hungarian.
		 *  @param {boolean} force When set to `true`, properties which already have a
		 *    Hungarian value in the `user` object will be overwritten. Otherwise they
		 *    won't be.
		 *  @memberof DataTable#oApi
		 */
		function _fnCamelToHungarian ( src, user, force )
		{
			if ( ! src._hungarianMap ) {
				_fnHungarianMap( src );
			}

			var hungarianKey;

			$.each( user, function (key, val) {
				hungarianKey = src._hungarianMap[ key ];

				if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
				{
					// For objects, we need to buzz down into the object to copy parameters
					if ( hungarianKey.charAt(0) === 'o' )
					{
						// Copy the camelCase options over to the hungarian
						if ( ! user[ hungarianKey ] ) {
							user[ hungarianKey ] = {};
						}
						$.extend( true, user[hungarianKey], user[key] );

						_fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
					}
					else {
						user[hungarianKey] = user[ key ];
					}
				}
			} );
		}


		/**
		 * Language compatibility - when certain options are given, and others aren't, we
		 * need to duplicate the values over, in order to provide backwards compatibility
		 * with older language files.
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnLanguageCompat( lang )
		{
			var defaults = DataTable.defaults.oLanguage;
			var zeroRecords = lang.sZeroRecords;

			/* Backwards compatibility - if there is no sEmptyTable given, then use the same as
			 * sZeroRecords - assuming that is given.
			 */
			if ( ! lang.sEmptyTable && zeroRecords &&
				defaults.sEmptyTable === "No data available in table" )
			{
				_fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
			}

			/* Likewise with loading records */
			if ( ! lang.sLoadingRecords && zeroRecords &&
				defaults.sLoadingRecords === "Loading..." )
			{
				_fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
			}

			// Old parameter name of the thousands separator mapped onto the new
			if ( lang.sInfoThousands ) {
				lang.sThousands = lang.sInfoThousands;
			}

			var decimal = lang.sDecimal;
			if ( decimal ) {
				_addNumericSort( decimal );
			}
		}


		/**
		 * Map one parameter onto another
		 *  @param {object} o Object to map
		 *  @param {*} knew The new parameter name
		 *  @param {*} old The old parameter name
		 */
		var _fnCompatMap = function ( o, knew, old ) {
			if ( o[ knew ] !== undefined ) {
				o[ old ] = o[ knew ];
			}
		};


		/**
		 * Provide backwards compatibility for the main DT options. Note that the new
		 * options are mapped onto the old parameters, so this is an external interface
		 * change only.
		 *  @param {object} init Object to map
		 */
		function _fnCompatOpts ( init )
		{
			_fnCompatMap( init, 'ordering',      'bSort' );
			_fnCompatMap( init, 'orderMulti',    'bSortMulti' );
			_fnCompatMap( init, 'orderClasses',  'bSortClasses' );
			_fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
			_fnCompatMap( init, 'order',         'aaSorting' );
			_fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
			_fnCompatMap( init, 'paging',        'bPaginate' );
			_fnCompatMap( init, 'pagingType',    'sPaginationType' );
			_fnCompatMap( init, 'pageLength',    'iDisplayLength' );
			_fnCompatMap( init, 'searching',     'bFilter' );

			// Boolean initialisation of x-scrolling
			if ( typeof init.sScrollX === 'boolean' ) {
				init.sScrollX = init.sScrollX ? '100%' : '';
			}

			// Column search objects are in an array, so it needs to be converted
			// element by element
			var searchCols = init.aoSearchCols;

			if ( searchCols ) {
				for ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {
					if ( searchCols[i] ) {
						_fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );
					}
				}
			}
		}


		/**
		 * Provide backwards compatibility for column options. Note that the new options
		 * are mapped onto the old parameters, so this is an external interface change
		 * only.
		 *  @param {object} init Object to map
		 */
		function _fnCompatCols ( init )
		{
			_fnCompatMap( init, 'orderable',     'bSortable' );
			_fnCompatMap( init, 'orderData',     'aDataSort' );
			_fnCompatMap( init, 'orderSequence', 'asSorting' );
			_fnCompatMap( init, 'orderDataType', 'sortDataType' );

			// orderData can be given as an integer
			var dataSort = init.aDataSort;
			if ( dataSort && ! $.isArray( dataSort ) ) {
				init.aDataSort = [ dataSort ];
			}
		}


		/**
		 * Browser feature detection for capabilities, quirks
		 *  @param {object} settings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnBrowserDetect( settings )
		{
			// We don't need to do this every time DataTables is constructed, the values
			// calculated are specific to the browser and OS configuration which we
			// don't expect to change between initialisations
			if ( ! DataTable.__browser ) {
				var browser = {};
				DataTable.__browser = browser;

				// Scrolling feature / quirks detection
				var n = $('<div/>')
					.css( {
						position: 'fixed',
						top: 0,
						left: 0,
						height: 1,
						width: 1,
						overflow: 'hidden'
					} )
					.append(
					$('<div/>')
						.css( {
							position: 'absolute',
							top: 1,
							left: 1,
							width: 100,
							overflow: 'scroll'
						} )
						.append(
						$('<div/>')
							.css( {
								width: '100%',
								height: 10
							} )
					)
				)
					.appendTo( 'body' );

				var outer = n.children();
				var inner = outer.children();

				// Numbers below, in order, are:
				// inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
				//
				// IE6 XP:                           100 100 100  83
				// IE7 Vista:                        100 100 100  83
				// IE 8+ Windows:                     83  83 100  83
				// Evergreen Windows:                 83  83 100  83
				// Evergreen Mac with scrollbars:     85  85 100  85
				// Evergreen Mac without scrollbars: 100 100 100 100

				// Get scrollbar width
				browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;

				// IE6/7 will oversize a width 100% element inside a scrolling element, to
				// include the width of the scrollbar, while other browsers ensure the inner
				// element is contained without forcing scrolling
				//console.log( inner.offsetWidth );
				browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;

				// In rtl text layout, some browsers (most, but not all) will place the
				// scrollbar on the left, rather than the right.
				browser.bScrollbarLeft = Math.round( inner.offset().left ) !== 1;

				// IE8- don't provide height and width for getBoundingClientRect
				browser.bBounding = n[0].getBoundingClientRect().width ? true : false;

				n.remove();
			}

			$.extend( settings.oBrowser, DataTable.__browser );
			settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
		}


		/**
		 * Array.prototype reduce[Right] method, used for browsers which don't support
		 * JS 1.6. Done this way to reduce code size, since we iterate either way
		 *  @param {object} settings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnReduce ( that, fn, init, start, end, inc )
		{
			var
				i = start,
				value,
				isSet = false;

			if ( init !== undefined ) {
				value = init;
				isSet = true;
			}

			while ( i !== end ) {
				if ( ! that.hasOwnProperty(i) ) {
					continue;
				}

				value = isSet ?
					fn( value, that[i], i, that ) :
					that[i];

				isSet = true;
				i += inc;
			}

			return value;
		}

		/**
		 * Add a column to the list used for the table with default values
		 *  @param {object} oSettings dataTables settings object
		 *  @param {node} nTh The th element for this column
		 *  @memberof DataTable#oApi
		 */
		function _fnAddColumn( oSettings, nTh )
		{
			// Add column to aoColumns array
			var oDefaults = DataTable.defaults.column;
			var iCol = oSettings.aoColumns.length;
			var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
				"nTh": nTh ? nTh : document.createElement('th'),
				"sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
				"aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
				"mData": oDefaults.mData ? oDefaults.mData : iCol,
				idx: iCol
			} );
			oSettings.aoColumns.push( oCol );

			// Add search object for column specific search. Note that the `searchCols[ iCol ]`
			// passed into extend can be undefined. This allows the user to give a default
			// with only some of the parameters defined, and also not give a default
			var searchCols = oSettings.aoPreSearchCols;
			searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );

			// Use the default column options function to initialise classes etc
			_fnColumnOptions( oSettings, iCol, $(nTh).data() );
		}


		/**
		 * Apply options for a column
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iCol column index to consider
		 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
		 *  @memberof DataTable#oApi
		 */
		function _fnColumnOptions( oSettings, iCol, oOptions )
		{
			var oCol = oSettings.aoColumns[ iCol ];
			var oClasses = oSettings.oClasses;
			var th = $(oCol.nTh);

			// Try to get width information from the DOM. We can't get it from CSS
			// as we'd need to parse the CSS stylesheet. `width` option can override
			if ( ! oCol.sWidthOrig ) {
				// Width attribute
				oCol.sWidthOrig = th.attr('width') || null;

				// Style attribute
				var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
				if ( t ) {
					oCol.sWidthOrig = t[1];
				}
			}

			/* User specified column options */
			if ( oOptions !== undefined && oOptions !== null )
			{
				// Backwards compatibility
				_fnCompatCols( oOptions );

				// Map camel case parameters to their Hungarian counterparts
				_fnCamelToHungarian( DataTable.defaults.column, oOptions );

				/* Backwards compatibility for mDataProp */
				if ( oOptions.mDataProp !== undefined && !oOptions.mData )
				{
					oOptions.mData = oOptions.mDataProp;
				}

				if ( oOptions.sType )
				{
					oCol._sManualType = oOptions.sType;
				}

				// `class` is a reserved word in Javascript, so we need to provide
				// the ability to use a valid name for the camel case input
				if ( oOptions.className && ! oOptions.sClass )
				{
					oOptions.sClass = oOptions.className;
				}

				$.extend( oCol, oOptions );
				_fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );

				/* iDataSort to be applied (backwards compatibility), but aDataSort will take
				 * priority if defined
				 */
				if ( oOptions.iDataSort !== undefined )
				{
					oCol.aDataSort = [ oOptions.iDataSort ];
				}
				_fnMap( oCol, oOptions, "aDataSort" );
			}

			/* Cache the data get and set functions for speed */
			var mDataSrc = oCol.mData;
			var mData = _fnGetObjectDataFn( mDataSrc );
			var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;

			var attrTest = function( src ) {
				return typeof src === 'string' && src.indexOf('@') !== -1;
			};
			oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
					attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
				);

			oCol.fnGetData = function (rowData, type, meta) {
				var innerData = mData( rowData, type, undefined, meta );

				return mRender && type ?
					mRender( innerData, type, rowData, meta ) :
					innerData;
			};
			oCol.fnSetData = function ( rowData, val, meta ) {
				return _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );
			};

			// Indicate if DataTables should read DOM data as an object or array
			// Used in _fnGetRowElements
			if ( typeof mDataSrc !== 'number' ) {
				oSettings._rowReadObject = true;
			}

			/* Feature sorting overrides column specific when off */
			if ( !oSettings.oFeatures.bSort )
			{
				oCol.bSortable = false;
				th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
			}

			/* Check that the class assignment is correct for sorting */
			var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
			var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
			if ( !oCol.bSortable || (!bAsc && !bDesc) )
			{
				oCol.sSortingClass = oClasses.sSortableNone;
				oCol.sSortingClassJUI = "";
			}
			else if ( bAsc && !bDesc )
			{
				oCol.sSortingClass = oClasses.sSortableAsc;
				oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
			}
			else if ( !bAsc && bDesc )
			{
				oCol.sSortingClass = oClasses.sSortableDesc;
				oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
			}
			else
			{
				oCol.sSortingClass = oClasses.sSortable;
				oCol.sSortingClassJUI = oClasses.sSortJUI;
			}
		}


		/**
		 * Adjust the table column widths for new data. Note: you would probably want to
		 * do a redraw after calling this function!
		 *  @param {object} settings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnAdjustColumnSizing ( settings )
		{
			/* Not interested in doing column width calculation if auto-width is disabled */
			if ( settings.oFeatures.bAutoWidth !== false )
			{
				var columns = settings.aoColumns;

				_fnCalculateColumnWidths( settings );
				for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
				{
					columns[i].nTh.style.width = columns[i].sWidth;
				}
			}

			var scroll = settings.oScroll;
			if ( scroll.sY !== '' || scroll.sX !== '')
			{
				_fnScrollDraw( settings );
			}

			_fnCallbackFire( settings, null, 'column-sizing', [settings] );
		}


		/**
		 * Covert the index of a visible column to the index in the data array (take account
		 * of hidden columns)
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iMatch Visible column index to lookup
		 *  @returns {int} i the data index
		 *  @memberof DataTable#oApi
		 */
		function _fnVisibleToColumnIndex( oSettings, iMatch )
		{
			var aiVis = _fnGetColumns( oSettings, 'bVisible' );

			return typeof aiVis[iMatch] === 'number' ?
				aiVis[iMatch] :
				null;
		}


		/**
		 * Covert the index of an index in the data array and convert it to the visible
		 *   column index (take account of hidden columns)
		 *  @param {int} iMatch Column index to lookup
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {int} i the data index
		 *  @memberof DataTable#oApi
		 */
		function _fnColumnIndexToVisible( oSettings, iMatch )
		{
			var aiVis = _fnGetColumns( oSettings, 'bVisible' );
			var iPos = $.inArray( iMatch, aiVis );

			return iPos !== -1 ? iPos : null;
		}


		/**
		 * Get the number of visible columns
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {int} i the number of visible columns
		 *  @memberof DataTable#oApi
		 */
		function _fnVisbleColumns( oSettings )
		{
			return _fnGetColumns( oSettings, 'bVisible' ).length;
		}


		/**
		 * Get an array of column indexes that match a given property
		 *  @param {object} oSettings dataTables settings object
		 *  @param {string} sParam Parameter in aoColumns to look for - typically
		 *    bVisible or bSearchable
		 *  @returns {array} Array of indexes with matched properties
		 *  @memberof DataTable#oApi
		 */
		function _fnGetColumns( oSettings, sParam )
		{
			var a = [];

			$.map( oSettings.aoColumns, function(val, i) {
				if ( val[sParam] ) {
					a.push( i );
				}
			} );

			return a;
		}


		/**
		 * Calculate the 'type' of a column
		 *  @param {object} settings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnColumnTypes ( settings )
		{
			var columns = settings.aoColumns;
			var data = settings.aoData;
			var types = DataTable.ext.type.detect;
			var i, ien, j, jen, k, ken;
			var col, cell, detectedType, cache;

			// For each column, spin over the 
			for ( i=0, ien=columns.length ; i<ien ; i++ ) {
				col = columns[i];
				cache = [];

				if ( ! col.sType && col._sManualType ) {
					col.sType = col._sManualType;
				}
				else if ( ! col.sType ) {
					for ( j=0, jen=types.length ; j<jen ; j++ ) {
						for ( k=0, ken=data.length ; k<ken ; k++ ) {
							// Use a cache array so we only need to get the type data
							// from the formatter once (when using multiple detectors)
							if ( cache[k] === undefined ) {
								cache[k] = _fnGetCellData( settings, k, i, 'type' );
							}

							detectedType = types[j]( cache[k], settings );

							// If null, then this type can't apply to this column, so
							// rather than testing all cells, break out. There is an
							// exception for the last type which is `html`. We need to
							// scan all rows since it is possible to mix string and HTML
							// types
							if ( ! detectedType && j !== types.length-1 ) {
								break;
							}

							// Only a single match is needed for html type since it is
							// bottom of the pile and very similar to string
							if ( detectedType === 'html' ) {
								break;
							}
						}

						// Type is valid for all data points in the column - use this
						// type
						if ( detectedType ) {
							col.sType = detectedType;
							break;
						}
					}

					// Fall back - if no type was detected, always use string
					if ( ! col.sType ) {
						col.sType = 'string';
					}
				}
			}
		}


		/**
		 * Take the column definitions and static columns arrays and calculate how
		 * they relate to column indexes. The callback function will then apply the
		 * definition found for a column to a suitable configuration object.
		 *  @param {object} oSettings dataTables settings object
		 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
		 *  @param {array} aoCols The aoColumns array that defines columns individually
		 *  @param {function} fn Callback function - takes two parameters, the calculated
		 *    column index and the definition for that column.
		 *  @memberof DataTable#oApi
		 */
		function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
		{
			var i, iLen, j, jLen, k, kLen, def;
			var columns = oSettings.aoColumns;

			// Column definitions with aTargets
			if ( aoColDefs )
			{
				/* Loop over the definitions array - loop in reverse so first instance has priority */
				for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
				{
					def = aoColDefs[i];

					/* Each definition can target multiple columns, as it is an array */
					var aTargets = def.targets !== undefined ?
						def.targets :
						def.aTargets;

					if ( ! $.isArray( aTargets ) )
					{
						aTargets = [ aTargets ];
					}

					for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
					{
						if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
						{
							/* Add columns that we don't yet know about */
							while( columns.length <= aTargets[j] )
							{
								_fnAddColumn( oSettings );
							}

							/* Integer, basic index */
							fn( aTargets[j], def );
						}
						else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
						{
							/* Negative integer, right to left column counting */
							fn( columns.length+aTargets[j], def );
						}
						else if ( typeof aTargets[j] === 'string' )
						{
							/* Class name matching on TH element */
							for ( k=0, kLen=columns.length ; k<kLen ; k++ )
							{
								if ( aTargets[j] == "_all" ||
									$(columns[k].nTh).hasClass( aTargets[j] ) )
								{
									fn( k, def );
								}
							}
						}
					}
				}
			}

			// Statically defined columns array
			if ( aoCols )
			{
				for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
				{
					fn( i, aoCols[i] );
				}
			}
		}

		/**
		 * Add a data array to the table, creating DOM node etc. This is the parallel to
		 * _fnGatherData, but for adding rows from a Javascript source, rather than a
		 * DOM source.
		 *  @param {object} oSettings dataTables settings object
		 *  @param {array} aData data array to be added
		 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
		 *    DataTables will create a row automatically
		 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
		 *    if nTr is.
		 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
		 *  @memberof DataTable#oApi
		 */
		function _fnAddData ( oSettings, aDataIn, nTr, anTds )
		{
			/* Create the object for storing information about this new row */
			var iRow = oSettings.aoData.length;
			var oData = $.extend( true, {}, DataTable.models.oRow, {
				src: nTr ? 'dom' : 'data',
				idx: iRow
			} );

			oData._aData = aDataIn;
			oSettings.aoData.push( oData );

			/* Create the cells */
			var nTd, sThisType;
			var columns = oSettings.aoColumns;

			// Invalidate the column types as the new data needs to be revalidated
			for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
			{
				columns[i].sType = null;
			}

			/* Add to the display array */
			oSettings.aiDisplayMaster.push( iRow );

			var id = oSettings.rowIdFn( aDataIn );
			if ( id !== undefined ) {
				oSettings.aIds[ id ] = oData;
			}

			/* Create the DOM information, or register it if already present */
			if ( nTr || ! oSettings.oFeatures.bDeferRender )
			{
				_fnCreateTr( oSettings, iRow, nTr, anTds );
			}

			return iRow;
		}


		/**
		 * Add one or more TR elements to the table. Generally we'd expect to
		 * use this for reading data from a DOM sourced table, but it could be
		 * used for an TR element. Note that if a TR is given, it is used (i.e.
		 * it is not cloned).
		 *  @param {object} settings dataTables settings object
		 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
		 *  @returns {array} Array of indexes for the added rows
		 *  @memberof DataTable#oApi
		 */
		function _fnAddTr( settings, trs )
		{
			var row;

			// Allow an individual node to be passed in
			if ( ! (trs instanceof $) ) {
				trs = $(trs);
			}

			return trs.map( function (i, el) {
				row = _fnGetRowElements( settings, el );
				return _fnAddData( settings, row.data, el, row.cells );
			} );
		}


		/**
		 * Take a TR element and convert it to an index in aoData
		 *  @param {object} oSettings dataTables settings object
		 *  @param {node} n the TR element to find
		 *  @returns {int} index if the node is found, null if not
		 *  @memberof DataTable#oApi
		 */
		function _fnNodeToDataIndex( oSettings, n )
		{
			return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
		}


		/**
		 * Take a TD element and convert it into a column data index (not the visible index)
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iRow The row number the TD/TH can be found in
		 *  @param {node} n The TD/TH element to find
		 *  @returns {int} index if the node is found, -1 if not
		 *  @memberof DataTable#oApi
		 */
		function _fnNodeToColumnIndex( oSettings, iRow, n )
		{
			return $.inArray( n, oSettings.aoData[ iRow ].anCells );
		}


		/**
		 * Get the data for a given cell from the internal cache, taking into account data mapping
		 *  @param {object} settings dataTables settings object
		 *  @param {int} rowIdx aoData row id
		 *  @param {int} colIdx Column index
		 *  @param {string} type data get type ('display', 'type' 'filter' 'sort')
		 *  @returns {*} Cell data
		 *  @memberof DataTable#oApi
		 */
		function _fnGetCellData( settings, rowIdx, colIdx, type )
		{
			var draw           = settings.iDraw;
			var col            = settings.aoColumns[colIdx];
			var rowData        = settings.aoData[rowIdx]._aData;
			var defaultContent = col.sDefaultContent;
			var cellData       = col.fnGetData( rowData, type, {
				settings: settings,
				row:      rowIdx,
				col:      colIdx
			} );

			if ( cellData === undefined ) {
				if ( settings.iDrawError != draw && defaultContent === null ) {
					_fnLog( settings, 0, "Requested unknown parameter "+
						(typeof col.mData=='function' ? '{function}' : "'"+col.mData+"'")+
						" for row "+rowIdx, 4 );
					settings.iDrawError = draw;
				}
				return defaultContent;
			}

			/* When the data source is null, we can use default column data */
			if ( (cellData === rowData || cellData === null) && defaultContent !== null ) {
				cellData = defaultContent;
			}
			else if ( typeof cellData === 'function' ) {
				// If the data source is a function, then we run it and use the return,
				// executing in the scope of the data object (for instances)
				return cellData.call( rowData );
			}

			if ( cellData === null && type == 'display' ) {
				return '';
			}
			return cellData;
		}


		/**
		 * Set the value for a specific cell, into the internal data cache
		 *  @param {object} settings dataTables settings object
		 *  @param {int} rowIdx aoData row id
		 *  @param {int} colIdx Column index
		 *  @param {*} val Value to set
		 *  @memberof DataTable#oApi
		 */
		function _fnSetCellData( settings, rowIdx, colIdx, val )
		{
			var col     = settings.aoColumns[colIdx];
			var rowData = settings.aoData[rowIdx]._aData;

			col.fnSetData( rowData, val, {
				settings: settings,
				row:      rowIdx,
				col:      colIdx
			}  );
		}


		// Private variable that is used to match action syntax in the data property object
		var __reArray = /\[.*?\]$/;
		var __reFn = /\(\)$/;

		/**
		 * Split string on periods, taking into account escaped periods
		 * @param  {string} str String to split
		 * @return {array} Split string
		 */
		function _fnSplitObjNotation( str )
		{
			return $.map( str.match(/(\\.|[^\.])+/g) || [''], function ( s ) {
				return s.replace(/\\./g, '.');
			} );
		}


		/**
		 * Return a function that can be used to get data from a source object, taking
		 * into account the ability to use nested objects as a source
		 *  @param {string|int|function} mSource The data source for the object
		 *  @returns {function} Data get function
		 *  @memberof DataTable#oApi
		 */
		function _fnGetObjectDataFn( mSource )
		{
			if ( $.isPlainObject( mSource ) )
			{
				/* Build an object of get functions, and wrap them in a single call */
				var o = {};
				$.each( mSource, function (key, val) {
					if ( val ) {
						o[key] = _fnGetObjectDataFn( val );
					}
				} );

				return function (data, type, row, meta) {
					var t = o[type] || o._;
					return t !== undefined ?
						t(data, type, row, meta) :
						data;
				};
			}
			else if ( mSource === null )
			{
				/* Give an empty string for rendering / sorting etc */
				return function (data) { // type, row and meta also passed, but not used
					return data;
				};
			}
			else if ( typeof mSource === 'function' )
			{
				return function (data, type, row, meta) {
					return mSource( data, type, row, meta );
				};
			}
			else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
				mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
			{
				/* If there is a . in the source string then the data source is in a
				 * nested object so we loop over the data for each level to get the next
				 * level down. On each loop we test for undefined, and if found immediately
				 * return. This allows entire objects to be missing and sDefaultContent to
				 * be used if defined, rather than throwing an error
				 */
				var fetchData = function (data, type, src) {
					var arrayNotation, funcNotation, out, innerSrc;

					if ( src !== "" )
					{
						var a = _fnSplitObjNotation( src );

						for ( var i=0, iLen=a.length ; i<iLen ; i++ )
						{
							// Check if we are dealing with special notation
							arrayNotation = a[i].match(__reArray);
							funcNotation = a[i].match(__reFn);

							if ( arrayNotation )
							{
								// Array notation
								a[i] = a[i].replace(__reArray, '');

								// Condition allows simply [] to be passed in
								if ( a[i] !== "" ) {
									data = data[ a[i] ];
								}
								out = [];

								// Get the remainder of the nested object to get
								a.splice( 0, i+1 );
								innerSrc = a.join('.');

								// Traverse each entry in the array getting the properties requested
								if ( $.isArray( data ) ) {
									for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
										out.push( fetchData( data[j], type, innerSrc ) );
									}
								}

								// If a string is given in between the array notation indicators, that
								// is used to join the strings together, otherwise an array is returned
								var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
								data = (join==="") ? out : out.join(join);

								// The inner call to fetchData has already traversed through the remainder
								// of the source requested, so we exit from the loop
								break;
							}
							else if ( funcNotation )
							{
								// Function call
								a[i] = a[i].replace(__reFn, '');
								data = data[ a[i] ]();
								continue;
							}

							if ( data === null || data[ a[i] ] === undefined )
							{
								return undefined;
							}
							data = data[ a[i] ];
						}
					}

					return data;
				};

				return function (data, type) { // row and meta also passed, but not used
					return fetchData( data, type, mSource );
				};
			}
			else
			{
				/* Array or flat object mapping */
				return function (data, type) { // row and meta also passed, but not used
					return data[mSource];
				};
			}
		}


		/**
		 * Return a function that can be used to set data from a source object, taking
		 * into account the ability to use nested objects as a source
		 *  @param {string|int|function} mSource The data source for the object
		 *  @returns {function} Data set function
		 *  @memberof DataTable#oApi
		 */
		function _fnSetObjectDataFn( mSource )
		{
			if ( $.isPlainObject( mSource ) )
			{
				/* Unlike get, only the underscore (global) option is used for for
				 * setting data since we don't know the type here. This is why an object
				 * option is not documented for `mData` (which is read/write), but it is
				 * for `mRender` which is read only.
				 */
				return _fnSetObjectDataFn( mSource._ );
			}
			else if ( mSource === null )
			{
				/* Nothing to do when the data source is null */
				return function () {};
			}
			else if ( typeof mSource === 'function' )
			{
				return function (data, val, meta) {
					mSource( data, 'set', val, meta );
				};
			}
			else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
				mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
			{
				/* Like the get, we need to get data from a nested object */
				var setData = function (data, val, src) {
					var a = _fnSplitObjNotation( src ), b;
					var aLast = a[a.length-1];
					var arrayNotation, funcNotation, o, innerSrc;

					for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )
					{
						// Check if we are dealing with an array notation request
						arrayNotation = a[i].match(__reArray);
						funcNotation = a[i].match(__reFn);

						if ( arrayNotation )
						{
							a[i] = a[i].replace(__reArray, '');
							data[ a[i] ] = [];

							// Get the remainder of the nested object to set so we can recurse
							b = a.slice();
							b.splice( 0, i+1 );
							innerSrc = b.join('.');

							// Traverse each entry in the array setting the properties requested
							if ( $.isArray( val ) )
							{
								for ( var j=0, jLen=val.length ; j<jLen ; j++ )
								{
									o = {};
									setData( o, val[j], innerSrc );
									data[ a[i] ].push( o );
								}
							}
							else
							{
								// We've been asked to save data to an array, but it
								// isn't array data to be saved. Best that can be done
								// is to just save the value.
								data[ a[i] ] = val;
							}

							// The inner call to setData has already traversed through the remainder
							// of the source and has set the data, thus we can exit here
							return;
						}
						else if ( funcNotation )
						{
							// Function call
							a[i] = a[i].replace(__reFn, '');
							data = data[ a[i] ]( val );
						}

						// If the nested object doesn't currently exist - since we are
						// trying to set the value - create it
						if ( data[ a[i] ] === null || data[ a[i] ] === undefined )
						{
							data[ a[i] ] = {};
						}
						data = data[ a[i] ];
					}

					// Last item in the input - i.e, the actual set
					if ( aLast.match(__reFn ) )
					{
						// Function call
						data = data[ aLast.replace(__reFn, '') ]( val );
					}
					else
					{
						// If array notation is used, we just want to strip it and use the property name
						// and assign the value. If it isn't used, then we get the result we want anyway
						data[ aLast.replace(__reArray, '') ] = val;
					}
				};

				return function (data, val) { // meta is also passed in, but not used
					return setData( data, val, mSource );
				};
			}
			else
			{
				/* Array or flat object mapping */
				return function (data, val) { // meta is also passed in, but not used
					data[mSource] = val;
				};
			}
		}


		/**
		 * Return an array with the full table data
		 *  @param {object} oSettings dataTables settings object
		 *  @returns array {array} aData Master data array
		 *  @memberof DataTable#oApi
		 */
		function _fnGetDataMaster ( settings )
		{
			return _pluck( settings.aoData, '_aData' );
		}


		/**
		 * Nuke the table
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnClearTable( settings )
		{
			settings.aoData.length = 0;
			settings.aiDisplayMaster.length = 0;
			settings.aiDisplay.length = 0;
			settings.aIds = {};
		}


		/**
		 * Take an array of integers (index array) and remove a target integer (value - not
		 * the key!)
		 *  @param {array} a Index array to target
		 *  @param {int} iTarget value to find
		 *  @memberof DataTable#oApi
		 */
		function _fnDeleteIndex( a, iTarget, splice )
		{
			var iTargetIndex = -1;

			for ( var i=0, iLen=a.length ; i<iLen ; i++ )
			{
				if ( a[i] == iTarget )
				{
					iTargetIndex = i;
				}
				else if ( a[i] > iTarget )
				{
					a[i]--;
				}
			}

			if ( iTargetIndex != -1 && splice === undefined )
			{
				a.splice( iTargetIndex, 1 );
			}
		}


		/**
		 * Mark cached data as invalid such that a re-read of the data will occur when
		 * the cached data is next requested. Also update from the data source object.
		 *
		 * @param {object} settings DataTables settings object
		 * @param {int}    rowIdx   Row index to invalidate
		 * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
		 *     or 'data'
		 * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
		 *     row will be invalidated
		 * @memberof DataTable#oApi
		 *
		 * @todo For the modularisation of v1.11 this will need to become a callback, so
		 *   the sort and filter methods can subscribe to it. That will required
		 *   initialisation options for sorting, which is why it is not already baked in
		 */
		function _fnInvalidate( settings, rowIdx, src, colIdx )
		{
			var row = settings.aoData[ rowIdx ];
			var i, ien;
			var cellWrite = function ( cell, col ) {
				// This is very frustrating, but in IE if you just write directly
				// to innerHTML, and elements that are overwritten are GC'ed,
				// even if there is a reference to them elsewhere
				while ( cell.childNodes.length ) {
					cell.removeChild( cell.firstChild );
				}

				cell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );
			};

			// Are we reading last data from DOM or the data object?
			if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
				// Read the data from the DOM
				row._aData = _fnGetRowElements(
					settings, row, colIdx, colIdx === undefined ? undefined : row._aData
				)
					.data;
			}
			else {
				// Reading from data object, update the DOM
				var cells = row.anCells;

				if ( cells ) {
					if ( colIdx !== undefined ) {
						cellWrite( cells[colIdx], colIdx );
					}
					else {
						for ( i=0, ien=cells.length ; i<ien ; i++ ) {
							cellWrite( cells[i], i );
						}
					}
				}
			}

			// For both row and cell invalidation, the cached data for sorting and
			// filtering is nulled out
			row._aSortData = null;
			row._aFilterData = null;

			// Invalidate the type for a specific column (if given) or all columns since
			// the data might have changed
			var cols = settings.aoColumns;
			if ( colIdx !== undefined ) {
				cols[ colIdx ].sType = null;
			}
			else {
				for ( i=0, ien=cols.length ; i<ien ; i++ ) {
					cols[i].sType = null;
				}

				// Update DataTables special `DT_*` attributes for the row
				_fnRowAttributes( settings, row );
			}
		}


		/**
		 * Build a data source object from an HTML row, reading the contents of the
		 * cells that are in the row.
		 *
		 * @param {object} settings DataTables settings object
		 * @param {node|object} TR element from which to read data or existing row
		 *   object from which to re-read the data from the cells
		 * @param {int} [colIdx] Optional column index
		 * @param {array|object} [d] Data source object. If `colIdx` is given then this
		 *   parameter should also be given and will be used to write the data into.
		 *   Only the column in question will be written
		 * @returns {object} Object with two parameters: `data` the data read, in
		 *   document order, and `cells` and array of nodes (they can be useful to the
		 *   caller, so rather than needing a second traversal to get them, just return
		 *   them from here).
		 * @memberof DataTable#oApi
		 */
		function _fnGetRowElements( settings, row, colIdx, d )
		{
			var
				tds = [],
				td = row.firstChild,
				name, col, o, i=0, contents,
				columns = settings.aoColumns,
				objectRead = settings._rowReadObject;

			// Allow the data object to be passed in, or construct
			d = d !== undefined ?
				d :
				objectRead ?
				{} :
					[];

			var attr = function ( str, td  ) {
				if ( typeof str === 'string' ) {
					var idx = str.indexOf('@');

					if ( idx !== -1 ) {
						var attr = str.substring( idx+1 );
						var setter = _fnSetObjectDataFn( str );
						setter( d, td.getAttribute( attr ) );
					}
				}
			};

			// Read data from a cell and store into the data object
			var cellProcess = function ( cell ) {
				if ( colIdx === undefined || colIdx === i ) {
					col = columns[i];
					contents = $.trim(cell.innerHTML);

					if ( col && col._bAttrSrc ) {
						var setter = _fnSetObjectDataFn( col.mData._ );
						setter( d, contents );

						attr( col.mData.sort, cell );
						attr( col.mData.type, cell );
						attr( col.mData.filter, cell );
					}
					else {
						// Depending on the `data` option for the columns the data can
						// be read to either an object or an array.
						if ( objectRead ) {
							if ( ! col._setter ) {
								// Cache the setter function
								col._setter = _fnSetObjectDataFn( col.mData );
							}
							col._setter( d, contents );
						}
						else {
							d[i] = contents;
						}
					}
				}

				i++;
			};

			if ( td ) {
				// `tr` element was passed in
				while ( td ) {
					name = td.nodeName.toUpperCase();

					if ( name == "TD" || name == "TH" ) {
						cellProcess( td );
						tds.push( td );
					}

					td = td.nextSibling;
				}
			}
			else {
				// Existing row object passed in
				tds = row.anCells;

				for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
					cellProcess( tds[j] );
				}
			}

			// Read the ID from the DOM if present
			var rowNode = td ? row : row.nTr;

			if ( rowNode ) {
				var id = rowNode.getAttribute( 'id' );

				if ( id ) {
					_fnSetObjectDataFn( settings.rowId )( d, id );
				}
			}

			return {
				data: d,
				cells: tds
			};
		}
		/**
		 * Create a new TR element (and it's TD children) for a row
		 *  @param {object} oSettings dataTables settings object
		 *  @param {int} iRow Row to consider
		 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
		 *    DataTables will create a row automatically
		 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
		 *    if nTr is.
		 *  @memberof DataTable#oApi
		 */
		function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
		{
			var
				row = oSettings.aoData[iRow],
				rowData = row._aData,
				cells = [],
				nTr, nTd, oCol,
				i, iLen;

			if ( row.nTr === null )
			{
				nTr = nTrIn || document.createElement('tr');

				row.nTr = nTr;
				row.anCells = cells;

				/* Use a private property on the node to allow reserve mapping from the node
				 * to the aoData array for fast look up
				 */
				nTr._DT_RowIndex = iRow;

				/* Special parameters can be given by the data source to be used on the row */
				_fnRowAttributes( oSettings, row );

				/* Process each column */
				for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
				{
					oCol = oSettings.aoColumns[i];

					nTd = nTrIn ? anTds[i] : document.createElement( oCol.sCellType );
					cells.push( nTd );

					// Need to create the HTML if new, or if a rendering function is defined
					if ( !nTrIn || oCol.mRender || oCol.mData !== i )
					{
						nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
					}

					/* Add user defined class */
					if ( oCol.sClass )
					{
						nTd.className += ' '+oCol.sClass;
					}

					// Visibility - add or remove as required
					if ( oCol.bVisible && ! nTrIn )
					{
						nTr.appendChild( nTd );
					}
					else if ( ! oCol.bVisible && nTrIn )
					{
						nTd.parentNode.removeChild( nTd );
					}

					if ( oCol.fnCreatedCell )
					{
						oCol.fnCreatedCell.call( oSettings.oInstance,
							nTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i
						);
					}
				}

				_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow] );
			}

			// Remove once webkit bug 131819 and Chromium bug 365619 have been resolved
			// and deployed
			row.nTr.setAttribute( 'role', 'row' );
		}


		/**
		 * Add attributes to a row based on the special `DT_*` parameters in a data
		 * source object.
		 *  @param {object} settings DataTables settings object
		 *  @param {object} DataTables row object for the row to be modified
		 *  @memberof DataTable#oApi
		 */
		function _fnRowAttributes( settings, row )
		{
			var tr = row.nTr;
			var data = row._aData;

			if ( tr ) {
				var id = settings.rowIdFn( data );

				if ( id ) {
					tr.id = id;
				}

				if ( data.DT_RowClass ) {
					// Remove any classes added by DT_RowClass before
					var a = data.DT_RowClass.split(' ');
					row.__rowc = row.__rowc ?
						_unique( row.__rowc.concat( a ) ) :
						a;

					$(tr)
						.removeClass( row.__rowc.join(' ') )
						.addClass( data.DT_RowClass );
				}

				if ( data.DT_RowAttr ) {
					$(tr).attr( data.DT_RowAttr );
				}

				if ( data.DT_RowData ) {
					$(tr).data( data.DT_RowData );
				}
			}
		}


		/**
		 * Create the HTML header for the table
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnBuildHead( oSettings )
		{
			var i, ien, cell, row, column;
			var thead = oSettings.nTHead;
			var tfoot = oSettings.nTFoot;
			var createHeader = $('th, td', thead).length === 0;
			var classes = oSettings.oClasses;
			var columns = oSettings.aoColumns;

			if ( createHeader ) {
				row = $('<tr/>').appendTo( thead );
			}

			for ( i=0, ien=columns.length ; i<ien ; i++ ) {
				column = columns[i];
				cell = $( column.nTh ).addClass( column.sClass );

				if ( createHeader ) {
					cell.appendTo( row );
				}

				// 1.11 move into sorting
				if ( oSettings.oFeatures.bSort ) {
					cell.addClass( column.sSortingClass );

					if ( column.bSortable !== false ) {
						cell
							.attr( 'tabindex', oSettings.iTabIndex )
							.attr( 'aria-controls', oSettings.sTableId );

						_fnSortAttachListener( oSettings, column.nTh, i );
					}
				}

				if ( column.sTitle != cell[0].innerHTML ) {
					cell.html( column.sTitle );
				}

				_fnRenderer( oSettings, 'header' )(
					oSettings, cell, column, classes
				);
			}

			if ( createHeader ) {
				_fnDetectHeader( oSettings.aoHeader, thead );
			}

			/* ARIA role for the rows */
			$(thead).find('>tr').attr('role', 'row');

			/* Deal with the footer - add classes if required */
			$(thead).find('>tr>th, >tr>td').addClass( classes.sHeaderTH );
			$(tfoot).find('>tr>th, >tr>td').addClass( classes.sFooterTH );

			// Cache the footer cells. Note that we only take the cells from the first
			// row in the footer. If there is more than one row the user wants to
			// interact with, they need to use the table().foot() method. Note also this
			// allows cells to be used for multiple columns using colspan
			if ( tfoot !== null ) {
				var cells = oSettings.aoFooter[0];

				for ( i=0, ien=cells.length ; i<ien ; i++ ) {
					column = columns[i];
					column.nTf = cells[i].cell;

					if ( column.sClass ) {
						$(column.nTf).addClass( column.sClass );
					}
				}
			}
		}


		/**
		 * Draw the header (or footer) element based on the column visibility states. The
		 * methodology here is to use the layout array from _fnDetectHeader, modified for
		 * the instantaneous column visibility, to construct the new layout. The grid is
		 * traversed over cell at a time in a rows x columns grid fashion, although each
		 * cell insert can cover multiple elements in the grid - which is tracks using the
		 * aApplied array. Cell inserts in the grid will only occur where there isn't
		 * already a cell in that position.
		 *  @param {object} oSettings dataTables settings object
		 *  @param array {objects} aoSource Layout array from _fnDetectHeader
		 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
		 *  @memberof DataTable#oApi
		 */
		function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
		{
			var i, iLen, j, jLen, k, kLen, n, nLocalTr;
			var aoLocal = [];
			var aApplied = [];
			var iColumns = oSettings.aoColumns.length;
			var iRowspan, iColspan;

			if ( ! aoSource )
			{
				return;
			}

			if (  bIncludeHidden === undefined )
			{
				bIncludeHidden = false;
			}

			/* Make a copy of the master layout array, but without the visible columns in it */
			for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
			{
				aoLocal[i] = aoSource[i].slice();
				aoLocal[i].nTr = aoSource[i].nTr;

				/* Remove any columns which are currently hidden */
				for ( j=iColumns-1 ; j>=0 ; j-- )
				{
					if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
					{
						aoLocal[i].splice( j, 1 );
					}
				}

				/* Prep the applied array - it needs an element for each row */
				aApplied.push( [] );
			}

			for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
			{
				nLocalTr = aoLocal[i].nTr;

				/* All cells are going to be replaced, so empty out the row */
				if ( nLocalTr )
				{
					while( (n = nLocalTr.firstChild) )
					{
						nLocalTr.removeChild( n );
					}
				}

				for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
				{
					iRowspan = 1;
					iColspan = 1;

					/* Check to see if there is already a cell (row/colspan) covering our target
					 * insert point. If there is, then there is nothing to do.
					 */
					if ( aApplied[i][j] === undefined )
					{
						nLocalTr.appendChild( aoLocal[i][j].cell );
						aApplied[i][j] = 1;

						/* Expand the cell to cover as many rows as needed */
						while ( aoLocal[i+iRowspan] !== undefined &&
						aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
						{
							aApplied[i+iRowspan][j] = 1;
							iRowspan++;
						}

						/* Expand the cell to cover as many columns as needed */
						while ( aoLocal[i][j+iColspan] !== undefined &&
						aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
						{
							/* Must update the applied array over the rows for the columns */
							for ( k=0 ; k<iRowspan ; k++ )
							{
								aApplied[i+k][j+iColspan] = 1;
							}
							iColspan++;
						}

						/* Do the actual expansion in the DOM */
						$(aoLocal[i][j].cell)
							.attr('rowspan', iRowspan)
							.attr('colspan', iColspan);
					}
				}
			}
		}


		/**
		 * Insert the required TR nodes into the table for display
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnDraw( oSettings )
		{
			/* Provide a pre-callback function which can be used to cancel the draw is false is returned */
			var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
			if ( $.inArray( false, aPreDraw ) !== -1 )
			{
				_fnProcessingDisplay( oSettings, false );
				return;
			}

			var i, iLen, n;
			var anRows = [];
			var iRowCount = 0;
			var asStripeClasses = oSettings.asStripeClasses;
			var iStripes = asStripeClasses.length;
			var iOpenRows = oSettings.aoOpenRows.length;
			var oLang = oSettings.oLanguage;
			var iInitDisplayStart = oSettings.iInitDisplayStart;
			var bServerSide = _fnDataSource( oSettings ) == 'ssp';
			var aiDisplay = oSettings.aiDisplay;

			oSettings.bDrawing = true;

			/* Check and see if we have an initial draw position from state saving */
			if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
			{
				oSettings._iDisplayStart = bServerSide ?
					iInitDisplayStart :
					iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
						0 :
						iInitDisplayStart;

				oSettings.iInitDisplayStart = -1;
			}

			var iDisplayStart = oSettings._iDisplayStart;
			var iDisplayEnd = oSettings.fnDisplayEnd();

			/* Server-side processing draw intercept */
			if ( oSettings.bDeferLoading )
			{
				oSettings.bDeferLoading = false;
				oSettings.iDraw++;
				_fnProcessingDisplay( oSettings, false );
			}
			else if ( !bServerSide )
			{
				oSettings.iDraw++;
			}
			else if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )
			{
				return;
			}

			if ( aiDisplay.length !== 0 )
			{
				var iStart = bServerSide ? 0 : iDisplayStart;
				var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;

				for ( var j=iStart ; j<iEnd ; j++ )
				{
					var iDataIndex = aiDisplay[j];
					var aoData = oSettings.aoData[ iDataIndex ];
					if ( aoData.nTr === null )
					{
						_fnCreateTr( oSettings, iDataIndex );
					}

					var nRow = aoData.nTr;

					/* Remove the old striping classes and then add the new one */
					if ( iStripes !== 0 )
					{
						var sStripe = asStripeClasses[ iRowCount % iStripes ];
						if ( aoData._sRowStripe != sStripe )
						{
							$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
							aoData._sRowStripe = sStripe;
						}
					}

					// Row callback functions - might want to manipulate the row
					// iRowCount and j are not currently documented. Are they at all
					// useful?
					_fnCallbackFire( oSettings, 'aoRowCallback', null,
						[nRow, aoData._aData, iRowCount, j] );

					anRows.push( nRow );
					iRowCount++;
				}
			}
			else
			{
				/* Table is empty - create a row with an empty message in it */
				var sZero = oLang.sZeroRecords;
				if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
				{
					sZero = oLang.sLoadingRecords;
				}
				else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
				{
					sZero = oLang.sEmptyTable;
				}

				anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
					.append( $('<td />', {
						'valign':  'top',
						'colSpan': _fnVisbleColumns( oSettings ),
						'class':   oSettings.oClasses.sRowEmpty
					} ).html( sZero ) )[0];
			}

			/* Header and footer callbacks */
			_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
				_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );

			_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
				_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );

			var body = $(oSettings.nTBody);

			body.children().detach();
			body.append( $(anRows) );

			/* Call all required callback functions for the end of a draw */
			_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );

			/* Draw is complete, sorting and filtering must be as well */
			oSettings.bSorted = false;
			oSettings.bFiltered = false;
			oSettings.bDrawing = false;
		}


		/**
		 * Redraw the table - taking account of the various features which are enabled
		 *  @param {object} oSettings dataTables settings object
		 *  @param {boolean} [holdPosition] Keep the current paging position. By default
		 *    the paging is reset to the first page
		 *  @memberof DataTable#oApi
		 */
		function _fnReDraw( settings, holdPosition )
		{
			var
				features = settings.oFeatures,
				sort     = features.bSort,
				filter   = features.bFilter;

			if ( sort ) {
				_fnSort( settings );
			}

			if ( filter ) {
				_fnFilterComplete( settings, settings.oPreviousSearch );
			}
			else {
				// No filtering, so we want to just use the display master
				settings.aiDisplay = settings.aiDisplayMaster.slice();
			}

			if ( holdPosition !== true ) {
				settings._iDisplayStart = 0;
			}

			// Let any modules know about the draw hold position state (used by
			// scrolling internally)
			settings._drawHold = holdPosition;

			_fnDraw( settings );

			settings._drawHold = false;
		}


		/**
		 * Add the options to the page HTML for the table
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnAddOptionsHtml ( oSettings )
		{
			var classes = oSettings.oClasses;
			var table = $(oSettings.nTable);
			var holding = $('<div/>').insertBefore( table ); // Holding element for speed
			var features = oSettings.oFeatures;

			// All DataTables are wrapped in a div
			var insert = $('<div/>', {
				id:      oSettings.sTableId+'_wrapper',
				'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
			} );

			oSettings.nHolding = holding[0];
			oSettings.nTableWrapper = insert[0];
			oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;

			/* Loop over the user set positioning and place the elements as needed */
			var aDom = oSettings.sDom.split('');
			var featureNode, cOption, nNewNode, cNext, sAttr, j;
			for ( var i=0 ; i<aDom.length ; i++ )
			{
				featureNode = null;
				cOption = aDom[i];

				if ( cOption == '<' )
				{
					/* New container div */
					nNewNode = $('<div/>')[0];

					/* Check to see if we should append an id and/or a class name to the container */
					cNext = aDom[i+1];
					if ( cNext == "'" || cNext == '"' )
					{
						sAttr = "";
						j = 2;
						while ( aDom[i+j] != cNext )
						{
							sAttr += aDom[i+j];
							j++;
						}

						/* Replace jQuery UI constants @todo depreciated */
						if ( sAttr == "H" )
						{
							sAttr = classes.sJUIHeader;
						}
						else if ( sAttr == "F" )
						{
							sAttr = classes.sJUIFooter;
						}

						/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
						 * breaks the string into parts and applies them as needed
						 */
						if ( sAttr.indexOf('.') != -1 )
						{
							var aSplit = sAttr.split('.');
							nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
							nNewNode.className = aSplit[1];
						}
						else if ( sAttr.charAt(0) == "#" )
						{
							nNewNode.id = sAttr.substr(1, sAttr.length-1);
						}
						else
						{
							nNewNode.className = sAttr;
						}

						i += j; /* Move along the position array */
					}

					insert.append( nNewNode );
					insert = $(nNewNode);
				}
				else if ( cOption == '>' )
				{
					/* End container div */
					insert = insert.parent();
				}
				// @todo Move options into their own plugins?
				else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
				{
					/* Length */
					featureNode = _fnFeatureHtmlLength( oSettings );
				}
				else if ( cOption == 'f' && features.bFilter )
				{
					/* Filter */
					featureNode = _fnFeatureHtmlFilter( oSettings );
				}
				else if ( cOption == 'r' && features.bProcessing )
				{
					/* pRocessing */
					featureNode = _fnFeatureHtmlProcessing( oSettings );
				}
				else if ( cOption == 't' )
				{
					/* Table */
					featureNode = _fnFeatureHtmlTable( oSettings );
				}
				else if ( cOption ==  'i' && features.bInfo )
				{
					/* Info */
					featureNode = _fnFeatureHtmlInfo( oSettings );
				}
				else if ( cOption == 'p' && features.bPaginate )
				{
					/* Pagination */
					featureNode = _fnFeatureHtmlPaginate( oSettings );
				}
				else if ( DataTable.ext.feature.length !== 0 )
				{
					/* Plug-in features */
					var aoFeatures = DataTable.ext.feature;
					for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
					{
						if ( cOption == aoFeatures[k].cFeature )
						{
							featureNode = aoFeatures[k].fnInit( oSettings );
							break;
						}
					}
				}

				/* Add to the 2D features array */
				if ( featureNode )
				{
					var aanFeatures = oSettings.aanFeatures;

					if ( ! aanFeatures[cOption] )
					{
						aanFeatures[cOption] = [];
					}

					aanFeatures[cOption].push( featureNode );
					insert.append( featureNode );
				}
			}

			/* Built our DOM structure - replace the holding div with what we want */
			holding.replaceWith( insert );
			oSettings.nHolding = null;
		}


		/**
		 * Use the DOM source to create up an array of header cells. The idea here is to
		 * create a layout grid (array) of rows x columns, which contains a reference
		 * to the cell that that point in the grid (regardless of col/rowspan), such that
		 * any column / row could be removed and the new grid constructed
		 *  @param array {object} aLayout Array to store the calculated layout in
		 *  @param {node} nThead The header/footer element for the table
		 *  @memberof DataTable#oApi
		 */
		function _fnDetectHeader ( aLayout, nThead )
		{
			var nTrs = $(nThead).children('tr');
			var nTr, nCell;
			var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
			var bUnique;
			var fnShiftCol = function ( a, i, j ) {
				var k = a[i];
				while ( k[j] ) {
					j++;
				}
				return j;
			};

			aLayout.splice( 0, aLayout.length );

			/* We know how many rows there are in the layout - so prep it */
			for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
			{
				aLayout.push( [] );
			}

			/* Calculate a layout array */
			for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
			{
				nTr = nTrs[i];
				iColumn = 0;

				/* For every cell in the row... */
				nCell = nTr.firstChild;
				while ( nCell ) {
					if ( nCell.nodeName.toUpperCase() == "TD" ||
						nCell.nodeName.toUpperCase() == "TH" )
					{
						/* Get the col and rowspan attributes from the DOM and sanitise them */
						iColspan = nCell.getAttribute('colspan') * 1;
						iRowspan = nCell.getAttribute('rowspan') * 1;
						iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
						iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;

						/* There might be colspan cells already in this row, so shift our target
						 * accordingly
						 */
						iColShifted = fnShiftCol( aLayout, i, iColumn );

						/* Cache calculation for unique columns */
						bUnique = iColspan === 1 ? true : false;

						/* If there is col / rowspan, copy the information into the layout grid */
						for ( l=0 ; l<iColspan ; l++ )
						{
							for ( k=0 ; k<iRowspan ; k++ )
							{
								aLayout[i+k][iColShifted+l] = {
									"cell": nCell,
									"unique": bUnique
								};
								aLayout[i+k].nTr = nTr;
							}
						}
					}
					nCell = nCell.nextSibling;
				}
			}
		}


		/**
		 * Get an array of unique th elements, one for each column
		 *  @param {object} oSettings dataTables settings object
		 *  @param {node} nHeader automatically detect the layout from this node - optional
		 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
		 *  @returns array {node} aReturn list of unique th's
		 *  @memberof DataTable#oApi
		 */
		function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
		{
			var aReturn = [];
			if ( !aLayout )
			{
				aLayout = oSettings.aoHeader;
				if ( nHeader )
				{
					aLayout = [];
					_fnDetectHeader( aLayout, nHeader );
				}
			}

			for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
			{
				for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
				{
					if ( aLayout[i][j].unique &&
						(!aReturn[j] || !oSettings.bSortCellsTop) )
					{
						aReturn[j] = aLayout[i][j].cell;
					}
				}
			}

			return aReturn;
		}

		/**
		 * Create an Ajax call based on the table's settings, taking into account that
		 * parameters can have multiple forms, and backwards compatibility.
		 *
		 * @param {object} oSettings dataTables settings object
		 * @param {array} data Data to send to the server, required by
		 *     DataTables - may be augmented by developer callbacks
		 * @param {function} fn Callback function to run when data is obtained
		 */
		function _fnBuildAjax( oSettings, data, fn )
		{
			// Compatibility with 1.9-, allow fnServerData and event to manipulate
			_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );

			// Convert to object based for 1.10+ if using the old array scheme which can
			// come from server-side processing or serverParams
			if ( data && $.isArray(data) ) {
				var tmp = {};
				var rbracket = /(.*?)\[\]$/;

				$.each( data, function (key, val) {
					var match = val.name.match(rbracket);

					if ( match ) {
						// Support for arrays
						var name = match[0];

						if ( ! tmp[ name ] ) {
							tmp[ name ] = [];
						}
						tmp[ name ].push( val.value );
					}
					else {
						tmp[val.name] = val.value;
					}
				} );
				data = tmp;
			}

			var ajaxData;
			var ajax = oSettings.ajax;
			var instance = oSettings.oInstance;
			var callback = function ( json ) {
				_fnCallbackFire( oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR] );
				fn( json );
			};

			if ( $.isPlainObject( ajax ) && ajax.data )
			{
				ajaxData = ajax.data;

				var newData = $.isFunction( ajaxData ) ?
					ajaxData( data, oSettings ) :  // fn can manipulate data or return
					ajaxData;                      // an object object or array to merge

				// If the function returned something, use that alone
				data = $.isFunction( ajaxData ) && newData ?
					newData :
					$.extend( true, data, newData );

				// Remove the data property as we've resolved it already and don't want
				// jQuery to do it again (it is restored at the end of the function)
				delete ajax.data;
			}

			var baseAjax = {
				"data": data,
				"success": function (json) {
					var error = json.error || json.sError;
					if ( error ) {
						_fnLog( oSettings, 0, error );
					}

					oSettings.json = json;
					callback( json );
				},
				"dataType": "json",
				"cache": false,
				"type": oSettings.sServerMethod,
				"error": function (xhr, error, thrown) {
					var ret = _fnCallbackFire( oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR] );

					if ( $.inArray( true, ret ) === -1 ) {
						if ( error == "parsererror" ) {
							_fnLog( oSettings, 0, 'Invalid JSON response', 1 );
						}
						else if ( xhr.readyState === 4 ) {
							_fnLog( oSettings, 0, 'Ajax error', 7 );
						}
					}

					_fnProcessingDisplay( oSettings, false );
				}
			};

			// Store the data submitted for the API
			oSettings.oAjaxData = data;

			// Allow plug-ins and external processes to modify the data
			_fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );

			if ( oSettings.fnServerData )
			{
				// DataTables 1.9- compatibility
				oSettings.fnServerData.call( instance,
					oSettings.sAjaxSource,
					$.map( data, function (val, key) { // Need to convert back to 1.9 trad format
						return { name: key, value: val };
					} ),
					callback,
					oSettings
				);
			}
			else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
			{
				// DataTables 1.9- compatibility
				oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
					url: ajax || oSettings.sAjaxSource
				} ) );
			}
			else if ( $.isFunction( ajax ) )
			{
				// Is a function - let the caller define what needs to be done
				oSettings.jqXHR = ajax.call( instance, data, callback, oSettings );
			}
			else
			{
				// Object to extend the base settings
				oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );

				// Restore for next time around
				ajax.data = ajaxData;
			}
		}


		/**
		 * Update the table using an Ajax call
		 *  @param {object} settings dataTables settings object
		 *  @returns {boolean} Block the table drawing or not
		 *  @memberof DataTable#oApi
		 */
		function _fnAjaxUpdate( settings )
		{
			if ( settings.bAjaxDataGet ) {
				settings.iDraw++;
				_fnProcessingDisplay( settings, true );

				_fnBuildAjax(
					settings,
					_fnAjaxParameters( settings ),
					function(json) {
						_fnAjaxUpdateDraw( settings, json );
					}
				);

				return false;
			}
			return true;
		}


		/**
		 * Build up the parameters in an object needed for a server-side processing
		 * request. Note that this is basically done twice, is different ways - a modern
		 * method which is used by default in DataTables 1.10 which uses objects and
		 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
		 * the sAjaxSource option is used in the initialisation, or the legacyAjax
		 * option is set.
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {bool} block the table drawing or not
		 *  @memberof DataTable#oApi
		 */
		function _fnAjaxParameters( settings )
		{
			var
				columns = settings.aoColumns,
				columnCount = columns.length,
				features = settings.oFeatures,
				preSearch = settings.oPreviousSearch,
				preColSearch = settings.aoPreSearchCols,
				i, data = [], dataProp, column, columnSearch,
				sort = _fnSortFlatten( settings ),
				displayStart = settings._iDisplayStart,
				displayLength = features.bPaginate !== false ?
					settings._iDisplayLength :
					-1;

			var param = function ( name, value ) {
				data.push( { 'name': name, 'value': value } );
			};

			// DataTables 1.9- compatible method
			param( 'sEcho',          settings.iDraw );
			param( 'iColumns',       columnCount );
			param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
			param( 'iDisplayStart',  displayStart );
			param( 'iDisplayLength', displayLength );

			// DataTables 1.10+ method
			var d = {
				draw:    settings.iDraw,
				columns: [],
				order:   [],
				start:   displayStart,
				length:  displayLength,
				search:  {
					value: preSearch.sSearch,
					regex: preSearch.bRegex
				}
			};

			for ( i=0 ; i<columnCount ; i++ ) {
				column = columns[i];
				columnSearch = preColSearch[i];
				dataProp = typeof column.mData=="function" ? 'function' : column.mData ;

				d.columns.push( {
					data:       dataProp,
					name:       column.sName,
					searchable: column.bSearchable,
					orderable:  column.bSortable,
					search:     {
						value: columnSearch.sSearch,
						regex: columnSearch.bRegex
					}
				} );

				param( "mDataProp_"+i, dataProp );

				if ( features.bFilter ) {
					param( 'sSearch_'+i,     columnSearch.sSearch );
					param( 'bRegex_'+i,      columnSearch.bRegex );
					param( 'bSearchable_'+i, column.bSearchable );
				}

				if ( features.bSort ) {
					param( 'bSortable_'+i, column.bSortable );
				}
			}

			if ( features.bFilter ) {
				param( 'sSearch', preSearch.sSearch );
				param( 'bRegex', preSearch.bRegex );
			}

			if ( features.bSort ) {
				$.each( sort, function ( i, val ) {
					d.order.push( { column: val.col, dir: val.dir } );

					param( 'iSortCol_'+i, val.col );
					param( 'sSortDir_'+i, val.dir );
				} );

				param( 'iSortingCols', sort.length );
			}

			// If the legacy.ajax parameter is null, then we automatically decide which
			// form to use, based on sAjaxSource
			var legacy = DataTable.ext.legacy.ajax;
			if ( legacy === null ) {
				return settings.sAjaxSource ? data : d;
			}

			// Otherwise, if legacy has been specified then we use that to decide on the
			// form
			return legacy ? data : d;
		}


		/**
		 * Data the data from the server (nuking the old) and redraw the table
		 *  @param {object} oSettings dataTables settings object
		 *  @param {object} json json data return from the server.
		 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
		 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
		 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
		 *  @param {array} json.aaData The data to display on this page
		 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
		 *  @memberof DataTable#oApi
		 */
		function _fnAjaxUpdateDraw ( settings, json )
		{
			// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
			// Support both
			var compat = function ( old, modern ) {
				return json[old] !== undefined ? json[old] : json[modern];
			};

			var data = _fnAjaxDataSrc( settings, json );
			var draw            = compat( 'sEcho',                'draw' );
			var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
			var recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );

			if ( draw ) {
				// Protect against out of sequence returns
				if ( draw*1 < settings.iDraw ) {
					return;
				}
				settings.iDraw = draw * 1;
			}

			_fnClearTable( settings );
			settings._iRecordsTotal   = parseInt(recordsTotal, 10);
			settings._iRecordsDisplay = parseInt(recordsFiltered, 10);

			for ( var i=0, ien=data.length ; i<ien ; i++ ) {
				_fnAddData( settings, data[i] );
			}
			settings.aiDisplay = settings.aiDisplayMaster.slice();

			settings.bAjaxDataGet = false;
			_fnDraw( settings );

			if ( ! settings._bInitComplete ) {
				_fnInitComplete( settings, json );
			}

			settings.bAjaxDataGet = true;
			_fnProcessingDisplay( settings, false );
		}


		/**
		 * Get the data from the JSON data source to use for drawing a table. Using
		 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
		 * source object, or from a processing function.
		 *  @param {object} oSettings dataTables settings object
		 *  @param  {object} json Data source object / array from the server
		 *  @return {array} Array of data to use
		 */
		function _fnAjaxDataSrc ( oSettings, json )
		{
			var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
				oSettings.ajax.dataSrc :
				oSettings.sAjaxDataProp; // Compatibility with 1.9-.

			// Compatibility with 1.9-. In order to read from aaData, check if the
			// default has been changed, if not, check for aaData
			if ( dataSrc === 'data' ) {
				return json.aaData || json[dataSrc];
			}

			return dataSrc !== "" ?
				_fnGetObjectDataFn( dataSrc )( json ) :
				json;
		}

		/**
		 * Generate the node required for filtering text
		 *  @returns {node} Filter control element
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlFilter ( settings )
		{
			var classes = settings.oClasses;
			var tableId = settings.sTableId;
			var language = settings.oLanguage;
			var previousSearch = settings.oPreviousSearch;
			var features = settings.aanFeatures;
			var input = '<input type="search" class="'+classes.sFilterInput+'"/>';

			var str = language.sSearch;
			str = str.match(/_INPUT_/) ?
				str.replace('_INPUT_', input) :
			str+input;

			var filter = $('<div/>', {
				'id': ! features.f ? tableId+'_filter' : null,
				'class': classes.sFilter
			} )
				.append( $('<label/>' ).append( str ) );

			var searchFn = function() {
				/* Update all other filter input elements for the new display */
				var n = features.f;
				var val = !this.value ? "" : this.value; // mental IE8 fix :-(

				/* Now do the filter */
				if ( val != previousSearch.sSearch ) {
					_fnFilterComplete( settings, {
						"sSearch": val,
						"bRegex": previousSearch.bRegex,
						"bSmart": previousSearch.bSmart ,
						"bCaseInsensitive": previousSearch.bCaseInsensitive
					} );

					// Need to redraw, without resorting
					settings._iDisplayStart = 0;
					_fnDraw( settings );
				}
			};

			var searchDelay = settings.searchDelay !== null ?
				settings.searchDelay :
				_fnDataSource( settings ) === 'ssp' ?
					400 :
					0;

			var jqFilter = $('input', filter)
				.val( previousSearch.sSearch )
				.attr( 'placeholder', language.sSearchPlaceholder )
				.bind(
				'keyup.DT search.DT input.DT paste.DT cut.DT',
				searchDelay ?
					_fnThrottle( searchFn, searchDelay ) :
					searchFn
			)
				.bind( 'keypress.DT', function(e) {
					/* Prevent form submission */
					if ( e.keyCode == 13 ) {
						return false;
					}
				} )
				.attr('aria-controls', tableId);

			// Update the input elements whenever the table is filtered
			$(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {
				if ( settings === s ) {
					// IE9 throws an 'unknown error' if document.activeElement is used
					// inside an iframe or frame...
					try {
						if ( jqFilter[0] !== document.activeElement ) {
							jqFilter.val( previousSearch.sSearch );
						}
					}
					catch ( e ) {}
				}
			} );

			return filter[0];
		}


		/**
		 * Filter the table using both the global filter and column based filtering
		 *  @param {object} oSettings dataTables settings object
		 *  @param {object} oSearch search information
		 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
		 *  @memberof DataTable#oApi
		 */
		function _fnFilterComplete ( oSettings, oInput, iForce )
		{
			var oPrevSearch = oSettings.oPreviousSearch;
			var aoPrevSearch = oSettings.aoPreSearchCols;
			var fnSaveFilter = function ( oFilter ) {
				/* Save the filtering values */
				oPrevSearch.sSearch = oFilter.sSearch;
				oPrevSearch.bRegex = oFilter.bRegex;
				oPrevSearch.bSmart = oFilter.bSmart;
				oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
			};
			var fnRegex = function ( o ) {
				// Backwards compatibility with the bEscapeRegex option
				return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
			};

			// Resolve any column types that are unknown due to addition or invalidation
			// @todo As per sort - can this be moved into an event handler?
			_fnColumnTypes( oSettings );

			/* In server-side processing all filtering is done by the server, so no point hanging around here */
			if ( _fnDataSource( oSettings ) != 'ssp' )
			{
				/* Global filter */
				_fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive );
				fnSaveFilter( oInput );

				/* Now do the individual column filter */
				for ( var i=0 ; i<aoPrevSearch.length ; i++ )
				{
					_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
						aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
				}

				/* Custom filtering */
				_fnFilterCustom( oSettings );
			}
			else
			{
				fnSaveFilter( oInput );
			}

			/* Tell the draw function we have been filtering */
			oSettings.bFiltered = true;
			_fnCallbackFire( oSettings, null, 'search', [oSettings] );
		}


		/**
		 * Apply custom filtering functions
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnFilterCustom( settings )
		{
			var filters = DataTable.ext.search;
			var displayRows = settings.aiDisplay;
			var row, rowIdx;

			for ( var i=0, ien=filters.length ; i<ien ; i++ ) {
				var rows = [];

				// Loop over each row and see if it should be included
				for ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {
					rowIdx = displayRows[ j ];
					row = settings.aoData[ rowIdx ];

					if ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {
						rows.push( rowIdx );
					}
				}

				// So the array reference doesn't break set the results into the
				// existing array
				displayRows.length = 0;
				$.merge( displayRows, rows );
			}
		}


		/**
		 * Filter the table on a per-column basis
		 *  @param {object} oSettings dataTables settings object
		 *  @param {string} sInput string to filter on
		 *  @param {int} iColumn column to filter
		 *  @param {bool} bRegex treat search string as a regular expression or not
		 *  @param {bool} bSmart use smart filtering or not
		 *  @param {bool} bCaseInsensitive Do case insenstive matching or not
		 *  @memberof DataTable#oApi
		 */
		function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
		{
			if ( searchStr === '' ) {
				return;
			}

			var data;
			var display = settings.aiDisplay;
			var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );

			for ( var i=display.length-1 ; i>=0 ; i-- ) {
				data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];

				if ( ! rpSearch.test( data ) ) {
					display.splice( i, 1 );
				}
			}
		}


		/**
		 * Filter the data table based on user input and draw the table
		 *  @param {object} settings dataTables settings object
		 *  @param {string} input string to filter on
		 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
		 *  @param {bool} regex treat as a regular expression or not
		 *  @param {bool} smart perform smart filtering or not
		 *  @param {bool} caseInsensitive Do case insenstive matching or not
		 *  @memberof DataTable#oApi
		 */
		function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
		{
			var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
			var prevSearch = settings.oPreviousSearch.sSearch;
			var displayMaster = settings.aiDisplayMaster;
			var display, invalidated, i;

			// Need to take account of custom filtering functions - always filter
			if ( DataTable.ext.search.length !== 0 ) {
				force = true;
			}

			// Check if any of the rows were invalidated
			invalidated = _fnFilterData( settings );

			// If the input is blank - we just want the full data set
			if ( input.length <= 0 ) {
				settings.aiDisplay = displayMaster.slice();
			}
			else {
				// New search - start from the master array
				if ( invalidated ||
					force ||
					prevSearch.length > input.length ||
					input.indexOf(prevSearch) !== 0 ||
					settings.bSorted // On resort, the display master needs to be
									 // re-filtered since indexes will have changed
				) {
					settings.aiDisplay = displayMaster.slice();
				}

				// Search the display array
				display = settings.aiDisplay;

				for ( i=display.length-1 ; i>=0 ; i-- ) {
					if ( ! rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
						display.splice( i, 1 );
					}
				}
			}
		}


		/**
		 * Build a regular expression object suitable for searching a table
		 *  @param {string} sSearch string to search for
		 *  @param {bool} bRegex treat as a regular expression or not
		 *  @param {bool} bSmart perform smart filtering or not
		 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
		 *  @returns {RegExp} constructed object
		 *  @memberof DataTable#oApi
		 */
		function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
		{
			search = regex ?
				search :
				_fnEscapeRegex( search );

			if ( smart ) {
				/* For smart filtering we want to allow the search to work regardless of
				 * word order. We also want double quoted text to be preserved, so word
				 * order is important - a la google. So this is what we want to
				 * generate:
				 * 
				 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
				 */
				var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || [''], function ( word ) {
					if ( word.charAt(0) === '"' ) {
						var m = word.match( /^"(.*)"$/ );
						word = m ? m[1] : word;
					}

					return word.replace('"', '');
				} );

				search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
			}

			return new RegExp( search, caseInsensitive ? 'i' : '' );
		}


		/**
		 * Escape a string such that it can be used in a regular expression
		 *  @param {string} sVal string to escape
		 *  @returns {string} escaped string
		 *  @memberof DataTable#oApi
		 */
		function _fnEscapeRegex ( sVal )
		{
			return sVal.replace( _re_escape_regex, '\\$1' );
		}



		var __filter_div = $('<div>')[0];
		var __filter_div_textContent = __filter_div.textContent !== undefined;

		// Update the filtering data for each row if needed (by invalidation or first run)
		function _fnFilterData ( settings )
		{
			var columns = settings.aoColumns;
			var column;
			var i, j, ien, jen, filterData, cellData, row;
			var fomatters = DataTable.ext.type.search;
			var wasInvalidated = false;

			for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				row = settings.aoData[i];

				if ( ! row._aFilterData ) {
					filterData = [];

					for ( j=0, jen=columns.length ; j<jen ; j++ ) {
						column = columns[j];

						if ( column.bSearchable ) {
							cellData = _fnGetCellData( settings, i, j, 'filter' );

							if ( fomatters[ column.sType ] ) {
								cellData = fomatters[ column.sType ]( cellData );
							}

							// Search in DataTables 1.10 is string based. In 1.11 this
							// should be altered to also allow strict type checking.
							if ( cellData === null ) {
								cellData = '';
							}

							if ( typeof cellData !== 'string' && cellData.toString ) {
								cellData = cellData.toString();
							}
						}
						else {
							cellData = '';
						}

						// If it looks like there is an HTML entity in the string,
						// attempt to decode it so sorting works as expected. Note that
						// we could use a single line of jQuery to do this, but the DOM
						// method used here is much faster http://jsperf.com/html-decode
						if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
							__filter_div.innerHTML = cellData;
							cellData = __filter_div_textContent ?
								__filter_div.textContent :
								__filter_div.innerText;
						}

						if ( cellData.replace ) {
							cellData = cellData.replace(/[\r\n]/g, '');
						}

						filterData.push( cellData );
					}

					row._aFilterData = filterData;
					row._sFilterRow = filterData.join('  ');
					wasInvalidated = true;
				}
			}

			return wasInvalidated;
		}


		/**
		 * Convert from the internal Hungarian notation to camelCase for external
		 * interaction
		 *  @param {object} obj Object to convert
		 *  @returns {object} Inverted object
		 *  @memberof DataTable#oApi
		 */
		function _fnSearchToCamel ( obj )
		{
			return {
				search:          obj.sSearch,
				smart:           obj.bSmart,
				regex:           obj.bRegex,
				caseInsensitive: obj.bCaseInsensitive
			};
		}



		/**
		 * Convert from camelCase notation to the internal Hungarian. We could use the
		 * Hungarian convert function here, but this is cleaner
		 *  @param {object} obj Object to convert
		 *  @returns {object} Inverted object
		 *  @memberof DataTable#oApi
		 */
		function _fnSearchToHung ( obj )
		{
			return {
				sSearch:          obj.search,
				bSmart:           obj.smart,
				bRegex:           obj.regex,
				bCaseInsensitive: obj.caseInsensitive
			};
		}

		/**
		 * Generate the node required for the info display
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {node} Information element
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlInfo ( settings )
		{
			var
				tid = settings.sTableId,
				nodes = settings.aanFeatures.i,
				n = $('<div/>', {
					'class': settings.oClasses.sInfo,
					'id': ! nodes ? tid+'_info' : null
				} );

			if ( ! nodes ) {
				// Update display on each draw
				settings.aoDrawCallback.push( {
					"fn": _fnUpdateInfo,
					"sName": "information"
				} );

				n
					.attr( 'role', 'status' )
					.attr( 'aria-live', 'polite' );

				// Table is described by our info div
				$(settings.nTable).attr( 'aria-describedby', tid+'_info' );
			}

			return n[0];
		}


		/**
		 * Update the information elements in the display
		 *  @param {object} settings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnUpdateInfo ( settings )
		{
			/* Show information about the table */
			var nodes = settings.aanFeatures.i;
			if ( nodes.length === 0 ) {
				return;
			}

			var
				lang  = settings.oLanguage,
				start = settings._iDisplayStart+1,
				end   = settings.fnDisplayEnd(),
				max   = settings.fnRecordsTotal(),
				total = settings.fnRecordsDisplay(),
				out   = total ?
					lang.sInfo :
					lang.sInfoEmpty;

			if ( total !== max ) {
				/* Record set after filtering */
				out += ' ' + lang.sInfoFiltered;
			}

			// Convert the macros
			out += lang.sInfoPostFix;
			out = _fnInfoMacros( settings, out );

			var callback = lang.fnInfoCallback;
			if ( callback !== null ) {
				out = callback.call( settings.oInstance,
					settings, start, end, max, total, out
				);
			}

			$(nodes).html( out );
		}


		function _fnInfoMacros ( settings, str )
		{
			// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
			// internally
			var
				formatter  = settings.fnFormatNumber,
				start      = settings._iDisplayStart+1,
				len        = settings._iDisplayLength,
				vis        = settings.fnRecordsDisplay(),
				all        = len === -1;

			return str.
				replace(/_START_/g, formatter.call( settings, start ) ).
				replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
				replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
				replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
				replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
				replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
		}



		/**
		 * Draw the table for the first time, adding all required features
		 *  @param {object} settings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnInitialise ( settings )
		{
			var i, iLen, iAjaxStart=settings.iInitDisplayStart;
			var columns = settings.aoColumns, column;
			var features = settings.oFeatures;
			var deferLoading = settings.bDeferLoading; // value modified by the draw

			/* Ensure that the table data is fully initialised */
			if ( ! settings.bInitialised ) {
				setTimeout( function(){ _fnInitialise( settings ); }, 200 );
				return;
			}

			/* Show the display HTML options */
			_fnAddOptionsHtml( settings );

			/* Build and draw the header / footer for the table */
			_fnBuildHead( settings );
			_fnDrawHead( settings, settings.aoHeader );
			_fnDrawHead( settings, settings.aoFooter );

			/* Okay to show that something is going on now */
			_fnProcessingDisplay( settings, true );

			/* Calculate sizes for columns */
			if ( features.bAutoWidth ) {
				_fnCalculateColumnWidths( settings );
			}

			for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
				column = columns[i];

				if ( column.sWidth ) {
					column.nTh.style.width = _fnStringToCss( column.sWidth );
				}
			}

			_fnCallbackFire( settings, null, 'preInit', [settings] );

			// If there is default sorting required - let's do it. The sort function
			// will do the drawing for us. Otherwise we draw the table regardless of the
			// Ajax source - this allows the table to look initialised for Ajax sourcing
			// data (show 'loading' message possibly)
			_fnReDraw( settings );

			// Server-side processing init complete is done by _fnAjaxUpdateDraw
			var dataSrc = _fnDataSource( settings );
			if ( dataSrc != 'ssp' || deferLoading ) {
				// if there is an ajax source load the data
				if ( dataSrc == 'ajax' ) {
					_fnBuildAjax( settings, [], function(json) {
						var aData = _fnAjaxDataSrc( settings, json );

						// Got the data - add it to the table
						for ( i=0 ; i<aData.length ; i++ ) {
							_fnAddData( settings, aData[i] );
						}

						// Reset the init display for cookie saving. We've already done
						// a filter, and therefore cleared it before. So we need to make
						// it appear 'fresh'
						settings.iInitDisplayStart = iAjaxStart;

						_fnReDraw( settings );

						_fnProcessingDisplay( settings, false );
						_fnInitComplete( settings, json );
					}, settings );
				}
				else {
					_fnProcessingDisplay( settings, false );
					_fnInitComplete( settings );
				}
			}
		}


		/**
		 * Draw the table for the first time, adding all required features
		 *  @param {object} oSettings dataTables settings object
		 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
		 *    with client-side processing (optional)
		 *  @memberof DataTable#oApi
		 */
		function _fnInitComplete ( settings, json )
		{
			settings._bInitComplete = true;

			// When data was added after the initialisation (data or Ajax) we need to
			// calculate the column sizing
			if ( json || settings.oInit.aaData ) {
				_fnAdjustColumnSizing( settings );
			}

			_fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
		}


		function _fnLengthChange ( settings, val )
		{
			var len = parseInt( val, 10 );
			settings._iDisplayLength = len;

			_fnLengthOverflow( settings );

			// Fire length change event
			_fnCallbackFire( settings, null, 'length', [settings, len] );
		}


		/**
		 * Generate the node required for user display length changing
		 *  @param {object} settings dataTables settings object
		 *  @returns {node} Display length feature node
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlLength ( settings )
		{
			var
				classes  = settings.oClasses,
				tableId  = settings.sTableId,
				menu     = settings.aLengthMenu,
				d2       = $.isArray( menu[0] ),
				lengths  = d2 ? menu[0] : menu,
				language = d2 ? menu[1] : menu;

			var select = $('<select/>', {
				'name':          tableId+'_length',
				'aria-controls': tableId,
				'class':         classes.sLengthSelect
			} );

			for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
				select[0][ i ] = new Option( language[i], lengths[i] );
			}

			var div = $('<div><label/></div>').addClass( classes.sLength );
			if ( ! settings.aanFeatures.l ) {
				div[0].id = tableId+'_length';
			}

			div.children().append(
				settings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )
			);

			// Can't use `select` variable as user might provide their own and the
			// reference is broken by the use of outerHTML
			$('select', div)
				.val( settings._iDisplayLength )
				.bind( 'change.DT', function(e) {
					_fnLengthChange( settings, $(this).val() );
					_fnDraw( settings );
				} );

			// Update node value whenever anything changes the table's length
			$(settings.nTable).bind( 'length.dt.DT', function (e, s, len) {
				if ( settings === s ) {
					$('select', div).val( len );
				}
			} );

			return div[0];
		}



		/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
		 * Note that most of the paging logic is done in
		 * DataTable.ext.pager
		 */

		/**
		 * Generate the node required for default pagination
		 *  @param {object} oSettings dataTables settings object
		 *  @returns {node} Pagination feature node
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlPaginate ( settings )
		{
			var
				type   = settings.sPaginationType,
				plugin = DataTable.ext.pager[ type ],
				modern = typeof plugin === 'function',
				redraw = function( settings ) {
					_fnDraw( settings );
				},
				node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
				features = settings.aanFeatures;

			if ( ! modern ) {
				plugin.fnInit( settings, node, redraw );
			}

			/* Add a draw callback for the pagination on first instance, to update the paging display */
			if ( ! features.p )
			{
				node.id = settings.sTableId+'_paginate';

				settings.aoDrawCallback.push( {
					"fn": function( settings ) {
						if ( modern ) {
							var
								start      = settings._iDisplayStart,
								len        = settings._iDisplayLength,
								visRecords = settings.fnRecordsDisplay(),
								all        = len === -1,
								page = all ? 0 : Math.ceil( start / len ),
								pages = all ? 1 : Math.ceil( visRecords / len ),
								buttons = plugin(page, pages),
								i, ien;

							for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
								_fnRenderer( settings, 'pageButton' )(
									settings, features.p[i], i, buttons, page, pages
								);
							}
						}
						else {
							plugin.fnUpdate( settings, redraw );
						}
					},
					"sName": "pagination"
				} );
			}

			return node;
		}


		/**
		 * Alter the display settings to change the page
		 *  @param {object} settings DataTables settings object
		 *  @param {string|int} action Paging action to take: "first", "previous",
		 *    "next" or "last" or page number to jump to (integer)
		 *  @param [bool] redraw Automatically draw the update or not
		 *  @returns {bool} true page has changed, false - no change
		 *  @memberof DataTable#oApi
		 */
		function _fnPageChange ( settings, action, redraw )
		{
			var
				start     = settings._iDisplayStart,
				len       = settings._iDisplayLength,
				records   = settings.fnRecordsDisplay();

			if ( records === 0 || len === -1 )
			{
				start = 0;
			}
			else if ( typeof action === "number" )
			{
				start = action * len;

				if ( start > records )
				{
					start = 0;
				}
			}
			else if ( action == "first" )
			{
				start = 0;
			}
			else if ( action == "previous" )
			{
				start = len >= 0 ?
				start - len :
					0;

				if ( start < 0 )
				{
					start = 0;
				}
			}
			else if ( action == "next" )
			{
				if ( start + len < records )
				{
					start += len;
				}
			}
			else if ( action == "last" )
			{
				start = Math.floor( (records-1) / len) * len;
			}
			else
			{
				_fnLog( settings, 0, "Unknown paging action: "+action, 5 );
			}

			var changed = settings._iDisplayStart !== start;
			settings._iDisplayStart = start;

			if ( changed ) {
				_fnCallbackFire( settings, null, 'page', [settings] );

				if ( redraw ) {
					_fnDraw( settings );
				}
			}

			return changed;
		}



		/**
		 * Generate the node required for the processing node
		 *  @param {object} settings dataTables settings object
		 *  @returns {node} Processing element
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlProcessing ( settings )
		{
			return $('<div/>', {
				'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
				'class': settings.oClasses.sProcessing
			} )
				.html( settings.oLanguage.sProcessing )
				.insertBefore( settings.nTable )[0];
		}


		/**
		 * Display or hide the processing indicator
		 *  @param {object} settings dataTables settings object
		 *  @param {bool} show Show the processing indicator (true) or not (false)
		 *  @memberof DataTable#oApi
		 */
		function _fnProcessingDisplay ( settings, show )
		{
			if ( settings.oFeatures.bProcessing ) {
				$(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
			}

			_fnCallbackFire( settings, null, 'processing', [settings, show] );
		}

		/**
		 * Add any control elements for the table - specifically scrolling
		 *  @param {object} settings dataTables settings object
		 *  @returns {node} Node to add to the DOM
		 *  @memberof DataTable#oApi
		 */
		function _fnFeatureHtmlTable ( settings )
		{
			var table = $(settings.nTable);

			// Add the ARIA grid role to the table
			table.attr( 'role', 'grid' );

			// Scrolling from here on in
			var scroll = settings.oScroll;

			if ( scroll.sX === '' && scroll.sY === '' ) {
				return settings.nTable;
			}

			var scrollX = scroll.sX;
			var scrollY = scroll.sY;
			var classes = settings.oClasses;
			var caption = table.children('caption');
			var captionSide = caption.length ? caption[0]._captionSide : null;
			var headerClone = $( table[0].cloneNode(false) );
			var footerClone = $( table[0].cloneNode(false) );
			var footer = table.children('tfoot');
			var _div = '<div/>';
			var size = function ( s ) {
				return !s ? null : _fnStringToCss( s );
			};

			// This is fairly messy, but with x scrolling enabled, if the table has a
			// width attribute, regardless of any width applied using the column width
			// options, the browser will shrink or grow the table as needed to fit into
			// that 100%. That would make the width options useless. So we remove it.
			// This is okay, under the assumption that width:100% is applied to the
			// table in CSS (it is in the default stylesheet) which will set the table
			// width as appropriate (the attribute and css behave differently...)
			if ( scroll.sX && table.attr('width') === '100%' ) {
				table.removeAttr('width');
			}

			if ( ! footer.length ) {
				footer = null;
			}

			/*
			 * The HTML structure that we want to generate in this function is:
			 *  div - scroller
			 *    div - scroll head
			 *      div - scroll head inner
			 *        table - scroll head table
			 *          thead - thead
			 *    div - scroll body
			 *      table - table (master table)
			 *        thead - thead clone for sizing
			 *        tbody - tbody
			 *    div - scroll foot
			 *      div - scroll foot inner
			 *        table - scroll foot table
			 *          tfoot - tfoot
			 */
			var scroller = $( _div, { 'class': classes.sScrollWrapper } )
				.append(
				$(_div, { 'class': classes.sScrollHead } )
					.css( {
						overflow: 'hidden',
						position: 'relative',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
					$(_div, { 'class': classes.sScrollHeadInner } )
						.css( {
							'box-sizing': 'content-box',
							width: scroll.sXInner || '100%'
						} )
						.append(
						headerClone
							.removeAttr('id')
							.css( 'margin-left', 0 )
							.append( captionSide === 'top' ? caption : null )
							.append(
							table.children('thead')
						)
					)
				)
			)
				.append(
				$(_div, { 'class': classes.sScrollBody } )
					.css( {
						position: 'relative',
						overflow: 'auto',
						width: size( scrollX )
					} )
					.append( table )
			);

			if ( footer ) {
				scroller.append(
					$(_div, { 'class': classes.sScrollFoot } )
						.css( {
							overflow: 'hidden',
							border: 0,
							width: scrollX ? size(scrollX) : '100%'
						} )
						.append(
						$(_div, { 'class': classes.sScrollFootInner } )
							.append(
							footerClone
								.removeAttr('id')
								.css( 'margin-left', 0 )
								.append( captionSide === 'bottom' ? caption : null )
								.append(
								table.children('tfoot')
							)
						)
					)
				);
			}

			var children = scroller.children();
			var scrollHead = children[0];
			var scrollBody = children[1];
			var scrollFoot = footer ? children[2] : null;

			// When the body is scrolled, then we also want to scroll the headers
			if ( scrollX ) {
				$(scrollBody).on( 'scroll.DT', function (e) {
					var scrollLeft = this.scrollLeft;

					scrollHead.scrollLeft = scrollLeft;

					if ( footer ) {
						scrollFoot.scrollLeft = scrollLeft;
					}
				} );
			}

			$(scrollBody).css(
				scrollY && scroll.bCollapse ? 'max-height' : 'height',
				scrollY
			);

			settings.nScrollHead = scrollHead;
			settings.nScrollBody = scrollBody;
			settings.nScrollFoot = scrollFoot;

			// On redraw - align columns
			settings.aoDrawCallback.push( {
				"fn": _fnScrollDraw,
				"sName": "scrolling"
			} );

			return scroller[0];
		}



		/**
		 * Update the header, footer and body tables for resizing - i.e. column
		 * alignment.
		 *
		 * Welcome to the most horrible function DataTables. The process that this
		 * function follows is basically:
		 *   1. Re-create the table inside the scrolling div
		 *   2. Take live measurements from the DOM
		 *   3. Apply the measurements to align the columns
		 *   4. Clean up
		 *
		 *  @param {object} settings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnScrollDraw ( settings )
		{
			// Given that this is such a monster function, a lot of variables are use
			// to try and keep the minimised size as small as possible
			var
				scroll         = settings.oScroll,
				scrollX        = scroll.sX,
				scrollXInner   = scroll.sXInner,
				scrollY        = scroll.sY,
				barWidth       = scroll.iBarWidth,
				divHeader      = $(settings.nScrollHead),
				divHeaderStyle = divHeader[0].style,
				divHeaderInner = divHeader.children('div'),
				divHeaderInnerStyle = divHeaderInner[0].style,
				divHeaderTable = divHeaderInner.children('table'),
				divBodyEl      = settings.nScrollBody,
				divBody        = $(divBodyEl),
				divBodyStyle   = divBodyEl.style,
				divFooter      = $(settings.nScrollFoot),
				divFooterInner = divFooter.children('div'),
				divFooterTable = divFooterInner.children('table'),
				header         = $(settings.nTHead),
				table          = $(settings.nTable),
				tableEl        = table[0],
				tableStyle     = tableEl.style,
				footer         = settings.nTFoot ? $(settings.nTFoot) : null,
				browser        = settings.oBrowser,
				ie67           = browser.bScrollOversize,
				headerTrgEls, footerTrgEls,
				headerSrcEls, footerSrcEls,
				headerCopy, footerCopy,
				headerWidths=[], footerWidths=[],
				headerContent=[],
				idx, correction, sanityWidth,
				zeroOut = function(nSizer) {
					var style = nSizer.style;
					style.paddingTop = "0";
					style.paddingBottom = "0";
					style.borderTopWidth = "0";
					style.borderBottomWidth = "0";
					style.height = 0;
				};

			/*
			 * 1. Re-create the table inside the scrolling div
			 */

			// Remove the old minimised thead and tfoot elements in the inner table
			table.children('thead, tfoot').remove();

			// Clone the current header and footer elements and then place it into the inner table
			headerCopy = header.clone().prependTo( table );
			headerTrgEls = header.find('tr'); // original header is in its own table
			headerSrcEls = headerCopy.find('tr');
			headerCopy.find('th, td').removeAttr('tabindex');

			if ( footer ) {
				footerCopy = footer.clone().prependTo( table );
				footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
				footerSrcEls = footerCopy.find('tr');
			}


			/*
			 * 2. Take live measurements from the DOM - do not alter the DOM itself!
			 */

			// Remove old sizing and apply the calculated column widths
			// Get the unique column headers in the newly created (cloned) header. We want to apply the
			// calculated sizes to this header
			if ( ! scrollX )
			{
				divBodyStyle.width = '100%';
				divHeader[0].style.width = '100%';
			}

			$.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
				idx = _fnVisibleToColumnIndex( settings, i );
				el.style.width = settings.aoColumns[idx].sWidth;
			} );

			if ( footer ) {
				_fnApplyToChildren( function(n) {
					n.style.width = "";
				}, footerSrcEls );
			}

			// Size the table as a whole
			sanityWidth = table.outerWidth();
			if ( scrollX === "" ) {
				// No x scrolling
				tableStyle.width = "100%";

				// IE7 will make the width of the table when 100% include the scrollbar
				// - which is shouldn't. When there is a scrollbar we need to take this
				// into account.
				if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
					divBody.css('overflow-y') == "scroll")
				) {
					tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
				}

				// Recalculate the sanity width
				sanityWidth = table.outerWidth();
			}
			else if ( scrollXInner !== "" ) {
				// legacy x scroll inner has been given - use it
				tableStyle.width = _fnStringToCss(scrollXInner);

				// Recalculate the sanity width
				sanityWidth = table.outerWidth();
			}

			// Hidden header should have zero height, so remove padding and borders. Then
			// set the width based on the real headers

			// Apply all styles in one pass
			_fnApplyToChildren( zeroOut, headerSrcEls );

			// Read all widths in next pass
			_fnApplyToChildren( function(nSizer) {
				headerContent.push( nSizer.innerHTML );
				headerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
			}, headerSrcEls );

			// Apply all widths in final pass
			_fnApplyToChildren( function(nToSize, i) {
				nToSize.style.width = headerWidths[i];
			}, headerTrgEls );

			$(headerSrcEls).height(0);

			/* Same again with the footer if we have one */
			if ( footer )
			{
				_fnApplyToChildren( zeroOut, footerSrcEls );

				_fnApplyToChildren( function(nSizer) {
					footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
				}, footerSrcEls );

				_fnApplyToChildren( function(nToSize, i) {
					nToSize.style.width = footerWidths[i];
				}, footerTrgEls );

				$(footerSrcEls).height(0);
			}


			/*
			 * 3. Apply the measurements
			 */

			// "Hide" the header and footer that we used for the sizing. We need to keep
			// the content of the cell so that the width applied to the header and body
			// both match, but we want to hide it completely. We want to also fix their
			// width to what they currently are
			_fnApplyToChildren( function(nSizer, i) {
				nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+headerContent[i]+'</div>';
				nSizer.style.width = headerWidths[i];
			}, headerSrcEls );

			if ( footer )
			{
				_fnApplyToChildren( function(nSizer, i) {
					nSizer.innerHTML = "";
					nSizer.style.width = footerWidths[i];
				}, footerSrcEls );
			}

			// Sanity check that the table is of a sensible width. If not then we are going to get
			// misalignment - try to prevent this by not allowing the table to shrink below its min width
			if ( table.outerWidth() < sanityWidth )
			{
				// The min width depends upon if we have a vertical scrollbar visible or not */
				correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")) ?
				sanityWidth+barWidth :
					sanityWidth;

				// IE6/7 are a law unto themselves...
				if ( ie67 && (divBodyEl.scrollHeight >
					divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
				) {
					tableStyle.width = _fnStringToCss( correction-barWidth );
				}

				// And give the user a warning that we've stopped the table getting too small
				if ( scrollX === "" || scrollXInner !== "" ) {
					_fnLog( settings, 1, 'Possible column misalignment', 6 );
				}
			}
			else
			{
				correction = '100%';
			}

			// Apply to the container elements
			divBodyStyle.width = _fnStringToCss( correction );
			divHeaderStyle.width = _fnStringToCss( correction );

			if ( footer ) {
				settings.nScrollFoot.style.width = _fnStringToCss( correction );
			}


			/*
			 * 4. Clean up
			 */
			if ( ! scrollY ) {
				/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
				 * the scrollbar height from the visible display, rather than adding it on. We need to
				 * set the height in order to sort this. Don't want to do it in any other browsers.
				 */
				if ( ie67 ) {
					divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
				}
			}

			/* Finally set the width's of the header and footer tables */
			var iOuterWidth = table.outerWidth();
			divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
			divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );

			// Figure out if there are scrollbar present - if so then we need a the header and footer to
			// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
			var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
			var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
			divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";

			if ( footer ) {
				divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
				divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
				divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
			}

			/* Adjust the position of the header in case we loose the y-scrollbar */
			divBody.scroll();

			// If sorting or filtering has occurred, jump the scrolling back to the top
			// only if we aren't holding the position
			if ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {
				divBodyEl.scrollTop = 0;
			}
		}



		/**
		 * Apply a given function to the display child nodes of an element array (typically
		 * TD children of TR rows
		 *  @param {function} fn Method to apply to the objects
		 *  @param array {nodes} an1 List of elements to look through for display children
		 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
		 *  @memberof DataTable#oApi
		 */
		function _fnApplyToChildren( fn, an1, an2 )
		{
			var index=0, i=0, iLen=an1.length;
			var nNode1, nNode2;

			while ( i < iLen ) {
				nNode1 = an1[i].firstChild;
				nNode2 = an2 ? an2[i].firstChild : null;

				while ( nNode1 ) {
					if ( nNode1.nodeType === 1 ) {
						if ( an2 ) {
							fn( nNode1, nNode2, index );
						}
						else {
							fn( nNode1, index );
						}

						index++;
					}

					nNode1 = nNode1.nextSibling;
					nNode2 = an2 ? nNode2.nextSibling : null;
				}

				i++;
			}
		}



		var __re_html_remove = /<.*?>/g;


		/**
		 * Calculate the width of columns for the table
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnCalculateColumnWidths ( oSettings )
		{
			var
				table = oSettings.nTable,
				columns = oSettings.aoColumns,
				scroll = oSettings.oScroll,
				scrollY = scroll.sY,
				scrollX = scroll.sX,
				scrollXInner = scroll.sXInner,
				columnCount = columns.length,
				visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
				headerCells = $('th', oSettings.nTHead),
				tableWidthAttr = table.getAttribute('width'), // from DOM element
				tableContainer = table.parentNode,
				userInputs = false,
				i, column, columnIdx, width, outerWidth,
				browser = oSettings.oBrowser,
				ie67 = browser.bScrollOversize;

			var styleWidth = table.style.width;
			if ( styleWidth && styleWidth.indexOf('%') !== -1 ) {
				tableWidthAttr = styleWidth;
			}

			/* Convert any user input sizes into pixel sizes */
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				column = columns[ visibleColumns[i] ];

				if ( column.sWidth !== null ) {
					column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );

					userInputs = true;
				}
			}

			/* If the number of columns in the DOM equals the number that we have to
			 * process in DataTables, then we can use the offsets that are created by
			 * the web- browser. No custom sizes can be set in order for this to happen,
			 * nor scrolling used
			 */
			if ( ie67 || ! userInputs && ! scrollX && ! scrollY &&
				columnCount == _fnVisbleColumns( oSettings ) &&
				columnCount == headerCells.length
			) {
				for ( i=0 ; i<columnCount ; i++ ) {
					var colIdx = _fnVisibleToColumnIndex( oSettings, i );

					if ( colIdx ) {
						columns[ colIdx ].sWidth = _fnStringToCss( headerCells.eq(i).width() );
					}
				}
			}
			else
			{
				// Otherwise construct a single row, worst case, table with the widest
				// node in the data, assign any user defined widths, then insert it into
				// the DOM and allow the browser to do all the hard work of calculating
				// table widths
				var tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table
					.css( 'visibility', 'hidden' )
					.removeAttr( 'id' );

				// Clean up the table body
				tmpTable.find('tbody tr').remove();
				var tr = $('<tr/>').appendTo( tmpTable.find('tbody') );

				// Clone the table header and footer - we can't use the header / footer
				// from the cloned table, since if scrolling is active, the table's
				// real header and footer are contained in different table tags
				tmpTable.find('thead, tfoot').remove();
				tmpTable
					.append( $(oSettings.nTHead).clone() )
					.append( $(oSettings.nTFoot).clone() );

				// Remove any assigned widths from the footer (from scrolling)
				tmpTable.find('tfoot th, tfoot td').css('width', '');

				// Apply custom sizing to the cloned header
				headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );

				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					column = columns[ visibleColumns[i] ];

					headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
						_fnStringToCss( column.sWidthOrig ) :
						'';
				}

				// Find the widest cell for each column and put it into the table
				if ( oSettings.aoData.length ) {
					for ( i=0 ; i<visibleColumns.length ; i++ ) {
						columnIdx = visibleColumns[i];
						column = columns[ columnIdx ];

						$( _fnGetWidestNode( oSettings, columnIdx ) )
							.clone( false )
							.append( column.sContentPadding )
							.appendTo( tr );
					}
				}

				// Table has been built, attach to the document so we can work with it.
				// A holding element is used, positioned at the top of the container
				// with minimal height, so it has no effect on if the container scrolls
				// or not. Otherwise it might trigger scrolling when it actually isn't
				// needed
				var holder = $('<div/>').css( scrollX || scrollY ?
					{
						position: 'absolute',
						top: 0,
						left: 0,
						height: 1,
						right: 0,
						overflow: 'hidden'
					} :
					{}
				)
					.append( tmpTable )
					.appendTo( tableContainer );

				// When scrolling (X or Y) we want to set the width of the table as 
				// appropriate. However, when not scrolling leave the table width as it
				// is. This results in slightly different, but I think correct behaviour
				if ( scrollX && scrollXInner ) {
					tmpTable.width( scrollXInner );
				}
				else if ( scrollX ) {
					tmpTable.css( 'width', 'auto' );

					if ( tmpTable.width() < tableContainer.clientWidth ) {
						tmpTable.width( tableContainer.clientWidth );
					}
				}
				else if ( scrollY ) {
					tmpTable.width( tableContainer.clientWidth );
				}
				else if ( tableWidthAttr ) {
					tmpTable.width( tableWidthAttr );
				}

				// Browsers need a bit of a hand when a width is assigned to any columns
				// when x-scrolling as they tend to collapse the table to the min-width,
				// even if we sent the column widths. So we need to keep track of what
				// the table width should be by summing the user given values, and the
				// automatic values
				if ( scrollX )
				{
					var total = 0;

					for ( i=0 ; i<visibleColumns.length ; i++ ) {
						column = columns[ visibleColumns[i] ];

						// Much prefer to use getBoundingClientRect due to its sub-pixel
						// resolution, but IE8- do not support the width property.
						outerWidth = browser.bBounding ?
							headerCells[i].getBoundingClientRect().width :
							$(headerCells[i]).outerWidth();

						total += column.sWidthOrig === null ?
							outerWidth :
						parseInt( column.sWidth, 10 ) + outerWidth - $(headerCells[i]).width();
					}

					tmpTable.width( _fnStringToCss( total ) );
					table.style.width = _fnStringToCss( total );
				}

				// Get the width of each column in the constructed table
				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					column = columns[ visibleColumns[i] ];
					width = $(headerCells[i]).width();

					if ( width ) {
						column.sWidth = _fnStringToCss( width );
					}
				}

				table.style.width = _fnStringToCss( tmpTable.css('width') );

				// Finished with the table - ditch it
				holder.remove();
			}

			// If there is a width attr, we want to attach an event listener which
			// allows the table sizing to automatically adjust when the window is
			// resized. Use the width attr rather than CSS, since we can't know if the
			// CSS is a relative value or absolute - DOM read is always px.
			if ( tableWidthAttr ) {
				table.style.width = _fnStringToCss( tableWidthAttr );
			}

			if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
				var bindResize = function () {
					$(window).bind('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
						_fnAdjustColumnSizing( oSettings );
					} ) );
				};

				// IE6/7 will crash if we bind a resize event handler on page load.
				// To be removed in 1.11 which drops IE6/7 support
				if ( ie67 ) {
					setTimeout( bindResize, 1000 );
				}
				else {
					bindResize();
				}

				oSettings._reszEvt = true;
			}
		}


		/**
		 * Throttle the calls to a function. Arguments and context are maintained for
		 * the throttled function
		 *  @param {function} fn Function to be called
		 *  @param {int} [freq=200] call frequency in mS
		 *  @returns {function} wrapped function
		 *  @memberof DataTable#oApi
		 */
		function _fnThrottle( fn, freq ) {
			var
				frequency = freq !== undefined ? freq : 200,
				last,
				timer;

			return function () {
				var
					that = this,
					now  = +new Date(),
					args = arguments;

				if ( last && now < last + frequency ) {
					clearTimeout( timer );

					timer = setTimeout( function () {
						last = undefined;
						fn.apply( that, args );
					}, frequency );
				}
				else {
					last = now;
					fn.apply( that, args );
				}
			};
		}


		/**
		 * Convert a CSS unit width to pixels (e.g. 2em)
		 *  @param {string} width width to be converted
		 *  @param {node} parent parent to get the with for (required for relative widths) - optional
		 *  @returns {int} width in pixels
		 *  @memberof DataTable#oApi
		 */
		function _fnConvertToWidth ( width, parent )
		{
			if ( ! width ) {
				return 0;
			}

			var n = $('<div/>')
				.css( 'width', _fnStringToCss( width ) )
				.appendTo( parent || document.body );

			var val = n[0].offsetWidth;
			n.remove();

			return val;
		}


		/**
		 * Get the widest node
		 *  @param {object} settings dataTables settings object
		 *  @param {int} colIdx column of interest
		 *  @returns {node} widest table node
		 *  @memberof DataTable#oApi
		 */
		function _fnGetWidestNode( settings, colIdx )
		{
			var idx = _fnGetMaxLenString( settings, colIdx );
			if ( idx < 0 ) {
				return null;
			}

			var data = settings.aoData[ idx ];
			return ! data.nTr ? // Might not have been created when deferred rendering
				$('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
				data.anCells[ colIdx ];
		}


		/**
		 * Get the maximum strlen for each data column
		 *  @param {object} settings dataTables settings object
		 *  @param {int} colIdx column of interest
		 *  @returns {string} max string length for each column
		 *  @memberof DataTable#oApi
		 */
		function _fnGetMaxLenString( settings, colIdx )
		{
			var s, max=-1, maxIdx = -1;

			for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
				s = s.replace( __re_html_remove, '' );

				if ( s.length > max ) {
					max = s.length;
					maxIdx = i;
				}
			}

			return maxIdx;
		}


		/**
		 * Append a CSS unit (only if required) to a string
		 *  @param {string} value to css-ify
		 *  @returns {string} value with css unit
		 *  @memberof DataTable#oApi
		 */
		function _fnStringToCss( s )
		{
			if ( s === null ) {
				return '0px';
			}

			if ( typeof s == 'number' ) {
				return s < 0 ?
					'0px' :
				s+'px';
			}

			// Check it has a unit character already
			return s.match(/\d$/) ?
			s+'px' :
				s;
		}



		function _fnSortFlatten ( settings )
		{
			var
				i, iLen, k, kLen,
				aSort = [],
				aiOrig = [],
				aoColumns = settings.aoColumns,
				aDataSort, iCol, sType, srcCol,
				fixed = settings.aaSortingFixed,
				fixedObj = $.isPlainObject( fixed ),
				nestedSort = [],
				add = function ( a ) {
					if ( a.length && ! $.isArray( a[0] ) ) {
						// 1D array
						nestedSort.push( a );
					}
					else {
						// 2D array
						$.merge( nestedSort, a );
					}
				};

			// Build the sort array, with pre-fix and post-fix options if they have been
			// specified
			if ( $.isArray( fixed ) ) {
				add( fixed );
			}

			if ( fixedObj && fixed.pre ) {
				add( fixed.pre );
			}

			add( settings.aaSorting );

			if (fixedObj && fixed.post ) {
				add( fixed.post );
			}

			for ( i=0 ; i<nestedSort.length ; i++ )
			{
				srcCol = nestedSort[i][0];
				aDataSort = aoColumns[ srcCol ].aDataSort;

				for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
				{
					iCol = aDataSort[k];
					sType = aoColumns[ iCol ].sType || 'string';

					if ( nestedSort[i]._idx === undefined ) {
						nestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );
					}

					aSort.push( {
						src:       srcCol,
						col:       iCol,
						dir:       nestedSort[i][1],
						index:     nestedSort[i]._idx,
						type:      sType,
						formatter: DataTable.ext.type.order[ sType+"-pre" ]
					} );
				}
			}

			return aSort;
		}

		/**
		 * Change the order of the table
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 *  @todo This really needs split up!
		 */
		function _fnSort ( oSettings )
		{
			var
				i, ien, iLen, j, jLen, k, kLen,
				sDataType, nTh,
				aiOrig = [],
				oExtSort = DataTable.ext.type.order,
				aoData = oSettings.aoData,
				aoColumns = oSettings.aoColumns,
				aDataSort, data, iCol, sType, oSort,
				formatters = 0,
				sortCol,
				displayMaster = oSettings.aiDisplayMaster,
				aSort;

			// Resolve any column types that are unknown due to addition or invalidation
			// @todo Can this be moved into a 'data-ready' handler which is called when
			//   data is going to be used in the table?
			_fnColumnTypes( oSettings );

			aSort = _fnSortFlatten( oSettings );

			for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
				sortCol = aSort[i];

				// Track if we can use the fast sort algorithm
				if ( sortCol.formatter ) {
					formatters++;
				}

				// Load the data needed for the sort, for each cell
				_fnSortData( oSettings, sortCol.col );
			}

			/* No sorting required if server-side or no sorting array */
			if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
			{
				// Create a value - key array of the current row positions such that we can use their
				// current position during the sort, if values match, in order to perform stable sorting
				for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
					aiOrig[ displayMaster[i] ] = i;
				}

				/* Do the sort - here we want multi-column sorting based on a given data source (column)
				 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
				 * follow on it's own, but this is what we want (example two column sorting):
				 *  fnLocalSorting = function(a,b){
				 *    var iTest;
				 *    iTest = oSort['string-asc']('data11', 'data12');
				 *      if (iTest !== 0)
				 *        return iTest;
				 *    iTest = oSort['numeric-desc']('data21', 'data22');
				 *    if (iTest !== 0)
				 *      return iTest;
				 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
				 *  }
				 * Basically we have a test for each sorting column, if the data in that column is equal,
				 * test the next column. If all columns match, then we use a numeric sort on the row
				 * positions in the original data array to provide a stable sort.
				 *
				 * Note - I know it seems excessive to have two sorting methods, but the first is around
				 * 15% faster, so the second is only maintained for backwards compatibility with sorting
				 * methods which do not have a pre-sort formatting function.
				 */
				if ( formatters === aSort.length ) {
					// All sort types have formatting functions
					displayMaster.sort( function ( a, b ) {
						var
							x, y, k, test, sort,
							len=aSort.length,
							dataA = aoData[a]._aSortData,
							dataB = aoData[b]._aSortData;

						for ( k=0 ; k<len ; k++ ) {
							sort = aSort[k];

							x = dataA[ sort.col ];
							y = dataB[ sort.col ];

							test = x<y ? -1 : x>y ? 1 : 0;
							if ( test !== 0 ) {
								return sort.dir === 'asc' ? test : -test;
							}
						}

						x = aiOrig[a];
						y = aiOrig[b];
						return x<y ? -1 : x>y ? 1 : 0;
					} );
				}
				else {
					// Depreciated - remove in 1.11 (providing a plug-in option)
					// Not all sort types have formatting methods, so we have to call their sorting
					// methods.
					displayMaster.sort( function ( a, b ) {
						var
							x, y, k, l, test, sort, fn,
							len=aSort.length,
							dataA = aoData[a]._aSortData,
							dataB = aoData[b]._aSortData;

						for ( k=0 ; k<len ; k++ ) {
							sort = aSort[k];

							x = dataA[ sort.col ];
							y = dataB[ sort.col ];

							fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
							test = fn( x, y );
							if ( test !== 0 ) {
								return test;
							}
						}

						x = aiOrig[a];
						y = aiOrig[b];
						return x<y ? -1 : x>y ? 1 : 0;
					} );
				}
			}

			/* Tell the draw function that we have sorted the data */
			oSettings.bSorted = true;
		}


		function _fnSortAria ( settings )
		{
			var label;
			var nextSort;
			var columns = settings.aoColumns;
			var aSort = _fnSortFlatten( settings );
			var oAria = settings.oLanguage.oAria;

			// ARIA attributes - need to loop all columns, to update all (removing old
			// attributes as needed)
			for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
			{
				var col = columns[i];
				var asSorting = col.asSorting;
				var sTitle = col.sTitle.replace( /<.*?>/g, "" );
				var th = col.nTh;

				// IE7 is throwing an error when setting these properties with jQuery's
				// attr() and removeAttr() methods...
				th.removeAttribute('aria-sort');

				/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
				if ( col.bSortable ) {
					if ( aSort.length > 0 && aSort[0].col == i ) {
						th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
						nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
					}
					else {
						nextSort = asSorting[0];
					}

					label = sTitle + ( nextSort === "asc" ?
								oAria.sSortAscending :
								oAria.sSortDescending
						);
				}
				else {
					label = sTitle;
				}

				th.setAttribute('aria-label', label);
			}
		}


		/**
		 * Function to run on user sort request
		 *  @param {object} settings dataTables settings object
		 *  @param {node} attachTo node to attach the handler to
		 *  @param {int} colIdx column sorting index
		 *  @param {boolean} [append=false] Append the requested sort to the existing
		 *    sort if true (i.e. multi-column sort)
		 *  @param {function} [callback] callback function
		 *  @memberof DataTable#oApi
		 */
		function _fnSortListener ( settings, colIdx, append, callback )
		{
			var col = settings.aoColumns[ colIdx ];
			var sorting = settings.aaSorting;
			var asSorting = col.asSorting;
			var nextSortIdx;
			var next = function ( a, overflow ) {
				var idx = a._idx;
				if ( idx === undefined ) {
					idx = $.inArray( a[1], asSorting );
				}

				return idx+1 < asSorting.length ?
				idx+1 :
					overflow ?
						null :
						0;
			};

			// Convert to 2D array if needed
			if ( typeof sorting[0] === 'number' ) {
				sorting = settings.aaSorting = [ sorting ];
			}

			// If appending the sort then we are multi-column sorting
			if ( append && settings.oFeatures.bSortMulti ) {
				// Are we already doing some kind of sort on this column?
				var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );

				if ( sortIdx !== -1 ) {
					// Yes, modify the sort
					nextSortIdx = next( sorting[sortIdx], true );

					if ( nextSortIdx === null && sorting.length === 1 ) {
						nextSortIdx = 0; // can't remove sorting completely
					}

					if ( nextSortIdx === null ) {
						sorting.splice( sortIdx, 1 );
					}
					else {
						sorting[sortIdx][1] = asSorting[ nextSortIdx ];
						sorting[sortIdx]._idx = nextSortIdx;
					}
				}
				else {
					// No sort on this column yet
					sorting.push( [ colIdx, asSorting[0], 0 ] );
					sorting[sorting.length-1]._idx = 0;
				}
			}
			else if ( sorting.length && sorting[0][0] == colIdx ) {
				// Single column - already sorting on this column, modify the sort
				nextSortIdx = next( sorting[0] );

				sorting.length = 1;
				sorting[0][1] = asSorting[ nextSortIdx ];
				sorting[0]._idx = nextSortIdx;
			}
			else {
				// Single column - sort only on this column
				sorting.length = 0;
				sorting.push( [ colIdx, asSorting[0] ] );
				sorting[0]._idx = 0;
			}

			// Run the sort by calling a full redraw
			_fnReDraw( settings );

			// callback used for async user interaction
			if ( typeof callback == 'function' ) {
				callback( settings );
			}
		}


		/**
		 * Attach a sort handler (click) to a node
		 *  @param {object} settings dataTables settings object
		 *  @param {node} attachTo node to attach the handler to
		 *  @param {int} colIdx column sorting index
		 *  @param {function} [callback] callback function
		 *  @memberof DataTable#oApi
		 */
		function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
		{
			var col = settings.aoColumns[ colIdx ];

			_fnBindAction( attachTo, {}, function (e) {
				/* If the column is not sortable - don't to anything */
				if ( col.bSortable === false ) {
					return;
				}

				// If processing is enabled use a timeout to allow the processing
				// display to be shown - otherwise to it synchronously
				if ( settings.oFeatures.bProcessing ) {
					_fnProcessingDisplay( settings, true );

					setTimeout( function() {
						_fnSortListener( settings, colIdx, e.shiftKey, callback );

						// In server-side processing, the draw callback will remove the
						// processing display
						if ( _fnDataSource( settings ) !== 'ssp' ) {
							_fnProcessingDisplay( settings, false );
						}
					}, 0 );
				}
				else {
					_fnSortListener( settings, colIdx, e.shiftKey, callback );
				}
			} );
		}


		/**
		 * Set the sorting classes on table's body, Note: it is safe to call this function
		 * when bSort and bSortClasses are false
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnSortingClasses( settings )
		{
			var oldSort = settings.aLastSort;
			var sortClass = settings.oClasses.sSortColumn;
			var sort = _fnSortFlatten( settings );
			var features = settings.oFeatures;
			var i, ien, colIdx;

			if ( features.bSort && features.bSortClasses ) {
				// Remove old sorting classes
				for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
					colIdx = oldSort[i].src;

					// Remove column sorting
					$( _pluck( settings.aoData, 'anCells', colIdx ) )
						.removeClass( sortClass + (i<2 ? i+1 : 3) );
				}

				// Add new column sorting
				for ( i=0, ien=sort.length ; i<ien ; i++ ) {
					colIdx = sort[i].src;

					$( _pluck( settings.aoData, 'anCells', colIdx ) )
						.addClass( sortClass + (i<2 ? i+1 : 3) );
				}
			}

			settings.aLastSort = sort;
		}


		// Get the data to sort a column, be it from cache, fresh (populating the
		// cache), or from a sort formatter
		function _fnSortData( settings, idx )
		{
			// Custom sorting function - provided by the sort data type
			var column = settings.aoColumns[ idx ];
			var customSort = DataTable.ext.order[ column.sSortDataType ];
			var customData;

			if ( customSort ) {
				customData = customSort.call( settings.oInstance, settings, idx,
					_fnColumnIndexToVisible( settings, idx )
				);
			}

			// Use / populate cache
			var row, cellData;
			var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];

			for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				row = settings.aoData[i];

				if ( ! row._aSortData ) {
					row._aSortData = [];
				}

				if ( ! row._aSortData[idx] || customSort ) {
					cellData = customSort ?
						customData[i] : // If there was a custom sort function, use data from there
						_fnGetCellData( settings, i, idx, 'sort' );

					row._aSortData[ idx ] = formatter ?
						formatter( cellData ) :
						cellData;
				}
			}
		}



		/**
		 * Save the state of a table
		 *  @param {object} oSettings dataTables settings object
		 *  @memberof DataTable#oApi
		 */
		function _fnSaveState ( settings )
		{
			if ( !settings.oFeatures.bStateSave || settings.bDestroying )
			{
				return;
			}

			/* Store the interesting variables */
			var state = {
				time:    +new Date(),
				start:   settings._iDisplayStart,
				length:  settings._iDisplayLength,
				order:   $.extend( true, [], settings.aaSorting ),
				search:  _fnSearchToCamel( settings.oPreviousSearch ),
				columns: $.map( settings.aoColumns, function ( col, i ) {
					return {
						visible: col.bVisible,
						search: _fnSearchToCamel( settings.aoPreSearchCols[i] )
					};
				} )
			};

			_fnCallbackFire( settings, "aoStateSaveParams", 'stateSaveParams', [settings, state] );

			settings.oSavedState = state;
			settings.fnStateSaveCallback.call( settings.oInstance, settings, state );
		}


		/**
		 * Attempt to load a saved table state
		 *  @param {object} oSettings dataTables settings object
		 *  @param {object} oInit DataTables init object so we can override settings
		 *  @memberof DataTable#oApi
		 */
		function _fnLoadState ( settings, oInit )
		{
			var i, ien;
			var columns = settings.aoColumns;

			if ( ! settings.oFeatures.bStateSave ) {
				return;
			}

			var state = settings.fnStateLoadCallback.call( settings.oInstance, settings );
			if ( ! state || ! state.time ) {
				return;
			}

			/* Allow custom and plug-in manipulation functions to alter the saved data set and
			 * cancelling of loading by returning false
			 */
			var abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, state] );
			if ( $.inArray( false, abStateLoad ) !== -1 ) {
				return;
			}

			/* Reject old data */
			var duration = settings.iStateDuration;
			if ( duration > 0 && state.time < +new Date() - (duration*1000) ) {
				return;
			}

			// Number of columns have changed - all bets are off, no restore of settings
			if ( columns.length !== state.columns.length ) {
				return;
			}

			// Store the saved state so it might be accessed at any time
			settings.oLoadedState = $.extend( true, {}, state );

			// Restore key features - todo - for 1.11 this needs to be done by
			// subscribed events
			if ( state.start !== undefined ) {
				settings._iDisplayStart    = state.start;
				settings.iInitDisplayStart = state.start;
			}
			if ( state.length !== undefined ) {
				settings._iDisplayLength   = state.length;
			}

			// Order
			if ( state.order !== undefined ) {
				settings.aaSorting = [];
				$.each( state.order, function ( i, col ) {
					settings.aaSorting.push( col[0] >= columns.length ?
							[ 0, col[1] ] :
							col
					);
				} );
			}

			// Search
			if ( state.search !== undefined ) {
				$.extend( settings.oPreviousSearch, _fnSearchToHung( state.search ) );
			}

			// Columns
			for ( i=0, ien=state.columns.length ; i<ien ; i++ ) {
				var col = state.columns[i];

				// Visibility
				if ( col.visible !== undefined ) {
					columns[i].bVisible = col.visible;
				}

				// Search
				if ( col.search !== undefined ) {
					$.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );
				}
			}

			_fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, state] );
		}


		/**
		 * Return the settings object for a particular table
		 *  @param {node} table table we are using as a dataTable
		 *  @returns {object} Settings object - or null if not found
		 *  @memberof DataTable#oApi
		 */
		function _fnSettingsFromNode ( table )
		{
			var settings = DataTable.settings;
			var idx = $.inArray( table, _pluck( settings, 'nTable' ) );

			return idx !== -1 ?
				settings[ idx ] :
				null;
		}


		/**
		 * Log an error message
		 *  @param {object} settings dataTables settings object
		 *  @param {int} level log error messages, or display them to the user
		 *  @param {string} msg error message
		 *  @param {int} tn Technical note id to get more information about the error.
		 *  @memberof DataTable#oApi
		 */
		function _fnLog( settings, level, msg, tn )
		{
			msg = 'DataTables warning: '+
				(settings ? 'table id='+settings.sTableId+' - ' : '')+msg;

			if ( tn ) {
				msg += '. For more information about this error, please see '+
					'http://datatables.net/tn/'+tn;
			}

			if ( ! level  ) {
				// Backwards compatibility pre 1.10
				var ext = DataTable.ext;
				var type = ext.sErrMode || ext.errMode;

				if ( settings ) {
					_fnCallbackFire( settings, null, 'error', [ settings, tn, msg ] );
				}

				if ( type == 'alert' ) {
					alert( msg );
				}
				else if ( type == 'throw' ) {
					throw new Error(msg);
				}
				else if ( typeof type == 'function' ) {
					type( settings, tn, msg );
				}
			}
			else if ( window.console && console.log ) {
				console.log( msg );
			}
		}


		/**
		 * See if a property is defined on one object, if so assign it to the other object
		 *  @param {object} ret target object
		 *  @param {object} src source object
		 *  @param {string} name property
		 *  @param {string} [mappedName] name to map too - optional, name used if not given
		 *  @memberof DataTable#oApi
		 */
		function _fnMap( ret, src, name, mappedName )
		{
			if ( $.isArray( name ) ) {
				$.each( name, function (i, val) {
					if ( $.isArray( val ) ) {
						_fnMap( ret, src, val[0], val[1] );
					}
					else {
						_fnMap( ret, src, val );
					}
				} );

				return;
			}

			if ( mappedName === undefined ) {
				mappedName = name;
			}

			if ( src[name] !== undefined ) {
				ret[mappedName] = src[name];
			}
		}


		/**
		 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
		 * shallow copy arrays. The reason we need to do this, is that we don't want to
		 * deep copy array init values (such as aaSorting) since the dev wouldn't be
		 * able to override them, but we do want to deep copy arrays.
		 *  @param {object} out Object to extend
		 *  @param {object} extender Object from which the properties will be applied to
		 *      out
		 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
		 *      independent copy with the exception of the `data` or `aaData` parameters
		 *      if they are present. This is so you can pass in a collection to
		 *      DataTables and have that used as your data source without breaking the
		 *      references
		 *  @returns {object} out Reference, just for convenience - out === the return.
		 *  @memberof DataTable#oApi
		 *  @todo This doesn't take account of arrays inside the deep copied objects.
		 */
		function _fnExtend( out, extender, breakRefs )
		{
			var val;

			for ( var prop in extender ) {
				if ( extender.hasOwnProperty(prop) ) {
					val = extender[prop];

					if ( $.isPlainObject( val ) ) {
						if ( ! $.isPlainObject( out[prop] ) ) {
							out[prop] = {};
						}
						$.extend( true, out[prop], val );
					}
					else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val) ) {
						out[prop] = val.slice();
					}
					else {
						out[prop] = val;
					}
				}
			}

			return out;
		}


		/**
		 * Bind an event handers to allow a click or return key to activate the callback.
		 * This is good for accessibility since a return on the keyboard will have the
		 * same effect as a click, if the element has focus.
		 *  @param {element} n Element to bind the action to
		 *  @param {object} oData Data object to pass to the triggered function
		 *  @param {function} fn Callback function for when the event is triggered
		 *  @memberof DataTable#oApi
		 */
		function _fnBindAction( n, oData, fn )
		{
			$(n)
				.bind( 'click.DT', oData, function (e) {
					n.blur(); // Remove focus outline for mouse users
					fn(e);
				} )
				.bind( 'keypress.DT', oData, function (e){
					if ( e.which === 13 ) {
						e.preventDefault();
						fn(e);
					}
				} )
				.bind( 'selectstart.DT', function () {
					/* Take the brutal approach to cancelling text selection */
					return false;
				} );
		}


		/**
		 * Register a callback function. Easily allows a callback function to be added to
		 * an array store of callback functions that can then all be called together.
		 *  @param {object} oSettings dataTables settings object
		 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
		 *  @param {function} fn Function to be called back
		 *  @param {string} sName Identifying name for the callback (i.e. a label)
		 *  @memberof DataTable#oApi
		 */
		function _fnCallbackReg( oSettings, sStore, fn, sName )
		{
			if ( fn )
			{
				oSettings[sStore].push( {
					"fn": fn,
					"sName": sName
				} );
			}
		}


		/**
		 * Fire callback functions and trigger events. Note that the loop over the
		 * callback array store is done backwards! Further note that you do not want to
		 * fire off triggers in time sensitive applications (for example cell creation)
		 * as its slow.
		 *  @param {object} settings dataTables settings object
		 *  @param {string} callbackArr Name of the array storage for the callbacks in
		 *      oSettings
		 *  @param {string} eventName Name of the jQuery custom event to trigger. If
		 *      null no trigger is fired
		 *  @param {array} args Array of arguments to pass to the callback function /
		 *      trigger
		 *  @memberof DataTable#oApi
		 */
		function _fnCallbackFire( settings, callbackArr, eventName, args )
		{
			var ret = [];

			if ( callbackArr ) {
				ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
					return val.fn.apply( settings.oInstance, args );
				} );
			}

			if ( eventName !== null ) {
				var e = $.Event( eventName+'.dt' );

				$(settings.nTable).trigger( e, args );

				ret.push( e.result );
			}

			return ret;
		}


		function _fnLengthOverflow ( settings )
		{
			var
				start = settings._iDisplayStart,
				end = settings.fnDisplayEnd(),
				len = settings._iDisplayLength;

			/* If we have space to show extra rows (backing up from the end point - then do so */
			if ( start >= end )
			{
				start = end - len;
			}

			// Keep the start record on the current page
			start -= (start % len);

			if ( len === -1 || start < 0 )
			{
				start = 0;
			}

			settings._iDisplayStart = start;
		}


		function _fnRenderer( settings, type )
		{
			var renderer = settings.renderer;
			var host = DataTable.ext.renderer[type];

			if ( $.isPlainObject( renderer ) && renderer[type] ) {
				// Specific renderer for this type. If available use it, otherwise use
				// the default.
				return host[renderer[type]] || host._;
			}
			else if ( typeof renderer === 'string' ) {
				// Common renderer - if there is one available for this type use it,
				// otherwise use the default
				return host[renderer] || host._;
			}

			// Use the default
			return host._;
		}


		/**
		 * Detect the data source being used for the table. Used to simplify the code
		 * a little (ajax) and to make it compress a little smaller.
		 *
		 *  @param {object} settings dataTables settings object
		 *  @returns {string} Data source
		 *  @memberof DataTable#oApi
		 */
		function _fnDataSource ( settings )
		{
			if ( settings.oFeatures.bServerSide ) {
				return 'ssp';
			}
			else if ( settings.ajax || settings.sAjaxSource ) {
				return 'ajax';
			}
			return 'dom';
		}


		DataTable = function( options )
		{
			/**
			 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
			 * return the resulting jQuery object.
			 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
			 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
			 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
			 *    criterion ("applied") or all TR elements (i.e. no filter).
			 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
			 *    Can be either 'current', whereby the current sorting of the table is used, or
			 *    'original' whereby the original order the data was read into the table is used.
			 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
			 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
			 *    'current' and filter is 'applied', regardless of what they might be given as.
			 *  @returns {object} jQuery object, filtered by the given selector.
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
			 */
			this.$ = function ( sSelector, oOpts )
			{
				return this.api(true).$( sSelector, oOpts );
			};


			/**
			 * Almost identical to $ in operation, but in this case returns the data for the matched
			 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
			 * rather than any descendants, so the data can be obtained for the row/cell. If matching
			 * rows are found, the data returned is the original data array/object that was used to
			 * create the row (or a generated array if from a DOM source).
			 *
			 * This method is often useful in-combination with $ where both functions are given the
			 * same parameters and the array indexes will match identically.
			 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
			 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
			 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
			 *    criterion ("applied") or all elements (i.e. no filter).
			 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
			 *    Can be either 'current', whereby the current sorting of the table is used, or
			 *    'original' whereby the original order the data was read into the table is used.
			 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
			 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
			 *    'current' and filter is 'applied', regardless of what they might be given as.
			 *  @returns {array} Data for the matched elements. If any elements, as a result of the
			 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
			 *    entry in the array.
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
			 */
			this._ = function ( sSelector, oOpts )
			{
				return this.api(true).rows( sSelector, oOpts ).data();
			};


			/**
			 * Create a DataTables Api instance, with the currently selected tables for
			 * the Api's context.
			 * @param {boolean} [traditional=false] Set the API instance's context to be
			 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
			 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
			 *   or if all tables captured in the jQuery object should be used.
			 * @return {DataTables.Api}
			 */
			this.api = function ( traditional )
			{
				return traditional ?
					new _Api(
						_fnSettingsFromNode( this[ _ext.iApiIndex ] )
					) :
					new _Api( this );
			};


			/**
			 * Add a single new row or multiple rows of data to the table. Please note
			 * that this is suitable for client-side processing only - if you are using
			 * server-side processing (i.e. "bServerSide": true), then to add data, you
			 * must add it to the data source, i.e. the server-side, through an Ajax call.
			 *  @param {array|object} data The data to be added to the table. This can be:
			 *    <ul>
			 *      <li>1D array of data - add a single row with the data provided</li>
			 *      <li>2D array of arrays - add multiple rows in a single call</li>
			 *      <li>object - data object when using <i>mData</i></li>
			 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
			 *    </ul>
			 *  @param {bool} [redraw=true] redraw the table or not
			 *  @returns {array} An array of integers, representing the list of indexes in
			 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
			 *    the table.
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    // Global var for counter
			 *    var giCount = 2;
			 *
			 *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
			 *
			 *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
			 */
			this.fnAddData = function( data, redraw )
			{
				var api = this.api( true );

				/* Check if we want to add multiple rows or not */
				var rows = $.isArray(data) && ( $.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
					api.rows.add( data ) :
					api.row.add( data );

				if ( redraw === undefined || redraw ) {
					api.draw();
				}

				return rows.flatten().toArray();
			};


			/**
			 * This function will make DataTables recalculate the column sizes, based on the data
			 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
			 * through the sWidth parameter). This can be useful when the width of the table's
			 * parent element changes (for example a window resize).
			 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).bind('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
			 */
			this.fnAdjustColumnSizing = function ( bRedraw )
			{
				var api = this.api( true ).columns.adjust();
				var settings = api.settings()[0];
				var scroll = settings.oScroll;

				if ( bRedraw === undefined || bRedraw ) {
					api.draw( false );
				}
				else if ( scroll.sX !== "" || scroll.sY !== "" ) {
					/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
					_fnScrollDraw( settings );
				}
			};


			/**
			 * Quickly and simply clear a table
			 *  @param {bool} [bRedraw=true] redraw the table or not
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
			 */
			this.fnClearTable = function( bRedraw )
			{
				var api = this.api( true ).clear();

				if ( bRedraw === undefined || bRedraw ) {
					api.draw();
				}
			};


			/**
			 * The exact opposite of 'opening' a row, this function will close any rows which
			 * are currently 'open'.
			 *  @param {node} nTr the table row to 'close'
			 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
			 */
			this.fnClose = function( nTr )
			{
				this.api( true ).row( nTr ).child.hide();
			};


			/**
			 * Remove a row for the table
			 *  @param {mixed} target The index of the row from aoData to be deleted, or
			 *    the TR element you want to delete
			 *  @param {function|null} [callBack] Callback function
			 *  @param {bool} [redraw=true] Redraw the table or not
			 *  @returns {array} The row that was deleted
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
			 */
			this.fnDeleteRow = function( target, callback, redraw )
			{
				var api = this.api( true );
				var rows = api.rows( target );
				var settings = rows.settings()[0];
				var data = settings.aoData[ rows[0][0] ];

				rows.remove();

				if ( callback ) {
					callback.call( this, settings, data );
				}

				if ( redraw === undefined || redraw ) {
					api.draw();
				}

				return data;
			};


			/**
			 * Restore the table to it's original state in the DOM by removing all of DataTables
			 * enhancements, alterations to the DOM structure of the table and event listeners.
			 *  @param {boolean} [remove=false] Completely remove the table from the DOM
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
			 */
			this.fnDestroy = function ( remove )
			{
				this.api( true ).destroy( remove );
			};


			/**
			 * Redraw the table
			 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
			 */
			this.fnDraw = function( complete )
			{
				// Note that this isn't an exact match to the old call to _fnDraw - it takes
				// into account the new data, but can hold position.
				this.api( true ).draw( complete );
			};


			/**
			 * Filter the input based on data
			 *  @param {string} sInput String to filter the table on
			 *  @param {int|null} [iColumn] Column to limit filtering to
			 *  @param {bool} [bRegex=false] Treat as regular expression or not
			 *  @param {bool} [bSmart=true] Perform smart filtering or not
			 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
			 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
			 */
			this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
			{
				var api = this.api( true );

				if ( iColumn === null || iColumn === undefined ) {
					api.search( sInput, bRegex, bSmart, bCaseInsensitive );
				}
				else {
					api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
				}

				api.draw();
			};


			/**
			 * Get the data for the whole table, an individual row or an individual cell based on the
			 * provided parameters.
			 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
			 *    a TR node then the data source for the whole row will be returned. If given as a
			 *    TD/TH cell node then iCol will be automatically calculated and the data for the
			 *    cell returned. If given as an integer, then this is treated as the aoData internal
			 *    data index for the row (see fnGetPosition) and the data for that row used.
			 *  @param {int} [col] Optional column index that you want the data of.
			 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
			 *    returned. If mRow is defined, just data for that row, and is iCol is
			 *    defined, only data for the designated cell is returned.
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    // Row data
			 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Individual cell data
			 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
			 */
			this.fnGetData = function( src, col )
			{
				var api = this.api( true );

				if ( src !== undefined ) {
					var type = src.nodeName ? src.nodeName.toLowerCase() : '';

					return col !== undefined || type == 'td' || type == 'th' ?
						api.cell( src, col ).data() :
					api.row( src ).data() || null;
				}

				return api.data().toArray();
			};


			/**
			 * Get an array of the TR nodes that are used in the table's body. Note that you will
			 * typically want to use the '$' API method in preference to this as it is more
			 * flexible.
			 *  @param {int} [iRow] Optional row index for the TR element you want
			 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
			 *    in the table's body, or iRow is defined, just the TR element requested.
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
			 */
			this.fnGetNodes = function( iRow )
			{
				var api = this.api( true );

				return iRow !== undefined ?
					api.row( iRow ).node() :
					api.rows().nodes().flatten().toArray();
			};


			/**
			 * Get the array indexes of a particular cell from it's DOM element
			 * and column index including hidden columns
			 *  @param {node} node this can either be a TR, TD or TH in the table's body
			 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
			 *    if given as a cell, an array of [row index, column index (visible),
			 *    column index (all)] is given.
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
			 */
			this.fnGetPosition = function( node )
			{
				var api = this.api( true );
				var nodeName = node.nodeName.toUpperCase();

				if ( nodeName == 'TR' ) {
					return api.row( node ).index();
				}
				else if ( nodeName == 'TD' || nodeName == 'TH' ) {
					var cell = api.cell( node ).index();

					return [
						cell.row,
						cell.columnVisible,
						cell.column
					];
				}
				return null;
			};


			/**
			 * Check to see if a row is 'open' or not.
			 *  @param {node} nTr the table row to check
			 *  @returns {boolean} true if the row is currently open, false otherwise
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
			 */
			this.fnIsOpen = function( nTr )
			{
				return this.api( true ).row( nTr ).child.isShown();
			};


			/**
			 * This function will place a new row directly after a row which is currently
			 * on display on the page, with the HTML contents that is passed into the
			 * function. This can be used, for example, to ask for confirmation that a
			 * particular record should be deleted.
			 *  @param {node} nTr The table row to 'open'
			 *  @param {string|node|jQuery} mHtml The HTML to put into the row
			 *  @param {string} sClass Class to give the new TD cell
			 *  @returns {node} The row opened. Note that if the table row passed in as the
			 *    first parameter, is not found in the table, this method will silently
			 *    return.
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
			 */
			this.fnOpen = function( nTr, mHtml, sClass )
			{
				return this.api( true )
					.row( nTr )
					.child( mHtml, sClass )
					.show()
					.child()[0];
			};


			/**
			 * Change the pagination - provides the internal logic for pagination in a simple API
			 * function. With this function you can have a DataTables table go to the next,
			 * previous, first or last pages.
			 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
			 *    or page number to jump to (integer), note that page 0 is the first page.
			 *  @param {bool} [bRedraw=true] Redraw the table or not
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
			 */
			this.fnPageChange = function ( mAction, bRedraw )
			{
				var api = this.api( true ).page( mAction );

				if ( bRedraw === undefined || bRedraw ) {
					api.draw(false);
				}
			};


			/**
			 * Show a particular column
			 *  @param {int} iCol The column whose display should be changed
			 *  @param {bool} bShow Show (true) or hide (false) the column
			 *  @param {bool} [bRedraw=true] Redraw the table or not
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
			 */
			this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
			{
				var api = this.api( true ).column( iCol ).visible( bShow );

				if ( bRedraw === undefined || bRedraw ) {
					api.columns.adjust().draw();
				}
			};


			/**
			 * Get the settings for a particular table for external manipulation
			 *  @returns {object} DataTables settings object. See
			 *    {@link DataTable.models.oSettings}
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
			 */
			this.fnSettings = function()
			{
				return _fnSettingsFromNode( this[_ext.iApiIndex] );
			};


			/**
			 * Sort the table by a particular column
			 *  @param {int} iCol the data index to sort on. Note that this will not match the
			 *    'display index' if you have hidden data entries
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
			 */
			this.fnSort = function( aaSort )
			{
				this.api( true ).order( aaSort ).draw();
			};


			/**
			 * Attach a sort listener to an element for a given column
			 *  @param {node} nNode the element to attach the sort listener to
			 *  @param {int} iColumn the column that a click on this node will sort on
			 *  @param {function} [fnCallback] callback function when sort is run
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
			 */
			this.fnSortListener = function( nNode, iColumn, fnCallback )
			{
				this.api( true ).order.listener( nNode, iColumn, fnCallback );
			};


			/**
			 * Update a table cell or row - this method will accept either a single value to
			 * update the cell with, an array of values with one element for each column or
			 * an object in the same format as the original data source. The function is
			 * self-referencing in order to make the multi column updates easier.
			 *  @param {object|array|string} mData Data to update the cell/row with
			 *  @param {node|int} mRow TR element you want to update or the aoData index
			 *  @param {int} [iColumn] The column to update, give as null or undefined to
			 *    update a whole row.
			 *  @param {bool} [bRedraw=true] Redraw the table or not
			 *  @param {bool} [bAction=true] Perform pre-draw actions or not
			 *  @returns {int} 0 on success, 1 on error
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
			 */
			this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
			{
				var api = this.api( true );

				if ( iColumn === undefined || iColumn === null ) {
					api.row( mRow ).data( mData );
				}
				else {
					api.cell( mRow, iColumn ).data( mData );
				}

				if ( bAction === undefined || bAction ) {
					api.columns.adjust();
				}

				if ( bRedraw === undefined || bRedraw ) {
					api.draw();
				}
				return 0;
			};


			/**
			 * Provide a common method for plug-ins to check the version of DataTables being used, in order
			 * to ensure compatibility.
			 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
			 *    formats "X" and "X.Y" are also acceptable.
			 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
			 *    version, or false if this version of DataTales is not suitable
			 *  @method
			 *  @dtopt API
			 *  @deprecated Since v1.10
			 *
			 *  @example
			 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
			 */
			this.fnVersionCheck = _ext.fnVersionCheck;


			var _that = this;
			var emptyInit = options === undefined;
			var len = this.length;

			if ( emptyInit ) {
				options = {};
			}

			this.oApi = this.internal = _ext.internal;

			// Extend with old style plug-in API methods
			for ( var fn in DataTable.ext.internal ) {
				if ( fn ) {
					this[fn] = _fnExternApiFunc(fn);
				}
			}

			this.each(function() {
				// For each initialisation we want to give it a clean initialisation
				// object that can be bashed around
				var o = {};
				var oInit = len > 1 ? // optimisation for single table case
					_fnExtend( o, options, true ) :
					options;

				/*global oInit,_that,emptyInit*/
				var i=0, iLen, j, jLen, k, kLen;
				var sId = this.getAttribute( 'id' );
				var bInitHandedOff = false;
				var defaults = DataTable.defaults;
				var $this = $(this);


				/* Sanity check */
				if ( this.nodeName.toLowerCase() != 'table' )
				{
					_fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
					return;
				}

				/* Backwards compatibility for the defaults */
				_fnCompatOpts( defaults );
				_fnCompatCols( defaults.column );

				/* Convert the camel-case defaults to Hungarian */
				_fnCamelToHungarian( defaults, defaults, true );
				_fnCamelToHungarian( defaults.column, defaults.column, true );

				/* Setting up the initialisation object */
				_fnCamelToHungarian( defaults, $.extend( oInit, $this.data() ) );



				/* Check to see if we are re-initialising a table */
				var allSettings = DataTable.settings;
				for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
				{
					var s = allSettings[i];

					/* Base check on table node */
					if ( s.nTable == this || s.nTHead.parentNode == this || (s.nTFoot && s.nTFoot.parentNode == this) )
					{
						var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
						var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;

						if ( emptyInit || bRetrieve )
						{
							return s.oInstance;
						}
						else if ( bDestroy )
						{
							s.oInstance.fnDestroy();
							break;
						}
						else
						{
							_fnLog( s, 0, 'Cannot reinitialise DataTable', 3 );
							return;
						}
					}

					/* If the element we are initialising has the same ID as a table which was previously
					 * initialised, but the table nodes don't match (from before) then we destroy the old
					 * instance by simply deleting it. This is under the assumption that the table has been
					 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
					 */
					if ( s.sTableId == this.id )
					{
						allSettings.splice( i, 1 );
						break;
					}
				}

				/* Ensure the table has an ID - required for accessibility */
				if ( sId === null || sId === "" )
				{
					sId = "DataTables_Table_"+(DataTable.ext._unique++);
					this.id = sId;
				}

				/* Create the settings object for this table and set some of the default parameters */
				var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
					"sDestroyWidth": $this[0].style.width,
					"sInstance":     sId,
					"sTableId":      sId
				} );
				oSettings.nTable = this;
				oSettings.oApi   = _that.internal;
				oSettings.oInit  = oInit;

				allSettings.push( oSettings );

				// Need to add the instance after the instance after the settings object has been added
				// to the settings array, so we can self reference the table instance if more than one
				oSettings.oInstance = (_that.length===1) ? _that : $this.dataTable();

				// Backwards compatibility, before we apply all the defaults
				_fnCompatOpts( oInit );

				if ( oInit.oLanguage )
				{
					_fnLanguageCompat( oInit.oLanguage );
				}

				// If the length menu is given, but the init display length is not, use the length menu
				if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
				{
					oInit.iDisplayLength = $.isArray( oInit.aLengthMenu[0] ) ?
						oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
				}

				// Apply the defaults and init options to make a single init object will all
				// options defined from defaults and instance options.
				oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );


				// Map the initialisation options onto the settings object
				_fnMap( oSettings.oFeatures, oInit, [
					"bPaginate",
					"bLengthChange",
					"bFilter",
					"bSort",
					"bSortMulti",
					"bInfo",
					"bProcessing",
					"bAutoWidth",
					"bSortClasses",
					"bServerSide",
					"bDeferRender"
				] );
				_fnMap( oSettings, oInit, [
					"asStripeClasses",
					"ajax",
					"fnServerData",
					"fnFormatNumber",
					"sServerMethod",
					"aaSorting",
					"aaSortingFixed",
					"aLengthMenu",
					"sPaginationType",
					"sAjaxSource",
					"sAjaxDataProp",
					"iStateDuration",
					"sDom",
					"bSortCellsTop",
					"iTabIndex",
					"fnStateLoadCallback",
					"fnStateSaveCallback",
					"renderer",
					"searchDelay",
					"rowId",
					[ "iCookieDuration", "iStateDuration" ], // backwards compat
					[ "oSearch", "oPreviousSearch" ],
					[ "aoSearchCols", "aoPreSearchCols" ],
					[ "iDisplayLength", "_iDisplayLength" ],
					[ "bJQueryUI", "bJUI" ]
				] );
				_fnMap( oSettings.oScroll, oInit, [
					[ "sScrollX", "sX" ],
					[ "sScrollXInner", "sXInner" ],
					[ "sScrollY", "sY" ],
					[ "bScrollCollapse", "bCollapse" ]
				] );
				_fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );

				/* Callback functions which are array driven */
				_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
				_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
				_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
				_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
				_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
				_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
				_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
				_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
				_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
				_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
				_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );

				oSettings.rowIdFn = _fnGetObjectDataFn( oInit.rowId );

				/* Browser support detection */
				_fnBrowserDetect( oSettings );

				var oClasses = oSettings.oClasses;

				// @todo Remove in 1.11
				if ( oInit.bJQueryUI )
				{
					/* Use the JUI classes object for display. You could clone the oStdClasses object if
					 * you want to have multiple tables with multiple independent classes
					 */
					$.extend( oClasses, DataTable.ext.oJUIClasses, oInit.oClasses );

					if ( oInit.sDom === defaults.sDom && defaults.sDom === "lfrtip" )
					{
						/* Set the DOM to use a layout suitable for jQuery UI's theming */
						oSettings.sDom = '<"H"lfr>t<"F"ip>';
					}

					if ( ! oSettings.renderer ) {
						oSettings.renderer = 'jqueryui';
					}
					else if ( $.isPlainObject( oSettings.renderer ) && ! oSettings.renderer.header ) {
						oSettings.renderer.header = 'jqueryui';
					}
				}
				else
				{
					$.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
				}
				$this.addClass( oClasses.sTable );


				if ( oSettings.iInitDisplayStart === undefined )
				{
					/* Display start point, taking into account the save saving */
					oSettings.iInitDisplayStart = oInit.iDisplayStart;
					oSettings._iDisplayStart = oInit.iDisplayStart;
				}

				if ( oInit.iDeferLoading !== null )
				{
					oSettings.bDeferLoading = true;
					var tmp = $.isArray( oInit.iDeferLoading );
					oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
					oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
				}

				/* Language definitions */
				var oLanguage = oSettings.oLanguage;
				$.extend( true, oLanguage, oInit.oLanguage );

				if ( oLanguage.sUrl !== "" )
				{
					/* Get the language definitions from a file - because this Ajax call makes the language
					 * get async to the remainder of this function we use bInitHandedOff to indicate that
					 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
					 */
					$.ajax( {
						dataType: 'json',
						url: oLanguage.sUrl,
						success: function ( json ) {
							_fnLanguageCompat( json );
							_fnCamelToHungarian( defaults.oLanguage, json );
							$.extend( true, oLanguage, json );
							_fnInitialise( oSettings );
						},
						error: function () {
							// Error occurred loading language file, continue on as best we can
							_fnInitialise( oSettings );
						}
					} );
					bInitHandedOff = true;
				}

				/*
				 * Stripes
				 */
				if ( oInit.asStripeClasses === null )
				{
					oSettings.asStripeClasses =[
						oClasses.sStripeOdd,
						oClasses.sStripeEven
					];
				}

				/* Remove row stripe classes if they are already on the table row */
				var stripeClasses = oSettings.asStripeClasses;
				var rowOne = $this.children('tbody').find('tr').eq(0);
				if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
						return rowOne.hasClass(el);
					} ) ) !== -1 ) {
					$('tbody tr', this).removeClass( stripeClasses.join(' ') );
					oSettings.asDestroyStripes = stripeClasses.slice();
				}

				/*
				 * Columns
				 * See if we should load columns automatically or use defined ones
				 */
				var anThs = [];
				var aoColumnsInit;
				var nThead = this.getElementsByTagName('thead');
				if ( nThead.length !== 0 )
				{
					_fnDetectHeader( oSettings.aoHeader, nThead[0] );
					anThs = _fnGetUniqueThs( oSettings );
				}

				/* If not given a column array, generate one with nulls */
				if ( oInit.aoColumns === null )
				{
					aoColumnsInit = [];
					for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
					{
						aoColumnsInit.push( null );
					}
				}
				else
				{
					aoColumnsInit = oInit.aoColumns;
				}

				/* Add the columns */
				for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
				{
					_fnAddColumn( oSettings, anThs ? anThs[i] : null );
				}

				/* Apply the column definitions */
				_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
					_fnColumnOptions( oSettings, iCol, oDef );
				} );

				/* HTML5 attribute detection - build an mData object automatically if the
				 * attributes are found
				 */
				if ( rowOne.length ) {
					var a = function ( cell, name ) {
						return cell.getAttribute( 'data-'+name ) !== null ? name : null;
					};

					$( rowOne[0] ).children('th, td').each( function (i, cell) {
						var col = oSettings.aoColumns[i];

						if ( col.mData === i ) {
							var sort = a( cell, 'sort' ) || a( cell, 'order' );
							var filter = a( cell, 'filter' ) || a( cell, 'search' );

							if ( sort !== null || filter !== null ) {
								col.mData = {
									_:      i+'.display',
									sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
									type:   sort !== null   ? i+'.@data-'+sort   : undefined,
									filter: filter !== null ? i+'.@data-'+filter : undefined
								};

								_fnColumnOptions( oSettings, i );
							}
						}
					} );
				}

				var features = oSettings.oFeatures;

				/* Must be done after everything which can be overridden by the state saving! */
				if ( oInit.bStateSave )
				{
					features.bStateSave = true;
					_fnLoadState( oSettings, oInit );
					_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
				}


				/*
				 * Sorting
				 * @todo For modularisation (1.11) this needs to do into a sort start up handler
				 */

				// If aaSorting is not defined, then we use the first indicator in asSorting
				// in case that has been altered, so the default sort reflects that option
				if ( oInit.aaSorting === undefined )
				{
					var sorting = oSettings.aaSorting;
					for ( i=0, iLen=sorting.length ; i<iLen ; i++ )
					{
						sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
					}
				}

				/* Do a first pass on the sorting classes (allows any size changes to be taken into
				 * account, and also will apply sorting disabled classes if disabled
				 */
				_fnSortingClasses( oSettings );

				if ( features.bSort )
				{
					_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
						if ( oSettings.bSorted ) {
							var aSort = _fnSortFlatten( oSettings );
							var sortedColumns = {};

							$.each( aSort, function (i, val) {
								sortedColumns[ val.src ] = val.dir;
							} );

							_fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
							_fnSortAria( oSettings );
						}
					} );
				}

				_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
					if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
						_fnSortingClasses( oSettings );
					}
				}, 'sc' );


				/*
				 * Final init
				 * Cache the header, body and footer as required, creating them if needed
				 */

				// Work around for Webkit bug 83867 - store the caption-side before removing from doc
				var captions = $this.children('caption').each( function () {
					this._captionSide = $this.css('caption-side');
				} );

				var thead = $this.children('thead');
				if ( thead.length === 0 )
				{
					thead = $('<thead/>').appendTo(this);
				}
				oSettings.nTHead = thead[0];

				var tbody = $this.children('tbody');
				if ( tbody.length === 0 )
				{
					tbody = $('<tbody/>').appendTo(this);
				}
				oSettings.nTBody = tbody[0];

				var tfoot = $this.children('tfoot');
				if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") )
				{
					// If we are a scrolling table, and no footer has been given, then we need to create
					// a tfoot element for the caption element to be appended to
					tfoot = $('<tfoot/>').appendTo(this);
				}

				if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
					$this.addClass( oClasses.sNoFooter );
				}
				else if ( tfoot.length > 0 ) {
					oSettings.nTFoot = tfoot[0];
					_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
				}

				/* Check if there is data passing into the constructor */
				if ( oInit.aaData )
				{
					for ( i=0 ; i<oInit.aaData.length ; i++ )
					{
						_fnAddData( oSettings, oInit.aaData[ i ] );
					}
				}
				else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' )
				{
					/* Grab the data from the page - only do this when deferred loading or no Ajax
					 * source since there is no point in reading the DOM data if we are then going
					 * to replace it with Ajax data
					 */
					_fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
				}

				/* Copy the data index array */
				oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();

				/* Initialisation complete - table can be drawn */
				oSettings.bInitialised = true;

				/* Check if we need to initialise the table (it might not have been handed off to the
				 * language processor)
				 */
				if ( bInitHandedOff === false )
				{
					_fnInitialise( oSettings );
				}
			} );
			_that = null;
			return this;
		};



		/**
		 * Computed structure of the DataTables API, defined by the options passed to
		 * `DataTable.Api.register()` when building the API.
		 *
		 * The structure is built in order to speed creation and extension of the Api
		 * objects since the extensions are effectively pre-parsed.
		 *
		 * The array is an array of objects with the following structure, where this
		 * base array represents the Api prototype base:
		 *
		 *     [
		 *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
		 *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
		 *     ]
		 *
		 * @type {Array}
		 * @ignore
		 */
		var __apiStruct = [];


		/**
		 * `Array.prototype` reference.
		 *
		 * @type object
		 * @ignore
		 */
		var __arrayProto = Array.prototype;


		/**
		 * Abstraction for `context` parameter of the `Api` constructor to allow it to
		 * take several different forms for ease of use.
		 *
		 * Each of the input parameter types will be converted to a DataTables settings
		 * object where possible.
		 *
		 * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
		 *   of:
		 *
		 *   * `string` - jQuery selector. Any DataTables' matching the given selector
		 *     with be found and used.
		 *   * `node` - `TABLE` node which has already been formed into a DataTable.
		 *   * `jQuery` - A jQuery object of `TABLE` nodes.
		 *   * `object` - DataTables settings object
		 *   * `DataTables.Api` - API instance
		 * @return {array|null} Matching DataTables settings objects. `null` or
		 *   `undefined` is returned if no matching DataTable is found.
		 * @ignore
		 */
		var _toSettings = function ( mixed )
		{
			var idx, jq;
			var settings = DataTable.settings;
			var tables = $.map( settings, function (el, i) {
				return el.nTable;
			} );

			if ( ! mixed ) {
				return [];
			}
			else if ( mixed.nTable && mixed.oApi ) {
				// DataTables settings object
				return [ mixed ];
			}
			else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
				// Table node
				idx = $.inArray( mixed, tables );
				return idx !== -1 ? [ settings[idx] ] : null;
			}
			else if ( mixed && typeof mixed.settings === 'function' ) {
				return mixed.settings().toArray();
			}
			else if ( typeof mixed === 'string' ) {
				// jQuery selector
				jq = $(mixed);
			}
			else if ( mixed instanceof $ ) {
				// jQuery object (also DataTables instance)
				jq = mixed;
			}

			if ( jq ) {
				return jq.map( function(i) {
					idx = $.inArray( this, tables );
					return idx !== -1 ? settings[idx] : null;
				} ).toArray();
			}
		};


		/**
		 * DataTables API class - used to control and interface with  one or more
		 * DataTables enhanced tables.
		 *
		 * The API class is heavily based on jQuery, presenting a chainable interface
		 * that you can use to interact with tables. Each instance of the API class has
		 * a "context" - i.e. the tables that it will operate on. This could be a single
		 * table, all tables on a page or a sub-set thereof.
		 *
		 * Additionally the API is designed to allow you to easily work with the data in
		 * the tables, retrieving and manipulating it as required. This is done by
		 * presenting the API class as an array like interface. The contents of the
		 * array depend upon the actions requested by each method (for example
		 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
		 * return an array of objects or arrays depending upon your table's
		 * configuration). The API object has a number of array like methods (`push`,
		 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
		 * `unique` etc) to assist your working with the data held in a table.
		 *
		 * Most methods (those which return an Api instance) are chainable, which means
		 * the return from a method call also has all of the methods available that the
		 * top level object had. For example, these two calls are equivalent:
		 *
		 *     // Not chained
		 *     api.row.add( {...} );
		 *     api.draw();
		 *
		 *     // Chained
		 *     api.row.add( {...} ).draw();
		 *
		 * @class DataTable.Api
		 * @param {array|object|string|jQuery} context DataTable identifier. This is
		 *   used to define which DataTables enhanced tables this API will operate on.
		 *   Can be one of:
		 *
		 *   * `string` - jQuery selector. Any DataTables' matching the given selector
		 *     with be found and used.
		 *   * `node` - `TABLE` node which has already been formed into a DataTable.
		 *   * `jQuery` - A jQuery object of `TABLE` nodes.
		 *   * `object` - DataTables settings object
		 * @param {array} [data] Data to initialise the Api instance with.
		 *
		 * @example
		 *   // Direct initialisation during DataTables construction
		 *   var api = $('#example').DataTable();
		 *
		 * @example
		 *   // Initialisation using a DataTables jQuery object
		 *   var api = $('#example').dataTable().api();
		 *
		 * @example
		 *   // Initialisation as a constructor
		 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
		 */
		_Api = function ( context, data )
		{
			if ( ! (this instanceof _Api) ) {
				return new _Api( context, data );
			}

			var settings = [];
			var ctxSettings = function ( o ) {
				var a = _toSettings( o );
				if ( a ) {
					settings = settings.concat( a );
				}
			};

			if ( $.isArray( context ) ) {
				for ( var i=0, ien=context.length ; i<ien ; i++ ) {
					ctxSettings( context[i] );
				}
			}
			else {
				ctxSettings( context );
			}

			// Remove duplicates
			this.context = _unique( settings );

			// Initial data
			if ( data ) {
				$.merge( this, data );
			}

			// selector
			this.selector = {
				rows: null,
				cols: null,
				opts: null
			};

			_Api.extend( this, this, __apiStruct );
		};

		DataTable.Api = _Api;

		// Don't destroy the existing prototype, just extend it. Required for jQuery 2's
		// isPlainObject.
		$.extend( _Api.prototype, {
			any: function ()
			{
				return this.count() !== 0;
			},


			concat:  __arrayProto.concat,


			context: [], // array of table settings objects


			count: function ()
			{
				return this.flatten().length;
			},


			each: function ( fn )
			{
				for ( var i=0, ien=this.length ; i<ien; i++ ) {
					fn.call( this, this[i], i, this );
				}

				return this;
			},


			eq: function ( idx )
			{
				var ctx = this.context;

				return ctx.length > idx ?
					new _Api( ctx[idx], this[idx] ) :
					null;
			},


			filter: function ( fn )
			{
				var a = [];

				if ( __arrayProto.filter ) {
					a = __arrayProto.filter.call( this, fn, this );
				}
				else {
					// Compatibility for browsers without EMCA-252-5 (JS 1.6)
					for ( var i=0, ien=this.length ; i<ien ; i++ ) {
						if ( fn.call( this, this[i], i, this ) ) {
							a.push( this[i] );
						}
					}
				}

				return new _Api( this.context, a );
			},


			flatten: function ()
			{
				var a = [];
				return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
			},


			join:    __arrayProto.join,


			indexOf: __arrayProto.indexOf || function (obj, start)
			{
				for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
					if ( this[i] === obj ) {
						return i;
					}
				}
				return -1;
			},

			iterator: function ( flatten, type, fn, alwaysNew ) {
				var
					a = [], ret,
					i, ien, j, jen,
					context = this.context,
					rows, items, item,
					selector = this.selector;

				// Argument shifting
				if ( typeof flatten === 'string' ) {
					alwaysNew = fn;
					fn = type;
					type = flatten;
					flatten = false;
				}

				for ( i=0, ien=context.length ; i<ien ; i++ ) {
					var apiInst = new _Api( context[i] );

					if ( type === 'table' ) {
						ret = fn.call( apiInst, context[i], i );

						if ( ret !== undefined ) {
							a.push( ret );
						}
					}
					else if ( type === 'columns' || type === 'rows' ) {
						// this has same length as context - one entry for each table
						ret = fn.call( apiInst, context[i], this[i], i );

						if ( ret !== undefined ) {
							a.push( ret );
						}
					}
					else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
						// columns and rows share the same structure.
						// 'this' is an array of column indexes for each context
						items = this[i];

						if ( type === 'column-rows' ) {
							rows = _selector_row_indexes( context[i], selector.opts );
						}

						for ( j=0, jen=items.length ; j<jen ; j++ ) {
							item = items[j];

							if ( type === 'cell' ) {
								ret = fn.call( apiInst, context[i], item.row, item.column, i, j );
							}
							else {
								ret = fn.call( apiInst, context[i], item, i, j, rows );
							}

							if ( ret !== undefined ) {
								a.push( ret );
							}
						}
					}
				}

				if ( a.length || alwaysNew ) {
					var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
					var apiSelector = api.selector;
					apiSelector.rows = selector.rows;
					apiSelector.cols = selector.cols;
					apiSelector.opts = selector.opts;
					return api;
				}
				return this;
			},


			lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
			{
				// Bit cheeky...
				return this.indexOf.apply( this.toArray.reverse(), arguments );
			},


			length:  0,


			map: function ( fn )
			{
				var a = [];

				if ( __arrayProto.map ) {
					a = __arrayProto.map.call( this, fn, this );
				}
				else {
					// Compatibility for browsers without EMCA-252-5 (JS 1.6)
					for ( var i=0, ien=this.length ; i<ien ; i++ ) {
						a.push( fn.call( this, this[i], i ) );
					}
				}

				return new _Api( this.context, a );
			},


			pluck: function ( prop )
			{
				return this.map( function ( el ) {
					return el[ prop ];
				} );
			},

			pop:     __arrayProto.pop,


			push:    __arrayProto.push,


			// Does not return an API instance
			reduce: __arrayProto.reduce || function ( fn, init )
			{
				return _fnReduce( this, fn, init, 0, this.length, 1 );
			},


			reduceRight: __arrayProto.reduceRight || function ( fn, init )
			{
				return _fnReduce( this, fn, init, this.length-1, -1, -1 );
			},


			reverse: __arrayProto.reverse,


			// Object with rows, columns and opts
			selector: null,


			shift:   __arrayProto.shift,


			sort:    __arrayProto.sort, // ? name - order?


			splice:  __arrayProto.splice,


			toArray: function ()
			{
				return __arrayProto.slice.call( this );
			},


			to$: function ()
			{
				return $( this );
			},


			toJQuery: function ()
			{
				return $( this );
			},


			unique: function ()
			{
				return new _Api( this.context, _unique(this) );
			},


			unshift: __arrayProto.unshift
		} );


		_Api.extend = function ( scope, obj, ext )
		{
			// Only extend API instances and static properties of the API
			if ( ! ext.length || ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
				return;
			}

			var
				i, ien,
				j, jen,
				struct, inner,
				methodScoping = function ( scope, fn, struc ) {
					return function () {
						var ret = fn.apply( scope, arguments );

						// Method extension
						_Api.extend( ret, ret, struc.methodExt );
						return ret;
					};
				};

			for ( i=0, ien=ext.length ; i<ien ; i++ ) {
				struct = ext[i];

				// Value
				obj[ struct.name ] = typeof struct.val === 'function' ?
					methodScoping( scope, struct.val, struct ) :
					$.isPlainObject( struct.val ) ?
					{} :
						struct.val;

				obj[ struct.name ].__dt_wrapper = true;

				// Property extension
				_Api.extend( scope, obj[ struct.name ], struct.propExt );
			}
		};


		// @todo - Is there need for an augment function?
		// _Api.augment = function ( inst, name )
		// {
		// 	// Find src object in the structure from the name
		// 	var parts = name.split('.');

		// 	_Api.extend( inst, obj );
		// };


		//     [
		//       {
		//         name:      'data'                -- string   - Property name
		//         val:       function () {},       -- function - Api method (or undefined if just an object
		//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
		//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
		//       },
		//       {
		//         name:     'row'
		//         val:       {},
		//         methodExt: [ ... ],
		//         propExt:   [
		//           {
		//             name:      'data'
		//             val:       function () {},
		//             methodExt: [ ... ],
		//             propExt:   [ ... ]
		//           },
		//           ...
		//         ]
		//       }
		//     ]

		_Api.register = _api_register = function ( name, val )
		{
			if ( $.isArray( name ) ) {
				for ( var j=0, jen=name.length ; j<jen ; j++ ) {
					_Api.register( name[j], val );
				}
				return;
			}

			var
				i, ien,
				heir = name.split('.'),
				struct = __apiStruct,
				key, method;

			var find = function ( src, name ) {
				for ( var i=0, ien=src.length ; i<ien ; i++ ) {
					if ( src[i].name === name ) {
						return src[i];
					}
				}
				return null;
			};

			for ( i=0, ien=heir.length ; i<ien ; i++ ) {
				method = heir[i].indexOf('()') !== -1;
				key = method ?
					heir[i].replace('()', '') :
					heir[i];

				var src = find( struct, key );
				if ( ! src ) {
					src = {
						name:      key,
						val:       {},
						methodExt: [],
						propExt:   []
					};
					struct.push( src );
				}

				if ( i === ien-1 ) {
					src.val = val;
				}
				else {
					struct = method ?
						src.methodExt :
						src.propExt;
				}
			}
		};


		_Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
			_Api.register( pluralName, val );

			_Api.register( singularName, function () {
				var ret = val.apply( this, arguments );

				if ( ret === this ) {
					// Returned item is the API instance that was passed in, return it
					return this;
				}
				else if ( ret instanceof _Api ) {
					// New API instance returned, want the value from the first item
					// in the returned array for the singular result.
					return ret.length ?
						$.isArray( ret[0] ) ?
							new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
							ret[0] :
						undefined;
				}

				// Non-API return - just fire it back
				return ret;
			} );
		};


		/**
		 * Selector for HTML tables. Apply the given selector to the give array of
		 * DataTables settings objects.
		 *
		 * @param {string|integer} [selector] jQuery selector string or integer
		 * @param  {array} Array of DataTables settings objects to be filtered
		 * @return {array}
		 * @ignore
		 */
		var __table_selector = function ( selector, a )
		{
			// Integer is used to pick out a table by index
			if ( typeof selector === 'number' ) {
				return [ a[ selector ] ];
			}

			// Perform a jQuery selector on the table nodes
			var nodes = $.map( a, function (el, i) {
				return el.nTable;
			} );

			return $(nodes)
				.filter( selector )
				.map( function (i) {
					// Need to translate back from the table node to the settings
					var idx = $.inArray( this, nodes );
					return a[ idx ];
				} )
				.toArray();
		};



		/**
		 * Context selector for the API's context (i.e. the tables the API instance
		 * refers to.
		 *
		 * @name    DataTable.Api#tables
		 * @param {string|integer} [selector] Selector to pick which tables the iterator
		 *   should operate on. If not given, all tables in the current context are
		 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
		 *   select multiple tables or as an integer to select a single table.
		 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
		 */
		_api_register( 'tables()', function ( selector ) {
			// A new instance is created if there was a selector specified
			return selector ?
				new _Api( __table_selector( selector, this.context ) ) :
				this;
		} );


		_api_register( 'table()', function ( selector ) {
			var tables = this.tables( selector );
			var ctx = tables.context;

			// Truncate to the first matched table
			return ctx.length ?
				new _Api( ctx[0] ) :
				tables;
		} );


		_api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
			return this.iterator( 'table', function ( ctx ) {
				return ctx.nTable;
			}, 1 );
		} );


		_api_registerPlural( 'tables().body()', 'table().body()' , function () {
			return this.iterator( 'table', function ( ctx ) {
				return ctx.nTBody;
			}, 1 );
		} );


		_api_registerPlural( 'tables().header()', 'table().header()' , function () {
			return this.iterator( 'table', function ( ctx ) {
				return ctx.nTHead;
			}, 1 );
		} );


		_api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
			return this.iterator( 'table', function ( ctx ) {
				return ctx.nTFoot;
			}, 1 );
		} );


		_api_registerPlural( 'tables().containers()', 'table().container()' , function () {
			return this.iterator( 'table', function ( ctx ) {
				return ctx.nTableWrapper;
			}, 1 );
		} );



		/**
		 * Redraw the tables in the current context.
		 */
		_api_register( 'draw()', function ( paging ) {
			return this.iterator( 'table', function ( settings ) {
				if ( paging === 'page' ) {
					_fnDraw( settings );
				}
				else {
					if ( typeof paging === 'string' ) {
						paging = paging === 'full-hold' ?
							false :
							true;
					}

					_fnReDraw( settings, paging===false );
				}
			} );
		} );



		/**
		 * Get the current page index.
		 *
		 * @return {integer} Current page index (zero based)
		 *//**
		 * Set the current page.
		 *
		 * Note that if you attempt to show a page which does not exist, DataTables will
		 * not throw an error, but rather reset the paging.
		 *
		 * @param {integer|string} action The paging action to take. This can be one of:
		 *  * `integer` - The page index to jump to
		 *  * `string` - An action to take:
		 *    * `first` - Jump to first page.
		 *    * `next` - Jump to the next page
		 *    * `previous` - Jump to previous page
		 *    * `last` - Jump to the last page.
		 * @returns {DataTables.Api} this
		 */
		_api_register( 'page()', function ( action ) {
			if ( action === undefined ) {
				return this.page.info().page; // not an expensive call
			}

			// else, have an action to take on all tables
			return this.iterator( 'table', function ( settings ) {
				_fnPageChange( settings, action );
			} );
		} );


		/**
		 * Paging information for the first table in the current context.
		 *
		 * If you require paging information for another table, use the `table()` method
		 * with a suitable selector.
		 *
		 * @return {object} Object with the following properties set:
		 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
		 *  * `pages` - Total number of pages
		 *  * `start` - Display index for the first record shown on the current page
		 *  * `end` - Display index for the last record shown on the current page
		 *  * `length` - Display length (number of records). Note that generally `start
		 *    + length = end`, but this is not always true, for example if there are
		 *    only 2 records to show on the final page, with a length of 10.
		 *  * `recordsTotal` - Full data set length
		 *  * `recordsDisplay` - Data set length once the current filtering criterion
		 *    are applied.
		 */
		_api_register( 'page.info()', function ( action ) {
			if ( this.context.length === 0 ) {
				return undefined;
			}

			var
				settings   = this.context[0],
				start      = settings._iDisplayStart,
				len        = settings._iDisplayLength,
				visRecords = settings.fnRecordsDisplay(),
				all        = len === -1;

			return {
				"page":           all ? 0 : Math.floor( start / len ),
				"pages":          all ? 1 : Math.ceil( visRecords / len ),
				"start":          start,
				"end":            settings.fnDisplayEnd(),
				"length":         len,
				"recordsTotal":   settings.fnRecordsTotal(),
				"recordsDisplay": visRecords,
				"serverSide":     _fnDataSource( settings ) === 'ssp'
			};
		} );


		/**
		 * Get the current page length.
		 *
		 * @return {integer} Current page length. Note `-1` indicates that all records
		 *   are to be shown.
		 *//**
		 * Set the current page length.
		 *
		 * @param {integer} Page length to set. Use `-1` to show all records.
		 * @returns {DataTables.Api} this
		 */
		_api_register( 'page.len()', function ( len ) {
			// Note that we can't call this function 'length()' because `length`
			// is a Javascript property of functions which defines how many arguments
			// the function expects.
			if ( len === undefined ) {
				return this.context.length !== 0 ?
					this.context[0]._iDisplayLength :
					undefined;
			}

			// else, set the page length
			return this.iterator( 'table', function ( settings ) {
				_fnLengthChange( settings, len );
			} );
		} );



		var __reload = function ( settings, holdPosition, callback ) {
			// Use the draw event to trigger a callback
			if ( callback ) {
				var api = new _Api( settings );

				api.one( 'draw', function () {
					callback( api.ajax.json() );
				} );
			}

			if ( _fnDataSource( settings ) == 'ssp' ) {
				_fnReDraw( settings, holdPosition );
			}
			else {
				_fnProcessingDisplay( settings, true );

				// Cancel an existing request
				var xhr = settings.jqXHR;
				if ( xhr && xhr.readyState !== 4 ) {
					xhr.abort();
				}

				// Trigger xhr
				_fnBuildAjax( settings, [], function( json ) {
					_fnClearTable( settings );

					var data = _fnAjaxDataSrc( settings, json );
					for ( var i=0, ien=data.length ; i<ien ; i++ ) {
						_fnAddData( settings, data[i] );
					}

					_fnReDraw( settings, holdPosition );
					_fnProcessingDisplay( settings, false );
				} );
			}
		};


		/**
		 * Get the JSON response from the last Ajax request that DataTables made to the
		 * server. Note that this returns the JSON from the first table in the current
		 * context.
		 *
		 * @return {object} JSON received from the server.
		 */
		_api_register( 'ajax.json()', function () {
			var ctx = this.context;

			if ( ctx.length > 0 ) {
				return ctx[0].json;
			}

			// else return undefined;
		} );


		/**
		 * Get the data submitted in the last Ajax request
		 */
		_api_register( 'ajax.params()', function () {
			var ctx = this.context;

			if ( ctx.length > 0 ) {
				return ctx[0].oAjaxData;
			}

			// else return undefined;
		} );


		/**
		 * Reload tables from the Ajax data source. Note that this function will
		 * automatically re-draw the table when the remote data has been loaded.
		 *
		 * @param {boolean} [reset=true] Reset (default) or hold the current paging
		 *   position. A full re-sort and re-filter is performed when this method is
		 *   called, which is why the pagination reset is the default action.
		 * @returns {DataTables.Api} this
		 */
		_api_register( 'ajax.reload()', function ( callback, resetPaging ) {
			return this.iterator( 'table', function (settings) {
				__reload( settings, resetPaging===false, callback );
			} );
		} );


		/**
		 * Get the current Ajax URL. Note that this returns the URL from the first
		 * table in the current context.
		 *
		 * @return {string} Current Ajax source URL
		 *//**
		 * Set the Ajax URL. Note that this will set the URL for all tables in the
		 * current context.
		 *
		 * @param {string} url URL to set.
		 * @returns {DataTables.Api} this
		 */
		_api_register( 'ajax.url()', function ( url ) {
			var ctx = this.context;

			if ( url === undefined ) {
				// get
				if ( ctx.length === 0 ) {
					return undefined;
				}
				ctx = ctx[0];

				return ctx.ajax ?
					$.isPlainObject( ctx.ajax ) ?
						ctx.ajax.url :
						ctx.ajax :
					ctx.sAjaxSource;
			}

			// set
			return this.iterator( 'table', function ( settings ) {
				if ( $.isPlainObject( settings.ajax ) ) {
					settings.ajax.url = url;
				}
				else {
					settings.ajax = url;
				}
				// No need to consider sAjaxSource here since DataTables gives priority
				// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
				// value of `sAjaxSource` redundant.
			} );
		} );


		/**
		 * Load data from the newly set Ajax URL. Note that this method is only
		 * available when `ajax.url()` is used to set a URL. Additionally, this method
		 * has the same effect as calling `ajax.reload()` but is provided for
		 * convenience when setting a new URL. Like `ajax.reload()` it will
		 * automatically redraw the table once the remote data has been loaded.
		 *
		 * @returns {DataTables.Api} this
		 */
		_api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
			// Same as a reload, but makes sense to present it for easy access after a
			// url change
			return this.iterator( 'table', function ( ctx ) {
				__reload( ctx, resetPaging===false, callback );
			} );
		} );




		var _selector_run = function ( type, selector, selectFn, settings, opts )
		{
			var
				out = [], res,
				a, i, ien, j, jen,
				selectorType = typeof selector;

			// Can't just check for isArray here, as an API or jQuery instance might be
			// given with their array like look
			if ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {
				selector = [ selector ];
			}

			for ( i=0, ien=selector.length ; i<ien ; i++ ) {
				a = selector[i] && selector[i].split ?
					selector[i].split(',') :
					[ selector[i] ];

				for ( j=0, jen=a.length ; j<jen ; j++ ) {
					res = selectFn( typeof a[j] === 'string' ? $.trim(a[j]) : a[j] );

					if ( res && res.length ) {
						out = out.concat( res );
					}
				}
			}

			// selector extensions
			var ext = _ext.selector[ type ];
			if ( ext.length ) {
				for ( i=0, ien=ext.length ; i<ien ; i++ ) {
					out = ext[i]( settings, opts, out );
				}
			}

			return _unique( out );
		};


		var _selector_opts = function ( opts )
		{
			if ( ! opts ) {
				opts = {};
			}

			// Backwards compatibility for 1.9- which used the terminology filter rather
			// than search
			if ( opts.filter && opts.search === undefined ) {
				opts.search = opts.filter;
			}

			return $.extend( {
				search: 'none',
				order: 'current',
				page: 'all'
			}, opts );
		};


		var _selector_first = function ( inst )
		{
			// Reduce the API instance to the first item found
			for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
				if ( inst[i].length > 0 ) {
					// Assign the first element to the first item in the instance
					// and truncate the instance and context
					inst[0] = inst[i];
					inst[0].length = 1;
					inst.length = 1;
					inst.context = [ inst.context[i] ];

					return inst;
				}
			}

			// Not found - return an empty instance
			inst.length = 0;
			return inst;
		};


		var _selector_row_indexes = function ( settings, opts )
		{
			var
				i, ien, tmp, a=[],
				displayFiltered = settings.aiDisplay,
				displayMaster = settings.aiDisplayMaster;

			var
				search = opts.search,  // none, applied, removed
				order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
				page   = opts.page;    // all, current

			if ( _fnDataSource( settings ) == 'ssp' ) {
				// In server-side processing mode, most options are irrelevant since
				// rows not shown don't exist and the index order is the applied order
				// Removed is a special case - for consistency just return an empty
				// array
				return search === 'removed' ?
					[] :
					_range( 0, displayMaster.length );
			}
			else if ( page == 'current' ) {
				// Current page implies that order=current and fitler=applied, since it is
				// fairly senseless otherwise, regardless of what order and search actually
				// are
				for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
					a.push( displayFiltered[i] );
				}
			}
			else if ( order == 'current' || order == 'applied' ) {
				a = search == 'none' ?
					displayMaster.slice() :                      // no search
					search == 'applied' ?
						displayFiltered.slice() :                // applied search
						$.map( displayMaster, function (el, i) { // removed search
							return $.inArray( el, displayFiltered ) === -1 ? el : null;
						} );
			}
			else if ( order == 'index' || order == 'original' ) {
				for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
					if ( search == 'none' ) {
						a.push( i );
					}
					else { // applied | removed
						tmp = $.inArray( i, displayFiltered );

						if ((tmp === -1 && search == 'removed') ||
							(tmp >= 0   && search == 'applied') )
						{
							a.push( i );
						}
					}
				}
			}

			return a;
		};


		/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
		 * Rows
		 *
		 * {}          - no selector - use all available rows
		 * {integer}   - row aoData index
		 * {node}      - TR node
		 * {string}    - jQuery selector to apply to the TR elements
		 * {array}     - jQuery array of nodes, or simply an array of TR nodes
		 *
		 */


		var __row_selector = function ( settings, selector, opts )
		{
			var run = function ( sel ) {
				var selInt = _intVal( sel );
				var i, ien;

				// Short cut - selector is a number and no options provided (default is
				// all records, so no need to check if the index is in there, since it
				// must be - dev error if the index doesn't exist).
				if ( selInt !== null && ! opts ) {
					return [ selInt ];
				}

				var rows = _selector_row_indexes( settings, opts );

				if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
					// Selector - integer
					return [ selInt ];
				}
				else if ( ! sel ) {
					// Selector - none
					return rows;
				}

				// Selector - function
				if ( typeof sel === 'function' ) {
					return $.map( rows, function (idx) {
						var row = settings.aoData[ idx ];
						return sel( idx, row._aData, row.nTr ) ? idx : null;
					} );
				}

				// Get nodes in the order from the `rows` array with null values removed
				var nodes = _removeEmpty(
					_pluck_order( settings.aoData, rows, 'nTr' )
				);

				// Selector - node
				if ( sel.nodeName ) {
					if ( $.inArray( sel, nodes ) !== -1 ) {
						return [ sel._DT_RowIndex ]; // sel is a TR node that is in the table
													 // and DataTables adds a prop for fast lookup
					}
				}

				// ID selector. Want to always be able to select rows by id, regardless
				// of if the tr element has been created or not, so can't rely upon
				// jQuery here - hence a custom implementation. This does not match
				// Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
				// but to select it using a CSS selector engine (like Sizzle or
				// querySelect) it would need to need to be escaped for some characters.
				// DataTables simplifies this for row selectors since you can select
				// only a row. A # indicates an id any anything that follows is the id -
				// unescaped.
				if ( typeof sel === 'string' && sel.charAt(0) === '#' ) {
					// get row index from id
					var rowObj = settings.aIds[ sel.replace( /^#/, '' ) ];
					if ( rowObj !== undefined ) {
						return [ rowObj.idx ];
					}

					// need to fall through to jQuery in case there is DOM id that
					// matches
				}

				// Selector - jQuery selector string, array of nodes or jQuery object/
				// As jQuery's .filter() allows jQuery objects to be passed in filter,
				// it also allows arrays, so this will cope with all three options
				return $(nodes)
					.filter( sel )
					.map( function () {
						return this._DT_RowIndex;
					} )
					.toArray();
			};

			return _selector_run( 'row', selector, run, settings, opts );
		};


		_api_register( 'rows()', function ( selector, opts ) {
			// argument shifting
			if ( selector === undefined ) {
				selector = '';
			}
			else if ( $.isPlainObject( selector ) ) {
				opts = selector;
				selector = '';
			}

			opts = _selector_opts( opts );

			var inst = this.iterator( 'table', function ( settings ) {
				return __row_selector( settings, selector, opts );
			}, 1 );

			// Want argument shifting here and in __row_selector?
			inst.selector.rows = selector;
			inst.selector.opts = opts;

			return inst;
		} );

		_api_register( 'rows().nodes()', function () {
			return this.iterator( 'row', function ( settings, row ) {
				return settings.aoData[ row ].nTr || undefined;
			}, 1 );
		} );

		_api_register( 'rows().data()', function () {
			return this.iterator( true, 'rows', function ( settings, rows ) {
				return _pluck_order( settings.aoData, rows, '_aData' );
			}, 1 );
		} );

		_api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
			return this.iterator( 'row', function ( settings, row ) {
				var r = settings.aoData[ row ];
				return type === 'search' ? r._aFilterData : r._aSortData;
			}, 1 );
		} );

		_api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
			return this.iterator( 'row', function ( settings, row ) {
				_fnInvalidate( settings, row, src );
			} );
		} );

		_api_registerPlural( 'rows().indexes()', 'row().index()', function () {
			return this.iterator( 'row', function ( settings, row ) {
				return row;
			}, 1 );
		} );

		_api_registerPlural( 'rows().ids()', 'row().id()', function ( hash ) {
			var a = [];
			var context = this.context;

			// `iterator` will drop undefined values, but in this case we want them
			for ( var i=0, ien=context.length ; i<ien ; i++ ) {
				for ( var j=0, jen=this[i].length ; j<jen ; j++ ) {
					var id = context[i].rowIdFn( context[i].aoData[ this[i][j] ]._aData );
					a.push( (hash === true ? '#' : '' )+ id );
				}
			}

			return new _Api( context, a );
		} );

		_api_registerPlural( 'rows().remove()', 'row().remove()', function () {
			var that = this;

			this.iterator( 'row', function ( settings, row, thatIdx ) {
				var data = settings.aoData;
				var rowData = data[ row ];

				data.splice( row, 1 );

				// Update the _DT_RowIndex parameter on all rows in the table
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					if ( data[i].nTr !== null ) {
						data[i].nTr._DT_RowIndex = i;
					}
				}

				// Delete from the display arrays
				_fnDeleteIndex( settings.aiDisplayMaster, row );
				_fnDeleteIndex( settings.aiDisplay, row );
				_fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes

				// Check for an 'overflow' they case for displaying the table
				_fnLengthOverflow( settings );

				// Remove the row's ID reference if there is one
				var id = settings.rowIdFn( rowData._aData );
				if ( id !== undefined ) {
					delete settings.aIds[ id ];
				}
			} );

			this.iterator( 'table', function ( settings ) {
				for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
					settings.aoData[i].idx = i;
				}
			} );

			return this;
		} );


		_api_register( 'rows.add()', function ( rows ) {
			var newRows = this.iterator( 'table', function ( settings ) {
				var row, i, ien;
				var out = [];

				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];

					if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
						out.push( _fnAddTr( settings, row )[0] );
					}
					else {
						out.push( _fnAddData( settings, row ) );
					}
				}

				return out;
			}, 1 );

			// Return an Api.rows() extended instance, so rows().nodes() etc can be used
			var modRows = this.rows( -1 );
			modRows.pop();
			$.merge( modRows, newRows );

			return modRows;
		} );





		/**
		 *
		 */
		_api_register( 'row()', function ( selector, opts ) {
			return _selector_first( this.rows( selector, opts ) );
		} );


		_api_register( 'row().data()', function ( data ) {
			var ctx = this.context;

			if ( data === undefined ) {
				// Get
				return ctx.length && this.length ?
					ctx[0].aoData[ this[0] ]._aData :
					undefined;
			}

			// Set
			ctx[0].aoData[ this[0] ]._aData = data;

			// Automatically invalidate
			_fnInvalidate( ctx[0], this[0], 'data' );

			return this;
		} );


		_api_register( 'row().node()', function () {
			var ctx = this.context;

			return ctx.length && this.length ?
			ctx[0].aoData[ this[0] ].nTr || null :
				null;
		} );


		_api_register( 'row.add()', function ( row ) {
			// Allow a jQuery object to be passed in - only a single row is added from
			// it though - the first element in the set
			if ( row instanceof $ && row.length ) {
				row = row[0];
			}

			var rows = this.iterator( 'table', function ( settings ) {
				if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
					return _fnAddTr( settings, row )[0];
				}
				return _fnAddData( settings, row );
			} );

			// Return an Api.rows() extended instance, with the newly added row selected
			return this.row( rows[0] );
		} );



		var __details_add = function ( ctx, row, data, klass )
		{
			// Convert to array of TR elements
			var rows = [];
			var addRow = function ( r, k ) {
				// Recursion to allow for arrays of jQuery objects
				if ( $.isArray( r ) || r instanceof $ ) {
					for ( var i=0, ien=r.length ; i<ien ; i++ ) {
						addRow( r[i], k );
					}
					return;
				}

				// If we get a TR element, then just add it directly - up to the dev
				// to add the correct number of columns etc
				if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
					rows.push( r );
				}
				else {
					// Otherwise create a row with a wrapper
					var created = $('<tr><td/></tr>').addClass( k );
					$('td', created)
						.addClass( k )
						.html( r )
						[0].colSpan = _fnVisbleColumns( ctx );

					rows.push( created[0] );
				}
			};

			addRow( data, klass );

			if ( row._details ) {
				row._details.remove();
			}

			row._details = $(rows);

			// If the children were already shown, that state should be retained
			if ( row._detailsShow ) {
				row._details.insertAfter( row.nTr );
			}
		};


		var __details_remove = function ( api, idx )
		{
			var ctx = api.context;

			if ( ctx.length ) {
				var row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];

				if ( row && row._details ) {
					row._details.remove();

					row._detailsShow = undefined;
					row._details = undefined;
				}
			}
		};


		var __details_display = function ( api, show ) {
			var ctx = api.context;

			if ( ctx.length && api.length ) {
				var row = ctx[0].aoData[ api[0] ];

				if ( row._details ) {
					row._detailsShow = show;

					if ( show ) {
						row._details.insertAfter( row.nTr );
					}
					else {
						row._details.detach();
					}

					__details_events( ctx[0] );
				}
			}
		};


		var __details_events = function ( settings )
		{
			var api = new _Api( settings );
			var namespace = '.dt.DT_details';
			var drawEvent = 'draw'+namespace;
			var colvisEvent = 'column-visibility'+namespace;
			var destroyEvent = 'destroy'+namespace;
			var data = settings.aoData;

			api.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );

			if ( _pluck( data, '_details' ).length > 0 ) {
				// On each draw, insert the required elements into the document
				api.on( drawEvent, function ( e, ctx ) {
					if ( settings !== ctx ) {
						return;
					}

					api.rows( {page:'current'} ).eq(0).each( function (idx) {
						// Internal data grab
						var row = data[ idx ];

						if ( row._detailsShow ) {
							row._details.insertAfter( row.nTr );
						}
					} );
				} );

				// Column visibility change - update the colspan
				api.on( colvisEvent, function ( e, ctx, idx, vis ) {
					if ( settings !== ctx ) {
						return;
					}

					// Update the colspan for the details rows (note, only if it already has
					// a colspan)
					var row, visible = _fnVisbleColumns( ctx );

					for ( var i=0, ien=data.length ; i<ien ; i++ ) {
						row = data[i];

						if ( row._details ) {
							row._details.children('td[colspan]').attr('colspan', visible );
						}
					}
				} );

				// Table destroyed - nuke any child rows
				api.on( destroyEvent, function ( e, ctx ) {
					if ( settings !== ctx ) {
						return;
					}

					for ( var i=0, ien=data.length ; i<ien ; i++ ) {
						if ( data[i]._details ) {
							__details_remove( api, i );
						}
					}
				} );
			}
		};

		// Strings for the method names to help minification
		var _emp = '';
		var _child_obj = _emp+'row().child';
		var _child_mth = _child_obj+'()';

		// data can be:
		//  tr
		//  string
		//  jQuery or array of any of the above
		_api_register( _child_mth, function ( data, klass ) {
			var ctx = this.context;

			if ( data === undefined ) {
				// get
				return ctx.length && this.length ?
					ctx[0].aoData[ this[0] ]._details :
					undefined;
			}
			else if ( data === true ) {
				// show
				this.child.show();
			}
			else if ( data === false ) {
				// remove
				__details_remove( this );
			}
			else if ( ctx.length && this.length ) {
				// set
				__details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
			}

			return this;
		} );


		_api_register( [
			_child_obj+'.show()',
			_child_mth+'.show()' // only when `child()` was called with parameters (without
		], function ( show ) {   // it returns an object and this method is not executed)
			__details_display( this, true );
			return this;
		} );


		_api_register( [
			_child_obj+'.hide()',
			_child_mth+'.hide()' // only when `child()` was called with parameters (without
		], function () {         // it returns an object and this method is not executed)
			__details_display( this, false );
			return this;
		} );


		_api_register( [
			_child_obj+'.remove()',
			_child_mth+'.remove()' // only when `child()` was called with parameters (without
		], function () {           // it returns an object and this method is not executed)
			__details_remove( this );
			return this;
		} );


		_api_register( _child_obj+'.isShown()', function () {
			var ctx = this.context;

			if ( ctx.length && this.length ) {
				// _detailsShown as false or undefined will fall through to return false
				return ctx[0].aoData[ this[0] ]._detailsShow || false;
			}
			return false;
		} );



		/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
		 * Columns
		 *
		 * {integer}           - column index (>=0 count from left, <0 count from right)
		 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
		 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
		 * "{string}:name"     - column name
		 * "{string}"          - jQuery selector on column header nodes
		 *
		 */

		// can be an array of these items, comma separated list, or an array of comma
		// separated lists

		var __re_column_selector = /^(.+):(name|visIdx|visible)$/;


		// r1 and r2 are redundant - but it means that the parameters match for the
		// iterator callback in columns().data()
		var __columnData = function ( settings, column, r1, r2, rows ) {
			var a = [];
			for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
				a.push( _fnGetCellData( settings, rows[row], column ) );
			}
			return a;
		};


		var __column_selector = function ( settings, selector, opts )
		{
			var
				columns = settings.aoColumns,
				names = _pluck( columns, 'sName' ),
				nodes = _pluck( columns, 'nTh' );

			var run = function ( s ) {
				var selInt = _intVal( s );

				// Selector - all
				if ( s === '' ) {
					return _range( columns.length );
				}

				// Selector - index
				if ( selInt !== null ) {
					return [ selInt >= 0 ?
						selInt : // Count from left
					columns.length + selInt // Count from right (+ because its a negative value)
					];
				}

				// Selector = function
				if ( typeof s === 'function' ) {
					var rows = _selector_row_indexes( settings, opts );

					return $.map( columns, function (col, idx) {
						return s(
							idx,
							__columnData( settings, idx, 0, 0, rows ),
							nodes[ idx ]
						) ? idx : null;
					} );
				}

				// jQuery or string selector
				var match = typeof s === 'string' ?
					s.match( __re_column_selector ) :
					'';

				if ( match ) {
					switch( match[2] ) {
						case 'visIdx':
						case 'visible':
							var idx = parseInt( match[1], 10 );
							// Visible index given, convert to column index
							if ( idx < 0 ) {
								// Counting from the right
								var visColumns = $.map( columns, function (col,i) {
									return col.bVisible ? i : null;
								} );
								return [ visColumns[ visColumns.length + idx ] ];
							}
							// Counting from the left
							return [ _fnVisibleToColumnIndex( settings, idx ) ];

						case 'name':
							// match by name. `names` is column index complete and in order
							return $.map( names, function (name, i) {
								return name === match[1] ? i : null;
							} );
					}
				}
				else {
					// jQuery selector on the TH elements for the columns
					return $( nodes )
						.filter( s )
						.map( function () {
							return $.inArray( this, nodes ); // `nodes` is column index complete and in order
						} )
						.toArray();
				}
			};

			return _selector_run( 'column', selector, run, settings, opts );
		};


		var __setColumnVis = function ( settings, column, vis, recalc ) {
			var
				cols = settings.aoColumns,
				col  = cols[ column ],
				data = settings.aoData,
				row, cells, i, ien, tr;

			// Get
			if ( vis === undefined ) {
				return col.bVisible;
			}

			// Set
			// No change
			if ( col.bVisible === vis ) {
				return;
			}

			if ( vis ) {
				// Insert column
				// Need to decide if we should use appendChild or insertBefore
				var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );

				for ( i=0, ien=data.length ; i<ien ; i++ ) {
					tr = data[i].nTr;
					cells = data[i].anCells;

					if ( tr ) {
						// insertBefore can act like appendChild if 2nd arg is null
						tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
					}
				}
			}
			else {
				// Remove column
				$( _pluck( settings.aoData, 'anCells', column ) ).detach();
			}

			// Common actions
			col.bVisible = vis;
			_fnDrawHead( settings, settings.aoHeader );
			_fnDrawHead( settings, settings.aoFooter );

			if ( recalc === undefined || recalc ) {
				// Automatically adjust column sizing
				_fnAdjustColumnSizing( settings );

				// Realign columns for scrolling
				if ( settings.oScroll.sX || settings.oScroll.sY ) {
					_fnScrollDraw( settings );
				}
			}

			_fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis] );

			_fnSaveState( settings );
		};


		_api_register( 'columns()', function ( selector, opts ) {
			// argument shifting
			if ( selector === undefined ) {
				selector = '';
			}
			else if ( $.isPlainObject( selector ) ) {
				opts = selector;
				selector = '';
			}

			opts = _selector_opts( opts );

			var inst = this.iterator( 'table', function ( settings ) {
				return __column_selector( settings, selector, opts );
			}, 1 );

			// Want argument shifting here and in _row_selector?
			inst.selector.cols = selector;
			inst.selector.opts = opts;

			return inst;
		} );

		_api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
			return this.iterator( 'column', function ( settings, column ) {
				return settings.aoColumns[column].nTh;
			}, 1 );
		} );

		_api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
			return this.iterator( 'column', function ( settings, column ) {
				return settings.aoColumns[column].nTf;
			}, 1 );
		} );

		_api_registerPlural( 'columns().data()', 'column().data()', function () {
			return this.iterator( 'column-rows', __columnData, 1 );
		} );

		_api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {
			return this.iterator( 'column', function ( settings, column ) {
				return settings.aoColumns[column].mData;
			}, 1 );
		} );

		_api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
			return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
				return _pluck_order( settings.aoData, rows,
					type === 'search' ? '_aFilterData' : '_aSortData', column
				);
			}, 1 );
		} );

		_api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
			return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
				return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
			}, 1 );
		} );

		_api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {
			return this.iterator( 'column', function ( settings, column ) {
				if ( vis === undefined ) {
					return settings.aoColumns[ column ].bVisible;
				} // else
				__setColumnVis( settings, column, vis, calc );
			} );
		} );

		_api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
			return this.iterator( 'column', function ( settings, column ) {
				return type === 'visible' ?
					_fnColumnIndexToVisible( settings, column ) :
					column;
			}, 1 );
		} );

		_api_register( 'columns.adjust()', function () {
			return this.iterator( 'table', function ( settings ) {
				_fnAdjustColumnSizing( settings );
			}, 1 );
		} );

		_api_register( 'column.index()', function ( type, idx ) {
			if ( this.context.length !== 0 ) {
				var ctx = this.context[0];

				if ( type === 'fromVisible' || type === 'toData' ) {
					return _fnVisibleToColumnIndex( ctx, idx );
				}
				else if ( type === 'fromData' || type === 'toVisible' ) {
					return _fnColumnIndexToVisible( ctx, idx );
				}
			}
		} );

		_api_register( 'column()', function ( selector, opts ) {
			return _selector_first( this.columns( selector, opts ) );
		} );




		var __cell_selector = function ( settings, selector, opts )
		{
			var data = settings.aoData;
			var rows = _selector_row_indexes( settings, opts );
			var cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );
			var allCells = $( [].concat.apply([], cells) );
			var row;
			var columns = settings.aoColumns.length;
			var a, i, ien, j, o, host;

			var run = function ( s ) {
				var fnSelector = typeof s === 'function';

				if ( s === null || s === undefined || fnSelector ) {
					// All cells and function selectors
					a = [];

					for ( i=0, ien=rows.length ; i<ien ; i++ ) {
						row = rows[i];

						for ( j=0 ; j<columns ; j++ ) {
							o = {
								row: row,
								column: j
							};

							if ( fnSelector ) {
								// Selector - function
								host = data[ row ];

								if ( s( o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null ) ) {
									a.push( o );
								}
							}
							else {
								// Selector - all
								a.push( o );
							}
						}
					}

					return a;
				}

				// Selector - index
				if ( $.isPlainObject( s ) ) {
					return [s];
				}

				// Selector - jQuery filtered cells
				return allCells
					.filter( s )
					.map( function (i, el) {
						if ( el.parentNode ) {
							row = el.parentNode._DT_RowIndex;
						}
						else {
							// If no parent node, then the cell is hidden and we'll need
							// to traverse the array to find it
							for ( i=0, ien=data.length ; i<ien ; i++ ) {
								if ( $.inArray( el, data[i].anCells ) !== -1 ) {
									row = i;
									break;
								}
							}
						}

						return {
							row: row,
							column: $.inArray( el, data[ row ].anCells )
						};
					} )
					.toArray();
			};

			return _selector_run( 'cell', selector, run, settings, opts );
		};




		_api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
			// Argument shifting
			if ( $.isPlainObject( rowSelector ) ) {
				// Indexes
				if ( rowSelector.row === undefined ) {
					// Selector options in first parameter
					opts = rowSelector;
					rowSelector = null;
				}
				else {
					// Cell index objects in first parameter
					opts = columnSelector;
					columnSelector = null;
				}
			}
			if ( $.isPlainObject( columnSelector ) ) {
				opts = columnSelector;
				columnSelector = null;
			}

			// Cell selector
			if ( columnSelector === null || columnSelector === undefined ) {
				return this.iterator( 'table', function ( settings ) {
					return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
				} );
			}

			// Row + column selector
			var columns = this.columns( columnSelector, opts );
			var rows = this.rows( rowSelector, opts );
			var a, i, ien, j, jen;

			var cells = this.iterator( 'table', function ( settings, idx ) {
				a = [];

				for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
					for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
						a.push( {
							row:    rows[idx][i],
							column: columns[idx][j]
						} );
					}
				}

				return a;
			}, 1 );

			$.extend( cells.selector, {
				cols: columnSelector,
				rows: rowSelector,
				opts: opts
			} );

			return cells;
		} );


		_api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
			return this.iterator( 'cell', function ( settings, row, column ) {
				var cells = settings.aoData[ row ].anCells;
				return cells ?
					cells[ column ] :
					undefined;
			}, 1 );
		} );


		_api_register( 'cells().data()', function () {
			return this.iterator( 'cell', function ( settings, row, column ) {
				return _fnGetCellData( settings, row, column );
			}, 1 );
		} );


		_api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
			type = type === 'search' ? '_aFilterData' : '_aSortData';

			return this.iterator( 'cell', function ( settings, row, column ) {
				return settings.aoData[ row ][ type ][ column ];
			}, 1 );
		} );


		_api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {
			return this.iterator( 'cell', function ( settings, row, column ) {
				return _fnGetCellData( settings, row, column, type );
			}, 1 );
		} );


		_api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
			return this.iterator( 'cell', function ( settings, row, column ) {
				return {
					row: row,
					column: column,
					columnVisible: _fnColumnIndexToVisible( settings, column )
				};
			}, 1 );
		} );


		_api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {
			return this.iterator( 'cell', function ( settings, row, column ) {
				_fnInvalidate( settings, row, src, column );
			} );
		} );



		_api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
			return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
		} );


		_api_register( 'cell().data()', function ( data ) {
			var ctx = this.context;
			var cell = this[0];

			if ( data === undefined ) {
				// Get
				return ctx.length && cell.length ?
					_fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
					undefined;
			}

			// Set
			_fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
			_fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );

			return this;
		} );



		/**
		 * Get current ordering (sorting) that has been applied to the table.
		 *
		 * @returns {array} 2D array containing the sorting information for the first
		 *   table in the current context. Each element in the parent array represents
		 *   a column being sorted upon (i.e. multi-sorting with two columns would have
		 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
		 *   the column index that the sorting condition applies to, the second is the
		 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
		 *   index of the sorting order from the `column.sorting` initialisation array.
		 *//**
		 * Set the ordering for the table.
		 *
		 * @param {integer} order Column index to sort upon.
		 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
		 * @returns {DataTables.Api} this
		 *//**
		 * Set the ordering for the table.
		 *
		 * @param {array} order 1D array of sorting information to be applied.
		 * @param {array} [...] Optional additional sorting conditions
		 * @returns {DataTables.Api} this
		 *//**
		 * Set the ordering for the table.
		 *
		 * @param {array} order 2D array of sorting information to be applied.
		 * @returns {DataTables.Api} this
		 */
		_api_register( 'order()', function ( order, dir ) {
			var ctx = this.context;

			if ( order === undefined ) {
				// get
				return ctx.length !== 0 ?
					ctx[0].aaSorting :
					undefined;
			}

			// set
			if ( typeof order === 'number' ) {
				// Simple column / direction passed in
				order = [ [ order, dir ] ];
			}
			else if ( ! $.isArray( order[0] ) ) {
				// Arguments passed in (list of 1D arrays)
				order = Array.prototype.slice.call( arguments );
			}
			// otherwise a 2D array was passed in

			return this.iterator( 'table', function ( settings ) {
				settings.aaSorting = order.slice();
			} );
		} );


		/**
		 * Attach a sort listener to an element for a given column
		 *
		 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
		 *   listener to. This can take the form of a single DOM node, a jQuery
		 *   collection of nodes or a jQuery selector which will identify the node(s).
		 * @param {integer} column the column that a click on this node will sort on
		 * @param {function} [callback] callback function when sort is run
		 * @returns {DataTables.Api} this
		 */
		_api_register( 'order.listener()', function ( node, column, callback ) {
			return this.iterator( 'table', function ( settings ) {
				_fnSortAttachListener( settings, node, column, callback );
			} );
		} );


		// Order by the selected column(s)
		_api_register( [
			'columns().order()',
			'column().order()'
		], function ( dir ) {
			var that = this;

			return this.iterator( 'table', function ( settings, i ) {
				var sort = [];

				$.each( that[i], function (j, col) {
					sort.push( [ col, dir ] );
				} );

				settings.aaSorting = sort;
			} );
		} );



		_api_register( 'search()', function ( input, regex, smart, caseInsen ) {
			var ctx = this.context;

			if ( input === undefined ) {
				// get
				return ctx.length !== 0 ?
					ctx[0].oPreviousSearch.sSearch :
					undefined;
			}

			// set
			return this.iterator( 'table', function ( settings ) {
				if ( ! settings.oFeatures.bFilter ) {
					return;
				}

				_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
					"sSearch": input+"",
					"bRegex":  regex === null ? false : regex,
					"bSmart":  smart === null ? true  : smart,
					"bCaseInsensitive": caseInsen === null ? true : caseInsen
				} ), 1 );
			} );
		} );


		_api_registerPlural(
			'columns().search()',
			'column().search()',
			function ( input, regex, smart, caseInsen ) {
				return this.iterator( 'column', function ( settings, column ) {
					var preSearch = settings.aoPreSearchCols;

					if ( input === undefined ) {
						// get
						return preSearch[ column ].sSearch;
					}

					// set
					if ( ! settings.oFeatures.bFilter ) {
						return;
					}

					$.extend( preSearch[ column ], {
						"sSearch": input+"",
						"bRegex":  regex === null ? false : regex,
						"bSmart":  smart === null ? true  : smart,
						"bCaseInsensitive": caseInsen === null ? true : caseInsen
					} );

					_fnFilterComplete( settings, settings.oPreviousSearch, 1 );
				} );
			}
		);

		/*
		 * State API methods
		 */

		_api_register( 'state()', function () {
			return this.context.length ?
				this.context[0].oSavedState :
				null;
		} );


		_api_register( 'state.clear()', function () {
			return this.iterator( 'table', function ( settings ) {
				// Save an empty object
				settings.fnStateSaveCallback.call( settings.oInstance, settings, {} );
			} );
		} );


		_api_register( 'state.loaded()', function () {
			return this.context.length ?
				this.context[0].oLoadedState :
				null;
		} );


		_api_register( 'state.save()', function () {
			return this.iterator( 'table', function ( settings ) {
				_fnSaveState( settings );
			} );
		} );



		/**
		 * Provide a common method for plug-ins to check the version of DataTables being
		 * used, in order to ensure compatibility.
		 *
		 *  @param {string} version Version string to check for, in the format "X.Y.Z".
		 *    Note that the formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to
		 *    the required version, or false if this version of DataTales is not
		 *    suitable
		 *  @static
		 *  @dtopt API-Static
		 *
		 *  @example
		 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
		 */
		DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
		{
			var aThis = DataTable.version.split('.');
			var aThat = version.split('.');
			var iThis, iThat;

			for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
				iThis = parseInt( aThis[i], 10 ) || 0;
				iThat = parseInt( aThat[i], 10 ) || 0;

				// Parts are the same, keep comparing
				if (iThis === iThat) {
					continue;
				}

				// Parts are different, return immediately
				return iThis > iThat;
			}

			return true;
		};


		/**
		 * Check if a `<table>` node is a DataTable table already or not.
		 *
		 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
		 *      selector for the table to test. Note that if more than more than one
		 *      table is passed on, only the first will be checked
		 *  @returns {boolean} true the table given is a DataTable, or false otherwise
		 *  @static
		 *  @dtopt API-Static
		 *
		 *  @example
		 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
		 */
		DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
		{
			var t = $(table).get(0);
			var is = false;

			$.each( DataTable.settings, function (i, o) {
				var head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;
				var foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;

				if ( o.nTable === t || head === t || foot === t ) {
					is = true;
				}
			} );

			return is;
		};


		/**
		 * Get all DataTable tables that have been initialised - optionally you can
		 * select to get only currently visible tables.
		 *
		 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
		 *    or visible tables only.
		 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
		 *    DataTables
		 *  @static
		 *  @dtopt API-Static
		 *
		 *  @example
		 *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
		 */
		DataTable.tables = DataTable.fnTables = function ( visible )
		{
			var api = false;

			if ( $.isPlainObject( visible ) ) {
				api = visible.api;
				visible = visible.visible;
			}

			var a = $.map( DataTable.settings, function (o) {
				if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
					return o.nTable;
				}
			} );

			return api ?
				new _Api( a ) :
				a;
		};


		/**
		 * DataTables utility methods
		 *
		 * This namespace provides helper methods that DataTables uses internally to
		 * create a DataTable, but which are not exclusively used only for DataTables.
		 * These methods can be used by extension authors to save the duplication of
		 * code.
		 *
		 *  @namespace
		 */
		DataTable.util = {
			/**
			 * Throttle the calls to a function. Arguments and context are maintained
			 * for the throttled function.
			 *
			 * @param {function} fn Function to be called
			 * @param {integer} freq Call frequency in mS
			 * @return {function} Wrapped function
			 */
			throttle: _fnThrottle,


			/**
			 * Escape a string such that it can be used in a regular expression
			 *
			 *  @param {string} sVal string to escape
			 *  @returns {string} escaped string
			 */
			escapeRegex: _fnEscapeRegex
		};


		/**
		 * Convert from camel case parameters to Hungarian notation. This is made public
		 * for the extensions to provide the same ability as DataTables core to accept
		 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
		 * parameters.
		 *
		 *  @param {object} src The model object which holds all parameters that can be
		 *    mapped.
		 *  @param {object} user The object to convert from camel case to Hungarian.
		 *  @param {boolean} force When set to `true`, properties which already have a
		 *    Hungarian value in the `user` object will be overwritten. Otherwise they
		 *    won't be.
		 */
		DataTable.camelToHungarian = _fnCamelToHungarian;



		/**
		 *
		 */
		_api_register( '$()', function ( selector, opts ) {
			var
				rows   = this.rows( opts ).nodes(), // Get all rows
				jqRows = $(rows);

			return $( [].concat(
				jqRows.filter( selector ).toArray(),
				jqRows.find( selector ).toArray()
			) );
		} );


		// jQuery functions to operate on the tables
		$.each( [ 'on', 'one', 'off' ], function (i, key) {
			_api_register( key+'()', function ( /* event, handler */ ) {
				var args = Array.prototype.slice.call(arguments);

				// Add the `dt` namespace automatically if it isn't already present
				if ( ! args[0].match(/\.dt\b/) ) {
					args[0] += '.dt';
				}

				var inst = $( this.tables().nodes() );
				inst[key].apply( inst, args );
				return this;
			} );
		} );


		_api_register( 'clear()', function () {
			return this.iterator( 'table', function ( settings ) {
				_fnClearTable( settings );
			} );
		} );


		_api_register( 'settings()', function () {
			return new _Api( this.context, this.context );
		} );


		_api_register( 'init()', function () {
			var ctx = this.context;
			return ctx.length ? ctx[0].oInit : null;
		} );


		_api_register( 'data()', function () {
			return this.iterator( 'table', function ( settings ) {
				return _pluck( settings.aoData, '_aData' );
			} ).flatten();
		} );


		_api_register( 'destroy()', function ( remove ) {
			remove = remove || false;

			return this.iterator( 'table', function ( settings ) {
				var orig      = settings.nTableWrapper.parentNode;
				var classes   = settings.oClasses;
				var table     = settings.nTable;
				var tbody     = settings.nTBody;
				var thead     = settings.nTHead;
				var tfoot     = settings.nTFoot;
				var jqTable   = $(table);
				var jqTbody   = $(tbody);
				var jqWrapper = $(settings.nTableWrapper);
				var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
				var i, ien;

				// Flag to note that the table is currently being destroyed - no action
				// should be taken
				settings.bDestroying = true;

				// Fire off the destroy callbacks for plug-ins etc
				_fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );

				// If not being removed from the document, make all columns visible
				if ( ! remove ) {
					new _Api( settings ).columns().visible( true );
				}

				// Blitz all `DT` namespaced events (these are internal events, the
				// lowercase, `dt` events are user subscribed and they are responsible
				// for removing them
				jqWrapper.unbind('.DT').find(':not(tbody *)').unbind('.DT');
				$(window).unbind('.DT-'+settings.sInstance);

				// When scrolling we had to break the table up - restore it
				if ( table != thead.parentNode ) {
					jqTable.children('thead').detach();
					jqTable.append( thead );
				}

				if ( tfoot && table != tfoot.parentNode ) {
					jqTable.children('tfoot').detach();
					jqTable.append( tfoot );
				}

				settings.aaSorting = [];
				settings.aaSortingFixed = [];
				_fnSortingClasses( settings );

				$( rows ).removeClass( settings.asStripeClasses.join(' ') );

				$('th, td', thead).removeClass( classes.sSortable+' '+
					classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
				);

				if ( settings.bJUI ) {
					$('th span.'+classes.sSortIcon+ ', td span.'+classes.sSortIcon, thead).detach();
					$('th, td', thead).each( function () {
						var wrapper = $('div.'+classes.sSortJUIWrapper, this);
						$(this).append( wrapper.contents() );
						wrapper.detach();
					} );
				}

				// Add the TR elements back into the table in their original order
				jqTbody.children().detach();
				jqTbody.append( rows );

				// Remove the DataTables generated nodes, events and classes
				var removedMethod = remove ? 'remove' : 'detach';
				jqTable[ removedMethod ]();
				jqWrapper[ removedMethod ]();

				// If we need to reattach the table to the document
				if ( ! remove && orig ) {
					// insertBefore acts like appendChild if !arg[1]
					orig.insertBefore( table, settings.nTableReinsertBefore );

					// Restore the width of the original table - was read from the style property,
					// so we can restore directly to that
					jqTable
						.css( 'width', settings.sDestroyWidth )
						.removeClass( classes.sTable );

					// If the were originally stripe classes - then we add them back here.
					// Note this is not fool proof (for example if not all rows had stripe
					// classes - but it's a good effort without getting carried away
					ien = settings.asDestroyStripes.length;

					if ( ien ) {
						jqTbody.children().each( function (i) {
							$(this).addClass( settings.asDestroyStripes[i % ien] );
						} );
					}
				}

				/* Remove the settings object from the settings array */
				var idx = $.inArray( settings, DataTable.settings );
				if ( idx !== -1 ) {
					DataTable.settings.splice( idx, 1 );
				}
			} );
		} );


		// Add the `every()` method for rows, columns and cells in a compact form
		$.each( [ 'column', 'row', 'cell' ], function ( i, type ) {
			_api_register( type+'s().every()', function ( fn ) {
				return this.iterator( type, function ( settings, arg1, arg2, arg3, arg4 ) {
					// Rows and columns:
					//  arg1 - index
					//  arg2 - table counter
					//  arg3 - loop counter
					//  arg4 - undefined
					// Cells:
					//  arg1 - row index
					//  arg2 - column index
					//  arg3 - table counter
					//  arg4 - loop counter
					fn.call(
						new _Api( settings )[ type ]( arg1, type==='cell' ? arg2 : undefined ),
						arg1, arg2, arg3, arg4
					);
				} );
			} );
		} );


		// i18n method for extensions to be able to use the language object from the
		// DataTable
		_api_register( 'i18n()', function ( token, def, plural ) {
			var ctx = this.context[0];
			var resolved = _fnGetObjectDataFn( token )( ctx.oLanguage );

			if ( resolved === undefined ) {
				resolved = def;
			}

			if ( plural !== undefined && $.isPlainObject( resolved ) ) {
				resolved = resolved[ plural ] !== undefined ?
					resolved[ plural ] :
					resolved._;
			}

			return resolved.replace( '%d', plural ); // nb: plural might be undefined,
		} );

		/**
		 * Version string for plug-ins to check compatibility. Allowed format is
		 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
		 * only for non-release builds. See http://semver.org/ for more information.
		 *  @member
		 *  @type string
		 *  @default Version number
		 */
		DataTable.version = "1.10.9";

		/**
		 * Private data store, containing all of the settings objects that are
		 * created for the tables on a given page.
		 *
		 * Note that the `DataTable.settings` object is aliased to
		 * `jQuery.fn.dataTableExt` through which it may be accessed and
		 * manipulated, or `jQuery.fn.dataTable.settings`.
		 *  @member
		 *  @type array
		 *  @default []
		 *  @private
		 */
		DataTable.settings = [];

		/**
		 * Object models container, for the various models that DataTables has
		 * available to it. These models define the objects that are used to hold
		 * the active state and configuration of the table.
		 *  @namespace
		 */
		DataTable.models = {};



		/**
		 * Template object for the way in which DataTables holds information about
		 * search information for the global filter and individual column filters.
		 *  @namespace
		 */
		DataTable.models.oSearch = {
			/**
			 * Flag to indicate if the filtering should be case insensitive or not
			 *  @type boolean
			 *  @default true
			 */
			"bCaseInsensitive": true,

			/**
			 * Applied search term
			 *  @type string
			 *  @default <i>Empty string</i>
			 */
			"sSearch": "",

			/**
			 * Flag to indicate if the search term should be interpreted as a
			 * regular expression (true) or not (false) and therefore and special
			 * regex characters escaped.
			 *  @type boolean
			 *  @default false
			 */
			"bRegex": false,

			/**
			 * Flag to indicate if DataTables is to use its smart filtering or not.
			 *  @type boolean
			 *  @default true
			 */
			"bSmart": true
		};




		/**
		 * Template object for the way in which DataTables holds information about
		 * each individual row. This is the object format used for the settings
		 * aoData array.
		 *  @namespace
		 */
		DataTable.models.oRow = {
			/**
			 * TR element for the row
			 *  @type node
			 *  @default null
			 */
			"nTr": null,

			/**
			 * Array of TD elements for each row. This is null until the row has been
			 * created.
			 *  @type array nodes
			 *  @default []
			 */
			"anCells": null,

			/**
			 * Data object from the original data source for the row. This is either
			 * an array if using the traditional form of DataTables, or an object if
			 * using mData options. The exact type will depend on the passed in
			 * data from the data source, or will be an array if using DOM a data
			 * source.
			 *  @type array|object
			 *  @default []
			 */
			"_aData": [],

			/**
			 * Sorting data cache - this array is ostensibly the same length as the
			 * number of columns (although each index is generated only as it is
			 * needed), and holds the data that is used for sorting each column in the
			 * row. We do this cache generation at the start of the sort in order that
			 * the formatting of the sort data need be done only once for each cell
			 * per sort. This array should not be read from or written to by anything
			 * other than the master sorting methods.
			 *  @type array
			 *  @default null
			 *  @private
			 */
			"_aSortData": null,

			/**
			 * Per cell filtering data cache. As per the sort data cache, used to
			 * increase the performance of the filtering in DataTables
			 *  @type array
			 *  @default null
			 *  @private
			 */
			"_aFilterData": null,

			/**
			 * Filtering data cache. This is the same as the cell filtering cache, but
			 * in this case a string rather than an array. This is easily computed with
			 * a join on `_aFilterData`, but is provided as a cache so the join isn't
			 * needed on every search (memory traded for performance)
			 *  @type array
			 *  @default null
			 *  @private
			 */
			"_sFilterRow": null,

			/**
			 * Cache of the class name that DataTables has applied to the row, so we
			 * can quickly look at this variable rather than needing to do a DOM check
			 * on className for the nTr property.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *  @private
			 */
			"_sRowStripe": "",

			/**
			 * Denote if the original data source was from the DOM, or the data source
			 * object. This is used for invalidating data, so DataTables can
			 * automatically read data from the original source, unless uninstructed
			 * otherwise.
			 *  @type string
			 *  @default null
			 *  @private
			 */
			"src": null,

			/**
			 * Index in the aoData array. This saves an indexOf lookup when we have the
			 * object, but want to know the index
			 *  @type integer
			 *  @default -1
			 *  @private
			 */
			"idx": -1
		};


		/**
		 * Template object for the column information object in DataTables. This object
		 * is held in the settings aoColumns array and contains all the information that
		 * DataTables needs about each individual column.
		 *
		 * Note that this object is related to {@link DataTable.defaults.column}
		 * but this one is the internal data store for DataTables's cache of columns.
		 * It should NOT be manipulated outside of DataTables. Any configuration should
		 * be done through the initialisation options.
		 *  @namespace
		 */
		DataTable.models.oColumn = {
			/**
			 * Column index. This could be worked out on-the-fly with $.inArray, but it
			 * is faster to just hold it as a variable
			 *  @type integer
			 *  @default null
			 */
			"idx": null,

			/**
			 * A list of the columns that sorting should occur on when this column
			 * is sorted. That this property is an array allows multi-column sorting
			 * to be defined for a column (for example first name / last name columns
			 * would benefit from this). The values are integers pointing to the
			 * columns to be sorted on (typically it will be a single integer pointing
			 * at itself, but that doesn't need to be the case).
			 *  @type array
			 */
			"aDataSort": null,

			/**
			 * Define the sorting directions that are applied to the column, in sequence
			 * as the column is repeatedly sorted upon - i.e. the first value is used
			 * as the sorting direction when the column if first sorted (clicked on).
			 * Sort it again (click again) and it will move on to the next index.
			 * Repeat until loop.
			 *  @type array
			 */
			"asSorting": null,

			/**
			 * Flag to indicate if the column is searchable, and thus should be included
			 * in the filtering or not.
			 *  @type boolean
			 */
			"bSearchable": null,

			/**
			 * Flag to indicate if the column is sortable or not.
			 *  @type boolean
			 */
			"bSortable": null,

			/**
			 * Flag to indicate if the column is currently visible in the table or not
			 *  @type boolean
			 */
			"bVisible": null,

			/**
			 * Store for manual type assignment using the `column.type` option. This
			 * is held in store so we can manipulate the column's `sType` property.
			 *  @type string
			 *  @default null
			 *  @private
			 */
			"_sManualType": null,

			/**
			 * Flag to indicate if HTML5 data attributes should be used as the data
			 * source for filtering or sorting. True is either are.
			 *  @type boolean
			 *  @default false
			 *  @private
			 */
			"_bAttrSrc": false,

			/**
			 * Developer definable function that is called whenever a cell is created (Ajax source,
			 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
			 * allowing you to modify the DOM element (add background colour for example) when the
			 * element is available.
			 *  @type function
			 *  @param {element} nTd The TD node that has been created
			 *  @param {*} sData The Data for the cell
			 *  @param {array|object} oData The data for the whole row
			 *  @param {int} iRow The row index for the aoData data store
			 *  @default null
			 */
			"fnCreatedCell": null,

			/**
			 * Function to get data from a cell in a column. You should <b>never</b>
			 * access data directly through _aData internally in DataTables - always use
			 * the method attached to this property. It allows mData to function as
			 * required. This function is automatically assigned by the column
			 * initialisation method
			 *  @type function
			 *  @param {array|object} oData The data array/object for the array
			 *    (i.e. aoData[]._aData)
			 *  @param {string} sSpecific The specific data type you want to get -
			 *    'display', 'type' 'filter' 'sort'
			 *  @returns {*} The data for the cell from the given row's data
			 *  @default null
			 */
			"fnGetData": null,

			/**
			 * Function to set data for a cell in the column. You should <b>never</b>
			 * set the data directly to _aData internally in DataTables - always use
			 * this method. It allows mData to function as required. This function
			 * is automatically assigned by the column initialisation method
			 *  @type function
			 *  @param {array|object} oData The data array/object for the array
			 *    (i.e. aoData[]._aData)
			 *  @param {*} sValue Value to set
			 *  @default null
			 */
			"fnSetData": null,

			/**
			 * Property to read the value for the cells in the column from the data
			 * source array / object. If null, then the default content is used, if a
			 * function is given then the return from the function is used.
			 *  @type function|int|string|null
			 *  @default null
			 */
			"mData": null,

			/**
			 * Partner property to mData which is used (only when defined) to get
			 * the data - i.e. it is basically the same as mData, but without the
			 * 'set' option, and also the data fed to it is the result from mData.
			 * This is the rendering method to match the data method of mData.
			 *  @type function|int|string|null
			 *  @default null
			 */
			"mRender": null,

			/**
			 * Unique header TH/TD element for this column - this is what the sorting
			 * listener is attached to (if sorting is enabled.)
			 *  @type node
			 *  @default null
			 */
			"nTh": null,

			/**
			 * Unique footer TH/TD element for this column (if there is one). Not used
			 * in DataTables as such, but can be used for plug-ins to reference the
			 * footer for each column.
			 *  @type node
			 *  @default null
			 */
			"nTf": null,

			/**
			 * The class to apply to all TD elements in the table's TBODY for the column
			 *  @type string
			 *  @default null
			 */
			"sClass": null,

			/**
			 * When DataTables calculates the column widths to assign to each column,
			 * it finds the longest string in each column and then constructs a
			 * temporary table and reads the widths from that. The problem with this
			 * is that "mmm" is much wider then "iiii", but the latter is a longer
			 * string - thus the calculation can go wrong (doing it properly and putting
			 * it into an DOM object and measuring that is horribly(!) slow). Thus as
			 * a "work around" we provide this option. It will append its value to the
			 * text that is found to be the longest string for the column - i.e. padding.
			 *  @type string
			 */
			"sContentPadding": null,

			/**
			 * Allows a default value to be given for a column's data, and will be used
			 * whenever a null data source is encountered (this can be because mData
			 * is set to null, or because the data source itself is null).
			 *  @type string
			 *  @default null
			 */
			"sDefaultContent": null,

			/**
			 * Name for the column, allowing reference to the column by name as well as
			 * by index (needs a lookup to work by name).
			 *  @type string
			 */
			"sName": null,

			/**
			 * Custom sorting data type - defines which of the available plug-ins in
			 * afnSortData the custom sorting will use - if any is defined.
			 *  @type string
			 *  @default std
			 */
			"sSortDataType": 'std',

			/**
			 * Class to be applied to the header element when sorting on this column
			 *  @type string
			 *  @default null
			 */
			"sSortingClass": null,

			/**
			 * Class to be applied to the header element when sorting on this column -
			 * when jQuery UI theming is used.
			 *  @type string
			 *  @default null
			 */
			"sSortingClassJUI": null,

			/**
			 * Title of the column - what is seen in the TH element (nTh).
			 *  @type string
			 */
			"sTitle": null,

			/**
			 * Column sorting and filtering type
			 *  @type string
			 *  @default null
			 */
			"sType": null,

			/**
			 * Width of the column
			 *  @type string
			 *  @default null
			 */
			"sWidth": null,

			/**
			 * Width of the column when it was first "encountered"
			 *  @type string
			 *  @default null
			 */
			"sWidthOrig": null
		};


		/*
		 * Developer note: The properties of the object below are given in Hungarian
		 * notation, that was used as the interface for DataTables prior to v1.10, however
		 * from v1.10 onwards the primary interface is camel case. In order to avoid
		 * breaking backwards compatibility utterly with this change, the Hungarian
		 * version is still, internally the primary interface, but is is not documented
		 * - hence the @name tags in each doc comment. This allows a Javascript function
		 * to create a map from Hungarian notation to camel case (going the other direction
		 * would require each property to be listed, which would at around 3K to the size
		 * of DataTables, while this method is about a 0.5K hit.
		 *
		 * Ultimately this does pave the way for Hungarian notation to be dropped
		 * completely, but that is a massive amount of work and will break current
		 * installs (therefore is on-hold until v2).
		 */

		/**
		 * Initialisation options that can be given to DataTables at initialisation
		 * time.
		 *  @namespace
		 */
		DataTable.defaults = {
			/**
			 * An array of data to use for the table, passed in at initialisation which
			 * will be used in preference to any data which is already in the DOM. This is
			 * particularly useful for constructing tables purely in Javascript, for
			 * example with a custom Ajax call.
			 *  @type array
			 *  @default null
			 *
			 *  @dtopt Option
			 *  @name DataTable.defaults.data
			 *
			 *  @example
			 *    // Using a 2D array data source
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using an array of objects as a data source (`data`)
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
			 */
			"aaData": null,


			/**
			 * If ordering is enabled, then DataTables will perform a first pass sort on
			 * initialisation. You can define which column(s) the sort is performed
			 * upon, and the sorting direction, with this variable. The `sorting` array
			 * should contain an array for each column to be sorted initially containing
			 * the column's index and a direction string ('asc' or 'desc').
			 *  @type array
			 *  @default [[0,'asc']]
			 *
			 *  @dtopt Option
			 *  @name DataTable.defaults.order
			 *
			 *  @example
			 *    // Sort by 3rd column first, and then 4th column
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
			 *
			 *    // No initial sorting
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
			 */
			"aaSorting": [[0,'asc']],


			/**
			 * This parameter is basically identical to the `sorting` parameter, but
			 * cannot be overridden by user interaction with the table. What this means
			 * is that you could have a column (visible or hidden) which the sorting
			 * will always be forced on first - any sorting after that (from the user)
			 * will then be performed as required. This can be useful for grouping rows
			 * together.
			 *  @type array
			 *  @default null
			 *
			 *  @dtopt Option
			 *  @name DataTable.defaults.orderFixed
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
			 */
			"aaSortingFixed": [],


			/**
			 * DataTables can be instructed to load data to display in the table from a
			 * Ajax source. This option defines how that Ajax call is made and where to.
			 *
			 * The `ajax` property has three different modes of operation, depending on
			 * how it is defined. These are:
			 *
			 * * `string` - Set the URL from where the data should be loaded from.
			 * * `object` - Define properties for `jQuery.ajax`.
			 * * `function` - Custom data get function
			 *
			 * `string`
			 * --------
			 *
			 * As a string, the `ajax` property simply defines the URL from which
			 * DataTables will load data.
			 *
			 * `object`
			 * --------
			 *
			 * As an object, the parameters in the object are passed to
			 * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
			 * of the Ajax request. DataTables has a number of default parameters which
			 * you can override using this option. Please refer to the jQuery
			 * documentation for a full description of the options available, although
			 * the following parameters provide additional options in DataTables or
			 * require special consideration:
			 *
			 * * `data` - As with jQuery, `data` can be provided as an object, but it
			 *   can also be used as a function to manipulate the data DataTables sends
			 *   to the server. The function takes a single parameter, an object of
			 *   parameters with the values that DataTables has readied for sending. An
			 *   object may be returned which will be merged into the DataTables
			 *   defaults, or you can add the items to the object that was passed in and
			 *   not return anything from the function. This supersedes `fnServerParams`
			 *   from DataTables 1.9-.
			 *
			 * * `dataSrc` - By default DataTables will look for the property `data` (or
			 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
			 *   from an Ajax source or for server-side processing - this parameter
			 *   allows that property to be changed. You can use Javascript dotted
			 *   object notation to get a data source for multiple levels of nesting, or
			 *   it my be used as a function. As a function it takes a single parameter,
			 *   the JSON returned from the server, which can be manipulated as
			 *   required, with the returned value being that used by DataTables as the
			 *   data source for the table. This supersedes `sAjaxDataProp` from
			 *   DataTables 1.9-.
			 *
			 * * `success` - Should not be overridden it is used internally in
			 *   DataTables. To manipulate / transform the data returned by the server
			 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
			 *
			 * `function`
			 * ----------
			 *
			 * As a function, making the Ajax call is left up to yourself allowing
			 * complete control of the Ajax request. Indeed, if desired, a method other
			 * than Ajax could be used to obtain the required data, such as Web storage
			 * or an AIR database.
			 *
			 * The function is given four parameters and no return is required. The
			 * parameters are:
			 *
			 * 1. _object_ - Data to send to the server
			 * 2. _function_ - Callback function that must be executed when the required
			 *    data has been obtained. That data should be passed into the callback
			 *    as the only parameter
			 * 3. _object_ - DataTables settings object for the table
			 *
			 * Note that this supersedes `fnServerData` from DataTables 1.9-.
			 *
			 *  @type string|object|function
			 *  @default null
			 *
			 *  @dtopt Option
			 *  @name DataTable.defaults.ajax
			 *  @since 1.10.0
			 *
			 * @example
			 *   // Get JSON data from a file via Ajax.
			 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
			 *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
			 *
			 * @example
			 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
			 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
			 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
			 *
			 * @example
			 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
			 *   // from a plain array rather than an array in an object
			 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
			 *
			 * @example
			 *   // Manipulate the data returned from the server - add a link to data
			 *   // (note this can, should, be done using `render` for the column - this
			 *   // is just a simple example of how the data can be manipulated).
			 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
			 *
			 * @example
			 *   // Add data to the request
			 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
			 *
			 * @example
			 *   // Send request as POST
			 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
			 *
			 * @example
			 *   // Get the data from localStorage (could interface with a form for
			 *   // adding, editing and removing rows).
			 *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
			 */
			"ajax": null,


			/**
			 * This parameter allows you to readily specify the entries in the length drop
			 * down menu that DataTables shows when pagination is enabled. It can be
			 * either a 1D array of options which will be used for both the displayed
			 * option and the value, or a 2D array which will use the array in the first
			 * position as the value, and the array in the second position as the
			 * displayed options (useful for language strings such as 'All').
			 *
			 * Note that the `pageLength` property will be automatically set to the
			 * first value given in this array, unless `pageLength` is also provided.
			 *  @type array
			 *  @default [ 10, 25, 50, 100 ]
			 *
			 *  @dtopt Option
			 *  @name DataTable.defaults.lengthMenu
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
			 */
			"aLengthMenu": [ 10, 25, 50, 100 ],


			/**
			 * The `columns` option in the initialisation parameter allows you to define
			 * details about the way individual columns behave. For a full list of
			 * column options that can be set, please see
			 * {@link DataTable.defaults.column}. Note that if you use `columns` to
			 * define your columns, you must have an entry in the array for every single
			 * column that you have in your table (these can be null if you don't which
			 * to specify any options).
			 *  @member
			 *
			 *  @name DataTable.defaults.column
			 */
			"aoColumns": null,

			/**
			 * Very similar to `columns`, `columnDefs` allows you to target a specific
			 * column, multiple columns, or all columns, using the `targets` property of
			 * each object in the array. This allows great flexibility when creating
			 * tables, as the `columnDefs` arrays can be of any length, targeting the
			 * columns you specifically want. `columnDefs` may use any of the column
			 * options available: {@link DataTable.defaults.column}, but it _must_
			 * have `targets` defined in each object in the array. Values in the `targets`
			 * array may be:
			 *   <ul>
			 *     <li>a string - class name will be matched on the TH for the column</li>
			 *     <li>0 or a positive integer - column index counting from the left</li>
			 *     <li>a negative integer - column index counting from the right</li>
			 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
			 *   </ul>
			 *  @member
			 *
			 *  @name DataTable.defaults.columnDefs
			 */
			"aoColumnDefs": null,


			/**
			 * Basically the same as `search`, this parameter defines the individual column
			 * filtering state at initialisation time. The array must be of the same size
			 * as the number of columns, and each element be an object with the parameters
			 * `search` and `escapeRegex` (the latter is optional). 'null' is also
			 * accepted and the default will be used.
			 *  @type array
			 *  @default []
			 *
			 *  @dtopt Option
			 *  @name DataTable.defaults.searchCols
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
			 */
			"aoSearchCols": [],


			/**
			 * An array of CSS classes that should be applied to displayed rows. This
			 * array may be of any length, and DataTables will apply each class
			 * sequentially, looping when required.
			 *  @type array
			 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
			 *    options</i>
			 *
			 *  @dtopt Option
			 *  @name DataTable.defaults.stripeClasses
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
			 */
			"asStripeClasses": null,


			/**
			 * Enable or disable automatic column width calculation. This can be disabled
			 * as an optimisation (it takes some time to calculate the widths) if the
			 * tables widths are passed in using `columns`.
			 *  @type boolean
			 *  @default true
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.autoWidth
			 *
			 *  @example
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
			 */
			"bAutoWidth": true,


			/**
			 * Deferred rendering can provide DataTables with a huge speed boost when you
			 * are using an Ajax or JS data source for the table. This option, when set to
			 * true, will cause DataTables to defer the creation of the table elements for
			 * each row until they are needed for a draw - saving a significant amount of
			 * time.
			 *  @type boolean
			 *  @default false
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.deferRender
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
			 */
			"bDeferRender": false,


			/**
			 * Replace a DataTable which matches the given selector and replace it with
			 * one which has the properties of the new initialisation object passed. If no
			 * table matches the selector, then the new DataTable will be constructed as
			 * per normal.
			 *  @type boolean
			 *  @default false
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.destroy
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
			 */
			"bDestroy": false,


			/**
			 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
			 * that it allows the end user to input multiple words (space separated) and
			 * will match a row containing those words, even if not in the order that was
			 * specified (this allow matching across multiple columns). Note that if you
			 * wish to use filtering in DataTables this must remain 'true' - to remove the
			 * default filtering input box and retain filtering abilities, please use
			 * {@link DataTable.defaults.dom}.
			 *  @type boolean
			 *  @default true
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.searching
			 *
			 *  @example
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
			 */
			"bFilter": true,


			/**
			 * Enable or disable the table information display. This shows information
			 * about the data that is currently visible on the page, including information
			 * about filtered data if that action is being performed.
			 *  @type boolean
			 *  @default true
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.info
			 *
			 *  @example
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
			 */
			"bInfo": true,


			/**
			 * Enable jQuery UI ThemeRoller support (required as ThemeRoller requires some
			 * slightly different and additional mark-up from what DataTables has
			 * traditionally used).
			 *  @type boolean
			 *  @default false
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.jQueryUI
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "jQueryUI": true
		 *      } );
		 *    } );
			 */
			"bJQueryUI": false,


			/**
			 * Allows the end user to select the size of a formatted page from a select
			 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
			 *  @type boolean
			 *  @default true
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.lengthChange
			 *
			 *  @example
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
			 */
			"bLengthChange": true,


			/**
			 * Enable or disable pagination.
			 *  @type boolean
			 *  @default true
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.paging
			 *
			 *  @example
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
			 */
			"bPaginate": true,


			/**
			 * Enable or disable the display of a 'processing' indicator when the table is
			 * being processed (e.g. a sort). This is particularly useful for tables with
			 * large amounts of data where it can take a noticeable amount of time to sort
			 * the entries.
			 *  @type boolean
			 *  @default false
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.processing
			 *
			 *  @example
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
			 */
			"bProcessing": false,


			/**
			 * Retrieve the DataTables object for the given selector. Note that if the
			 * table has already been initialised, this parameter will cause DataTables
			 * to simply return the object that has already been set up - it will not take
			 * account of any changes you might have made to the initialisation object
			 * passed to DataTables (setting this parameter to true is an acknowledgement
			 * that you understand this). `destroy` can be used to reinitialise a table if
			 * you need.
			 *  @type boolean
			 *  @default false
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.retrieve
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
			 *
			 *    function initTable ()
			 *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
			 *
			 *    function tableActions ()
			 *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
			 */
			"bRetrieve": false,


			/**
			 * When vertical (y) scrolling is enabled, DataTables will force the height of
			 * the table's viewport to the given height at all times (useful for layout).
			 * However, this can look odd when filtering data down to a small data set,
			 * and the footer is left "floating" further down. This parameter (when
			 * enabled) will cause DataTables to collapse the table's viewport down when
			 * the result set will fit within the given Y height.
			 *  @type boolean
			 *  @default false
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.scrollCollapse
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
			 */
			"bScrollCollapse": false,


			/**
			 * Configure DataTables to use server-side processing. Note that the
			 * `ajax` parameter must also be given in order to give DataTables a
			 * source to obtain the required data for each draw.
			 *  @type boolean
			 *  @default false
			 *
			 *  @dtopt Features
			 *  @dtopt Server-side
			 *  @name DataTable.defaults.serverSide
			 *
			 *  @example
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
			 */
			"bServerSide": false,


			/**
			 * Enable or disable sorting of columns. Sorting of individual columns can be
			 * disabled by the `sortable` option for each column.
			 *  @type boolean
			 *  @default true
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.ordering
			 *
			 *  @example
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
			 */
			"bSort": true,


			/**
			 * Enable or display DataTables' ability to sort multiple columns at the
			 * same time (activated by shift-click by the user).
			 *  @type boolean
			 *  @default true
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.orderMulti
			 *
			 *  @example
			 *    // Disable multiple column sorting ability
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
			 */
			"bSortMulti": true,


			/**
			 * Allows control over whether DataTables should use the top (true) unique
			 * cell that is found for a single column, or the bottom (false - default).
			 * This is useful when using complex headers.
			 *  @type boolean
			 *  @default false
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.orderCellsTop
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
			 */
			"bSortCellsTop": false,


			/**
			 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
			 * `sorting\_3` to the columns which are currently being sorted on. This is
			 * presented as a feature switch as it can increase processing time (while
			 * classes are removed and added) so for large data sets you might want to
			 * turn this off.
			 *  @type boolean
			 *  @default true
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.orderClasses
			 *
			 *  @example
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
			 */
			"bSortClasses": true,


			/**
			 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
			 * used to save table display information such as pagination information,
			 * display length, filtering and sorting. As such when the end user reloads
			 * the page the display display will match what thy had previously set up.
			 *
			 * Due to the use of `localStorage` the default state saving is not supported
			 * in IE6 or 7. If state saving is required in those browsers, use
			 * `stateSaveCallback` to provide a storage solution such as cookies.
			 *  @type boolean
			 *  @default false
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.stateSave
			 *
			 *  @example
			 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
			 */
			"bStateSave": false,


			/**
			 * This function is called when a TR element is created (and all TD child
			 * elements have been inserted), or registered if using a DOM source, allowing
			 * manipulation of the TR element (adding classes etc).
			 *  @type function
			 *  @param {node} row "TR" element for the current row
			 *  @param {array} data Raw data array for this row
			 *  @param {int} dataIndex The index of this row in the internal aoData array
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.createdRow
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
			 */
			"fnCreatedRow": null,


			/**
			 * This function is called on every 'draw' event, and allows you to
			 * dynamically modify any aspect you want about the created DOM.
			 *  @type function
			 *  @param {object} settings DataTables settings object
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.drawCallback
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
			 */
			"fnDrawCallback": null,


			/**
			 * Identical to fnHeaderCallback() but for the table footer this function
			 * allows you to modify the table footer on every 'draw' event.
			 *  @type function
			 *  @param {node} foot "TR" element for the footer
			 *  @param {array} data Full table data (as derived from the original HTML)
			 *  @param {int} start Index for the current display starting point in the
			 *    display array
			 *  @param {int} end Index for the current display ending point in the
			 *    display array
			 *  @param {array int} display Index array to translate the visual position
			 *    to the full data array
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.footerCallback
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
			 */
			"fnFooterCallback": null,


			/**
			 * When rendering large numbers in the information element for the table
			 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
			 * to have a comma separator for the 'thousands' units (e.g. 1 million is
			 * rendered as "1,000,000") to help readability for the end user. This
			 * function will override the default method DataTables uses.
			 *  @type function
			 *  @member
			 *  @param {int} toFormat number to be formatted
			 *  @returns {string} formatted string for DataTables to show the number
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.formatNumber
			 *
			 *  @example
			 *    // Format a number using a single quote for the separator (note that
			 *    // this can also be done with the language.thousands option)
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
			 */
			"fnFormatNumber": function ( toFormat ) {
				return toFormat.toString().replace(
					/\B(?=(\d{3})+(?!\d))/g,
					this.oLanguage.sThousands
				);
			},


			/**
			 * This function is called on every 'draw' event, and allows you to
			 * dynamically modify the header row. This can be used to calculate and
			 * display useful information about the table.
			 *  @type function
			 *  @param {node} head "TR" element for the header
			 *  @param {array} data Full table data (as derived from the original HTML)
			 *  @param {int} start Index for the current display starting point in the
			 *    display array
			 *  @param {int} end Index for the current display ending point in the
			 *    display array
			 *  @param {array int} display Index array to translate the visual position
			 *    to the full data array
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.headerCallback
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
			 */
			"fnHeaderCallback": null,


			/**
			 * The information element can be used to convey information about the current
			 * state of the table. Although the internationalisation options presented by
			 * DataTables are quite capable of dealing with most customisations, there may
			 * be times where you wish to customise the string further. This callback
			 * allows you to do exactly that.
			 *  @type function
			 *  @param {object} oSettings DataTables settings object
			 *  @param {int} start Starting position in data for the draw
			 *  @param {int} end End position in data for the draw
			 *  @param {int} max Total number of rows in the table (regardless of
			 *    filtering)
			 *  @param {int} total Total number of rows in the data set, after filtering
			 *  @param {string} pre The string that DataTables has formatted using it's
			 *    own rules
			 *  @returns {string} The string to be displayed in the information element.
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.infoCallback
			 *
			 *  @example
			 *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
			 */
			"fnInfoCallback": null,


			/**
			 * Called when the table has been initialised. Normally DataTables will
			 * initialise sequentially and there will be no need for this function,
			 * however, this does not hold true when using external language information
			 * since that is obtained using an async XHR call.
			 *  @type function
			 *  @param {object} settings DataTables settings object
			 *  @param {object} json The JSON object request from the server - only
			 *    present if client-side Ajax sourced data is used
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.initComplete
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
			 */
			"fnInitComplete": null,


			/**
			 * Called at the very start of each table draw and can be used to cancel the
			 * draw by returning false, any other return (including undefined) results in
			 * the full draw occurring).
			 *  @type function
			 *  @param {object} settings DataTables settings object
			 *  @returns {boolean} False will cancel the draw, anything else (including no
			 *    return) will allow it to complete.
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.preDrawCallback
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
			 */
			"fnPreDrawCallback": null,


			/**
			 * This function allows you to 'post process' each row after it have been
			 * generated for each table draw, but before it is rendered on screen. This
			 * function might be used for setting the row class name etc.
			 *  @type function
			 *  @param {node} row "TR" element for the current row
			 *  @param {array} data Raw data array for this row
			 *  @param {int} displayIndex The display index for the current table draw
			 *  @param {int} displayIndexFull The index of the data in the full list of
			 *    rows (after filtering)
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.rowCallback
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
			 */
			"fnRowCallback": null,


			/**
			 * __Deprecated__ The functionality provided by this parameter has now been
			 * superseded by that provided through `ajax`, which should be used instead.
			 *
			 * This parameter allows you to override the default function which obtains
			 * the data from the server so something more suitable for your application.
			 * For example you could use POST data, or pull information from a Gears or
			 * AIR database.
			 *  @type function
			 *  @member
			 *  @param {string} source HTTP source to obtain the data from (`ajax`)
			 *  @param {array} data A key/value pair object containing the data to send
			 *    to the server
			 *  @param {function} callback to be called on completion of the data get
			 *    process that will draw the data on the page.
			 *  @param {object} settings DataTables settings object
			 *
			 *  @dtopt Callbacks
			 *  @dtopt Server-side
			 *  @name DataTable.defaults.serverData
			 *
			 *  @deprecated 1.10. Please use `ajax` for this functionality now.
			 */
			"fnServerData": null,


			/**
			 * __Deprecated__ The functionality provided by this parameter has now been
			 * superseded by that provided through `ajax`, which should be used instead.
			 *
			 *  It is often useful to send extra data to the server when making an Ajax
			 * request - for example custom filtering information, and this callback
			 * function makes it trivial to send extra information to the server. The
			 * passed in parameter is the data set that has been constructed by
			 * DataTables, and you can add to this or modify it as you require.
			 *  @type function
			 *  @param {array} data Data array (array of objects which are name/value
			 *    pairs) that has been constructed by DataTables and will be sent to the
			 *    server. In the case of Ajax sourced data with server-side processing
			 *    this will be an empty array, for server-side processing there will be a
			 *    significant number of parameters!
			 *  @returns {undefined} Ensure that you modify the data array passed in,
			 *    as this is passed by reference.
			 *
			 *  @dtopt Callbacks
			 *  @dtopt Server-side
			 *  @name DataTable.defaults.serverParams
			 *
			 *  @deprecated 1.10. Please use `ajax` for this functionality now.
			 */
			"fnServerParams": null,


			/**
			 * Load the table state. With this function you can define from where, and how, the
			 * state of a table is loaded. By default DataTables will load from `localStorage`
			 * but you might wish to use a server-side database or cookies.
			 *  @type function
			 *  @member
			 *  @param {object} settings DataTables settings object
			 *  @return {object} The DataTables state object to be loaded
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.stateLoadCallback
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings) {
		 *          var o;
		 *
		 *          // Send an Ajax request to the server to get the data. Note that
		 *          // this is a synchronous request.
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "async": false,
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              o = json;
		 *            }
		 *          } );
		 *
		 *          return o;
		 *        }
		 *      } );
		 *    } );
			 */
			"fnStateLoadCallback": function ( settings ) {
				try {
					return JSON.parse(
						(settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
							'DataTables_'+settings.sInstance+'_'+location.pathname
						)
					);
				} catch (e) {}
			},


			/**
			 * Callback which allows modification of the saved state prior to loading that state.
			 * This callback is called when the table is loading state from the stored data, but
			 * prior to the settings object being modified by the saved state. Note that for
			 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
			 * a plug-in.
			 *  @type function
			 *  @param {object} settings DataTables settings object
			 *  @param {object} data The state object that is to be loaded
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.stateLoadParams
			 *
			 *  @example
			 *    // Remove a saved filter, so filtering is never loaded
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Disallow state loading by returning false
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
			 */
			"fnStateLoadParams": null,


			/**
			 * Callback that is called when the state has been loaded from the state saving method
			 * and the DataTables settings object has been modified as a result of the loaded state.
			 *  @type function
			 *  @param {object} settings DataTables settings object
			 *  @param {object} data The state object that was loaded
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.stateLoaded
			 *
			 *  @example
			 *    // Show an alert with the filtering value that was saved
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
			 */
			"fnStateLoaded": null,


			/**
			 * Save the table state. This function allows you to define where and how the state
			 * information for the table is stored By default DataTables will use `localStorage`
			 * but you might wish to use a server-side database or cookies.
			 *  @type function
			 *  @member
			 *  @param {object} settings DataTables settings object
			 *  @param {object} data The state object to be saved
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.stateSaveCallback
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
			 */
			"fnStateSaveCallback": function ( settings, data ) {
				try {
					(settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
						'DataTables_'+settings.sInstance+'_'+location.pathname,
						JSON.stringify( data )
					);
				} catch (e) {}
			},


			/**
			 * Callback which allows modification of the state to be saved. Called when the table
			 * has changed state a new state save is required. This method allows modification of
			 * the state saving object prior to actually doing the save, including addition or
			 * other state properties or modification. Note that for plug-in authors, you should
			 * use the `stateSaveParams` event to save parameters for a plug-in.
			 *  @type function
			 *  @param {object} settings DataTables settings object
			 *  @param {object} data The state object to be saved
			 *
			 *  @dtopt Callbacks
			 *  @name DataTable.defaults.stateSaveParams
			 *
			 *  @example
			 *    // Remove a saved filter, so filtering is never saved
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
			 */
			"fnStateSaveParams": null,


			/**
			 * Duration for which the saved state information is considered valid. After this period
			 * has elapsed the state will be returned to the default.
			 * Value is given in seconds.
			 *  @type int
			 *  @default 7200 <i>(2 hours)</i>
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.stateDuration
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
			 */
			"iStateDuration": 7200,


			/**
			 * When enabled DataTables will not make a request to the server for the first
			 * page draw - rather it will use the data already on the page (no sorting etc
			 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
			 * is used to indicate that deferred loading is required, but it is also used
			 * to tell DataTables how many records there are in the full table (allowing
			 * the information element and pagination to be displayed correctly). In the case
			 * where a filtering is applied to the table on initial load, this can be
			 * indicated by giving the parameter as an array, where the first element is
			 * the number of records available after filtering and the second element is the
			 * number of records without filtering (allowing the table information element
			 * to be shown correctly).
			 *  @type int | array
			 *  @default null
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.deferLoading
			 *
			 *  @example
			 *    // 57 records available in the table, no filtering applied
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
			 */
			"iDeferLoading": null,


			/**
			 * Number of rows to display on a single page when using pagination. If
			 * feature enabled (`lengthChange`) then the end user will be able to override
			 * this to a custom setting using a pop-up menu.
			 *  @type int
			 *  @default 10
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.pageLength
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
			 */
			"iDisplayLength": 10,


			/**
			 * Define the starting point for data display when using DataTables with
			 * pagination. Note that this parameter is the number of records, rather than
			 * the page number, so if you have 10 records per page and want to start on
			 * the third page, it should be "20".
			 *  @type int
			 *  @default 0
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.displayStart
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
			 */
			"iDisplayStart": 0,


			/**
			 * By default DataTables allows keyboard navigation of the table (sorting, paging,
			 * and filtering) by adding a `tabindex` attribute to the required elements. This
			 * allows you to tab through the controls and press the enter key to activate them.
			 * The tabindex is default 0, meaning that the tab follows the flow of the document.
			 * You can overrule this using this parameter if you wish. Use a value of -1 to
			 * disable built-in keyboard navigation.
			 *  @type int
			 *  @default 0
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.tabIndex
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
			 */
			"iTabIndex": 0,


			/**
			 * Classes that DataTables assigns to the various components and features
			 * that it adds to the HTML table. This allows classes to be configured
			 * during initialisation in addition to through the static
			 * {@link DataTable.ext.oStdClasses} object).
			 *  @namespace
			 *  @name DataTable.defaults.classes
			 */
			"oClasses": {},


			/**
			 * All strings that DataTables uses in the user interface that it creates
			 * are defined in this object, allowing you to modified them individually or
			 * completely replace them all as required.
			 *  @namespace
			 *  @name DataTable.defaults.language
			 */
			"oLanguage": {
				/**
				 * Strings that are used for WAI-ARIA labels and controls only (these are not
				 * actually visible on the page, but will be read by screenreaders, and thus
				 * must be internationalised as well).
				 *  @namespace
				 *  @name DataTable.defaults.language.aria
				 */
				"oAria": {
					/**
					 * ARIA label that is added to the table headers when the column may be
					 * sorted ascending by activing the column (click or return when focused).
					 * Note that the column header is prefixed to this string.
					 *  @type string
					 *  @default : activate to sort column ascending
					 *
					 *  @dtopt Language
					 *  @name DataTable.defaults.language.aria.sortAscending
					 *
					 *  @example
					 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
					 */
					"sSortAscending": ": activate to sort column ascending",

					/**
					 * ARIA label that is added to the table headers when the column may be
					 * sorted descending by activing the column (click or return when focused).
					 * Note that the column header is prefixed to this string.
					 *  @type string
					 *  @default : activate to sort column ascending
					 *
					 *  @dtopt Language
					 *  @name DataTable.defaults.language.aria.sortDescending
					 *
					 *  @example
					 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
					 */
					"sSortDescending": ": activate to sort column descending"
				},

				/**
				 * Pagination string used by DataTables for the built-in pagination
				 * control types.
				 *  @namespace
				 *  @name DataTable.defaults.language.paginate
				 */
				"oPaginate": {
					/**
					 * Text to use when using the 'full_numbers' type of pagination for the
					 * button to take the user to the first page.
					 *  @type string
					 *  @default First
					 *
					 *  @dtopt Language
					 *  @name DataTable.defaults.language.paginate.first
					 *
					 *  @example
					 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
					 */
					"sFirst": "First",


					/**
					 * Text to use when using the 'full_numbers' type of pagination for the
					 * button to take the user to the last page.
					 *  @type string
					 *  @default Last
					 *
					 *  @dtopt Language
					 *  @name DataTable.defaults.language.paginate.last
					 *
					 *  @example
					 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
					 */
					"sLast": "Last",


					/**
					 * Text to use for the 'next' pagination button (to take the user to the
					 * next page).
					 *  @type string
					 *  @default Next
					 *
					 *  @dtopt Language
					 *  @name DataTable.defaults.language.paginate.next
					 *
					 *  @example
					 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
					 */
					"sNext": "Next",


					/**
					 * Text to use for the 'previous' pagination button (to take the user to
					 * the previous page).
					 *  @type string
					 *  @default Previous
					 *
					 *  @dtopt Language
					 *  @name DataTable.defaults.language.paginate.previous
					 *
					 *  @example
					 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
					 */
					"sPrevious": "Previous"
				},

				/**
				 * This string is shown in preference to `zeroRecords` when the table is
				 * empty of data (regardless of filtering). Note that this is an optional
				 * parameter - if it is not given, the value of `zeroRecords` will be used
				 * instead (either the default or given value).
				 *  @type string
				 *  @default No data available in table
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.emptyTable
				 *
				 *  @example
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
				 */
				"sEmptyTable": "No data available in table",


				/**
				 * This string gives information to the end user about the information
				 * that is current on display on the page. The following tokens can be
				 * used in the string and will be dynamically replaced as the table
				 * display updates. This tokens can be placed anywhere in the string, or
				 * removed as needed by the language requires:
				 *
				 * * `\_START\_` - Display index of the first record on the current page
				 * * `\_END\_` - Display index of the last record on the current page
				 * * `\_TOTAL\_` - Number of records in the table after filtering
				 * * `\_MAX\_` - Number of records in the table without filtering
				 * * `\_PAGE\_` - Current page number
				 * * `\_PAGES\_` - Total number of pages of data in the table
				 *
				 *  @type string
				 *  @default Showing _START_ to _END_ of _TOTAL_ entries
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.info
				 *
				 *  @example
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
				 */
				"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",


				/**
				 * Display information string for when the table is empty. Typically the
				 * format of this string should match `info`.
				 *  @type string
				 *  @default Showing 0 to 0 of 0 entries
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.infoEmpty
				 *
				 *  @example
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
				 */
				"sInfoEmpty": "Showing 0 to 0 of 0 entries",


				/**
				 * When a user filters the information in a table, this string is appended
				 * to the information (`info`) to give an idea of how strong the filtering
				 * is. The variable _MAX_ is dynamically updated.
				 *  @type string
				 *  @default (filtered from _MAX_ total entries)
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.infoFiltered
				 *
				 *  @example
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
				 */
				"sInfoFiltered": "(filtered from _MAX_ total entries)",


				/**
				 * If can be useful to append extra information to the info string at times,
				 * and this variable does exactly that. This information will be appended to
				 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
				 * being used) at all times.
				 *  @type string
				 *  @default <i>Empty string</i>
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.infoPostFix
				 *
				 *  @example
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
				 */
				"sInfoPostFix": "",


				/**
				 * This decimal place operator is a little different from the other
				 * language options since DataTables doesn't output floating point
				 * numbers, so it won't ever use this for display of a number. Rather,
				 * what this parameter does is modify the sort methods of the table so
				 * that numbers which are in a format which has a character other than
				 * a period (`.`) as a decimal place will be sorted numerically.
				 *
				 * Note that numbers with different decimal places cannot be shown in
				 * the same table and still be sortable, the table must be consistent.
				 * However, multiple different tables on the page can use different
				 * decimal place characters.
				 *  @type string
				 *  @default
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.decimal
				 *
				 *  @example
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
				 */
				"sDecimal": "",


				/**
				 * DataTables has a build in number formatter (`formatNumber`) which is
				 * used to format large numbers that are used in the table information.
				 * By default a comma is used, but this can be trivially changed to any
				 * character you wish with this parameter.
				 *  @type string
				 *  @default ,
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.thousands
				 *
				 *  @example
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
				 */
				"sThousands": ",",


				/**
				 * Detail the action that will be taken when the drop down menu for the
				 * pagination length option is changed. The '_MENU_' variable is replaced
				 * with a default select list of 10, 25, 50 and 100, and can be replaced
				 * with a custom select box if required.
				 *  @type string
				 *  @default Show _MENU_ entries
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.lengthMenu
				 *
				 *  @example
				 *    // Language change only
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
				 *
				 *  @example
				 *    // Language and options change
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
				 */
				"sLengthMenu": "Show _MENU_ entries",


				/**
				 * When using Ajax sourced data and during the first draw when DataTables is
				 * gathering the data, this message is shown in an empty row in the table to
				 * indicate to the end user the the data is being loaded. Note that this
				 * parameter is not used when loading data by server-side processing, just
				 * Ajax sourced data with client-side processing.
				 *  @type string
				 *  @default Loading...
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.loadingRecords
				 *
				 *  @example
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
				 */
				"sLoadingRecords": "Loading...",


				/**
				 * Text which is displayed when the table is processing a user action
				 * (usually a sort command or similar).
				 *  @type string
				 *  @default Processing...
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.processing
				 *
				 *  @example
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
				 */
				"sProcessing": "Processing...",


				/**
				 * Details the actions that will be taken when the user types into the
				 * filtering input text box. The variable "_INPUT_", if used in the string,
				 * is replaced with the HTML text box for the filtering input allowing
				 * control over where it appears in the string. If "_INPUT_" is not given
				 * then the input box is appended to the string automatically.
				 *  @type string
				 *  @default Search:
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.search
				 *
				 *  @example
				 *    // Input text box will be appended at the end automatically
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
				 *
				 *  @example
				 *    // Specify where the filter should appear
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
				 */
				"sSearch": "Search:",


				/**
				 * Assign a `placeholder` attribute to the search `input` element
				 *  @type string
				 *  @default
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.searchPlaceholder
				 */
				"sSearchPlaceholder": "",


				/**
				 * All of the language information can be stored in a file on the
				 * server-side, which DataTables will look up if this parameter is passed.
				 * It must store the URL of the language file, which is in a JSON format,
				 * and the object has the same properties as the oLanguage object in the
				 * initialiser object (i.e. the above parameters). Please refer to one of
				 * the example language files to see how this works in action.
				 *  @type string
				 *  @default <i>Empty string - i.e. disabled</i>
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.url
				 *
				 *  @example
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
				 */
				"sUrl": "",


				/**
				 * Text shown inside the table records when the is no information to be
				 * displayed after filtering. `emptyTable` is shown when there is simply no
				 * information in the table at all (regardless of filtering).
				 *  @type string
				 *  @default No matching records found
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.zeroRecords
				 *
				 *  @example
				 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
				 */
				"sZeroRecords": "No matching records found"
			},


			/**
			 * This parameter allows you to have define the global filtering state at
			 * initialisation time. As an object the `search` parameter must be
			 * defined, but all other parameters are optional. When `regex` is true,
			 * the search string will be treated as a regular expression, when false
			 * (default) it will be treated as a straight string. When `smart`
			 * DataTables will use it's smart filtering methods (to word match at
			 * any point in the data), when false this will not be done.
			 *  @namespace
			 *  @extends DataTable.models.oSearch
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.search
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
			 */
			"oSearch": $.extend( {}, DataTable.models.oSearch ),


			/**
			 * __Deprecated__ The functionality provided by this parameter has now been
			 * superseded by that provided through `ajax`, which should be used instead.
			 *
			 * By default DataTables will look for the property `data` (or `aaData` for
			 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
			 * source or for server-side processing - this parameter allows that
			 * property to be changed. You can use Javascript dotted object notation to
			 * get a data source for multiple levels of nesting.
			 *  @type string
			 *  @default data
			 *
			 *  @dtopt Options
			 *  @dtopt Server-side
			 *  @name DataTable.defaults.ajaxDataProp
			 *
			 *  @deprecated 1.10. Please use `ajax` for this functionality now.
			 */
			"sAjaxDataProp": "data",


			/**
			 * __Deprecated__ The functionality provided by this parameter has now been
			 * superseded by that provided through `ajax`, which should be used instead.
			 *
			 * You can instruct DataTables to load data from an external
			 * source using this parameter (use aData if you want to pass data in you
			 * already have). Simply provide a url a JSON object can be obtained from.
			 *  @type string
			 *  @default null
			 *
			 *  @dtopt Options
			 *  @dtopt Server-side
			 *  @name DataTable.defaults.ajaxSource
			 *
			 *  @deprecated 1.10. Please use `ajax` for this functionality now.
			 */
			"sAjaxSource": null,


			/**
			 * This initialisation variable allows you to specify exactly where in the
			 * DOM you want DataTables to inject the various controls it adds to the page
			 * (for example you might want the pagination controls at the top of the
			 * table). DIV elements (with or without a custom class) can also be added to
			 * aid styling. The follow syntax is used:
			 *   <ul>
			 *     <li>The following options are allowed:
			 *       <ul>
			 *         <li>'l' - Length changing</li>
			 *         <li>'f' - Filtering input</li>
			 *         <li>'t' - The table!</li>
			 *         <li>'i' - Information</li>
			 *         <li>'p' - Pagination</li>
			 *         <li>'r' - pRocessing</li>
			 *       </ul>
			 *     </li>
			 *     <li>The following constants are allowed:
			 *       <ul>
			 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
			 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
			 *       </ul>
			 *     </li>
			 *     <li>The following syntax is expected:
			 *       <ul>
			 *         <li>'&lt;' and '&gt;' - div elements</li>
			 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
			 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
			 *       </ul>
			 *     </li>
			 *     <li>Examples:
			 *       <ul>
			 *         <li>'&lt;"wrapper"flipt&gt;'</li>
			 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
			 *       </ul>
			 *     </li>
			 *   </ul>
			 *  @type string
			 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
			 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.dom
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
			 */
			"sDom": "lfrtip",


			/**
			 * Search delay option. This will throttle full table searches that use the
			 * DataTables provided search input element (it does not effect calls to
			 * `dt-api search()`, providing a delay before the search is made.
			 *  @type integer
			 *  @default 0
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.searchDelay
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchDelay": 200
		 *      } );
		 *    } )
			 */
			"searchDelay": null,


			/**
			 * DataTables features four different built-in options for the buttons to
			 * display for pagination control:
			 *
			 * * `simple` - 'Previous' and 'Next' buttons only
			 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
			 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
			 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus
			 *   page numbers
			 *
			 * Further methods can be added using {@link DataTable.ext.oPagination}.
			 *  @type string
			 *  @default simple_numbers
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.pagingType
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
			 */
			"sPaginationType": "simple_numbers",


			/**
			 * Enable horizontal scrolling. When a table is too wide to fit into a
			 * certain layout, or you have a large number of columns in the table, you
			 * can enable x-scrolling to show the table in a viewport, which can be
			 * scrolled. This property can be `true` which will allow the table to
			 * scroll horizontally when needed, or any CSS unit, or a number (in which
			 * case it will be treated as a pixel measurement). Setting as simply `true`
			 * is recommended.
			 *  @type boolean|string
			 *  @default <i>blank string - i.e. disabled</i>
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.scrollX
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
			 */
			"sScrollX": "",


			/**
			 * This property can be used to force a DataTable to use more width than it
			 * might otherwise do when x-scrolling is enabled. For example if you have a
			 * table which requires to be well spaced, this parameter is useful for
			 * "over-sizing" the table, and thus forcing scrolling. This property can by
			 * any CSS unit, or a number (in which case it will be treated as a pixel
			 * measurement).
			 *  @type string
			 *  @default <i>blank string - i.e. disabled</i>
			 *
			 *  @dtopt Options
			 *  @name DataTable.defaults.scrollXInner
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
			 */
			"sScrollXInner": "",


			/**
			 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
			 * to the given height, and enable scrolling for any data which overflows the
			 * current viewport. This can be used as an alternative to paging to display
			 * a lot of data in a small area (although paging and scrolling can both be
			 * enabled at the same time). This property can be any CSS unit, or a number
			 * (in which case it will be treated as a pixel measurement).
			 *  @type string
			 *  @default <i>blank string - i.e. disabled</i>
			 *
			 *  @dtopt Features
			 *  @name DataTable.defaults.scrollY
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
			 */
			"sScrollY": "",


			/**
			 * __Deprecated__ The functionality provided by this parameter has now been
			 * superseded by that provided through `ajax`, which should be used instead.
			 *
			 * Set the HTTP method that is used to make the Ajax call for server-side
			 * processing or Ajax sourced data.
			 *  @type string
			 *  @default GET
			 *
			 *  @dtopt Options
			 *  @dtopt Server-side
			 *  @name DataTable.defaults.serverMethod
			 *
			 *  @deprecated 1.10. Please use `ajax` for this functionality now.
			 */
			"sServerMethod": "GET",


			/**
			 * DataTables makes use of renderers when displaying HTML elements for
			 * a table. These renderers can be added or modified by plug-ins to
			 * generate suitable mark-up for a site. For example the Bootstrap
			 * integration plug-in for DataTables uses a paging button renderer to
			 * display pagination buttons in the mark-up required by Bootstrap.
			 *
			 * For further information about the renderers available see
			 * DataTable.ext.renderer
			 *  @type string|object
			 *  @default null
			 *
			 *  @name DataTable.defaults.renderer
			 *
			 */
			"renderer": null,


			/**
			 * Set the data property name that DataTables should use to get a row's id
			 * to set as the `id` property in the node.
			 *  @type string
			 *  @default DT_RowId
			 *
			 *  @name DataTable.defaults.rowId
			 */
			"rowId": "DT_RowId"
		};

		_fnHungarianMap( DataTable.defaults );



		/*
		 * Developer note - See note in model.defaults.js about the use of Hungarian
		 * notation and camel case.
		 */

		/**
		 * Column options that can be given to DataTables at initialisation time.
		 *  @namespace
		 */
		DataTable.defaults.column = {
			/**
			 * Define which column(s) an order will occur on for this column. This
			 * allows a column's ordering to take multiple columns into account when
			 * doing a sort or use the data from a different column. For example first
			 * name / last name columns make sense to do a multi-column sort over the
			 * two columns.
			 *  @type array|int
			 *  @default null <i>Takes the value of the column index automatically</i>
			 *
			 *  @name DataTable.defaults.column.orderData
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
			 */
			"aDataSort": null,
			"iDataSort": -1,


			/**
			 * You can control the default ordering direction, and even alter the
			 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
			 * using this parameter.
			 *  @type array
			 *  @default [ 'asc', 'desc' ]
			 *
			 *  @name DataTable.defaults.column.orderSequence
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
			 */
			"asSorting": [ 'asc', 'desc' ],


			/**
			 * Enable or disable filtering on the data in this column.
			 *  @type boolean
			 *  @default true
			 *
			 *  @name DataTable.defaults.column.searchable
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
			 */
			"bSearchable": true,


			/**
			 * Enable or disable ordering on this column.
			 *  @type boolean
			 *  @default true
			 *
			 *  @name DataTable.defaults.column.orderable
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
			 */
			"bSortable": true,


			/**
			 * Enable or disable the display of this column.
			 *  @type boolean
			 *  @default true
			 *
			 *  @name DataTable.defaults.column.visible
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
			 */
			"bVisible": true,


			/**
			 * Developer definable function that is called whenever a cell is created (Ajax source,
			 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
			 * allowing you to modify the DOM element (add background colour for example) when the
			 * element is available.
			 *  @type function
			 *  @param {element} td The TD node that has been created
			 *  @param {*} cellData The Data for the cell
			 *  @param {array|object} rowData The data for the whole row
			 *  @param {int} row The row index for the aoData data store
			 *  @param {int} col The column index for aoColumns
			 *
			 *  @name DataTable.defaults.column.createdCell
			 *  @dtopt Columns
			 *
			 *  @example
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
			 */
			"fnCreatedCell": null,


			/**
			 * This parameter has been replaced by `data` in DataTables to ensure naming
			 * consistency. `dataProp` can still be used, as there is backwards
			 * compatibility in DataTables for this option, but it is strongly
			 * recommended that you use `data` in preference to `dataProp`.
			 *  @name DataTable.defaults.column.dataProp
			 */


			/**
			 * This property can be used to read data from any data source property,
			 * including deeply nested objects / properties. `data` can be given in a
			 * number of different ways which effect its behaviour:
			 *
			 * * `integer` - treated as an array index for the data source. This is the
			 *   default that DataTables uses (incrementally increased for each column).
			 * * `string` - read an object property from the data source. There are
			 *   three 'special' options that can be used in the string to alter how
			 *   DataTables reads the data from the source object:
			 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
			 *      Javascript to read from nested objects, so to can the options
			 *      specified in `data`. For example: `browser.version` or
			 *      `browser.name`. If your object parameter name contains a period, use
			 *      `\\` to escape it - i.e. `first\\.name`.
			 *    * `[]` - Array notation. DataTables can automatically combine data
			 *      from and array source, joining the data with the characters provided
			 *      between the two brackets. For example: `name[, ]` would provide a
			 *      comma-space separated list from the source array. If no characters
			 *      are provided between the brackets, the original array source is
			 *      returned.
			 *    * `()` - Function notation. Adding `()` to the end of a parameter will
			 *      execute a function of the name given. For example: `browser()` for a
			 *      simple function on the data source, `browser.version()` for a
			 *      function in a nested property or even `browser().version` to get an
			 *      object property if the function called returns an object. Note that
			 *      function notation is recommended for use in `render` rather than
			 *      `data` as it is much simpler to use as a renderer.
			 * * `null` - use the original data source for the row rather than plucking
			 *   data directly from it. This action has effects on two other
			 *   initialisation options:
			 *    * `defaultContent` - When null is given as the `data` option and
			 *      `defaultContent` is specified for the column, the value defined by
			 *      `defaultContent` will be used for the cell.
			 *    * `render` - When null is used for the `data` option and the `render`
			 *      option is specified for the column, the whole data source for the
			 *      row is used for the renderer.
			 * * `function` - the function given will be executed whenever DataTables
			 *   needs to set or get the data for a cell in the column. The function
			 *   takes three parameters:
			 *    * Parameters:
			 *      * `{array|object}` The data source for the row
			 *      * `{string}` The type call data requested - this will be 'set' when
			 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
			 *        when gathering data. Note that when `undefined` is given for the
			 *        type DataTables expects to get the raw data for the object back<
			 *      * `{*}` Data to set when the second parameter is 'set'.
			 *    * Return:
			 *      * The return value from the function is not required when 'set' is
			 *        the type of call, but otherwise the return is what will be used
			 *        for the data requested.
			 *
			 * Note that `data` is a getter and setter option. If you just require
			 * formatting of data for output, you will likely want to use `render` which
			 * is simply a getter and thus simpler to use.
			 *
			 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
			 * name change reflects the flexibility of this property and is consistent
			 * with the naming of mRender. If 'mDataProp' is given, then it will still
			 * be used by DataTables, as it automatically maps the old name to the new
			 * if required.
			 *
			 *  @type string|int|function|null
			 *  @default null <i>Use automatically calculated column index</i>
			 *
			 *  @name DataTable.defaults.column.data
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Read table data from objects
			 *    // JSON structure for each row:
			 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Read information from deeply nested objects
			 *    // JSON structure for each row:
			 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "platform.details.0" },
		 *          { "data": "platform.details.1" }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using `data` as a function to provide different information for
			 *    // sorting, filtering and display. In this case, currency (price)
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using default content
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using array notation - outputting a list from an array
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
			 *
			 */
			"mData": null,


			/**
			 * This property is the rendering partner to `data` and it is suggested that
			 * when you want to manipulate data for display (including filtering,
			 * sorting etc) without altering the underlying data for the table, use this
			 * property. `render` can be considered to be the the read only companion to
			 * `data` which is read / write (then as such more complex). Like `data`
			 * this option can be given in a number of different ways to effect its
			 * behaviour:
			 *
			 * * `integer` - treated as an array index for the data source. This is the
			 *   default that DataTables uses (incrementally increased for each column).
			 * * `string` - read an object property from the data source. There are
			 *   three 'special' options that can be used in the string to alter how
			 *   DataTables reads the data from the source object:
			 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
			 *      Javascript to read from nested objects, so to can the options
			 *      specified in `data`. For example: `browser.version` or
			 *      `browser.name`. If your object parameter name contains a period, use
			 *      `\\` to escape it - i.e. `first\\.name`.
			 *    * `[]` - Array notation. DataTables can automatically combine data
			 *      from and array source, joining the data with the characters provided
			 *      between the two brackets. For example: `name[, ]` would provide a
			 *      comma-space separated list from the source array. If no characters
			 *      are provided between the brackets, the original array source is
			 *      returned.
			 *    * `()` - Function notation. Adding `()` to the end of a parameter will
			 *      execute a function of the name given. For example: `browser()` for a
			 *      simple function on the data source, `browser.version()` for a
			 *      function in a nested property or even `browser().version` to get an
			 *      object property if the function called returns an object.
			 * * `object` - use different data for the different data types requested by
			 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
			 *   of the object is the data type the property refers to and the value can
			 *   defined using an integer, string or function using the same rules as
			 *   `render` normally does. Note that an `_` option _must_ be specified.
			 *   This is the default value to use if you haven't specified a value for
			 *   the data type requested by DataTables.
			 * * `function` - the function given will be executed whenever DataTables
			 *   needs to set or get the data for a cell in the column. The function
			 *   takes three parameters:
			 *    * Parameters:
			 *      * {array|object} The data source for the row (based on `data`)
			 *      * {string} The type call data requested - this will be 'filter',
			 *        'display', 'type' or 'sort'.
			 *      * {array|object} The full data source for the row (not based on
			 *        `data`)
			 *    * Return:
			 *      * The return value from the function is what will be used for the
			 *        data requested.
			 *
			 *  @type string|int|function|object|null
			 *  @default null Use the data source value.
			 *
			 *  @name DataTable.defaults.column.render
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Create a comma separated list from an array of objects
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Execute a function to obtain data
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // As an object, extracting different data for the different types
			 *    // This would be used with a data source such as:
			 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
			 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
			 *    // (which has both forms) is used for filtering for if a user inputs either format, while
			 *    // the formatted phone number is the one that is shown in the table.
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Use as a function to create a link from the data source
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
			 */
			"mRender": null,


			/**
			 * Change the cell type created for the column - either TD cells or TH cells. This
			 * can be useful as TH cells have semantic meaning in the table body, allowing them
			 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
			 *  @type string
			 *  @default td
			 *
			 *  @name DataTable.defaults.column.cellType
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Make the first column use TH cells
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
			 */
			"sCellType": "td",


			/**
			 * Class to give to each cell in this column.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *
			 *  @name DataTable.defaults.column.class
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
			 */
			"sClass": "",

			/**
			 * When DataTables calculates the column widths to assign to each column,
			 * it finds the longest string in each column and then constructs a
			 * temporary table and reads the widths from that. The problem with this
			 * is that "mmm" is much wider then "iiii", but the latter is a longer
			 * string - thus the calculation can go wrong (doing it properly and putting
			 * it into an DOM object and measuring that is horribly(!) slow). Thus as
			 * a "work around" we provide this option. It will append its value to the
			 * text that is found to be the longest string for the column - i.e. padding.
			 * Generally you shouldn't need this!
			 *  @type string
			 *  @default <i>Empty string<i>
			 *
			 *  @name DataTable.defaults.column.contentPadding
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
			 */
			"sContentPadding": "",


			/**
			 * Allows a default value to be given for a column's data, and will be used
			 * whenever a null data source is encountered (this can be because `data`
			 * is set to null, or because the data source itself is null).
			 *  @type string
			 *  @default null
			 *
			 *  @name DataTable.defaults.column.defaultContent
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
			 */
			"sDefaultContent": null,


			/**
			 * This parameter is only used in DataTables' server-side processing. It can
			 * be exceptionally useful to know what columns are being displayed on the
			 * client side, and to map these to database fields. When defined, the names
			 * also allow DataTables to reorder information from the server if it comes
			 * back in an unexpected order (i.e. if you switch your columns around on the
			 * client-side, your server-side code does not also need updating).
			 *  @type string
			 *  @default <i>Empty string</i>
			 *
			 *  @name DataTable.defaults.column.name
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
			 */
			"sName": "",


			/**
			 * Defines a data source type for the ordering which can be used to read
			 * real-time information from the table (updating the internally cached
			 * version) prior to ordering. This allows ordering to occur on user
			 * editable elements such as form inputs.
			 *  @type string
			 *  @default std
			 *
			 *  @name DataTable.defaults.column.orderDataType
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
			 */
			"sSortDataType": "std",


			/**
			 * The title of this column.
			 *  @type string
			 *  @default null <i>Derived from the 'TH' value for this column in the
			 *    original HTML table.</i>
			 *
			 *  @name DataTable.defaults.column.title
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
			 */
			"sTitle": null,


			/**
			 * The type allows you to specify how the data for this column will be
			 * ordered. Four types (string, numeric, date and html (which will strip
			 * HTML tags before ordering)) are currently available. Note that only date
			 * formats understood by Javascript's Date() object will be accepted as type
			 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
			 * 'numeric', 'date' or 'html' (by default). Further types can be adding
			 * through plug-ins.
			 *  @type string
			 *  @default null <i>Auto-detected from raw data</i>
			 *
			 *  @name DataTable.defaults.column.type
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
			 */
			"sType": null,


			/**
			 * Defining the width of the column, this parameter may take any CSS value
			 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
			 * been given a specific width through this interface ensuring that the table
			 * remains readable.
			 *  @type string
			 *  @default null <i>Automatic</i>
			 *
			 *  @name DataTable.defaults.column.width
			 *  @dtopt Columns
			 *
			 *  @example
			 *    // Using `columnDefs`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
			 *
			 *  @example
			 *    // Using `columns`
			 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
			 */
			"sWidth": null
		};

		_fnHungarianMap( DataTable.defaults.column );



		/**
		 * DataTables settings object - this holds all the information needed for a
		 * given table, including configuration, data and current application of the
		 * table options. DataTables does not have a single instance for each DataTable
		 * with the settings attached to that instance, but rather instances of the
		 * DataTable "class" are created on-the-fly as needed (typically by a
		 * $().dataTable() call) and the settings object is then applied to that
		 * instance.
		 *
		 * Note that this object is related to {@link DataTable.defaults} but this
		 * one is the internal data store for DataTables's cache of columns. It should
		 * NOT be manipulated outside of DataTables. Any configuration should be done
		 * through the initialisation options.
		 *  @namespace
		 *  @todo Really should attach the settings object to individual instances so we
		 *    don't need to create new instances on each $().dataTable() call (if the
		 *    table already exists). It would also save passing oSettings around and
		 *    into every single function. However, this is a very significant
		 *    architecture change for DataTables and will almost certainly break
		 *    backwards compatibility with older installations. This is something that
		 *    will be done in 2.0.
		 */
		DataTable.models.oSettings = {
			/**
			 * Primary features of DataTables and their enablement state.
			 *  @namespace
			 */
			"oFeatures": {

				/**
				 * Flag to say if DataTables should automatically try to calculate the
				 * optimum table and columns widths (true) or not (false).
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bAutoWidth": null,

				/**
				 * Delay the creation of TR and TD elements until they are actually
				 * needed by a driven page draw. This can give a significant speed
				 * increase for Ajax source and Javascript source data, but makes no
				 * difference at all fro DOM and server-side processing tables.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bDeferRender": null,

				/**
				 * Enable filtering on the table or not. Note that if this is disabled
				 * then there is no filtering at all on the table, including fnFilter.
				 * To just remove the filtering input use sDom and remove the 'f' option.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bFilter": null,

				/**
				 * Table information element (the 'Showing x of y records' div) enable
				 * flag.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bInfo": null,

				/**
				 * Present a user control allowing the end user to change the page size
				 * when pagination is enabled.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bLengthChange": null,

				/**
				 * Pagination enabled or not. Note that if this is disabled then length
				 * changing must also be disabled.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bPaginate": null,

				/**
				 * Processing indicator enable flag whenever DataTables is enacting a
				 * user request - typically an Ajax request for server-side processing.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bProcessing": null,

				/**
				 * Server-side processing enabled flag - when enabled DataTables will
				 * get all data from the server for every draw - there is no filtering,
				 * sorting or paging done on the client-side.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bServerSide": null,

				/**
				 * Sorting enablement flag.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bSort": null,

				/**
				 * Multi-column sorting
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bSortMulti": null,

				/**
				 * Apply a class to the columns which are being sorted to provide a
				 * visual highlight or not. This can slow things down when enabled since
				 * there is a lot of DOM interaction.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bSortClasses": null,

				/**
				 * State saving enablement flag.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bStateSave": null
			},


			/**
			 * Scrolling settings for a table.
			 *  @namespace
			 */
			"oScroll": {
				/**
				 * When the table is shorter in height than sScrollY, collapse the
				 * table container down to the height of the table (when true).
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type boolean
				 */
				"bCollapse": null,

				/**
				 * Width of the scrollbar for the web-browser's platform. Calculated
				 * during table initialisation.
				 *  @type int
				 *  @default 0
				 */
				"iBarWidth": 0,

				/**
				 * Viewport width for horizontal scrolling. Horizontal scrolling is
				 * disabled if an empty string.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type string
				 */
				"sX": null,

				/**
				 * Width to expand the table to when using x-scrolling. Typically you
				 * should not need to use this.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type string
				 *  @deprecated
				 */
				"sXInner": null,

				/**
				 * Viewport height for vertical scrolling. Vertical scrolling is disabled
				 * if an empty string.
				 * Note that this parameter will be set by the initialisation routine. To
				 * set a default use {@link DataTable.defaults}.
				 *  @type string
				 */
				"sY": null
			},

			/**
			 * Language information for the table.
			 *  @namespace
			 *  @extends DataTable.defaults.oLanguage
			 */
			"oLanguage": {
				/**
				 * Information callback function. See
				 * {@link DataTable.defaults.fnInfoCallback}
				 *  @type function
				 *  @default null
				 */
				"fnInfoCallback": null
			},

			/**
			 * Browser support parameters
			 *  @namespace
			 */
			"oBrowser": {
				/**
				 * Indicate if the browser incorrectly calculates width:100% inside a
				 * scrolling element (IE6/7)
				 *  @type boolean
				 *  @default false
				 */
				"bScrollOversize": false,

				/**
				 * Determine if the vertical scrollbar is on the right or left of the
				 * scrolling container - needed for rtl language layout, although not
				 * all browsers move the scrollbar (Safari).
				 *  @type boolean
				 *  @default false
				 */
				"bScrollbarLeft": false,

				/**
				 * Flag for if `getBoundingClientRect` is fully supported or not
				 *  @type boolean
				 *  @default false
				 */
				"bBounding": false,

				/**
				 * Browser scrollbar width
				 *  @type integer
				 *  @default 0
				 */
				"barWidth": 0
			},


			"ajax": null,


			/**
			 * Array referencing the nodes which are used for the features. The
			 * parameters of this object match what is allowed by sDom - i.e.
			 *   <ul>
			 *     <li>'l' - Length changing</li>
			 *     <li>'f' - Filtering input</li>
			 *     <li>'t' - The table!</li>
			 *     <li>'i' - Information</li>
			 *     <li>'p' - Pagination</li>
			 *     <li>'r' - pRocessing</li>
			 *   </ul>
			 *  @type array
			 *  @default []
			 */
			"aanFeatures": [],

			/**
			 * Store data information - see {@link DataTable.models.oRow} for detailed
			 * information.
			 *  @type array
			 *  @default []
			 */
			"aoData": [],

			/**
			 * Array of indexes which are in the current display (after filtering etc)
			 *  @type array
			 *  @default []
			 */
			"aiDisplay": [],

			/**
			 * Array of indexes for display - no filtering
			 *  @type array
			 *  @default []
			 */
			"aiDisplayMaster": [],

			/**
			 * Map of row ids to data indexes
			 *  @type object
			 *  @default {}
			 */
			"aIds": {},

			/**
			 * Store information about each column that is in use
			 *  @type array
			 *  @default []
			 */
			"aoColumns": [],

			/**
			 * Store information about the table's header
			 *  @type array
			 *  @default []
			 */
			"aoHeader": [],

			/**
			 * Store information about the table's footer
			 *  @type array
			 *  @default []
			 */
			"aoFooter": [],

			/**
			 * Store the applied global search information in case we want to force a
			 * research or compare the old search to a new one.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @namespace
			 *  @extends DataTable.models.oSearch
			 */
			"oPreviousSearch": {},

			/**
			 * Store the applied search for each column - see
			 * {@link DataTable.models.oSearch} for the format that is used for the
			 * filtering information for each column.
			 *  @type array
			 *  @default []
			 */
			"aoPreSearchCols": [],

			/**
			 * Sorting that is applied to the table. Note that the inner arrays are
			 * used in the following manner:
			 * <ul>
			 *   <li>Index 0 - column number</li>
			 *   <li>Index 1 - current sorting direction</li>
			 * </ul>
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type array
			 *  @todo These inner arrays should really be objects
			 */
			"aaSorting": null,

			/**
			 * Sorting that is always applied to the table (i.e. prefixed in front of
			 * aaSorting).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type array
			 *  @default []
			 */
			"aaSortingFixed": [],

			/**
			 * Classes to use for the striping of a table.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type array
			 *  @default []
			 */
			"asStripeClasses": null,

			/**
			 * If restoring a table - we should restore its striping classes as well
			 *  @type array
			 *  @default []
			 */
			"asDestroyStripes": [],

			/**
			 * If restoring a table - we should restore its width
			 *  @type int
			 *  @default 0
			 */
			"sDestroyWidth": 0,

			/**
			 * Callback functions array for every time a row is inserted (i.e. on a draw).
			 *  @type array
			 *  @default []
			 */
			"aoRowCallback": [],

			/**
			 * Callback functions for the header on each draw.
			 *  @type array
			 *  @default []
			 */
			"aoHeaderCallback": [],

			/**
			 * Callback function for the footer on each draw.
			 *  @type array
			 *  @default []
			 */
			"aoFooterCallback": [],

			/**
			 * Array of callback functions for draw callback functions
			 *  @type array
			 *  @default []
			 */
			"aoDrawCallback": [],

			/**
			 * Array of callback functions for row created function
			 *  @type array
			 *  @default []
			 */
			"aoRowCreatedCallback": [],

			/**
			 * Callback functions for just before the table is redrawn. A return of
			 * false will be used to cancel the draw.
			 *  @type array
			 *  @default []
			 */
			"aoPreDrawCallback": [],

			/**
			 * Callback functions for when the table has been initialised.
			 *  @type array
			 *  @default []
			 */
			"aoInitComplete": [],


			/**
			 * Callbacks for modifying the settings to be stored for state saving, prior to
			 * saving state.
			 *  @type array
			 *  @default []
			 */
			"aoStateSaveParams": [],

			/**
			 * Callbacks for modifying the settings that have been stored for state saving
			 * prior to using the stored values to restore the state.
			 *  @type array
			 *  @default []
			 */
			"aoStateLoadParams": [],

			/**
			 * Callbacks for operating on the settings object once the saved state has been
			 * loaded
			 *  @type array
			 *  @default []
			 */
			"aoStateLoaded": [],

			/**
			 * Cache the table ID for quick access
			 *  @type string
			 *  @default <i>Empty string</i>
			 */
			"sTableId": "",

			/**
			 * The TABLE node for the main table
			 *  @type node
			 *  @default null
			 */
			"nTable": null,

			/**
			 * Permanent ref to the thead element
			 *  @type node
			 *  @default null
			 */
			"nTHead": null,

			/**
			 * Permanent ref to the tfoot element - if it exists
			 *  @type node
			 *  @default null
			 */
			"nTFoot": null,

			/**
			 * Permanent ref to the tbody element
			 *  @type node
			 *  @default null
			 */
			"nTBody": null,

			/**
			 * Cache the wrapper node (contains all DataTables controlled elements)
			 *  @type node
			 *  @default null
			 */
			"nTableWrapper": null,

			/**
			 * Indicate if when using server-side processing the loading of data
			 * should be deferred until the second draw.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 *  @default false
			 */
			"bDeferLoading": false,

			/**
			 * Indicate if all required information has been read in
			 *  @type boolean
			 *  @default false
			 */
			"bInitialised": false,

			/**
			 * Information about open rows. Each object in the array has the parameters
			 * 'nTr' and 'nParent'
			 *  @type array
			 *  @default []
			 */
			"aoOpenRows": [],

			/**
			 * Dictate the positioning of DataTables' control elements - see
			 * {@link DataTable.model.oInit.sDom}.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @default null
			 */
			"sDom": null,

			/**
			 * Search delay (in mS)
			 *  @type integer
			 *  @default null
			 */
			"searchDelay": null,

			/**
			 * Which type of pagination should be used.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @default two_button
			 */
			"sPaginationType": "two_button",

			/**
			 * The state duration (for `stateSave`) in seconds.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type int
			 *  @default 0
			 */
			"iStateDuration": 0,

			/**
			 * Array of callback functions for state saving. Each array element is an
			 * object with the following parameters:
			 *   <ul>
			 *     <li>function:fn - function to call. Takes two parameters, oSettings
			 *       and the JSON string to save that has been thus far created. Returns
			 *       a JSON string to be inserted into a json object
			 *       (i.e. '"param": [ 0, 1, 2]')</li>
			 *     <li>string:sName - name of callback</li>
			 *   </ul>
			 *  @type array
			 *  @default []
			 */
			"aoStateSave": [],

			/**
			 * Array of callback functions for state loading. Each array element is an
			 * object with the following parameters:
			 *   <ul>
			 *     <li>function:fn - function to call. Takes two parameters, oSettings
			 *       and the object stored. May return false to cancel state loading</li>
			 *     <li>string:sName - name of callback</li>
			 *   </ul>
			 *  @type array
			 *  @default []
			 */
			"aoStateLoad": [],

			/**
			 * State that was saved. Useful for back reference
			 *  @type object
			 *  @default null
			 */
			"oSavedState": null,

			/**
			 * State that was loaded. Useful for back reference
			 *  @type object
			 *  @default null
			 */
			"oLoadedState": null,

			/**
			 * Source url for AJAX data for the table.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @default null
			 */
			"sAjaxSource": null,

			/**
			 * Property from a given object from which to read the table data from. This
			 * can be an empty string (when not server-side processing), in which case
			 * it is  assumed an an array is given directly.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sAjaxDataProp": null,

			/**
			 * Note if draw should be blocked while getting data
			 *  @type boolean
			 *  @default true
			 */
			"bAjaxDataGet": true,

			/**
			 * The last jQuery XHR object that was used for server-side data gathering.
			 * This can be used for working with the XHR information in one of the
			 * callbacks
			 *  @type object
			 *  @default null
			 */
			"jqXHR": null,

			/**
			 * JSON returned from the server in the last Ajax request
			 *  @type object
			 *  @default undefined
			 */
			"json": undefined,

			/**
			 * Data submitted as part of the last Ajax request
			 *  @type object
			 *  @default undefined
			 */
			"oAjaxData": undefined,

			/**
			 * Function to get the server-side data.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type function
			 */
			"fnServerData": null,

			/**
			 * Functions which are called prior to sending an Ajax request so extra
			 * parameters can easily be sent to the server
			 *  @type array
			 *  @default []
			 */
			"aoServerParams": [],

			/**
			 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
			 * required).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sServerMethod": null,

			/**
			 * Format numbers for display.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type function
			 */
			"fnFormatNumber": null,

			/**
			 * List of options that can be used for the user selectable length menu.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type array
			 *  @default []
			 */
			"aLengthMenu": null,

			/**
			 * Counter for the draws that the table does. Also used as a tracker for
			 * server-side processing
			 *  @type int
			 *  @default 0
			 */
			"iDraw": 0,

			/**
			 * Indicate if a redraw is being done - useful for Ajax
			 *  @type boolean
			 *  @default false
			 */
			"bDrawing": false,

			/**
			 * Draw index (iDraw) of the last error when parsing the returned data
			 *  @type int
			 *  @default -1
			 */
			"iDrawError": -1,

			/**
			 * Paging display length
			 *  @type int
			 *  @default 10
			 */
			"_iDisplayLength": 10,

			/**
			 * Paging start point - aiDisplay index
			 *  @type int
			 *  @default 0
			 */
			"_iDisplayStart": 0,

			/**
			 * Server-side processing - number of records in the result set
			 * (i.e. before filtering), Use fnRecordsTotal rather than
			 * this property to get the value of the number of records, regardless of
			 * the server-side processing setting.
			 *  @type int
			 *  @default 0
			 *  @private
			 */
			"_iRecordsTotal": 0,

			/**
			 * Server-side processing - number of records in the current display set
			 * (i.e. after filtering). Use fnRecordsDisplay rather than
			 * this property to get the value of the number of records, regardless of
			 * the server-side processing setting.
			 *  @type boolean
			 *  @default 0
			 *  @private
			 */
			"_iRecordsDisplay": 0,

			/**
			 * Flag to indicate if jQuery UI marking and classes should be used.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bJUI": null,

			/**
			 * The classes to use for the table
			 *  @type object
			 *  @default {}
			 */
			"oClasses": {},

			/**
			 * Flag attached to the settings object so you can check in the draw
			 * callback if filtering has been done in the draw. Deprecated in favour of
			 * events.
			 *  @type boolean
			 *  @default false
			 *  @deprecated
			 */
			"bFiltered": false,

			/**
			 * Flag attached to the settings object so you can check in the draw
			 * callback if sorting has been done in the draw. Deprecated in favour of
			 * events.
			 *  @type boolean
			 *  @default false
			 *  @deprecated
			 */
			"bSorted": false,

			/**
			 * Indicate that if multiple rows are in the header and there is more than
			 * one unique cell per column, if the top one (true) or bottom one (false)
			 * should be used for sorting / title by DataTables.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortCellsTop": null,

			/**
			 * Initialisation object that is used for the table
			 *  @type object
			 *  @default null
			 */
			"oInit": null,

			/**
			 * Destroy callback functions - for plug-ins to attach themselves to the
			 * destroy so they can clean up markup and events.
			 *  @type array
			 *  @default []
			 */
			"aoDestroyCallback": [],


			/**
			 * Get the number of records in the current record set, before filtering
			 *  @type function
			 */
			"fnRecordsTotal": function ()
			{
				return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsTotal * 1 :
					this.aiDisplayMaster.length;
			},

			/**
			 * Get the number of records in the current record set, after filtering
			 *  @type function
			 */
			"fnRecordsDisplay": function ()
			{
				return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsDisplay * 1 :
					this.aiDisplay.length;
			},

			/**
			 * Get the display end point - aiDisplay index
			 *  @type function
			 */
			"fnDisplayEnd": function ()
			{
				var
					len      = this._iDisplayLength,
					start    = this._iDisplayStart,
					calc     = start + len,
					records  = this.aiDisplay.length,
					features = this.oFeatures,
					paginate = features.bPaginate;

				if ( features.bServerSide ) {
					return paginate === false || len === -1 ?
					start + records :
						Math.min( start+len, this._iRecordsDisplay );
				}
				else {
					return ! paginate || calc>records || len===-1 ?
						records :
						calc;
				}
			},

			/**
			 * The DataTables object for this table
			 *  @type object
			 *  @default null
			 */
			"oInstance": null,

			/**
			 * Unique identifier for each instance of the DataTables object. If there
			 * is an ID on the table node, then it takes that value, otherwise an
			 * incrementing internal counter is used.
			 *  @type string
			 *  @default null
			 */
			"sInstance": null,

			/**
			 * tabindex attribute value that is added to DataTables control elements, allowing
			 * keyboard navigation of the table and its controls.
			 */
			"iTabIndex": 0,

			/**
			 * DIV container for the footer scrolling table if scrolling
			 */
			"nScrollHead": null,

			/**
			 * DIV container for the footer scrolling table if scrolling
			 */
			"nScrollFoot": null,

			/**
			 * Last applied sort
			 *  @type array
			 *  @default []
			 */
			"aLastSort": [],

			/**
			 * Stored plug-in instances
			 *  @type object
			 *  @default {}
			 */
			"oPlugins": {},

			/**
			 * Function used to get a row's id from the row's data
			 *  @type function
			 *  @default null
			 */
			"rowIdFn": null,

			/**
			 * Data location where to store a row's id
			 *  @type string
			 *  @default null
			 */
			"rowId": null
		};

		/**
		 * Extension object for DataTables that is used to provide all extension
		 * options.
		 *
		 * Note that the `DataTable.ext` object is available through
		 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
		 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
		 *  @namespace
		 *  @extends DataTable.models.ext
		 */


		/**
		 * DataTables extensions
		 *
		 * This namespace acts as a collection area for plug-ins that can be used to
		 * extend DataTables capabilities. Indeed many of the build in methods
		 * use this method to provide their own capabilities (sorting methods for
		 * example).
		 *
		 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
		 * reasons
		 *
		 *  @namespace
		 */
		DataTable.ext = _ext = {
			/**
			 * Buttons. For use with the Buttons extension for DataTables. This is
			 * defined here so other extensions can define buttons regardless of load
			 * order. It is _not_ used by DataTables core.
			 *
			 *  @type object
			 *  @default {}
			 */
			buttons: {},


			/**
			 * Element class names
			 *
			 *  @type object
			 *  @default {}
			 */
			classes: {},


			/**
			 * Error reporting.
			 *
			 * How should DataTables report an error. Can take the value 'alert',
			 * 'throw', 'none' or a function.
			 *
			 *  @type string|function
			 *  @default alert
			 */
			errMode: "alert",


			/**
			 * Feature plug-ins.
			 *
			 * This is an array of objects which describe the feature plug-ins that are
			 * available to DataTables. These feature plug-ins are then available for
			 * use through the `dom` initialisation option.
			 *
			 * Each feature plug-in is described by an object which must have the
			 * following properties:
			 *
			 * * `fnInit` - function that is used to initialise the plug-in,
			 * * `cFeature` - a character so the feature can be enabled by the `dom`
			 *   instillation option. This is case sensitive.
			 *
			 * The `fnInit` function has the following input parameters:
			 *
			 * 1. `{object}` DataTables settings object: see
			 *    {@link DataTable.models.oSettings}
			 *
			 * And the following return is expected:
			 *
			 * * {node|null} The element which contains your feature. Note that the
			 *   return may also be void if your plug-in does not require to inject any
			 *   DOM elements into DataTables control (`dom`) - for example this might
			 *   be useful when developing a plug-in which allows table control via
			 *   keyboard entry
			 *
			 *  @type array
			 *
			 *  @example
			 *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
			 */
			feature: [],


			/**
			 * Row searching.
			 *
			 * This method of searching is complimentary to the default type based
			 * searching, and a lot more comprehensive as it allows you complete control
			 * over the searching logic. Each element in this array is a function
			 * (parameters described below) that is called for every row in the table,
			 * and your logic decides if it should be included in the searching data set
			 * or not.
			 *
			 * Searching functions have the following input parameters:
			 *
			 * 1. `{object}` DataTables settings object: see
			 *    {@link DataTable.models.oSettings}
			 * 2. `{array|object}` Data for the row to be processed (same as the
			 *    original format that was passed in as the data source, or an array
			 *    from a DOM data source
			 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
			 *    can be useful to retrieve the `TR` element if you need DOM interaction.
			 *
			 * And the following return is expected:
			 *
			 * * {boolean} Include the row in the searched result set (true) or not
			 *   (false)
			 *
			 * Note that as with the main search ability in DataTables, technically this
			 * is "filtering", since it is subtractive. However, for consistency in
			 * naming we call it searching here.
			 *
			 *  @type array
			 *  @default []
			 *
			 *  @example
			 *    // The following example shows custom search being applied to the
			 *    // fourth column (i.e. the data[3] index) based on two input values
			 *    // from the end-user, matching the data in a certain range.
			 *    $.fn.dataTable.ext.search.push(
			 *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
			 *    );
			 */
			search: [],


			/**
			 * Selector extensions
			 *
			 * The `selector` option can be used to extend the options available for the
			 * selector modifier options (`selector-modifier` object data type) that
			 * each of the three built in selector types offer (row, column and cell +
			 * their plural counterparts). For example the Select extension uses this
			 * mechanism to provide an option to select only rows, columns and cells
			 * that have been marked as selected by the end user (`{selected: true}`),
			 * which can be used in conjunction with the existing built in selector
			 * options.
			 *
			 * Each property is an array to which functions can be pushed. The functions
			 * take three attributes:
			 *
			 * * Settings object for the host table
			 * * Options object (`selector-modifier` object type)
			 * * Array of selected item indexes
			 *
			 * The return is an array of the resulting item indexes after the custom
			 * selector has been applied.
			 *
			 *  @type object
			 */
			selector: {
				cell: [],
				column: [],
				row: []
			},


			/**
			 * Internal functions, exposed for used in plug-ins.
			 *
			 * Please note that you should not need to use the internal methods for
			 * anything other than a plug-in (and even then, try to avoid if possible).
			 * The internal function may change between releases.
			 *
			 *  @type object
			 *  @default {}
			 */
			internal: {},


			/**
			 * Legacy configuration options. Enable and disable legacy options that
			 * are available in DataTables.
			 *
			 *  @type object
			 */
			legacy: {
				/**
				 * Enable / disable DataTables 1.9 compatible server-side processing
				 * requests
				 *
				 *  @type boolean
				 *  @default null
				 */
				ajax: null
			},


			/**
			 * Pagination plug-in methods.
			 *
			 * Each entry in this object is a function and defines which buttons should
			 * be shown by the pagination rendering method that is used for the table:
			 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
			 * buttons are displayed in the document, while the functions here tell it
			 * what buttons to display. This is done by returning an array of button
			 * descriptions (what each button will do).
			 *
			 * Pagination types (the four built in options and any additional plug-in
			 * options defined here) can be used through the `paginationType`
			 * initialisation parameter.
			 *
			 * The functions defined take two parameters:
			 *
			 * 1. `{int} page` The current page index
			 * 2. `{int} pages` The number of pages in the table
			 *
			 * Each function is expected to return an array where each element of the
			 * array can be one of:
			 *
			 * * `first` - Jump to first page when activated
			 * * `last` - Jump to last page when activated
			 * * `previous` - Show previous page when activated
			 * * `next` - Show next page when activated
			 * * `{int}` - Show page of the index given
			 * * `{array}` - A nested array containing the above elements to add a
			 *   containing 'DIV' element (might be useful for styling).
			 *
			 * Note that DataTables v1.9- used this object slightly differently whereby
			 * an object with two functions would be defined for each plug-in. That
			 * ability is still supported by DataTables 1.10+ to provide backwards
			 * compatibility, but this option of use is now decremented and no longer
			 * documented in DataTables 1.10+.
			 *
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    // Show previous, next and current page buttons only
			 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
			 */
			pager: {},


			renderer: {
				pageButton: {},
				header: {}
			},


			/**
			 * Ordering plug-ins - custom data source
			 *
			 * The extension options for ordering of data available here is complimentary
			 * to the default type based ordering that DataTables typically uses. It
			 * allows much greater control over the the data that is being used to
			 * order a column, but is necessarily therefore more complex.
			 *
			 * This type of ordering is useful if you want to do ordering based on data
			 * live from the DOM (for example the contents of an 'input' element) rather
			 * than just the static string that DataTables knows of.
			 *
			 * The way these plug-ins work is that you create an array of the values you
			 * wish to be ordering for the column in question and then return that
			 * array. The data in the array much be in the index order of the rows in
			 * the table (not the currently ordering order!). Which order data gathering
			 * function is run here depends on the `dt-init columns.orderDataType`
			 * parameter that is used for the column (if any).
			 *
			 * The functions defined take two parameters:
			 *
			 * 1. `{object}` DataTables settings object: see
			 *    {@link DataTable.models.oSettings}
			 * 2. `{int}` Target column index
			 *
			 * Each function is expected to return an array:
			 *
			 * * `{array}` Data for the column to be ordering upon
			 *
			 *  @type array
			 *
			 *  @example
			 *    // Ordering using `input` node values
			 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
			 *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
			 */
			order: {},


			/**
			 * Type based plug-ins.
			 *
			 * Each column in DataTables has a type assigned to it, either by automatic
			 * detection or by direct assignment using the `type` option for the column.
			 * The type of a column will effect how it is ordering and search (plug-ins
			 * can also make use of the column type if required).
			 *
			 * @namespace
			 */
			type: {
				/**
				 * Type detection functions.
				 *
				 * The functions defined in this object are used to automatically detect
				 * a column's type, making initialisation of DataTables super easy, even
				 * when complex data is in the table.
				 *
				 * The functions defined take two parameters:
				 *
				 *  1. `{*}` Data from the column cell to be analysed
				 *  2. `{settings}` DataTables settings object. This can be used to
				 *     perform context specific type detection - for example detection
				 *     based on language settings such as using a comma for a decimal
				 *     place. Generally speaking the options from the settings will not
				 *     be required
				 *
				 * Each function is expected to return:
				 *
				 * * `{string|null}` Data type detected, or null if unknown (and thus
				 *   pass it on to the other type detection functions.
				 *
				 *  @type array
				 *
				 *  @example
				 *    // Currency type detection plug-in:
				 *    $.fn.dataTable.ext.type.detect.push(
				 *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! $.isNumeric( data.substring(1) ) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
				 *    );
				 */
				detect: [],


				/**
				 * Type based search formatting.
				 *
				 * The type based searching functions can be used to pre-format the
				 * data to be search on. For example, it can be used to strip HTML
				 * tags or to de-format telephone numbers for numeric only searching.
				 *
				 * Note that is a search is not defined for a column of a given type,
				 * no search formatting will be performed.
				 *
				 * Pre-processing of searching data plug-ins - When you assign the sType
				 * for a column (or have it automatically detected for you by DataTables
				 * or a type detection plug-in), you will typically be using this for
				 * custom sorting, but it can also be used to provide custom searching
				 * by allowing you to pre-processing the data and returning the data in
				 * the format that should be searched upon. This is done by adding
				 * functions this object with a parameter name which matches the sType
				 * for that target column. This is the corollary of <i>afnSortData</i>
				 * for searching data.
				 *
				 * The functions defined take a single parameter:
				 *
				 *  1. `{*}` Data from the column cell to be prepared for searching
				 *
				 * Each function is expected to return:
				 *
				 * * `{string|null}` Formatted string that will be used for the searching.
				 *
				 *  @type object
				 *  @default {}
				 *
				 *  @example
				 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
				 */
				search: {},


				/**
				 * Type based ordering.
				 *
				 * The column type tells DataTables what ordering to apply to the table
				 * when a column is sorted upon. The order for each type that is defined,
				 * is defined by the functions available in this object.
				 *
				 * Each ordering option can be described by three properties added to
				 * this object:
				 *
				 * * `{type}-pre` - Pre-formatting function
				 * * `{type}-asc` - Ascending order function
				 * * `{type}-desc` - Descending order function
				 *
				 * All three can be used together, only `{type}-pre` or only
				 * `{type}-asc` and `{type}-desc` together. It is generally recommended
				 * that only `{type}-pre` is used, as this provides the optimal
				 * implementation in terms of speed, although the others are provided
				 * for compatibility with existing Javascript sort functions.
				 *
				 * `{type}-pre`: Functions defined take a single parameter:
				 *
				 *  1. `{*}` Data from the column cell to be prepared for ordering
				 *
				 * And return:
				 *
				 * * `{*}` Data to be sorted upon
				 *
				 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
				 * functions, taking two parameters:
				 *
				 *  1. `{*}` Data to compare to the second parameter
				 *  2. `{*}` Data to compare to the first parameter
				 *
				 * And returning:
				 *
				 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
				 *   than the second parameter, ===0 if the two parameters are equal and
				 *   >0 if the first parameter should be sorted height than the second
				 *   parameter.
				 *
				 *  @type object
				 *  @default {}
				 *
				 *  @example
				 *    // Numeric ordering of formatted numbers with a pre-formatter
				 *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
				 *
				 *  @example
				 *    // Case-sensitive string ordering, with no pre-formatting method
				 *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
				 */
				order: {}
			},

			/**
			 * Unique DataTables instance counter
			 *
			 * @type int
			 * @private
			 */
			_unique: 0,


			//
			// Depreciated
			// The following properties are retained for backwards compatiblity only.
			// The should not be used in new projects and will be removed in a future
			// version
			//

			/**
			 * Version check function.
			 *  @type function
			 *  @depreciated Since 1.10
			 */
			fnVersionCheck: DataTable.fnVersionCheck,


			/**
			 * Index for what 'this' index API functions should use
			 *  @type int
			 *  @deprecated Since v1.10
			 */
			iApiIndex: 0,


			/**
			 * jQuery UI class container
			 *  @type object
			 *  @deprecated Since v1.10
			 */
			oJUIClasses: {},


			/**
			 * Software version
			 *  @type string
			 *  @deprecated Since v1.10
			 */
			sVersion: DataTable.version
		};


		//
		// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
		//
		$.extend( _ext, {
			afnFiltering: _ext.search,
			aTypes:       _ext.type.detect,
			ofnSearch:    _ext.type.search,
			oSort:        _ext.type.order,
			afnSortData:  _ext.order,
			aoFeatures:   _ext.feature,
			oApi:         _ext.internal,
			oStdClasses:  _ext.classes,
			oPagination:  _ext.pager
		} );


		$.extend( DataTable.ext.classes, {
			"sTable": "dataTable",
			"sNoFooter": "no-footer",

			/* Paging buttons */
			"sPageButton": "paginate_button",
			"sPageButtonActive": "current",
			"sPageButtonDisabled": "disabled",

			/* Striping classes */
			"sStripeOdd": "odd",
			"sStripeEven": "even",

			/* Empty row */
			"sRowEmpty": "dataTables_empty",

			/* Features */
			"sWrapper": "dataTables_wrapper",
			"sFilter": "dataTables_filter",
			"sInfo": "dataTables_info",
			"sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
			"sLength": "dataTables_length",
			"sProcessing": "dataTables_processing",

			/* Sorting */
			"sSortAsc": "sorting_asc",
			"sSortDesc": "sorting_desc",
			"sSortable": "sorting", /* Sortable in both directions */
			"sSortableAsc": "sorting_asc_disabled",
			"sSortableDesc": "sorting_desc_disabled",
			"sSortableNone": "sorting_disabled",
			"sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */

			/* Filtering */
			"sFilterInput": "",

			/* Page length */
			"sLengthSelect": "",

			/* Scrolling */
			"sScrollWrapper": "dataTables_scroll",
			"sScrollHead": "dataTables_scrollHead",
			"sScrollHeadInner": "dataTables_scrollHeadInner",
			"sScrollBody": "dataTables_scrollBody",
			"sScrollFoot": "dataTables_scrollFoot",
			"sScrollFootInner": "dataTables_scrollFootInner",

			/* Misc */
			"sHeaderTH": "",
			"sFooterTH": "",

			// Deprecated
			"sSortJUIAsc": "",
			"sSortJUIDesc": "",
			"sSortJUI": "",
			"sSortJUIAscAllowed": "",
			"sSortJUIDescAllowed": "",
			"sSortJUIWrapper": "",
			"sSortIcon": "",
			"sJUIHeader": "",
			"sJUIFooter": ""
		} );


		(function() {

			// Reused strings for better compression. Closure compiler appears to have a
			// weird edge case where it is trying to expand strings rather than use the
			// variable version. This results in about 200 bytes being added, for very
			// little preference benefit since it this run on script load only.
			var _empty = '';
			_empty = '';

			var _stateDefault = _empty + 'ui-state-default';
			var _sortIcon     = _empty + 'css_right ui-icon ui-icon-';
			var _headerFooter = _empty + 'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix';

			$.extend( DataTable.ext.oJUIClasses, DataTable.ext.classes, {
				/* Full numbers paging buttons */
				"sPageButton":         "fg-button ui-button "+_stateDefault,
				"sPageButtonActive":   "ui-state-disabled",
				"sPageButtonDisabled": "ui-state-disabled",

				/* Features */
				"sPaging": "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+
				"ui-buttonset-multi paging_", /* Note that the type is postfixed */

				/* Sorting */
				"sSortAsc":            _stateDefault+" sorting_asc",
				"sSortDesc":           _stateDefault+" sorting_desc",
				"sSortable":           _stateDefault+" sorting",
				"sSortableAsc":        _stateDefault+" sorting_asc_disabled",
				"sSortableDesc":       _stateDefault+" sorting_desc_disabled",
				"sSortableNone":       _stateDefault+" sorting_disabled",
				"sSortJUIAsc":         _sortIcon+"triangle-1-n",
				"sSortJUIDesc":        _sortIcon+"triangle-1-s",
				"sSortJUI":            _sortIcon+"carat-2-n-s",
				"sSortJUIAscAllowed":  _sortIcon+"carat-1-n",
				"sSortJUIDescAllowed": _sortIcon+"carat-1-s",
				"sSortJUIWrapper":     "DataTables_sort_wrapper",
				"sSortIcon":           "DataTables_sort_icon",

				/* Scrolling */
				"sScrollHead": "dataTables_scrollHead "+_stateDefault,
				"sScrollFoot": "dataTables_scrollFoot "+_stateDefault,

				/* Misc */
				"sHeaderTH":  _stateDefault,
				"sFooterTH":  _stateDefault,
				"sJUIHeader": _headerFooter+" ui-corner-tl ui-corner-tr",
				"sJUIFooter": _headerFooter+" ui-corner-bl ui-corner-br"
			} );

		}());



		var extPagination = DataTable.ext.pager;

		function _numbers ( page, pages ) {
			var
				numbers = [],
				buttons = extPagination.numbers_length,
				half = Math.floor( buttons / 2 ),
				i = 1;

			if ( pages <= buttons ) {
				numbers = _range( 0, pages );
			}
			else if ( page <= half ) {
				numbers = _range( 0, buttons-2 );
				numbers.push( 'ellipsis' );
				numbers.push( pages-1 );
			}
			else if ( page >= pages - 1 - half ) {
				numbers = _range( pages-(buttons-2), pages );
				numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
				numbers.splice( 0, 0, 0 );
			}
			else {
				numbers = _range( page-half+2, page+half-1 );
				numbers.push( 'ellipsis' );
				numbers.push( pages-1 );
				numbers.splice( 0, 0, 'ellipsis' );
				numbers.splice( 0, 0, 0 );
			}

			numbers.DT_el = 'span';
			return numbers;
		}


		$.extend( extPagination, {
			simple: function ( page, pages ) {
				return [ 'previous', 'next' ];
			},

			full: function ( page, pages ) {
				return [  'first', 'previous', 'next', 'last' ];
			},

			numbers: function ( page, pages ) {
				return [ _numbers(page, pages) ];
			},

			simple_numbers: function ( page, pages ) {
				return [ 'previous', _numbers(page, pages), 'next' ];
			},

			full_numbers: function ( page, pages ) {
				return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
			},

			// For testing and plug-ins to use
			_numbers: _numbers,

			// Number of number buttons (including ellipsis) to show. _Must be odd!_
			numbers_length: 7
		} );


		$.extend( true, DataTable.ext.renderer, {
			pageButton: {
				_: function ( settings, host, idx, buttons, page, pages ) {
					var classes = settings.oClasses;
					var lang = settings.oLanguage.oPaginate;
					var btnDisplay, btnClass, counter=0;

					var attach = function( container, buttons ) {
						var i, ien, node, button;
						var clickHandler = function ( e ) {
							_fnPageChange( settings, e.data.action, true );
						};

						for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
							button = buttons[i];

							if ( $.isArray( button ) ) {
								var inner = $( '<'+(button.DT_el || 'div')+'/>' )
									.appendTo( container );
								attach( inner, button );
							}
							else {
								btnDisplay = null;
								btnClass = '';

								switch ( button ) {
									case 'ellipsis':
										container.append('<span class="ellipsis">&#x2026;</span>');
										break;

									case 'first':
										btnDisplay = lang.sFirst;
										btnClass = button + (page > 0 ?
												'' : ' '+classes.sPageButtonDisabled);
										break;

									case 'previous':
										btnDisplay = lang.sPrevious;
										btnClass = button + (page > 0 ?
												'' : ' '+classes.sPageButtonDisabled);
										break;

									case 'next':
										btnDisplay = lang.sNext;
										btnClass = button + (page < pages-1 ?
												'' : ' '+classes.sPageButtonDisabled);
										break;

									case 'last':
										btnDisplay = lang.sLast;
										btnClass = button + (page < pages-1 ?
												'' : ' '+classes.sPageButtonDisabled);
										break;

									default:
										btnDisplay = button + 1;
										btnClass = page === button ?
											classes.sPageButtonActive : '';
										break;
								}

								if ( btnDisplay !== null ) {
									node = $('<a>', {
										'class': classes.sPageButton+' '+btnClass,
										'aria-controls': settings.sTableId,
										'data-dt-idx': counter,
										'tabindex': settings.iTabIndex,
										'id': idx === 0 && typeof button === 'string' ?
										settings.sTableId +'_'+ button :
											null
									} )
										.html( btnDisplay )
										.appendTo( container );

									_fnBindAction(
										node, {action: button}, clickHandler
									);

									counter++;
								}
							}
						}
					};

					// IE9 throws an 'unknown error' if document.activeElement is used
					// inside an iframe or frame. Try / catch the error. Not good for
					// accessibility, but neither are frames.
					var activeEl;

					try {
						// Because this approach is destroying and recreating the paging
						// elements, focus is lost on the select button which is bad for
						// accessibility. So we want to restore focus once the draw has
						// completed
						activeEl = $(host).find(document.activeElement).data('dt-idx');
					}
					catch (e) {}

					attach( $(host).empty(), buttons );

					if ( activeEl ) {
						$(host).find( '[data-dt-idx='+activeEl+']' ).focus();
					}
				}
			}
		} );



		// Built in type detection. See model.ext.aTypes for information about
		// what is required from this methods.
		$.extend( DataTable.ext.type.detect, [
			// Plain numbers - first since V8 detects some plain numbers as dates
			// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
			function ( d, settings )
			{
				var decimal = settings.oLanguage.sDecimal;
				return _isNumber( d, decimal ) ? 'num'+decimal : null;
			},

			// Dates (only those recognised by the browser's Date.parse)
			function ( d, settings )
			{
				// V8 will remove any unknown characters at the start and end of the
				// expression, leading to false matches such as `$245.12` or `10%` being
				// a valid date. See forum thread 18941 for detail.
				if ( d && !(d instanceof Date) && ( ! _re_date_start.test(d) || ! _re_date_end.test(d) ) ) {
					return null;
				}
				var parsed = Date.parse(d);
				return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
			},

			// Formatted numbers
			function ( d, settings )
			{
				var decimal = settings.oLanguage.sDecimal;
				return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
			},

			// HTML numeric
			function ( d, settings )
			{
				var decimal = settings.oLanguage.sDecimal;
				return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
			},

			// HTML numeric, formatted
			function ( d, settings )
			{
				var decimal = settings.oLanguage.sDecimal;
				return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
			},

			// HTML (this is strict checking - there must be html)
			function ( d, settings )
			{
				return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
					'html' : null;
			}
		] );



		// Filter formatting functions. See model.ext.ofnSearch for information about
		// what is required from these methods.
		// 
		// Note that additional search methods are added for the html numbers and
		// html formatted numbers by `_addNumericSort()` when we know what the decimal
		// place is


		$.extend( DataTable.ext.type.search, {
			html: function ( data ) {
				return _empty(data) ?
					data :
					typeof data === 'string' ?
						data
							.replace( _re_new_lines, " " )
							.replace( _re_html, "" ) :
						'';
			},

			string: function ( data ) {
				return _empty(data) ?
					data :
					typeof data === 'string' ?
						data.replace( _re_new_lines, " " ) :
						data;
			}
		} );



		var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
			if ( d !== 0 && (!d || d === '-') ) {
				return -Infinity;
			}

			// If a decimal place other than `.` is used, it needs to be given to the
			// function so we can detect it and replace with a `.` which is the only
			// decimal place Javascript recognises - it is not locale aware.
			if ( decimalPlace ) {
				d = _numToDecimal( d, decimalPlace );
			}

			if ( d.replace ) {
				if ( re1 ) {
					d = d.replace( re1, '' );
				}

				if ( re2 ) {
					d = d.replace( re2, '' );
				}
			}

			return d * 1;
		};


		// Add the numeric 'deformatting' functions for sorting and search. This is done
		// in a function to provide an easy ability for the language options to add
		// additional methods if a non-period decimal place is used.
		function _addNumericSort ( decimalPlace ) {
			$.each(
				{
					// Plain numbers
					"num": function ( d ) {
						return __numericReplace( d, decimalPlace );
					},

					// Formatted numbers
					"num-fmt": function ( d ) {
						return __numericReplace( d, decimalPlace, _re_formatted_numeric );
					},

					// HTML numeric
					"html-num": function ( d ) {
						return __numericReplace( d, decimalPlace, _re_html );
					},

					// HTML numeric, formatted
					"html-num-fmt": function ( d ) {
						return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
					}
				},
				function ( key, fn ) {
					// Add the ordering method
					_ext.type.order[ key+decimalPlace+'-pre' ] = fn;

					// For HTML types add a search formatter that will strip the HTML
					if ( key.match(/^html\-/) ) {
						_ext.type.search[ key+decimalPlace ] = _ext.type.search.html;
					}
				}
			);
		}


		// Default sort methods
		$.extend( _ext.type.order, {
			// Dates
			"date-pre": function ( d ) {
				return Date.parse( d ) || 0;
			},

			// html
			"html-pre": function ( a ) {
				return _empty(a) ?
					'' :
					a.replace ?
						a.replace( /<.*?>/g, "" ).toLowerCase() :
					a+'';
			},

			// string
			"string-pre": function ( a ) {
				// This is a little complex, but faster than always calling toString,
				// http://jsperf.com/tostring-v-check
				return _empty(a) ?
					'' :
					typeof a === 'string' ?
						a.toLowerCase() :
						! a.toString ?
							'' :
							a.toString();
			},

			// string-asc and -desc are retained only for compatibility with the old
			// sort methods
			"string-asc": function ( x, y ) {
				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			},

			"string-desc": function ( x, y ) {
				return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			}
		} );


		// Numeric sorting types - order doesn't matter here
		_addNumericSort( '' );


		$.extend( true, DataTable.ext.renderer, {
			header: {
				_: function ( settings, cell, column, classes ) {
					// No additional mark-up required
					// Attach a sort listener to update on sort - note that using the
					// `DT` namespace will allow the event to be removed automatically
					// on destroy, while the `dt` namespaced event is the one we are
					// listening for
					$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
						if ( settings !== ctx ) { // need to check this this is the host
							return;               // table, not a nested one
						}

						var colIdx = column.idx;

						cell
							.removeClass(
							column.sSortingClass +' '+
							classes.sSortAsc +' '+
							classes.sSortDesc
						)
							.addClass( columns[ colIdx ] == 'asc' ?
								classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
					} );
				},

				jqueryui: function ( settings, cell, column, classes ) {
					$('<div/>')
						.addClass( classes.sSortJUIWrapper )
						.append( cell.contents() )
						.append( $('<span/>')
							.addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
					)
						.appendTo( cell );

					// Attach a sort listener to update on sort
					$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
						if ( settings !== ctx ) {
							return;
						}

						var colIdx = column.idx;

						cell
							.removeClass( classes.sSortAsc +" "+classes.sSortDesc )
							.addClass( columns[ colIdx ] == 'asc' ?
								classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);

						cell
							.find( 'span.'+classes.sSortIcon )
							.removeClass(
							classes.sSortJUIAsc +" "+
							classes.sSortJUIDesc +" "+
							classes.sSortJUI +" "+
							classes.sSortJUIAscAllowed +" "+
							classes.sSortJUIDescAllowed
						)
							.addClass( columns[ colIdx ] == 'asc' ?
								classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortJUIDesc :
								column.sSortingClassJUI
						);
					} );
				}
			}
		} );

		/*
		 * Public helper functions. These aren't used internally by DataTables, or
		 * called by any of the options passed into DataTables, but they can be used
		 * externally by developers working with DataTables. They are helper functions
		 * to make working with DataTables a little bit easier.
		 */

		/**
		 * Helpers for `columns.render`.
		 *
		 * The options defined here can be used with the `columns.render` initialisation
		 * option to provide a display renderer. The following functions are defined:
		 *
		 * * `number` - Will format numeric data (defined by `columns.data`) for
		 *   display, retaining the original unformatted data for sorting and filtering.
		 *   It takes 5 parameters:
		 *   * `string` - Thousands grouping separator
		 *   * `string` - Decimal point indicator
		 *   * `integer` - Number of decimal points to show
		 *   * `string` (optional) - Prefix.
		 *   * `string` (optional) - Postfix (/suffix).
		 *
		 * @example
		 *   // Column definition using the number renderer
		 *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
		 *
		 * @namespace
		 */
		DataTable.render = {
			number: function ( thousands, decimal, precision, prefix, postfix ) {
				return {
					display: function ( d ) {
						if ( typeof d !== 'number' && typeof d !== 'string' ) {
							return d;
						}

						var negative = d < 0 ? '-' : '';
						d = Math.abs( parseFloat( d ) );

						var intPart = parseInt( d, 10 );
						var floatPart = precision ?
						decimal+(d - intPart).toFixed( precision ).substring( 2 ):
							'';

						return negative + (prefix||'') +
							intPart.toString().replace(
								/\B(?=(\d{3})+(?!\d))/g, thousands
							) +
							floatPart +
							(postfix||'');
					}
				};
			}
		};


		/*
		 * This is really a good bit rubbish this method of exposing the internal methods
		 * publicly... - To be fixed in 2.0 using methods on the prototype
		 */


		/**
		 * Create a wrapper function for exporting an internal functions to an external API.
		 *  @param {string} fn API function name
		 *  @returns {function} wrapped function
		 *  @memberof DataTable#internal
		 */
		function _fnExternApiFunc (fn)
		{
			return function() {
				var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
					Array.prototype.slice.call(arguments)
				);
				return DataTable.ext.internal[fn].apply( this, args );
			};
		}


		/**
		 * Reference to internal functions for use by plug-in developers. Note that
		 * these methods are references to internal functions and are considered to be
		 * private. If you use these methods, be aware that they are liable to change
		 * between versions.
		 *  @namespace
		 */
		$.extend( DataTable.ext.internal, {
			_fnExternApiFunc: _fnExternApiFunc,
			_fnBuildAjax: _fnBuildAjax,
			_fnAjaxUpdate: _fnAjaxUpdate,
			_fnAjaxParameters: _fnAjaxParameters,
			_fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
			_fnAjaxDataSrc: _fnAjaxDataSrc,
			_fnAddColumn: _fnAddColumn,
			_fnColumnOptions: _fnColumnOptions,
			_fnAdjustColumnSizing: _fnAdjustColumnSizing,
			_fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
			_fnColumnIndexToVisible: _fnColumnIndexToVisible,
			_fnVisbleColumns: _fnVisbleColumns,
			_fnGetColumns: _fnGetColumns,
			_fnColumnTypes: _fnColumnTypes,
			_fnApplyColumnDefs: _fnApplyColumnDefs,
			_fnHungarianMap: _fnHungarianMap,
			_fnCamelToHungarian: _fnCamelToHungarian,
			_fnLanguageCompat: _fnLanguageCompat,
			_fnBrowserDetect: _fnBrowserDetect,
			_fnAddData: _fnAddData,
			_fnAddTr: _fnAddTr,
			_fnNodeToDataIndex: _fnNodeToDataIndex,
			_fnNodeToColumnIndex: _fnNodeToColumnIndex,
			_fnGetCellData: _fnGetCellData,
			_fnSetCellData: _fnSetCellData,
			_fnSplitObjNotation: _fnSplitObjNotation,
			_fnGetObjectDataFn: _fnGetObjectDataFn,
			_fnSetObjectDataFn: _fnSetObjectDataFn,
			_fnGetDataMaster: _fnGetDataMaster,
			_fnClearTable: _fnClearTable,
			_fnDeleteIndex: _fnDeleteIndex,
			_fnInvalidate: _fnInvalidate,
			_fnGetRowElements: _fnGetRowElements,
			_fnCreateTr: _fnCreateTr,
			_fnBuildHead: _fnBuildHead,
			_fnDrawHead: _fnDrawHead,
			_fnDraw: _fnDraw,
			_fnReDraw: _fnReDraw,
			_fnAddOptionsHtml: _fnAddOptionsHtml,
			_fnDetectHeader: _fnDetectHeader,
			_fnGetUniqueThs: _fnGetUniqueThs,
			_fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
			_fnFilterComplete: _fnFilterComplete,
			_fnFilterCustom: _fnFilterCustom,
			_fnFilterColumn: _fnFilterColumn,
			_fnFilter: _fnFilter,
			_fnFilterCreateSearch: _fnFilterCreateSearch,
			_fnEscapeRegex: _fnEscapeRegex,
			_fnFilterData: _fnFilterData,
			_fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
			_fnUpdateInfo: _fnUpdateInfo,
			_fnInfoMacros: _fnInfoMacros,
			_fnInitialise: _fnInitialise,
			_fnInitComplete: _fnInitComplete,
			_fnLengthChange: _fnLengthChange,
			_fnFeatureHtmlLength: _fnFeatureHtmlLength,
			_fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
			_fnPageChange: _fnPageChange,
			_fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
			_fnProcessingDisplay: _fnProcessingDisplay,
			_fnFeatureHtmlTable: _fnFeatureHtmlTable,
			_fnScrollDraw: _fnScrollDraw,
			_fnApplyToChildren: _fnApplyToChildren,
			_fnCalculateColumnWidths: _fnCalculateColumnWidths,
			_fnThrottle: _fnThrottle,
			_fnConvertToWidth: _fnConvertToWidth,
			_fnGetWidestNode: _fnGetWidestNode,
			_fnGetMaxLenString: _fnGetMaxLenString,
			_fnStringToCss: _fnStringToCss,
			_fnSortFlatten: _fnSortFlatten,
			_fnSort: _fnSort,
			_fnSortAria: _fnSortAria,
			_fnSortListener: _fnSortListener,
			_fnSortAttachListener: _fnSortAttachListener,
			_fnSortingClasses: _fnSortingClasses,
			_fnSortData: _fnSortData,
			_fnSaveState: _fnSaveState,
			_fnLoadState: _fnLoadState,
			_fnSettingsFromNode: _fnSettingsFromNode,
			_fnLog: _fnLog,
			_fnMap: _fnMap,
			_fnBindAction: _fnBindAction,
			_fnCallbackReg: _fnCallbackReg,
			_fnCallbackFire: _fnCallbackFire,
			_fnLengthOverflow: _fnLengthOverflow,
			_fnRenderer: _fnRenderer,
			_fnDataSource: _fnDataSource,
			_fnRowAttributes: _fnRowAttributes,
			_fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
											// in 1.10, so this dead-end function is
											// added to prevent errors
		} );


		// jQuery access
		$.fn.dataTable = DataTable;

		// Legacy aliases
		$.fn.dataTableSettings = DataTable.settings;
		$.fn.dataTableExt = DataTable.ext;

		// With a capital `D` we return a DataTables API instance rather than a
		// jQuery object
		$.fn.DataTable = function ( opts ) {
			return $(this).dataTable( opts ).api();
		};

		// All properties that are available to $.fn.dataTable should also be
		// available on $.fn.DataTable
		$.each( DataTable, function ( prop, val ) {
			$.fn.DataTable[ prop ] = val;
		} );


		// Information about events fired by DataTables - for documentation.
		/**
		 * Draw event, fired whenever the table is redrawn on the page, at the same
		 * point as fnDrawCallback. This may be useful for binding events or
		 * performing calculations when the table is altered at all.
		 *  @name DataTable#draw.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
		 */

		/**
		 * Search event, fired when the searching applied to the table (using the
		 * built-in global search, or column filters) is altered.
		 *  @name DataTable#search.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
		 */

		/**
		 * Page change event, fired when the paging of the table is altered.
		 *  @name DataTable#page.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
		 */

		/**
		 * Order event, fired when the ordering applied to the table is altered.
		 *  @name DataTable#order.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
		 */

		/**
		 * DataTables initialisation complete event, fired when the table is fully
		 * drawn, including Ajax data loaded, if Ajax data is required.
		 *  @name DataTable#init.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} oSettings DataTables settings object
		 *  @param {object} json The JSON object request from the server - only
		 *    present if client-side Ajax sourced data is used</li></ol>
		 */

		/**
		 * State save event, fired when the table has changed state a new state save
		 * is required. This event allows modification of the state saving object
		 * prior to actually doing the save, including addition or other state
		 * properties (for plug-ins) or modification of a DataTables core property.
		 *  @name DataTable#stateSaveParams.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} oSettings DataTables settings object
		 *  @param {object} json The state information to be saved
		 */

		/**
		 * State load event, fired when the table is loading state from the stored
		 * data, but prior to the settings object being modified by the saved state
		 * - allowing modification of the saved state is required or loading of
		 * state for a plug-in.
		 *  @name DataTable#stateLoadParams.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} oSettings DataTables settings object
		 *  @param {object} json The saved state information
		 */

		/**
		 * State loaded event, fired when state has been loaded from stored data and
		 * the settings object has been modified by the loaded data.
		 *  @name DataTable#stateLoaded.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} oSettings DataTables settings object
		 *  @param {object} json The saved state information
		 */

		/**
		 * Processing event, fired when DataTables is doing some kind of processing
		 * (be it, order, searcg or anything else). It can be used to indicate to
		 * the end user that there is something happening, or that something has
		 * finished.
		 *  @name DataTable#processing.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} oSettings DataTables settings object
		 *  @param {boolean} bShow Flag for if DataTables is doing processing or not
		 */

		/**
		 * Ajax (XHR) event, fired whenever an Ajax request is completed from a
		 * request to made to the server for new data. This event is called before
		 * DataTables processed the returned data, so it can also be used to pre-
		 * process the data returned from the server, if needed.
		 *
		 * Note that this trigger is called in `fnServerData`, if you override
		 * `fnServerData` and which to use this event, you need to trigger it in you
		 * success function.
		 *  @name DataTable#xhr.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
		 *  @param {object} json JSON returned from the server
		 *
		 *  @example
		 *     // Use a custom property returned from the server in another DOM element
		 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       $('#status').html( json.status );
	 *     } );
		 *
		 *  @example
		 *     // Pre-process the data returned from the server
		 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
	 *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
	 *       }
	 *       // Note no return - manipulate the data directly in the JSON object.
	 *     } );
		 */

		/**
		 * Destroy event, fired when the DataTable is destroyed by calling fnDestroy
		 * or passing the bDestroy:true parameter in the initialisation object. This
		 * can be used to remove bound events, added DOM nodes, etc.
		 *  @name DataTable#destroy.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
		 */

		/**
		 * Page length change event, fired when number of records to show on each
		 * page (the length) is changed.
		 *  @name DataTable#length.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
		 *  @param {integer} len New length
		 */

		/**
		 * Column sizing has changed.
		 *  @name DataTable#column-sizing.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
		 */

		/**
		 * Column visibility has changed.
		 *  @name DataTable#column-visibility.dt
		 *  @event
		 *  @param {event} e jQuery event object
		 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
		 *  @param {int} column Column index
		 *  @param {bool} vis `false` if column now hidden, or `true` if visible
		 */

		return $.fn.dataTable;
	}));

}(window, document));
;
/**
 * @file
 * JQuery listener for tables with the nir-datatables class.
 *
 * Tables found will then be a DataTables instance.
 */

(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.datatables = {
    attach: function (context, settings) {
      if (Drupal.panels_ipe) {
        if (Drupal.panels_ipe.app && context != document && context.id != 'panels-ipe-content') {
          $(context).find('table.nir-datatables').once('nir-datatables').each(function () {
            $(this).DataTable();
          });
        }
      }
      if(settings.panelizer && settings.panelizer.entity){
        $(context).find('table.nir-datatables').once('nir-datatables').each(function () {
            $("table.nir-datatables").DataTable();
        });
      }
      if (context == document && !settings.panelizer) {
        $("table.nir-datatables").DataTable();
      }
    }
  }
})(jQuery, Drupal)
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.behaviors.responsiveImageAJAX = {
    attach: function attach() {
      if (window.picturefill) {
        window.picturefill();
      }
    }
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', { '!status': xmlhttp.status });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance
        && instance.element !== false
        && instance.element instanceof HTMLElement
        && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: typeof ajax.type !== 'undefined' ? ajax.type : 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';

    return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + '</div>';
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);

      var settings = response.settings || ajax.settings || drupalSettings;

      var $newContent = $($.parseHTML(response.data, document, true));

      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);

      var match = void 0;
      var importMatch = /^@import url\("(.*)"\);$/gim;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $element.addClass('ajax-progress ajax-progress-bar');
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';

    var placement = $el.offset()[horizontal ? 'left' : 'top'];

    placement -= window['scroll' + (horizontal ? 'X' : 'Y')] || document.documentElement['scroll' + (horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }
    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll('[data-offset-' + edge + ']');
    var n = displacingElements.length;
    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute('data-offset-' + edge), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;
    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }
    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }
      this.displaceProcessed = true;

      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };

  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,

    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./form","./version"],a):a(jQuery)}(function(a){return a.ui.formResetMixin={_formResetHandler:function(){var b=a(this);setTimeout(function(){var c=b.data("ui-form-reset-instances");a.each(c,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var a=this.form.data("ui-form-reset-instances")||[];a.length||this.form.on("reset.ui-form-reset",this._formResetHandler),a.push(this),this.form.data("ui-form-reset-instances",a)}},_unbindFormResetHandler:function(){if(this.form.length){var b=this.form.data("ui-form-reset-instances");b.splice(a.inArray(this,b),1),b.length?this.form.data("ui-form-reset-instances",b):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../escape-selector","../form-reset-mixin","../labels","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.checkboxradio",[a.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var b,c,d=this,e=this._super()||{};return this._readType(),c=this.element.labels(),this.label=a(c[c.length-1]),this.label.length||a.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){d.originalLabel+=3===this.nodeType?a(this).text():this.outerHTML}),this.originalLabel&&(e.label=this.originalLabel),b=this.element[0].disabled,null!=b&&(e.disabled=b),e},_create:function(){var a=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),a&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var b=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===b&&/radio|checkbox/.test(this.type)||a.error("Can't create checkboxradio on element.nodeName="+b+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var b,c=this.element[0].name,d="input[name='"+a.ui.escapeSelector(c)+"']";return c?(b=this.form.length?a(this.form[0].elements).filter(d):a(d).filter(function(){return 0===a(this).form().length}),b.not(this.element)):a([])},_toggleClasses:function(){var b=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",b),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",b)._toggleClass(this.icon,null,"ui-icon-blank",!b),"radio"===this.type&&this._getRadioGroup().each(function(){var b=a(this).checkboxradio("instance");b&&b._removeClass(b.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(a,b){if("label"!==a||b)return this._super(a,b),"disabled"===a?(this._toggleClass(this.label,null,"ui-state-disabled",b),void(this.element[0].disabled=b)):void this.refresh()},_updateIcon:function(b){var c="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=a("<span>"),this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(c+=b?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,b?"ui-icon-blank":"ui-icon-check")):c+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",c),b||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var a=this.label.contents().not(this.element[0]);this.icon&&(a=a.not(this.icon[0])),this.iconSpace&&(a=a.not(this.iconSpace[0])),a.remove(),this.label.append(this.options.label)},refresh:function(){var a=this.element[0].checked,b=this.element[0].disabled;this._updateIcon(a),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),null!==this.options.label&&this._updateLabel(),b!==this.options.disabled&&this._setOptions({disabled:b})}}]),a.ui.checkboxradio});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../widget"],a):a(jQuery)}(function(a){var b=/ui-corner-([a-z]){2,6}/g;return a.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var b=this,c=[];a.each(this.options.items,function(d,e){var f,g={};if(e)return"controlgroupLabel"===d?(f=b.element.find(e),f.each(function(){var b=a(this);b.children(".ui-controlgroup-label-contents").length||b.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),b._addClass(f,null,"ui-widget ui-widget-content ui-state-default"),void(c=c.concat(f.get()))):void(a.fn[d]&&(g=b["_"+d+"Options"]?b["_"+d+"Options"]("middle"):{classes:{}},b.element.find(e).each(function(){var e=a(this),f=e[d]("instance"),h=a.widget.extend({},g);if("button"!==d||!e.parent(".ui-spinner").length){f||(f=e[d]()[d]("instance")),f&&(h.classes=b._resolveClassesValues(h.classes,f)),e[d](h);var i=e[d]("widget");a.data(i[0],"ui-controlgroup-data",f?f:e[d]("instance")),c.push(i[0])}})))}),this.childWidgets=a(a.unique(c)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(b){this.childWidgets.each(function(){var c=a(this),d=c.data("ui-controlgroup-data");d&&d[b]&&d[b]()})},_updateCornerClass:function(a,b){var c="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",d=this._buildSimpleOptions(b,"label").classes.label;this._removeClass(a,null,c),this._addClass(a,null,d)},_buildSimpleOptions:function(a,b){var c="vertical"===this.options.direction,d={classes:{}};return d.classes[b]={middle:"",first:"ui-corner-"+(c?"top":"left"),last:"ui-corner-"+(c?"bottom":"right"),only:"ui-corner-all"}[a],d},_spinnerOptions:function(a){var b=this._buildSimpleOptions(a,"ui-spinner");return b.classes["ui-spinner-up"]="",b.classes["ui-spinner-down"]="",b},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")},_selectmenuOptions:function(a){var b="vertical"===this.options.direction;return{width:!!b&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(b?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(b?"top":"left")},last:{"ui-selectmenu-button-open":b?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(b?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[a]}},_resolveClassesValues:function(c,d){var e={};return a.each(c,function(f){var g=d.options.classes[f]||"";g=a.trim(g.replace(b,"")),e[f]=(g+" "+c[f]).replace(/\s+/g," ")}),e},_setOption:function(a,b){return"direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(a,b),"disabled"===a?void this._callChildMethod(b?"disable":"enable"):void this.refresh()},refresh:function(){var b,c=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),b=this.childWidgets,this.options.onlyVisible&&(b=b.filter(":visible")),b.length&&(a.each(["first","last"],function(a,d){var e=b[d]().data("ui-controlgroup-data");if(e&&c["_"+e.widgetName+"Options"]){var f=c["_"+e.widgetName+"Options"](1===b.length?"only":d);f.classes=c._resolveClassesValues(f.classes,e),e.element[e.widgetName](f)}else c._updateCornerClass(b[d](),d)}),this._callChildMethod("refresh"))}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,b=this._super()||{};return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(b.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(b.label=this.originalLabel),b},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(b){b.keyCode===a.ui.keyCode.SPACE&&(b.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(b,c){var d="iconPosition"!==b,e=d?this.options.iconPosition:c,f="top"===e||"bottom"===e;this.icon?d&&this._removeClass(this.icon,null,this.options.icon):(this.icon=a("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),d&&this._addClass(this.icon,null,c),this._attachIcon(e),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=a("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(e))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)},_setOptions:function(a){var b=void 0===a.showLabel?this.options.showLabel:a.showLabel,c=void 0===a.icon?this.options.icon:a.icon;b||c||(a.showLabel=!0),this._super(a)},_setOption:function(a,b){"icon"===a&&(b?this._updateIcon(a,b):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,b),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!b),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(b):(this.element.html(b),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,b),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",b),this.element[0].disabled=b,b&&this.element.blur())},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()}}),a.uiBackCompat!==!1&&(a.widget("ui.button",a.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(a,b){return"text"===a?void this._super("showLabel",b):("showLabel"===a&&(this.options.text=b),"icon"===a&&(this.options.icons.primary=b),"icons"===a&&(b.primary?(this._super("icon",b.primary),this._super("iconPosition","beginning")):b.secondary&&(this._super("icon",b.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),a.fn.button=function(b){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?b.apply(this,arguments):(a.ui.checkboxradio||a.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(a.fn.button),a.fn.buttonset=function(){return a.ui.controlgroup||a.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),a.ui.button});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],a):a(jQuery)}(function(a){var b=!1;return a(document).on("mouseup",function(){b=!1}),a.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.on("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).on("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(c){if(!b){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(c),this._mouseDownEvent=c;var d=this,e=1===c.which,f=!("string"!=typeof this.options.cancel||!c.target.nodeName)&&a(c.target).closest(this.options.cancel).length;return!(e&&!f&&this._mouseCapture(c))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(c)!==!1,!this._mouseStarted)?(c.preventDefault(),!0):(!0===a.data(c.target,this.widgetName+".preventClickEvent")&&a.removeData(c.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),c.preventDefault(),b=!0,!0))}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)if(b.originalEvent.altKey||b.originalEvent.ctrlKey||b.originalEvent.metaKey||b.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(c){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&a.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,b=!1,c.preventDefault()},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.draggable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(a,b){this._super(a,b),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(b){var c=this.options;return!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(this._blurActiveElement(b),this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0))},_blockFrames:function(b){this.iframeBlocks=this.document.find(b).map(function(){var b=a(this);return a("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(b){var c=a.ui.safeActiveElement(this.document[0]),d=a(b.target);d.closest(c).length||a.ui.safeBlur(c)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===a(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}},_mouseDrag:function(b,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp(new a.Event("mouseup",b)),!1;this.position=d.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1},_mouseUp:function(b){return this._unblockFrames(),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),this.handleElement.is(b.target)&&this.element.trigger("focus"),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new a.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper),e=d?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return e.parents("body").length||e.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&e[0]===this.element[0]&&this._setPositionRelative(),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]},_getParentOffset:function(){var b=this.offsetParent.offset(),c=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.element.position(),b=this._isRootNode(this.scrollParent[0]);return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(b?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(b?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options,f=this.document[0];return this.relativeContainer=null,e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(f).width()-this.helperProportions.width-this.margins.left,(a(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c))):void(this.containment=null)},_convertPositionTo:function(a,b){b||(b=this.position);var c="absolute"===a?1:-1,d=this._isRootNode(this.scrollParent[0]);return{top:b.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*c,left:b.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*c}},_generatePosition:function(a,b){var c,d,e,f,g=this.options,h=this._isRootNode(this.scrollParent[0]),i=a.pageX,j=a.pageY;return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),b&&(this.containment&&(this.relativeContainer?(d=this.relativeContainer.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,a.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),a.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),a.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),a.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f),"y"===g.axis&&(i=this.originalPageX),"x"===g.axis&&(j=this.originalPageY)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c,d){var e=a.extend({},c,{item:d.element});d.sortables=[],a(d.options.connectToSortable).each(function(){var c=a(this).sortable("instance");c&&!c.options.disabled&&(d.sortables.push(c),c.refreshPositions(),c._trigger("activate",b,e))})},stop:function(b,c,d){var e=a.extend({},c,{item:d.element});d.cancelHelperRemoval=!1,a.each(d.sortables,function(){var a=this;a.isOver?(a.isOver=0,d.cancelHelperRemoval=!0,a.cancelHelperRemoval=!1,a._storedCSS={position:a.placeholder.css("position"),top:a.placeholder.css("top"),left:a.placeholder.css("left")},a._mouseStop(b),a.options.helper=a.options._helper):(a.cancelHelperRemoval=!0,a._trigger("deactivate",b,e))})},drag:function(b,c,d){a.each(d.sortables,function(){var e=!1,f=this;f.positionAbs=d.positionAbs,f.helperProportions=d.helperProportions,f.offset.click=d.offset.click,f._intersectsWith(f.containerCache)&&(e=!0,a.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==f&&this._intersectsWith(this.containerCache)&&a.contains(f.element[0],this.element[0])&&(e=!1),e})),e?(f.isOver||(f.isOver=1,d._parent=c.helper.parent(),f.currentItem=c.helper.appendTo(f.element).data("ui-sortable-item",!0),f.options._helper=f.options.helper,f.options.helper=function(){return c.helper[0]},b.target=f.currentItem[0],f._mouseCapture(b,!0),f._mouseStart(b,!0,!0),f.offset.click.top=d.offset.click.top,f.offset.click.left=d.offset.click.left,f.offset.parent.left-=d.offset.parent.left-f.offset.parent.left,f.offset.parent.top-=d.offset.parent.top-f.offset.parent.top,d._trigger("toSortable",b),d.dropped=f.element,a.each(d.sortables,function(){this.refreshPositions()}),d.currentItem=d.element,f.fromOutside=d),f.currentItem&&(f._mouseDrag(b),c.position=f.position)):f.isOver&&(f.isOver=0,f.cancelHelperRemoval=!0,f.options._revert=f.options.revert,f.options.revert=!1,f._trigger("out",b,f._uiHash(f)),f._mouseStop(b,!0),f.options.revert=f.options._revert,f.options.helper=f.options._helper,f.placeholder&&f.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(b),c.position=d._generatePosition(b,!0),d._trigger("fromSortable",b),d.dropped=!1,a.each(d.sortables,function(){this.refreshPositions()}))})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c,d){var e=a("body"),f=d.options;e.css("cursor")&&(f._cursor=e.css("cursor")),e.css("cursor",f.cursor)},stop:function(b,c,d){var e=d.options;e._cursor&&a("body").css("cursor",e._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("opacity")&&(f._opacity=e.css("opacity")),e.css("opacity",f.opacity)},stop:function(b,c,d){var e=d.options;e._opacity&&a(c.helper).css("opacity",e._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(a,b,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())},drag:function(b,c,d){var e=d.options,f=!1,g=d.scrollParentNotHidden[0],h=d.document[0];g!==h&&"HTML"!==g.tagName?(e.axis&&"x"===e.axis||(d.overflowOffset.top+g.offsetHeight-b.pageY<e.scrollSensitivity?g.scrollTop=f=g.scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(g.scrollTop=f=g.scrollTop-e.scrollSpeed)),e.axis&&"y"===e.axis||(d.overflowOffset.left+g.offsetWidth-b.pageX<e.scrollSensitivity?g.scrollLeft=f=g.scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(g.scrollLeft=f=g.scrollLeft-e.scrollSpeed))):(e.axis&&"x"===e.axis||(b.pageY-a(h).scrollTop()<e.scrollSensitivity?f=a(h).scrollTop(a(h).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(h).scrollTop())<e.scrollSensitivity&&(f=a(h).scrollTop(a(h).scrollTop()+e.scrollSpeed))),e.axis&&"y"===e.axis||(b.pageX-a(h).scrollLeft()<e.scrollSensitivity?f=a(h).scrollLeft(a(h).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(h).scrollLeft())<e.scrollSensitivity&&(f=a(h).scrollLeft(a(h).scrollLeft()+e.scrollSpeed)))),f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c,d){var e=d.options;d.snapElements=[],a(e.snap.constructor!==String?e.snap.items||":data(ui-draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!==d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o=d.options,p=o.snapTolerance,q=c.offset.left,r=q+d.helperProportions.width,s=c.offset.top,t=s+d.helperProportions.height;for(m=d.snapElements.length-1;m>=0;m--)i=d.snapElements[m].left-d.margins.left,j=i+d.snapElements[m].width,k=d.snapElements[m].top-d.margins.top,l=k+d.snapElements[m].height,r<i-p||q>j+p||t<k-p||s>l+p||!a.contains(d.snapElements[m].item.ownerDocument,d.snapElements[m].item)?(d.snapElements[m].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=!1):("inner"!==o.snapMode&&(e=Math.abs(k-t)<=p,f=Math.abs(l-s)<=p,g=Math.abs(i-r)<=p,h=Math.abs(j-q)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k-d.helperProportions.height,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i-d.helperProportions.width}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j}).left)),n=e||f||g||h,"outer"!==o.snapMode&&(e=Math.abs(k-s)<=p,f=Math.abs(l-t)<=p,g=Math.abs(i-q)<=p,h=Math.abs(j-r)<=p,e&&(c.position.top=d._convertPositionTo("relative",{top:k,left:0}).top),f&&(c.position.top=d._convertPositionTo("relative",{top:l-d.helperProportions.height,left:0}).top),g&&(c.position.left=d._convertPositionTo("relative",{top:0,left:i}).left),h&&(c.position.left=d._convertPositionTo("relative",{top:0,left:j-d.helperProportions.width}).left)),!d.snapElements[m].snapping&&(e||f||g||h||n)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[m].item})),d.snapElements[m].snapping=e||f||g||h||n)}}),a.ui.plugin.add("draggable","stack",{start:function(b,c,d){var e,f=d.options,g=a.makeArray(a(f.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});g.length&&(e=parseInt(a(g[0]).css("zIndex"),10)||0,a(g).each(function(b){a(this).css("zIndex",e+b)}),this.css("zIndex",e+g.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c,d){var e=a(c.helper),f=d.options;e.css("zIndex")&&(f._zIndex=e.css("zIndex")),e.css("zIndex",f.zIndex)},stop:function(b,c,d){var e=d.options;e._zIndex&&a(c.helper).css("zIndex",e._zIndex)}}),a.ui.draggable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return function(){function b(a,b,c){return[parseFloat(a[0])*(l.test(a[0])?b/100:1),parseFloat(a[1])*(l.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}var e,f=Math.max,g=Math.abs,h=/left|center|right/,i=/top|center|bottom/,j=/[\+\-]\d+(\.[\d]+)?%?/,k=/^\w+/,l=/%$/,m=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType,f=!d&&!e;return{element:c,isWindow:d,isDocument:e,offset:f?a(b).offset():{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:c.outerWidth(),height:c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return m.apply(this,arguments);e=a.extend({},e);var l,n,o,p,q,r,s=a(e.of),t=a.position.getWithinInfo(e.within),u=a.position.getScrollInfo(t),v=(e.collision||"flip").split(" "),w={};return r=d(s),s[0].preventDefault&&(e.at="left top"),n=r.width,o=r.height,p=r.offset,q=a.extend({},p),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=h.test(c[0])?c.concat(["center"]):i.test(c[0])?["center"].concat(c):["center","center"]),c[0]=h.test(c[0])?c[0]:"center",c[1]=i.test(c[1])?c[1]:"center",a=j.exec(c[0]),b=j.exec(c[1]),w[this]=[a?a[0]:0,b?b[0]:0],e[this]=[k.exec(c[0])[0],k.exec(c[1])[0]]}),1===v.length&&(v[1]=v[0]),"right"===e.at[0]?q.left+=n:"center"===e.at[0]&&(q.left+=n/2),"bottom"===e.at[1]?q.top+=o:"center"===e.at[1]&&(q.top+=o/2),l=b(w.at,n,o),q.left+=l[0],q.top+=l[1],this.each(function(){var d,h,i=a(this),j=i.outerWidth(),k=i.outerHeight(),m=c(this,"marginLeft"),r=c(this,"marginTop"),x=j+m+c(this,"marginRight")+u.width,y=k+r+c(this,"marginBottom")+u.height,z=a.extend({},q),A=b(w.my,i.outerWidth(),i.outerHeight());"right"===e.my[0]?z.left-=j:"center"===e.my[0]&&(z.left-=j/2),"bottom"===e.my[1]?z.top-=k:"center"===e.my[1]&&(z.top-=k/2),z.left+=A[0],z.top+=A[1],d={marginLeft:m,marginTop:r},a.each(["left","top"],function(b,c){a.ui.position[v[b]]&&a.ui.position[v[b]][c](z,{targetWidth:n,targetHeight:o,elemWidth:j,elemHeight:k,collisionPosition:d,collisionWidth:x,collisionHeight:y,offset:[l[0]+A[0],l[1]+A[1]],my:e.my,at:e.at,within:t,elem:i})}),e.using&&(h=function(a){var b=p.left-z.left,c=b+n-j,d=p.top-z.top,h=d+o-k,l={target:{element:s,left:p.left,top:p.top,width:n,height:o},element:{element:i,left:z.left,top:z.top,width:j,height:k},horizontal:c<0?"left":b>0?"right":"center",vertical:h<0?"top":d>0?"bottom":"middle"};n<j&&g(b+c)<n&&(l.horizontal="center"),o<k&&g(d+h)<o&&(l.vertical="middle"),f(g(b),g(c))>f(g(d),g(h))?l.important="horizontal":l.important="vertical",e.using.call(this,a,l)}),i.offset(a.extend(z,{using:h}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,g=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-g-e;b.collisionWidth>g?i>0&&j<=0?(c=a.left+i+b.collisionWidth-g-e,a.left+=i-c):j>0&&i<=0?a.left=e:i>j?a.left=e+g-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=f(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,g=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-g-e;b.collisionHeight>g?i>0&&j<=0?(c=a.top+i+b.collisionHeight-g-e,a.top+=i-c):j>0&&i<=0?a.top=e:i>j?a.top=e+g-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=f(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,h=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-h-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];k<0?(c=a.left+m+n+o+b.collisionWidth-h-f,(c<0||c<g(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||g(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,h=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-h-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];k<0?(d=a.top+n+o+p+b.collisionHeight-h-f,(d<0||d<g(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||g(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}}}(),a.ui.position});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.resizable",a.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0},_isNumber:function(a){return!isNaN(parseFloat(a))},_hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)},_create:function(){var b,c=this.options,d=this;this._addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,b={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(b),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(b),this._proportionallyResize()),this._setupHandles(),c.autoHide&&a(this.element).on("mouseenter",function(){c.disabled||(d._removeClass("ui-resizable-autohide"),d._handles.show())}).on("mouseleave",function(){c.disabled||d.resizing||(d._addClass("ui-resizable-autohide"),d._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_setOption:function(a,b){switch(this._super(a,b),a){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var b,c,d,e,f,g=this.options,h=this;if(this.handles=g.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=a(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),d=this.handles.split(","),this.handles={},c=0;c<d.length;c++)b=a.trim(d[c]),e="ui-resizable-"+b,f=a("<div>"),this._addClass(f,"ui-resizable-handle "+e),f.css({zIndex:g.zIndex}),this.handles[b]=".ui-resizable-"+b,this.element.append(f);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String?this.handles[c]=this.element.children(this.handles[c]).first().show():(this.handles[c].jquery||this.handles[c].nodeType)&&(this.handles[c]=a(this.handles[c]),this._on(this.handles[c],{mousedown:h._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),this._handles=this._handles.add(this.handles[c])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){h.resizing||(this.className&&(f=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=f&&f[1]?f[1]:"se")}),g.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var c,d,e,f=this.options,g=this.element;return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),d=this._num(this.helper.css("top")),f.containment&&(c+=a(f.containment).scrollLeft()||0,d+=a(f.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:d},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalPosition={left:c,top:d},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof f.aspectRatio?f.aspectRatio:this.originalSize.width/this.originalSize.height||1,e=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===e?this.axis+"-resize":e),this._addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d,e=this.originalMousePosition,f=this.axis,g=b.pageX-e.left||0,h=b.pageY-e.top||0,i=this._change[f];return this._updatePrevProperties(),!!i&&(c=i.apply(this,[b,g,h]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),d=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(d)||(this._updatePrevProperties(),this._trigger("resize",b,this.ui()),this._applyChanges()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&this._hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseFloat(k.element.css("left"))+(k.position.left-k.originalPosition.left)||null,i=parseFloat(k.element.css("top"))+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var a={};return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a},_updateVirtualBoundaries:function(a){var b,c,d,e,f,g=this.options;f={minWidth:this._isNumber(g.minWidth)?g.minWidth:0,maxWidth:this._isNumber(g.maxWidth)?g.maxWidth:1/0,minHeight:this._isNumber(g.minHeight)?g.minHeight:0,maxHeight:this._isNumber(g.maxHeight)?g.maxHeight:1/0},(this._aspectRatio||a)&&(b=f.minHeight*this.aspectRatio,d=f.minWidth/this.aspectRatio,c=f.maxHeight*this.aspectRatio,e=f.maxWidth/this.aspectRatio,b>f.minWidth&&(f.minWidth=b),d>f.minHeight&&(f.minHeight=d),c<f.maxWidth&&(f.maxWidth=c),e<f.maxHeight&&(f.maxHeight=e)),this._vBoundaries=f},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,d=this.axis;return this._isNumber(a.height)?a.width=a.height*this.aspectRatio:this._isNumber(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,d=this._isNumber(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this._isNumber(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this._isNumber(a.width)&&b.minWidth&&b.minWidth>a.width,g=this._isNumber(a.height)&&b.minHeight&&b.minHeight>a.height,h=this.originalPosition.left+this.originalSize.width,i=this.originalPosition.top+this.originalSize.height,j=/sw|nw|w/.test(c),k=/nw|ne|n/.test(c);return f&&(a.width=b.minWidth),g&&(a.height=b.minHeight),d&&(a.width=b.maxWidth),e&&(a.height=b.maxHeight),f&&j&&(a.left=h-b.minWidth),d&&j&&(a.left=h-b.maxWidth),g&&k&&(a.top=i-b.minHeight),e&&k&&(a.top=i-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_getPaddingPlusBorderDimensions:function(a){for(var b=0,c=[],d=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],e=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")];b<4;b++)c[b]=parseFloat(d[b])||0,c[b]+=parseFloat(e[b])||0;return{height:c[0]+c[2],width:c[1]+c[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var a,b=0,c=this.helper||this.element;b<this._proportionallyResizeElements.length;b++)a=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(a)),a.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).resizable("instance"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&c._hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,k=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseFloat(c.element.css("width")),height:parseFloat(c.element.css("height")),top:parseFloat(c.element.css("top")),left:parseFloat(c.element.css("left"))};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,c,d,e,f,g,h,i=a(this).resizable("instance"),j=i.options,k=i.element,l=j.containment,m=l instanceof a?l.get(0):/parent/.test(l)?k.parent().get(0):l;m&&(i.containerElement=a(m),/document/.test(l)||l===document?(i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(m),c=[],a(["Top","Right","Left","Bottom"]).each(function(a,d){c[a]=i._num(b.css("padding"+d))}),i.containerOffset=b.offset(),i.containerPosition=b.position(),i.containerSize={height:b.innerHeight()-c[3],width:b.innerWidth()-c[1]},d=i.containerOffset,e=i.containerSize.height,f=i.containerSize.width,g=i._hasScroll(m,"left")?m.scrollWidth:f,h=i._hasScroll(m)?m.scrollHeight:e,i.parentData={element:m,left:d.left,top:d.top,width:g,height:h}))},resize:function(b){var c,d,e,f,g=a(this).resizable("instance"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement,n=!0;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio,n=!1),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio,n=!1),g.position.top=g._helper?i.top:0),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f?(g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top):(g.offset.left=g.element.offset().left,g.offset.top=g.element.offset().top),c=Math.abs(g.sizeDiff.width+(g._helper?g.offset.left-l.left:g.offset.left-i.left)),d=Math.abs(g.sizeDiff.height+(g._helper?g.offset.top-l.top:g.offset.top-i.top)),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio,n=!1)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio,n=!1)),n||(g.position.left=g.prevPosition.left,g.position.top=g.prevPosition.top,g.size.width=g.prevSize.width,g.size.height=g.prevSize.height)},stop:function(){var b=a(this).resizable("instance"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).resizable("instance"),c=b.options;a(c.alsoResize).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseFloat(b.width()),height:parseFloat(b.height()),left:parseFloat(b.css("left")),top:parseFloat(b.css("top"))})})},resize:function(b,c){var d=a(this).resizable("instance"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0};a(e.alsoResize).each(function(){var b=a(this),d=a(this).data("ui-resizable-alsoresize"),e={},f=b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(f,function(a,b){var c=(d[b]||0)+(h[b]||0);c&&c>=0&&(e[b]=c||null)}),b.css(e)})},stop:function(){a(this).removeData("ui-resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).resizable("instance"),c=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}),b._addClass(b.ghost,"ui-resizable-ghost"),a.uiBackCompat!==!1&&"string"==typeof b.options.ghost&&b.ghost.addClass(this.options.ghost),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).resizable("instance");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).resizable("instance");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b,c=a(this).resizable("instance"),d=c.options,e=c.size,f=c.originalSize,g=c.originalPosition,h=c.axis,i="number"==typeof d.grid?[d.grid,d.grid]:d.grid,j=i[0]||1,k=i[1]||1,l=Math.round((e.width-f.width)/j)*j,m=Math.round((e.height-f.height)/k)*k,n=f.width+l,o=f.height+m,p=d.maxWidth&&d.maxWidth<n,q=d.maxHeight&&d.maxHeight<o,r=d.minWidth&&d.minWidth>n,s=d.minHeight&&d.minHeight>o;d.grid=i,r&&(n+=j),s&&(o+=k),p&&(n-=j),q&&(o-=k),/^(se|s|e)$/.test(h)?(c.size.width=n,c.size.height=o):/^(ne)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.top=g.top-m):/^(sw)$/.test(h)?(c.size.width=n,c.size.height=o,c.position.left=g.left-l):((o-k<=0||n-j<=0)&&(b=c._getPaddingPlusBorderDimensions(this)),o-k>0?(c.size.height=o,c.position.top=g.top-m):(o=k-b.height,c.size.height=o,c.position.top=g.top+f.height-o),n-j>0?(c.size.width=n,c.position.left=g.left-l):(n=j-b.width,c.size.width=n,c.position.left=g.left+f.width-n))}}),a.ui.resizable});;
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../tabbable","../unique-id","../version","../widget"],a):a(jQuery)}(function(a){return a.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(b,c){var d=!1,e=this.uiDialog.siblings(".ui-front:visible").map(function(){return+a(this).css("z-index")}).get(),f=Math.max.apply(null,e);return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),d=!0),d&&!c&&this._trigger("focus",b),d},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(a.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var a=this._focusedElement;a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")},_keepFocus:function(b){function c(){var b=a.ui.safeActiveElement(this.document[0]),c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);if(b.keyCode===a.ui.keyCode.TAB&&!b.isDefaultPrevented()){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(this._delay(function(){e.trigger("focus")}),b.preventDefault()):(this._delay(function(){d.trigger("focus")}),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(b){a(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=a("<button type='button'></button>").button({label:a("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(b,"ui-dialog-title"),this._title(b),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,d=a.extend({type:"button"},d),e=d.click,f={icon:d.icon,iconPosition:d.iconPosition,showLabel:d.showLabel,icons:d.icons,text:d.text},delete d.click,delete d.icon,delete d.iconPosition,delete d.showLabel,delete d.icons,"boolean"==typeof d.text&&delete d.text,a("<button></button>",d).button(f).appendTo(b.uiButtonSet).on("click",function(){e.apply(b.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function b(a){return{position:a.position,offset:a.offset}}var c=this,d=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){c._addClass(a(this),"ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",d,b(e))},drag:function(a,d){c._trigger("drag",a,b(d))},stop:function(e,f){var g=f.offset.left-c.document.scrollLeft(),h=f.offset.top-c.document.scrollTop();d.position={my:"left top",at:"left"+(g>=0?"+":"")+g+" top"+(h>=0?"+":"")+h,of:c.window},c._removeClass(a(this),"ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",e,b(f))}})},_makeResizable:function(){function b(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var c=this,d=this.options,e=d.resizable,f=this.uiDialog.css("position"),g="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:g,start:function(d,e){c._addClass(a(this),"ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",d,b(e))},resize:function(a,d){c._trigger("resize",a,b(d))},stop:function(e,f){var g=c.uiDialog.offset(),h=g.left-c.document.scrollLeft(),i=g.top-c.document.scrollTop();d.height=c.uiDialog.height(),d.width=c.uiDialog.width(),d.position={my:"left top",at:"left"+(h>=0?"+":"")+h+" top"+(i>=0?"+":"")+i,of:c.window},c._removeClass(a(this),"ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",e,b(f))}}).css("position",f)},_trackFocus:function(){this._on(this.widget(),{focusin:function(b){this._makeFocusTarget(),this._focusedElement=a(b.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var b=this._trackingInstances(),c=a.inArray(this,b);c!==-1&&b.splice(c,1)},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");return a||(a=[],this.document.data("ui-dialog-instances",a)),a},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var c=this,d=!1,e={};a.each(b,function(a,b){c._setOption(a,b),a in c.sizeRelatedOptions&&(d=!0),a in c.resizableRelatedOptions&&(e[a]=b)}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",e)},_setOption:function(b,c){var d,e,f=this.uiDialog;"disabled"!==b&&(this._super(b,c),"appendTo"===b&&this.uiDialog.appendTo(this._appendTo()),"buttons"===b&&this._createButtons(),"closeText"===b&&this.uiDialogTitlebarClose.button({label:a("<a>").text(""+this.options.closeText).html()}),"draggable"===b&&(d=f.is(":data(ui-draggable)"),d&&!c&&f.draggable("destroy"),!d&&c&&this._makeDraggable()),"position"===b&&this._position(),"resizable"===b&&(e=f.is(":data(ui-resizable)"),e&&!c&&f.resizable("destroy"),e&&"string"==typeof c&&f.resizable("option","handles",c),e||c===!1||this._makeResizable()),"title"===b&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a,b,c,d=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=!0;this._delay(function(){b=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(a){b||this._allowInteraction(a)||(a.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=a("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),a.uiBackCompat!==!1&&a.widget("ui.dialog",a.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(a,b){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(b),this._superApply(arguments)}}),a.ui.dialog});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',

    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef = void 0;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);

      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    dialog.show = function () {
      openDialog({ modal: false });
    };
    dialog.showModal = function () {
      openDialog({ modal: true });
    };
    dialog.close = closeDialog;

    return dialog;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({ autoResize: true, maxHeight: '95%' }, drupalSettings.dialog);

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option = void 0;
    var optionValue = void 0;
    var adjustedValue = void 0;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = { settings: settings, $element: $element };
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', { resizable: false, draggable: false }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($) {
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex = void 0;
      var index = void 0;
      var il = opts.buttons.length;
      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }
      this._super();
      var $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.dialog = {
    attach: function attach(context, settings) {
      var $context = $(context);

      if (!$('#drupal-modal').length) {
        $('<div id="drupal-modal" class="ui-front"/>').hide().appendTo('body');
      }

      var $dialog = $context.closest('.ui-dialog-content');
      if ($dialog.length) {
        if ($dialog.dialog('option', 'drupalAutoButtons')) {
          $dialog.trigger('dialogButtonsChange');
        }

        $dialog.dialog('widget').trigger('focus');
      }

      var originalClose = settings.dialog.close;

      settings.dialog.close = function (event) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        originalClose.apply(settings.dialog, [event].concat(args));
        $(event.target).remove();
      };
    },
    prepareDialogButtons: function prepareDialogButtons($dialog) {
      var buttons = [];
      var $buttons = $dialog.find('.form-actions input[type=submit], .form-actions a.button');
      $buttons.each(function () {
        var $originalButton = $(this).css({ display: 'none' });
        buttons.push({
          text: $originalButton.html() || $originalButton.attr('value'),
          class: $originalButton.attr('class'),
          click: function click(e) {
            if ($originalButton.is('a')) {
              $originalButton[0].click();
            } else {
              $originalButton.trigger('mousedown').trigger('mouseup').trigger('click');
              e.preventDefault();
            }
          }
        });
      });
      return buttons;
    }
  };

  Drupal.AjaxCommands.prototype.openDialog = function (ajax, response, status) {
    if (!response.selector) {
      return false;
    }
    var $dialog = $(response.selector);
    if (!$dialog.length) {
      $dialog = $('<div id="' + response.selector.replace(/^#/, '') + '" class="ui-front"/>').appendTo('body');
    }

    if (!ajax.wrapper) {
      ajax.wrapper = $dialog.attr('id');
    }

    response.command = 'insert';
    response.method = 'html';
    ajax.commands.insert(ajax, response, status);

    if (!response.dialogOptions.buttons) {
      response.dialogOptions.drupalAutoButtons = true;
      response.dialogOptions.buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
    }

    $dialog.on('dialogButtonsChange', function () {
      var buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
      $dialog.dialog('option', 'buttons', buttons);
    });

    response.dialogOptions = response.dialogOptions || {};
    var dialog = Drupal.dialog($dialog.get(0), response.dialogOptions);
    if (response.dialogOptions.modal) {
      dialog.showModal();
    } else {
      dialog.show();
    }

    $dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');
  };

  Drupal.AjaxCommands.prototype.closeDialog = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      Drupal.dialog($dialog.get(0)).close();
      if (!response.persist) {
        $dialog.remove();
      }
    }

    $dialog.off('dialogButtonsChange');
  };

  Drupal.AjaxCommands.prototype.setDialogOption = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      $dialog.dialog('option', response.optionName, response.optionValue);
    }
  };

  $(window).on('dialog:aftercreate', function (e, dialog, $element, settings) {
    $element.on('click.dialog', '.dialog-cancel', function (e) {
      dialog.close('cancel');
      e.preventDefault();
      e.stopPropagation();
    });
  });

  $(window).on('dialog:beforeclose', function (e, dialog, $element) {
    $element.off('.dialog');
  });
})(jQuery, Drupal);;
/**
 * @file entity_browser.common.js
 *
 * Common helper functions used by various parts of entity browser.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.entityBrowser = {};

  /**
   * Command to refresh an entity_browser_entity_reference field widget.
   *
   * @param {Drupal.Ajax} [ajax]
   *   The ajax object.
   * @param {object} response
   *   Object holding the server response.
   * @param {string} response.details_id
   *   The ID for the details element.
   * @param {number} [status]
   *   The HTTP status code.
   */
  Drupal.AjaxCommands.prototype.entity_browser_value_updated = function (ajax, response, status) {
    $('#' + response.details_id)
      .find('input[type="hidden"][name$="[target_id]"]')
      .trigger('entity_browser_value_updated');
  };

  /**
   * Reacts on "entities selected" event.
   *
   * @param {object} event
   *   Event object.
   * @param {string} uuid
   *   Entity browser UUID.
   * @param {array} entities
   *   Array of selected entities.
   */
  Drupal.entityBrowser.selectionCompleted = function (event, uuid, entities) {
    var selected_entities = $.map(entities, function (item) {
      return item[2] + ':' + item[0];
    });
    // @todo Use uuid here. But for this to work we need to move eb uuid
    // generation from display to eb directly. When we do this, we can change
    // \Drupal\entity_browser\Plugin\Field\FieldWidget\EntityReferenceBrowserWidget::formElement
    // also.
    // Checking if cardinality is set - assume unlimited.
    var cardinality = isNaN(parseInt(drupalSettings['entity_browser'][uuid]['cardinality'])) ? -1 : parseInt(drupalSettings['entity_browser'][uuid]['cardinality']);

    // Get field widget selection mode.
    var selection_mode = drupalSettings['entity_browser'][uuid]['selection_mode'];

    // Update value form element with new entity IDs.
    var selector = drupalSettings['entity_browser'][uuid]['selector'] ? $(drupalSettings['entity_browser'][uuid]['selector']) : $(this).parent().parent().find('input[type*=hidden]');
    var entity_ids = selector.val();
    var existing_entities = (entity_ids.length !== 0) ? entity_ids.split(' ') : [];

    entity_ids = Drupal.entityBrowser.updateEntityIds(
      existing_entities,
      selected_entities,
      selection_mode,
      cardinality
    );

    selector.val(entity_ids);
    selector.trigger('entity_browser_value_updated');
  };

  /**
   * Updates the list of selected entities.
   *
   * It uses existing selection and selected entities in entity browser. Also
   * considers cardinality and used selection mode.
   *
   * Note: Selection modes are defined in EntityBrowserElement class and same
   * options should be used here to determine what action will be performed.
   * Default action is append ('selection_append').
   *
   * @param {Array} existing_entities
   *   List of existing entity IDs.
   * @param {Array} selected_entities
   *   The entities that are selected and entity browser.
   * @param {string} selection_mode
   *   Selection mode defined by entity browser field widget.
   * @param {int} cardinality
   *   The maximal amount of items the field can store.
   *
   * @return {string}
   *   List of entities as a string, separated by space.
   */
  Drupal.entityBrowser.updateEntityIds = function (existing_entities, selected_entities, selection_mode, cardinality) {
    var combined_entities;

    if (selection_mode === 'selection_edit') {
      // Propagate new selected entities.
      combined_entities = selected_entities;
    }
    else if (selection_mode === 'selection_prepend') {
      // Prepend selected entities to existing list of entities.
      combined_entities = selected_entities.concat(existing_entities);
    }
    else {
      // Append selected entities to existing list of entities.
      combined_entities = existing_entities.concat(selected_entities);
    }

    // Having more elements than cardinality should never happen, because
    // server side authentication should prevent it, but we handle it here
    // anyway.
    if (cardinality > 0 && combined_entities.length > cardinality) {
      combined_entities = combined_entities.slice(0, cardinality);
    }

    return combined_entities.join(' ');
  };

  /**
   * Reacts on "entities selected" event.
   *
   * @param {object} element
   *   Element to bind on.
   * @param {array} callbacks
   *   List of callbacks.
   * @param {string} event_name
   *   Name of event to bind to.
   */
  Drupal.entityBrowser.registerJsCallbacks = function (element, callbacks, event_name) {
    // JS callbacks are registred as strings. We need to split their names and
    // find actual functions.
    for (var i = 0; i < callbacks.length; i++) {
      var callback = callbacks[i].split('.');
      var fn = window;

      for (var j = 0; j < callback.length; j++) {
        fn = fn[callback[j]];
      }

      if (typeof fn === 'function') {
        $(element).bind(event_name, fn);
      }
    }
  };

}(jQuery, Drupal, drupalSettings));
;
/**
 * @file nir_multimedia.js
 *
 * Common helper functions used by various parts of entity browser.
 */

(function ($, Drupal) {
    Drupal.behaviors.entityBrowserEntityForm = {
        attach: function (context) {
            $(document).on('DOMNodeInserted', '.entities-list', function(e) {
                var element = e.target;
                var id = $(element).attr('class');
                var field_collection = $(element).closest('.field--name-field-nir-multimedia-file').parent();
                var height  = $(field_collection).find("input[id*='-item-height-0-value']");
                var width   = $(field_collection).find("input[id*='-item-width-0-value']");
                var size    = $(field_collection).find("input[id*='-item-size-0-value']");
                var format  = $(field_collection).find("input[id*='-item-format-0-value']");

                if (id == 'tabledrag-handle') {
                    var file = $(field_collection).find('[data-multimedia-item^="file"]');
                    if (typeof $(file).val() == 'undefined') {
                        return;
                    }
                    var fid =  $(file).val().split(":")[1];
                    jQuery.ajax({
                        url: "/ajax/multimedia/file/" + fid,
                        method: "GET",
                        headers: {"Accept": "application/json", "Content-Type": "application/json"},
                        success: function (data, status, xhr) {
                            if(!data.error){
                                if ($(height).attr('value').length == 0) {
                                    $(height).attr('value', data.height);
                                }
                                if ($(width).attr('value').length == 0) {
                                    $(width).attr('value', data.width);
                                }
                                if ($(size).attr('value').length == 0) {
                                    $(size).attr('value', data.size);
                                }
                                if ($(format).attr('value').length == 0) {
                                    $(format).attr('value', data.mime);
                                }
                            }
                        }
                    });
                }
                else {
                    $(height).attr('value', '');
                    $(width).attr('value', '');
                    $(size).attr('value', '');
                    $(format).attr('value', '');
                }
            });
        }
    };
})(jQuery, Drupal);
;
/*! sidr - v2.2.1 - 2016-02-17
 * http://www.berriart.com/sidr/
 * Copyright (c) 2013-2016 Alberto Varela; Licensed MIT */
!function(){"use strict";function a(a,b,c){var d=new o(b);switch(a){case"open":d.open(c);break;case"close":d.close(c);break;case"toggle":d.toggle(c);break;default:p.error("Method "+a+" does not exist on jQuery.sidr")}}function b(a){return"status"===a?h:s[a]?s[a].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof a&&"string"!=typeof a&&a?void q.error("Method "+a+" does not exist on jQuery.sidr"):s.toggle.apply(this,arguments)}function c(a,b){if("function"==typeof b.source){var c=b.source(name);a.html(c)}else if("string"==typeof b.source&&i.isUrl(b.source))u.get(b.source,function(b){a.html(b)});else if("string"==typeof b.source){var d="",e=b.source.split(",");if(u.each(e,function(a,b){d+='<div class="sidr-inner">'+u(b).html()+"</div>"}),b.renaming){var f=u("<div />").html(d);f.find("*").each(function(a,b){var c=u(b);i.addPrefixes(c)}),d=f.html()}a.html(d)}else null!==b.source&&u.error("Invalid Sidr Source");return a}function d(a){var d=i.transitions,e=u.extend({name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,timing:"ease",method:"toggle",bind:"touchstart click",onOpen:function(){},onClose:function(){},onOpenEnd:function(){},onCloseEnd:function(){}},a),f=e.name,g=u("#"+f);return 0===g.length&&(g=u("<div />").attr("id",f).appendTo(u("body"))),d.supported&&g.css(d.property,e.side+" "+e.speed/1e3+"s "+e.timing),g.addClass("sidr").addClass(e.side).data({speed:e.speed,side:e.side,body:e.body,displace:e.displace,timing:e.timing,method:e.method,onOpen:e.onOpen,onClose:e.onClose,onOpenEnd:e.onOpenEnd,onCloseEnd:e.onCloseEnd}),g=c(g,e),this.each(function(){var a=u(this),c=a.data("sidr"),d=!1;c||(h.moving=!1,h.opened=!1,a.data("sidr",f),a.bind(e.bind,function(a){a.preventDefault(),d||(d=!0,b(e.method,f),setTimeout(function(){d=!1},100))}))})}var e={};e.classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},e.createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();var f,g,h={moving:!1,opened:!1},i={isUrl:function(a){var b=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return b.test(a)?!0:!1},addPrefixes:function(a){this.addPrefix(a,"id"),this.addPrefix(a,"class"),a.removeAttr("style")},addPrefix:function(a,b){var c=a.attr(b);"string"==typeof c&&""!==c&&"sidr-inner"!==c&&a.attr(b,c.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-"+b+"-$1"))},transitions:function(){var a=document.body||document.documentElement,b=a.style,c=!1,d="transition";return d in b?c=!0:!function(){var a=["moz","webkit","o","ms"],e=void 0,f=void 0;d=d.charAt(0).toUpperCase()+d.substr(1),c=function(){for(f=0;f<a.length;f++)if(e=a[f],e+d in b)return!0;return!1}(),d=c?"-"+e.toLowerCase()+"-"+d.toLowerCase():null}(),{supported:c,property:d}}()},j=jQuery,k="sidr-animating",l="open",m="close",n="webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",o=function(){function a(b){e.classCallCheck(this,a),this.name=b,this.item=j("#"+b),this.openClass="sidr"===b?"sidr-open":"sidr-open "+b+"-open",this.menuWidth=this.item.outerWidth(!0),this.speed=this.item.data("speed"),this.side=this.item.data("side"),this.displace=this.item.data("displace"),this.timing=this.item.data("timing"),this.method=this.item.data("method"),this.onOpenCallback=this.item.data("onOpen"),this.onCloseCallback=this.item.data("onClose"),this.onOpenEndCallback=this.item.data("onOpenEnd"),this.onCloseEndCallback=this.item.data("onCloseEnd"),this.body=j(this.item.data("body"))}return e.createClass(a,[{key:"getAnimation",value:function(a,b){var c={},d=this.side;return"open"===a&&"body"===b?c[d]=this.menuWidth+"px":"close"===a&&"menu"===b?c[d]="-"+this.menuWidth+"px":c[d]=0,c}},{key:"prepareBody",value:function(a){var b="open"===a?"hidden":"";if(this.body.is("body")){var c=j("html"),d=c.scrollTop();c.css("overflow-x",b).scrollTop(d)}}},{key:"openBody",value:function(){if(this.displace){var a=i.transitions,b=this.body;if(a.supported)b.css(a.property,this.side+" "+this.speed/1e3+"s "+this.timing).css(this.side,0).css({width:b.width(),position:"absolute"}),b.css(this.side,this.menuWidth+"px");else{var c=this.getAnimation(l,"body");b.css({width:b.width(),position:"absolute"}).animate(c,{queue:!1,duration:this.speed})}}}},{key:"onCloseBody",value:function(){var a=i.transitions,b={width:"",position:"",right:"",left:""};a.supported&&(b[a.property]=""),this.body.css(b).unbind(n)}},{key:"closeBody",value:function(){var a=this;if(this.displace)if(i.transitions.supported)this.body.css(this.side,0).one(n,function(){a.onCloseBody()});else{var b=this.getAnimation(m,"body");this.body.animate(b,{queue:!1,duration:this.speed,complete:function(){a.onCloseBody()}})}}},{key:"moveBody",value:function(a){a===l?this.openBody():this.closeBody()}},{key:"onOpenMenu",value:function(a){var b=this.name;h.moving=!1,h.opened=b,this.item.unbind(n),this.body.removeClass(k).addClass(this.openClass),this.onOpenEndCallback(),"function"==typeof a&&a(b)}},{key:"openMenu",value:function(a){var b=this,c=this.item;if(i.transitions.supported)c.css(this.side,0).one(n,function(){b.onOpenMenu(a)});else{var d=this.getAnimation(l,"menu");c.css("display","block").animate(d,{queue:!1,duration:this.speed,complete:function(){b.onOpenMenu(a)}})}}},{key:"onCloseMenu",value:function(a){this.item.css({left:"",right:""}).unbind(n),j("html").css("overflow-x",""),h.moving=!1,h.opened=!1,this.body.removeClass(k).removeClass(this.openClass),this.onCloseEndCallback(),"function"==typeof a&&a(name)}},{key:"closeMenu",value:function(a){var b=this,c=this.item;if(i.transitions.supported)c.css(this.side,"").one(n,function(){b.onCloseMenu(a)});else{var d=this.getAnimation(m,"menu");c.animate(d,{queue:!1,duration:this.speed,complete:function(){b.onCloseMenu()}})}}},{key:"moveMenu",value:function(a,b){this.body.addClass(k),a===l?this.openMenu(b):this.closeMenu(b)}},{key:"move",value:function(a,b){h.moving=!0,this.prepareBody(a),this.moveBody(a),this.moveMenu(a,b)}},{key:"open",value:function(b){var c=this;if(h.opened!==this.name&&!h.moving){if(h.opened!==!1){var d=new a(h.opened);return void d.close(function(){c.open(b)})}this.move("open",b),this.onOpenCallback()}}},{key:"close",value:function(a){h.opened!==this.name||h.moving||(this.move("close",a),this.onCloseCallback())}},{key:"toggle",value:function(a){h.opened===this.name?this.close(a):this.open(a)}}]),a}(),p=jQuery,q=jQuery,r=["open","close","toggle"],s={},t=function(b){return function(c,d){"function"==typeof c?(d=c,c="sidr"):c||(c="sidr"),a(b,c,d)}};for(f=0;f<r.length;f++)g=r[f],s[g]=t(g);var u=jQuery;jQuery.sidr=b,jQuery.fn.sidr=d}();;
/**
 * @file
 * A JavaScript file for the theme.
 *
 */

(function ($, Drupal, window, document) {
  'use strict';

  Drupal.behaviors.chosen = {
    attach: function (context, settings) {
      $('select[multiple="multiple"]').chosen({
        placeholder_text_multiple: 'Choose from list',
        inherit_select_classes: true,
        width: '150px'
      });
      $('select:not([data-timestamp], .quote-wrap select, .ipe-block-plugin-form select, .ipe-form:not(.flipped) select)').chosen({
        inherit_select_classes: true,
        disable_search_threshold: 10,
        width: '150px'
      });
    }
  };

  Drupal.behaviors.faqAcc = {
    attach: function (context, settings) {
      $('.faq-acc-dl dd:first').removeClass('visually-hidden');
      $('.faq-acc-dl dt:first').addClass('opened');
      $('.faq-acc-dl').on('click focus', 'dt', function () {
        if (!$(this).data('fired')) {
          $(this).toggleClass('opened')
          .next('dd').toggleClass('visually-hidden');
        }
        $(this).data('fired', true);
        setTimeout(function (self) {
          $(self).data('fired', false);
        }, 200, this);
      });
      $('.block-faq').on('click', '.show-all', function (e) {
        if ($(this).html() === 'Show all') {
          $('.faq-acc-dl dd').removeClass('visually-hidden');
          $('.faq-acc-dl dt').addClass('opened');
          $(this).html('Hide all');
        }
        else {
          $('.faq-acc-dl dd').addClass('visually-hidden');
          $('.faq-acc-dl dt').removeClass('opened');
          $(this).html('Show all');
        }
        e.preventDefault();
      });
    }
  };

  Drupal.behaviors.accordian = {
    attach: function (context, settings) {

      var firstTitle = $('.acc-title:first');
      var firstWrap = $(firstTitle).next('.acc-content-wrap');
      $(firstTitle).addClass('opened');
      $('.acc-body', firstWrap).removeClass('visually-hidden');
      $('.acc-body:first').removeClass('visually-hidden');

      $('.acc-title').click(function () {
        $(this).addClass('opened');
        $('.acc-title').not(this).removeClass('opened');
        $('.acc-body').addClass('visually-hidden');
        var bodyWrap = $(this).next('.acc-content-wrap');
        $('.acc-body', bodyWrap).removeClass('visually-hidden');
        $(this).next('.acc-body').removeClass('visually-hidden');

      });

      $('.block-views-blockwidget-bundled-content-block-1').on('click', '.show-all', function (e) {
        if ($(this).html() === 'Show all') {
          $('.acc-wrap .acc-body').removeClass('visually-hidden');
          $('.acc-wrap .acc-title').addClass('opened');
          $('.block-views-blockwidget-bundled-content-block-1 .show-all').addClass('hide-all');
          $(this).html('Hide all');
        }
        else {
          $('.acc-wrap .acc-body').addClass('visually-hidden');
          $('.acc-wrap .acc-title').removeClass('opened');
          $('.block-views-blockwidget-bundled-content-block-1 .show-all').removeClass('hide-all');
          $(this).html('Show all');
        }
        e.preventDefault();
      });
    }
  };

  Drupal.behaviors.nirTooltip = {
    attach: function (context, settings) {
      $('[role="tooltip"]').each(function () {
        var markup = $(this).text();
        $(this).html(markup);
      });
      var openTooltip = function () {
        var tooltip = $('#' + $(this).attr('aria-describedby'));
        $(tooltip)
        .stop()
        .attr({
          'aria-hidden': 'false'
        })
        .animate({opacity: 1, zIndex: 100}, 200)
        .position({
          my: 'left bottom-10',
          at: 'left top',
          of: this
        });
      };
      var closeTooltip = function () {
        var tooltip = $('#' + $(this).attr('aria-describedby'));
        $(tooltip)
        .stop()
        .attr({
          'aria-hidden': 'true'
        })
        .animate({opacity: 0, zIndex: -1}, 200);
      };
      $('.nir-tooltip').hover(openTooltip, closeTooltip);
      $('.nir-tooltip').on('click', function (event) {
        event.preventDefault();
      });
      $('.nir-tooltip').on('touchstart', openTooltip);
      $('.nir-tooltip').on('touchend', closeTooltip);
    }
  };

  Drupal.behaviors.tableCollapse = {
    attach: function (context, settings) {
      var collTable = $('table.collapse-table, table.collapse-table-wide');
      $(collTable).each(function () {
        $('tbody tr td, tfoot tr td', this).each(function () {
          var rowIndex = $(this).index();
          var thisTable = $(this).parents().eq(2);
          var headIndex = $('tr th', thisTable)[rowIndex];
          var regex = /(<([^>]+)>)/ig;
          var rawTitle = $(headIndex).html();
          var title;
          if (typeof rawTitle != 'undefined') {
            title = rawTitle.replace(regex, '');
          }
          if (title !== '&nbsp;' && title !== '') {
            $(this).attr('data-before', title);
          }
        });
        $('tr', this).each(function () {
          if ($(this).hasClass('total-row')) {
            $('td', this).first().attr('data-before', '');
          }
        });
      });
    }
  };

  Drupal.behaviors.modalLink = {
    attach: function (context, settings) {
      $('.modal').on('click', function (event) {
        var link = $(this).attr('href');
        var width = $('#content-area').width();
        $('.modal-content').load(link + ' .node__content', function () {
          $('.modal-content').dialog({
            width: width
          });
        });
        event.preventDefault();
      });
    }
  };

  Drupal.behaviors.nirNewsWidgetSummaryToggleTitle = {
    attach: function (context, settings) {
      $('.nir-news-widget-summary-toggle-title').each(function () {
        if ($(this).parents('.views-field-field-nir-news-title').siblings('.views-field-field-nir-news-teaser').length === 0) {
          $(this).hide();
        }
      });
      $('.nir-news-widget-summary-toggle-title').once().on('click', function (e) {
        e.preventDefault();
        $(this).parents('.views-field-field-nir-news-title').siblings('.views-field-field-nir-news-teaser').children('.summary-hidden').slideToggle('fast', 'linear');
        $(this).toggleClass('open');
      });
    }
  };

  Drupal.behaviors.nirWidgetAccordion = {
    attach: function (context, settings) {
      $('.nir-widget--accordion-wrapper').hide();
      $('.nir-widget--accordion-toggle').once().on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.nir-widget--accordion-wrapper').slideToggle('fast', 'linear');
        $(this).toggleClass('open');
      });
    }
  };

  Drupal.behaviors.nirNewsWidgetSummaryToggleDate = {
    attach: function (context, settings) {
      $('.nir-news-widget-summary-toggle-date').each(function () {
        if ($(this).parents('.views-field-field-nir-news-date').siblings('.views-field-field-nir-news-title').find('.nir-news-table-teaser').length === 0) {
          $(this).hide();
        }
      });
      $('.nir-news-widget-summary-toggle-date').once().on('click', function (e) {
        e.preventDefault();
        $(this).parents('.views-field-field-nir-news-date').siblings('.views-field-field-nir-news-title').find('.summary-hidden').slideToggle('fast', 'linear');
        $(this).toggleClass('open');
      });
    }
  };

  Drupal.behaviors.nirEventsTableWidgetSummaryToggleDate = {
    attach: function (context, settings) {
      $('.nir-events-table-widget-summary-toggle-date').each(function () {
        if ($(this).parents('.views-field-field-nir-event-start-date').siblings('.views-field-nothing').find('.nir-events-widget-event-details').hasClass('summary-empty')) {
          $(this).hide();
        }
      });
      $('.nir-events-table-widget-summary-toggle-date').once().on('click', function (e) {
        e.preventDefault();
        $(this).parents('.views-field-field-nir-event-start-date').siblings('.views-field-nothing').find('.summary-hidden').slideToggle('fast', 'linear');
        $(this).toggleClass('open');
      });
    }
  };

  Drupal.behaviors.nirViewsSearch = {
    attach: function (context, settings) {
      $('.view-search #edit-query').attr('placeholder', 'Search');
    }
  };

  Drupal.behaviors.targetBlank = {
    attach: function (context, settings) {
      $('span.file a').attr('target', '_blank');
    }
  };

  Drupal.behaviors.tablesort = {
    attach: function (context, settings) {
      $('table').each(function () {
        $('th a', this).each(function () {
          if ($('span', this).length < 1) {
            $(this).append('<span class="tablesort">');
          }
        });
      });
    }
  };

  Drupal.behaviors.autoSubmitFilters = {
    // This is a hack until autosubmit is supported in drupal 8 views.
    // https://www.drupal.org/node/2475595
    attach: function (context, settings) {
      // Autosubmit 'view-class-here' views exposed form.
      $('div[class*="view-widget"], .view-nir-media-gallery-items-grid').find('form.views-exposed-form').find('select').bind('change', function () {
        var id = $(this).closest('form').attr('id');
        $(this).closest('form').attr('action', $(this).closest('form').attr('action') + '#' + id);
        $(this).closest('form').trigger('submit');
      }).end().find('input[type="submit"]').addClass('visually-hidden');
    }
  };

})(jQuery, Drupal, this, this.document);
;
/**
 * @file
 * A JavaScript file for sidr behaviors.
 *
 */

(function ($, Drupal, window, document) {

  'use strict';

  Drupal.behaviors.sidr = {
    attach: function (context, settings) {
      if ($('#responsive-menu-button').length > 0) {
        $('#responsive-menu-button').sidr({
          name: 'sidr-main',
          source: '#block-investorrelationshorizontal',
          side: 'right'
        });
      }
    }
  };

})(jQuery, Drupal, this, this.document);
;
/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					attributes.path ? '; path=' + attributes.path : '',
					attributes.domain ? '; domain=' + attributes.domain : '',
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
;
(function() {
  var $, AbstractChosen, Chosen, SelectParser, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: this.escapeExpression(group.label),
        title: group.title ? group.title : void 0,
        children: 0,
        disabled: group.disabled,
        classes: group.className
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            title: option.title ? option.title : void 0,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            group_label: group_position != null ? this.parsed[group_position].label : null,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    SelectParser.prototype.escapeExpression = function(text) {
      var map, unsafe_chars;
      if ((text == null) || text === false) {
        return "";
      }
      if (!/[\&\<\>\"\'\`]/.test(text)) {
        return text;
      }
      map = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
      return text.replace(unsafe_chars, function(chr) {
        return map[chr] || "&amp;";
      });
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;
    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  AbstractChosen = (function() {
    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.on_ready();
    }

    AbstractChosen.prototype.set_default_values = function() {
      var _this = this;
      this.click_test_action = function(evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function(evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
      this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
      return this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };

    AbstractChosen.prototype.choice_label = function(item) {
      if (this.include_group_label_in_selected && (item.group_label != null)) {
        return "<b class='group-name'>" + item.group_label + "</b>" + item.html;
      } else {
        return item.html;
      }
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      var _this = this;
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((function() {
            return _this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      var _this = this;
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((function() {
          return _this.blur_test();
        }), 100);
      }
    };

    AbstractChosen.prototype.results_option_build = function(options) {
      var content, data, data_content, shown_results, _i, _len, _ref;
      content = '';
      shown_results = 0;
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        data_content = '';
        if (data.group) {
          data_content = this.result_add_group(data);
        } else {
          data_content = this.result_add_option(data);
        }
        if (data_content !== '') {
          shown_results++;
          content += data_content;
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(this.choice_label(data));
          }
        }
        if (shown_results >= this.max_shown_results) {
          break;
        }
      }
      return content;
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, option_el;
      if (!option.search_match) {
        return '';
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      option_el = document.createElement("li");
      option_el.className = classes.join(" ");
      option_el.style.cssText = option.style;
      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.search_text;
      if (option.title) {
        option_el.title = option.title;
      }
      return this.outerHTML(option_el);
    };

    AbstractChosen.prototype.result_add_group = function(group) {
      var classes, group_el;
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      classes = [];
      classes.push("group-result");
      if (group.classes) {
        classes.push(group.classes);
      }
      group_el = document.createElement("li");
      group_el.className = classes.join(" ");
      group_el.innerHTML = group.search_text;
      if (group.title) {
        group_el.title = group.title;
      }
      return this.outerHTML(group_el);
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.reset_single_select_options = function() {
      var result, _i, _len, _ref, _results;
      _ref = this.results_data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        result = _ref[_i];
        if (result.selected) {
          _results.push(result.selected = false);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function() {
      var escapedSearchText, option, regex, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;
      this.no_results_clear();
      results = 0;
      searchText = this.get_search_text();
      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      zregex = new RegExp(escapedSearchText, 'i');
      regex = this.get_search_regex(escapedSearchText);
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        option.search_match = false;
        results_group = null;
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          option.search_text = option.group ? option.label : option.html;
          if (!(option.group && !this.group_search)) {
            option.search_match = this.search_string_match(option.search_text, regex);
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (searchText.length) {
                startpos = option.search_text.search(zregex);
                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && searchText.length) {
        this.update_results_content("");
        return this.no_results(searchText);
      } else {
        this.update_results_content(this.results_option_build());
        return this.winnow_results_set_highlight();
      }
    };

    AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
      var regex_anchor;
      regex_anchor = this.search_contains ? "" : "^";
      return new RegExp(regex_anchor + escaped_search_string, 'i');
    };

    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
      var part, parts, _i, _len;
      if (regex.test(search_string)) {
        return true;
      } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
        parts = search_string.replace(/\[|\]/g, "").split(" ");
        if (parts.length) {
          for (_i = 0, _len = parts.length; _i < _len; _i++) {
            part = parts[_i];
            if (regex.test(part)) {
              return true;
            }
          }
        }
      }
    };

    AbstractChosen.prototype.choices_count = function() {
      var option, _i, _len, _ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      _ref = this.form_field.options;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
        case 18:
          break;
        default:
          return this.results_search();
      }
    };

    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
      var _this = this;
      return setTimeout((function() {
        return _this.results_search();
      }), 50);
    };

    AbstractChosen.prototype.container_width = function() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return "" + this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    };

    AbstractChosen.prototype.search_results_touchstart = function(evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    };

    AbstractChosen.prototype.search_results_touchmove = function(evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    };

    AbstractChosen.prototype.search_results_touchend = function(evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };

    AbstractChosen.prototype.outerHTML = function(element) {
      var tmp;
      if (element.outerHTML) {
        return element.outerHTML;
      }
      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };

    AbstractChosen.browser_is_supported = function() {
      if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
        return false;
      }
      if (/Android/i.test(window.navigator.userAgent)) {
        if (/Mobile/i.test(window.navigator.userAgent)) {
          return false;
        }
      }
      if (/IEMobile/i.test(window.navigator.userAgent)) {
        return false;
      }
      if (/Windows Phone/i.test(window.navigator.userAgent)) {
        return false;
      }
      if (/BlackBerry/i.test(window.navigator.userAgent)) {
        return false;
      }
      if (/BB10/i.test(window.navigator.userAgent)) {
        return false;
      }
      if (window.navigator.appName === "Microsoft Internet Explorer") {
        return document.documentMode >= 8;
      }
      return true;
    };

    AbstractChosen.default_multiple_text = "Select Some Options";

    AbstractChosen.default_single_text = "Select an Option";

    AbstractChosen.default_no_result_text = "No results match";

    return AbstractChosen;

  })();

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function(input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data('chosen');
        if (options === 'destroy') {
          if (chosen instanceof Chosen) {
            chosen.destroy();
          }
          return;
        }
        if (!(chosen instanceof Chosen)) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(_super) {
    __extends(Chosen, _super);

    function Chosen() {
      _ref = Chosen.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_props;
      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        'class': container_classes.join(' '),
        'style': "width: " + (this.container_width()) + ";",
        'title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }
      this.container = $("<div />", container_props);
      if (this.is_multiple) {
        this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
      } else {
        this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
      }
      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }
      this.results_build();
      this.set_tab_index();
      return this.set_label_behavior();
    };

    Chosen.prototype.on_ready = function() {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      var _this = this;
      this.container.bind('touchstart.chosen', function(evt) {
        _this.container_mousedown(evt);
        return evt.preventDefault();
      });
      this.container.bind('touchend.chosen', function(evt) {
        _this.container_mouseup(evt);
        return evt.preventDefault();
      });
      this.container.bind('mousedown.chosen', function(evt) {
        _this.container_mousedown(evt);
      });
      this.container.bind('mouseup.chosen', function(evt) {
        _this.container_mouseup(evt);
      });
      this.container.bind('mouseenter.chosen', function(evt) {
        _this.mouse_enter(evt);
      });
      this.container.bind('mouseleave.chosen', function(evt) {
        _this.mouse_leave(evt);
      });
      this.search_results.bind('mouseup.chosen', function(evt) {
        _this.search_results_mouseup(evt);
      });
      this.search_results.bind('mouseover.chosen', function(evt) {
        _this.search_results_mouseover(evt);
      });
      this.search_results.bind('mouseout.chosen', function(evt) {
        _this.search_results_mouseout(evt);
      });
      this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
        _this.search_results_mousewheel(evt);
      });
      this.search_results.bind('touchstart.chosen', function(evt) {
        _this.search_results_touchstart(evt);
      });
      this.search_results.bind('touchmove.chosen', function(evt) {
        _this.search_results_touchmove(evt);
      });
      this.search_results.bind('touchend.chosen', function(evt) {
        _this.search_results_touchend(evt);
      });
      this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
        _this.results_update_field(evt);
      });
      this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
        _this.activate_field(evt);
      });
      this.form_field_jq.bind("chosen:open.chosen", function(evt) {
        _this.container_mousedown(evt);
      });
      this.form_field_jq.bind("chosen:close.chosen", function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('blur.chosen', function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('keyup.chosen', function(evt) {
        _this.keyup_checker(evt);
      });
      this.search_field.bind('keydown.chosen', function(evt) {
        _this.keydown_checker(evt);
      });
      this.search_field.bind('focus.chosen', function(evt) {
        _this.input_focus(evt);
      });
      this.search_field.bind('cut.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      this.search_field.bind('paste.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      if (this.is_multiple) {
        return this.search_choices.bind('click.chosen', function(evt) {
          _this.choices_click(evt);
        });
      } else {
        return this.container.bind('click.chosen', function(evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chosen-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus.chosen", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chosen-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind("focus.chosen", this.activate_action);
        }
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      if (!this.is_disabled) {
        if (evt && evt.type === "mousedown" && !this.results_showing) {
          evt.preventDefault();
        }
        if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field.val("");
            }
            $(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        }
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function(evt) {
      var delta;
      if (evt.originalEvent) {
        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
      }
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };

    Chosen.prototype.activate_field = function() {
      this.container.addClass("chosen-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      var active_container;
      active_container = $(evt.target).closest('.chosen-container');
      if (active_container.length && this.container[0] === active_container[0]) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else if (!this.is_multiple) {
        this.single_set_selected_text();
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }
      this.container.addClass("chosen-with-drop");
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.search_field.val());
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
    };

    Chosen.prototype.update_results_content = function(content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function() {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function() {
      var _this = this;
      this.form_field_label = this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.bind('click.chosen', function(evt) {
          if (_this.is_multiple) {
            return _this.container_mousedown(evt);
          } else {
            return _this.activate_field();
          }
        });
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice, close_link,
        _this = this;
      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + (this.choice_label(item)) + "</span>");
      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.bind('click.chosen', function(evt) {
          return _this.choice_destroy_link_click(evt);
        });
        choice.append(close_link);
      }
      return this.search_container.before(choice);
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        this.show_search_field_default();
        if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.reset_single_select_options();
      this.form_field.options[0].selected = true;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger("change");
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, item;
      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }
        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          this.reset_single_select_options();
        }
        high.addClass("result-selected");
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(this.choice_label(item));
        }
        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
          this.results_hide();
        }
        this.show_search_field_default();
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.form_field_jq.trigger("change", {
            'selected': this.form_field.options[item.options_index].value
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        evt.preventDefault();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function(text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }
      return this.selected_item.find("span").html(text);
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.form_field_jq.trigger("change", {
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_text = function() {
      return $('<div/>').text($.trim(this.search_field.val())).html();
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;
      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.find("span").first().html(terms);
      this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var next_sib;
      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref1;
      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          if (this.results_showing) {
            evt.preventDefault();
          }
          break;
        case 32:
          if (this.disable_search) {
            evt.preventDefault();
          }
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    Chosen.prototype.search_field_scale = function() {
      var div, f_width, h, style, style_block, styles, w, _i, _len;
      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = $('<div />', {
          'style': style_block
        });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        f_width = this.container.outerWidth();
        if (w > f_width - 10) {
          w = f_width - 10;
        }
        return this.search_field.css({
          'width': w + 'px'
        });
      }
    };

    return Chosen;

  })(AbstractChosen);

}).call(this);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement = void 0;
  var announcements = [];

  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement = void 0;

    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';

      liveElement.setAttribute('aria-busy', 'true');

      liveElement.setAttribute('aria-live', priority);

      liveElement.innerHTML = text.join('\n');

      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });

    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
(function(){if(window.matchMedia&&window.matchMedia("all").addListener){return false}var e=window.matchMedia,i=e("only all").matches,n=false,t=0,a=[],r=function(i){clearTimeout(t);t=setTimeout(function(){for(var i=0,n=a.length;i<n;i++){var t=a[i].mql,r=a[i].listeners||[],o=e(t.media).matches;if(o!==t.matches){t.matches=o;for(var s=0,l=r.length;s<l;s++){r[s].call(window,t)}}}},30)};window.matchMedia=function(t){var o=e(t),s=[],l=0;o.addListener=function(e){if(!i){return}if(!n){n=true;window.addEventListener("resize",r,true)}if(l===0){l=a.push({mql:o,listeners:s})}s.push(e)};o.removeListener=function(e){for(var i=0,n=s.length;i<n;i++){if(s[i]===e){s.splice(i,1)}}};return o}})();
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');

      $item.toggleClass('open', switcher);

      $toggle.toggleClass('open', switcher);

      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');

      toggleList($item);

      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };

      $menu.find('li > a').wrap('<div class="toolbar-box">');

      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {
            '@label': $box.find('a').text()
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass('level-' + level);
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find('a[href="' + window.location.pathname + '"]');
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find('a[href="' + activeItem + '"]').addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');
      if ($menu.length) {
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);

        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);

        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return '<button class="' + options.class + '"><span class="action">' + options.action + '</span> <span class="label">' + options.text + '</span></button>';
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });

  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('#toolbar-administration').once('toolbar').each(function () {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });

        Drupal.toolbar.models.toolbarModel = model;

        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;

          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));

          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });

        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });

        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));

        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });

        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem('Drupal.toolbar.subtrees.' + theme, JSON.stringify(subtrees));

          model.set('areSubtreesLoaded', true);
        });

        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();

        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });

        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }

        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', height + 'px');

              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', newHeight + 'px');
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };

  Drupal.toolbar = {
    views: {},

    models: {},

    mql: {},

    setSubtrees: new $.Deferred(),

    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({ orientation: 'vertical' }, { validate: true });
          }
          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, { validate: true });

          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,

      activeTray: null,

      isOriented: false,

      isFixed: false,

      areSubtreesLoaded: false,

      isViewportOverflowConstrained: false,

      orientation: 'horizontal',

      locked: false,

      isTrayToggleVisible: true,

      height: null,

      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },

    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');

      Object.keys(subtrees || {}).forEach(function (id) {
        _this.$el.find('#toolbar-link-' + id).once('toolbar-subtrees').after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text = void 0;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', { '@action': action });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;

      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);

      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));

      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);

      $('body').css({
        'padding-top': this.model.get('height')
      });

      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();

      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;

        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);

        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });

      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));

      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);

      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');

        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find('[data-toolbar-tray="' + name + '"].toolbar-tray');
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');

      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');

      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass('toolbar-tray-' + orientation);

      var iconClass = 'toolbar-icon-toggle-' + orientation;
      var iconAntiClass = 'toolbar-icon-toggle-' + antiOrientation;
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);

      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';

      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');

      $trays.filter('.toolbar-tray-vertical.is-active').attr('data-offset-' + edge, '');

      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url('toolbar/subtrees/' + subtreesHash);
        var cachedSubtreesHash = localStorage.getItem('Drupal.toolbar.subtreesHash.' + theme);
        var cachedSubtrees = JSON.parse(localStorage.getItem('Drupal.toolbar.subtrees.' + theme));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
            localStorage.removeItem('Drupal.toolbar.subtreesHash.' + theme);
            localStorage.removeItem('Drupal.toolbar.subtrees.' + theme);

            Drupal.ajax({ url: endpoint }).execute();

            localStorage.setItem('Drupal.toolbar.subtreesHash.' + theme, subtreesHash);
          }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
/**
 * @file
 * Javascript for the NIR Toolbar.
 *
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.nirToolbarNav = {
    attach: function (context, settings) {
      $('#toolbar-bar > ul > li a').once().click(function (e) {
        $(this).toggleClass('menu-open');
        $('#toolbar-bar > ul > li a').not($(this)).removeClass('menu-open');
        var subMenu = $(this).parent().find('ul');
        $('#toolbar-bar > ul > li ul').not(subMenu).removeClass('visually-hidden--off');
        $(subMenu).toggleClass('visually-hidden--off');
        if (subMenu.length > 0) {
          e.preventDefault();
        }
      });
      $('.toolbar-item > a:not(".help-tab")').once().click(function (e) {
        $(this).toggleClass('menu-open');
        $('.toolbar-item a').not($(this)).not('.local-tasks-tab').removeClass('menu-open');
        var tray = $(this).next('ul');
        $('.toolbar-item > ul').not(tray).removeClass('visually-hidden--off');
        $(tray).toggleClass('visually-hidden--off');
        if (!($(this).parent().hasClass('help-tab'))) {
          e.preventDefault();
        }
      });

      var $toolbarToggle = $(".toolbar--toggle", context);
      if ($toolbarToggle.length > 0) {
        $toolbarToggle.once().off('click').on('click', function(e) {
          e.preventDefault();
          $(".toolbar--wrapper").slideToggle();
          $(this).toggleClass('toolbar--toggle--closed').toggleClass('toolbar--toggle--open');
          if ($(this).hasClass('toolbar--toggle--closed')) {
            $(this).find('a').attr('title', Drupal.t('Show Toolbar'));
            $(this).find('span').text(Drupal.t('Show Toolbar'));
          }
          else {
            $(this).find('a').attr('title', Drupal.t('Hide Toolbar'));
            $(this).find('span').text(Drupal.t('Hide Toolbar'));
          }
          $('.local-tasks-sidebar--wrapper').toggleClass('toolbar--closed');
        });
      }

      var $sidebarToggle = $(".local-tasks-sidebar--toggle", context);
      if ($sidebarToggle.length > 0) {
        $('body', context).addClass('local-tasks-sidebar--toggle--open');
        $sidebarToggle.off('click').on('click', function(e) {
          e.preventDefault();
          var sideBar = $(".local-tasks-sidebar--wrapper");
          var wrapperClosedClass = 'local-tasks-sidebar--wrapper--closed';
          if (sideBar.hasClass(wrapperClosedClass)) {
            sideBar.removeClass(wrapperClosedClass);
          }
          else {
            sideBar.addClass(wrapperClosedClass);
          }
          $(this).toggleClass('local-tasks-sidebar--toggle--open').toggleClass('local-tasks-sidebar--toggle--closed');
          $('body').toggleClass('local-tasks-sidebar--toggle--closed')
            .toggleClass('local-tasks-sidebar--toggle--open');
          if ($(this).hasClass('local-tasks-sidebar--toggle--open')) {
            $(this).find('a').attr('title', Drupal.t('Hide Local Tasks'));
            $(this).find('span').find('span').text(Drupal.t('Hide Local Tasks'));
          }
          else {
            $(this).find('a').attr('title', Drupal.t('Show Local Tasks'));
            $(this).find('span').find('span').text(Drupal.t('Show Local Tasks'));
          }
        });
      }
    }
  };

})(jQuery, Drupal);
;
/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.2",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.2",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.2",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.2",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.2",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.2",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()
}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.2",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;
(function ($) {
var ir = ir ? ir : {};

$(function() {
	var webcast_form_valid = 0;
	$('#nav').on('click', $('#nav>li'), nav_click_handler);

	$('.ir_calendar').on('click', $('nav_tab>li'), ir_calendar_click_handler);

	$('.biography').on('click', $('li'), biography_click_handler);
	$('.biography_detail').on('click', $('.back'), biography_click_handler);
	$('.biography').on('click', $('li'), biography_click_handler);

	$('.board_directors').on('click', $('li'), board_directors_click_handler);
	$('.board_directors_detail').on('click', $('.back'), board_directors_click_handler);

	$('.faqs').on('click', 'h6', faq_click_handler);
	$('.faqs').on('click', $('.show_hide'), faq_showhide_handler);

	$('.webcast').on('click', 'li', webcast_click_handler);
	//$('.webcast').on('click', 'li.open', webcast_click_handler);

	$('.pressrelease').on('input', '#pr_search_box', pressrelease_input_handler);
	$('.pressrelease').on('click', '.sprite-clear', pressrelease_clear_handler);
	$('.pressrelease').on('click', '.release_list td, .back', pressrelease_title_handler);
	
	$('#ircontacts_form')
		.add('#email_alert_form')
		.add('#mcontacts_form')
		.add('#webcast_info_form')
		.on('submit', form_submit_check);

	function form_submit_check(e) {
		var $this = $(this),
			$required_fields = $this.find('.error_mark'),
			form_check = 1;
		$required_fields.each(function() {
			var $required_field = $(this).siblings('input, textarea'),
				val = $required_field.val();
			if($required_field.attr('type') == 'email') {
				// email validation check
				var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
				var flag = pattern.test(val);
				if(!flag) {
					$(this).removeClass('none');
					e.preventDefault();
					form_check = 0;
				} else {
					$(this).addClass('none');
				}
			} else {
				// field not empty check
				if (!val) {
					$(this).removeClass('none');
					e.preventDefault();
					form_check = 0;
				} else {
					$(this).addClass('none');
				}
			}
		});
		if(form_check) webcast_form_valid = 1;
	}

	function nav_click_handler(e) {
		var $this = $(e.target);
		$this.find('.nav_second').slideDown('fast');
		$this.siblings().find('.nav_second').slideUp('fast');
	}

	function ir_calendar_click_handler(e) {
		var $this = $(e.target);
		if($this.hasClass('selected')) {
			return;
		} else {
			$this.addClass('selected').siblings().removeClass('selected');
			if($this.hasClass('upcoming')) {
				$('.upcoming_wrapper').css('display', 'inline-block');
				$('.past_wrapper').hide();
			} else if ($this.hasClass('past')) {
				$('.upcoming_wrapper').hide();
				$('.past_wrapper').css('display', 'inline-block');
			}
		}
	}

	function biography_click_handler (e) {
		var $this = $(e.target);
		if($this.hasClass('back')) {
			// $('.back') btn clicked, hide detail
			$('.biography_detail').hide();
			$('.biography').show();
		} else {
			// name list $('li') clicked, show detail
			$('.biography_detail').css('display','inline-block');
			$('.biography').hide();
		}
	}

	function board_directors_click_handler (e) {
		var $this = $(e.target);
		if($this.hasClass('back')) {
			// $('.back') btn clicked, hide detail
			$('.board_directors_detail').hide();
			$('.board_directors').show();
		} else {
			// name list $('li') clicked, show detail
			$('.board_directors_detail').css('display','inline-block');
			$('.board_directors').hide();
		}
	}

	function faq_click_handler(e) {
		var $this = $(e.target),
			$parent = $this.parent('li');
		if($parent.hasClass('open')) {
			// title clicked, hide answer
			$parent.removeClass('open')
				.addClass('closed')
				.children('p').slideUp();
		} else if($parent.hasClass('closed')) {
			// title clicked, hide answer
			$parent.removeClass('closed')
				.addClass('open')
				.children('p').slideDown();
		}
	}

	function faq_showhide_handler(e) {
		var $this = $(e.target),
			$faqs = $('.faqs').find('li');
		if($this.hasClass('show_all')) {
			$faqs.removeClass('closed').addClass('open');
			$this.removeClass('show_all').addClass('hide_all').html('Hide All');
		} else if($this.hasClass('hide_all')) {
			$faqs.addClass('closed').removeClass('open');
			$this.addClass('show_all').removeClass('hide_all').html('Show All');
		}
	}

	function webcast_click_handler(e) {
		var $this = $(this),
			$form = $this.find('form'),
			$player = $('.player_wrap'),
			index;


		if($this.hasClass('closed')) {
			var openSiblings = $this.siblings('.open');
			// console.log(openSiblings.length);
			openSiblings.each(function () {
				$(this).find('.sprite').removeClass('sprite-downgrey').addClass('sprite-upblue');
				$(this).removeClass('open').addClass('closed');
				$(this).find('form').slideUp('fast');
			});			
			$this.find('.sprite').addClass('sprite-downgrey');
			$this.removeClass('closed').addClass('open')
			$form.slideDown('fast');
		} else if($this.hasClass('open')){
			$this.find('.sprite').removeClass('sprite-downgrey').addClass('sprite-upblue');
			$this.removeClass('open').addClass('closed');
			$form.slideUp('fast');
		}

	}

	//called from webcast.html
	function webcast_page_init() {
		/*if(getCookie('webcast_user_filled') != 'filled') {
			$('.listen .sprite').addClass('sprite-upblue');
			return;
		}
		var index = getCookie('webcast_lastplayed'),
			$player = $('.player_wrap'),
			$target_li = $('.webcast').find('li').eq(index);
		$player.appendTo($target_li);
		$target_li.removeClass('closed').addClass('open')
			.find('.sprite').addClass('sprite-downgrey');
		$target_li.siblings().find('.sprite').addClass('sprite-upblue');*/
	}
	ir.webcast_page_init = webcast_page_init;

	// manage cookie 
	function setCookie(name,value) { 
	    var Days = 30; 
	    var exp = new Date(); 
	    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
	    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
	} 
	// manage cookie 
	function getCookie(name) { 
	    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
	    if(arr=document.cookie.match(reg))
	        return unescape(arr[2]); 
	    else 
	        return null; 
	} 

	function pressrelease_input_handler(e) {
		if($('#pr_search_box').val() != "") {
			$('.sprite-clear').css('display','inline-block');
		}
	}
	function pressrelease_clear_handler(e) {
		$('#pr_search_box').val('').focus();
		$('.sprite-clear').hide();
	}
	function pressrelease_title_handler(e, ele) {
		var $this = $(ele).length ? $(ele) : $(e.target),
			$detail = $('.pr_detail');
		if($this.hasClass('back')) {
			// $('.back') btn clicked, hide detail
			$detail.hide();
			$('.pr_list').show();
			window.location.hash = '';
		} else {
			// name list $('li') clicked, show detail
			var d_info =  {
				'time' 		: $this.siblings('.date').html(),
				'title' 	: $this.html(),
				'text' 		: $this.siblings('.hidden_detail').html(),
				'list_id'	: $this.parents('tr').data('listid')
			};
			$('.pr_list').hide();
			$detail.find('h1').html(d_info.title);
			$detail.find('.pr_time').html(d_info.time);
			$detail.find('.pr_detail_wrap').html(d_info.text);
			$detail.css('display','inline-block');
			window.location.hash = d_info.list_id;
		}
	}
	//called from pressrelease.html
	function pressrelease_page_init() {
		pressrelease_page_init = "";
		var hash = window.location.hash.slice(1),
			$tr = $('tr[data-listid=' + hash + ']');
		if (!hash.length) return;
		if (!$tr.length) return;
		$('.pressrelease .release_list td').eq(0).trigger('click', $tr.find('.title'));
	}
	ir.pressrelease_page_init = pressrelease_page_init;










});
})(jQuery);;
// Default Theme JS that will be loaded on all pages.
// Note that this is the format JS should be wrapped in.
//
// See: https://www.drupal.org/node/2269515

(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
		$('a.news-detail-download').attr('href',$('.nir-node--type-nir-news .node--nir-news--full .file--application-pdf a').attr('href'));
		
		$(".field--name-field-nir-document a, .file--mime-audio-mpeg a,.block--system-menu-blocktools li a, .file--mime-application-octet-stream a, .field--name-field-nir-ext-document .field__items .field__item a,.md-download a, .file--mime-application-pdf a, .webcast-link a, .file--mime-application-rtf a, .file--mime-application-vnd-ms-excel a, .html-link a, .file--mime-application-xml a,.nir-node--type-nir-sec-filing .doc-group .html-link a,.field--name-field-nir-ext-document a,.block-views-blockwidget-bundled-content-block-1 .show-all,.block-views-blockwidget-bundled-content-block-1 .show-all.hide-all,.nir-node--type-person .field.committee-composition ul li a, .normal-webcast-link a, .webcast-link a").each(function (index) {
        var linkText = $(this).text();
        $(this).text('');
        var span = $('<span />').text(linkText);
        $(this).append(span);
    });
		
		/** Some custom scrip to hide Annual on home pahe **/
		$('.block--nir-assets__widget--5806 .nir-widget--list article .field__item').each( function(){
			if( $(this).find('a').text() == 'Annual'){
				 $(this).hide();
			}
		});
		$('.block--system-menu-blockir ul li ul li.menu-active > a').addClass('is-active');
	
    }
  };
})(jQuery, Drupal);

(function ($, Drupal) {
    $(function () {
        if ($('.w_mright').length == 0 && $('.w_mid').length == 1) {
            // in index page
            $('#nav .home').addClass('check');
        } else if ($('.w_mright').length > 0) {
            // in detail page
            var page_name = $('.w_mright').clone().removeClass('w_mright')[0].className.split(' ')[0];
            $('.nav_second').find('.nav_' + page_name)
                .addClass('check').parents('li').addClass('open');
        }
        $('#nav').css('visibility', 'visible');
    });
    $("#block-nir-pid2206-investorrelations > ul > li > ul").addClass("nav_second");
    /*$(function(){
     if($("#block-nir-pid2206-investorrelations > ul > li > ul").hasClass("nav_second){
     $(this).sibling('a').removeAttr('href');
     }*/
    setTimeout(function () {
        $('#block-nir-pid2206-investorrelations > ul > li').each(function () {
            if ($(this).find('ul').length > 0) {
                $(this).find('> a').attr('href', 'javascript:void(0);');
                $(this).find('> a').removeClass('is-active');
            }
            if ($(this).find('ul a').hasClass('is-active')) {
                $(this).find('ul').show();
            }

        });
    }, 1000);
    $("#block-nir-pid2206-investorrelations > ul > li").click(function () {
        $("#block-nir-pid2206-investorrelations > ul > li .nav_second").hide();
        $(this).find('.nav_second').show();
    });
	$(".nir-node--9451 .block-region-contentmain p a").replaceWith(function() { return this.innerHTML; });
	
	// var height_one = $(".nir-node--5896 .radix-layouts-column1").height();
	// var height_two = $(".nir-node--5896 .radix-layouts-column2").height();
	// var max_height;
		// if(height_one>height_two){
			// max_height=height_one;
		// }
		// else{
			// max_height=height_two;
		// }
		// $(".nir-node--5896 .col-md-6").css('height','max_height');
		
})(jQuery, Drupal);;
(function ($, Drupal, DrupalSettings) {
  'use strict';
  Drupal.behaviors.nirMarketDataBlock = {
    attach: function (context, settings) {
      var ajax_flag = 'TRUE';
      if (!$(document.body).hasClass('nmdbsq')) {
        $('.block-market-data-block__stock-quote', context).once('stockQuoteBlock').each(
          function (i, obj) {
            // An ID could not exist and we'd have to set one manually.
            var id = $(this).attr('id');
            if (!id && $(this).data('uuid')) {
              id = 'nir-ipe-block_' + $(this).data('uuid')
              $(this).attr('id', id);
            }
            if (id) {
              var panel_id = $(this).attr('data-storage-id');
              if (panel_id) {
                ajax_flag = 'TRUE';
                var editTab = null;
                if (Drupal.panels_ipe && Drupal.panels_ipe.app) {
                  editTab = Drupal.panels_ipe.app.get('editTab');
                  if (editTab.get('active') && !editTab.get('loading')) {
                    ajax_flag = 'FALSE';
                  }
                }
              }
              else {
                panel_id = 'NULL';
              }
              var url = 'ajax/market-data-api/stock-quote/' + id + '/' + panel_id + '/' + ajax_flag;
              var stockLoaderAjax = Drupal.ajax({
                url: Drupal.url(url),
                type: 'GET'
              });
          
              if (!editTab || (!editTab.get('active') && !editTab.get('loading'))) {
                stockLoaderAjax.execute();
              }
            }
          }
        );
        $(document.body).addClass('nmdbsq');
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
;
(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.stockQuote = {
    attach: function (context, settings) {
      $('.quote-wrap').each(function () {
        if ($('.user-toggle-on').length) {
          $(document).on('change', '.quote-wrap select', function () {
            var val = $(this).val();
            var wrap = $(this).parent();
            $('.stock-quote', wrap).css('display', 'none');
            $('.stock-quote[data-exchange="' + val + '"]', wrap).css('display', 'block');
          });
        }
      });
    }
  };
})(jQuery, Drupal);

;
/**
 * @file
 * Styling for the Stock Chart
 *
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.stockChartStyling = {
    attach: function (context, settings) {
      $(document).ready(function () {
        redraw();
      })
      $(window).resize(function () {
        if(this.resizeTO) clearTimeout(this.resizeTO);
          this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
          }, 500);
      });
      //redraw graph when window resize is completed
      $(window).on('resizeEnd orientationchange', function () {
        redraw();
      });
      function redraw() {
        $('.nir-stock-chart').each(function () {
          var winWidth = $(window).width();
          var frameHeight = $(this).height();
          var frameWidth = $(this).width();
          var frameRatio = frameHeight / frameWidth;
          if (winWidth < frameWidth) {
            $(this).width(winWidth);
            $(this).height(winWidth * frameRatio);
          } else {
            $(this).width($(this).attr('width'));
            $(this).height($(this).attr('height'));
          }
        })
      }
    }
  }

})(jQuery, Drupal);
;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? $.trim(callback(this[0])) : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });

    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields = void 0;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');

        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };

  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          var browserData = localStorage.getItem('Drupal.visitor.' + info);
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();
          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          if ($element.length) {
            localStorage.setItem('Drupal.visitor.' + info, $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url = void 0;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $('#' + hash);
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);

      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);

  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);

  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.detailsAria = {
    attach: function attach() {
      $('body').once('detailsAria').on('click.detailsAria', 'summary', function (event) {
        var $summary = $(event.currentTarget);
        var open = $(event.currentTarget.parentNode).attr('open') === 'open' ? 'false' : 'true';

        $summary.attr({
          'aria-expanded': open,
          'aria-pressed': open
        });
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Modernizr, Drupal) {
  function CollapsibleDetails(node) {
    this.$node = $(node);
    this.$node.data('details', this);

    var anchor = window.location.hash && window.location.hash !== '#' ? ', ' + window.location.hash : '';
    if (this.$node.find('.error' + anchor).length) {
      this.$node.attr('open', true);
    }

    this.setupSummary();

    this.setupLegend();
  }

  $.extend(CollapsibleDetails, {
    instances: []
  });

  $.extend(CollapsibleDetails.prototype, {
    setupSummary: function setupSummary() {
      this.$summary = $('<span class="summary"></span>');
      this.$node.on('summaryUpdated', $.proxy(this.onSummaryUpdated, this)).trigger('summaryUpdated');
    },
    setupLegend: function setupLegend() {
      var $legend = this.$node.find('> summary');

      $('<span class="details-summary-prefix visually-hidden"></span>').append(this.$node.attr('open') ? Drupal.t('Hide') : Drupal.t('Show')).prependTo($legend).after(document.createTextNode(' '));

      $('<a class="details-title"></a>').attr('href', '#' + this.$node.attr('id')).prepend($legend.contents()).appendTo($legend);

      $legend.append(this.$summary).on('click', $.proxy(this.onLegendClick, this));
    },
    onLegendClick: function onLegendClick(e) {
      this.toggle();
      e.preventDefault();
    },
    onSummaryUpdated: function onSummaryUpdated() {
      var text = $.trim(this.$node.drupalGetSummary());
      this.$summary.html(text ? ' (' + text + ')' : '');
    },
    toggle: function toggle() {
      var _this = this;

      var isOpen = !!this.$node.attr('open');
      var $summaryPrefix = this.$node.find('> summary span.details-summary-prefix');
      if (isOpen) {
        $summaryPrefix.html(Drupal.t('Show'));
      } else {
        $summaryPrefix.html(Drupal.t('Hide'));
      }

      setTimeout(function () {
        _this.$node.attr('open', !isOpen);
      }, 0);
    }
  });

  Drupal.behaviors.collapse = {
    attach: function attach(context) {
      if (Modernizr.details) {
        return;
      }
      var $collapsibleDetails = $(context).find('details').once('collapse').addClass('collapse-processed');
      if ($collapsibleDetails.length) {
        for (var i = 0; i < $collapsibleDetails.length; i++) {
          CollapsibleDetails.instances.push(new CollapsibleDetails($collapsibleDetails[i]));
        }
      }
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e, $target) {
    $target.parents('details').not('[open]').find('> summary').trigger('click');
  };

  $('body').on('formFragmentLinkClickOrHashChange.details', handleFragmentLinkClickOrHashChange);

  Drupal.CollapsibleDetails = CollapsibleDetails;
})(jQuery, Modernizr, Drupal);;
