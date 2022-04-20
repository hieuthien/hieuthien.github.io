function arCuGetCookie(t){return document.cookie.length>0&&(c_start=document.cookie.indexOf(t+"="),-1!=c_start)?(c_start=c_start+t.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):0}function arCuCreateCookie(t,e,s){var n;if(s){var i=new Date;i.setTime(i.getTime()+24*s*60*60*1e3),n="; expires="+i.toGMTString()}else n="";document.cookie=t+"="+e+n+"; path=/"}function arCuShowMessage(t){if(arCuPromptClosed)return!1;void 0!==arCuMessages[t]?(jQuery("#arcontactus").contactUs("showPromptTyping"),_arCuTimeOut=setTimeout(function(){if(arCuPromptClosed)return!1;jQuery("#arcontactus").contactUs("showPrompt",{content:arCuMessages[t]}),t++,_arCuTimeOut=setTimeout(function(){if(arCuPromptClosed)return!1;arCuShowMessage(t)},arCuMessageTime)},arCuTypingTime)):(arCuCloseLastMessage&&jQuery("#arcontactus").contactUs("hidePrompt"),arCuLoop&&arCuShowMessage(0))}function arCuShowMessages(){setTimeout(function(){clearTimeout(_arCuTimeOut),arCuShowMessage(0)},arCuDelayFirst)}!function(t){function e(s,n){this._initialized=!1,this.settings=null,this.options=t.extend({},e.Defaults,n),this.$element=t(s),this.init(),this.x=0,this.y=0,this._interval,this._menuOpened=!1,this._callbackOpened=!1,this.countdown=null}e.Defaults={align:"right",countdown:0,drag:!1,buttonText:"Liên hệ",buttonSize:"large",menuSize:"normal",items:[],iconsAnimationSpeed:1200,theme:"#008749",buttonIcon:'<svg width="20" height="20" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Canvas" transform="translate(-825 -308)"><g id="Vector"><use xlink:href="#path0_fill0123" transform="translate(825 308)" fill="#FFFFFF"/></g></g><defs><path id="path0_fill0123" d="M 19 4L 17 4L 17 13L 4 13L 4 15C 4 15.55 4.45 16 5 16L 16 16L 20 20L 20 5C 20 4.45 19.55 4 19 4ZM 15 10L 15 1C 15 0.45 14.55 0 14 0L 1 0C 0.45 0 0 0.45 0 1L 0 15L 4 11L 14 11C 14.55 11 15 10.55 15 10Z"/></defs></svg>',closeIcon:'<svg width="12" height="13" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Canvas" transform="translate(-4087 108)"><g id="Vector"><use xlink:href="#path0_fill" transform="translate(4087 -108)" fill="currentColor"></use></g></g><defs><path id="path0_fill" d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"></path></defs></svg>'},e.prototype.init=function(){this.destroy(),this.settings=t.extend({},this.options),this.$element.addClass("arcontactus-widget").addClass("arcontactus-message"),"left"===this.settings.align?this.$element.addClass("left"):this.$element.addClass("right"),this.settings.items.length?(this._initCallbackBlock(),this._initMessengersBlock(),this._initMessageButton(),this._initPrompt(),this._initEvents(),this.startAnimation(),this.$element.addClass("active")):console.info("jquery.contactus:no items"),this._initialized=!0,this.$element.trigger("arcontactus.init")},e.prototype.destroy=function(){if(!this._initialized)return!1;this.$element.html(""),this._initialized=!1,this.$element.trigger("arcontactus.destroy")},e.prototype._initCallbackBlock=function(){},e.prototype._initMessengersBlock=function(){var e=t("<div>",{class:"messangers-block"});"normal"!==this.settings.menuSize&&"large"!==this.settings.menuSize||e.addClass("lg"),"small"===this.settings.menuSize&&e.addClass("sm"),this._appendMessengerIcons(e),this.$element.append(e)},e.prototype._appendMessengerIcons=function(e){t.each(this.settings.items,function(s){if("callback"==this.href)var n=t("<div>",{class:"messanger call-back "+(this.class?this.class:"")});else if(n=t("<a>",{class:"messanger "+(this.class?this.class:""),id:this.id?this.id:null,href:this.href,target:this.target?this.target:"_blank"}),this.onClick){var i=this;n.on("click",function(t){i.onClick(t)})}var a=t("<span>",{style:this.color?"background-color:"+this.color:null});a.append(this.icon),n.append(a),n.append("<p>"+this.title+"</p>"),e.append(n)})},e.prototype._initMessageButton=function(){var e=this,s=t("<div>",{class:"arcontactus-message-button",style:this._backgroundStyle()});"large"===this.settings.buttonSize&&this.$element.addClass("lg"),"medium"===this.settings.buttonSize&&this.$element.addClass("md"),"small"===this.settings.buttonSize&&this.$element.addClass("sm");var n=t("<div>",{class:"static"});n.append(this.settings.buttonIcon),!1!==this.settings.buttonText?n.append("<p>"+this.settings.buttonText+"</p>"):s.addClass("no-text");var i=t("<div>",{class:"callback-state",style:e._colorStyle()});i.append(this.settings.callbackStateIcon);var a=t("<div>",{class:"icons hide"}),o=t("<div>",{class:"icons-line"});t.each(this.settings.items,function(s){var n=t("<span>",{style:e._colorStyle()});n.append(this.icon),o.append(n)}),a.append(o);var r=t("<div>",{class:"arcontactus-close"});r.append(this.settings.closeIcon);var c=t("<div>",{class:"pulsation",style:e._backgroundStyle()}),l=t("<div>",{class:"pulsation",style:e._backgroundStyle()});s.append(n).append(i).append(a).append(r).append(c).append(l),this.$element.append(s)},e.prototype._initPrompt=function(){var e=t("<div>",{class:"arcontactus-prompt"}),s=t("<div>",{class:"arcontactus-prompt-close",style:this._colorStyle()});s.append(this.settings.closeIcon);var n=t("<div>",{class:"arcontactus-prompt-inner"});e.append(s).append(n),this.$element.append(e)},e.prototype._initEvents=function(){var e=this.$element,s=this;e.find(".arcontactus-message-button").on("mousedown",function(t){s.x=t.pageX,s.y=t.pageY}).on("mouseup",function(t){t.pageX===s.x&&t.pageY===s.y&&(s.toggleMenu(),t.preventDefault())}),this.settings.drag&&(e.draggable(),e.get(0).addEventListener("touchmove",function(t){var s=t.targetTouches[0];e.get(0).style.left=s.pageX-25+"px",e.get(0).style.top=s.pageY-25+"px",t.preventDefault()},!1)),t(document).on("click",function(t){s.closeMenu()}),e.on("click",function(t){t.stopPropagation()}),e.find(".call-back").on("click",function(){s.openCallbackPopup()}),e.find(".callback-countdown-block-close").on("click",function(){null!=s.countdown&&(clearInterval(s.countdown),s.countdown=null),s.closeCallbackPopup()}),e.find(".arcontactus-prompt-close").on("click",function(){s.hidePrompt()})},e.prototype.show=function(){this.$element.addClass("active"),this.$element.trigger("arcontactus.show")},e.prototype.hide=function(){this.$element.removeClass("active"),this.$element.trigger("arcontactus.hide")},e.prototype.openMenu=function(){var t=this.$element;t.find(".messangers-block").hasClass("show-messageners-block")||(this.stopAnimation(),t.find(".messangers-block, .arcontactus-close").addClass("show-messageners-block"),t.find(".icons, .static").addClass("hide"),t.find(".pulsation").addClass("stop"),this._menuOpened=!0,this.$element.trigger("arcontactus.openMenu"))},e.prototype.closeMenu=function(){var t=this.$element;t.find(".messangers-block").hasClass("show-messageners-block")&&(t.find(".messangers-block, .arcontactus-close").removeClass("show-messageners-block"),t.find(".icons, .static").removeClass("hide"),t.find(".pulsation").removeClass("stop"),this.startAnimation(),this._menuOpened=!1,this.$element.trigger("arcontactus.closeMenu"))},e.prototype.toggleMenu=function(){var t=this.$element;if(this.hidePrompt(),t.find(".callback-countdown-block").hasClass("display-flex"))return!1;t.find(".messangers-block").hasClass("show-messageners-block")?this.closeMenu():this.openMenu(),this.$element.trigger("arcontactus.toggleMenu")},e.prototype.openCallbackPopup=function(){var t=this.$element;t.addClass("opened"),this.closeMenu(),this.stopAnimation(),t.find(".icons, .static").addClass("hide"),t.find(".pulsation").addClass("stop"),t.find(".callback-countdown-block").addClass("display-flex"),this._callbackOpened=!0,this.$element.trigger("arcontactus.openCallbackPopup")},e.prototype.closeCallbackPopup=function(){var t=this.$element;t.removeClass("opened"),t.find(".messangers-block").removeClass("show-messageners-block"),t.find(".arcontactus-close").removeClass("show-messageners-block"),t.find(".icons, .static").removeClass("hide"),this.startAnimation(),this._callbackOpened=!1,this.$element.trigger("arcontactus.closeCallbackPopup")},e.prototype.startAnimation=function(){var t=this.$element,e=t.find(".icons-line"),s=t.find(".static"),n=t.find(".icons-line>span:first-child").width()+40;if("large"===this.settings.buttonSize)var i=2,a=0;"medium"===this.settings.buttonSize&&(i=4,a=-2),"small"===this.settings.buttonSize&&(i=4,a=-2);var o=t.find(".icons-line>span").length,r=0;if(this.stopAnimation(),0===this.settings.iconsAnimationSpeed)return!1;this._interval=setInterval(function(){0===r&&(e.parent().removeClass("hide"),s.addClass("hide"));var t="translate("+-(n*r+i)+"px, "+a+"px)";e.css({"-webkit-transform":t,"-ms-transform":t,transform:t}),++r>o&&(r>o+1&&(r=0),e.parent().addClass("hide"),s.removeClass("hide"),t="translate("+-i+"px, "+a+"px)",e.css({"-webkit-transform":t,"-ms-transform":t,transform:t}))},this.settings.iconsAnimationSpeed)},e.prototype.stopAnimation=function(){clearInterval(this._interval);var t=this.$element,e=t.find(".icons-line"),s=t.find(".static");e.parent().addClass("hide"),s.removeClass("hide");var n="translate(-2px, 0px)";e.css({"-webkit-transform":n,"-ms-transform":n,transform:n})},e.prototype.showPrompt=function(t){var e=this.$element.find(".arcontactus-prompt");t&&t.content&&e.find(".arcontactus-prompt-inner").html(t.content),e.addClass("active"),this.$element.trigger("arcontactus.showPrompt")},e.prototype.hidePrompt=function(){this.$element.find(".arcontactus-prompt").removeClass("active"),this.$element.trigger("arcontactus.hidePrompt")},e.prototype.showPromptTyping=function(){this.$element.find(".arcontactus-prompt").find(".arcontactus-prompt-inner").html(""),this._insertPromptTyping(),this.showPrompt({}),this.$element.trigger("arcontactus.showPromptTyping")},e.prototype._insertPromptTyping=function(){var e=this.$element.find(".arcontactus-prompt-inner"),s=t("<div>",{class:"arcontactus-prompt-typing"}),n=t("<div>");s.append(n),s.append(n.clone()),s.append(n.clone()),e.append(s)},e.prototype.hidePromptTyping=function(){this.$element.find(".arcontactus-prompt").removeClass("active"),this.$element.trigger("arcontactus.hidePromptTyping")},e.prototype._backgroundStyle=function(){return"background-color: "+this.settings.theme},e.prototype._colorStyle=function(){return"color: "+this.settings.theme},t.fn.contactUs=function(s){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=t(this),a=i.data("ar.contactus");a||(a=new e(this,"object"==typeof s&&s),i.data("ar.contactus",a)),"string"==typeof s&&"_"!==s.charAt(0)&&a[s].apply(a,n)})},t.fn.contactUs.Constructor=e}(jQuery);
