define("common:widget/ui/comment/comment.js",function(n,o,e){var c=n("common:widget/lib/tangram/base/base.js"),r=n("common:widget/ui/ajax/ajax.js"),t=n("common:widget/ui/dialog/dialog.js"),i=n("common-jquery:widget/js/logic/shimingzhi/shimingzhi.js").shimingAct;t=window.parent.__dialog||t;var a={errorDeal:{SUBMIT_EXP_VCODE_UNCORRECT:function(){var n=n||null;n&&n.error()},SUBMIT_EXP_VCODE_EXPIRED:function(){var n=n||null;n&&n.error()},SUBMIT_EXP_VCODE_UNINPUT:function(){var n=n||null;n&&n.error()},SUBMIT_EXP_VCODE_ISUSED:function(){var n=n||null;n&&n.error()}},init:function(n,o){var e,t=this,i="/submit/feel";o&&(e=o.captcha,o.url&&(i=o.url));var a={params:{method:"createNewExpFeel",eidEnc:F.context("eid"),content:n},errorDeal:{SUBMIT_EXP_VCODE_UNCORRECT:function(){e&&e.error()},SUBMIT_EXP_VCODE_EXPIRED:function(){e&&e.error()},SUBMIT_EXP_VCODE_UNINPUT:function(){e&&e.error()},SUBMIT_EXP_VCODE_ISUSED:function(){e&&e.error()}}};o&&(c.object.extend(a.params,o.params||{}),c.object.extend(a.errorDeal,o.errorDeal||{}),a.successDeal=o.successDeal||t.successDeal,a.onSuccess=o.onSuccess||null,a.captcha=o.captcha||null),r.post(i,a.params,function(n){a.captcha&&a.captcha.destroy(),a.successDeal(),a.onSuccess&&a.onSuccess(n)},a.errorDeal)},successDeal:function(){var n='<p class="exp-confirm-tip">提交成功！</p>';t.expConfirm({type:"success",info:n})}},s=function(n,o){var e={params:{method:"createNewExpQuestion"},successDeal:function(){var n='<p class="exp-confirm-tip">提交疑问成功！</p>';t.expConfirm({type:"success",info:n})},errorDeal:{IS_SELF_USER_ERR:function(){t.expConfirm({type:"error",info:'<p class="exp-confirm-tip">您不能给自己的经验写“疑问”</p>'})},VERIFY:function(){o.captcha&&o.captcha.destroy(),i()}}};o&&(c.object.extend(e.params,o.params||{}),e.onSuccess=o.onSuccess||null,e.captcha=o.captcha||null),a.init(n,e)},p=function(n,o){var e={params:{method:"updateExpQuestion"},successDeal:function(){}};o&&(c.object.extend(e.params,o.params||{}),e.onSuccess=o.onSuccess||null,e.captcha=o.captcha||null),a.init(n,e)},u=function(n,o){var e={params:{method:"createNewExpFeel"},successDeal:function(){var n='<p class="exp-confirm-tip">提交经验有得成功！</p>';t.expConfirm({type:"success",info:n})},errorDeal:{IS_SELF_USER_ERR:function(){t.expConfirm({type:"error",info:'<p class="exp-confirm-tip">别自我陶醉啦，去给别的小伙伴写写有得吧！</p>'})},FEED_TOO_SHORT_ERR:function(){t.expConfirm({type:"error",info:'<p class="exp-confirm-tip">多赏作者几个字吧！哪有那么短的心得啊？<br/>或者你可以试试加几张成品图？</p>'})},HIT_REJECT_WORD_ERR:function(){var n='<p class="exp-confirm-tip">抱歉，评论含有不适当内容，发布不成功</p>';t.expConfirm(F.context("isLogin")?{type:"error",info:n}:{type:"error",info:n,onconfirm:function(){window.location.reload()}})},HIT_SENSITIVE_WORD:function(){var n='<p class="exp-confirm-tip">评论中可能含有敏感内容，将稍后发布</p>';t.expConfirm(F.context("isLogin")?{type:"error",info:n}:{type:"error",info:n,onconfirm:function(){window.location.reload()}})},VERIFY:function(){o.captcha&&o.captcha.destroy(),i()}}};o&&(c.object.extend(e.params,o.params||{}),e.onSuccess=o.onSuccess||null,e.captcha=o.captcha||null),a.init(n,e)},f=function(n,o){var e={params:{method:"updateExpFeel",eidEnc:F.context("eid"),content:n},successDeal:function(){},errorDeal:{INVALID_EID_ERR:function(){t.alert("经验提示",{info:'<p class="exp-tip">无效经验</p>',width:300,height:120})},IS_SELF_USER_ERR:function(){t.expConfirm({type:"error",info:'<p class="exp-confirm-tip">别自我陶醉啦，去给别的小伙伴写写有得吧！</p>'})},FEED_TOO_SHORT_ERR:function(){t.expConfirm({type:"error",info:'<p class="exp-confirm-tip">多赏作者几个字吧！哪有那么短的心得啊？<br/>或者你可以试试加几张成品图？</p>'})},HIT_REJECT_WORD_ERR:function(){var n='<p class="exp-confirm-tip">抱歉，评论含有不适当内容，发布不成功</p>';t.expConfirm(F.context("isLogin")?{type:"error",info:n}:{type:"error",info:n,onconfirm:function(){window.location.reload()}})},HIT_SENSITIVE_WORD:function(){var n='<p class="exp-confirm-tip">评论中可能含有敏感内容，将稍后发布</p>';t.expConfirm(F.context("isLogin")?{type:"error",info:n}:{type:"error",info:n,onconfirm:function(){window.location.reload()}})},VERIFY:function(){o.captcha&&o.captcha.destroy(),i()}}};o&&(c.object.extend(e.params,o.params||{}),e.onSuccess=o.onSuccess||null,e.captcha=o.captcha||null),a.init(n,e)},l=function(n,o){var e={url:"/submit/comment",params:{method:"addComment",eidEnc:F.context("eid"),content:n,picEnc:""},successDeal:function(){var n='<p class="exp-confirm-tip">提交投票评论成功！</p>';t.expConfirm({type:"success",info:n})},errorDeal:{HIT_REJECT_WORD_ERR:function(){var n='<p class="exp-confirm-tip">抱歉，评论含有不适当内容，发布不成功</p>';t.expConfirm(F.context("isLogin")?{type:"error",info:n}:{type:"error",info:n,onconfirm:function(){window.location.reload()}})},HIT_SENSITIVE_WORD:function(){var n='<p class="exp-confirm-tip">评论中可能含有敏感内容，将稍后发布</p>';t.expConfirm(F.context("isLogin")?{type:"error",info:n}:{type:"error",info:n,onconfirm:function(){window.location.reload()}})},VERIFY:function(){o.captcha&&o.captcha.destroy(),i()}}};o&&(c.object.extend(e.params,o.params||{}),e.onSuccess=o.onSuccess||null,e.captcha=o.captcha||null),a.init(n,e)},m=function(n,o){var e={url:"/submit/comment",params:{method:"addReply"},successDeal:function(){}};o&&(c.object.extend(e.params,o.params||{}),e.onSuccess=o.onSuccess||null,e.captcha=o.captcha||null),a.init(n,e)};e.exports={Question:s,Youde:u,Vote:l,ReplyYoude:f,ReplyQuestion:p,ReplyVote:m}});