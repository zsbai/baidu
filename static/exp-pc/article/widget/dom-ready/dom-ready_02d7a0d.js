define("article:widget/dom-ready/dom-ready.js",function(e,n){function t(){function e(){c?window.removeEventListener("scroll",e):o.height()>t.height()-d&&(i.show(),c=!0)}var n=r(window).height()||0,t=r(".exp-content-container"),o=r(".exp-content"),i=r(".read-whole-mask"),a=r(".exp-content-block")[0],d=a?a.offsetTop:0,c=!1;n>0&&(e(),window.addEventListener("scroll",e),i.on("click",function(){s.send(location.href,2019,{module:"article",page:"index",pos:"read-whole-mask",action:"click"}),t.removeClass("fold"),i.hide()}))}function o(e){return(parseInt(e,10)+g.length)%g.length}function i(e){if(m[e])return m[e];var n=g.eq(e),t=n.attr("data-text");if(t)return t;var o=n.parents(".exp-content-block");return t=r.trim(r(".exp-content-body",o)[0].innerText),t="END"===t.slice(-3)?t.slice(0,-3):t,m[e]=t,t}function a(e){if(e===f)return l.play(),g.eq(f).addClass("playing"),1;var n=0>f?0:f;g.eq(n).removeClass("playing"),f=o("next"===e?f+1:e),g.eq(f).addClass("playing"),l.changeText(i(f)),l.play()}function d(e){g.eq(o(e)).removeClass("playing"),l.pause()}function c(){if(t(),"undefined"==typeof Audio)return 1;l=new p({onplay:function(){s.send(location.href,2019,{module:"article",page:"index",pos:"audio",action:"play"})},onended:function(){g.eq(f).removeClass("playing"),f<g.length-1&&a("next")}}),r.each(g,function(e,n){r(n).attr("data-index",e),r(n).css({display:"inline-block"}),r(n).on("click",function(t){t.preventDefault();parseInt(r(n).attr("data-index"),10);return l.paused||e!==f?(a(e),void s.send(location.href,2019,{module:"article",page:"index",pos:"audio-play",action:"click"})):(d(e),s.send(location.href,2019,{module:"article",page:"index",pos:"audio-pause",action:"click"}),1)})}),u.on("douwan-video/play",function(){d(f)});var e=0;r(".bottom-text-ads").find("#EC_l").find("a").find(".EC_tit").each(function(n,t){"block"===r(t).css("display")&&"hidden"!==r(t).css("visibility")&&e++}),s.send(window.location,2019,{module:"article",page:"index",pos:"bottom",action:"show",adCount:e})}var l,r=e("common-jquery:widget/lib/jquery/jquery.js"),s=e("common-jquery:widget/js/logic/log/log.js"),u=e("common:widget/lib/fis/event/event.js").eventCenter,p=e("common-jquery:widget/js/logic/text2audio/text2audio.es").Text2Audio,f=-1,g=r(".audio-wp"),m=[];n.init=c});