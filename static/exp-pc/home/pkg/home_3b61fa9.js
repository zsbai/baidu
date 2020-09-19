define("home:widget/banner/banner.js",function(e,n,a){var i=e("common-jquery:widget/lib/jquery/jquery.js"),t=e("common-jquery:widget/js/ui/carousel/carousel.js"),r=e("common-jquery:widget/js/logic/log/log.js"),s={highlight:function(){var e=i(".wgt-banner .carousel-inner"),n=e.find(".active"),a=e.find(".item");a.removeClass("disabled");i.each(n,function(e){i.each(n,function(a){if(parseInt(i(n[e]).css("left"),10)<parseInt(i(n[a]).css("left"),10)){var t=n[e];n[e]=n[a],n[a]=t}})}),n.first().addClass("disabled"),n.eq(2).addClass("disabled"),i.each(n,function(e,n){var a=i(n);if(!a.hasClass("disabled")&&a.hasClass("active")){{a.attr("index")}a.addClass("current").siblings().removeClass("current")}})},activeIndicator:function(){var e,n=i(".wgt-banner .carousel-inner"),a=n.find(".active"),t=i(".wgt-banner .carousel-indicators").children();if(i.each(a,function(n,a){i(a).hasClass("disabled")||(e=a)}),e){var r=+i(e).attr("index")-1;t.addClass("active"),i(t).eq(r).removeClass("active")}},stopDefault:function(e){e&&e.preventDefault?e.preventDefault():window.event.returnValue=!1},eventHandler:function(){var e=this;i(".wgt-banner").on("click",".disabled",function(n){e.stopDefault(n)})},init:function(){if(F.context("banner")&&F.context("banner").length){var e=this,n=[],a=F.context("banner"),s=a.length,o=[];o.push(a[s-1]),a=a.slice(0,s-1),i.merge(o,a),i.each(o,function(e,a){var i=a.color?'style="color:'+a.color+'"':"";n.push(['<a class="banner-item" href="'+a.url+'" target="_blank"','log="type:2014,module:home,page:index,pos:banner_'+e+",bannerIndex:"+e+',action:click">','<img src="'+a.img+'" alt="'+a.title+'"/>','<div class="content-container">','<div class="content"'+i+">","<h1>"+a.title+"</h1>","<p>"+a.desc+"</p>",'<span class="author">作者：'+a.author+"</span>","</div>","</div>","</a>"].join(""))});var c=new t({items:n,direction:"horizontal",controls:!0,viewSize:3,indicators:!0,interval:1e4,duration:600,isHome:!0,render:function(){e.highlight("render"),e.activeIndicator()},afterSlide:function(){e.highlight("afterSlide"),e.activeIndicator()},beforeSlide:function(){e.activeIndicator()}});r.init({module:"home",page:"index"}),c.render(i("#banner-container")),e.eventHandler()}}};a.exports=s});
;define("home:widget/category/category.js",function(e,t,a){var i=e("common-jquery:widget/lib/jquery/jquery.js"),o=e("common-jquery:widget/js/ui/carousel/carousel.js"),s=e("common-jquery:widget/js/logic/https/https.es").autoFixUrl,c={init:function(){var e=[];F.context("category")||i("#wgt-category").hide(),i.each(F.context("category"),function(t,a){var o=['<div class="c-item">','<h2 class="title">','<a href="/list/'+a.cid+'" target="_blank" ','log="type:2014,module:home,page:index,pos:category_h,action:click">'+a.name+"</a>","</h2>",'<ul class="secondary-list">'];i.each(a.subcats,function(e,t){var a=s("/list/"+t.cid);t.isTag&&(a=s("/tag?tagName="+t.name)),o.push(["<li>",'<a href="'+a+'" target="_blank" ','class="secondary-class" ','log="type:2014,module:home,page:index,pos:category_l,action:click">'+t.name+"</a>","</li>"].join(""))}),o.push(["</ul>","</div>"].join("")),e.push(o.join(""))});var t=new o({items:e,direction:"horizontal",controls:!0,viewSize:5,interval:0,afterSlide:function(e){i("#category-list").find(".c-item").removeClass("last"),i(e).last().find(".c-item").addClass("last")}});t.render(i("#category-list")),i("#category-list .active").find(".c-item").last().addClass("last")}};a.exports=c});
;define("home:widget/dom-ready/dom-ready.js",function(require,exports,module){var nslog=require("common-jquery:widget/js/logic/log/log.js"),$=require("common-jquery:widget/lib/jquery/jquery.js"),dialog=require("common-jquery:widget/js/ui/dialog/dialog.js");require("common-jquery:widget/js/util/template/template2.js");var redPacketUnopenTpl=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="unopen-dlg-content">    <div class="close"></div>    <div class="top-bg"></div>    <p>',"undefined"==typeof uname?"":baidu.template._encodeHTML(uname),"</p>    <h4>百度经验祝您</h4>    <h5>新春快乐&nbsp;“鸡”祥如意</h5></div>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],redPacketMoneyTpl=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="open-money-content">    <div class="close"></div>    <h4>新的一年</h4>    <h5>手气大大滴好</h5>    <p>新年红包可在</p>    <p>“个人中心－收入明细”查看</p></div>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],redPacketLateTpl=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="open-late-content">    <div class="close"></div>    <h4>啊哦，亲来晚了  </h4>    <h4>红包已经发没了</h4>    <p>新的一年，速度要加快啦～</p></div>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],DomReady={init:function(e){var t=new Date,o=t>=new Date(2020,3,4)&&t<=new Date(2020,3,5);o&&$(document.body).addClass("filter-gray"),nslog.init({module:"home",page:"index",evtType:"click"}),this.redPacketDlg(e),this.$rightPromoteOne=$("#right-promote-one"),this.$rightPromoteTwo=$("#right-promote-two"),this.$hotAd=$("#hot-ad"),this.$pushAd=$("#push-ad"),this.showFlag={},this.innerHeight=window.innerHeight;var a=this,n=window.scrollY;this.logPv(),a.isCmsInViewport(a.$rightPromoteOne,n,"right-promote-one"),a.isCmsInViewport(a.$rightPromoteTwo,n,"right-promote-two"),a.isCmsInViewport(a.$hotAd,n,"hot-ad"),a.isCmsInViewport(a.$pushAd,n,"push-ad"),window.addEventListener("scroll",function(){n=window.scrollY,a.showFlag["right-promote-one"]||a.isCmsInViewport(a.$rightPromoteOne,n,"right-promote-one"),a.showFlag["right-promote-two"]||a.isCmsInViewport(a.$rightPromoteTwo,n,"right-promote-two"),a.showFlag["hot-ad"]||a.isCmsInViewport(a.$hotAd,n,"hot-ad"),a.showFlag["push-ad"]||a.isCmsInViewport(a.$pushAd,n,"push-ad")}),a.eventHandler()},eventHandler:function(){$("#right-promote-one").on("click",function(){nslog.send(location.href,"2014",{action:"click",pos:"right-promote-one"})}),$("#right-promote-two").on("click",function(){nslog.send(location.href,"2014",{action:"click",pos:"right-promote-two"})}),$("#hot-ad").on("click",function(){nslog.send(location.href,"2014",{action:"click",pos:"hot-ad"})}),$("#push-ad").on("click",function(){nslog.send(location.href,"2014",{action:"click",pos:"push-ad"})})},logPv:function(){nslog.send(location.href,"2014",{action:"pv",source:/https?:\/\/(?:m|m5|www)\.baidu\.com/.test(document.referrer)?"search":"others",pos:"page"})},isCmsInViewport:function(e,t,o){var a=e.offset().top;a-t<=this.innerHeight&&(nslog.send(location.href,"2014",{action:"show",pos:o}),this.showFlag[o]=!0)},redPacketDlg:function(e){$(function(){if(e.isPop){var t=dialog.alert("",{width:316,height:438,content:redPacketUnopenTpl({uname:F.context("user").uname}),className:"spring2017-redpacket-dlg"});nslog.send(location.href,"2014",{module:"home",page:"index",evtType:"dialog",pos:"redpacket-dlg-open"});var o=$(".spring2017-redpacket-dlg");o.siblings(".ui-widget-overlay").addClass("redpacket-overlay");var a=o.find(".ui-dialog-content");$(".unopen-dlg-content").on("click",function(){e.isLate?(a.html(redPacketLateTpl),nslog.send(location.href,"2014",{module:"home",page:"index",evtType:"click",pos:"redpacket-late"})):(a.html(redPacketMoneyTpl),nslog.send(location.href,"2014",{module:"home",page:"index",evtType:"click",pos:"redpacket-money"}))}),o.on("click",".close",function(){t.close()}),o.find(".close").on("click",function(){t.close()})}})}};module.exports=DomReady});
;define("home:widget/hot-exp/hot-exp.js",function(require,exports,module){var $=require("common-jquery:widget/lib/jquery/jquery.js"),bt=require("common-jquery:widget/js/util/template/template.js"),tpl=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push("");for(var i=0;i<list.length;i++){if(_template_fun_array.push(""),8>=i){_template_fun_array.push('<li class="exp-item'),(i+1)%3==0&&_template_fun_array.push(" last"),_template_fun_array.push('">    <ul>    ');for(var j=0;3>j;j++)_template_fun_array.push("        "),0==j?_template_fun_array.push('        <li class="first-exp">            <a class="block-link" href="',"undefined"==typeof autoFixUrl("/article/"+list[i].data[j].eidEnc+".html")?"":baidu.template._encodeHTML(autoFixUrl("/article/"+list[i].data[j].eidEnc+".html")),'" target="_blank" log="type:2014,module:home,page:index,pos:hot-exp_img,action:click">                <img class="adjust-img" src="',"undefined"==typeof list[i].data[j].img?"":baidu.template._encodeHTML(list[i].data[j].img),'" alt="',"undefined"==typeof list[i].data[j].title?"":baidu.template._encodeHTML(list[i].data[j].title),'"/>            </a>            <div class="cover"></div>            <div class="desc">                <h3 class="title">                    <i class="i-dot"></i><a href="',"undefined"==typeof autoFixUrl("/article/"+list[i].data[j].eidEnc+".html")?"":baidu.template._encodeHTML(autoFixUrl("/article/"+list[i].data[j].eidEnc+".html")),'" target="_blank" title="',"undefined"==typeof list[i].data[j].title?"":baidu.template._encodeHTML(list[i].data[j].title),'">',"undefined"==typeof list[i].data[j].title?"":baidu.template._encodeHTML(list[i].data[j].title),'</a>                </h3>                <p class="clearfix">                    <span class="grid-r vote"><i class="i-like"></i>有用(',"undefined"==typeof list[i].data[j].vote?"":baidu.template._encodeHTML(list[i].data[j].vote),')</span>                    <a class="grid author" href="',"undefined"==typeof autoFixUrl("/user/npublic?uid="+list[i].data[j].uidEnc)?"":baidu.template._encodeHTML(autoFixUrl("/user/npublic?uid="+list[i].data[j].uidEnc)),'" target="_blank">',"undefined"==typeof list[i].data[j].author?"":baidu.template._encodeHTML(list[i].data[j].author),"</a>                </p>            </div>        </li>        "):(_template_fun_array.push('        <li class="else-exp'),2==j&&_template_fun_array.push(" last"),_template_fun_array.push('">            <div class="content">                <h3 class="title">                    <i class="i-dot"></i><a href="',"undefined"==typeof autoFixUrl("/article/"+list[i].data[j].eidEnc+".html")?"":baidu.template._encodeHTML(autoFixUrl("/article/"+list[i].data[j].eidEnc+".html")),'" target="_blank" title="',"undefined"==typeof list[i].data[j].title?"":baidu.template._encodeHTML(list[i].data[j].title),'" log="type:2014,module:home,page:index,pos:hot-exp_text,action:click">',"undefined"==typeof list[i].data[j].title?"":baidu.template._encodeHTML(list[i].data[j].title),'</a>                </h3>                <a class="author" href="',"undefined"==typeof autoFixUrl("/user/npublic?uid="+list[i].data[j].uidEnc)?"":baidu.template._encodeHTML(autoFixUrl("/user/npublic?uid="+list[i].data[j].uidEnc)),'" target="_blank">',"undefined"==typeof list[i].data[j].author?"":baidu.template._encodeHTML(list[i].data[j].author),"</a>            </div>        </li>        ")),_template_fun_array.push("    ");_template_fun_array.push('    </ul>    <div class="tag exp-tag-',"undefined"==typeof(i%9)?"":baidu.template._encodeHTML(i%9),'">',"undefined"==typeof list[i].tag?"":baidu.template._encodeHTML(list[i].tag),"</div></li>")}_template_fun_array.push("")}_template_fun_array.push(""),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],ajax=require("common-jquery:widget/js/util/ajax/ajax.es").ajax,autoFixUrl=require("common-jquery:widget/js/logic/https/https.es").autoFixUrl;require("common-jquery:widget/lib/jquery.plugins/browser.js");var HotExp={next:0,type:"daily",render:function(){var t=this,e={method:"getRecommend",next:t.next,type:t.type},a=$("#exp-container");ajax({url:"/ajax/home/getrecommend",data:e,dataType:"json"}).then(function(e){if(e.errno)return 1;var i=e.data;if(i&&i.list.length){t.next=i.next;var l=tpl({list:i.list,autoFixUrl:autoFixUrl});a.html(l),$.browser.ie<=8&&setTimeout(function(){t.adjustImg()},500)}})},adjustImg:function(){$(".adjust-img").each(function(t,e){var a=$(e).width();a>250&&$(e).css("margin-left",-(a-250)/2+"px")})},eventHandler:function(){var t=this;$(".exp-filter").on("click","li",function(){var e=$(this);e.hasClass("filter-active")||(t.next=0,e.addClass("filter-active").siblings().removeClass("filter-active"),t.type=e.data("type"),t.render())}),$("#refresh-exp").click(function(){t.render()})},init:function(){var t=this;t.eventHandler(),$(".exp-filter").find("li").first().click()}};module.exports=HotExp});
;define("home:widget/magazine/magazine.js",function(require,exports,module){var $=require("common-jquery:widget/lib/jquery/jquery.js"),Carousel=require("common-jquery:widget/js/ui/carousel/carousel.js"),bt=require("common-jquery:widget/js/util/template/template.js"),tpl=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="pos-absolute arrow"></div><div class="pos-absolute shadow-left"></div><div class="pos-absolute shadow-right"></div><img src="',"undefined"==typeof data.img?"":baidu.template._encodeHTML(data.img),'" alt="',"undefined"==typeof data.title?"":baidu.template._encodeHTML(data.title),'" class="pos-absolute"/><article class="pos-absolute content">    <h3>        <i class="title-arrow"></i>        <span>',"undefined"==typeof data.title?"":baidu.template._encodeHTML(data.title),'</span>    </h3>    <p class="author">        <i class="i-author"></i>        <span>',"undefined"==typeof data.author?"":baidu.template._encodeHTML(data.author),'</span>    </p>    <blockquote>        <div class="pos-absolute quote-left"></div>        <div class="pos-absolute quote-right"></div>        <p>',"undefined"==typeof data.desc?"":baidu.template._encodeHTML(data.desc),'</p>    </blockquote></article><a href="',"undefined"==typeof data.url?"":baidu.template._encodeHTML(data.url),'" target="_blank" class="detail-link" log="type:2014,module:home,page:index,pos:magazine,action:click"></a>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0];require("common-jquery:widget/lib/jquery.plugins/string.js");var Magazine={truncate:function(e,a){return e?($.string.getByteLength(e)>a&&(e=$.string.subByte(e,a,"...")),e):void 0},init:function(){var e=this;if(!F.context("magazine").length)return void $("#wgt-magazine").hide();e.eventHandler();var a=[];$.each(F.context("magazine"),function(t,i){var n=i.title,r=i.desc;r&&(r=e.truncate(r,40)),n&&(n=e.truncate(n,16)),a.push(['<div class="clearfix m-item" data-index="'+t+'">','<div class="grid-r excerpt">',"<h4>"+n+"</h4>","<p>"+r+"</p>","</div>",'<div class="grid">','<img src="'+i.img+'" alt="'+i.title+'"/>',"</div>","</div>"].join(""))});var t=new Carousel({items:a,direction:"vertical",controls:!0,viewSize:2,interval:0,beforeSlide:function(){},afterSlide:function(e){$(e).first().find(".m-item").click(),$("#magazine-list-container .arrow").removeClass("second")},render:function(){$("#magazine-list .active .m-item").first().click()}});t.render($("#magazine-list"))},eventHandler:function(){var e=this;$("#magazine-list").on("click",".m-item",function(){var a=$(this),t=$(this).data("index"),i=a.parent();a.hasClass("current")||(i.siblings().find(".m-item").removeClass("current"),a.addClass("current"),e.renderDetail(F.context("magazine")[t]))})},renderDetail:function(e){var a=$("#magazine-detail");$("#magazine-list-container .active .m-item").first().hasClass("current")?$("#magazine-list-container .arrow").removeClass("second"):$("#magazine-list-container .arrow").addClass("second");var t=tpl({data:e});a.html(t)}};module.exports=Magazine});
;define("home:widget/slogan/slogan.js",function(e,t,n){var u=e("common-jquery:widget/lib/jquery/jquery.js"),r=e("common-jquery:widget/js/ui/count-number/count-number.js");e("common-jquery:widget/lib/jquery.plugins/number.js");var i={init:function(){var e=u("#exp-num"),t=+e.text();new r({target:e,step:5,targetNum:t,displayNum:0,duration:1500,intervalTimes:25});var n=u("#author-num"),i=+n.text();new r({target:n,step:5,targetNum:i,displayNum:0,duration:1500,intervalTimes:25})}};n.exports=i});
;define("home:widget/user-info/user-info.js",function(e,o,n){var i=e("common-jquery:widget/lib/jquery/jquery.js"),t=e("common-jquery:widget/js/util/event/event.js"),c=e("common-jquery:widget/js/logic/log/log.js");e("common-jquery:widget/js/logic/login/login.js");var u=+F.context("certStatus"),l={init:function(){(0===u||1===u||2===u)&&c.send(location.href,"2014",{module:"home",page:"index",action:"show",pos:"auth-btn"}),i("#user-login")&&i("#user-login").click(function(e){e.preventDefault(),t.fire("login.log")}),i("#js-auth-btn").on("click",function(){c.send(location.href,"2014",{module:"home",page:"index",action:"click",pos:"auth-btn"})})}};n.exports=l});