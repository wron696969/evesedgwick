if(typeof fyre=="undefined"){var fyre={};}fyre.conv=fyre.conv||{};(function(z){
var na;z.aa=function(){return function(a){return a}};z.ba=function(){return function(){}};z.ca=function(a){return function(b){this[a]=b}};z.e=function(a){return function(){return this[a]}};z.l=function(a){return function(){return a}};z.da=function(a){return function(){return z.ea[a].apply(this,arguments)}};z.p=function(){};
z.fa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};z.ga=function(a){return void 0!==a};z.ha=function(a){var b=(0,z.fa)(a);return"array"==b||"object"==b&&"number"==typeof a.length};z.q=function(a){return"string"==typeof a};z.ia=function(a){return"function"==(0,z.fa)(a)};z.ja=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};z.ka=function(a){return a[z.ma]||(a[z.ma]=++na)};var oa=function(a,b,c){return a.call.apply(a.bind,arguments)};
var pa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};z.t=function(a,b,c){z.t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?oa:pa;return z.t.apply(null,arguments)};
z.qa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};z.ra=function(a,b){var c=a.split("."),d=z.u;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)c.length||void 0===b?d=d[f]?d[f]:d[f]={}:d[f]=b};z.v=function(a,b){function c(){}c.prototype=b.prototype;a.b=b.prototype;a.prototype=new c;a.prototype.constructor=a};
z.sa=function(a){Error.captureStackTrace?Error.captureStackTrace(this,z.sa):this.stack=Error().stack||"";a&&(this.message=String(a))};z.ta=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};z.ua=function(a,b){for(var c=a.split("%s"),d="",f=Array.prototype.slice.call(arguments,1);f.length&&1<c.length;)d+=c.shift()+f.shift();return d+c.join("%s")};z.va=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};z.xa=function(a,b){return-1!=a.indexOf(b)};
z.ya=function(a,b){for(var c=0,d=(0,z.va)(String(a)).split("."),f=(0,z.va)(String(b)).split("."),g=Math.max(d.length,f.length),h=0;0==c&&h<g;h++){var k=d[h]||"",n=f[h]||"",r=RegExp("(\\d*)(\\D*)","g"),A=RegExp("(\\d*)(\\D*)","g");do{var s=r.exec(k)||["","",""],E=A.exec(n)||["","",""];if(0==s[0].length&&0==E[0].length)break;c=((0==s[1].length?0:(0,window.parseInt)(s[1],10))<(0==E[1].length?0:(0,window.parseInt)(E[1],10))?-1:(0==s[1].length?0:(0,window.parseInt)(s[1],10))>(0==E[1].length?0:(0,window.parseInt)(E[1],
10))?1:0)||((0==s[2].length)<(0==E[2].length)?-1:(0==s[2].length)>(0==E[2].length)?1:0)||(s[2]<E[2]?-1:s[2]>E[2]?1:0)}while(0==c)}return c};var za=function(a,b){a.Ip=b;switch(b){case 3:a.J.Dx=a.JK;break;case 0:a.Te=(0,z.xa)(window.location.hostname,"fy.re")?"fy.re":"fyre",Aa(a,z.w.Te);default:a.J.Dx=""}Aa(a,a.Te)};
var Aa=function(a,b){var c="%s."+b;a.yh&&a.Ne&&(c=b.indexOf("."),c=b.slice(0,c)+".%s."+b.slice(c+1));a.J.domain=b;a.J.HU=a.protocol+b;Ba(a);a.J.Os=a.protocol+(0,z.ua)(c,"www");a.J.Nt=a.protocol+(0,z.ua)(c,"admin");a.J.Li=a.yh?a.J.Nt:a.J.Os;0==a.Ip&&(a.J.Li=a.J.Os);a.J.Cl=a.protocol+(0,z.ua)(c,"quill");a.J.qd=a.protocol+(0,z.ua)(c,"bootstrap");a.J.ri=a.protocol+(0,z.ua)(c,"stream1");a.J.cg=a.protocol+"lc."+a.Te;a.J.ty=a.protocol+"www."+a.Te};
var Ba=function(a,b){if(b)a.J.rb=b;else{var c;if(a.Ne)switch(a.Ip){case 2:c="lfstagingzor-a.akamaihd.net";break;case 1:c="lfqazor-a.akamaihd.net";break;case 0:c="widget."+a.Te;break;default:c="lfzor-a.akamaihd.net"}else switch(a.Ip){case 3:c="zor.fyre.co";break;case 0:c="widget."+a.Te;break;default:c="zor."+a.Te}c=a.protocol+c;a.J.rb=c;a.J.rb+="/wjs";a.Ji&&((0,z.ta)(a.J.rb,"v3.0")?a.J.rb+="."+a.Ji:a.J.rb+="/v3.0."+a.Ji)}};
z.x=function(a,b,c){for(var d=a.length,f=(0,z.q)(a)?a.split(""):a,g=0;g<d;g++)g in f&&b.call(c,f[g],g,a)};z.Ca=function(a,b,c){for(var d=a.length,f=Array(d),g=(0,z.q)(a)?a.split(""):a,h=0;h<d;h++)h in g&&(f[h]=b.call(c,g[h],h,a));return f};z.Ea=function(a,b,c){for(var d=a.length,f=(0,z.q)(a)?a.split(""):a,g=0;g<d;g++)if(g in f&&b.call(c,f[g],g,a))return!0;return!1};z.Ga=function(a){return z.Ha.concat.apply(z.Ha,arguments)};
z.Ia=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};z.Ja=function(a){for(var b=[],c=0,d=0;d<a.length;d++){for(var f=a.charCodeAt(d);255<f;)b[c++]=f&255,f>>=8;b[c++]=f}return b};z.Ka=function(){return z.u.navigator?z.u.navigator.userAgent:null};var La=function(){return z.u.navigator};var Ma=function(){var a=z.u.document;return a?a.documentMode:void 0};z.y=function(a){return Na[a]||(Na[a]=0<=(0,z.ya)(z.Oa,a))};
z.Pa=function(a){a=(0,z.Ja)(a);if(!(0,z.ha)(a))throw Error("encodeByteArray takes an array as a parameter");(0,z.Qa)();for(var b=Ra,c=[],d=0;d<a.length;d+=3){var f=a[d],g=d+1<a.length,h=g?a[d+1]:0,k=d+2<a.length,n=k?a[d+2]:0,r=f>>2,f=(f&3)<<4|h>>4,h=(h&15)<<2|n>>6,n=n&63;k||(n=64,g||(h=64));c.push(b[r],b[f],b[h],b[n])}return c.join("")};
z.Qa=function(){if(!Sa){Sa={};z.Ta={};Ra={};for(var a=0;65>a;a++)Sa[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt(a),z.Ta[Sa[a]]=a,Ra[a]=Ua.charAt(a)}};z.B=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};z.Va=function(a){var b=0,c;for(c in a)b++;return b};z.Wa=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};z.Xa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};z.Ya=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
z.Za=function(a){for(var b in a)return!1;return!0};z.$a=function(a){var b={},c;for(c in a)b[c]=a[c];return b};z.C=function(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var g=0;g<ab.length;g++)c=ab[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};z.bb=function(a){return function(){return a}};var db=function(a){return function(){throw a;}};
z.eb=function(a,b){this.$g=[];this.$F=a;this.XC=b||null;this.nn=this.DD=!1;this.Hl=void 0;this.Xx=this.dM=this.Yt=!1;this.Js=0;this.Ya=null;this.Hp=0};z.gb=function(a,b,c){a.DD=!0;a.Hl=c;a.nn=!b;hb(a)};z.ib=function(a){if(a.Sd()){if(!a.Xx)throw new jb;a.Xx=!1}};z.kb=function(a,b,c){(0,z.lb)(a,b,null,c)};z.lb=function(a,b,c,d){a.$g.push([b,c,d]);a.Sd()&&hb(a)};var mb=function(a){return(0,z.Ea)(a.$g,function(a){return(0,z.ia)(a[1])})};
var hb=function(a){a.Js&&a.Sd()&&mb(a)&&(z.u.clearTimeout(a.Js),delete a.Js);a.Ya&&(a.Ya.Hp--,delete a.Ya);for(var b=a.Hl,c=!1,d=!1;a.$g.length&&!a.Yt;){var f=a.$g.shift(),g=f[0],h=f[1],f=f[2];if(g=a.nn?h:g)try{var k=g.call(f||a.XC,b);(0,z.ga)(k)&&(a.nn=a.nn&&(k==b||k instanceof Error),a.Hl=b=k);b instanceof z.eb&&(d=!0,a.Yt=!0)}catch(n){b=n,a.nn=!0,mb(a)||(c=!0)}}a.Hl=b;d&&((0,z.lb)(b,(0,z.t)(a.EC,a,!0),(0,z.t)(a.EC,a,!1)),b.dM=!0);c&&(a.Js=nb.call(z.u,db(b),0))};var jb=function(){z.sa.call(this)};
var ob=function(){this.qx={}};z.pb=function(a,b){var c=b||window.document,d=c.getElementsByTagName("head")[0],f=c.createElement("link"),g;a:{g=0;for(var h=(c||window.document).getElementsByTagName("link"),k=h.length,n,c=a.toLowerCase();g<k;g++)if(n=h[g],(0,z.q)(n.href)&&-1<n.href.toLowerCase().indexOf(c)){g=!0;break a}g=!1}g||(f.rel="stylesheet",f.type="text/css",f.href=a,f.media="all",(0,z.ja)(void 0)&&(0,z.C)(f,void 0),d.appendChild(f))};
z.qb=function(a,b,c,d){b=b||window.document;d=(0,z.ia)(d)?d:z.p;var f=b.getElementsByTagName("head")[0];b=b.createElement("script");rb[a]?d():sb[a]?sb[a].push(d):(b.type="text/javascript",b.src=a,b.async=!0,b.defer=!0,(0,z.ja)(c)&&(0,z.C)(b,c),tb(b,d),f.appendChild(b))};
var tb=function(a,b){sb[a.src]=[b];a.onload=a.onreadystatechange=function(){if(!a.readyState||/loaded|complete/.test(a.readyState)){var b=a.src,d=sb[b];if(d.length)for(var f=0,g=d.length;f<g;f++)d[f]();delete sb[b];rb[a.src]=!0;a.onload=a.onreadystatechange=null;a=void 0}}};z.ub=function(a){if("function"==typeof a.bd)return a.bd();if((0,z.q)(a))return a.split("");if((0,z.ha)(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return(0,z.Wa)(a)};
z.vb=function(a){if("function"==typeof a.kj)return a.kj();if("function"!=typeof a.bd){if((0,z.ha)(a)||(0,z.q)(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return(0,z.Xa)(a)}};z.wb=function(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if((0,z.ha)(a)||(0,z.q)(a))(0,z.x)(a,b,c);else for(var d=(0,z.vb)(a),f=(0,z.ub)(a),g=f.length,h=0;h<g;h++)b.call(c,f[h],d&&d[h],a)};
z.xb=function(a,b){this.wb={};this.Xa=[];this.Po=this.Pa=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.Kt(a)};z.yb=function(a){if(a.Pa!=a.Xa.length){for(var b=0,c=0;b<a.Xa.length;){var d=a.Xa[b];(0,z.zb)(a.wb,d)&&(a.Xa[c++]=d);b++}a.Xa.length=c}if(a.Pa!=a.Xa.length){for(var f={},c=b=0;b<a.Xa.length;)d=a.Xa[b],(0,z.zb)(f,d)||(a.Xa[c++]=d,f[d]=1),b++;a.Xa.length=c}};
z.zb=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};z.Ab=function(a){if(Bb){Bb=!1;var b=z.u.location;if(b){var c=b.href;if(c&&(c=(c=(0,z.Ab)(c)[3]||null)&&(0,window.decodeURIComponent)(c))&&c!=b.hostname)throw Bb=!0,Error();}}return a.match(Cb)};
z.Eb=function(a,b){var c;if(a instanceof z.Eb)this.Fe=(0,z.ga)(b)?b:a.Fe,(0,z.Fb)(this,a.Jl),c=a.Ls,(0,z.Gb)(this),this.Ls=c,c=a.Nk,(0,z.Gb)(this),this.Nk=c,Hb(this,a.Nr),(0,z.Ib)(this,a.Hr),(0,z.Jb)(this,a.Le.Ha()),Kb(this,a.gv);else if(a&&(c=(0,z.Ab)(String(a)))){this.Fe=!!b;(0,z.Fb)(this,c[1]||"",!0);var d=c[2]||"";(0,z.Gb)(this);this.Ls=d?(0,window.decodeURIComponent)(d):"";d=c[3]||"";(0,z.Gb)(this);this.Nk=d?(0,window.decodeURIComponent)(d):"";Hb(this,c[4]);(0,z.Ib)(this,c[5]||"",!0);(0,z.Jb)(this,
c[6]||"",!0);Kb(this,c[7]||"",!0)}else this.Fe=!!b,this.Le=new z.Lb(null,0,this.Fe)};z.Fb=function(a,b,c){(0,z.Gb)(a);a.Jl=c?b?(0,window.decodeURIComponent)(b):"":b;a.Jl&&(a.Jl=a.Jl.replace(/:$/,""))};var Hb=function(a,b){(0,z.Gb)(a);if(b){b=Number(b);if((0,window.isNaN)(b)||0>b)throw Error("Bad port number "+b);a.Nr=b}else a.Nr=null};z.Ib=function(a,b,c){(0,z.Gb)(a);a.Hr=c?b?(0,window.decodeURIComponent)(b):"":b};
z.Jb=function(a,b,c){(0,z.Gb)(a);b instanceof z.Lb?(a.Le=b,a.Le.Jx(a.Fe)):(c||(b=Mb(b,Nb)),a.Le=new z.Lb(b,0,a.Fe))};var Kb=function(a,b,c){(0,z.Gb)(a);a.gv=c?b?(0,window.decodeURIComponent)(b):"":b};z.Gb=function(a){if(a.pR)throw Error("Tried to modify a read-only Uri");};var Mb=function(a,b){return(0,z.q)(a)?(0,window.encodeURI)(a).replace(b,Ob):null};var Ob=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};z.Lb=function(a,b,c){this.Pd=a||null;this.Fe=!!c};
z.Pb=function(a){if(!a.Gb&&(a.Gb=new z.xb,a.Pa=0,a.Pd))for(var b=a.Pd.split("\x26"),c=0;c<b.length;c++){var d=b[c].indexOf("\x3d"),f=null,g=null;0<=d?(f=b[c].substring(0,d),g=b[c].substring(d+1)):f=b[c];f=(0,window.decodeURIComponent)(f.replace(/\+/g," "));f=Rb(a,f);a.add(f,g?(0,window.decodeURIComponent)(g.replace(/\+/g," ")):"")}};z.Sb=function(a,b,c){a.remove(b);0<c.length&&(a.Pd=null,a.Gb.set(Rb(a,b),(0,z.Ia)(c)),a.Pa+=c.length)};
var Rb=function(a,b){var c=String(b);a.Fe&&(c=c.toLowerCase());return c};var Tb=function(a,b,c){a=new Ub(a,b,c);if(!a.FJ)return a.load(),z.u.FyreLoader=a,z.u.FyreLoader.apps=a.vD,a};
var Ub=function(a,b,c){a.network&&"livefyre.com"!==a.network&&z.w.XT(a.network);this.ra=a;this.vD=[];var d=(new z.Eb(window.location.href)).Le.get("livefyrejs");if(d&&!z.u.FYRE_OVERRIDE){var f=null,g=null,h=z.w.protocol;switch(d){case "dev":g="widget.fyre/wjs";f=h+"widget.fyre/compile?id\x3dlfconv\x26mode\x3dsimple";break;case "qa":g="zor.qa-ext.livefyre.com/wjs";f=h+g+"/v3.0/"+z.w.$d.FF;break;case "uat":g="zor.t402.livefyre.com/wjs";f=h+g+"/v3.0/"+z.w.$d.FF;break;default:d=null,window.console&&window.console.warn("Unknown server override.")}z.u.FYRE_OVERRIDE=
this.FJ=d;d={tldPrefix:z.w.Te.replace(/.livefyre.com/,""),buildType:z.w.Ip,assetServer:g};d=(0,z.qa)(function(a,b){var c=z.u.fyre.conv;(0,z.B)(b,function(a,b){c.config.set(b,a)});c.load.apply(z.u,a)},arguments,d);(0,z.qb)(f,null,null,d)}else(0,z.ia)(b)&&(c=b,b=z.Vb.ck),b||(b=z.Vb.ck),this.tm={},this.$=c||z.p,this.SF=[],this.Bp=(0,z.Ca)((0,z.q)(b)?[b]:b,this.UN,this),(0,z.x)(this.Bp,function(a,b){(0,z.kb)(a.dS.xh,(0,z.t)(this.kF,this,b));var c="";z.Wb?c="_ipad":z.Xb&&(c="_mobile");(0,z.pb)(z.w.J.rb+
"/css/"+("livefyre_"+("reviews"===a.appName?"reviews":"main")+c+".css"))},this)};var Yb=function(a,b){z.w.Ji=b;(0,z.qb)(z.w.J.rb+z.w.$d.aM,null,null,(0,z.t)(a.nr,a));a.wi=(0,window.setTimeout)((0,z.t)(a.FQ,a),3E3)};z.ea=[];z.Zb=z.Zb||{};z.u=this;z.ma="closure_uid_"+(1E9*Math.random()>>>0);na=0;(0,z.v)(z.sa,Error);z.sa.prototype.name="CustomError";z.ac=2147483648*Math.random()|0;z.Ha=Array.prototype;var wc;var Na;var pc;var oc;var lc;var fc;var ec;var dc;var cc;var bc;fc=ec=dc=cc=bc=!1;var jc;if(jc=(0,z.Ka)()){var kc=La();bc=0==jc.lastIndexOf("Opera",0);cc=!bc&&((0,z.xa)(jc,"MSIE")||(0,z.xa)(jc,"Trident"));ec=(dc=!bc&&(0,z.xa)(jc,"WebKit"))&&(0,z.xa)(jc,"Mobile");fc=!bc&&!dc&&!cc&&"Gecko"==kc.product}z.D=bc;z.F=cc;z.G=fc;z.H=dc;lc=ec;pc=La();oc=pc&&pc.platform||"";z.gc=(0,z.xa)(oc,"Mac");z.hc=(0,z.xa)(oc,"Win");(0,z.xa)(oc,"Linux");z.ic=!!La()&&(0,z.xa)(La().appVersion||"","X11");var qc=(0,z.Ka)();
qc&&(0,z.xa)(qc,"Android");qc&&(0,z.xa)(qc,"iPhone");qc&&(0,z.xa)(qc,"iPad");a:{var rc="",sc;if(z.D&&z.u.opera)var tc=z.u.opera.version,rc="function"==typeof tc?tc():tc;else if(z.G?sc=/rv\:([^\);]+)(\)|;)/:z.F?sc=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:z.H&&(sc=/WebKit\/(\S+)/),sc)var uc=sc.exec((0,z.Ka)()),rc=uc?uc[1]:"";if(z.F){var vc=Ma();if(vc>(0,window.parseFloat)(rc)){z.Oa=String(vc);break a}}z.Oa=rc}Na={};wc=z.u.document;
z.xc=wc&&z.F?Ma()||("CSS1Compat"==wc.compatMode?(0,window.parseInt)(z.Oa,10):5):void 0;var Ua;var Ra;var Sa;Sa=null;z.Ta=null;Ra=null;Ua="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.";z.yc=z.G||z.H||z.D||"function"==typeof z.u.atob;var ab="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");z.w={};(0,z.ra)("fyre.conv.config",z.w);z.w.bD=!1;z.w.cC="https://s3.amazonaws.com/data.bootstrap.fyre.co";z.w.Ne="https:"===window.document.location.protocol;z.w.protocol=z.w.Ne?"https://":"http://";z.w.Qy="/api/v1.1/";z.w.Ve="/api/v3.0/";z.w.kI="fyre-auth";z.w.lI=2592E3;z.w.cA="fyre-livecount";z.w.bc=(z.w.Ne?"https://lfavatar-a.akamaihd.net":"http://avatars.fyre.co")+"/a/anon/50.jpg";z.w.jZ=50;z.w.zZ={yZ:"WARNING"};z.w.Pw="livefyre.com";z.w.network=z.w.Pw;z.w.yh=!1;z.w.au="";
z.w.bootstrapS3Prefix=z.w.au;z.w.Te="livefyre.com";z.w.tld=z.w.Te;z.w.MU="https://twitter.com/intent/";z.w.NU="https://platform.twitter.com/widgets.js";z.w.HK="https://d2kmm3vx031a1h.cloudfront.net";z.w.$d={};z.w.$d.FF="/javascripts/livefyre.js";z.w.$d.aM="/javascripts/livefyre_base.js";z.w.$d.gN="/javascripts/livefyre_mod_error.js";z.w.$d.pN="/javascripts/livefyre_mod_featured.js";z.w.$d.aR="/javascripts/livefyre_mod_iframe.js";z.w.$d.wr="/javascripts/livefyre_mod_notifier.js";z.w.jI="10067";
z.w.Ji=z.w.jI;z.w.J={Nt:null,Os:null,qd:null,Cl:null,cg:null,ty:null,Li:null,rb:null,ri:null};z.w.XT=function(a){var b=z.w;b.yh=!0;b.Pw=a;Aa(b,a);b.J.Li=b.J.Nt};z.w.set=function(a,b){var c=z.w;switch(a){case "tldPrefix":var d="livefyre.com";b&&(d=b+"."+d,c.au="/"+d);c.Te=d;Aa(c,d);Ba(c);break;case "buildType":za(c,b);break;case "assetVersion":c.Ji=b;Ba(c);break;case "assetServer":Ba(c,b)}};z.w.set=z.w.set;z.w.$t=function(a,b){return[z.w.au,z.w.Pw,a,(0,z.Pa)(""+b),""].join("/")};z.w.MX=!1;z.w.JK="http://803d167b95084bdf833d2f95d66a1b3f@sentry.livefyre.com:9000/2";
Aa(z.w,z.w.Te);za(z.w,3);z.w.bD&&((0,z.C)(z.w,z.u.zW||{}),za(z.w,0));z.zc=(0,z.bb)(!1);z.Ac=(0,z.bb)(!0);/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var nb=z.u.setTimeout;z.m=z.eb.prototype;z.m.cancel=(0,z.da)(14);z.m.EC=function(a,b){this.Yt=!1;(0,z.gb)(this,a,b)};z.m.$=function(a){(0,z.ib)(this);(0,z.gb)(this,!0,a)};z.m.Sk=(0,z.da)(25);z.m.fC=(0,z.da)(0);z.m.Sd=(0,z.e)("DD");(0,z.v)(jb,z.sa);jb.prototype.message="Deferred has already fired";jb.prototype.name="AlreadyCalledError";z.Vb={ck:"main"};z.Vb.main={qd:!0,Yf:!0,xh:new z.eb};z.Vb.reviews={qd:!0,Yf:!0,xh:new z.eb};z.Vb.debug={xh:new z.eb};z.Vb.sdk={xh:new z.eb};ob.prototype.factory=function(a){function b(){this.VL=(0,z.Ia)(arguments);(0,z.Ya)(d,c)||(d[c]=[]);d[c].push(this);this.Kb=new z.eb}var c=(0,z.ka)(a||(0,z.ba)()),d=this.qx;b.ii=(0,z.t)(this.ii,this,c);b.kZ=c;return b};ob.prototype.ii=function(a,b){this.qx[a]&&(0,z.x)(this.qx[a],function(a){function d(){return b.apply(this,a.VL)}d.prototype=b.prototype;a.Kb.$(new d)})};var Bc=new ob;z.Cc=Bc.factory();(0,z.ra)("fyre.conv.LivefyreAuthDelegate",z.Cc);z.Cc.prototype.vb=function(a){(0,z.kb)(this.Kb,function(b){b.vb(a)})};z.Cc.prototype.loginByCookie=z.Cc.prototype.vb;z.Cc.prototype.logout=function(a){(0,z.kb)(this.Kb,function(b){b.logout(a)})};z.Cc.prototype.logout=z.Cc.prototype.logout;z.Cc.prototype.viewProfile=function(a,b){(0,z.kb)(this.Kb,function(c){c.viewProfile(a,b)})};z.Cc.prototype.viewProfile=z.Cc.prototype.viewProfile;
z.Cc.prototype.editProfile=function(a,b){(0,z.kb)(this.Kb,function(c){c.editProfile(a,b)})};z.Cc.prototype.editProfile=z.Cc.prototype.editProfile;z.Cc.prototype.type=2;z.Dc=Bc.factory();(0,z.ra)("fyre.conv.SPAuthDelegate",z.Dc);z.Dc.prototype.ec=function(a){(0,z.kb)(this.Kb,function(b){b.ec(a)})};z.Dc.prototype.login=z.Dc.prototype.ec;z.Dc.prototype.vb=function(a,b){(0,z.kb)(this.Kb,function(c){c.vb(a,b)})};z.Dc.prototype.loginByCookie=z.Dc.prototype.vb;
z.Dc.prototype.logout=function(a){(0,z.kb)(this.Kb,function(b){b.logout(a)})};z.Dc.prototype.logout=z.Dc.prototype.logout;z.Dc.prototype.viewProfile=function(a,b){(0,z.kb)(this.Kb,function(c){c.viewProfile(a,b)})};z.Dc.prototype.viewProfile=z.Dc.prototype.viewProfile;z.Dc.prototype.editProfile=function(a){(0,z.kb)(this.Kb,function(b){b.editProfile(a)})};z.Dc.prototype.editProfile=z.Dc.prototype.editProfile;z.Dc.prototype.type=4;z.Ec=Bc.factory();(0,z.ra)("fyre.conv.BackplaneAuthDelegate",z.Ec);
z.Ec.prototype.vb=function(a,b){(0,z.kb)(this.Kb,function(c){c.vb(a,b)})};z.Ec.prototype.loginByCookie=z.Ec.prototype.vb;z.Ec.prototype.ec=function(a){(0,z.kb)(this.Kb,function(b){b.ec(a)})};z.Ec.prototype.login=z.Ec.prototype.ec;z.Ec.prototype.logout=function(a){(0,z.kb)(this.Kb,function(b){b.logout(a)})};z.Ec.prototype.logout=z.Ec.prototype.logout;z.Ec.prototype.viewProfile=function(a,b){(0,z.kb)(this.Kb,function(c){c.viewProfile(a,b)})};z.Ec.prototype.viewProfile=z.Ec.prototype.viewProfile;
z.Ec.prototype.editProfile=function(a){(0,z.kb)(this.Kb,function(b){b.editProfile(a)})};z.Ec.prototype.editProfile=z.Ec.prototype.editProfile;z.Ec.prototype.or=function(){(0,z.kb)(this.Kb,function(a){a.or()})};z.Ec.prototype.logoutInternal=z.Ec.prototype.or;z.Ec.prototype.type=1;z.Fc=Bc.factory();(0,z.ra)("fyre.conv.RemoteAuthDelegate",z.Fc);z.Fc.prototype.vb=function(a,b){(0,z.kb)(this.Kb,function(c){c.vb(a,b)})};z.Fc.prototype.loginByCookie=z.Fc.prototype.vb;
z.Fc.prototype.ec=function(a){(0,z.kb)(this.Kb,function(b){b.ec(a)})};z.Ec.prototype.login=z.Ec.prototype.ec;z.Fc.prototype.logout=function(a){(0,z.kb)(this.Kb,function(b){b.logout(a)})};z.Ec.prototype.logout=z.Ec.prototype.logout;z.Fc.prototype.viewProfile=function(a,b){(0,z.kb)(this.Kb,function(c){c.viewProfile(a,b)})};z.Fc.prototype.viewProfile=z.Fc.prototype.viewProfile;z.Fc.prototype.editProfile=function(a,b){(0,z.kb)(this.Kb,function(c){c.editProfile(a,b)})};z.Fc.prototype.editProfile=z.Fc.prototype.editProfile;
z.Fc.prototype.type=3;z.Gc=function(){function a(a){(0,z.kb)(b,a)}var b=new z.eb;a.K=function(){b.$()};a.Sd=function(){return b.Sd()};return a}();(0,z.ra)("fyre.conv.ready",z.Gc);var sb={},rb={};var Hc,Ic,Jc,Kc,Lc,Mc,Nc;Nc=Mc=Lc=Kc=Jc=Ic=Hc=!1;var Oc=(0,z.Ka)();Oc&&(-1!=Oc.indexOf("Firefox")?Hc=!0:-1!=Oc.indexOf("Camino")?Ic=!0:-1!=Oc.indexOf("iPhone")||-1!=Oc.indexOf("iPod")?Jc=!0:-1!=Oc.indexOf("iPad")?Kc=!0:-1!=Oc.indexOf("Chrome")?Mc=!0:-1!=Oc.indexOf("Android")?Lc=!0:-1!=Oc.indexOf("Safari")&&(Nc=!0));z.Pc=Hc;z.Qc=Ic;z.Rc=Jc;z.Wb=Kc;z.Sc=Lc;z.Tc=Mc;z.Uc=Nc;var Vc;Vc=(0,z.Ka)();z.Wc=(z.Xb=lc||z.Sc||-1<Vc.indexOf("IEMobile"))&&!z.Wb;z.G&&(0,z.y)(12);z.F&&(0,z.y)(10);z.Xc="StopIteration"in z.u?z.u.StopIteration:Error("StopIteration");z.m=z.xb.prototype;z.m.Ub=(0,z.da)(10);z.m.bd=function(){(0,z.yb)(this);for(var a=[],b=0;b<this.Xa.length;b++)a.push(this.wb[this.Xa[b]]);return a};z.m.kj=function(){(0,z.yb)(this);return this.Xa.concat()};z.m.Cg=function(a){return(0,z.zb)(this.wb,a)};z.m.Fk=(0,z.da)(29);z.m.Vm=(0,z.da)(12);z.m.Og=(0,z.da)(16);z.m.clear=(0,z.da)(34);z.m.remove=function(a){return(0,z.zb)(this.wb,a)?(delete this.wb[a],this.Pa--,this.Po++,this.Xa.length>2*this.Pa&&(0,z.yb)(this),!0):!1};
z.m.get=function(a,b){return(0,z.zb)(this.wb,a)?this.wb[a]:b};z.m.set=function(a,b){(0,z.zb)(this.wb,a)||(this.Pa++,this.Xa.push(a),this.Po++);this.wb[a]=b};z.m.Kt=function(a){var b;a instanceof z.xb?(b=a.kj(),a=a.bd()):(b=(0,z.Xa)(a),a=(0,z.Wa)(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};z.m.Ha=function(){return new z.xb(this)};z.m.Tc=(0,z.da)(26);var Cb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),Bb=z.H;z.m=z.Eb.prototype;z.m.Jl="";z.m.Ls="";z.m.Nk="";z.m.Nr=null;z.m.Hr="";z.m.gv="";z.m.pR=!1;z.m.Fe=!1;z.m.toString=function(){var a=[],b=this.Jl;b&&a.push(Mb(b,Yc),":");if(b=this.Nk){a.push("//");var c=this.Ls;c&&a.push(Mb(c,Yc),"@");a.push((0,window.encodeURIComponent)(String(b)));b=this.Nr;null!=b&&a.push(":",String(b))}if(b=this.Hr)this.Nk&&"/"!=b.charAt(0)&&a.push("/"),a.push(Mb(b,"/"==b.charAt(0)?Zc:$c));(b=this.Le.toString())&&a.push("?",b);(b=this.gv)&&a.push("#",Mb(b,ad));return a.join("")};
z.m.Ha=function(){return new z.Eb(this)};z.m.Jx=function(a){this.Fe=a;this.Le&&this.Le.Jx(a);return this};var Yc=/[#\/\?@]/g,$c=/[\#\?:]/g,Zc=/[\#\?]/g,Nb=/[\#\?@]/g,ad=/#/g;z.m=z.Lb.prototype;z.m.Gb=null;z.m.Pa=null;z.m.Ub=(0,z.da)(9);z.m.add=function(a,b){(0,z.Pb)(this);this.Pd=null;a=Rb(this,a);var c=this.Gb.get(a);c||this.Gb.set(a,c=[]);c.push(b);this.Pa++;return this};
z.m.remove=function(a){(0,z.Pb)(this);a=Rb(this,a);return this.Gb.Cg(a)?(this.Pd=null,this.Pa-=this.Gb.get(a).length,this.Gb.remove(a)):!1};z.m.clear=(0,z.da)(33);z.m.Og=(0,z.da)(15);z.m.Cg=function(a){(0,z.Pb)(this);a=Rb(this,a);return this.Gb.Cg(a)};z.m.Fk=(0,z.da)(28);z.m.kj=function(){(0,z.Pb)(this);for(var a=this.Gb.bd(),b=this.Gb.kj(),c=[],d=0;d<b.length;d++)for(var f=a[d],g=0;g<f.length;g++)c.push(b[d]);return c};
z.m.bd=function(a){(0,z.Pb)(this);var b=[];if((0,z.q)(a))this.Cg(a)&&(b=(0,z.Ga)(b,this.Gb.get(Rb(this,a))));else{a=this.Gb.bd();for(var c=0;c<a.length;c++)b=(0,z.Ga)(b,a[c])}return b};z.m.set=function(a,b){(0,z.Pb)(this);this.Pd=null;a=Rb(this,a);this.Cg(a)&&(this.Pa-=this.Gb.get(a).length);this.Gb.set(a,[b]);this.Pa++;return this};z.m.get=function(a,b){var c=a?this.bd(a):[];return 0<c.length?String(c[0]):b};
z.m.toString=function(){if(this.Pd)return this.Pd;if(!this.Gb)return"";for(var a=[],b=this.Gb.kj(),c=0;c<b.length;c++)for(var d=b[c],f=(0,window.encodeURIComponent)(String(d)),d=this.bd(d),g=0;g<d.length;g++){var h=f;""!==d[g]&&(h+="\x3d"+(0,window.encodeURIComponent)(String(d[g])));a.push(h)}return this.Pd=a.join("\x26")};z.m.Ha=function(){var a=new z.Lb;a.Pd=this.Pd;this.Gb&&(a.Gb=this.Gb.Ha(),a.Pa=this.Pa);return a};
z.m.Jx=function(a){a&&!this.Fe&&((0,z.Pb)(this),this.Pd=null,(0,z.wb)(this.Gb,function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),(0,z.Sb)(this,d,a))},this));this.Fe=a};z.m.extend=(0,z.da)(38);Ua="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_\x3d";z.t=pa;(0,z.ra)("fyre.conv.load",Tb);Tb.JR=function(a,b,c){return Tb.HF(a,b,c)};(0,z.ra)("fyre.conv.load.makeArticleId",Tb.JR);Tb.HF=function(a,b,c){var d,f=new z.Lb;a||(a=Tb.MD());a||(a=window.location.href);d=new z.Eb(a);(0,z.q)(b)&&(b=[b]);b&&(0,z.x)(b,function(a){f.add(a,d.Le.get(a))});(0,z.Jb)(d,f);c||Kb(d,"");return d.toString()};(0,z.ra)("fyre.conv.load.makeCollectionUrl",Tb.HF);
Tb.MD=function(){for(var a=window.document.getElementsByTagName("link"),b=0,c=a.length,d;b<c;b++)if(d=a[b],"canonical"==d.rel)return d.href};(0,z.ra)("fyre.conv.load.getCanonicalLinkRel",Tb.MD);z.m=Ub.prototype;z.m.load=function(){Yb(this,this.ra.assetVersion||z.w.Ji)};z.m.UN=function(a){var b;(0,z.q)(a)?a={appName:a,ra:{}}:(a={appName:a.app||z.Vb.ck,ra:(0,z.$a)(a)},delete a.ra.app);b=z.Vb[a.appName];if(!b)throw"Invalid app "+a.appName;a.dS=b;this.SF.push(a.appName);return a};
z.m.nr=function(){(0,window.clearTimeout)(this.wi);(0,z.x)(this.SF,function(a){(0,z.qb)(z.w.J.rb+"/javascripts/livefyre_mod_"+a+".js")})};z.m.kv=function(a){var b=(0,z.$a)(this.ra);(0,z.C)(b,a.ra);b.strings=(0,z.$a)(this.ra.strings);(0,z.C)(b.strings,a.ra.strings||{});return b};
z.m.kF=function(a,b){var c=this.kv(this.Bp[a]);((0,z.Za)(this.tm)||0==a)&&(0,z.bd)(c);c=new b(this.ra,c);this.tm[a]=c;if(!((0,z.Va)(this.tm)<this.Bp.length)){var d=[];(0,z.B)(this.tm,function(a,b){var c=this.tm[b.toString()].iv();d.push(c);-1<window.location.hash.indexOf("fyre-debug")&&a.debug()},this);this.vD=d;this.$.apply(z.u,d);z.Gc.Sd()||z.Gc.K()}};z.m.FQ=function(){Yb(this,z.w.Ji)};(0,z.ia)(z.u.FYRE_LOADED_CB)&&(0,window.setTimeout)(z.u.FYRE_LOADED_CB,80);})(fyre.conv);fyre.conv.config.set('assetVersion', 1387518294);
