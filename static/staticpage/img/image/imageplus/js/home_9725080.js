"use strict";function preloadImage(a,t,n){window.gkaCache=window.gkaCache||[];var i,e=0,o={};a.forEach(function(m){i=new Image,window.gkaCache.push(i),i.onload=function(n,i){return function(){o[n]=i,++e===a.length&&t&&t(o)}}(m,i),i.src=(n||"")+m})}function playAnimation(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a+"_animate_done";setTimeout(function(){addClass(getByClass(a)[n],i)},t)}function removeAnimation(a,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a+"_animate_done";removeClass(getByClass(a)[t],n)}function showStar(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e3,t=[{id:"stars1",timeout:800},{id:"stars2",timeout:1200},{id:"stars3",timeout:2800},{id:"stars4",timeout:2400}],n=1040;window.starTimer&&clearTimeout(window.starTimer),window.starTimer=null;for(var i=function(i){setTimeout(function(){preloadImage(["home-star.png"],function(){var e=document.getElementById(t[i].id);e.style.opacity=1,addClass(e,"star-animation__init"),setTimeout(function(){e.style.opacity=0,removeClass(e,"star-animation__init"),i===t.length-1&&(window.starTimer=setTimeout(showStar,a))},n)},urlPrefix)},t[i].timeout)},e=0;e<t.length;e++)i(e)}function pageCallBack(a){callMap.has(a)&&callMap.get(a).forEach(function(t){"function"==typeof animations[t]&&animations[t](a)}),getByClass("foot-nav__page")[0].innerHTML=a}function trackEvent(){var a={p2Btn:1900002,p3Btn:1900003,p4Btn:1900004,p5Btn:1900005,p6Btn:1900006},t=[{id:"p2-btn",data:{p:a.p2Btn}},{id:"p3-btn",data:{p:a.p3Btn}},{id:"p4-btn",data:{p:a.p4Btn}},{id:"p5-btn",data:{p:a.p5Btn}},{id:"p6-btn",data:{p:a.p6Btn}}];t.forEach(function(a){getByClass(a.id)[0].addEventListener("click",function(){trackLog(a.data)})})}var urlPrefix="https://img0.bdstatic.com/static/staticpage/img/image/imageplus/images/",animations={p1:function(){playAnimation("p1-text",200),playAnimation("p1-bgTitle",400,0,"opacity_animate_done"),playAnimation("p1-bgDesc",400,0,"opacity_animate_done"),removeAnimation("header-title",0,"header-title_animate_done"),removeAnimation("nav",0,"opacity_animate_done"),addClass(getByClass("foot-nav")[0],"hide"),addClass(getByClass("nav")[0],"hide"),showStar()},p2:function(){playAnimation("header-title"),playAnimation("p2-title",0,0,"opacity_animate_done"),playAnimation("p2-card"),playAnimation("p2-card",100,1),playAnimation("p2-card",200,2),playAnimation("p2-card",300,3),playAnimation("p2-btn",400,0,"opacity_animate_done"),playAnimation("nav",0,0,"opacity_animate_done")},p3:function(){playAnimation("p3-title",0,0,"opacity_animate_done"),playAnimation("p3-card",0,0,"opacity_animate_done"),playAnimation("p3-card",100,1,"opacity_animate_done"),playAnimation("p3-card",200,2,"opacity_animate_done"),playAnimation("p3-btn",400,0,"opacity_animate_done");var a=getByClass("p3-card__img")[0],t=getByClass("p3-card__img")[1],n=getByClass("p3-card__img")[2],i=a.src,e=t.src,o=n.src;t.src="",n.src="",setTimeout(function(){a.src=i},0),setTimeout(function(){t.src=e},150),setTimeout(function(){n.src=o},300)},p4:function(){playAnimation("p4-title",0,0,"opacity_animate_done"),playAnimation("p4-card"),playAnimation("p4-card",100,1),playAnimation("p4-card",200,2),playAnimation("p4-btn",400,0,"opacity_animate_done"),playAnimation("p4-card__tip1",800,0,"p4-card__tip_animate_done"),playAnimation("p4-card__tip2",1e3,0,"p4-card__tip_animate_done"),playAnimation("p4-card__tip3",1200,0,"p4-card__tip_animate_done")},p5:function(){playAnimation("p5-title",0,0,"opacity_animate_done"),playAnimation("p5-card",0,0,"opacity_animate_done"),playAnimation("p5-card",100,1,"opacity_animate_done"),playAnimation("p5-card",200,2,"opacity_animate_done"),playAnimation("p5-btn",600,0,"opacity_animate_done");var a=getByClass("p5-card__img")[0],t=getByClass("p5-card__img")[1],n=getByClass("p5-card__img")[2],i=a.src,e=t.src,o=n.src;t.src="",n.src="",setTimeout(function(){a.src=i},0),setTimeout(function(){t.src=e},150),setTimeout(function(){n.src=o},300)},p6:function(){playAnimation("p6-title",0,0,"opacity_animate_done"),playAnimation("p6-btn",600,0,"opacity_animate_done"),playAnimation("p6-contact",600,0,"opacity_animate_done"),playAnimation("p6-card-line"),playAnimation("p6-card-line",100,1),addClass(getByClass("foot-nav__next")[0],"foot-nav__next-disable")},clear:function(){removeAnimation("p1-text",0,"p1-text_animate_done"),removeAnimation("p1-bgTitle",0,"opacity_animate_done"),removeAnimation("p1-bgDesc",0,"opacity_animate_done"),removeAnimation("p2-title",0,"opacity_animate_done"),removeAnimation("p2-card",0),removeAnimation("p2-card",1),removeAnimation("p2-card",2),removeAnimation("p2-card",3),removeAnimation("p2-btn",0,"opacity_animate_done"),removeAnimation("p3-title",0,"opacity_animate_done"),removeAnimation("p3-card",0,"opacity_animate_done"),removeAnimation("p3-card",1,"opacity_animate_done"),removeAnimation("p3-card",2,"opacity_animate_done"),removeAnimation("p3-btn",0,"opacity_animate_done"),removeAnimation("p4-title",0,"opacity_animate_done"),removeAnimation("p4-card",0),removeAnimation("p4-card",1),removeAnimation("p4-card",2),removeAnimation("p4-btn",0,"opacity_animate_done"),removeAnimation("p4-card__tip1",0,"p4-card__tip_animate_done"),removeAnimation("p4-card__tip2",0,"p4-card__tip_animate_done"),removeAnimation("p4-card__tip3",0,"p4-card__tip_animate_done"),removeAnimation("p5-title",0,"opacity_animate_done"),removeAnimation("p5-card",0,"opacity_animate_done"),removeAnimation("p5-card",1,"opacity_animate_done"),removeAnimation("p5-card",2,"opacity_animate_done"),removeAnimation("p5-btn",0,"opacity_animate_done"),removeAnimation("p6-title",0,"opacity_animate_done"),removeAnimation("p6-card-line",0),removeAnimation("p6-card-line",1),removeAnimation("p6-btn",0,"opacity_animate_done"),removeAnimation("p6-contact",0,"opacity_animate_done")},showNavNext:function(){removeClass(getByClass("foot-nav__next")[0],"foot-nav__next-disable")},showNav:function(){removeClass(getByClass("foot-nav")[0],"hide"),removeClass(getByClass("nav")[0],"hide"),window.starTimer&&clearTimeout(window.starTimer),window.starTimer=null},track:function(a){trackLog({p:1900006+a})}},callMap=new Map;callMap.set(1,["clear","p1"]),callMap.set(2,["clear","p2","showNav","showNavNext","track"]),callMap.set(3,["clear","p3","showNav","showNavNext","track"]),callMap.set(4,["clear","p4","showNav","showNavNext","track"]),callMap.set(5,["clear","p5","showNav","showNavNext","track"]),callMap.set(6,["clear","p6","showNav","track"]),document.addEventListener("DOMContentLoaded",function(){function a(a){t.currentPosition=-(a*t.viewHeight),t.callBack(),t.changeNavStyle(t.currentPosition),t.turnPage(t.currentPosition)}preloadImage(["home-slide.png"],function(){document.getElementById("slide").className+=" slide-animation__init"},urlPrefix);var t=new PureFullPage({definePages:pageCallBack});getByClass("foot-nav__prev")[0].addEventListener("click",function(){var n=Math.abs(t.currentPosition)/t.viewHeight;a(n-1)}),getByClass("foot-nav__next")[0].addEventListener("click",function(){var n=Math.abs(t.currentPosition)/t.viewHeight;5>n&&a(n+1)}),getByClass("slide-wrap")[0].addEventListener("click",function(){a(1)})}),window.onload=function(){setTimeout(function(){document.getElementById("loadingPage").style.display="none",pageCallBack(1)},200),trackEvent(),trackLog({p:1900001})};