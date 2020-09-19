define("common:widget/dep/editor/fileUploader/fileUploader",function(require,exports,module){function FileProgress(e,s){this.swfupload=s,this.getIconName=function(e){var s={icon_file_image:"jpg,jpeg,gif,bmp,png,jpe,cur,svg,svgz,tif,tiff,ico",icon_file_visio:"vsd,vsdx",icon_file_pdf:"pdf",icon_file_word:"doc,docx,ods,ots,odt,rtf,dot,dotx,odm",icon_file_excel:"xls,xlsx,xlt,xltx,csv",icon_file_text:"txt,html,htm,xhtml,xml,js,css",icon_file_music:"wma,wav,mp3,aac,ra,ram,mp2,ogg,aif,mpega,amr,mid,midi",icon_file_video:"wmv,rmvb,mpeg4,mpeg2,flv,avi,3gp,mpga,qt,rm,wmz,wmd,wvx,wmx,wm,swf,mpg,mp4,mkv,mpeg,mov",icon_file_powerpoint:"ppt,pptx,pps,pot,ppsx,potx",icon_file_ipa:"ipa",icon_file_exe:"exe,msi",icon_file_zip:"zip,rar,7z,tar,gz",icon_file_apk:"apk",icon_file_default:"default",icon_file_torrent:"torrent"},t={};for(i in s){var r=s[i].split(",");for(j in r)t.hasOwnProperty(r[j]),void 0==t[r[j]]&&(t[r[j]]=i)}return t[e.toLowerCase()]?t[e.toLowerCase()]:t["default"]},this.getShortName=function(e,s){s||(s=27);for(var t=0,r=0;t<e.length&&(null!=e.charAt(t).match(/[^\x00-\xff]/g)?r+=2:r++,!(r>s));t++);return e.substr(0,t)+(t>=e.length?"":"...")},this.getFileSize=function(e){var s=["B","K","M","G","T"],t=Math.min(Math.max(Math.floor(Math.log(e)/Math.LN2/10),1),5);return Math.round(100*e/Math.pow(2,10*t))/100+s[t]},this.fileProgressWrapper=document.getElementById(s.customSettings.progressTarget).firstChild,this.fileIcon=T(".fileIcon",this.fileProgressWrapper)[0],this.progressName=T(".progressName",this.fileProgressWrapper)[0],this.progressSize=T(".progressSize",this.fileProgressWrapper)[0],this.progressRename=T(".progressRename",this.fileProgressWrapper)[0],this.progressRenameValue=T(".progressRenameValue",this.fileProgressWrapper)[0],this.progressMessage=T(".progressMessage",this.fileProgressWrapper)[0],this.progressBarWrapper=T(".progressBarWrapper",this.fileProgressWrapper)[0],this.progressBar=T(".progressBar",this.fileProgressWrapper)[0],this.progressBarText=T(".progressBarText",this.fileProgressWrapper)[0],this.progressCancel=T(".progressCancel",this.fileProgressWrapper)[0],this.progressWealthWrapper=T(".progressWealthWrapper",this.fileOperator)[0],this.fileOperator=T(".progressFileOperator",this.fileProgressWrapper)[0],this.fileOperatorRename=T("a.rename",this.fileOperator)[0],this.fileOperatorDelete=T("a.remove",this.fileOperator)[0],this.setFileInfo(e.name,e.size)}var T=require("common:widget/js/util/tangram/tangram"),Dialog=require("common:widget/js/ui/dialog/dialog"),SWFUpload=require("common:widget/lib/swfupload/swfupload");FileProgress.prototype.setFileInfo=function(e,s,t){var r;t||(this.progressName.innerHTML=this.getShortName(e,27),this.progressName.setAttribute("title",e)),this.swfupload.customSettings.currentFile&&(this.swfupload.customSettings.currentFile.name=e),null!=s&&(this.progressSize.innerHTML="("+this.getFileSize(s)+")"),r=e.match(/\.([^\.]+)$/),this.fileIcon.className=null!=r?"fileIcon "+this.getIconName(r[1]):"fileIcon "+this.getIconName("")},FileProgress.prototype.setStatus=function(e,s,t,r){var o,i="",a=this.swfupload;switch(this.progressMessage.innerHTML=s||"",e){case"ready":a.customSettings.setBindUploadStatus("ready"),i="1,1,1,0,0,0,0,1,1,1";break;case"uploading":void 0!=r&&(this.progressMessage.innerHTML=r,this.progressBar.style.width=r+"%",this.progressBarText.innerHTML=(r>=100?99:r)+"%"),this.progressBar.className="progressBar",this.fileProgressWrapper.className="progressWrapper",a.customSettings.setBindUploadStatus("uploading"),i="1,1,1,0,0,1,1,0,0,0";break;case"finish":this.progressBar.style.width="99%",this.progressBarText.innerHTML="99%",a.customSettings.setBindUploadStatus("finish"),i="1,1,1,0,0,1,1,0,0,0";break;case"complete":this.progressBar.style.width="",this.progressBarText.innerHTML="100%",this.progressBar.className="progressBar progressBarComplete",a.customSettings.setBindUploadStatus("complete"),i="1,1,1,0,0,1,0,1,1,1",a.customSettings.setEditorStatusBar("");break;case"error":this.progressBar.style.width="",this.fileProgressWrapper.className="progressWrapper progressWrapperError",void 0!=t?a.customSettings.setBindUploadStatus("error",t):a.customSettings.setBindUploadStatus("error",-1),i="1,1,1,0,1,0,0,0,0,1";break;case"setfilesuccess":this.progressBar.style.width="",this.progressBarText.innerHTML="100%",this.progressBar.className="progressBar",a.customSettings.setBindUploadStatus("complete"),i="1,1,1,0,0,1,0,1,1,1";break;case"setfileerror":this.fileProgressWrapper.className="progressWrapper progressWrapperError",this.progressMessage.innerHTML=s,a.customSettings.setBindUploadStatus("error",-1),i="0,0,0,0,1,0,0,0,0,1";break;case"renamestart":i="1,0,0,1,0,0,0,0,0,0";break;case"renamecomplete":a.customSettings.setBindUploadStatus("complete"),i="1,1,1,0,0,1,0,1,1,1";break;case"renameerror":this.fileProgressWrapper.className="progressWrapper progressWrapperError",a.customSettings.setBindUploadStatus("error",-1),i="1,0,0,1,1,0,0,0,0,0";break;default:i="1,1,1,0,0,0,0,0,0,0"}o=i.split(","),a.customSettings.isEditorFile&&(o[5]=0),this.fileIcon.style.display="1"==o[0]?"block":"none",this.progressName.style.display="1"==o[1]?"block":"none",this.progressSize.style.display="1"==o[2]?"block":"none",this.progressRename.style.display="1"==o[3]?"block":"none",this.progressMessage.style.display="1"==o[4]?"block":"none",this.progressBarWrapper.style.display="1"==o[5]?"block":"none",this.progressCancel.style.display="1"==o[6]?"block":"none",this.progressWealthWrapper.style.display="1"==o[7]?"block":"none",this.fileOperatorRename.style.display="1"==o[8]?"inline":"none",this.fileOperatorDelete.style.display="1"==o[9]?"inline":"none",this.fileProgressWrapper.style.display="block"},window.swfUploadPreLoad=function(){},window.swfUploadLoaded=function(){try{SWFUpload.SERVER_ERROR={31042:"您尚未登录",31061:"已存在同名文件",31062:"文件名称非法",31073:"重命名失败",31218:"容量超出限额"};var e=this;e.customSettings.cancelHandler=function(s){var t=e.progress;s.preventDefault(),e.cancelUpload(e.customSettings.currentFile.id),e.customSettings.successCount=0,e.customSettings.isUploading=!1,t.setStatus("ready"),T(t.fileProgressWrapper).hide()},e.customSettings.deleteHandler=function(s){var t=e.progress,r=e.customSettings.getUploadFile();if(s.preventDefault(),e.customSettings.successCount=0,e.customSettings.setUploadFile("fileInfo",null),t.setStatus("ready"),T(t.fileProgressWrapper).hide(),e.customSettings.isEditorFile)e.customSettings.setUploadFile("backFileInfo",!0,"delete");else{var o=e.customSettings.swfUploadDir;r&&r.path.substr(0,o.length)==o&&!e.customSettings.isInsertFromWangPan&&T.ajax({url:encodeURI("https://pcs.baidu.com/rest/2.0/pcs/file?method=delete&app_id=598913&response-status=200&op=permanent&fs_id="+r.fs_id),dataType:"jsonp",success:function(){}})}e.customSettings.setEditorStatusBar("")},e.customSettings.inputHandler=function(s){13==s.keyCode&&e.customSettings.doRenameHandler()},e.customSettings.renameHandler=function(s){var t=e.progress;s.preventDefault(),t.setStatus("renamestart"),t.progressRenameValue.value=t.progressName.title,function(e,s,t){if(e.createTextRange){var r=e.createTextRange();r.collapse(!0),r.moveStart("character",s),r.moveEnd("character",t),r.select()}else e.setSelectionRange?e.setSelectionRange(s,t):e.selectionStart&&(e.selectionStart=s,e.selectionEnd=t)}(t.progressRenameValue,0,t.progressRenameValue.value.lastIndexOf(".")),t.progressRenameValue.focus()},e.customSettings.doRenameHandler=function(){var s=e.progress,t=T.string(s.progressRenameValue.value).trim();if(/\.((jpg)|(jpeg)|(gif)|(bmp)|(png)|(jpe)|(cur)|(tif)|(tiff)|(ico))$/i.test(t))s.setStatus("renameerror","不允许改成图片格式");else if(/[\\\/:\*\?"<>|]/.test(t))s.setStatus("renameerror",'文件名不能包含下列字符 \\ / : * ? " < > |');else{var r=s.progressName.title,o=e.customSettings.getUploadFile().path,i=o.substr(0,o.lastIndexOf("/")+1)+t;o!=i&&e.customSettings.isEditorFile?(e.customSettings.setUploadFile("backFileInfo",i,"rename"),s.setFileInfo(t),s.setStatus("renamecomplete")):""!=t&&t!=r.substr(r.lastIndexOf(".")+1)&&t!=r&&i!=o?T.ajax({url:encodeURI("https://pcs.baidu.com/rest/2.0/pcs/file?method=move&app_id=598913&response-status=200&from="+o+"&to="+i),dataType:"jsonp",success:function(r){r.error_code?31218==r.error_code||31112==r.error_code?s.setStatus("renameerror",'<span>网盘已满</span><a href="http://yun.baidu.com/disk/award" class="progressExtend" target="_blank">扩容</a>'):s.setStatus("renameerror",SWFUpload.SERVER_ERROR[r.error_code]):(s.setStatus("renamecomplete"),s.setFileInfo(t),e.progress.setFileInfo(t),e.customSettings.setUploadFile("fileInfo",i,"path"))}}):s.setStatus("complete")}};var s=document.getElementById(e.customSettings.progressTarget).firstChild,t=T(".progressCancel",s)[0],r=T(".progressRenameValue",s)[0],o=T(".progressRenameBtn",s)[0],i=T(".progressFileOperator a",s)[0],a=T(".progressFileOperator a",s)[1];T(t).on("click",e.customSettings.cancelHandler),T(i).on("click",e.customSettings.renameHandler),T(r).on("keyup",e.customSettings.inputHandler),T(o).on("click",e.customSettings.doRenameHandler),T(a).on("click",e.customSettings.deleteHandler),e.customSettings.isEditorFile?e.customSettings.getUploadFile()?e.customSettings.setBindUploadStatus("complete"):e.customSettings.setBindUploadStatus("error",-1):e.customSettings.setBindUploadStatus("ready")}catch(n){}},window.swfUploadLoadFailed=function(){},window.swfUploadFileDialogStart=function(){},window.swfUploadFileDialogComplete=function(){var e=this;e.customSettings.hideAllPopup()},window.swfUploadFileQueued=function(e){try{var s=this;if(/\.((jpg)|(jpeg)|(gif)|(bmp)|(png)|(jpe)|(cur)|(tif)|(tiff)|(ico))$/i.test(e.type))Dialog.alert("请使用插入图片功能，可直接在线预览");else if(s.customSettings.successCount>0||1==s.customSettings.isUploading)var t=Dialog.confirm('<div class="f-14"><img class="grid" src="'+KID.httpsTrans("http://img.baidu.com/img/iknow/feedback/icon-question.png")+'"><p>您只能上传一个附件，上一附件将被覆盖，确定吗？</p><p class="f-12 f-gray pl-20">（如果想上传多个文件，请打包）</p></div>',{width:400,height:150,title:"知道提示",onaccept:function(){try{t.hide();var r=s.customSettings.getUploadFile();if(s.progress=new FileProgress(e,s),s.customSettings.setUploadFile("fileInfo",null),s.customSettings.successCount=0,s.customSettings.isEditorFile)s.customSettings.setUploadFile("backFileInfo",!0,"delete");else{var o=s.customSettings.swfUploadDir;r&&r.path.substr(0,o.length)==o&&!s.customSettings.isInsertFromWangPan&&T.ajax({url:encodeURI("https://pcs.baidu.com/rest/2.0/pcs/file?method=delete&app_id=598913&response-status=200&op=permanent&fs_id="+r.fs_id),dataType:"jsonp",success:function(){}})}s.cancelUpload(s.customSettings.currentFile.id,!1),s.startUpload()}catch(i){}},oncancel:function(){try{t.hide(),s.cancelUpload(e.id,!1)}catch(r){}}});else s.progress=new FileProgress(e,s),s.startUpload()}catch(r){}},window.swfUploadQueueComplete=function(){},window.swfUploadFileQueueError=function(e,s){try{var t,r=this;switch(t=r.progress?r.progress:r.progress=new FileProgress(e,r),r.customSettings.setBindUploadStatus("error",-1),r.customSettings.isUploading=!1,s){case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:t.setStatus("error","文件超过2G或为空");break;case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:t.setStatus("error","上传文件类型不允许");break;default:null!==e&&t.setStatus("error","上传失败请重试或删除")}}catch(o){}},window.swfUploadSendStart=function(e){try{var s=this,t=F.context("user").ECBD||null,r=s.progress;s.customSettings.isUploading=!1,s.customSettings.isEditorFile=!1,s.customSettings.isInsertFromWangPan=!1,s.customSettings.currentFile=e,t?(r.setStatus("uploading","",null,0),s.setUploadURL(encodeURI(s.customSettings.swfUploadUrl+"&path="+s.customSettings.swfUploadDir+e.name+"&ecbd="+encodeURIComponent(t)))):(r.setStatus("error","您尚未登录"),s.cancelUpload(e.id,!1))}catch(o){}return!0},window.swfUploadSendProgress=function(e,s,t){try{var r=this,o=r.progress,i=Math.ceil(s/t*100);r.customSettings.isUploading=!0,100!=i?o.setStatus("uploading","",null,i):o.setStatus("finish")}catch(a){}},window.swfUploadSendSuccess=function(file,serverData){try{var swfupload=this,progress=swfupload.progress,error_message,fileinfo=eval("("+serverData+")");if(swfupload.customSettings.isUploading=!1,31218==fileinfo.error_code||31112==fileinfo.error_code)progress.setStatus("error",'<span>网盘已满</span><a href="http://yun.baidu.com/disk/award" class="progressExtend" target="_blank">扩容</a>',fileinfo.error_code);else if(fileinfo.error_code)error_message=SWFUpload.SERVER_ERROR[fileinfo.error_code],error_message||(error_message="上传失败"),progress.setStatus("error",error_message+",请重试或者删除",fileinfo.error_code);else{var serverFileName=fileinfo.path.substr(fileinfo.path.lastIndexOf("/")+1);serverFileName!=swfupload.customSettings.currentFile.name&&progress.setFileInfo(serverFileName,null,!0),progress.setStatus("complete"),swfupload.customSettings.successCount++,swfupload.customSettings.setUploadFile("fileInfo",fileinfo)}}catch(ex){var swfupload=this,progress=swfupload.progress;"SyntaxError"==ex.name&&progress.setStatus("error","上传失败请重试或删除")}},window.swfUploadSendError=function(e,s){try{var t=this,r=t.progress;s!=SWFUpload.UPLOAD_ERROR.FILE_CANCELLED&&(t.customSettings.setBindUploadStatus("error",-1),r.setStatus("error","上传失败请重试或删除"))}catch(o){}},window.swfUploadSendComplete=function(){},window.editorSetUploadFile=function(e,s,t){var r=t.swfupload;if(r&&r.customSettings.successCount>0,e&&!e.error){var o=e.fileInfo;o.path=decodeURIComponent(o.path);var i=o.path.substr(o.path.lastIndexOf("/")+1),a=o.size,n=o.path.match(/(\.[^\.]*)$/),l=n?n[1]:".";t._uploadFile.fileInfo=o,t._uploadFile.backFileInfo=o,r.customSettings.isEditorFile=!0,r.customSettings.isInsertFromWangPan=s,r.customSettings.successCount=1,r.customSettings.currentFile={id:"SWFUpload_0_EDIT",name:i||"",size:a||0,type:l||"",filestatus:-4,index:1},r.progress=new FileProgress(r.customSettings.currentFile,r),r.progress.setStatus("setfilesuccess"),r.progress.setFileInfo(i,a)}else t._uploadFile.fileInfo=null,t._uploadFile.backFileInfo=null,r.customSettings.isEditorFile=!0,r.customSettings.successCount=0,r.customSettings.currentFile={id:"SWFUpload_0_NULL",name:"",size:0,type:"",filestatus:-4,index:1,creationdate:0,modificationdate:0},r.progress=new FileProgress(r.customSettings.currentFile,r),r.progress.setStatus("setfileerror",'<span style="padding-left:5px;">很抱歉，您上传的附件已失效，请重新上传或删除。</span>'),r.progress.setFileInfo("",0)},window.editorSubmitUploadFile=function(e,s){var t=s._uploadFile.fileInfo,r=s._uploadFile.backFileInfo,o=s.swfupload,i=o.customSettings.swfUploadDir;switch(e){case"submit":r&&r["delete"]?r.path.substr(0,i.length)!=i||o.customSettings.isInsertFromWangPan||T.ajax({url:encodeURI("https://pcs.baidu.com/rest/2.0/pcs/file?method=delete&app_id=598913&response-status=200&op=permanent&fs_id="+r.fs_id),dataType:"jsonp",success:function(){}}):r&&r.rename&&r.path!=r.rename&&T.ajax({url:encodeURI("https://pcs.baidu.com/rest/2.0/pcs/file?method=move&app_id=598913&response-status=200&from="+r.path+"&to="+r.rename),dataType:"jsonp",success:function(){}});break;case"cancel":(t&&!r||t&&r&&t.fs_id!=r.fs_id)&&(t.path.substr(0,i.length)!=i||o.customSettings.isInsertFromWangPan||T.ajax({url:encodeURI("https://pcs.baidu.com/rest/2.0/pcs/file?method=delete&app_id=598913&response-status=200&op=permanent&fs_id="+t.fs_id),dataType:"jsonp",success:function(){}})),s._uploadFile.fileInfo=r}}});