// JavaScript Document
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"百度csr","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

function htmlsize(){
	var dw=1680;
	var ww=$(window).width();
	var maxw=1920;
	var minw=320;
	if($(window).width()>maxw){ww=maxw;}
	else if($(window).width()<minw){ww=minw;}	
	$("html").css({fontSize:Math.floor((ww/dw)*100)});
}
htmlsize();
$(window).resize(htmlsize);

if((navigator.userAgent.indexOf("MSIE 8.0")>-1 || navigator.userAgent.indexOf("MSIE 9.0")>-1) && getCookie("browser_tip")!="1"){
	$("body").append("<div class='browser_tip' style='position:fixed;left:0;bottom:-100px;right:0;height:100px;line-height:100px;color:#fff;font-size:18px;text-align:center;background:#222;'>您的浏览器版本过低！可能无法完整浏览所有内容，建议您使用<b style='font-weight:bold;margin:0 5px;font-size:20px;'>主流浏览器的最新版本</b>浏览此页面，以获得最佳浏览体验！<a class='a1' style='text-decoration:underline;margin-left:20px;'>知道了</a><a href='https://www.baidu.com/s?wd=浏览器' target='_blank' style='text-decoration:underline;margin-left:20px;'>获取浏览器</a><a class='a2' style='text-decoration:underline;margin-left:20px;'>不再提示</a></div>");
	$(".browser_tip").animate({bottom:0},1000);
	$(".browser_tip .a1").click(function(){
		$(".browser_tip").animate({bottom:-100},1000,function(){$(".browser_tip").remove();});
	});
	$(".browser_tip .a2").click(function(){
		setCookie("browser_tip","1");
		$(".browser_tip").animate({bottom:-100},1000,function(){$(".browser_tip").remove();});
	});
}

//全局js
$(function(){
htmlsize();
//start

//滚动条
/*$("html").niceScroll({
	cursorcolor:"#111",
	cursorborder:"none",
	cursorwidth:"8px",
	scrollspeed:80,
	background:"#aaa",
	cursoropacitymin:0,
	cursoropacitymax:0.7,
	enablekeyboard:false,
	zindex:2
});*/

$("img").bind("dragstart",function(){
	return false;
});

//gotop
$(".gotop").click(function(){
	$("html").animate({scrollTop:0},400+$(window).scrollTop()*0.3);
	if(navigator.appVersion.match("WebKit")){
		$("body").animate({scrollTop:0},400+$(window).scrollTop()*0.3);
	}
	else{
		$("html").animate({scrollTop:0},400+$(window).scrollTop()*0.3);
	}
});


$(".gotop").hide();
$(window).scroll(function(){
	if($(window).scrollTop()>100){$(".gotop").fadeIn();}
	else{$(".gotop").fadeOut();}
});


setTimeout(function(){
	autofoot();
},100);
$(window).resize(function(){
	autofoot();
})

//pc search
$(".header .tools .sc").click(function(event){
	event.stopPropagation();
	$(".header .search").toggleClass("s");
	$(".header .search .kw").focus();
});
$(".header .search").click(function(event){
	event.stopPropagation();
});
$(".header .search").mouseleave(function(){
	$(".header .search").removeClass("s");
	$(".header .search .kw").blur();
});
$(window).click(function(){
	$(".header .search").removeClass("s");
	$(".header .search .kw").blur();
});


//phone menu nav
$(".menu").bind("click",function(event){	
	$(this).toggleClass("act");
	$(".header").toggleClass("act");
	
	var v=document.getElementsByTagName("video")[0];
	v.pause();
});



//	下拉框
	$('.select-mod').each(function(){
		var obj = $(this);
		var selectBtn = obj.find('.select-btn');
		var selectTit = obj.find('.select-tit');
		var selectOpts = obj.find('.select-opts');
		var selectQue = obj.find('.squery-list');
		var val = obj.find('.select-val');
		var input = obj.find('.select-input');

		selectOpts.mCustomScrollbar({
			mouseWheel:{ preventDefault: true}
		});

		selectQue.mCustomScrollbar();

		selectBtn.on('click',function(){
			if(!obj.hasClass('sc-show')){
				obj.addClass('sc-show');
			}else{
				obj.removeClass('sc-show');
			}
		});

		selectTit.on('click',function(){
			var _this = $(this);
			var grp = _this.parents('.select-grp');
			if(!grp.hasClass('open')){
				grp.addClass('open').siblings('.select-grp').removeClass('open');
				selectOpts.mCustomScrollbar("scrollTo", grp ,{
						scrollInertia: 0
				});
			}else{
				grp.removeClass('open');
			}
		});

		obj.on('click','.select-item',function(){
			var _this = $(this);
			var ptxt = _this.parent().siblings('.select-tit').text();
			var text = !ptxt ? _this.text() : ptxt + ' - ' + _this.text();
			
			if(!_this.hasClass('selected')){
				obj.find('.select-item').removeClass('selected');
				_this.addClass('selected');
				obj.removeClass('sc-show');
				val.text(text);
				input.val(text);
				if(val.hasClass('placeholder')){
					val.removeClass('placeholder');
				}
			}
		});
		
		obj.on('click','.squery-item',function(){
			var _this = $(this);
			var text = _this.text();

			if(!_this.hasClass('selected')){
				_this.addClass('selected').siblings().removeClass('selected');
//				obj.removeClass('sq-show');
				val.text(text);
				input.val(text);
				if(val.hasClass('placeholder')){
					val.removeClass('placeholder');
				}
			}
		});
		
		if(!!obj.data('selectClickup')){
			selectOpts.data("mCS").opt.mouseWheel.preventDefault = false;
		
			obj.on('mouseenter',function(){
				obj.addClass('hover');
			});
			
			obj.on('mouseleave',function(){
				obj.removeClass('hover');
			});
			
			$(document).on('click',function(){
				if(!obj.hasClass('hover')){
					obj.removeClass('sc-show');
				}
			});
		}else{
			obj.on('mouseleave',function(){
				obj.removeClass('sc-show');
			});
		}
		
		input.on('focus',function(){
			obj.addClass('sq-show');
		});

		input.on('blur',function(){
			setTimeout(function(){
				obj.removeClass('sq-show');
			},300);
		});

	});
		

//end
});

/*$(".nav_main .item").hover(
	function(){
		$(".nav_child .item").hide();
		if($(".nav_child .item").eq($(this).index()).find("a").size()>0){
			$(".nav_child .item").eq($(this).index()).show().addClass("s");
			$(".nav_bg").stop(true,true).slideDown();
			$(this).addClass("cur");
		}
		else{
			$(this).removeClass("cur");
		}
	},
	function(){
		$(".nav_bg").stop(true,true).slideUp();
		$(this).removeClass("cur");
	}
);
$(".nav_child .item").hover(
	function(){
		//$(".nav_child").find("s")
		$(".nav_bg").stop(true,true).show();
	},
	function(){
		$(".nav_bg").stop(true,true).slideUp();
		$(".nav_main a").removeClass("cur");
		$(this).hide();
	}
);*/