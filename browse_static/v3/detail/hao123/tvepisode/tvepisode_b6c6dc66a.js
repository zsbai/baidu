define("detail:static/hao123/tvepisode/tvepisode.js",function(e,a){e("common:static/vendor/underscore/underscore.js");a.firstSee=function(e,a){var o="http://www.hao123.com/api/videoqxk?callback=?&title="+encodeURIComponent(e),t=this;$.ajax({url:o,async:!0,charset:"gb2312",dataType:"jsonp",success:function(e){e&&"1"==e.errno&&a<e.data.id?(t._prePlayUrl=e.data.url,t.hasYugao="hasPre"):t.hasYugao="noPre"}})}});