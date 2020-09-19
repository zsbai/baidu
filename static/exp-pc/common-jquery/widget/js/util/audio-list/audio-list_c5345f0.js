define("common-jquery:widget/js/util/audio-list/audio-list.es",function(i,t){"use strict";function e(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function i(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),s=function(){function i(t){var n=t.urlList,s=void 0===n?[]:n,u=t.preloadSize,a=void 0===u?2:u,o=t.onplay,d=void 0===o?function(){}:o,h=t.onpause,l=void 0===h?function(){}:h,r=t.onended,c=void 0===r?function(){}:r;e(this,i),this.preloadSize=a,this.onplay=d,this.onpause=l,this.onended=c,this.paused=!0,this.audioList=[];for(var f=this,p=0;p<this.preloadSize;p++){var v=new Audio;v.addEventListener("play",function(){}),v.addEventListener("pause",function(){}),v.addEventListener("ended",function(){f.onaudioended()}),this.audioList.push(v)}this.changeUrlList(s)}return n(i,[{key:"onaudioended",value:function(){this.curIndex+1<this.urlList.length?(this.curIndex+=1,this.audioList.push(this.audioList.shift()),this.curIndex+(this.audioList.length-1)<this.urlList.length&&this.load(this.audioList.length-1),this.playAudio(this.curIndex)):(this.pause(),this.seek(0),this.loadAll(),this.onended())}},{key:"load",value:function(i){this.audioList[i].src=this.urlList[Math.min(this.curIndex+i,this.urlList.length-1)]}},{key:"loadAll",value:function(){var i=this;this.audioList.forEach(function(t,e){i.curIndex+e<i.urlList.length&&i.load(e)})}},{key:"playAudio",value:function(i){this.curIndex!==i&&(this.seek(i),this.loadAll()),this.audioList[0].play()}},{key:"changeUrlList",value:function(i){this.urlList=i,this.seek(0),this.loadAll()}},{key:"seek",value:function(i){this.curIndex=Math.min(i,Math.max(this.urlList.length-1,0))}},{key:"play",value:function(){this.paused&&(this.paused=!1,this.playAudio(this.curIndex),this.onplay())}},{key:"pause",value:function(){this.paused||(this.paused=!0,this.audioList[0].pause(),this.onpause())}}]),i}();t.AudioList=s});