function loadedCallback(){$.ajax({url:BASE_URL+"wave",success:function(e){var t=swf.getMovie("flash");t.set_ajax_data(e)}})}$(function(){function e(t){var t=t||{},n=t.content,r=t.data||{},i=t.extra||{},o="";if(n)if("intro"===t.type){if(r.name&&r.content&&r.content+""){if("tengxunjinbenxinxi"===r.name){var a=r;r={name:"baike",content:{"abstract":a.content.description,image:"http://chuangshi.qq.com/Public/mainsite/Uploads/"+a.content.cover,url:a.content.midpage}}}switch(r.name){case"baike":case"news":o=bt(s[r.name],{data:r.content,extra:i});break;case"shixiaoxinwen":i.isshixiaoxinwen=!0,o=bt(s.news,{data:r.content,extra:i});break;case"yeyou":if(r.extend&&r.extra&&s.hasOwnProperty(r.extend)){var u=r.extra.enterUrl,c=t.elm.attr("title");return u&&(i.extraTpl='<a class="linkColor gameUrl" k="'+c+'" target="_blank" href="'+u+'">\u8fdb\u5165\u6e38\u620f &gt;</a><br />',i.extraLine=1),o=bt(s[r.extend],{data:r.content,extra:i}),n.html(o),$.fire("changelink.yeyouzxlinks",[c,n]),void 0}break;case"qiche":o=bt(s[r.extend],{data:r.content,extra:i});break;default:o=bt(s.def,{detailurl:i.detailurl})}}else o=bt(s.def,{detailurl:i.detailurl});n.html(o)}else if("list"===t.type){switch(r.appearance){case 2:o=bt(l.music,{data:r,extra:i});break;default:o=bt(l.def,{data:r,extra:i})}if(n.html(o),r.intro){var d=n.find("div.item-hd a.list-title").eq(0);i.detailurl=d.attr("href")||d.attr("href_top"),e({type:"intro",elm:d,data:r.intro,extra:i,content:n.find("div.item-bd").eq(0)})}}}function t(t,n){if(!t.data("lock")){n.html(a);var r=t.attr("title"),i=t.attr("data");if(r&&i){var o=i.split("|"),s=o[0],l=(o[1],t.attr("href")||t.attr("href_top"));$.ajax({url:BASE_URL+"detail/intro?boardid="+s+"&keyword="+r,dataType:"json",success:function(r){e({type:"intro",elm:t,content:n,data:r,extra:{detailurl:l}}),t.data("lock",!0)}})}}}function n(t,n){if(!t.data("lock")){n.html("<div style='height:200px;position:relative'>"+a+"</div>");var r=t.attr("data");r&&$.ajax({url:BASE_URL+"detail/list?boardid="+r,dataType:"json",success:function(i){t.data("lock",!0),e({type:"list",elm:t,content:n,data:i,extra:{boardid:r}})}})}}function r(e){var t="";for(var n in e)for(var r=0,i=e[n].length;i>r;r++)t+="&boardwords["+n+"]["+r+"]="+e[n][r];return t}function i(e,t){var n=e.parent(),r=n.find("ul"),i=n.find("li"),o=i.length,a=n.find("a.tab-btn");if(!(4>=o)){var s=-parseInt(r.css("marginLeft")),l=parseInt(r.css("width")),u=a.eq(0),c=a.eq(1);if("prev"==t){if(0>s-p)return;r.css("marginLeft",-(s-p)),0>=s-p&&u.addClass("tab-btn-disable"),c.removeClass("tab-btn-disable")}else{if(s+p+f>=l)return;r.css("marginLeft",-(s+p)),s+2*p+f>=l&&c.addClass("tab-btn-disable"),u.removeClass("tab-btn-disable")}r.hide(),setTimeout(function(){r.show()},100)}}var o=location.href.indexOf("category")>-1;window.loadItem=function(e,t){var n=$(e).parent().parent().find("a.suolve"),r=33600,i=240;if(1===t){var a,s,l=e.width,u=e.height,c=120,d=110;l>c&&l/u>=c/d?(a=c,s=parseInt(a*u/l)):u>d&&c/d>l/u?(s=d,a=parseInt(s*l/u)):(a=l,s=u),e.style.width=a+"px",e.style.height=s+"px";var f=a*s,p=parseInt(2*(r-f)/i)-35;n.attr("data")&&(p-=30*parseInt(n.attr("data"))),o&&(p-=40)}else var p=parseInt(2*r/i)-35;n.html(suolve(n.html(),p)).show()};var a='<span class="ajaxloading"></span>',s={baike:'<div class="item-info"><%if (data.image) {%><a target="_blank" class="item-img" href="<%-extra.detailurl%>"><img onload="loadItem(this, 1)" onerror="loadItem(this, 0)" src="<%-data.image%>" /></a><%}%><p class="item-text"><%-extra.extraTpl%><a target="_blank" class="suolve" <%if (data.image) {%>style="display:none;"<%}%> data="<%-extra.extraLine%>" href="<%-extra.detailurl%>"><%=suolve(data.abstract, 270)%></a></p></div>',news:'<div class="<%if (extra.isshixiaoxinwen){%>shixiaoxinwen <%}%>item-news"><%-extra.extraTpl%><%var n = 0;%><%for (var i in data) {%><%var v = data[i]%><%var reduce = 0;%><%if ( extra.extraLine ){ reduce = 2 * 25 * parseInt(extra.extraLine); } %><%if ( n === 0) {%><div class="item-headline"><a target="_blank" title="<%=v.title%>" href="<%-extra.detailurl%>" class="info-title"><%=suolve(v.title, 40)%></a><p class="info-text"><%=suolve(v.description, 220 - reduce)%></p></div><%}else{%><%if ( n > 0 ) { break; } %><p class="links"><a title="<%=v.title%>" target="_blank" href="<%-extra.detailurl%>" class="info-title"><%=suolve(v.title, 40)%></a></p><%}%><%n=n+1;%><%}%></div>',def:'<div class="item-default"><a target="_blank" href="<%-detailurl%>">\u67e5\u770b\u8be6\u60c5 &gt;</a></div>'},l={music:'<div class="list-tt"><span class="tt-index">\u6392\u540d</span><span class="tt-title">\u6b4c\u66f2\u540d</span><span class="tt-value">\u6b4c\u624b</span></div><ul class="music-list noshare is_index"><%for (var i = 0, len = data.list.length; i < len; i++ ) {%><%if ( i>= 8) {%><%break;%><%}%><%var v = data.list[i]%><%var defaultlinks = {"0":["",""], "1":["",""], "2":["",""], "3":["",""], "4":["",""], "5":["",""], "6":["",""], "baselinkid":["",""]} %><%var links = $.extend(defaultlinks, v.links)%><li><div class="item-hd"><input class="musiccheck" data="<%-links["baselinkid"][0]%>" type="hidden" /><span class="<%if ( i < 3 ) { %>num-top<% } else { %>num-normal<% } %>"><%=(i + 1)%></span><%if( links[0][0] !== "" ){ %><a class="fl" target="_blank" href="http://music.baidu.com/song/<%-links["baselinkid"][0]%>"><img class="fl" width="40" src="<%-links[0][0]%>" /></a><div class="fl music-info"><a target="_blank" title="<%=v.keyword%>" class="list-title" data="<%-extra.boardid%>|<%-extra.boardid%>" href="http://music.baidu.com/song/<%-links["baselinkid"][0]%>"><%=suolve(v.keyword, 20)%></a><%if (v.isNew === 1) { %><span class="icon icon-new"></span><% } %><div class="cl"><%if (links[1][0]!=="" && links[1][1]!=="") { %><a class="icon-music fl mr10" target="_blank" href="<%-links[1][0]%>"><%=links[1][1]%></a><% } %><%if (links[2][0]!=="" && links[2][1]!=="") { %><a class="icon-mv fl mr10" target="_blank" href="<%-links[2][0]%>"><%=links[2][1]%></a><% } %></div></div><% } else { %><a target="_blank" title="<%=v.keyword%>" class="list-title" data="<%-extra.boardid%>|<%-extra.boardid%>" href="http://music.baidu.com/song/<%-links["baselinkid"][0]%>"><%=suolve(v.keyword, 20)%></a><%if (v.isNew === 1) { %><span class="icon icon-new"></span><% } %><%if (links[1][0]!=="" && links[1][1]!=="") { %><a class="icon-music fl mr10" target="_blank" href="<%-links[1][0]%>"><%=links[1][1]%></a><% } %><%if (links[2][0]!=="" && links[2][1]!=="") { %><a class="icon-mv fl mr10" target="_blank" href="<%-links[2][0]%>"><%=links[2][1]%></a><% } %><% } %><%if (links[3][0]!=="" && links[3][1]!=="") { %><a target="_blank" href="<%-links[3][0]%>" class="singer-name"><%=links[3][1]%></a><% } %></div></li><%}%></ul><a class="music-play-select" href="javascript:void(0)" target="_blank">\u64ad\u653e\u699c\u5355</a><a class="whole" <%if (data.target && data.target !=="") {%>target="_blank"<%}%> href="<%-data.url%>">\u67e5\u770b\u66f4\u591a</a>',def:'<div class="list-tt"><span class="tt-index">\u6392\u540d</span><span class="tt-title">\u5173\u952e\u8bcd</span><span class="tt-value"><%if(data.list[0] && data.list[0].hasOwnProperty("percentage")){%>\u5173\u6ce8\u5ea6<%}else{%>\u641c\u7d22\u6307\u6570<%}%></span></div><ul class="item-list"><%for(var i = 0, len = data.list.length; i < len; i++ ){%><%var v = data.list[i]%><li<%if (i===0){%> class="current"<%}%>><div class="item-hd"><span class="<%if (i < 3) {%>num-top<%}else{%>num-normal<%}%>"><%=i+1%></span><%if (checkLikeYeYou(extra.boardid)) { %><a href="./detail?b=<%-extra.boardid%>&amp;w=<%:u=v.keyword%>&amp;ie=utf-8" class="list-title" data="<%-extra.boardid%>|<%-extra.boardid%>" title="<%=v.keyword%>" target="_blank"><%=suolve(v.keyword, 18)%></a><% } else { %><a href="<%=href_ps_prep%><%:u=v.keyword%>" href_top="./detail?b=<%-extra.boardid%>&amp;w=<%:u=v.keyword%>&amp;ie=utf-8" class="list-title" data="<%-extra.boardid%>|<%-extra.boardid%>" title="<%=v.keyword%>" target="_blank"><%=suolve(v.keyword, 18)%></a><% } %><%if (v.isNew && v.isNew !== "") {%><span class="icon icon-new"></span><%}%><%if (v.links[0] && v.links[0] !== "") {%><%if (v.links[0][1] === "\u8d2d\u7968") { %><a class="icon-piao" target="_blank" href="<%-v.links[0][0]%>">\u8d2d\u7968</a><% } else { %><a class="icon-video" target="_blank" href="<%-v.links[0][0]%>">&nbsp;</a><% } %><%}%><%if (v.hasOwnProperty("percentage")) {%><div class="icon-attention attention-red fr"><span style="width:<%-v.percentage%>%">&nbsp;</span></div><%}else{%><span class="icon-<%-v.trend%>"><%-v.searches%></span><%}%><a href="./detail?b=<%-extra.boardid%>&amp;w=<%:u=v.keyword%>&amp;ie=utf-8" class="icon-search icon-xiang-imp" target="_blank">search</a></div><div class="item-bd" style="<%if (i === 0){%>display:block;height:122px;<%}else{%>display:none;<%}%>"></div></li><%}%></ul><a class="whole" href="./buzz?b=<%-extra.boardid%>">\u5b8c\u6574\u699c\u5355</a>'},u=_.debounce(function(){var e=$(this),n=e.siblings(".current"),r=e.find("div.item-bd");e.addClass("current"),r.show(),n.removeClass("current").find("div.item-bd").hide(),t(e.find("a.list-title"),r)},500);if($(document.body).delegate("ul.item-list > li","mouseover mouseout",function(e){if("mouseover"===e.type){if($(this).addClass("hover").siblings(".hover").removeClass("hover"),$(this).hasClass("current"))return;u.apply(this)}else"mouseout"===e.type&&$(this).removeClass("hover")}),$(document.body).delegate("div.box-cont div.tab-hd > ul > li","click",function(){n($(this),findtabbox($(this)))}),$(document.body).delegate("a.music-play-select","mousedown",function(){var e="http://music.baidu.com/box?__methodName=mboxCtrl.playSong&fr=fengyunbang&__argsValue=",t=$(this),n=[];t.parent().find("input.musiccheck").each(function(){var e=$(this).attr("data");e&&n.push(e)}),n.length?t.attr("href",e+n.join("_")):(t.attr("href","javascript:;"),alert("\u8bf7\u9009\u4e2d\u9700\u8981\u64ad\u653e\u7684\u6b4c\u66f2"))}),$("div.box-cont").length){var c={},d={};$("div.box-cont li.current a.list-title").each(function(){var e=$(this).attr("title"),t=$(this).attr("data"),n=t.split("|"),r=n[0],i=n[1];c[i]=[r,encodeURIComponent($.trim(e))];var o=$(this).parent().siblings("div.item-bd");o.html(a),d[n[1]]=o}),$.ajax({type:"POST",url:BASE_URL+"detail/intros",data:r(c),dataType:"json",success:function(t){for(var n in d){var r=d[n],i=r.siblings("div.item-hd").find("a.list-title");e({type:"intro",elm:i,content:r,data:t[n],extra:{detailurl:i.attr("href")||i.attr("href_top")}}),i.data("lock",!0),i.parents("div.tab").find(".tab-skin-main li.current").data("lock",!0)}}})}if($("div.tab-control > a.tab-btn").length){var f=268,p=68;$("div.tab-control").each(function(){var e=$(this),t=e.find("ul"),n=e.find("a.tab-btn"),r=e.find("li");t.data("init")||(t.css({width:p*r.length,marginLeft:0}).data("init",!0),n.eq(0).addClass("tab-btn-disable"),4>=r.length&&n.eq(1).addClass("tab-btn-disable"))}),$(document.body).delegate("div.tab-control > a.tab-btn","click",function(){i($(this),$(this).hasClass("tab-btn-prev")?"prev":"next")})}}),$(function(){var e=location.href.indexOf("/category?")>-1,t=function(){var e=$(this),t=e.offset(),n=t.left+10,r=t.top+390,i=e.find("div.tab-skin-hot li.current").index(),o="",a=0,s=50;if(e.find("div.tab-box").eq(i).find("a.list-title").each(function(e){var t=$(this).text();a+=t.length,a>s||(o+="\u3010"+(e+1)+"\u3011"+t)}),0===i)var l="#"+BASE_DATE+"\u5b9e\u65f6\u70ed\u70b9\u6392\u884c\u699c#"+o+" \u5206\u4eab\u81ea@\u767e\u5ea6\u641c\u7d22\u98ce\u4e91\u699c",u=1;else var l="#"+BASE_DATE+"\u4e03\u65e5\u5173\u6ce8\u6392\u884c\u699c#"+o+" \u5206\u4eab\u81ea@\u767e\u5ea6\u641c\u7d22\u98ce\u4e91\u699c",u=42;showbdshare(n,r,"{'text':'"+l+"','title':'"+l+"','pic':'"+BASE_URL+"buzz/shot/"+u+".png','url':'"+BASE_URL+"buzz?b="+u+"'}")},n=function(){var t=$(this),n=t.find("div.tab-hd li.current"),r=n.index();if(t.find("div.tab-box").eq(r).find("ul").hasClass("noshare"))return hidebdshare(),void 0;var i=t.offset(),o=i.left+10,a=i.top+(e?510:540),s="",l=0,u=50,c=$.trim(n.text()),d=$.trim(t.find("h2.title").text()),f=e?t.find("h2.title").attr("data"):n.attr("data"),p=BASE_URL+"buzz?b="+f;t.find("div.tab-box").eq(r).find("a.list-title").each(function(e){var t=$(this).text();l+=t.length,l>u||(s+="\u3010"+(e+1)+"\u3011"+t)}),"\u5c0f\u8bf4"===d&&"\u5168\u90e8"!==c&&(c+=d),"\u5168\u90e8"===c&&(c=d);var h="#"+BASE_DATE+c+"\u6392\u884c\u699c#"+s+" \u5206\u4eab\u81ea@\u767e\u5ea6\u641c\u7d22\u98ce\u4e91\u699c";showbdshare(o,a,"{'text':'"+h+"', 'title':'"+h+"', 'url':'"+p+"'}")},r=function(){var e=$(this),t=e.offset(),n=t.left+10,r=t.top+390,i="",o=0,a=50,s=e.find("div.flip-list").eq(0);s.find("div.word").each(function(){var e=$.trim($(this).text());o+=e.length,o>a||""===e||(i+="\u3010"+e+"\u3011")});var l="#"+BASE_DATE+"\u4e0a\u699c\u65b0\u8bcd#"+i+" \u5206\u4eab\u81ea@\u767e\u5ea6\u641c\u7d22\u98ce\u4e91\u699c",u="",c=s.find("img");if(c.length>0){var d=c.eq(0).attr("src");u=",'pic':'"+d+"'"}showbdshare(n,r,"{'text':'"+l+"','title':'"+l+"','url':'"+BASE_URL+"'"+u+"}")};$("div.box-hot").hover(function(){t.apply(this)},function(){}),$("div.box-hot .tab-skin-hot li").bind("click",function(){var e=$(this).parents("div.box-hot").get(0);setTimeout(function(){t.apply(e)},100)}),$("#box-today").hover(function(){r.apply(this)},function(){}),$("div.box-cont").hover(function(){n.apply(this)},function(){}),$(document.body).delegate("div.box-cont div.tab-hd li","click",function(){var e=$(this).parents("div.box-cont");setTimeout(function(){n.apply(e)},500)})}),$(function(){function e(e,t){if(!e.data("run")){e.data("run",!0);var n=e.width(),r=e.height(),i=document.createElement("div");i.style.cssText="position:absolute;top:0;left:0;height:"+r+"px;z-index:1;border-color:transparent transparent transparent #999;_border-color:tomato tomato tomato #ddd;_filter:chroma(color=tomato);-moz-opacity: 0.5;opacity: 0.5;border-style:solid;border-width:0 0 0 "+n+"px;width:0;";var o=22,a={borderTopWidth:o,borderLeftWidth:0,borderRightWidth:0,borderBottomWidth:o,top:0-o,left:n/2},s={borderTopWidth:0,borderLeftWidth:0,borderRightWidth:n,borderBottomWidth:0,top:0,left:0};e.append(i),e.children("div.active").removeClass("active");var l=$(i);l.animate(a,200,function(){i.style.borderColor=/msie 6/i.test(navigator.userAgent)?"tomato #ddd tomato tomato":"transparent #999 transparent transparent",l.animate(s,200,function(){l.remove(),e.children(".flip-list").eq(t).addClass("active"),e.data("run",!1)})})}}$(document.body).delegate("#flip-page a","click",function(){return $(this).hasClass("active")?void 0:($(this).addClass("active").siblings("a.active").removeClass("active"),e($("#flip-list"),$(this).index()),!1)})}),$(function(){swf.create({id:"flash",url:FLASH_URL+"/static/flash/wave/wave.swf",wmode:"transparent",width:635,height:120,errorMessage:'<a href="http://index.baidu.com" target="_blank"><img src="//top.bdimg.com/frontend/static/index/index.jpg"></a>',vars:{href:BASE_URL+"news",url:BASE_URL+"wave"}},"box-xdt")});