var d=!0,i=null,k=!1;function r(){return function(){}}
function K(c,h,a){function b(a,g){q=q.replace(t[a],"&dbg"+a+"="+g)}for(var f=new O,j=Array(12),m=i,c=c?c:i,o="",g=i,n=0,e=RegExp(/&strp=[^&]*/),P=RegExp(/&narme=[^&]*/),Q=RegExp(/&narm=[^&]*/),R=RegExp(/&naral=[^&]*/),G=RegExp(/&evid=[^&]*/),y=RegExp(/&tstype=[^&]*/),p=RegExp(/&jsver=[^&]*/),t=[RegExp(/&dbg0=[^&]*/),RegExp(/&dbg1=[^&]*/),RegExp(/&dbg2=[^&]*/),RegExp(/&dbg3=[^&]*/),RegExp(/&dbg4=[^&]*/),RegExp(/&dbg5=[^&]*/),RegExp(/&dbg6=[^&]*/),RegExp(/&dbg7=[^&]*/),RegExp(/&dbg8=[^&]*/),RegExp(/&dbg9=[^&]*/),
RegExp(/&dbg10=[^&]*/),RegExp(/&dbgtx=[^&]*/)],z=[RegExp(/&b0=[^&]*/),RegExp(/&b1=[^&]*/),RegExp(/&b2=[^&]*/),RegExp(/&b3=[^&]*/),RegExp(/&b4=[^&]*/),RegExp(/&b5=[^&]*/),RegExp(/&b6=[^&]*/),RegExp(/&b7=[^&]*/),RegExp(/&b8=[^&]*/),RegExp(/&b9=[^&]*/),RegExp(/&b10=[^&]*/),RegExp(/&b11=[^&]*/)],H=Array(12),l={J:{v:i,w:i,z:i,u:i,ed:k},e:{F:i,A:i,q:i,r:i,C:i,D:i,p:i,m:i,ed:k},ta:{Ia:i,Ha:i},Na:0},A="",B="",u,v,C="",D="",L=0;12>L;L++)H[L]="&b"+L+"=";var w=(a?a:"")+"?"+(h?h:i),w=p.test(w)?w.replace(p,"&jsver="+
c):w+"&jsver="+c,q="&naral=&narm=&narme=&tstype=&dbg2=&dbg3=&dbg4=&dbg5=&dbg6=&dbg7=&dbg8=&dbg9=&dbg10=&dbgtx=",s="&strp=",h="&ctime="+(new Date).getTime(),E=0,I="",F="",J=0,x=0,M=0,N=0;this.Cb=function(){return E};this.yb=w+s+q+h+o+A;setEventId=function(a){g=a;q=q.replace(G,"&evid="+g)};setNAPReason=function(a){F+=a.slice(0,500)};setAdLocatorIndicator=function(a){J|=a;q=q.replace(R,"&naral="+J)};setNAPMeasure=function(a){x|=a;S()?(setNotApplicableTime(),E=0):0==E&&(E=(new Date).getTime());q=q.replace(Q,
"&narm="+x)};setNAPMeasureErr=function(a){M|=a;q=q.replace(P,"&narme="+M)};setTrafficIndicator=function(a){N|=a;q=q.replace(y,"&tstype="+N)};setBuckectStr=function(a,g){o=g?o.replace(z[a],"&b"+a+"="+j[a]):o+"&b"+a+"="+j[a]};setNotApplicableTime=function(){0!=E&&(I=(new Date).getTime()-E)};getBucketString=function(){return o};this.Wb=function(a){m=a;s=s.replace(e,"&strp="+m);this.Wb=r()};this.Ea=function(){return(new Date).getTime()};var T=this.Ea();this.Vc=function(){return T};this.Ja=function(){setNAPMeasure(2)};
this.Dd=function(){setNAPMeasureErr(8);this.Ka()};this.Ka=function(){setNAPMeasure(4)};this.Qb=function(){setAdLocatorIndicator(8);this.Ja()};this.ac=function(a){setAdLocatorIndicator(16);b(9,a)};this.bc=function(){setAdLocatorIndicator(1)};this.yd=function(){this.Ja();setNAPMeasureErr(1)};this.xd=function(){this.Ja();setNAPMeasureErr(2)};this.lb=function(a){setNAPMeasure(8);setNAPReason(a)};this.ud=function(){x&=-3;setNAPMeasure(1)};this.Sb=function(){setTrafficIndicator(128)};this.Gd=function(){setTrafficIndicator(2)};
this.Ed=function(){setTrafficIndicator(1)};this.Bd=function(){setTrafficIndicator(512)};this.Ad=function(){setTrafficIndicator(1024)};this.Ub=function(){setNAPMeasure(16)};this.Nc=function(){return j};this.Rb=function(a,g){if(0<=a.g){var e=Math.floor(a.g/10);0<a.g%10?e++:0<a.g&&e++;isNaN(j[e])&&(j[e]=0);j[e]+=g;6<=e&&(n+=g)}};this.wd=function(a){a="&advisonl="+(a.Ib==i?"":a.Ib)+("&adabvvponl="+(a.Hb==i?"":a.Hb));b(8,"CSS1Compat"===document.compatMode?1:0);void 0!=document.documentMode&&document.documentMode!=
i&&b(10,document.documentMode);A=a};this.ua=function(a){D="&adbtftopg="+(a==i?"":a)};this.vd=function(a){a!=i&&(l=a)};this.Tb=function(a){this.vd(a.B);this.Vb()};this.fc=function(){var a;a="&vptoscrx="+(l.J.v!=i?l.J.v:"");a+="&vptoscry="+(l.J.w!=i?l.J.w:"");a+="&vpwdth="+(l.J.z!=i?l.J.z:"");a+="&vphgt="+(l.J.u!=i?l.J.u:"");a+="&adtovpx="+(l.e.F!=i?l.e.F:"");a+="&adtovpy="+(l.e.A!=i?l.e.A:"");a+="&adtopgx="+(l.e.q!=i?l.e.q:"");a+="&adtopgy="+(l.e.r!=i?l.e.r:"");a+="&adtoscrx="+(l.e.C!=i?l.e.C:"");
a+="&adtoscry="+(l.e.D!=i?l.e.D:"");a+="&scrwdth="+(l.ta.Ia!=i?l.ta.Ia:"");a+="&scrhgt="+(l.ta.Ha!=i?l.ta.Ha:"");return a+="&almesind="+l.Na};this.gc=function(){var a="";if(u&&v){var g=l.e.p!=i?l.e.p:i,e=l.e.m!=i?l.e.m:i;u*v<g*e&&(a+="&dvp_adwdth="+u,a+="&dvp_adhgt="+v,u=g,v=e)}else u=l.e.p!=i?l.e.p:i,v=l.e.m!=i?l.e.m:i;a+="&adwdth="+(u!=i?u:"");return a+="&adhgt="+(v!=i?v:"")};this.Vb=function(){setNotApplicableTime();o="";for(var a=0;a<j.length;a++)j[a]&&(o+=H[a]+j[a]);B=this.gc();C=A+this.fc()+
B;C+=D;this.yb=w+s+q+o+C};this.Rc=function(){return 1E3<=n};this.N=function(a){var g=w+"&impid="+window.$uid,e=-1;window.$dv&&(window.$dv.tags[window.$uid]&&window.$dv.tags[window.$uid].getTimeDiff)&&(e=window.$dv.tags[window.$uid].getTimeDiff());switch(a){case 1:g+=s+q+"&napt="+I+C+"&napr="+F+"&ismms="+e;break;case 2:g+=s+q+"&napt="+I+C+"&napr="+F+"&isnmms="+e;break;case 3:g+=s+D+B+o+"&istoms="+e;break;case 4:case 8:g+=s+D+B+o+"&isbxdms="+e;break;case 5:g+=s+D+B+A+"&isiabvms="+e;break;case 6:g+=
D+B+A+"&iscvmvms="+e;break;case 16:g+=s+q+"&napt="+I+"&napr="+F+"&ishems="+e;break;default:g=this.yb+"&napt="+I+"&ctime="+this.Ea()+"&napr="+F}return g+"&evid="+a+"&ctime="+this.Ea()};this.Mc=function(){for(var a=[],g=0;12>g;g++)a[g]=j[g]?j[g]:0;return a};var S=this.ea=function(){return 2==(x&2)&&8!=(J&8)||4==(x&4)||8==(M&8)&&8==(J&8)?k:d};this.qd=function(a){var g=f.S(a);if(1>=g.c||1>=g.a)g=f.Z(a);g&&(b(5,g.c),b(6,g.a))};return this}
function U(c,h){this.window=i;this.Da={};this.images={};this.Za=function(a){var b=this.window.document.createElement("img");b.name=b.id=a;b.width=0;b.height=0;b.style.display="none";b.src="";this.window.document.body.insertBefore(b,this.window.document.body.firstChild);return b};this.Zb=function(a,b){if(b&&1!=this.Da[b]||16==b)this.images[b].src=a,this.Da[b]=1};this.P=function(a,b){if(b&&1!=this.Da[b]||16==b)this.window.document.createElement("img").src=a,this.Da[b]=1};if(this.window=c)this.images=
{3:this.Za(h+"_13"),4:this.Za(h+"_14"),8:this.Za(h+"_18")};return this};function O(){this.getElementVolume_object=function(c){var h=c.getAttribute("width"),a=c.getAttribute("height");return h==i||""==h||a==i||""==a?{c:c.parentNode.clientWidth,a:c.parentNode.clientHeight}:{c:h,a:a}};this.S=function(c,h){var a=i,b=c.nodeName.toLowerCase();h&&this["getElementVolume_"+b]&&(a=this["getElementVolume_"+b](c));if(!a&&(a=this.Oc(c),!a||1>=a.c||1>=a.a))return{c:0,a:0};a.c.indexOf&&a.c.indexOf("px")&&(a.c=a.c.replace("px",""));a.a.indexOf&&a.a.indexOf("px")&&(a.a=a.a.replace("px",
""));return a};this.Oc=function(c){return document.body.getBoundingClientRect&&(c=c.getBoundingClientRect())?{c:c.right-c.left,a:c.bottom-c.top}:i};this.Z=function(c){try{var h;if(window.getComputedStyle&&(h=window.getComputedStyle(c))&&h.width&&h.height)return{c:h.width.replace("px",""),a:h.height.replace("px","")}}catch(a){}return i};this.browserDetect={init:function(){this.browser=this.Ob(this.zc)||"An unknown browser";this.version=this.Pb(this.Xc())||this.Pb(navigator.appVersion)||"an unknown version";
this.Ob(this.Ac);return{browser:this.browser,version:this.version}},Xc:function(){return navigator.userAgent},Ob:function(c){for(var h=0;h<c.length;h++){var a=c[h].s,b=c[h].od;this.$b=c[h].na||c[h].l;if(a){if(-1!=a.indexOf(c[h].t))return c[h].l}else if(b)return c[h].l}},Pb:function(c){var h=c.indexOf(this.$b);if(-1!=h)return parseFloat(c.substring(h+this.$b.length+1))},zc:[{s:navigator.userAgent,t:"Chrome",l:"Chrome"},{s:navigator.userAgent,t:"OmniWeb",na:"OmniWeb/",l:"OmniWeb"},{s:navigator.vendor,
t:"Apple",l:"Safari",na:"Version"},{od:window.opera,l:"Opera",na:"Version"},{s:navigator.vendor,t:"iCab",l:"iCab"},{s:navigator.vendor,t:"KDE",l:"Konqueror"},{s:navigator.userAgent,t:"Firefox",l:"Firefox"},{s:navigator.vendor,t:"Camino",l:"Camino"},{s:navigator.userAgent,t:"Netscape",l:"Netscape"},{s:navigator.userAgent,t:"MSIE",l:"Explorer",na:"MSIE"},{s:navigator.userAgent,t:"Gecko",l:"Mozilla",na:"rv"},{s:navigator.userAgent,t:"Mozilla",l:"Netscape",na:"Mozilla"}],Ac:[{s:navigator.platform,t:"Win",
l:"Windows"},{s:navigator.platform,t:"Mac",l:"Mac"},{s:navigator.userAgent,t:"iPhone",l:"iPhone/iPod"},{s:navigator.platform,t:"Linux",l:"Linux"}]};this.Fc=function(c){return c.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")};this.ha=function(c){return c.document.documentElement.clientHeight?c.document.documentElement:c.document.body};this.Bb=function(c,h){var a=0,b=k;if(c.document.all)for(var f=0;f<c.document.all.length;f++)"BODY"==c.document.all[f].nodeName&&(b=d),b&&("width"==h?c.document.all[f].width>
a&&(a=c.document.all[f].width):c.document.all[f].height>a&&(a=c.document.all[f].height));return a};this.Jb=function(c,h){for(var a=this.ha(c),b=c.innerWidth||a.clientWidth||this.Bb(c,"width"),a=c.innerHeight||a.clientHeight||this.Bb(c,"height"),f=h.length,j=0,m=0;m<f;m++)if(15>=Math.abs(b-h[m].c)){j=h[m].a.length;for(b=0;b<j;b++)if(15>=Math.abs(a-h[m].a[b]))return d;break}return k};this.Id=function(c){for(var h=[],a=-1;h[++a]=c[a];);h.length--;return h};this.xa=function(c,h,a,b){var f=c.getElementsByTagName("*"),
f=this.Id(f);f.unshift(c);for(var j=["EMBED","IFRAME","OBJECT","IMG"],c=[],m=0;m<f.length;m++){var o=f[m];if(-1!=j.indexOf(o.nodeName)){var g=b(o);g&&c.push({xb:g.c*g.a,c:g.c,a:g.a,type:o.nodeName||"other",Ec:o})}}c=c.sort(function(a,g){return g.xb-a.xb||j.indexOf(g.type)-j.indexOf(a.type)});return 0<c.length&&c[0].c>h&&c[0].a>a?c[0].Ec:i};this.bd=function(c,h){if(!c)return k;for(h||(h=window);c!=h.document&&c.parentNode;)c=c.parentNode;return c==h.document};this.fb=function(c,h){var a=h.parent,b=
{left:0,right:0,top:0,bottom:0};if(c){var f=c.getBoundingClientRect();h!=a&&this.Ua(h,a)&&(b=this.fb(h.frameElement,a));b={left:f.left+b.left,right:f.right+b.left,top:f.top+b.top,bottom:f.bottom+b.top}}return b};this.Ua=function(c,h){var a=k;if(c==h)a=d;else try{c.document.domain==h.document.domain&&(a=d)}catch(b){}return a};this.pb=function(c,h){var a=h.parent,b={c:0,a:0,left:0,right:0,top:0,bottom:0};if(c&&(b=this.fb(c,h),b.c=b.right-b.left,b.a=b.bottom-b.top,h!=a&&this.Ua(h,a)))a=this.pb(h.frameElement,
a),a.bottom<b.bottom&&(a.bottom<b.top&&(b.top=a.bottom),b.bottom=a.bottom),a.right<b.right&&(a.right<b.left&&(b.left=a.right),b.right=a.right),b.c=b.right-b.left,b.a=b.bottom-b.top;return b};this.Ba=function(c,h){return function(){return c.apply(h,arguments)}}};function V(c,h,a,b,f,j){this.G=new O;this.window=c;this.d=h;this.Q=a;this.j=b;this.Y=f;this.T=j;this.M={qc:1,rc:2,kc:4,Sa:8,jc:16,Ta:32,pc:64};this.kb=function(a,b,g,n){if(n&&(n.insertBefore&&n.firstChild)&&(a=this.window.document.createElement(a))){for(var e in b)a[e]=b[e];for(e in g)a.style[e]=g[e];n.insertBefore(a,n.firstChild);return a}return i};this.eb=function(a,b,g){var n=b.z,b=b.u,e=0,f=0,c=a.right-a.left,j=a.bottom-a.top;if(0>a.bottom||0>a.right||a.top>b||a.left>n||0>=c||0>=j)return 0;0>
a.top?Math.abs(a.top)>=j?e=j:(e=j+a.top,e>b&&(e=b)):e=a.top+j>b?b-a.top:j;0>a.left?Math.abs(a.left)>=c?f=c:(f=c+a.left,f>n&&(f=n)):f=a.left+c>n?n-a.left:c;return Math.round(100*f*e/(c*j)*(g?c*j/((g.right-g.left)*(g.bottom-g.top)):1))};this.bb=function(a,b){try{var g={x:a.offsetLeft,y:a.offsetTop};if(a.offsetParent){var n=this.bb(a.offsetParent,b);g.x+=n.x;g.y+=n.y}else b!=b.parent&&this.G.Ua(b,b.parent)&&(n=this.bb(b.frameElement,b.parent),g.x+=n.x,g.y+=n.y);return g}catch(e){return{x:i,y:i}}};this.ja=
function(a){if(this.Q)if("Firefox"==this.j.browser)this.ja=function(){var a=8==screen.top-this.window.screenY&&8==screen.left-this.window.screenX,g=a?0:this.window.screenX-screen.left,a=a?0:this.window.screenY-screen.top,b={z:i,u:i,v:i,w:i,k:k};b.z=this.window.outerWidth;b.u=this.window.outerHeight-this.Y[this.j.browser].wa;b.v=g;b.w=a+this.Y[this.j.browser].wa;b.k=d;return b};else if("Explorer"==this.j.browser&&/[6-9]|[10]/.test(this.j.version)){var b=this.kb("iframe",{name:"dv_ie9onload",src:"",
width:0,height:0,Hc:0,jd:"0",kd:"0"},{display:"inline",position:"absolute",top:0,left:0,Kd:"none",zIndex:0,border:0},this.window.document.body),g=this.kb("iframe",{name:"dv_ie9onmousemove",src:"",width:0,height:0,Hc:0,jd:"0",kd:"0"},{display:"inline",position:"absolute",top:0,left:0,Kd:"none",zIndex:0,border:0},this.window.document.body),n=g.contentWindow||g.window||g.contentDocument.window||g.contentWindow.window||this.window.Md,e=b.contentDocument||b.contentWindow.document,b=g.contentDocument||
g.contentWindow.document,f="<html><head><script >window.onload = "+function(a){a&&(window.event=a);isFinite(""+window.event.clientY)&&(parent.sa={Xa:window.event.clientY,Wa:window.event.clientX,ec:window.event.screenY-window.event.clientY-window.screenY})}.toString()+"; <\/script></head><body></body></html>",g='<html><head></head><body><script > function runMoM(){ window.document.body.fireEvent("onmousemove");} window.document.body.onmousemove = '+function(a){a&&(window.event=a);isFinite(""+window.event.clientY)&&
(parent.R={Xa:window.event.clientY,Wa:window.event.clientX,ca:window.event.screenY-window.event.y,ba:window.event.screenX-window.event.x})}.toString()+"; runMoM();<\/script></body></html>";b.open("text/html","replace");b.write(g);b.close();e.open("text/html","replace");e.write(f);e.close();("CSS1Compat"===document.compatMode?this.window.document.documentElement:this.window.document.body).clientLeft;this.ja=function(){n.runMoM();e.open("text/html","replace");e.write(f);e.close();var a=this.window.R,
g=this.window.sa,b=screen.availWidth,c=screen.availHeight,g=g?g.ec:this.Y[this.j.browser].wa;if(a){var j=a.ba,h=a.ca;a.ba>=b&&(a.ba-=b);a.ca>=c&&(a.ca-=c);var m={z:i,u:i,v:i,w:i,k:k};m.z=this.window.outerWidth?this.window.outerWidth-20:b-a.ba-20;m.u=this.window.outerHeight?this.window.outerHeight-g-10:c-a.ca-10;m.v=j;m.w=h;m.k=d}else m={z:i,u:i,v:i,w:i,k:k},m.z=this.window.outerWidth?this.window.outerWidth-20:b-20,m.u=this.window.outerHeight?this.window.outerHeight-g-10:c-10,m.v=i,m.w=i,m.k=k;return m}}else this.ja=
"Chrome"==this.j.browser?function(){var a={z:i,u:i,v:i,w:i,k:k},g=k;try{a.z=this.window.frameElement.offsetParent.parentNode.clientWidth,a.u=this.window.frameElement.offsetParent.parentNode.clientHeight,g=d}catch(b){}a.v=this.window.screenX;a.w=this.window.screenY;a.k=g;return a}:function(){return{z:i,u:i,v:i,w:i,k:k}};else this.ja=function(){var a,g,b=this.window.top;void 0!=b.mozInnerScreenX&&b.mozInnerScreenX!=i?(a=b.mozInnerScreenX,g=b.mozInnerScreenY):void 0!=b.screenX&&b.screenX!=i?(0==b.screenLeft+
8||b.screenLeft+8==screen.width)&&(0==b.screenTop+8||b.screenTop+8==screen.height)?(a=b.screenLeft+8,g=b.screenTop+(b.outerHeight-b.innerHeight)+8):(a=b.screenLeft,g=b.screenTop+(b.outerHeight-b.innerHeight)):(a=b.screenLeft,g=b.screenTop);var e={z:i,u:i,v:i,w:i,k:k},n=this.G.ha(b);e.z=b.innerWidth||n.clientWidth;e.u=b.innerHeight||n.clientHeight;e.v=a;e.w=g;e.k=d;return e};return this.ja(a)};this.cb=function(a,b){this.cb=this.Q?"Firefox"==this.j.browser?function(){var a=this.window.screenX,b=this.window.screenY,
e=this.window.mozInnerScreenX-a,f=this.window.mozInnerScreenY-b-this.Y[this.j.browser].wa,e={left:e,top:f,right:e+this.window.innerWidth,bottom:f+this.window.innerHeight},f={F:i,A:i,q:i,r:i,C:i,D:i,p:i,m:i,k:k,rect:i,H:i,va:i};f.F=e.left;f.A=e.top;f.q=i;f.r=i;f.C=a+e.left;f.D=b+e.top;f.p=this.window.innerWidth;f.m=this.window.innerHeight;f.k=d;f.rect=e;return f}:"Explorer"==this.j.browser&&/[6-9]|[10]/.test(this.j.version)?function(){if(8==document.documentMode)return{F:i,A:i,q:i,r:i,C:i,D:i,p:i,
m:i,k:k,rect:i,H:i,va:i};var a=this.window.sa&&this.window.R?this.window.sa.Xa-this.window.R.Xa:0,b=this.window.sa&&this.window.R?this.window.sa.Wa-this.window.R.Wa:0,e=this.G.ha(this.window),f={F:i,A:i,q:i,r:i,C:i,D:i,p:i,m:i,k:k,rect:i,H:i,va:i};f.F=b;f.A=a;f.q=i;f.r=i;f.C=this.window.R?b+this.window.R.ba:i;f.D=this.window.R?a+this.window.R.ca:i;f.p=this.window.innerWidth||e.clientWidth;f.m=this.window.innerHeight||e.clientHeight;f.k=d;f.rect={left:b,top:a,right:b+(this.window.innerWidth||e.clientWidth),
bottom:a+(this.window.innerHeight||e.clientHeight)};return f}:"Chrome"==this.j.browser?function(){var a=i,b=i,e=k;try{var f=this.window.frameElement.offsetTop,a=this.window.frameElement.offsetLeft-this.window.frameElement.offsetParent.scrollLeft,b=f-this.window.frameElement.offsetParent.scrollTop,e=d}catch(c){}f={F:i,A:i,q:i,r:i,C:i,D:i,p:i,m:i,k:k,rect:i,H:i,va:i};f.F=a;f.A=b;f.q=i;f.r=i;f.C=i;f.D=i;f.p=this.window.innerWidth;f.m=this.window.innerHeight;f.k=e;f.rect=e?{left:a,top:b,right:a+this.window.innerWidth,
bottom:b+this.window.innerHeight}:i;return f}:function(){return{F:i,A:i,q:i,r:i,C:i,D:i,p:i,m:i,k:k,rect:i,H:i,va:i}}:function(a){var b=this.bb(this.d,this.window),e={F:i,A:i,q:i,r:i,C:i,D:i,p:i,m:i,k:k,rect:i,H:i,va:i},f=this.G.fb(this.d,this.window),c=this.G.pb(this.d,this.window);e.F=c.left;e.A=c.top;e.q=b.x;e.r=b.y;e.C=a.v+c.left;e.D=a.w+c.top;e.p=c.c;e.m=c.a;e.k=d;e.rect=f;e.H=c;return e};return this.cb(a,b)};this.Uc=function(){return{Ia:screen.availWidth||screen.width,Ha:screen.availHeight||
screen.height}};this.Kc=function(){var a=this.Uc(),b=this.ja(a),g=this.cb(b,a);return{J:b,e:g,ta:a,Na:(b.v==i||b.w==i?0:this.M.qc)|(b.z==i||b.u==i?0:this.M.rc)|(g.F==i||g.A==i?0:this.M.kc)|(g.q==i||g.r==i?0:this.M.Sa)|(g.C==i||g.D==i?0:this.M.jc)|(g.m==i||g.p==i?0:this.M.Ta)|(a.Ha==i||a.Ia==i?0:this.M.pc)}};this.Pc=function(){if(this.d!=i)if(this.G.bd(this.d,this.window))try{var a={timeStamp:new Date,g:-3,da:-3,B:i};if(!this.T())return a;var b=this.Kc();if(!b.e.k||!b.J.k)return a.B=b,a;if(b.e&&b.e.H&&
(0===b.e.H.c||1===b.e.H.c||0===b.e.H.a||1===b.e.H.a))return{timeStamp:new Date,g:-5,da:-5,B:b};var g=b.e.H?this.eb(b.e.H,b.J,b.e.rect):this.eb(b.e.rect,b.J);return{timeStamp:new Date,g:g,da:g,B:b}}catch(f){return{timeStamp:new Date,g:-4,da:-4,B:i}}else return{timeStamp:new Date,g:-2,da:-2,B:i};else return{timeStamp:new Date,g:-1,da:-1,B:i}};this.Lc=function(a,b){var g=i,f=i;if(a.B!=i){var e=a.B.e;b<=this.Y.md&&(g=0<=a.g||-5==a.g?50<=a.g?d:k:i,f=g==k?0>e.A+e.m/2?d:k:g==d?k:i)}return{Hb:f,Ib:g}};this.Fa=
function(a){var b=i;if(a.B!=i){var g=a.B.Na,f=a.B.e;(g&this.M.Sa)==this.M.Sa&&(g&this.M.Ta)==this.M.Ta&&(b={left:f.q,top:f.r,right:f.q+f.p,bottom:f.r+f.m},b=0<=a.g?50<=this.eb(b,a.B.J,f.rect)?k:d:i)}return b}};function W(c,h,a,b){var f=new O,j="Microsoft Internet Explorer"==navigator.appName;this.b=b;this.window=a;this.Oa=[["DCF",'"'],[";",";"],["%3B","%3B"],["zoneid=","_"],["zoneid%3D","_"],["PRImpID=",""],["PRImpID%3D",""],["PRPID=",""],["PRPID%3D",""]];this.Nb=[j==d?"object":"embed",j==d?"embed":"object","href","img","span","iframe","frameElement"];this.La=this.d=i;this.f=c;this.Aa=h;this.h={i:{a:1,c:1},Ld:{a:10,c:10},ld:10};this.searchByAdSrvId_8=function(a,b){var e=/[0-9]+-[0-9]+-[0-9]+-[0-9]+/.exec(a);
return e!=i&&(e=e.toString(),e.replace(RegExp("-","g"),"")==b)?d:k};this.$a=this["searchByAdSrvId_"+(this.f?this.f.wb||"":"")];this.span=function(){if(!(1>this.f.K.length))for(var a=this.window.document.getElementsByTagName("span"),b=a.length,e=0;e<b;e++)if(a[e].id==this.f.K&&!this.$(a[e])){var c=f.Ba(f.S,f);if(this.d=f.xa(a[e],this.h.i.c,this.h.i.a,c)){this.n(this.d);this.n(a[e]);break}else if(c=f.Ba(f.Z,f),this.d=f.xa(a[e],this.h.i.c,this.h.i.a,c)){this.n(this.d);this.n(a[e]);break}}};this.object=
function(){for(var a=this.window.document.getElementsByTagName("object"),b=a.length,e=0;e<b;e++)if(this.pa(this.f,a[e])&&!this.$(a[e])){var c=f.Ba(f.S,f);if(this.d=f.xa(a[e],this.h.i.c,this.h.i.a,c)){this.n(this.d);this.n(a[e]);break}else if(c=f.Ba(f.Z,f),this.d=f.xa(a[e],this.h.i.c,this.h.i.a,c)){this.n(this.d);this.n(a[e]);break}}};this.embed=function(){for(var a=this.window.document.getElementsByTagName("embed"),b=a.length,e=0;e<b;e++)if(this.pa(this.f,a[e])&&!this.$(a[e])){var c=f.S(a[e]);if(c&&
c.a>this.h.i.a&&c.c>this.h.i.c){this.d=a[e];this.n(a[e]);break}else if((c=f.Z(a[e]))&&c.a>this.h.i.a&&c.c>this.h.i.c){this.d=a[e];this.n(a[e]);break}}};this.href=function(){for(var a=this.window.document.getElementsByTagName("a"),b=a.length,e=0;e<b;e++)if(this.pa(this.f,a[e])&&!this.$(a[e])){var c=a[e].getElementsByTagName("img");if(0<c.length){var j=f.S(c[0]);if(j&&j.a>this.h.i.a&&j.c>this.h.i.c){this.d=c[0];this.n(a[e]);break}else if((j=f.Z(c[0]))&&j.a>this.h.i.a&&j.c>this.h.i.c){this.d=c[0];this.n(a[e]);
break}}}};this.img=function(){for(var a=this.window.document.getElementsByTagName("img"),b=a.length,e=0;e<b;e++)if(this.pa(this.f,a[e])&&0>a[e].src.indexOf("visitinview")&&!this.$(a[e])){var c=f.S(a[e]);if(c&&c.a>this.h.i.a&&c.c>this.h.i.c){this.d=a[e];this.n(a[e]);break}else if((c=f.Z(a[e]))&&c.a>this.h.i.a&&c.c>this.h.i.c){this.d=a[e];this.n(a[e]);break}}};this.iframe=function(){for(var a=this.window.document.getElementsByTagName("iframe"),b=a.length,e=0;e<b&&!this.tb(a[e]);e++);};this.frameElement=
function(a){a&&this.tb(this.window.frameElement)};this.tb=function(a){return this.pa(this.f,a)?this.sc(a):k};this.n=function(a){if(a){var b=this.window.document.createAttribute("dv_value");b.value="iv_elm";a.setAttributeNode(b)}};this.$=function(a){return a&&a.getAttribute("dv_value")?d:k};this.sc=function(a){if(a&&!this.$(a)){var b=f.S(a);if(b&&b.a>this.h.i.a&&b.c>this.h.i.c||(b=f.Z(a))&&b.a>this.h.i.a&&b.c>this.h.i.c)return this.d=a,this.n(a),d}return k};this.pa=function(a,b){var e=i;return a.K&&
0<a.K.length&&(e=this.mc(a,b))||!this.d&&(e=this.nc(a,b))?d:k};this.mc=function(a,b){var e=this.V(b.id,a.K);e||(e=this.V(b.src,a.K));e||(e=this.V(b.href,a.K));e||(e=this.V(b.getAttribute("flashvars"),a.K));e||(e=this.V(b.name,a.K));e||(e=this.V(b.innerHTML,a.K));e&&(e=this.lc(a,b));return e};this.nc=function(a,b){var e=this.aa(b.id,a);e||(e=this.aa(b.src,a));e||(e=this.aa(b.href,a));e||(e=this.aa(b.Nd,a));e||(e=this.aa(b.name,a));e||(e=this.aa(b.innerHTML,a));return e};this.aa=function(a,b){if(!a)return k;
for(var a=a.toLowerCase(),e=0;e<this.Oa.length;e++){var f;if(b.vb&&(f=(this.Oa[e][0]+b.vb).toLowerCase(),f=a.indexOf(f),-1<f)||b.Lb&&(f=(this.Oa[e][0]+b.Lb).toLowerCase(),f=a.indexOf(f),-1<f))return d}return k};this.lc=function(a,b){return a.za==i||""==a.za?k:this.V(this.hc(b),a.za)};this.hc=function(a){if(a.outerHTML)return a.outerHTML;for(var b=a.attributes.length,f="",c=0;c<b;c++)f=f+a.attributes[c].nodeName+"="+a.attributes[c].nodeValue+" ";return f+a.innerHTML};this.V=function(a,b){return!a||
!b||5>b.length?k:RegExp(f.Fc(b)).exec(a)!=i?d:this.$a&&"function"===typeof this.$a?this.$a(a,b):k};this.Ic=function(a){if(this.Sc(a))return this.b.bc(),this.d;a=this.Tc();a.O&&(this.b.ac(a.ga),this.d=a.O);return this.d};this.Sc=function(a){for(var b=this.Nb.length,f=0;f<b;f++)if(this[this.Nb[f]](a),this.d){this.La=this.d;break}return this.d};var m=[],o=["object","embed","img","iframe"];this.fd=function(a){return this.gd(f.S(a))};this.gd=function(a){if(a)for(var b=a.c,a=a.a,f=h.length,c=0,j=0;j<f;j++)if(15>=
Math.abs(b-h[j].c)){c=h[j].a.length;for(b=0;b<c;b++)if(15>=Math.abs(a-h[j].a[b]))return d;break}return k};this.Tc=function(){var a;a:{a=(window.name||(window.frameElement?window.frameElement.id:"")).substr(7);for(var b=window.parent.document.getElementsByTagName("script"),f=b.length,c=0;c<f;c++)if(b[c].id&&b[c].id.substr(7)==a){a=b[c];break a}a=i}return this.wc(a)};this.wc=function(a){for(var b={O:a,ga:0},a=[];b||0<a.length;){try{var f;a:{try{if(-1!=o.indexOf(b.O.nodeName.toLowerCase())){f=d;break a}}catch(c){}f=
k}if(f&&this.fd(b.O)&&!this.$(b.O))return this.n(b.O),b;if(b.ga<=this.h.ld){var j,h=b.O,G=b.ga,b=[],y=h.parentNode;y&&-1==m.indexOf(y)&&(m.push(y),b.push({O:y,ga:G+1}));if(h.hasChildNodes())for(var p=0;p<h.childNodes.length;p++)h.childNodes[p]&&(-1==m.indexOf(h.childNodes[p])&&1===h.childNodes[p].nodeType)&&(m.push(h.childNodes[p]),b.push({O:h.childNodes[p],ga:G+1}));var t,z=h,H=[],l=i;z&&z.parentNode&&(l=z.parentNode.firstChild);for(;l;)1===l.nodeType&&l!==z&&H.push(l),l=l.nextElementSibling||l.nextSibling;
t=H;for(p=0;p<t.length;p++)t[p]&&(-1==m.indexOf(t[p])&&1===t[p].nodeType)&&(m.push(t[p]),b.push({O:t[p],ga:G+1}));if(j=b)for(b=0;b<j.length;b++)a.push(j[b])}}catch(A){}b=a.shift()}return{O:i}};return this};function dv_CustomClientViewAssureService(c){this.vc=dv_InViewService;this.vc(c);this.oa=this.window.dv_cvmSettings||window.dv_cvmSettings||c.cvmSettings;this.logEvents.iabCustom=6;this.Ca=0;var h=this.Ra;this.Ra=function(a){a=h(a);this.Jd(this.Yc(a));this.rb();return a};this.Yc=function(a){this.oa.focus||(a.g=a.da);return a};this.Jd=function(a){"consecutive"==(""+this.oa.measureType).toLowerCase()&&a.g<this.oa.adArea?this.Ca=0:a.g>=this.oa.adArea&&(this.Ca+=this.fa.interval)};this.rb=function(){this.oc(this.oa.duration)&&
(this.I.P(this.b.N(this.logEvents.iabCustom),this.logEvents.iabCustom),this.rb=r())};this.oc=function(a){return this.Ca>=a?d:k}};function dv_InViewService(c){this.Kb=10;this.Ya=c.serverSettings&&c.serverSettings.jsVersion?c.serverSettings.jsVersion:"4652";this._minor_version="41.825.35262";this.G=new O;this.Zc=function(){for(var a=document.getElementsByTagName("script"),b=a.length,f,c=0;c<b;c++)if(f=a[c].src,/visit[.]js/.test(f))return f.substring(f.indexOf("?")+1)};this.Eb=function(){return((new Date).getTime()+""+Math.floor(1E6*Math.random())).substr(0,16)};this.cd=function(){var a=k;try{a=parent.window.top==parent.window?
k:d}catch(b){a=d}return a};this.dd=function(){var a=k;try{this.Q&&parent.window.top.document.domain==parent.window.document.domain&&(a=d,this.Q=k)}catch(b){a=k}return a};this.ka=function(a,b){var a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),f=RegExp("[\\?&]"+a+"=([^&#]*)").exec(b);return f=f?f[1]:i};this.Wc=function(){var a=this.ka("uid",this.o);a==i?(a=this.Eb(),this.o=this.o+"&uid="+a):""==a&&(a=this.Eb(),this.o=this.o.replace("&uid=","&uid="+a));return a};this.kb=function(a,b,f,c){if(c&&(c.insertBefore&&
c.firstChild)&&(a=this.window.document.createElement(a))){for(var h in b)a[h]=b[h];for(h in f)a.style[h]=f[h];c.insertBefore(a,c.firstChild);return a}return i};this.Q=this.cd();this.Ga=this.dd();this.j=this.G.browserDetect.init();this.ib="default";this.f=c;this.window=parent.window||window;this.La=this.d=i;this.ob=this.ra=k;this.gb=d;this.interval=this.nb=i;this.o=this.Zc();this.pd=c.serverSettings&&c.serverSettings.protocol&&0==c.serverSettings.protocol.indexOf("http")?c.serverSettings.protocol:
"http://";this.fa=window.Dc||this.window.Dc||{interval:500,hb:{"default":{time:i,Gc:["beforeunload","unload"],Xb:9E5}}};this.Mb={};c="tps300.doubleverify.com";try{window.$dv.tags[window.$uid].ServerPublicDns&&(c=window.$dv.tags[window.$uid].ServerPublicDns)}catch(h){}this.L=window.dv_configServer||this.window.dv_configServer||{protocol:this.pd,port:"",domain:c,api:"event.jpg"};this.X=window.Cc||this.window.Cc||{interval:1E3,la:6};this.Y={Firefox:{wa:115},Explorer:{wa:55},md:500};this.Aa=window.dv_configAdSize||
this.window.dv_configAdSize||[{c:300,a:[100,250,600,850,1050]},{c:160,a:[600,800]},{c:120,a:[60,90,240,600,800]},{c:970,a:[90,250]},{c:728,a:[90,120]},{c:88,a:[31]},{c:250,a:[60,250,300]},{c:180,a:[150,160,600]},{c:234,a:[60]},{c:468,a:[60]},{c:550,a:[480]},{c:125,a:[125]},{c:336,a:[280,600,850]},{c:745,a:[90]},{c:954,a:[60]}];this.Gb=this.Wc();this.ab=k;this.Pa=function(a,b){this.window.zb||(this.window.zb=[]);this.window.zb.push({caller:a,Od:b})};this.startTime=(new Date).getTime();this.tc=4;this.qb=
0;this.T=d;this.logEvents={startMeasure:1,nonMeasurable:2,beforeunload:4,unload:8,errorlevel1:16,interval:32,timeout:3,iabViewable:5};this.Ab=k;this.Yb=function(){this.window.dv_logObject&&(this.window.dv_logObject[this.Gb]=this.b.Mc())};this.Ma=function(a){this.Ma=this.ab?function(a){this.b.Tb(a);this.Yb()}:function(a){this.b.Tb(a)};this.Ma(a)};this.mb=function(a,b){this.mb=this.ab?function(a,b){this.b.Rb(a,b);this.Yb()}:function(a,b){this.b.Rb(a,b)};this.mb(a,b)};this.jb=function(){this.d=this.ub.Ic(this.Ga);
this.La=this.ub.La;this.d?(this.sd(),this.b.qd(this.d)):0<this.X.la?(this.X.la--,this.td(),setTimeout(this.Jc(),this.X.interval)):this.Q&&this.G.Jb(this.window,this.Aa)?(this.d=this.G.ha(this.window),this.b.Qb()):this.Ga&&this.G.Jb(this.window,this.Aa)?(this.d=this.G.ha(window.parent),this.b.Qb(),this.yc()):this.X.la=-1};this.yc=function(){for(var a=this.window;a.parent!=a.top;)a=a.parent;for(var b=a.parent.document.getElementsByTagName("iframe"),f=b.length,c=0;c<f;c++)b[c].contentWindow==a&&(this.d=
b[c],this.window=a.parent)};this.td=function(){this.f.K&&this.f.za?this.b.xd():this.b.yd()};this.sd=function(){this.ra=d;this.b.ud()};this.uc=function(){this.f.wb=this.ka("adsrv",this.o)||"";this.f.K=this.ka("btreg",this.o)||"";this.f.Lb=this.ka("plcid",this.o)||"";"8"==this.f.wb&&""==this.f.btreg&&(this.f.K=this.f.plcid);this.f.za=this.ka("btadsrv",this.o)||"";this.f.vb=this.ka("adid",this.o)||""};this.zd=function(){this.Q?this.b.Sb():this.Ga?this.b.Gd():this.b.Ed()};this.dc=function(){this.f.serverSettings&&
this.f.serverSettings.templateVersion&&(this.o+="&dvp_templateVersion="+this.f.serverSettings.templateVersion)};this.cc=function(){this.f.serverSettings&&this.f.serverSettings.TKH&&(this.o+="&TKH="+this.f.serverSettings.TKH);this.dc()};this.Bc=function(){Array.prototype.indexOf=function(a){if(this==i)throw new TypeError;var b=Object(this),f=b.length>>>0;if(0===f)return-1;var c=0;1<arguments.length&&(c=Number(arguments[1]),c!=c?c=0:0!=c&&(Infinity!=c&&-Infinity!=c)&&(c=(0<c||-1)*Math.floor(Math.abs(c))));
if(c>=f)return-1;for(c=0<=c?c:Math.max(f-Math.abs(c),0);c<f;c++)if(c in b&&b[c]===a)return c;return-1}};this.inViewManager=function(){try{Array.prototype.indexOf||this.Bc();var a=this.L.protocol+this.L.domain+this.L.port+"/"+this.L.api;this.cc();this.b=new K(this.Ya,this.o,a);this.I=new U(this.window,this.Gb);this.ab=this.window.dv_logObject?d:k;this.zd();this.Cd()?(this.b.Vb(),this.Qa()):("Explorer"==this.j.browser&&!this.Q&&this.Hd(),this.uc(),this.ub=new W(this.f,this.Aa,this.window,this.b),this.jb(),
this.U=new V(this.xc?this.xc:this.window,this.d,this.Q,this.j,this.Y,this.b.ea),this.start())}catch(b){var c=this;this.qa(function(){c.Pa("inViewManager",b);c.b.lb("inViewManager: "+b.message);c.I.P(c.b.N(c.logEvents.errorlevel1),c.logEvents.errorlevel1)},"inViewManager",b)}};this.ya=function(a){if(-3==a.g||-5!=a.g&&0>a.g&&-1==this.X.la)this.Qa(),this.ya=r()};this.Qa=function(){this.I.P(this.b.N(this.logEvents.nonMeasurable),this.logEvents.nonMeasurable);this.Qa=r()};this.Va=function(a){if(0<=a.g||
-5==a.g&&-1>=this.X.la)window.$dv&&window.$uid?(a=window.$dv.pubSub.publish("MeasurementCapabilityDetected",window.$uid)||"",a="&tagServiceResult="+encodeURIComponent(a),this.I.P(this.b.N(this.logEvents.startMeasure)+a,this.logEvents.startMeasure)):this.I.P(this.b.N(this.logEvents.startMeasure),this.logEvents.startMeasure),this.Ab=d,this.Va=r(),this.ya=r()};this.sb=function(){if(this.b.Rc()){if(window.$dv&&window.$uid){var a=window.$dv.pubSub.publish("IabView",window.$uid)||"",a="&tagServiceResult="+
encodeURIComponent(a);this.I.P(this.b.N(this.logEvents.iabViewable)+a,this.logEvents.iabViewable)}else this.I.P(this.b.N(this.logEvents.iabViewable),this.logEvents.iabViewable);this.sb=r()}};this.hasFocus=function(){this.hasFocus=this.window.document.hasFocus&&"Explorer"==this.j.browser&&"8"==this.j.version?function(){return this.window.document.hasFocus()}:function(){return d};return this.hasFocus()};this.Fb=function(a,b){var c=a.U.Pc();if(this.d!=i&&-3!=c.g&&(!b||!a.hasFocus()))c.g=0;return c};
this.Ra=function(a){a.U.d=a.d;a.U.window=a.window;var b=a.Fb(a,a.gb);if(a.ra&&(-1==b||-2==b))a.ra=k,a.jb();-5==b.g&&(this.X.la--,this.b.Ub(),this.ma||(this.ma=function(b){a.b.ua(a.U.Fa(b))}));this.ma&&0<b.g&&(this.ma(b),this.ma=i);a.ra&&!this.ob&&(this.ob=d,a.b.ua(a.U.Fa(b)));a.mb(b,a.fa.interval);a.Ma(b);a.ya(b);a.Va(b);a.sb();return b};this.Qc=function(){var a=this;return function(){try{a.Ra(a)}catch(b){a.qa(function(){a.qb<a.tc&&(a.qb++,a.Pa("getIntervalCallback",b),a.b.lb("getIntervalCallback: "+
b.message),a.I.P(a.b.N(a.logEvents.errorlevel1),a.logEvents.errorlevel1))},"getIntervalCallback",b)}}};this.Db=function(a){var b=this;return function(){b.qa(function(){"Explorer"==b.j.browser?b.I.P(b.b.N(b.logEvents[a]),b.logEvents[a]):b.I.Zb(b.b.N(b.logEvents[a]),b.logEvents[a])},"getReportEventCallback")}};this.Jc=function(){var a=this;return function(){a.qa(function(){a.jb();a.d||a.b.Ja()},"getAdLocateCallback")}};this.ia=function(){var a=this;return function(b){try{b||(b=a.window.event),a.gb=
"blur"==b.type||"focusout"==b.type?k:a.nb?a.window.document[a.nb]?k:d:d}catch(c){try{var h=this.L.protocol+this.L.domain+this.L.port+"/"+this.L.api+"?"+this.o+"&ctime="+(new Date).getTime()+"&evid="+this.logEvents.errorlevel1+"&jsver="+this.Ya+"&napr="+(callerName||"unknown caller")+": "+c.message;(new Image).src=h}catch(m){}}}};this.Hd=function(){try{this.hd()&&this.b.Bd(),this.ad()&&this.b.Ad()}catch(a){}};this.hd=function(){return 180>this.window.screenTop&&(15>this.window.screenLeft||this.window.screen.availWidth==
this.window.screenLeft)?d:k};this.ad=function(){var a=this.G.ha(this.window),b=Math.abs((this.window.innerHeight||a.clientHeight)+this.window.screenTop-this.window.screen.availHeight);return 40>Math.abs((this.window.innerWidth||a.clientWidth)+this.window.screenLeft-(this.window.screenLeft>this.window.screen.availWidth?this.window.screenLeft-this.window.screenLeft:0)-screen.availWidth)&&50>b?d:k};this.ic=function(){try{if(window.$dv&&window.$uid&&window.$dv.tags[window.$uid]){var a=this;window.$dv.tags[window.$uid].getViewabilityData=
function(){try{for(var b=a.b.Nc().slice(0),c=0;c<b.length;c++)void 0===b[c]||b[c]===i?b[c]=0:isNaN(b[c])||(b[c]/=1E3);var h={};h.bucket_0=b[0];h.bucket_1_9=b[1];h.bucket_100=b[11];for(c=2;10>=c;c++)h["bucket_"+(10*(c-1)).toString()+"_"+(10*c-1).toString()]=b[c];return{buckets:h,isAdMeasureable:a.Ab,totalPageTime:(a.b.Ea()-a.b.Vc())/1E3,notApplicableTime:a.b.Cb()/1E3}}catch(o){return{}}}}}catch(b){}};this.ic();this.start=function(){this.nd(this);this.interval=setInterval(this.Qc(),this.fa.interval);
var a=this.fa.hb[this.ib].Gc;if(a)for(var b=a.length,c=0;c<b;c++)this.Mb[a[c]]=this.Db(a[c]),this.W(this.window,a[c],this.Mb[a[c]]);this.Fd();this.fa.hb[this.ib].Xb&&setTimeout(this.rd(),this.fa.hb[this.ib].Xb)};this.rd=function(){var a=this;return function(){a.Db("timeout")();clearInterval(a.interval);a.I.Zb=r();a.I.P=r()}};this.nd=function(a){try{var b=a.Fb(a,a.gb);-5==b.g&&(this.b.Ub(),this.ma||(this.ma=function(b){a.b.ua(a.U.Fa(b))}));a.ra&&(this.ob=d,-5!=b.g?a.b.ua(a.U.Fa(b)):a.b.ua("true"));
a.b.wd(a.U.Lc(b,a.b.Cb()));a.b.Wb(b.g);a.Ma(b);a.ya(b);a.Va(b)}catch(c){a.qa(function(){a.Pa("onStartReport",c);a.b.lb("onStartReport: "+c.message);a.I.P(a.b.N(a.logEvents.errorlevel1),a.logEvents.errorlevel1)},"onStartReport",c)}};this.Fd=function(){this.W(this.window,"blur",this.ia());this.W(this.window,"focus",this.ia());this.W(this.window.document,"click",this.ia());this.W(this.window.document,"mousedown",this.ia());this.W(this.window.document,"mouseup",this.ia());this.$c()};this.$c=function(){var a=
i,b=i,c={hidden:"visibilitychange",mozHidden:"mozvisibilitychange",webkitHidden:"webkitvisibilitychange",msHidden:"msvisibilitychange",oHidden:"ovisibilitychange"};for(a in c)if(c.hasOwnProperty(a)&&a in document){b=c[a];break}b&&(this.nb=a,this.W(this.window.document,b,this.ia()))};this.W=function(){function a(b,c,h){a=b.addEventListener?function(a,b,c){a.addEventListener(b,c,k)}:b.attachEvent?function(a,b,c){a.attachEvent("on"+b,c)}:function(a,b,c){a["on"+b]=c};a(b,c,h)}return function(b,c,h){a(b,
c,h)}}();this.stop=r();this.Cd=function(){var a=/[6-9]|[10]/;this.Q?("Firefox"!=this.j.browser&&!("Explorer"==this.j.browser&&a.test(this.j.version))&&(this.b.Dd(),this.T=this.b.ea()),"Firefox"==this.j.browser&&"undefined"===typeof this.window.mozInnerScreenX&&(this.b.Ka(),this.T=this.b.ea()),this.Ga)?window.document.body.getBoundingClientRect||(this.b.Ka(),this.T=this.b.ea()):(this.b.Sb(),this.T=this.b.ea()):window.document.body.getBoundingClientRect||(this.b.Ka(),this.T=this.b.ea());return!this.T};
this.qa=function(a,b,c){try{a()}catch(h){try{if(0<this.Kb){this.Kb--;var m=this.L.protocol+this.L.domain+this.L.port+"/"+this.L.api+"?"+this.o+"&ctime="+(new Date).getTime()+"&evid="+this.logEvents.errorlevel1+"&jsver="+this.Ya+"&napr="+(b||"unknown caller")+": "+(c||h).message;(new Image).src=m}}catch(o){}}};return this}
try{window.dv_InViewService=dv_InViewService;dv_InViewService.prototype.inViewManager=dv_InViewService.prototype.inViewManager;var ViewAssureBootstrapper=function(c){c.cvmSettings?(new dv_CustomClientViewAssureService(c)).inViewManager():(new dv_InViewService(c)).inViewManager()};IVCallback(ViewAssureBootstrapper)}catch(X){};