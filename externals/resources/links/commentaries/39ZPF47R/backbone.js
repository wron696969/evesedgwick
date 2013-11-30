(function(){var t,e=this,i=e.Backbone,n=[],r=n.push,s=n.slice,o=n.splice;t="undefined"!=typeof exports?exports:e.Backbone={},t.VERSION="1.0.0";var a=e._;a||"undefined"==typeof require||(a=require("underscore")),t.$=e.jQuery||e.Zepto||e.ender||e.$,t.noConflict=function(){return e.Backbone=i,this},t.emulateHTTP=!1,t.emulateJSON=!1;var l=t.Events={on:function(t,e,i){if(!_(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var n=this._events[t]||(this._events[t]=[]);return n.push({callback:e,context:i,ctx:i||this}),this},once:function(t,e,i){if(!_(this,"once",t,[e,i])||!e)return this;var n=this,r=a.once(function(){n.off(t,r),e.apply(this,arguments)});return r._callback=e,this.on(t,r,i)},off:function(t,e,i){var n,r,s,o,l,u,h,c;if(!this._events||!_(this,"off",t,[e,i]))return this;if(!t&&!e&&!i)return this._events={},this;for(o=t?[t]:a.keys(this._events),l=0,u=o.length;u>l;l++)if(t=o[l],s=this._events[t]){if(this._events[t]=n=[],e||i)for(h=0,c=s.length;c>h;h++)r=s[h],(e&&e!==r.callback&&e!==r.callback._callback||i&&i!==r.context)&&n.push(r);n.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!_(this,"trigger",t,e))return this;var i=this._events[t],n=this._events.all;return i&&h(i,e),n&&h(n,arguments),this},stopListening:function(t,e,i){var n=this._listeners;if(!n)return this;var r=!e&&!i;"object"==typeof e&&(i=this),t&&((n={})[t._listenerId]=t);for(var s in n)n[s].off(e,i,this),r&&delete this._listeners[s];return this}},u=/\s+/,_=function(t,e,i,n){if(!i)return!0;if("object"==typeof i){for(var r in i)t[e].apply(t,[r,i[r]].concat(n));return!1}if(u.test(i)){for(var s=i.split(u),o=0,a=s.length;a>o;o++)t[e].apply(t,[s[o]].concat(n));return!1}return!0},h=function(t,e){var i,n=-1,r=t.length,s=e[0],o=e[1],a=e[2];switch(e.length){case 0:for(;++n<r;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<r;)(i=t[n]).callback.call(i.ctx,s);return;case 2:for(;++n<r;)(i=t[n]).callback.call(i.ctx,s,o);return;case 3:for(;++n<r;)(i=t[n]).callback.call(i.ctx,s,o,a);return;default:for(;++n<r;)(i=t[n]).callback.apply(i.ctx,e)}},c={listenTo:"on",listenToOnce:"once"};a.each(c,function(t,e){l[e]=function(e,i,n){var r=this._listeners||(this._listeners={}),s=e._listenerId||(e._listenerId=a.uniqueId("l"));return r[s]=e,"object"==typeof i&&(n=this),e[t](i,n,this),this}}),l.bind=l.on,l.unbind=l.off,a.extend(t,l);var p=t.Model=function(t,e){var i,n=t||{};e||(e={}),this.cid=a.uniqueId("c"),this.attributes={},a.extend(this,a.pick(e,d)),e.parse&&(n=this.parse(n,e)||{}),(i=a.result(this,"defaults"))&&(n=a.defaults({},n,i)),this.set(n,e),this.changed={},this.initialize.apply(this,arguments)},d=["url","urlRoot","collection"];a.extend(p.prototype,l,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return a.clone(this.attributes)},sync:function(){return t.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return a.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,i){var n,r,s,o,l,u,_,h;if(null==t)return this;if("object"==typeof t?(r=t,i=e):(r={})[t]=e,i||(i={}),!this._validate(r,i))return!1;s=i.unset,l=i.silent,o=[],u=this._changing,this._changing=!0,u||(this._previousAttributes=a.clone(this.attributes),this.changed={}),h=this.attributes,_=this._previousAttributes,this.idAttribute in r&&(this.id=r[this.idAttribute]);for(n in r)e=r[n],a.isEqual(h[n],e)||o.push(n),a.isEqual(_[n],e)?delete this.changed[n]:this.changed[n]=e,s?delete h[n]:h[n]=e;if(!l){o.length&&(this._pending=!0);for(var c=0,p=o.length;p>c;c++)this.trigger("change:"+o[c],this,h[o[c]],i)}if(u)return this;if(!l)for(;this._pending;)this._pending=!1,this.trigger("change",this,i);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,a.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,a.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!a.isEmpty(this.changed):a.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?a.clone(this.changed):!1;var e,i=!1,n=this._changing?this._previousAttributes:this.attributes;for(var r in t)a.isEqual(n[r],e=t[r])||((i||(i={}))[r]=e);return i},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return a.clone(this._previousAttributes)},fetch:function(t){t=t?a.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=this,i=t.success;return t.success=function(n){return e.set(e.parse(n,t),t)?(i&&i(e,n,t),e.trigger("sync",e,n,t),void 0):!1},P(this,t),this.sync("read",this,t)},save:function(t,e,i){var n,r,s,o=this.attributes;if(null==t||"object"==typeof t?(n=t,i=e):(n={})[t]=e,!(!n||i&&i.wait||this.set(n,i)))return!1;if(i=a.extend({validate:!0},i),!this._validate(n,i))return!1;n&&i.wait&&(this.attributes=a.extend({},o,n)),void 0===i.parse&&(i.parse=!0);var l=this,u=i.success;return i.success=function(t){l.attributes=o;var e=l.parse(t,i);return i.wait&&(e=a.extend(n||{},e)),a.isObject(e)&&!l.set(e,i)?!1:(u&&u(l,t,i),l.trigger("sync",l,t,i),void 0)},P(this,i),r=this.isNew()?"create":i.patch?"patch":"update","patch"===r&&(i.attrs=n),s=this.sync(r,this,i),n&&i.wait&&(this.attributes=o),s},destroy:function(t){t=t?a.clone(t):{};var e=this,i=t.success,n=function(){e.trigger("destroy",e,e.collection,t)};if(t.success=function(r){(t.wait||e.isNew())&&n(),i&&i(e,r,t),e.isNew()||e.trigger("sync",e,r,t)},this.isNew())return t.success(),!1;P(this,t);var r=this.sync("delete",this,t);return t.wait||n(),r},url:function(){var t=a.result(this,"urlRoot")||a.result(this.collection,"url")||M();return this.isNew()?t:t+("/"===t.charAt(t.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(t){return this._validate({},a.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=a.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;return i?(this.trigger("invalid",this,i,a.extend(e||{},{validationError:i})),!1):!0}});var f=["keys","values","pairs","invert","pick","omit"];a.each(f,function(t){p.prototype[t]=function(){var e=s.call(arguments);return e.unshift(this.attributes),a[t].apply(a,e)}});var m=t.Collection=function(t,e){e||(e={}),e.url&&(this.url=e.url),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,a.extend({silent:!0},e))},g={add:!0,remove:!0,merge:!0},v={add:!0,merge:!1,remove:!1};a.extend(m.prototype,l,{model:p,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return t.sync.apply(this,arguments)},add:function(t,e){return this.set(t,a.defaults(e||{},v))},remove:function(t,e){t=a.isArray(t)?t.slice():[t],e||(e={});var i,n,r,s;for(i=0,n=t.length;n>i;i++)s=this.get(t[i]),s&&(delete this._byId[s.id],delete this._byId[s.cid],r=this.indexOf(s),this.models.splice(r,1),this.length--,e.silent||(e.index=r,s.trigger("remove",s,this,e)),this._removeReference(s));return this},set:function(t,e){e=a.defaults(e||{},g),e.parse&&(t=this.parse(t,e)),a.isArray(t)||(t=t?[t]:[]);var i,n,s,l,u,_=e.at,h=this.comparator&&null==_&&e.sort!==!1,c=a.isString(this.comparator)?this.comparator:null,p=[],d=[],f={};for(i=0,n=t.length;n>i;i++)(s=this._prepareModel(t[i],e))&&((l=this.get(s))?(e.remove&&(f[l.cid]=!0),e.merge&&(l.set(s.attributes,e),h&&!u&&l.hasChanged(c)&&(u=!0))):e.add&&(p.push(s),s.on("all",this._onModelEvent,this),this._byId[s.cid]=s,null!=s.id&&(this._byId[s.id]=s)));if(e.remove){for(i=0,n=this.length;n>i;++i)f[(s=this.models[i]).cid]||d.push(s);d.length&&this.remove(d,e)}if(p.length&&(h&&(u=!0),this.length+=p.length,null!=_?o.apply(this.models,[_,0].concat(p)):r.apply(this.models,p)),u&&this.sort({silent:!0}),e.silent)return this;for(i=0,n=p.length;n>i;i++)(s=p[i]).trigger("add",s,this,e);return u&&this.trigger("sort",this,e),this},reset:function(t,e){e||(e={});for(var i=0,n=this.models.length;n>i;i++)this._removeReference(this.models[i]);return e.previousModels=this.models,this._reset(),this.add(t,a.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),this},push:function(t,e){return t=this._prepareModel(t,e),this.add(t,a.extend({at:this.length},e)),t},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return t=this._prepareModel(t,e),this.add(t,a.extend({at:0},e)),t},shift:function(t){var e=this.at(0);return this.remove(e,t),e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){return null==t?void 0:this._byId[null!=t.id?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){return a.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"](function(e){for(var i in t)if(t[i]!==e.get(i))return!1;return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return t||(t={}),a.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(a.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},sortedIndex:function(t,e,i){e||(e=this.comparator);var n=a.isFunction(e)?e:function(t){return t.get(e)};return a.sortedIndex(this.models,t,n,i)},pluck:function(t){return a.invoke(this.models,"get",t)},fetch:function(t){t=t?a.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=t.success,i=this;return t.success=function(n){var r=t.reset?"reset":"set";i[r](n,t),e&&e(i,n,t),i.trigger("sync",i,n,t)},P(this,t),this.sync("read",this,t)},create:function(t,e){if(e=e?a.clone(e):{},!(t=this._prepareModel(t,e)))return!1;e.wait||this.add(t,e);var i=this,n=e.success;return e.success=function(r){e.wait&&i.add(t,e),n&&n(t,r,e)},t.save(null,e),t},parse:function(t){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof p)return t.collection||(t.collection=this),t;e||(e={}),e.collection=this;var i=new this.model(t,e);return i._validate(t,e)?i:(this.trigger("invalid",this,t,e),!1)},_removeReference:function(t){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){("add"!==t&&"remove"!==t||i===this)&&("destroy"===t&&this.remove(e,n),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))}});var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];a.each(y,function(t){m.prototype[t]=function(){var e=s.call(arguments);return e.unshift(this.models),a[t].apply(a,e)}});var w=["groupBy","countBy","sortBy"];a.each(w,function(t){m.prototype[t]=function(e,i){var n=a.isFunction(e)?e:function(t){return t.get(e)};return a[t](this.models,n,i)}});var b=t.View=function(t){this.cid=a.uniqueId("view"),this._configure(t||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},$=/^(\S+)\s*(.*)$/,k=["model","collection","el","id","attributes","className","tagName","events"];a.extend(b.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(e,i){return this.$el&&this.undelegateEvents(),this.$el=e instanceof t.$?e:t.$(e),this.el=this.$el[0],i!==!1&&this.delegateEvents(),this},delegateEvents:function(t){if(!t&&!(t=a.result(this,"events")))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(a.isFunction(i)||(i=this[t[e]]),i){var n=e.match($),r=n[1],s=n[2];i=a.bind(i,this),r+=".delegateEvents"+this.cid,""===s?this.$el.on(r,i):this.$el.on(r,s,i)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_configure:function(t){this.options&&(t=a.extend({},a.result(this,"options"),t)),a.extend(this,a.pick(t,k)),this.options=t},_ensureElement:function(){if(this.el)this.setElement(a.result(this,"el"),!1);else{var e=a.extend({},a.result(this,"attributes"));this.id&&(e.id=a.result(this,"id")),this.className&&(e["class"]=a.result(this,"className"));var i=t.$("<"+a.result(this,"tagName")+">").attr(e);this.setElement(i,!1)}}}),t.sync=function(e,i,n){var r=x[e];a.defaults(n||(n={}),{emulateHTTP:t.emulateHTTP,emulateJSON:t.emulateJSON});var s={type:r,dataType:"json"};if(n.url||(s.url=a.result(i,"url")||M()),null!=n.data||!i||"create"!==e&&"update"!==e&&"patch"!==e||(s.contentType="application/json",s.data=JSON.stringify(n.attrs||i.toJSON(n))),n.emulateJSON&&(s.contentType="application/x-www-form-urlencoded",s.data=s.data?{model:s.data}:{}),n.emulateHTTP&&("PUT"===r||"DELETE"===r||"PATCH"===r)){s.type="POST",n.emulateJSON&&(s.data._method=r);var o=n.beforeSend;n.beforeSend=function(t){return t.setRequestHeader("X-HTTP-Method-Override",r),o?o.apply(this,arguments):void 0}}"GET"===s.type||n.emulateJSON||(s.processData=!1),"PATCH"!==s.type||!window.ActiveXObject||window.external&&window.external.msActiveXFilteringEnabled||(s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var l=n.xhr=t.ajax(a.extend(s,n));return i.trigger("request",i,l,n),l};var x={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};t.ajax=function(){return t.$.ajax.apply(t.$,arguments)};var A=t.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},T=/\((.*?)\)/g,S=/(\(\?)?:\w+/g,j=/\*\w+/g,C=/[\-{}\[\]+?.,\\\^$|#\s]/g;a.extend(A.prototype,l,{initialize:function(){},route:function(e,i,n){a.isRegExp(e)||(e=this._routeToRegExp(e)),a.isFunction(i)&&(n=i,i=""),n||(n=this[i]);var r=this;return t.history.route(e,function(s){var o=r._extractParameters(e,s);n&&n.apply(r,o),r.trigger.apply(r,["route:"+i].concat(o)),r.trigger("route",i,o),t.history.trigger("route",r,i,o)}),this},navigate:function(e,i){return t.history.navigate(e,i),this},_bindRoutes:function(){if(this.routes){this.routes=a.result(this,"routes");for(var t,e=a.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(C,"\\$&").replace(T,"(?:$1)?").replace(S,function(t,e){return e?t:"([^/]+)"}).replace(j,"(.*?)"),new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return a.map(i,function(t){return t?decodeURIComponent(t):null})}});var E=t.History=function(){this.handlers=[],a.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},O=/^[#\/]|\s+$/g,N=/^\/+|\/+$/g,z=/msie [\w.]+/,I=/\/$/;E.started=!1,a.extend(E.prototype,l,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(I,"");t.indexOf(i)||(t=t.substr(i.length))}else t=this.getHash();return t.replace(O,"")},start:function(e){if(E.started)throw new Error("Backbone.history has already been started");E.started=!0,this.options=a.extend({},{root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var i=this.getFragment(),n=document.documentMode,r=z.exec(navigator.userAgent.toLowerCase())&&(!n||7>=n);this.root=("/"+this.root+"/").replace(N,"/"),r&&this._wantsHashChange&&(this.iframe=t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(i)),this._hasPushState?t.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!r?t.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=i;var s=this.location,o=s.pathname.replace(/[^\/]$/,"$&/")===this.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!o?(this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&o&&s.hash&&(this.fragment=this.getHash().replace(O,""),this.history.replaceState({},document.title,this.root+this.fragment+s.search)),this.options.silent?void 0:this.loadUrl())},stop:function(){t.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),E.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t===this.fragment?!1:(this.iframe&&this.navigate(t),this.loadUrl()||this.loadUrl(this.getHash()),void 0)},loadUrl:function(t){var e=this.fragment=this.getFragment(t),i=a.any(this.handlers,function(t){return t.route.test(e)?(t.callback(e),!0):void 0});return i},navigate:function(t,e){if(!E.started)return!1;if(e&&e!==!0||(e={trigger:e}),t=this.getFragment(t||""),this.fragment!==t){this.fragment=t;var i=this.root+t;if(this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,i);else{if(!this._wantsHashChange)return this.location.assign(i);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}e.trigger&&this.loadUrl(t)}},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else t.hash="#"+e}}),t.history=new E;var J=function(t,e){var i,n=this;i=t&&a.has(t,"constructor")?t.constructor:function(){return n.apply(this,arguments)},a.extend(i,n,e);var r=function(){this.constructor=i};return r.prototype=n.prototype,i.prototype=new r,t&&a.extend(i.prototype,t),i.__super__=n.prototype,i};p.extend=m.extend=A.extend=b.extend=E.extend=J;var M=function(){throw new Error('A "url" property or function must be specified')},P=function(t,e){var i=e.error;e.error=function(n){i&&i(t,n,e),t.trigger("error",t,n,e)}}}).call(this),function(){function t(){return(0|65536*(1+Math.random())).toString(16).substring(1)}function e(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}var i=this._,n=this.Backbone;n.LocalStorage=window.Store=function(t){this.name=t;var e=this.localStorage().getItem(this.name);this.records=e&&e.split(",")||[]},i.extend(n.LocalStorage.prototype,{save:function(){this.localStorage().setItem(this.name,this.records.join(","))},create:function(t){return t.id||(t.id=e(),t.set(t.idAttribute,t.id)),this.localStorage().setItem(this.name+"-"+t.id,JSON.stringify(t)),this.records.push(t.id.toString()),this.save(),t.toJSON()},update:function(t){return this.localStorage().setItem(this.name+"-"+t.id,JSON.stringify(t)),i.include(this.records,t.id.toString())||this.records.push(t.id.toString()),this.save(),t.toJSON()},find:function(t){return JSON.parse(this.localStorage().getItem(this.name+"-"+t.id))},findAll:function(){return i(this.records).chain().map(function(t){return JSON.parse(this.localStorage().getItem(this.name+"-"+t))},this).compact().value()},destroy:function(t){return this.localStorage().removeItem(this.name+"-"+t.id),this.records=i.reject(this.records,function(e){return e==t.id.toString()}),this.save(),t},localStorage:function(){return localStorage}}),n.LocalStorage.sync=window.Store.sync=n.localSync=function(t,e,i,n){var r=e.localStorage||e.collection.localStorage;"function"==typeof i&&(i={success:i,error:n});var s;switch(t){case"read":s=void 0!=e.id?r.find(e):r.findAll();break;case"create":s=r.create(e);break;case"update":s=r.update(e);break;case"delete":s=r.destroy(e)}s?i.success(s):i.error("Record not found")},n.ajaxSync=n.sync,n.getSyncMethod=function(t){return t.localStorage||t.collection&&t.collection.localStorage?n.localSync:n.ajaxSync},n.sync=function(t,e,i,r){return n.getSyncMethod(e).apply(this,[t,e,i,r])}}(),function(){this.Academia.Collection=Backbone.Collection.extend({find:function(t,e){var i;return(i=this.get(t))?e(i):(i=new this.model({id:t}),this.add(i),i.fetch({success:function(){return e(i)}}))},sync:function(t,e,i){return"read"===t?i.dataType="jsonp":i.url=e.url(!0),("create"===t||"update"===t)&&(i.contentType="application/json",i.data=JSON.stringify(function(){var t;return t={},t[e.modelName]=e.toJSON(),t}())),i.beforeSend=$a.add_csrf_header,Backbone.sync(t,e,i)},parse:function(t){var e=this;return this.propertyNames&&this.propertyNames.length>0&&_.each(this.propertyNames,function(i){return e[i]=t[i]}),null!=t[this.root]?t[this.root]:t},size:function(){return this.models.length},as_json:function(){return this.map(function(t){return t.attributes})}})}.call(this),function(){var t;this.Academia.Model=Backbone.Model.extend({initialize:function(){var e=this;return Backbone.Model.prototype.initialize.apply(this,arguments),this._history=new t(this.attributes),this.on("sync",function(){return e._history.record(e.attributes)})},changes_since_last_sync:function(){return this._history.changes(this.attributes)},fetch:function(t){var e,i=this;return e=t.success,t.success=function(t,n,r){return e&&e(t,n,r),i._history.record(i.attributes)},Backbone.Model.prototype.fetch.apply(this,arguments)},parse:function(t){var e=this;return this.propertyNames&&this.propertyNames.length>0&&_.each(this.propertyNames,function(i){return e[i]=t[i]}),null!=t[this.modelName]?t[this.modelName]:t},revert:function(){var t,e=this;return t=this._history.new_keys(this.attributes),_.each(t,function(t){return e.unset(t)}),this.set(this._history.last())},sync:function(t,e,i){return"read"===t&&(i.dataType="jsonp"),i.url=e.url(t),("create"===t||"update"===t)&&(i.contentType="application/json",i.data=JSON.stringify(function(){var t;return t={},t[e.modelName]=e.toJSON(),i.params&&_.extend(t,i.params),t}())),i.beforeSend=$a.add_csrf_header,Backbone.sync(t,e,i)},url:function(t){var e,i,n,r,s;if(null==this.routeKey)throw"You need to define a routeKey from routes.js";switch(n=this.routeKey,r=!0,e={},"create"!==t&&null!=this.id&&(e.id=this.id),t){case"create":n+="s";break;case"read":r=!1;break;case"update":case"delete":}return r&&(e.subdomain_param="api"),s=$r[n+(r?"_path":"_url")],i=$.extend(e,("function"==typeof this.urlArgs?this.urlArgs():void 0)||{}),s(i)}}),t=function(){function t(t){this.states=[],null!=t&&this.record(t)}return t.prototype.last=function(){return _.last(this.states)},t.prototype.record=function(t){return this.states.push($x.clone(t))},t.prototype.changes=function(t){var e,i;return e={},i=this.last(),_.each(this.new_keys(t),function(i){return e[i]=t[i]}),_.each(_.keys(i),function(n){var r,s;return s=i[n],r=t[n],s!==r?e[n]=r:void 0}),e},t.prototype.new_keys=function(t){return _.difference(_.keys(t),_.keys(this.last()))},t}()}.call(this),function(){var t,e={}.hasOwnProperty,i=function(t,i){function n(){this.constructor=t}for(var r in i)e.call(i,r)&&(t[r]=i[r]);return n.prototype=i.prototype,t.prototype=new n,t.__super__=i.prototype,t};t=function(t,e){var i,n;return n=e.split("."),i=t,_.each(n,function(t){return i=i[t]}),i},this.JST||(this.JST={}),this.Academia.View=Backbone.View.extend({initialize:function(){return this._find_elements()},delegateEvents:function(e){var i,n,r=this;if(e||(e=this.events))return i={},n=/^(\S+)\s*(.*)$/,_.each(e,function(e,s){var o,a,l,u,_;return _=s.match(n),u=_[0],o=_[1],l=_[2],l.match(/^%/)?(a=t(r.elements,l.slice(1)),i[o+" "+a]=e):i[s]=e}),Backbone.View.prototype.delegateEvents.call(this,i)},render:function(t){var e,i;return null==t&&(t={}),e=t.template||this.template||JST[this.jstTemplate]||function(){throw"Must have a template or jstTemplate property to use the default render()"}(),this.$el.html(e($.extend(!0,{},t.defaults,null!=(i=this.model)?i.attributes:void 0,t.override))),this._find_elements(),this},remove:function(t){return null==t&&(t=!1),Backbone.View.prototype.remove.apply(this,arguments),t||this.trigger("remove"),this},_find_elements:function(t,e){var i=this;return null==t&&(this.$els={},t=this.$els),null==e&&(this.elements||(this.elements={}),e=this.elements),_.each(e,function(e,n){return"object"==typeof e?(t[n]={},i._find_elements(t[n],e)):t[n]=i.$el.find(e)})},stopPropagation:function(t){return t.stopPropagation()}}),Academia.StaticView=function(t){function e(t){this._original_el=null!=t?t.el:void 0,e.__super__.constructor.apply(this,arguments)}return i(e,t),e.prototype.render=function(t){return this.undelegateEvents(),this.$el.replaceWith(t),this.$el=$(this._original_el),this.el=this.$el[0],this._find_elements(),this.delegateEvents(),this},e}(Academia.View)}.call(this);