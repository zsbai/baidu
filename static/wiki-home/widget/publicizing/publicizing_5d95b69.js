define("wiki-home:widget/publicizing/publicizing",function(i){function e(){return l("body").hasClass("w-large")?{width:810,height:340}:{width:750,height:316}}function t(){setTimeout(function(){m&&(l("#publicizing .slides .viewport ul li .card").removeClass("hightlight"),l("#publicizing .slides .viewport ul li .card").eq(0).addClass("hightlight"))},250),setTimeout(function(){m&&(l("#publicizing .slides .viewport ul li .card").removeClass("hightlight"),l("#publicizing .slides .viewport ul li .card").eq(1).addClass("hightlight"))},1750),setTimeout(function(){m&&(l("#publicizing .slides .viewport ul li .card").removeClass("hightlight"),l("#publicizing .slides .viewport ul li .card").eq(2).addClass("hightlight"))},3250),setTimeout(function(){m&&l("#publicizing .slides .viewport ul li .card").removeClass("hightlight")},4750)}function n(){m=!1,l("#publicizing .slides .viewport ul li .card").removeClass("hightlight")}function o(){m=!0,t()}function a(){f.hide(500),l("#player").removeClass("appear"),setTimeout(function(){l("#player .viewport").html(""),l("#player").hide()},501)}var l=i("wiki-common:widget/lib/jquery/jquery"),c=i("wiki-common:widget/ui/carousel/carousel"),r=i("wiki-common:widget/ui/carousel/aniTypes/aniType_fade"),s=i("wiki-common:widget/ui/pager/horPager/horPager"),u=i("wiki-common:widget/ui/overlay/overlay"),g=i("wiki-common:widget/util/cookie"),d=i("wiki-common:widget/component/nslog/nslog"),p=window.localStorage;setTimeout(function(){"1"===g.get("editor_createIntro_ignore")||p&&"1"===p.getItem("editor_createIntro_ignore")?l(".statistics_create").attr("href","/page/createindex"):l(".statistics_create").attr("href","/page/createintro")},10);var h=i("wiki-common:widget/ui/videoPlayer/videoPlayer"),m=!0,w=l("#publicizing .slides .viewport ul li").length,b={container:l("#publicizing .slides .viewport ul"),aniUnitSize:e(),pausingTriggers:[l("#publicizing")],autoPlayInterval:4750,aniConfig:{duration:1250,easing:"easeOutExpo"},onAniStart:function(i,e){"undefined"!=typeof v&&v.play(e),z.reset({curIndex:e+1})},onAniComplete:function(){m&&t()}};if(3==l("#publicizing .background ul .wgt_carousel_aniUnit").length)var v=new c({container:l("#publicizing .background ul"),autoPlayInterval:0,aniConfig:{duration:1500,easing:"easeInOutQuad"},aniType:r});else l("#publicizing .background ul .wgt_carousel_aniUnit").hide(),l("#publicizing .background ul .wgt_carousel_aniUnit").eq(0).show();var y=new c(b);y.autoPlay();var f=new u({opacity:.8}),z=new s({pContainer:l("#publicizing .slides .slides_pag"),template:"pagerTpl_dot",containsEndTags:!0,conTotalCount:w,conPerPage:1,onIndexChange:function(){y.play(this.curIndex-1)}});z.show(),l(document.body).on("resize.cmnEvt",function(){b.aniUnitSize=e(),y.stop(function(){y.reset(b),y.autoPlay()})}),t(),l("#publicizing").on("mouseenter",function(){n()}),l("#publicizing").on("mouseleave",function(){o()}),l("#publicizing .slides .slides_btn").on("click",function(){switch(l(this).attr("data-skipTo")){case"prev":y.play(-1);break;case"next":y.play()}}),l("#publicizing .statistics_ply").on("click",function(){d(10600114);var i=new h("#player .viewport",{type:"baikePlayer",src:"https://gcjgdrdrzymhp9e2xpz.exp.bcevod.com/mda-giiccqrtnxdm1gkc/mp4/mda-giiccqrtnxdm1gkc.mp4",mid:"mda-giiccqrtnxdm1gkc"},{width:600,height:340,poster:"https://bkssl.bdimg.com/static/wiki-home/home/resource/img/publicizing_video_cover_7dfde17.jpg"});i.play(),f.show(500),l("#player").show(),setTimeout(function(){l("#player").addClass("appear")},1)}),l("#player .close").on("click",a)});