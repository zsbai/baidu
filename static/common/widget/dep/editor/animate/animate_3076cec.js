define("common:widget/dep/editor/animate/animate",function(a,t,e){var o=a("common:widget/js/util/tangram/tangram"),i=(a("common:widget/js/util/event/event"),a("common:widget/js/ui/uploader/uploader"),a("common:widget/dep/editor/animate/map")),n={box:o('<div id="editor-animate-box"></div>'),showFlag:!1,initFlag:!1,init:function(a){var t=this;t.initFlag||(t.render(),t.selGif(a))},render:function(){var a='<span class="icon-sanjiao"><span class="sj2"></span></span><div class="animate-wrap">',t=this;t.initFlag=!0;for(var e=2e3;2020>e;e++){var n=e-2e3;a+='<label><img class="facial face-animate" data-value="'+i.bear[n].value+'" src="'+KID.httpsTrans("http://baobao-3d.bj.bcebos.com/look/200/")+e+'.gif"/></label>'}a+="</div>",t.box.html(a).hide().appendTo(o("body"))},selGif:function(a){var t=this;t.box.on("click","label",function(t){t.stopPropagation();var e=(o(this).find("img").attr("src"),o(this).html());a.execCommand("inserthtml",e)}),t.box.on("mouseenter","label",function(){o(this).css({background:"#e8e8fe",cursor:"pointer"})}),t.box.on("mouseleave","label",function(){o(this).css({background:"#fff"})})},showPanel:function(a){var t=this,e=t.box.width(),i=o(a.getDom()).offset().left,n=o(a.getDom()).offset().top+50;t.box.css({left:i-e+10+"px",top:n+"px"}).show(),t.showFlag=!0},hidePanel:function(a){var t=this;o(document).click(function(e){{var i=o(a.getDom());o(e.target)}i.is(e.target)||0!==i.has(e.target).length||t.showFlag&&(t.box.hide(),t.showFlag=!1)})}};e.exports=n});