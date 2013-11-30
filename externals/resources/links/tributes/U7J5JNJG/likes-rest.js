var wpLikes;(function($){var extWin;wpLikes={version:'',lang:'en',jsonAPIbase:'https://public-api.wordpress.com/rest/v1',hasUpgradedProxy:false,isLoggedIn:false,queue:[],masterReady:false,requests:{},me:false,askedMe:false,cache:[],batchFinished:false,batchWaiting:[],adminBarEnabled:false,widgetDims:{},login_blog_id:false,login_post_id:false,login_obj_id:false,textStyles:{},linkStyles:{},adminBarStyles:{},likers:[],total:[],wpLikes:function(){var info=wpLikes.splitParams(location.hash.replace(/^#/,''));if('ver'in info)
wpLikes.version=info.ver;},resizeFrame:function(name){var slim=jQuery(window.parent.frames[name].document).find('.wpl-likebox').hasClass('wpl-slim-likebox');if(slim){var cssDisplay=jQuery(window.parent.frames[name].document).find('.wpl-likebox').css('display');if('inline-block'!=cssDisplay){jQuery(window.parent.frames[name].document).find('.wpl-likebox').css('display','inline-block');}}
var likeboxHeight=jQuery(window.parent.frames[name].document).find('.wpl-likebox').outerHeight();var likeboxWidth=jQuery(window.parent.frames[name].document).find('.wpl-likebox').outerWidth();wpLikes.postMessage({action:'resize',name:name,height:likeboxHeight,width:likeboxWidth},parent,'resizeMessage');},likePost:function(blog_id,post_id,source,success,fail){return this.ajax({type:'POST',path:'/sites/'+blog_id+'/posts/'+post_id+'/likes/new',query:'source='+source,success:success,error:fail});},unlikePost:function(blog_id,post_id,success,fail){return this.ajax({type:'POST',path:'/sites/'+blog_id+'/posts/'+post_id+'/likes/mine/delete',success:success,error:fail});},likeComment:function(blog_id,comment_id,success,fail){return this.ajax({type:'POST',path:'/sites/'+blog_id+'/comments/'+comment_id+'/likes/new',success:success,error:fail});},unlikeComment:function(blog_id,comment_id,success,fail){return this.ajax({type:'POST',path:'/sites/'+blog_id+'/comments/'+comment_id+'/likes/mine/delete',success:success,error:fail});},afterlikeFollow:function(blog_id,success,fail){return this.ajax({type:'POST',path:'/sites/'+blog_id+'/follows/new',success:success,error:fail});},getFollowingStatus:function(blog_id,success,fail){return this.ajax({type:'GET',path:'/sites/'+blog_id+'/follows/mine',success:success,error:fail});},getPost:function(blog_id,post_id,success,fail){return this.ajax({type:'GET',path:'/sites/'+blog_id+'/posts/'+post_id,success:success,error:fail});},getPostLikeStatus:function(blog_id,post_id,success,fail){return this.ajax({type:'GET',path:'/sites/'+blog_id+'/posts/'+post_id+'/likes/mine',success:success,error:fail});},getPostLikes:function(blog_id,post_id,success,fail,fromCache){if('undefined'==typeof fromCache)
fromCache=true;return this.ajax({type:'GET',path:'/sites/'+blog_id+'/posts/'+post_id+'/likes',success:success,error:fail,fromCache:fromCache});},getCommentLikeStatus:function(blog_id,comment_id,success,fail){return this.ajax({type:'GET',path:'/sites/'+blog_id+'/comments/'+comment_id+'/likes/mine',success:success,error:fail});},getCommentLikes:function(blog_id,comment_id,success,fail,fromCache){if('undefined'==typeof fromCache)
fromCache=true;return this.ajax({type:'GET',path:'/sites/'+blog_id+'/comments/'+comment_id+'/likes',success:success,error:fail,fromCache:fromCache});},getMyInfo:function(success,fail){if(wpLikes.me){success(wpLikes.me,'/me');return;}
return this.ajax({type:'GET',path:'/me',success:success,error:fail});},splitParams:function(queryString){var params={};jQuery.each(queryString.split('&'),function(i,value){var pair=value.split('=');params[pair[0]]=decodeURIComponent(pair[1]);});return params;},ajax:function(options){var request={path:options.path,method:options.type,url:wpLikes.jsonAPIbase+options.path};if(!wpLikes.batchFinished&&'/batch'!==options.path){wpLikes.batchWaiting.push(options);return;}
if('undefined'==typeof options.fromCache)
options.fromCache=true;if(options.path in wpLikes.cache&&options.fromCache){'function'==typeof options.success&&options.success(wpLikes.cache[options.path],options.path);return;}
if(options.type.toLowerCase()=='post'){request.body=options.data;request.query=options.query;}else{request.query=options.data;}
var data={event:'ajax',request:request};var makeProxyCall=function(){return jQuery.wpcom_proxy_request(request,function(response,statusCode){if(200==statusCode)
'function'==typeof options.success&&options.success(response,request.path);else
'function'==typeof options.error&&options.error(statusCode,request.path);});};if(wpLikes.hasUpgradedProxy){return makeProxyCall();}else{return jQuery.wpcom_proxy_request({metaAPI:{accessAllUsersBlogs:true}}).done(function(){wpLikes.hasUpgradedProxy=true;makeProxyCall();});}},postMessage:function(message,target,messageType){if("string"===typeof message){try{message=JSON.parse(message);}
catch(e){return;}}
if('undefined'==typeof messageType){messageType='likesMessage';}
pm({target:target,type:messageType,data:message});},openLoginWindow:function(){if(extWin){if(!extWin.closed){extWin.close();}
extWin=false;}
$('#wp-login-polling-iframe').remove();var url='https://wordpress.com/public.api/connect/?action=request&service=wordpress';extWin=window.open(url,'likeconn','status=0,toolbar=0,location=1,menubar=0,directories=0,resizable=1,scrollbars=0,height=500,width=500');var loginIframe=$("<iframe id='wp-login-polling-iframe'></iframe>");loginIframe.attr("src","https://wordpress.com/public.api/connect/?iframe=true");loginIframe.css("display","none");$(document.body).append(loginIframe);},readMessage:function(event){if("undefined"==typeof event.event)
return;if('login'==event.event&&event.success){if(extWin){if(!extWin.closed){extWin.close();}
extWin=false;}
$('#wp-login-polling-iframe').remove();wpLikes.isLoggedIn=true;wpLikes.hasUpgradedProxy=false;$.wpcom_proxy_rebuild();wpLikes.getPostLikes(wpLikes.login_blog_id,wpLikes.login_post_id,function(results){var slim=jQuery(window.parent.frames['like-post-frame-'+wpLikes.login_obj_id].document).find('.wpl-likebox').hasClass('wpl-slim-likebox');wpLikes.updatePostFeedback(results,wpLikes.login_blog_id,wpLikes.login_post_id,slim,wpLikes.login_obj_id);if(!results.i_like)
wpLikes.doLike(wpLikes.login_blog_id,wpLikes.login_post_id,wpLikes.login_obj_id);jQuery(window.parent.frames['like-post-frame-'+wpLikes.login_obj_id].document).find('.wpl-button a.like, .wpl-button a.liked').click(function(e){e.preventDefault();wpLikes.doLike(wpLikes.login_blog_id,wpLikes.login_post_id,wpLikes.login_obj_id);});},function(){},false);}
if('injectStyles'==event.event){wpLikes.textStyles=event.textStyles;wpLikes.linkStyles=event.linkStyles;if(wpLikes.adminBarEnabled){wpLikes.adminBarStyles=event.adminBarStyles;}}
if('initialBatch'==event.event){wpLikes.initialBatch(event.requests);}
if('adminBarEnabled'==event.event){wpLikes.adminBarEnabled=true;}
if('loadLikeWidget'==event.event){if(event.name in window.parent.frames){info=wpLikes.splitParams(window.parent.frames[event.name].location.hash.replace(/^#/,''));if(info.blog_id&&info.post_id&&info.origin){path='/sites/'+info.blog_id+'/posts/'+info.post_id+'/likes';if(typeof info.slim==="undefined"){info.slim=false;}
request={type:'post',blog_id:info.blog_id,post_id:info.post_id,obj_id:info.obj_id,width:event.width,slim:info.slim};wpLikes.requests[path]=request;wpLikes.getPostLikes(info.blog_id,info.post_id,wpLikes.displayWidget);}else if(info.blog_id&&info.comment_id&&info.origin){path='/sites/'+info.blog_id+'/comments/'+info.comment_id+'/likes';request={type:'comment',blog_id:info.blog_id,comment_id:info.comment_id,obj_id:info.obj_id,width:event.width};wpLikes.requests[path]=request;wpLikes.getCommentLikes(info.blog_id,info.comment_id,wpLikes.displayWidget);}}}
if('likeWidgetDisplayed'==event.event){if('en'!=wpLikes.lang){var buttonWidth=jQuery(window.parent.frames['like-post-frame-'+event.obj_id].document.body).find('.wpl-button').width();if(buttonWidth>300){setTimeout(function(){wpLikes.readMessage(event);},50);}else{jQuery(window.parent.frames['like-post-frame-'+event.obj_id].document.body).find('.wpl-avatars').css('left',buttonWidth+10+'px');}}
var name='like-post-frame-'+event.obj_id;var slim=jQuery(window.parent.frames[name].document).find('.wpl-likebox').hasClass('wpl-slim-likebox');if(slim){if(!(name in wpLikes.widgetDims)){wpLikes.widgetDims[name]={w:0,h:0};}
wpLikes.resizeFrame(name);}}},handlePromptClicks:function(blog_id,post_id,obj_id){var $doc=jQuery(window.parent.frames['like-post-frame-'+obj_id].document);$doc.find('.wpl-comment > a').click(function(e){new Image().src=document.location.protocol+'//stats.wordpress.com/b.gif?v=wpcom-no-pv&x_follow-click-prompt=comment-prompt&baba='+Math.random();});$doc.find('.wpl-follow > a').click(function(e){e.preventDefault();wpLikes.afterlikeFollow(blog_id);jQuery(window.parent.frames['like-post-frame-'+obj_id].document).find('.wpl-follow').html(i18n.translate('Following.').fetch());return false;});},doLike:function(blog_id,post_id,obj_id){function postLikePrompts(){wpLikes.getFollowingStatus(blog_id,function(result){var $doc=jQuery(window.parent.frames['like-post-frame-'+obj_id].document);if($doc.width()<350){return;}
if(!result.is_following){$doc.find('.wpl-follow').fadeIn();jQuery(window.parent.frames['like-post-frame-'+obj_id].document.body).find('.wpl-count').find('a').css(wpLikes.linkStyles);wpLikes.handlePromptClicks(blog_id,post_id,obj_id);}else{wpLikes.getPost(blog_id,post_id,function(post){if(post.comments_open){$doc.find('.wpl-comment a').attr('href',post.URL+"#respond");$doc.find('.wpl-comment').fadeIn();jQuery(window.parent.frames['like-post-frame-'+obj_id].document.body).find('.wpl-count').find('a').css(wpLikes.linkStyles);wpLikes.handlePromptClicks(blog_id,post_id,obj_id);}});}});}
if(!wpLikes.isLoggedIn){wpLikes.login_blog_id=blog_id;wpLikes.login_post_id=post_id;wpLikes.login_obj_id=obj_id;wpLikes.openLoginWindow();return;}
var followPromptText=' <span class="wpl-follow" style="display:none;"><a href="#">'+i18n.translate('Follow this Blog?').fetch()+'</a></span>';var commentPromptText=' <span class="wpl-comment" style="display:none;"><a href="#" target="_parent">'+i18n.translate('Comment on this post?').fetch()+'</a></span>';var $wplbuttonlink=jQuery(window.parent.frames['like-post-frame-'+obj_id].document).find('.wpl-button a.like, .wpl-button a.liked');var $wplbutton=$wplbuttonlink.parent();var $wplcount=$wplbutton.siblings('.wpl-count');var $wplavatars=$wplbutton.siblings('.wpl-avatars');var $wplcounttext=$wplcount.find('.wpl-count-text');var likeText='';if($wplbuttonlink.hasClass('like')){var slim=$wplbutton.parent().hasClass("wpl-slim-likebox");if(i18n.translate('Be the first to like this.').fetch()==$wplcounttext.html())
likeText='<span class="wpl-count-text">'+i18n.translate('You like this.').fetch()+'</span>'+followPromptText+commentPromptText;else if(i18n.translate('One blogger likes this.').fetch()==$wplcounttext.html()){likeText='<span class="wpl-count-text">'+i18n.translate("You and one other blogger like this.").fetch()+'</span>'+followPromptText+commentPromptText;}else{count=$wplcount.find('.wpl-count-number').text();likeText='<span class="wpl-count-text">'+i18n.translate("You and <a href='#' id='other-gravatars'>%s other bloggers</a> like this.").fetch('<span class="wpl-count-number">'+count+'</span>')+'</span>'+followPromptText+commentPromptText;}
$wplbuttonlink.fadeOut(150,function(){$wplbuttonlink.removeClass('like');$wplbuttonlink.addClass('liked');$wplbutton.removeClass('like');$wplbutton.addClass('liked');if(!slim){$wplcount.fadeOut(150,function(){$wplcount.html(likeText);$wplcount.show();jQuery(window.parent.frames['like-post-frame-'+obj_id].document.body).find('.wpl-count').find('a').css(wpLikes.linkStyles);});}
postLikePrompts();if(!slim){wpLikes.getMyInfo(function(me){me.css_class='wp-liker-me';wpLikes.likers[blog_id+'-'+post_id].unshift(me);if(!$wplavatars.find('.wp-liker-me').length){if(!$wplavatars.length){$wplbutton.after('<ul class="wpl-avatars"><li class="wp-liker-me"><a title="'+me.display_name+'" href="'+me.profile_URL+'" class="wpl-liker" rel="nofollow" target="_parent"><img src="'+me.avatar_URL+'" alt="'+i18n.translate('My Grav.').fetch()+'" width="30" height="30" /></a></li></ul>');$wplavatars.children('a:first').hide().fadeIn(850);}else{$wplavatars.prepend('<li class="wp-liker-me"><a href="'+me.profile_URL+'" class="wpl-liker" rel="nofollow" target="_parent"><img src="'+me.avatar_URL+'" alt="'+i18n.translate('My Grav.').fetch()+'" width="30" height="30" style="padding-right: 3px;" /></a></li>');$wplavatars.children('a:first').hide();}
$wplavatars.children('a:first').fadeIn(550);}});}
$wplbuttonlink.html('<span>'+i18n.translate('Liked').fetch()+'</span> ');$wplbuttonlink.fadeIn(150,function(){$wplbuttonlink.show();if('en'!=wpLikes.lang){var buttonWidth=$wplbutton.width();$wplavatars.css('left',buttonWidth+10+'px');}
wpLikes.resizeFrame('like-post-frame-'+obj_id);});if(wpLikes.adminBarEnabled){jQuery(window.parent.frames['admin-bar-likes-widget'].document).find('a').text(i18n.translate('Liked').fetch());}});wpLikes.likePost(blog_id,post_id,'post_flair');}else if($wplbuttonlink.hasClass('liked')){$wplbuttonlink.fadeOut(150,function(){$wplbuttonlink.removeClass('liked');$wplbuttonlink.addClass('like');$wplbutton.removeClass('liked');$wplbutton.addClass('like');if(i18n.translate('You like this.').fetch()==$wplcounttext.html()){likeText='<span class="wpl-count-text">'+i18n.translate('Be the first to like this.').fetch()+'</span>';}else if(i18n.translate('You and one other blogger like this.').fetch()==$wplcounttext.html()){likeText='<span class="wpl-count-text">'+i18n.translate('One blogger likes this.').fetch()+'</span>';}else{count=$wplcount.find('.wpl-count-number').text();likeText='<span class="wpl-count-text">'+i18n.translate("<a href='#' id='other-gravatars'>%s bloggers</a> like this.").fetch('<span class="wpl-count-number">'+count+'</span>')+'</span>';}
$wplcount.fadeOut(150,function(){$wplcount.html(likeText);$wplcount.show();jQuery(window.parent.frames['like-post-frame-'+obj_id].document.body).find('.wpl-count').find('a').css(wpLikes.linkStyles);});wpLikes.likers[blog_id+'-'+post_id].shift();$wplavatars.children('li.wp-liker-me').remove();$wplbuttonlink.html('<span>'+i18n.translate('Like').fetch()+'</span>');$wplbuttonlink.fadeIn(150,function(){$wplbuttonlink.show();if('en'!=wpLikes.lang){var buttonWidth=$wplbutton.width();$wplavatars.css('left',buttonWidth+10+'px');}
wpLikes.resizeFrame('like-post-frame-'+obj_id);});if(wpLikes.adminBarEnabled){jQuery(window.parent.frames['admin-bar-likes-widget'].document).find('a').text(i18n.translate('Like').fetch());}});wpLikes.unlikePost(blog_id,post_id);}},updatePostFeedback:function(likes,blog_id,post_id,slim,obj_id){if(!obj_id)
obj_id=blog_id+'-'+post_id;var isLiked=likes.i_like;var label='';var css_state='';var feedback='';if(isLiked){label=i18n.translate('Liked').fetch();css_state='liked';}else{label=i18n.translate('Like').fetch();css_state='like';}
var hasLikes=true;if(0==likes.found){hasLikes=false;feedback=i18n.translate('Be the first to like this.').fetch();}else if(1==likes.found){if(isLiked){feedback=i18n.translate('You like this.').fetch();}else{feedback=i18n.translate('One blogger likes this.').fetch();}}else{if(isLiked){var user_count=likes.found-1;if(user_count!=1){feedback=i18n.translate("You and <a href='#' id='other-gravatars'>%s other bloggers</a> like this.").fetch('<span class="wpl-count-number">'+user_count+'</span>');}else{feedback=i18n.translate("You and one other blogger like this.").fetch();}}else{feedback=i18n.translate("<a href='#' id='other-gravatars'>%s bloggers</a> like this.").fetch('<span class="wpl-count-number">'+likes.found+'</span>');}}
feedback='<span class="wpl-count-text">'+feedback+'</span>';function createPostLikeTemplate(){var template,cacheBuster;var info=wpLikes.requests['/sites/'+blog_id+'/posts/'+post_id+'/likes'];if(''!=wpLikes.ver)
cacheBuster='?ver='+wpLikes.version;if(wpLikes.adminBarEnabled){template=jQuery('#admin-bar-likes').html();jQuery(window.parent.frames['admin-bar-likes-widget'].document).find('#target').html(_.template(template,{label:label}));var style=document.createElement('link');style.setAttribute('type','text/css');style.setAttribute('rel','stylesheet');style.setAttribute('href','//s0.wp.com/wp-includes/css/admin-bar.min.css'+cacheBuster);jQuery(window.parent.frames['admin-bar-likes-widget'].document).find('head')[0].appendChild(style);var style=document.createElement('link');style.setAttribute('type','text/css');style.setAttribute('rel','stylesheet');style.setAttribute('href','//s0.wp.com/wp-content/mu-plugins/admin-bar/wpcom-admin-bar.css'+cacheBuster);jQuery(window.parent.frames['admin-bar-likes-widget'].document).find('head')[0].appendChild(style);var query=wpLikes.splitParams(location.hash.replace(/^#/,''));if(1==query.mp6){jQuery(window.parent.frames['admin-bar-likes-widget'].document).find('body').addClass('mp6');var style=document.createElement('link');style.setAttribute('type','text/css');style.setAttribute('rel','stylesheet');style.setAttribute('href','//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,300,400,600&subset=latin-ext,latin');jQuery(window.parent.frames['admin-bar-likes-widget'].document).find('head')[0].appendChild(style);var style=document.createElement('link');style.setAttribute('type','text/css');style.setAttribute('rel','stylesheet');style.setAttribute('href','//s0.wp.com/wp-content/plugins/mp6/css/admin-bar.css'+cacheBuster);jQuery(window.parent.frames['admin-bar-likes-widget'].document).find('head')[0].appendChild(style);}}
if(!slim){template=jQuery('#post-likes').html();}else{template=jQuery('#slim-likes').html();}
jQuery(window.parent.frames['like-post-frame-'+obj_id].document).find('#target').html(_.template(template,{likers:likers.slice(0,20),css_state:css_state,label:label,feedback:feedback,feedback_no_html:feedback.replace(/(<.*?>)/ig,""),hasLikes:hasLikes}));var style=document.createElement('link');style.setAttribute('type','text/css');style.setAttribute('rel','stylesheet');style.setAttribute('href','//s0.wp.com//i/noticons/noticons.css'+cacheBuster);jQuery(window.parent.frames['like-post-frame-'+obj_id].document).find('head')[0].appendChild(style);var style=document.createElement('link');style.setAttribute('type','text/css');style.setAttribute('rel','stylesheet');style.setAttribute('href','//widgets.wp.com/likes/style.css'+cacheBuster);jQuery(window.parent.frames['like-post-frame-'+obj_id].document).find('head')[0].appendChild(style);jQuery(window.parent.frames['like-post-frame-'+obj_id].document.body).css(wpLikes.textStyles);jQuery(window.parent.frames['like-post-frame-'+obj_id].document.body).find('.wpl-count').find('a').css(wpLikes.linkStyles);if('rtl'==wpLikes.textStyles.direction)
jQuery(window.parent.frames['like-post-frame-'+obj_id].document.body).addClass('rtl');var width=wpLikes.requests['/sites/'+info.blog_id+'/posts/'+info.post_id+'/likes'].width;var rows=Math.ceil(likers.length*37/width);var height=30+rows*37;wpLikes.postMessage({event:'showLikeWidget',id:'like-post-wrapper-'+obj_id,blog_id:blog_id,post_id:post_id,obj_id:obj_id},parent);if(wpLikes.adminBarEnabled){jQuery(window.parent.frames['admin-bar-likes-widget'].document).find('a').click(function(){jQuery(window.parent.frames['like-post-frame-'+obj_id].document).find('.wpl-button > a.like, .wpl-button > a.liked').click();});}}
var likers=likes.likes;if(likers.length>0){var max_remove=likers.length-90;for(i=likers.length-1;i>=0&&max_remove>0;i--){if(likers[i].default_avatar&&(!wpLikes.me||wpLikes.me.ID!=likers[i]['ID'])){likers.splice(i,1);max_remove--;}}}
if(wpLikes.me){wpLikes.isLoggedIn=true;for(var i=0;i<likers.length;i++){if(likers[i].ID==wpLikes.me.ID){likers[i]['css_class']='wp-liker-me';likers.unshift(likers.splice(i,1)[0]);break;}}}
wpLikes.likers[blog_id+'-'+post_id]=likers;wpLikes.total[blog_id+'-'+post_id]=likes.found;createPostLikeTemplate();},initialBatch:function(requests){var info,request,path;wpLikes.queue=[];wpLikes.batchFinished=false;wpLikes.batchWaiting=[];if(!wpLikes.me&&!wpLikes.askedMe){wpLikes.queue.push('/me');wpLikes.askedMe=true;}
for(i=0;i<requests.length;i++){info=requests[i];if(info.blog_id&&info.post_id){path='/sites/'+info.blog_id+'/posts/'+info.post_id+'/likes';request={type:'post',blog_id:info.blog_id,post_id:info.post_id,obj_id:info.obj_id,width:info.width};wpLikes.requests[path]=request;wpLikes.queue.push(path);}else if(info.blog_id&&info.comment_id){path='/sites/'+info.blog_id+'/comments/'+info.comment_id+'/likes';request={type:'comment',blog_id:info.blog_id,comment_id:info.comment_id,width:info.width};wpLikes.requests[path]=request;wpLikes.queue.push(path);}}
var batchRequest={path:'/batch',type:'GET',url:'https://public-api.wordpress.com/rest/v1/batch',data:'',success:function(response){for(var path in response){if(!response[path]['error_data']){if('/me'==path){wpLikes.me=response[path];}else{wpLikes.cache[path]=response[path];}}}
wpLikes.batchFinished=true;for(var item in wpLikes.batchWaiting){wpLikes.ajax(wpLikes.batchWaiting[item]);}},error:function(response){wpLikes.batchFinished=true;for(var item in wpLikes.batchWaiting){wpLikes.ajax(wpLikes.batchWaiting[item]);}}};var amp='';for(var i=0;i<wpLikes.queue.length;i++){if(i>0)
amp='&';batchRequest.data+=amp+'urls[]='+wpLikes.queue[i];}
wpLikes.ajax(batchRequest);}};var i18n;wpLikes.displayWidget=function(response,path){var info=wpLikes.splitParams(location.hash.replace(/^#/,''));if(info.lang)
wpLikes.lang=info.lang;var load_default=true;if('en'!=wpLikes.lang){var json_locale_data;jQuery.ajax({url:'/languages/'+wpLikes.lang+'.json'+'?ver='+wpLikes.version,dataType:'json',async:false,success:function(json){json_locale_data=json;load_default=false;}});}
if(null==json_locale_data)
load_default=true;if(load_default){var json_locale_data={"":{"domain":"messages","lang":wpLikes.lang,"plural-forms":"nplurals=2; plural=(n != 1);"}};}
i18n=new Jed({locale_data:{"messages":json_locale_data},"domain":"messages"});if(path in wpLikes.requests){if('post'==wpLikes.requests[path].type){displayPostLikeWidget(wpLikes.requests[path].blog_id,wpLikes.requests[path].post_id,wpLikes.requests[path].width,wpLikes.requests[path].slim,response,wpLikes.requests[path].obj_id);}
if('comment'==wpLikes.requests[path].type){displayCommentLikeWidget(wpLikes.requests[path].blog_id,wpLikes.requests[path].comment_id,wpLikes.requests[path].width,response,wpLikes.requests[path].obj_id);}}}
function displayPostLikeWidget(blog_id,post_id,width,slim,result,obj_id){if(!obj_id)
obj_id=blog_id+'-'+post_id;wpLikes.updatePostFeedback(result,blog_id,post_id,slim,obj_id);jQuery(window.parent.frames['like-post-frame-'+obj_id].document).find('.wpl-button a.like, .wpl-button a.liked').click(function(e){e.preventDefault();wpLikes.doLike(blog_id,post_id,obj_id);});if(!slim){jQuery(window.parent.frames['like-post-frame-'+obj_id].document).on('click','a#other-gravatars',function(e){e.preventDefault();var $avatars=jQuery(window.parent.frames['like-post-frame-'+obj_id].document).find('.wpl-avatars');var likersToSend=90;var myArrayId=-1;for(i=0;i<likersToSend&&i<wpLikes.likers[blog_id+'-'+post_id].length;i++){if('wpl-liker-me'==wpLikes.likers[blog_id+'-'+post_id][i].css_class){myArrayId=i;}
wpLikes.likers[blog_id+'-'+post_id][i].css_class='wpl-liker';}
var data={event:'showOtherGravatars',likers:wpLikes.likers[blog_id+'-'+post_id].slice(0,likersToSend),total:wpLikes.total[blog_id+'-'+post_id],parent:'like-post-frame-'+obj_id,width:$avatars.width(),position:{top:$avatars[0].offsetTop,left:$avatars[0].offsetLeft}};wpLikes.postMessage(data,window.parent);if(myArrayId>=0){wpLikes.likers[blog_id+'-'+post_id][myArrayId].css_class='wpl-liker-me';}});}
}
function getCommentLikeFeedback(isLiked,found){var feedback='';var likers='';if(0==found){feedback=i18n.translate('Like this').fetch();}else if(1==found){if(isLiked){feedback=i18n.translate('Liked by you').fetch();}else{likers='<a href="#" class="view-likers" data-like-count="'+found+'">'+i18n.translate('1 person').fetch()+'</a>';feedback=i18n.translate('Liked by %s').fetch(likers);}}else{if(isLiked){var userCount=found-1;if(userCount!=1){likers='<a href="#" class="view-likers" data-like-count="'+found+'">'+i18n.translate('%d other people').fetch(userCount)+'</a>';feedback=i18n.translate("Liked by you and %s").fetch(likers);}else{likers='<a href="#" class="view-likers" data-like-count="'+found+'">'+i18n.translate('%d other person').fetch(userCount)+'</a>';feedback=i18n.translate("Liked by you and %s").fetch(likers);}}else{likers='<a href="#" class="view-likers" data-like-count="'+found+'">'+i18n.translate('%d people').fetch(found)+'</a>';feedback=i18n.translate("Liked by %s").fetch(likers);}}
return feedback;}
function displayCommentLikeWidget(blog_id,comment_id,width,likes,obj_id){var isLiked=likes.i_like;var label='';var css_state='';if(isLiked){label=i18n.translate('Liked').fetch();css_state='comment-liked';}else{label=i18n.translate('Like').fetch();css_state='comment-not-liked';}
var hasLikes=true;var feedback=getCommentLikeFeedback(isLiked,likes.found);var template=jQuery('#comment-likes').html();jQuery(window.parent.frames['like-comment-frame-'+obj_id].document).find("#target").html(_.template(template,{css_state:css_state,label:label}));var cacheBuster;if(''!=wpLikes.ver)
cacheBuster='?ver='+wpLikes.ver;var $noticonsCss=jQuery('<link rel="stylesheet" id="noticons-css"  href="//s0.wp.com//i/noticons/noticons.css'+cacheBuster+'" type="text/css" media="all" />');var $styleCss=jQuery('<link rel="stylesheet" id="jetpack-likes-button-css"  href="style.css'+cacheBuster+'" type="text/css" media="all" />');$head=jQuery(window.parent.frames['like-comment-frame-'+obj_id].document).find('head');$head.append($noticonsCss);$head.append($styleCss);wpLikes.postMessage({event:'showCommentLikeWidget',id:'like-comment-wrapper-'+obj_id,blog_id:blog_id,comment_id:comment_id,obj_id:obj_id},window.parent);jQuery(window.parent.frames['like-comment-frame-'+obj_id].document).find('a.comment-like-link').click(function(e){var link=jQuery(e.target);link.addClass('loading');function updateCommentFeedback(action,i_like,count){if('like'==action){link.parent().removeClass('comment-not-liked');link.parent().addClass('comment-liked');}else{link.parent().removeClass('comment-liked');link.parent().addClass('comment-not-liked');}
feedback=getCommentLikeFeedback(i_like,count);wpLikes.postMessage({event:'showCommentLikeWidget',id:'like-comment-wrapper-'+obj_id,blog_id:blog_id,comment_id:comment_id,obj_id:obj_id},window.parent);}
if(link.parent().hasClass('comment-not-liked')){wpLikes.likeComment(blog_id,comment_id,function(e){updateCommentFeedback('like',true,e.like_count);link.removeClass('loading');});}else{wpLikes.unlikeComment(blog_id,comment_id,function(e){updateCommentFeedback('unlike',false,e.like_count);link.removeClass('loading');});}
return false;})}
function updateWidgetDimensions(){for(var name in wpLikes.widgetDims){var likeboxWidth=jQuery(window.parent.frames[name].document).find('.wpl-likebox').outerWidth();var likeboxHeight=jQuery(window.parent.frames[name].document).find('.wpl-likebox').outerHeight();if((likeboxWidth>0)&&(likeboxWidth!=wpLikes.widgetDims[name].w)){wpLikes.widgetDims[name].w=likeboxWidth;wpLikes.widgetDims[name].h=likeboxHeight;wpLikes.resizeFrame(name);}}}
wpLikes.wpLikes();pm.bind('likesMessage',function(e){wpLikes.readMessage(e);});pm.bind('loginMessage',function(e){wpLikes.readMessage(e);});wpLikes.postMessage({event:"masterReady"},parent);setInterval(updateWidgetDimensions,500);})(jQuery);