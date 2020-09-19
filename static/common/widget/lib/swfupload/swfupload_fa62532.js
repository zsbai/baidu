define("common:widget/lib/swfupload/swfupload",function(require,exports,module){var SWFUpload;void 0==SWFUpload&&(SWFUpload=function(t){this.initSWFUpload(t)}),SWFUpload.prototype.initSWFUpload=function(t){try{this.customSettings={},this.settings=t,this.eventQueue=[],this.movieName="SWFUpload_"+SWFUpload.movieCount++,this.movieElement=null,SWFUpload.instances[this.movieName]=this,this.initSettings(),this.loadFlash(),this.displayDebugInfo()}catch(e){throw delete SWFUpload.instances[this.movieName],e}},SWFUpload.instances={},SWFUpload.movieCount=0,SWFUpload.version="2.2.0 2009-03-25",SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE:-120,INVALID_FILETYPE:-130},SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280,UPLOAD_STOPPED:-290},SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE:-4,CANCELLED:-5},SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD:-120},SWFUpload.CURSOR={ARROW:-1,HAND:-2},SWFUpload.WINDOW_MODE={WINDOW:"window",TRANSPARENT:"transparent",OPAQUE:"opaque"},SWFUpload.completeURL=function(t){if("string"!=typeof t||t.match(/^https?:\/\//i)||t.match(/^\//))return t;var e=(window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),window.location.pathname.lastIndexOf("/"));return path=0>=e?"/":window.location.pathname.substr(0,e)+"/",path+t},SWFUpload.prototype.initSettings=function(){this.ensureDefault=function(t,e){this.settings[t]=void 0==this.settings[t]?e:this.settings[t]},this.ensureDefault("upload_url",""),this.ensureDefault("preserve_relative_urls",!1),this.ensureDefault("file_post_name","Filedata"),this.ensureDefault("post_params",{}),this.ensureDefault("use_query_string",!1),this.ensureDefault("requeue_on_error",!1),this.ensureDefault("http_success",[]),this.ensureDefault("assume_success_timeout",0),this.ensureDefault("file_types","*.*"),this.ensureDefault("file_types_description","All Files"),this.ensureDefault("file_size_limit",0),this.ensureDefault("file_upload_limit",0),this.ensureDefault("file_queue_limit",0),this.ensureDefault("flash_url","swfupload.swf"),this.ensureDefault("prevent_swf_caching",!0),this.ensureDefault("button_image_url",""),this.ensureDefault("button_width",1),this.ensureDefault("button_height",1),this.ensureDefault("button_text",""),this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;"),this.ensureDefault("button_text_top_padding",0),this.ensureDefault("button_text_left_padding",0),this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES),this.ensureDefault("button_disabled",!1),this.ensureDefault("button_placeholder_id",""),this.ensureDefault("button_placeholder",null),this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW),this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW),this.ensureDefault("debug",!1),this.settings.debug_enabled=this.settings.debug,this.settings.return_upload_start_handler=this.returnUploadStart,this.ensureDefault("swfupload_loaded_handler",null),this.ensureDefault("file_dialog_start_handler",null),this.ensureDefault("file_queued_handler",null),this.ensureDefault("file_queue_error_handler",null),this.ensureDefault("file_dialog_complete_handler",null),this.ensureDefault("upload_start_handler",null),this.ensureDefault("upload_progress_handler",null),this.ensureDefault("upload_error_handler",null),this.ensureDefault("upload_success_handler",null),this.ensureDefault("upload_complete_handler",null),this.ensureDefault("debug_handler",this.debugMessage),this.ensureDefault("custom_settings",{}),this.customSettings=this.settings.custom_settings,this.settings.prevent_swf_caching&&(this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+(new Date).getTime()),this.settings.preserve_relative_urls||(this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url),this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url)),delete this.ensureDefault},SWFUpload.prototype.loadFlash=function(){var t,e;if(null!==document.getElementById(this.movieName))throw"ID "+this.movieName+" is already in use. The Flash Object could not be added";if(t=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder,void 0==t)throw"Could not find the placeholder element: "+this.settings.button_placeholder_id;e=document.createElement("div"),e.innerHTML=this.getFlashHTML(),t.parentNode.replaceChild(e.firstChild,t),void 0==window[this.movieName]&&(window[this.movieName]=this.getMovieElement())},SWFUpload.prototype.getFlashHTML=function(){return['<object id="',this.movieName,'" type="application/x-shockwave-flash" data="',this.settings.flash_url,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload">','<param name="wmode" value="',this.settings.button_window_mode,'" />','<param name="movie" value="',this.settings.flash_url,'" />','<param name="quality" value="high" />','<param name="menu" value="false" />','<param name="allowScriptAccess" value="always" />','<param name="flashvars" value="'+this.getFlashVars()+'" />',"</object>"].join("")},SWFUpload.prototype.getFlashVars=function(){var t=this.buildParamString(),e=this.settings.http_success.join(",");return["movieName=",encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess=",encodeURIComponent(e),"&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&amp;params=",encodeURIComponent(t),"&amp;filePostName=",encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit=",encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText=",encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",encodeURIComponent(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("")},SWFUpload.prototype.getMovieElement=function(){if(void 0==this.movieElement&&(this.movieElement=document.getElementById(this.movieName)),null===this.movieElement)throw"Could not find Flash element";return this.movieElement},SWFUpload.prototype.buildParamString=function(){var t=this.settings.post_params,e=[];if("object"==typeof t)for(var s in t)t.hasOwnProperty(s)&&e.push(encodeURIComponent(s.toString())+"="+encodeURIComponent(t[s].toString()));return e.join("&amp;")},SWFUpload.prototype.destroy=function(){try{this.cancelUpload(null,!1);var t=null;if(t=this.getMovieElement(),t&&"unknown"==typeof t.CallFunction){for(var e in t)try{"function"==typeof t[e]&&(t[e]=null)}catch(s){}try{t.parentNode.removeChild(t)}catch(n){}}return window[this.movieName]=null,SWFUpload.instances[this.movieName]=null,delete SWFUpload.instances[this.movieName],this.movieElement=null,this.settings=null,this.customSettings=null,this.eventQueue=null,this.movieName=null,!0}catch(i){return!1}},SWFUpload.prototype.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: ",SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","	","upload_url:               ",this.settings.upload_url,"\n","	","flash_url:                ",this.settings.flash_url,"\n","	","use_query_string:         ",this.settings.use_query_string.toString(),"\n","	","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","	","http_success:             ",this.settings.http_success.join(", "),"\n","	","assume_success_timeout:   ",this.settings.assume_success_timeout,"\n","	","file_post_name:           ",this.settings.file_post_name,"\n","	","post_params:              ",this.settings.post_params.toString(),"\n","	","file_types:               ",this.settings.file_types,"\n","	","file_types_description:   ",this.settings.file_types_description,"\n","	","file_size_limit:          ",this.settings.file_size_limit,"\n","	","file_upload_limit:        ",this.settings.file_upload_limit,"\n","	","file_queue_limit:         ",this.settings.file_queue_limit,"\n","	","debug:                    ",this.settings.debug.toString(),"\n","	","prevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n","	","button_placeholder_id:    ",this.settings.button_placeholder_id.toString(),"\n","	","button_placeholder:       ",this.settings.button_placeholder?"Set":"Not Set","\n","	","button_image_url:         ",this.settings.button_image_url.toString(),"\n","	","button_width:             ",this.settings.button_width.toString(),"\n","	","button_height:            ",this.settings.button_height.toString(),"\n","	","button_text:              ",this.settings.button_text.toString(),"\n","	","button_text_style:        ",this.settings.button_text_style.toString(),"\n","	","button_text_top_padding:  ",this.settings.button_text_top_padding.toString(),"\n","	","button_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n","	","button_action:            ",this.settings.button_action.toString(),"\n","	","button_disabled:          ",this.settings.button_disabled.toString(),"\n","	","custom_settings:          ",this.settings.custom_settings.toString(),"\n","Event Handlers:\n","	","swfupload_loaded_handler assigned:  ",("function"==typeof this.settings.swfupload_loaded_handler).toString(),"\n","	","file_dialog_start_handler assigned: ",("function"==typeof this.settings.file_dialog_start_handler).toString(),"\n","	","file_queued_handler assigned:       ",("function"==typeof this.settings.file_queued_handler).toString(),"\n","	","file_queue_error_handler assigned:  ",("function"==typeof this.settings.file_queue_error_handler).toString(),"\n","	","upload_start_handler assigned:      ",("function"==typeof this.settings.upload_start_handler).toString(),"\n","	","upload_progress_handler assigned:   ",("function"==typeof this.settings.upload_progress_handler).toString(),"\n","	","upload_error_handler assigned:      ",("function"==typeof this.settings.upload_error_handler).toString(),"\n","	","upload_success_handler assigned:    ",("function"==typeof this.settings.upload_success_handler).toString(),"\n","	","upload_complete_handler assigned:   ",("function"==typeof this.settings.upload_complete_handler).toString(),"\n","	","debug_handler assigned:             ",("function"==typeof this.settings.debug_handler).toString(),"\n"].join(""))},SWFUpload.prototype.addSetting=function(t,e,s){return this.settings[t]=void 0==e?s:e},SWFUpload.prototype.getSetting=function(t){return void 0!=this.settings[t]?this.settings[t]:""},SWFUpload.prototype.callFlash=function(functionName,argumentArray){argumentArray=argumentArray||[];var movieElement=this.getMovieElement(),returnValue,returnString;try{returnString=movieElement.CallFunction('<invoke name="'+functionName+'" returntype="javascript">'+__flash__argumentsToXML(argumentArray,0)+"</invoke>"),returnValue=eval(returnString)}catch(ex){throw"Call to "+functionName+" failed"}return void 0!=returnValue&&"object"==typeof returnValue.post&&(returnValue=this.unescapeFilePostParams(returnValue)),returnValue},SWFUpload.prototype.selectFile=function(){this.callFlash("SelectFile")},SWFUpload.prototype.selectFiles=function(){this.callFlash("SelectFiles")},SWFUpload.prototype.startUpload=function(t){this.callFlash("StartUpload",[t])},SWFUpload.prototype.cancelUpload=function(t,e){e!==!1&&(e=!0),this.callFlash("CancelUpload",[t,e])},SWFUpload.prototype.stopUpload=function(){this.callFlash("StopUpload")},SWFUpload.prototype.getStats=function(){return this.callFlash("GetStats")},SWFUpload.prototype.setStats=function(t){this.callFlash("SetStats",[t])},SWFUpload.prototype.getFile=function(t){return"number"==typeof t?this.callFlash("GetFileByIndex",[t]):this.callFlash("GetFile",[t])},SWFUpload.prototype.addFileParam=function(t,e,s){return this.callFlash("AddFileParam",[t,e,s])},SWFUpload.prototype.removeFileParam=function(t,e){this.callFlash("RemoveFileParam",[t,e])},SWFUpload.prototype.setUploadURL=function(t){this.settings.upload_url=t.toString(),this.callFlash("SetUploadURL",[t])},SWFUpload.prototype.setPostParams=function(t){this.settings.post_params=t,this.callFlash("SetPostParams",[t])},SWFUpload.prototype.addPostParam=function(t,e){this.settings.post_params[t]=e,this.callFlash("SetPostParams",[this.settings.post_params])},SWFUpload.prototype.removePostParam=function(t){delete this.settings.post_params[t],this.callFlash("SetPostParams",[this.settings.post_params])},SWFUpload.prototype.setFileTypes=function(t,e){this.settings.file_types=t,this.settings.file_types_description=e,this.callFlash("SetFileTypes",[t,e])},SWFUpload.prototype.setFileSizeLimit=function(t){this.settings.file_size_limit=t,this.callFlash("SetFileSizeLimit",[t])},SWFUpload.prototype.setFileUploadLimit=function(t){this.settings.file_upload_limit=t,this.callFlash("SetFileUploadLimit",[t])},SWFUpload.prototype.setFileQueueLimit=function(t){this.settings.file_queue_limit=t,this.callFlash("SetFileQueueLimit",[t])},SWFUpload.prototype.setFilePostName=function(t){this.settings.file_post_name=t,this.callFlash("SetFilePostName",[t])},SWFUpload.prototype.setUseQueryString=function(t){this.settings.use_query_string=t,this.callFlash("SetUseQueryString",[t])},SWFUpload.prototype.setRequeueOnError=function(t){this.settings.requeue_on_error=t,this.callFlash("SetRequeueOnError",[t])},SWFUpload.prototype.setHTTPSuccess=function(t){"string"==typeof t&&(t=t.replace(" ","").split(",")),this.settings.http_success=t,this.callFlash("SetHTTPSuccess",[t])},SWFUpload.prototype.setAssumeSuccessTimeout=function(t){this.settings.assume_success_timeout=t,this.callFlash("SetAssumeSuccessTimeout",[t])},SWFUpload.prototype.setDebugEnabled=function(t){this.settings.debug_enabled=t,this.callFlash("SetDebugEnabled",[t])},SWFUpload.prototype.setButtonImageURL=function(t){void 0==t&&(t=""),this.settings.button_image_url=t,this.callFlash("SetButtonImageURL",[t])},SWFUpload.prototype.setButtonDimensions=function(t,e){this.settings.button_width=t,this.settings.button_height=e;var s=this.getMovieElement();void 0!=s&&(s.style.width=t+"px",s.style.height=e+"px"),this.callFlash("SetButtonDimensions",[t,e])},SWFUpload.prototype.setButtonText=function(t){this.settings.button_text=t,this.callFlash("SetButtonText",[t])},SWFUpload.prototype.setButtonTextPadding=function(t,e){this.settings.button_text_top_padding=e,this.settings.button_text_left_padding=t,this.callFlash("SetButtonTextPadding",[t,e])},SWFUpload.prototype.setButtonTextStyle=function(t){this.settings.button_text_style=t,this.callFlash("SetButtonTextStyle",[t])},SWFUpload.prototype.setButtonDisabled=function(t){this.settings.button_disabled=t,this.callFlash("SetButtonDisabled",[t])},SWFUpload.prototype.setButtonAction=function(t){this.settings.button_action=t,this.callFlash("SetButtonAction",[t])},SWFUpload.prototype.setButtonCursor=function(t){this.settings.button_cursor=t,this.callFlash("SetButtonCursor",[t])},SWFUpload.prototype.queueEvent=function(t,e){void 0==e?e=[]:e instanceof Array||(e=[e]);var s=this;if("function"==typeof this.settings[t])this.eventQueue.push(function(){this.settings[t].apply(this,e)}),setTimeout(function(){s.executeNextEvent()},0);else if(null!==this.settings[t])throw"Event handler "+t+" is unknown or is not a function"},SWFUpload.prototype.executeNextEvent=function(){var t=this.eventQueue?this.eventQueue.shift():null;"function"==typeof t&&t.apply(this)},SWFUpload.prototype.unescapeFilePostParams=function(t){var e,s=/[$]([0-9a-f]{4})/i,n={};if(void 0!=t){for(var i in t.post)if(t.post.hasOwnProperty(i)){e=i;for(var o;null!==(o=s.exec(e));)e=e.replace(o[0],String.fromCharCode(parseInt("0x"+o[1],16)));n[e]=t.post[i]}t.post=n}return t},SWFUpload.prototype.testExternalInterface=function(){try{return this.callFlash("TestExternalInterface")}catch(t){return!1}},SWFUpload.prototype.flashReady=function(){var t=this.getMovieElement();return t?(this.cleanUp(t),void this.queueEvent("swfupload_loaded_handler")):void this.debug("Flash called back ready but the flash movie can't be found.")},SWFUpload.prototype.cleanUp=function(t){try{if(this.movieElement&&"unknown"==typeof t.CallFunction){this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");for(var e in t)try{"function"==typeof t[e]&&(t[e]=null)}catch(s){}}}catch(n){}window.__flash__removeCallback=function(t,e){try{t&&(t[e]=null)}catch(s){}}},SWFUpload.prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler")},SWFUpload.prototype.fileQueued=function(t){t=this.unescapeFilePostParams(t),this.queueEvent("file_queued_handler",t)},SWFUpload.prototype.fileQueueError=function(t,e,s){t=this.unescapeFilePostParams(t),this.queueEvent("file_queue_error_handler",[t,e,s])},SWFUpload.prototype.fileDialogComplete=function(t,e,s){this.queueEvent("file_dialog_complete_handler",[t,e,s])},SWFUpload.prototype.uploadStart=function(t){t=this.unescapeFilePostParams(t),this.queueEvent("return_upload_start_handler",t)},SWFUpload.prototype.returnUploadStart=function(t){var e;if("function"==typeof this.settings.upload_start_handler)t=this.unescapeFilePostParams(t),e=this.settings.upload_start_handler.call(this,t);else if(void 0!=this.settings.upload_start_handler)throw"upload_start_handler must be a function";void 0===e&&(e=!0),e=!!e,this.callFlash("ReturnUploadStart",[e])},SWFUpload.prototype.uploadProgress=function(t,e,s){t=this.unescapeFilePostParams(t),this.queueEvent("upload_progress_handler",[t,e,s])},SWFUpload.prototype.uploadError=function(t,e,s){t=this.unescapeFilePostParams(t),this.queueEvent("upload_error_handler",[t,e,s])},SWFUpload.prototype.uploadSuccess=function(t,e,s){t=this.unescapeFilePostParams(t),this.queueEvent("upload_success_handler",[t,e,s])},SWFUpload.prototype.uploadComplete=function(t){t=this.unescapeFilePostParams(t),this.queueEvent("upload_complete_handler",t)},SWFUpload.prototype.debug=function(t){this.queueEvent("debug_handler",t)},SWFUpload.prototype.debugMessage=function(t){if(this.settings.debug){var e,s=[];if("object"==typeof t&&"string"==typeof t.name&&"string"==typeof t.message){for(var n in t)t.hasOwnProperty(n)&&s.push(n+": "+t[n]);e=s.join("\n")||"",s=e.split("\n"),e="EXCEPTION: "+s.join("\nEXCEPTION: "),SWFUpload.Console.writeLine(e)}else SWFUpload.Console.writeLine(t)}},SWFUpload.Console={},SWFUpload.Console.writeLine=function(t){var e,s;try{e=document.getElementById("SWFUpload_Console"),e||(s=document.createElement("form"),document.getElementsByTagName("body")[0].appendChild(s),e=document.createElement("textarea"),e.id="SWFUpload_Console",e.style.fontFamily="monospace",e.setAttribute("wrap","off"),e.wrap="off",e.style.overflow="auto",e.style.width="700px",e.style.height="350px",e.style.margin="5px",s.appendChild(e)),e.value+=t+"\n",e.scrollTop=e.scrollHeight-e.clientHeight}catch(n){alert("Exception: "+n.name+" Message: "+n.message)}},module.exports=window.SWFUpload=SWFUpload});