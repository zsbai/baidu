define("detail:static/hao123/utils/browserSDK.js",function(n,t){var o={NONE:0,MESSAGE:1,NAVIGATOR:2},e=o.NONE,i=-1!==navigator.userAgent.indexOf("MSIE 6.0"),a=-1!==navigator.userAgent.indexOf("MSIE 7.0"),r="onmessage"in window&&"postMessage"in window;r?e=o.MESSAGE:(i||a)&&(e=o.NAVIGATOR);var s=(new Date).getTime().toString(32)+"-"+Math.ceil(9999999999*Math.random()).toString(32),c=function(n){var t=n.targetWindow,i=n.role,a=n.id,r=n.domain,s=this;this.onMessage=n.onMessage||function(){};var c=function(n){var t=null;n.origin&&n.type&&n.origin==r?t=JSON.parse(n.data):n.role!=i&&n.id==a&&(t=n),t&&s.onMessage&&s.onMessage(t)};do{if(e==o.MESSAGE){window.addEventListener?window.addEventListener("message",c,!1):window.attachEvent&&window.attachEvent("onmessage",c),this.postMessage=function(n){n.role=i,n.id=a;var o=JSON.stringify(n);t.postMessage(o,r)};break}e==o.NAVIGATOR&&(window.navigator.__postMessage__=window.navigator.__postMessage__||[],window.navigator.__postMessage__.push(c),this.postMessage=function(n){n.role=i,n.id=a;for(var t=0;t<window.navigator.__postMessage__.length;t++)window.navigator.__postMessage__[t](n)})}while(0)},u=function(n,t){return n.replace(/{{(\w+)}}/g,function(n,o){return 0===t[o]?0:t[o]||""})},d=function(){var n=function(){var n=new Image;return function(t){t=t||{},t.random=Math.random(),n.src=u("http://dr.dh.baidu.com/a.log?softid=135&cmdid=1600&c1={{action}}&c2={{guid}}&c3={{appVersion}}&c4={{appSupplyId}}&_={{random}}",t)}}();return{pvReport:function(){var t={action:"VHAO123PV"};n(t)},initReport:function(t){t.action="VHAO123INIT",n(t)},downloadReport:function(t){t.action="VHAO123DOWNLOAD",n(t)},wakeupReport:function(t){t.action="VHAO123WAKEUP",n(t)}}}();t.dataReport=d;var p,h,g,f=function(n){var t=new c(n);this.getAppInfo=function(n){t.onMessage=function(t){"getAppInfo"==t.ack&&n&&n(t)},t.postMessage({query:"getAppInfo"})},this.launchApp=function(n,o){t.onMessage=function(n){"launchApp"==n.ack&&o&&o(n)},t.postMessage({query:"launchApp",url:n})}},l="http://webapi.br.baidu.com",w=l+"/api_res/channels/hao123/bridge.html",v=!1,m=!1,A=function(n){w+="#url="+encodeURIComponent(n||"http://www.hao123.com"),w+="&id="+s;try{p=document.createElement('<iframe src="'+w+'" width="0" height="0" style="width:0;height:0;"></iframe>')}catch(t){p=document.createElement("iframe"),p.setAttribute("width",0),p.setAttribute("height",0),p.setAttribute("src",w)}p.style.visibility="hidden",$(p).on("load",function(){h=new f({targetWindow:p.contentWindow,id:s,role:"parent",domain:l}),h.getAppInfo(function(n){v=!0,d.initReport(n),g=n,n.pluginOK&&n.appOK&&(m=!0),M()})}),document.body.appendChild(p)},_=[],M=function(){for(;_.length;){var n=_.shift();n(m)}};t.checkApp=function(n){return _.push(n),v||p?void(v&&M()):A()};{var b=(t.launchApp=function(n,t){return _.push(function(){b(n,t)}),v||p?void(v&&M()):A(n)},function(n,t){return m||g&&g.pluginOK?void h.launchApp(n,function(n){d.wakeupReport(n),t(!0)}):t(!1)}),O="http://j.br.baidu.com/v1/p/browser/c/hao123/ch_url_jump?m=u2t&tn=11600001&url=";t.downloadApp=function(n){d.downloadReport(g);var t="http://v.hao123.baidu.com/dianying";return g&&g.pluginOK?void h.launchApp(n,function(){}):n.length<=130?void(location.href=O+encodeURIComponent(n)):void $.ajax({url:"http://j.br.baidu.com/v1/p/browser/tn/hao123/ch_url_jump.jsonp?cb=?",data:{m:"l2s",url:n,tn:"20140001"},jsonp:"cb",dataType:"jsonp",timeout:3e3,success:function(n){return 0===n.errCode&&n.data&&n.data.url?void(location.href=O+encodeURIComponent(n.data.url)):void(location.href=O+encodeURIComponent(t))},error:function(){location.href=O+encodeURIComponent(t)}})}}});