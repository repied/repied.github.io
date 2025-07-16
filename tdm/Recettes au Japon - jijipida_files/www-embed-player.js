(function(){var k,n=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){a=a.split(".");b=b||n;for(var c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function t(){}
function aa(){throw Error("unimplemented abstract method");}
function ba(a){a.getInstance=function(){return a.Ja?a.Ja:a.Ja=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){return"array"==ca(a)}
function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function fa(a){return"function"==ca(a)}
function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ha(a){return a[ja]||(a[ja]=++ka)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return w.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function oa(a,b){for(var c in b)a[c]=b[c]}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.gc=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function pa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,pa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(pa,Error);pa.prototype.name="CustomError";var qa;function ra(a){return/^[\s\xa0]*$/.test(a)}
var sa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ta(a,b){return a<b?-1:a>b?1:0}
function ua(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var va=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},wa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=u(a)?a.split(""):a,l=0;l<d;l++)if(l in g){var h=g[l];
b.call(c,h,l,a)&&(e[f++]=h)}return e},xa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},ya=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function za(a,b){a:{for(var c=a.length,d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:u(a)?a.charAt(b):a[b]}
function Aa(a,b){return 0<=va(a,b)}
function Ca(a,b){b=va(a,b);0<=b&&Array.prototype.splice.call(a,b,1)}
function Da(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Ea(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Fa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ga(a,b,c,d){return Array.prototype.splice.apply(a,Ja(arguments,1))}
function Ja(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function Ka(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function La(a){var b=Ma,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Na(){var a=Oa,b;for(b in a)return!1;return!0}
function Pa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Qa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ra="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ra.length;f++)c=Ra[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var A;a:{var Ta=n.navigator;if(Ta){var Ua=Ta.userAgent;if(Ua){A=Ua;break a}}A=""}function B(a){return-1!=A.indexOf(a)}
;function Va(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function Wa(){this.b="";this.f=Xa}
Wa.prototype.va=!0;Wa.prototype.ua=function(){return this.b};
function Ya(a){return a instanceof Wa&&a.constructor===Wa&&a.f===Xa?a.b:"type_error:SafeUrl"}
var Za=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function $a(a){if(a instanceof Wa)return a;a=a.va?a.ua():String(a);Za.test(a)||(a="about:invalid#zClosurez");return ab(a)}
var Xa={};function ab(a){var b=new Wa;b.b=a;return b}
ab("about:blank");function bb(){this.b="";this.f=cb}
bb.prototype.va=!0;bb.prototype.ua=function(){return this.b};
var cb={};function db(){this.b=""}
db.prototype.va=!0;db.prototype.ua=function(){return this.b};
function eb(a){var b=new db;b.b=a;return b}
eb("<!DOCTYPE html>");eb("");eb("<br>");function fb(a,b){b=b instanceof Wa?b:$a(b);a.href=Ya(b)}
function gb(a,b){a.rel="stylesheet";a.href=b instanceof bb&&b.constructor===bb&&b.f===cb?b.b:"type_error:TrustedResourceUrl"}
;function hb(a,b,c){a&&(a.dataset?a.dataset[ib(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[ib(b)]:a.getAttribute("data-"+b):null}
function jb(a,b){a&&(a.dataset?delete a.dataset[ib(b)]:a.removeAttribute("data-"+b))}
var kb={};function ib(a){return kb[a]||(kb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function lb(a){n.setTimeout(function(){throw a;},0)}
var mb;
function nb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Ha;c.Ha=null;a()}};
return function(a){d.next={Ha:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function ob(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
ob.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function pb(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function qb(){this.f=this.b=null}
var sb=new ob(function(){return new rb},function(a){a.reset()},100);
qb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function rb(){this.next=this.scope=this.b=null}
rb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
rb.prototype.reset=function(){this.next=this.scope=this.b=null};function tb(a,b){ub||vb();wb||(ub(),wb=!0);var c=xb,d=sb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var ub;function vb(){var a=n.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);ub=function(){b.then(yb)}}else ub=function(){var a=yb;
!fa(n.setImmediate)||n.Window&&n.Window.prototype&&!B("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(mb||(mb=nb()),mb(a)):n.setImmediate(a)}}
var wb=!1,xb=new qb;function yb(){for(var a;a=xb.remove();){try{a.b.call(a.scope)}catch(b){lb(b)}pb(sb,a)}wb=!1}
;function D(){this.f=this.f;this.K=this.K}
D.prototype.f=!1;D.prototype.dispose=function(){this.f||(this.f=!0,this.A())};
function zb(a,b){a.f?p(void 0)?b.call(void 0):b():(a.K||(a.K=[]),a.K.push(p(void 0)?w(b,void 0):b))}
D.prototype.A=function(){if(this.K)for(;this.K.length;)this.K.shift()()};
function Ab(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Bb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?Bb.apply(null,d):Ab(d)}}
;function E(a){D.call(this);this.j=1;this.g=[];this.i=0;this.b=[];this.H={};this.w=!!a}
y(E,D);k=E.prototype;k.subscribe=function(a,b,c){var d=this.H[a];d||(d=this.H[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
k.unsubscribe=function(a,b,c){if(a=this.H[a]){var d=this.b;if(a=za(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.T(a)}return!1};
k.T=function(a){var b=this.b[a];if(b){var c=this.H[b];0!=this.i?(this.g.push(a),this.b[a+1]=t):(c&&Ca(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.N=function(a,b){var c=this.H[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];Cb(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.T(c)}}return 0!=e}return!1};
function Cb(a,b,c){tb(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.H[a];b&&(z(b,this.T,this),delete this.H[a])}else this.b.length=0,this.H={}};
k.ba=function(a){if(a){var b=this.H[a];return b?b.length:0}a=0;for(b in this.H)a+=this.ba(b);return a};
k.A=function(){E.B.A.call(this);this.clear();this.g.length=0};var Db=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Db,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var Eb=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",Eb,void 0);function Fb(a){Gb(Db,arguments)}
function F(a,b){return a in Db?Db[a]:b}
function G(a,b){fa(a)&&(a=Hb(a));return window.setTimeout(a,b)}
function Ib(a){window.clearTimeout(a)}
function Hb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Jb(b)}}:a}
function Jb(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=F("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),Fb("ERRORS",c))}
function Gb(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else for(c in b=b[0],b)a[c]=b[c]}
var Kb=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},Lb="Microsoft Internet Explorer"==navigator.appName;var Mb=r("yt.pubsub.instance_")||new E;E.prototype.subscribe=E.prototype.subscribe;E.prototype.unsubscribeByKey=E.prototype.T;E.prototype.publish=E.prototype.N;E.prototype.clear=E.prototype.clear;q("yt.pubsub.instance_",Mb,void 0);var Nb=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",Nb,void 0);var Ob=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",Ob,void 0);var Pb=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",Pb,void 0);
var Qb=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",Qb,void 0);function Rb(a,b,c){var d=Sb();if(d){var e=d.subscribe(a,function(){if(!Qb||Qb!=e){var d=arguments,g;g=function(){Nb[e]&&b.apply(c||window,d)};
try{Pb[a]?g():G(g,0)}catch(l){Jb(l)}}},c);
Nb[e]=!0;Ob[a]||(Ob[a]=[]);Ob[a].push(e);return e}return 0}
function Tb(a){var b=Sb();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete Nb[a]}))}
function Ub(a,b){var c=Sb();return c?c.publish.apply(c,arguments):!1}
function Vb(a){Ob[a]&&(a=Ob[a],z(a,function(a){Nb[a]&&delete Nb[a]}),a.length=0)}
function Wb(a){var b=Sb();if(b)if(b.clear(a),a)Vb(a);else for(var c in Ob)Vb(c)}
function Sb(){return r("yt.pubsub.instance_")}
;function Xb(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Yb,""),c=c.replace(Zb,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else $b(a,b)}
function $b(a,b){var c=ac(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;e?b&&b():(b&&(e=Rb(c,b),b=""+ha(b),bc[b]=e),f||(d=cc(a,c,function(){C(d,"loaded")||(hb(d,"loaded","true"),Ub(c),G(na(Wb,c),0))})))}
function cc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function dc(a,b){a&&b&&(a=""+ha(b),(a=bc[a])&&Tb(a))}
function ac(a){var b=document.createElement("a");fb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ua(a)}
var Yb=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Zb=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,bc={};var ec=null;function fc(){var a=F("BG_I",null),b=F("BG_IU",null),c=F("BG_P",void 0);b?Xb(b,function(){ec=new botguard.bg(c)}):a&&(eval(a),ec=new botguard.bg(c))}
function gc(){return null!=ec}
function hc(){return ec?ec.invoke():null}
;var ic="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function jc(){}
jc.prototype.next=function(){throw ic;};
jc.prototype.U=function(){return this};
function kc(a){if(a instanceof jc)return a;if("function"==typeof a.U)return a.U(!1);if(ea(a)){var b=0,c=new jc;c.next=function(){for(;;){if(b>=a.length)throw ic;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function lc(a,b){if(ea(a))try{z(a,b,void 0)}catch(c){if(c!==ic)throw c;}else{a=kc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ic)throw c;}}}
function mc(a){if(ea(a))return Ea(a);a=kc(a);var b=[];lc(a,function(a){b.push(a)});
return b}
;function nc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function oc(a,b){var c=pc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var rc=B("Opera"),H=B("Trident")||B("MSIE"),sc=B("Edge"),tc=B("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),uc=-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"),vc=B("Windows");function wc(){var a=n.document;return a?a.documentMode:void 0}
var xc;a:{var yc="",zc=function(){var a=A;if(tc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(sc)return/Edge\/([\d\.]+)/.exec(a);if(H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(uc)return/WebKit\/(\S+)/.exec(a);if(rc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
zc&&(yc=zc?zc[1]:"");if(H){var Ac=wc();if(null!=Ac&&Ac>parseFloat(yc)){xc=String(Ac);break a}}xc=yc}var Bc=xc,pc={};
function I(a){return oc(a,function(){for(var b=0,c=sa(String(Bc)).split("."),d=sa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==g[0].length&&0==l[0].length)break;b=ta(0==g[1].length?0:parseInt(g[1],10),0==l[1].length?0:parseInt(l[1],10))||ta(0==g[2].length,0==l[2].length)||ta(g[2],l[2]);g=g[3];l=l[3]}while(0==b)}return 0<=b})}
var Cc;var Dc=n.document;Cc=Dc&&H?wc()||("CSS1Compat"==Dc.compatMode?parseInt(Bc,10):5):void 0;function Ec(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Fc(a){a=String(a);if(Ec(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Gc(a){return eval("("+a+")")}
function Hc(a){var b=[];Ic(new Jc,a,b);return b.join("")}
function Jc(){}
function Ic(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Ic(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Kc(d,c),c.push(":"),Ic(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Kc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Lc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Mc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Kc(a,b){b.push('"',a.replace(Mc,function(a){var b=Lc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Lc[a]=b);return b}),'"')}
;var Nc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(Nc)}
function Oc(a){return a?decodeURI(a):a}
function Pc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Qc(a,b,c){if(da(b))for(var d=0;d<b.length;d++)Qc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Rc(a,b,c){for(c=c||0;c<b.length;c+=2)Qc(b[c],b[c+1],a);return a}
function Sc(a,b){for(var c in b)Qc(c,b[c],a);return a}
function Tc(a){a=Sc([],a);a[0]="";return a.join("")}
function Uc(a,b){return Pc(2==arguments.length?Rc([a],arguments[1],0):Rc([a],arguments,1))}
;function Vc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?da(b[f])?Fa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Wc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Vc(d[1]||""),e;for(e in b)d[e]=b[e];return Pc(Sc([a],d))+c}
;var Xc=null;"undefined"!=typeof XMLHttpRequest?Xc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Xc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Yc(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Zc(a,b,c,d,e,f,g){function l(){4==(h&&"readyState"in h?h.readyState:0)&&b&&Hb(b)(h)}
var h=Xc&&Xc();if(!("open"in h))return null;"onloadend"in h?h.addEventListener("loadend",l,!1):h.onreadystatechange=l;c=(c||"GET").toUpperCase();d=d||"";h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);f="POST"==c;if(e=$c(a,e))for(var m in e)h.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(f=!1);f&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);return h}
function $c(a,b){b=b||{};var c;c||(c=window.location.href);var d=J(a)[1]||null,e=Oc(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Oc(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;for(var f in ad){if((e=d=F(ad[f]))&&!(e=c)){var e=f,g=F("CORS_HEADER_WHITELIST")||{},l=Oc(J(a)[3]||null);e=l?(g=g[l])?Aa(g,e):!1:!0}e&&(b[f]=d)}return b}
function bd(a,b){b.method="POST";b.C||(b.C={});cd(a,b)}
function dd(a,b){var c=F("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.ic&&(!Oc(J(a)[3]||null)||b.withCredentials||Oc(J(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.C&&b.C[c])}
function cd(a,b){var c=b.format||"JSON";b.ub&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=F("XSRF_FIELD_NAME",void 0),e=F("XSRF_TOKEN",void 0),f=b.xa;f&&(f[d]&&delete f[d],a=Wc(a,f||{}));var g=b.postBody||"",f=b.C;dd(a,b)&&(f||(f={}),f[d]=e);f&&u(g)&&(d=Vc(g),Sa(d,f),g=b.Pa&&"JSON"==b.Pa?JSON.stringify(d):Tc(d));var l=!1,h,m=Zc(a,function(a){if(!l){l=!0;h&&Ib(h);var d=Yc(a),e=null;if(d||400<=a.status&&500>a.status)e=
ed(c,a,b.hc);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.F&&b.F.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.wa&&b.wa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.R&&0<b.timeout&&(h=G(function(){l||(l=!0,m.abort(),Ib(h),b.R.call(b.context||n,m))},b.timeout))}
function ed(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Gc(a));break;case "XML":if(b=(b=b.responseXML)?fd(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=gd(a)})}c&&hd(d);
return d}
function hd(a){if(ga(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=eb(a[b]);a[c]=d}else hd(a[b])}}
function fd(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function gd(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
var ad={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var id={},jd=0;function kd(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):G(a,b||0)}
;var ld=[],md=!1;function nd(){function a(){md=!0;"google_ad_status"in window?Fb("DCLKSTAT",1):Fb("DCLKSTAT",2)}
Xb("//static.doubleclick.net/instream/ad_status.js",a);ld.push(kd(function(){md||"google_ad_status"in window||(dc("//static.doubleclick.net/instream/ad_status.js",a),Fb("DCLKSTAT",3))},5E3))}
function od(){return parseInt(F("DCLKSTAT",0),10)}
;function pd(a,b){this.width=a;this.height=b}
k=pd.prototype;k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function qd(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in rd||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
qd.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
qd.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
qd.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var rd={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function sd(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function td(a,b){return a.classList?a.classList.contains(b):Aa(sd(a),b)}
function ud(a,b){a.classList?a.classList.add(b):td(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function vd(a,b){a.classList?a.classList.remove(b):td(a,b)&&(a.className=wa(sd(a),function(a){return a!=b}).join(" "))}
function wd(a,b,c){c?ud(a,b):vd(a,b)}
;var xd=x().toString();function K(a,b){this.l=p(a)?a:0;this.o=p(b)?b:0}
K.prototype.equals=function(a){return a instanceof K&&(this==a?!0:this&&a?this.l==a.l&&this.o==a.o:!1)};
K.prototype.ceil=function(){this.l=Math.ceil(this.l);this.o=Math.ceil(this.o);return this};
K.prototype.floor=function(){this.l=Math.floor(this.l);this.o=Math.floor(this.o);return this};
K.prototype.round=function(){this.l=Math.round(this.l);this.o=Math.round(this.o);return this};!tc&&!H||H&&9<=Number(Cc)||tc&&I("1.9.1");var yd=H&&!I("9");function zd(a){Ad();var b=new bb;b.b=a;return b}
var Ad=t;function Bd(a){return a?new Cd(Dd(a)):qa||(qa=new Cd)}
function Fd(a){var b=document;return u(a)?b.getElementById(a):a}
function Gd(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):Hd(a)}
function Hd(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var g=b.className;"function"==typeof g.split&&Aa(g.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function Id(a){a=a.document;a=Jd(a)?a.documentElement:a.body;return new pd(a.clientWidth,a.clientHeight)}
function Kd(a){var b=a.scrollingElement?a.scrollingElement:!uc&&Jd(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return H&&I("10")&&a.pageYOffset!=b.scrollTop?new K(b.scrollLeft,b.scrollTop):new K(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Jd(a){return"CSS1Compat"==a.compatMode}
function Ld(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Md(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Nd(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Dd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Od(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Ld(a),a.appendChild(Dd(a).createTextNode(String(b)))}
var Pd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Qd={IMG:" ",BR:"\n"};function Rd(a){if(yd&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Sd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");yd||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Sd(a,b,c){if(!(a.nodeName in Pd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Qd)b.push(Qd[a.nodeName]);else for(a=a.firstChild;a;)Sd(a,b,c),a=a.nextSibling}
function Td(a){var b=Ud.bb;return b?Vd(a,function(a){return!b||u(a.className)&&Aa(a.className.split(/\s+/),b)},!0,void 0):null}
function Vd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Cd(a){this.b=a||n.document||document}
Cd.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Cd.prototype.createElement=function(a){return this.b.createElement(String(a))};
Cd.prototype.isElement=function(a){return ga(a)&&1==a.nodeType};
Cd.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Wd=r("yt.dom.getNextId_");if(!Wd){Wd=function(){return++Xd};
q("yt.dom.getNextId_",Wd,void 0);var Xd=0}function Yd(){var a=document,b;ya(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;var Ma=r("yt.events.listeners_")||{};q("yt.events.listeners_",Ma,void 0);var Zd=r("yt.events.counter_")||{count:0};q("yt.events.counter_",Zd,void 0);function $d(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return La(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function L(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=$d(a,b,c,d);if(e)return e;var e=++Zd.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new qd(d);if(!Vd(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new qd(b);
b.currentTarget=a;return c.call(a,b)};
g=Hb(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ma[e]=[a,b,c,g,d];return e}
function ae(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in Ma){var b=Ma[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ma[a]}}))}
;function be(){if(null==r("_lact",window)){var a=parseInt(F("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&ce();L(document,"keydown",ce);L(document,"keyup",ce);L(document,"mousedown",ce);L(document,"mouseup",ce);Rb("page-mouse",ce);Rb("page-scroll",ce);Rb("page-resize",ce)}}
function ce(){null==r("_lact",window)&&(be(),r("_lact",window));var a=x();q("_lact",a,window);Ub("USER_ACTIVE")}
function de(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;function M(a){return F("EXPERIMENT_FLAGS",{})[a]}
;function ee(){}
ee.prototype.set=aa;ee.prototype.get=aa;ee.prototype.remove=aa;function fe(){}
y(fe,ee);fe.prototype.ba=function(){var a=0;lc(this.U(!0),function(){a++});
return a};
fe.prototype.U=aa;fe.prototype.clear=function(){var a=mc(this.U(!0)),b=this;z(a,function(a){b.remove(a)})};function ge(a){this.b=a}
y(ge,fe);k=ge.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.ba=function(){return this.b.length};
k.U=function(a){var b=0,c=this.b,d=new jc;d.next=function(){if(b>=c.length)throw ic;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function he(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(he,ge);function ie(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
y(ie,ge);function je(a){this.b=a}
je.prototype.set=function(a,b){p(b)?this.b.set(a,Hc(b)):this.b.remove(a)};
je.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return Fc(b)}catch(c){throw"Storage: Invalid value was encountered";}};
je.prototype.remove=function(a){this.b.remove(a)};function ke(a){this.b=a}
y(ke,je);function le(a){this.data=a}
function me(a){return!p(a)||a instanceof le?a:new le(a)}
ke.prototype.set=function(a,b){ke.B.set.call(this,a,me(b))};
ke.prototype.f=function(a){a=ke.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ke.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ne(a){this.b=a}
y(ne,ke);ne.prototype.set=function(a,b,c){if(b=me(b)){if(c){if(c<x()){ne.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}ne.B.set.call(this,a,b)};
ne.prototype.f=function(a,b){var c=ne.B.f.call(this,a);if(c){if(b=!b){b=c.creation;var d=c.expiration;b=!!d&&d<x()||!!b&&b>x()}if(b)ne.prototype.remove.call(this,a);else return c}};function oe(a){this.b=a}
y(oe,ne);function pe(){if(!qe&&!re||!window.JSON)return null;var a;try{a=qe.get("yt-player-two-stage-token")}catch(b){}if(!u(a))try{a=re.get("yt-player-two-stage-token")}catch(b){}if(!u(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var re,se=new he;re=se.isAvailable()?new oe(se):null;var qe,te=new ie;qe=te.isAvailable()?new oe(te):null;var ue=B("Firefox"),we=nc()||B("iPod"),xe=B("iPad"),ye=B("Android")&&!(Va()||B("Firefox")||B("Opera")||B("Silk")),ze=Va(),Ae=B("Safari")&&!(Va()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))&&!(nc()||B("iPad")||B("iPod"));function Be(a,b,c){this.b=a;this.g=b;this.f=c}
var Ce=1;function De(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var Ee={log_event:"events",log_interaction:"interactions"},Fe={},Ge={},He=0,Oa=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Oa,void 0);function Ie(a,b){Oa[a.endpoint]=Oa[a.endpoint]||[];var c=Oa[a.endpoint];c.push(a.Oa);Ge[a.endpoint]=b;c.length>=(Number(M("web_logging_max_batch")||0)||20)?Je():Ke()}
function Je(){Ib(He);if(!Na()){for(var a in Oa){var b=Fe[a];if(!b){b=Ge[a];if(!b)continue;b=new b;Fe[a]=b}var c=b.f();c.requestTimeMs=Math.round(Kb());c[Ee[a]]=Oa[a];b.g(a,c,{});delete Oa[a]}Na()||Ke()}}
function Ke(){Ib(He);He=G(Je,F("LOGGING_BATCH_TIMEOUT",1E4))}
;function Le(a,b,c){Me(Ne(),{attachChild:{csn:a,parentVisualElement:De(b),visualElements:[De(c)]}},void 0)}
function Oe(a,b){var c=Ne();b=xa(b,function(a){return De(a)});
Me(c,{visibilityUpdate:{csn:a,visualElements:b}})}
function Me(a,b,c){b.eventTimeMs=Math.round(Kb());b.lactMs=de();c&&(b.clientData=Pe(c));Ie({endpoint:"log_interaction",Oa:b},a)}
function Pe(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=xa(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Qe(){var a=F("ROOT_VE_TYPE",void 0);return a?new Be(void 0,a,void 0):null}
function Re(){var a=F("client-screen-nonce",void 0);a||(a=F("EVENT_ID",void 0));return a}
;function Se(a){this.b=a||{cookie:""}}
var Te=/\s*;\s*/;k=Se.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Te),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.ba=function(){return this.b.cookie?(this.b.cookie||"").split(Te).length:0};
k.clear=function(){for(var a=(this.b.cookie||"").split(Te),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ue=new Se("undefined"==typeof document?null:document);Ue.f=3950;function Ve(a,b,c){var d=F("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=a,e=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Oc(J(window.location.href)[3]||null);f&&e.push(f);f=Oc(J(d)[3]||null);if(Aa(e,f)||!f&&0==d.lastIndexOf("/",0)){M("autoescape_tempdata_url")&&(e=document.createElement("a"),fb(e,d),d=e.href);var f=J(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))M("enable_more_related_ve_logging")&&(b.itct||b.ved)&&(b.csn=b.csn||
Re()),d="ST-"+ua(d).toString(36),e=b?Tc(b):"",Ue.set(""+d,e,5,"/","youtube.com"),b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new Be(b)))}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):(c=window.location,a=Pc(Sc([a],{}))+"",a=a instanceof Wa?a:$a(a),c.href=Ya(a));return!0}
;function We(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Qa(Xe);this.assets=a.assets||{};this.attrs=a.attrs||Qa(Ye);this.params=a.params||Qa(Ze);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Xe={enablejsapi:1},Ye={},Ze={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function $e(a){a instanceof We||(a=new We(a));return a}
function af(a){var b=new We,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ca(d)?Qa(d):d}return b}
;function bf(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
k=bf.prototype;k.getHeight=function(){return this.bottom-this.top};
k.contains=function(a){return this&&a?a instanceof bf?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.l>=this.left&&a.l<=this.right&&a.o>=this.top&&a.o<=this.bottom:!1};
k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function cf(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
cf.prototype.contains=function(a){return a instanceof K?a.l>=this.left&&a.l<=this.left+this.width&&a.o>=this.top&&a.o<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
cf.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
cf.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
cf.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function df(a,b){var c=Dd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""}
function ef(a,b){return df(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function ff(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}H&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function gf(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function hf(a){var b=jf;if("none"!=ef(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function jf(a){var b=a.offsetWidth,c=a.offsetHeight,d=uc&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new pd(b,c):(a=ff(a),new pd(a.right-a.left,a.bottom-a.top))}
function kf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;b=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+b}
function lf(a,b){return(b=a.currentStyle?a.currentStyle[b]:null)?kf(a,b):0}
var mf={thin:2,medium:4,thick:6};function nf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;b=a.currentStyle?a.currentStyle[b+"Width"]:null;return b in mf?mf[b]:kf(a,b)}
;function of(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,l,h,m;if(Lb)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(v){g=null}else h=document.body,m=document.createElement("object"),m.setAttribute("type","application/x-shockwave-flash"),g=h.appendChild(m);if(g&&"GetVariable"in g)try{l=g.GetVariable("$version")}catch(v){l=""}h&&m&&h.removeChild(m);(g=l||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ba(of);function pf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function qf(a){if(window.spf){var b=a.match(rf);spf.style.load(a,b?b[1]:"",void 0)}else sf(a)}
function sf(a){var b=tf(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=uf(a,b,function(){C(c,"loaded")||(hb(c,"loaded","true"),Ub(b),G(na(Wb,b),0))}))}
function uf(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=zd(a);gb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function tf(a){var b=document.createElement("a");fb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ua(a)}
var rf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var vf;var wf=A,wf=wf.toLowerCase();if(-1!=wf.indexOf("android")){var xf=wf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(xf)vf=Number(xf[1]);else{var yf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},zf=[],Af=0,Bf;for(Bf in yf)zf[Af++]=Bf;var Cf=wf.match("("+zf.join("|")+")");vf=Cf?yf[Cf[0]]:0}}else vf=void 0;var Df=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Ef=['audio/mp4; codecs="mp4a.40.2"'];H&&I("9");!uc||I("528");tc&&I("1.9b")||H&&I("8")||rc&&I("9.5")||uc&&I("528");tc&&!I("8")||H&&I("9");var Ff;var Gf=A,Hf=Gf.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!Hf||2>Hf.length)Ff=void 0;else{var If=Gf.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);Ff=If&&6==If.length?Number(If[5].replace("_",".")):0}0<=Ff&&0<=A.search("Safari")&&A.search("Version");function Jf(a){D.call(this);this.b=[];this.g=a||this}
y(Jf,D);function Kf(a,b,c,d){d=Hb(w(d,a.g));d={target:b,name:c,qa:d};b.addEventListener(c,d.qa,void 0);a.b.push(d)}
function Lf(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.qa)}}
Jf.prototype.A=function(){Lf(this);Jf.B.A.call(this)};function Mf(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function N(a,b){this.version=a;this.args=b}
function Nf(a){if(!a.Wa){var b={};a.call(b);a.Wa=b.version}return a.Wa}
function Of(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Nf(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function O(a,b){this.topic=a;this.b=b}
O.prototype.toString=function(){return this.topic};var Pf=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Qf(){return{apiaryHost:F("APIARY_HOST",void 0),Fa:F("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:F("GAPI_HINT_OVERRIDE"),gapiHintParams:F("GAPI_HINT_PARAMS",void 0),innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),vb:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),xb:F("INNERTUBE_CONTEXT_HL",void 0),wb:F("INNERTUBE_CONTEXT_GL",void 0),Xb:F("XHR_APIARY_HOST",void 0)}}
function Rf(a){a={client:{hl:a.xb,gl:a.wb,clientName:a.vb,clientVersion:a.innertubeContextClientVersion}};F("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});return a}
;function Sf(a){N.call(this,1,arguments)}
y(Sf,N);var Tf=new O("timing-sent",Sf);function P(a,b){this.b=0;this.D=void 0;this.i=this.f=this.g=null;this.j=this.w=!1;if(a!=t)try{var c=this;a.call(b,function(a){Uf(c,2,a)},function(a){Uf(c,3,a)})}catch(d){Uf(this,3,d)}}
function Vf(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Vf.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Wf=new ob(function(){return new Vf},function(a){a.reset()},100);
function Xf(a,b,c){var d=Wf.get();d.g=a;d.f=b;d.context=c;return d}
function Yf(a){if(a instanceof P)return a;var b=new P(t);Uf(b,2,a);return b}
function Zf(a){return new P(function(b,c){c(a)})}
P.prototype.then=function(a,b,c){return $f(this,fa(a)?a:null,fa(b)?b:null,c)};
Mf(P);P.prototype.cancel=function(a){0==this.b&&tb(function(){var b=new ag(a);bg(this,b)},this)};
function bg(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?bg(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):cg(c),dg(c,e,3,b)))}a.g=null}else Uf(a,3,b)}
function eg(a,b){a.f||2!=a.b&&3!=a.b||fg(a);a.i?a.i.next=b:a.f=b;a.i=b}
function $f(a,b,c,d){var e=Xf(null,null,null);e.b=new P(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof ag?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;eg(a,e);return e.b}
P.prototype.G=function(a){this.b=0;Uf(this,2,a)};
P.prototype.K=function(a){this.b=0;Uf(this,3,a)};
function Uf(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.G,g=a.K;if(e instanceof P)eg(e,Xf(f||t,g||null,a)),d=!0;else{var l;if(e)try{l=!!e.$goog_Thenable}catch(m){l=!1}else l=!1;if(l)e.then(f,g,a),d=!0;else{if(ga(e))try{var h=e.then;if(fa(h)){gg(e,h,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.D=c,a.b=b,a.g=null,fg(a),3!=b||c instanceof ag||hg(a,c))}}
function gg(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function g(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,g,f)}catch(h){f(h)}}
function fg(a){a.w||(a.w=!0,tb(a.J,a))}
function cg(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
P.prototype.J=function(){for(var a;a=cg(this);)dg(this,a,this.b,this.D);this.w=!1};
function dg(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,ig(b,c,d);else try{b.i?b.g.call(b.context):ig(b,c,d)}catch(e){jg.call(null,e)}pb(Wf,b)}
function ig(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function hg(a,b){a.j=!0;tb(function(){a.j&&jg.call(null,b)})}
var jg=lb;function ag(a){pa.call(this,a)}
y(ag,pa);ag.prototype.name="cancel";var kg=r("yt.pubsub2.instance_")||new E;E.prototype.subscribe=E.prototype.subscribe;E.prototype.unsubscribeByKey=E.prototype.T;E.prototype.publish=E.prototype.N;E.prototype.clear=E.prototype.clear;q("yt.pubsub2.instance_",kg,void 0);var lg=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",lg,void 0);var mg=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",mg,void 0);var ng=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",ng,void 0);q("yt.pubsub2.skipSubKey_",null,void 0);
function Q(a,b){var c=og();c&&c.publish.call(c,a.toString(),a,b)}
function R(a,b,c){var d=og();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(lg[e])try{if(g&&a instanceof O&&a!=d)try{g=Of(a.b,g)}catch(h){throw h.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+h.message,h;}b.call(c||window,g)}catch(h){Jb(h)}};
ng[a.toString()]?r("yt.scheduler.instance")?kd(f,void 0):G(f,0):f()}});
lg[e]=!0;mg[a.toString()]||(mg[a.toString()]=[]);mg[a.toString()].push(e);return e}
function pg(a){var b=og();b&&("number"==typeof a&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete lg[a]}))}
function og(){return r("yt.pubsub2.instance_")}
;var qg={},rg=0;function sg(a){var b=new Image,c=""+rg++;qg[c]=b;b.onload=b.onerror=function(){delete qg[c]};
b.src=a}
;function tg(a,b,c){var d=ug,e={};e.eventTimeMs=Math.round(c||Kb());e[a]=b;Ie({endpoint:"log_event",Oa:e},d)}
;function ug(){this.b=Qf();vg||(vg=wg(this.b))}
var vg=null;function wg(a){return(new P(function(b){Xb(F("GAPI_LOADER_URL",void 0),function(){try{r("yt.gapi.load")("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){Jb(c)}})})).then(function(){})}
ug.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;ra(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Fa;ra(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",F("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
ug.prototype.f=function(){return{context:Rf(this.b)}};
ug.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=G(function(){e||(e=!0,c.R&&c.R())},c.timeout));
xg(this,a,b,function(a){if(!e)if(e=!0,d&&Ib(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function xg(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":F("VISITOR_DATA")},method:"POST",body:Hc(c)},f=w(a.i,a);vg.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function yg(a,b,c){D.call(this);this.b=a;this.j=b||0;this.g=c;this.i=w(this.ob,this)}
y(yg,D);k=yg.prototype;k.ca=0;k.A=function(){yg.B.A.call(this);this.stop();delete this.b;delete this.g};
k.start=function(a){this.stop();var b=this.i;a=p(a)?a:this.j;if(!fa(b))if(b&&"function"==typeof b.handleEvent)b=w(b.handleEvent,b);else throw Error("Invalid listener argument");this.ca=2147483647<Number(a)?-1:n.setTimeout(b,a||0)};
k.stop=function(){this.isActive()&&n.clearTimeout(this.ca);this.ca=0};
k.isActive=function(){return 0!=this.ca};
k.ob=function(){this.ca=0;this.b&&this.b.call(this.g)};var zg={vc:!0},Ag={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible"},Bg=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Cg=w(Pf.clearResourceTimings||Pf.webkitClearResourceTimings||Pf.mozClearResourceTimings||Pf.msClearResourceTimings||Pf.oClearResourceTimings||t,Pf);
function Dg(a,b){if(!b&&"_"!=a[0]){var c=a;Pf.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),Pf.mark(c))}var c=Eg(),d=b||Kb();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(Fg()["tick_"+a]=b)||Kb();M("csi_on_gel")?(c=Gg(),"_start"==a?tg("latencyActionBaselined",{clientActionNonce:c},b):tg("latencyActionTicked",{tickName:a,clientActionNonce:c},b),a=!0):a=!1;a||(a=!!r("yt.timing.pingSent_")&&!!M("navigation_only_csi_reset"));if(!a&&(b=F("TIMING_ACTION",void 0),a=Eg(),r("yt.timing.ready_")&&
b&&a._start&&Hg())){b=!0;c=F("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Ig()}}
function Jg(){var a=Kg().info.yt_lt="hot_bg";Fg().info_yt_lt=a;if(M("csi_on_gel"))if("yt_lt"in Ag){var b={},c=Ag.yt_lt;Aa(Bg,c)&&(a=!!a);b[c]=a;a=Gg();b.clientActionNonce=a;tg("latencyActionInfo",b)}else Jb(Error("Unknown label yt_lt logged with GEL CSI."))}
function Hg(){var a=Eg();if(a.aft)return a.aft;for(var b=F("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Ig(){if(!M("csi_on_gel")){var a=Eg(),b=Kg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&da(a[d])){var e=d.slice(1);if(e in zg){var f=xa(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Lg(f,e),Mg(),Cg(),Ng(!1,void 0)}else{var g=F("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:F("TIMING_ACTION",void 0)},l=b.srt;delete b.srt;void 0===a.srt&&(l||0===l||(l=Pf.timing||{},l=Math.max(0,l.responseStart-l.navigationStart),isNaN(l)&&b.pt&&(l=b.pt)),l||0===l)&&(b.srt=Math.round(l));if(b.h5jse){var h=window.location.protocol+r("ytplayer.config.assets.js");(h=Pf.getEntriesByName?Pf.getEntriesByName(h)[0]:
null)?b.h5jse=Math.round(b.h5jse-h.responseEnd):delete b.h5jse}a.aft=Hg();Og()&&"youtube"==g&&(Jg(),g=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=Kb();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);M("navigation_only_csi_reset")||(Mg(),Cg(),Ng(!1,void 0));Lg(f,e,void 0);Q(Tf,new Sf(b.aft+(l||0)))}}}
function Lg(a,b,c){if(M("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||a&&sg(a)}catch(f){a&&sg(a)}else a&&sg(a);Ng(!0,c)}
function Gg(){var a=Kg().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=x();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(xd)for(c=1,d=0;d<xd.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^xd.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Kg().nonce=a}return a}
function Eg(){return Kg().tick}
function Fg(){var a=Kg();"gel"in a||(a.gel={});return a.gel}
function Kg(){return r("ytcsi.data_")||Mg()}
function Mg(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function Ng(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Og(){var a=Eg(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Kg().info.yt_pvis}
;new yg(Pg,1E3);function Pg(){Dg("vptl",0);Dg("vpl",0)}
;var Qg={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function Rg(a,b){D.call(this);this.D=this.w=a;this.$=b;this.G=!1;this.g={};this.ga=this.Z=null;this.aa=new E;zb(this,na(Ab,this.aa));this.j={};this.L=this.ha=this.i=this.pa=this.b=null;this.da=!1;this.O=this.J=this.X=this.Y=null;this.ia={};this.ib=["onReady"];this.ea=new Jf(this);zb(this,na(Ab,this.ea));this.na=null;this.Ca=NaN;this.fa={};Sg(this);this.M("onDetailedError",w(this.Db,this));this.M("onTabOrderChange",w(this.lb,this));this.M("onTabAnnounce",w(this.Da,this));this.M("WATCH_LATER_VIDEO_ADDED",
w(this.Eb,this));this.M("WATCH_LATER_VIDEO_REMOVED",w(this.Fb,this));ue||(this.M("onMouseWheelCapture",w(this.Bb,this)),this.M("onMouseWheelRelease",w(this.Cb,this)));this.M("onAdAnnounce",w(this.Da,this));this.P=new Jf(this);zb(this,na(Ab,this.P));this.oa=!1;this.ma=null}
y(Rg,D);var Tg=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];k=Rg.prototype;k.ya=function(a,b){this.f||(Ug(this,a),Vg(this,b),this.G&&Wg(this))};
function Ug(a,b){a.pa=b;a.b=af(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.$,a.b.attrs.id=a.$);a.D.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.$;a.ha||(a.ha=Xg(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;if(b=a.b.attrs.width)a.D.style.width=gf(Number(b)||b,!0);if(b=a.b.attrs.height)a.D.style.height=gf(Number(b)||b,!0)}
k.rb=function(){return this.pa};
function Wg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Yg(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=pf(of.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Zg(a,b){if((!b||(5!=(Qg[b.errorCode]||5)?0:-1!=Tg.indexOf(b.errorCode)))&&Yg(a)){(b=$g(a))&&b.stopVideo&&b.stopVideo();var c=a.b;b&&b.getUpdatedConfigurationData&&(b=b.getUpdatedConfigurationData(),c=$e(b));c.args.autoplay=1;c.args.html5_unavailable="1";Ug(a,c);Vg(a,"flash")}}
function Vg(a,b){if(!a.f){if(!b){if(!(b=!a.b.html5&&Yg(a))){if(!p(a.b.disable.html5)){var c;b=!0;void 0!=a.b.args.deviceHasDisplay&&(b=a.b.args.deviceHasDisplay);if(2.2==vf)c=!0;else{a:{var d=b;b=r("yt.player.utils.videoElement_");b||(b=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",b,void 0));try{if(b.canPlayType)for(var d=d?Df:Ef,e=0;e<d.length;e++)if(b.canPlayType(d[e])){c=null;break a}c="fmt.noneavailable"}catch(f){c="html5.missingapi"}}c=!c}c&&(c=ah(a)||a.b.assets.js);a.b.disable.html5=
!c;c||(a.b.args.html5_unavailable="1")}b=!!a.b.disable.html5}b=b?Yg(a)?"flash":"unsupported":"html5"}("flash"==b?a.Vb:a.Wb).call(a)}}
function ah(a){var b=!0,c=$g(a);c&&a.b&&(a=a.b,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
k.Wb=function(){if(!this.da){var a=ah(this);a&&"html5"==bh(this)?(this.L="html5",this.G||this.W()):(ch(this),this.L="html5",a&&this.X?(this.w.appendChild(this.X),this.W()):(this.b.loaded=!0,this.Y=w(function(){var a=this.w,c=af(this.b);r("yt.player.Application.create")(a,c);this.W()},this),this.da=!0,a?this.Y():(Xb(this.b.assets.js,this.Y),qf(this.b.assets.css))))}};
k.Vb=function(){var a=af(this.b);if(!this.J){var b=$g(this);b&&(this.J=document.createElement("SPAN"),this.J.tabIndex=0,Kf(this.ea,this.J,"focus",this.Ka),this.O=document.createElement("SPAN"),this.O.tabIndex=0,Kf(this.ea,this.O,"focus",this.Ka),b.parentNode&&b.parentNode.insertBefore(this.J,b),b.parentNode&&b.parentNode.insertBefore(this.O,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==bh(this))this.L="flash",this.G||this.W();else{ch(this);this.L=
"flash";this.b.loaded=!0;var b=of.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!pf(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.w;if(c){var b=u(b)?Fd(b):b,d=Qa(a.attrs);d.tabindex=0;var e=Qa(a.params);e.flashvars=Tc(a.args);if(Lb){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),a.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(f in d)a.setAttribute(f,d[f]);for(f in e)a.setAttribute(f,e[f])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.W()}};
k.Ka=function(){$g(this).focus()};
function $g(a){var b=Fd(a.i);!b&&a.D&&a.D.querySelector&&(b=a.D.querySelector("#"+a.i));return b}
k.W=function(){if(!this.f){var a=$g(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.da=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Zg(this);else{Sg(this);this.G=!0;a=$g(this);a.addEventListener&&(this.Z=dh(this,a,"addEventListener"));a.removeEventListener&&(this.ga=dh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=dh(this,a,d))}for(var e in this.j)this.Z(e,
this.j[e]);Wg(this);this.ha&&this.ha(this.g);this.aa.N("onReady",this.g)}else this.Ca=G(w(this.W,this),50)}};
function dh(a,b,c){var d=b[c];return function(){try{return a.na=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.na=e,Jb(e,"WARNING"))}}}
function Sg(a){a.G=!1;if(a.ga)for(var b in a.j)a.ga(b,a.j[b]);for(var c in a.fa)Ib(parseInt(c,10));a.fa={};a.Z=null;a.ga=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=w(a.M,a);a.g.removeEventListener=w(a.Nb,a);a.g.destroy=w(a.dispose,a);a.g.getLastError=w(a.sb,a);a.g.getPlayerType=w(a.tb,a);a.g.getCurrentVideoConfig=w(a.rb,a);a.g.loadNewVideoConfig=w(a.ya,a);a.g.isReady=w(a.Yb,a)}
k.Yb=function(){return this.G};
k.M=function(a,b){if(!this.f&&(b=Xg(this,b))){if(!Aa(this.ib,a)&&!this.j[a]){var c=eh(this,a);this.Z&&this.Z(a,c)}this.aa.subscribe(a,b);"onReady"==a&&this.G&&G(na(b,this.g),0)}};
k.Nb=function(a,b){this.f||(b=Xg(this,b))&&this.aa.unsubscribe(a,b)};
function Xg(a,b){var c=b;if("string"==typeof b){if(a.ia[b])return a.ia[b];c=function(){var a=r(b);a&&a.apply(n,arguments)};
a.ia[b]=c}return c?c:null}
function eh(a,b){var c="ytPlayer"+b+a.$;a.j[b]=c;n[c]=function(c){var d=G(function(){if(!a.f){a.aa.N(b,c);var e=a.fa,g=String(d);g in e&&delete e[g]}},0);
Pa(a.fa,String(d))};
return c}
k.lb=function(a){a=a?Nd:Md;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.J||b==this.O||(b.focus(),b!=document.activeElement));)b=a(b)};
k.Da=function(a){Ub("a11y-announce",a)};
k.Db=function(a){Zg(this,a)};
k.Eb=function(a){Ub("WATCH_LATER_VIDEO_ADDED",a)};
k.Fb=function(a){Ub("WATCH_LATER_VIDEO_REMOVED",a)};
k.Bb=function(){this.oa||(ze?(this.ma=Kd(document),Kf(this.P,window,"scroll",this.Kb),Kf(this.P,this.w,"touchmove",this.Ib)):(Kf(this.P,this.w,"mousewheel",this.Na),Kf(this.P,this.w,"wheel",this.Na)),this.oa=!0)};
k.Cb=function(){Lf(this.P);this.oa=!1};
k.Na=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
k.Kb=function(){window.scrollTo(this.ma.l,this.ma.o)};
k.Ib=function(a){a.preventDefault()};
k.tb=function(){return this.L||bh(this)};
k.sb=function(){return this.na};
function bh(a){return(a=$g(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function ch(a){Dg("dcp");a.cancel();Sg(a);a.L=null;a.b&&(a.b.loaded=!1);var b=$g(a);"html5"==bh(a)?a.X=b:b&&b.destroy&&b.destroy();Ld(a.w);Lf(a.ea);a.J=null;a.O=null}
k.cancel=function(){this.Y&&dc(this.b.assets.js,this.Y);Ib(this.Ca);this.da=!1};
k.A=function(){ch(this);if(this.X&&this.b)try{this.X.destroy()}catch(b){Jb(b)}this.ia=null;for(var a in this.j)n[this.j[a]]=null;this.pa=this.b=this.g=null;delete this.w;delete this.D;Rg.B.A.call(this)};var fh={},gh="player_uid_"+(1E9*Math.random()>>>0);function hh(a,b){a=u(a)?Fd(a):a;b=$e(b);var c=gh+"_"+ha(a),d=fh[c];if(d)return d.ya(b),d.g;d=new Rg(a,c);fh[c]=d;Ub("player-added",d.g);zb(d,na(ih,d));G(function(){d.ya(b)},0);
return d.g}
function ih(a){fh[a.$]=null}
function jh(a){a=Fd(a);if(!a)return null;var b=gh+"_"+ha(a),c=fh[b];c||(c=new Rg(a,b),fh[b]=c);return c.g}
;var kh=r("yt.abuse.botguardInitialized")||gc;q("yt.abuse.botguardInitialized",kh,void 0);var lh=r("yt.abuse.invokeBotguard")||hc;q("yt.abuse.invokeBotguard",lh,void 0);var mh=r("yt.abuse.dclkstatus.checkDclkStatus")||od;q("yt.abuse.dclkstatus.checkDclkStatus",mh,void 0);var nh=r("yt.player.exports.navigate")||Ve;q("yt.player.exports.navigate",nh,void 0);var oh=r("yt.player.embed")||hh;q("yt.player.embed",oh,void 0);var ph=r("yt.player.getPlayerByElement")||jh;q("yt.player.getPlayerByElement",ph,void 0);
var qh=r("yt.util.activity.init")||be;q("yt.util.activity.init",qh,void 0);var rh=r("yt.util.activity.getTimeSinceActive")||de;q("yt.util.activity.getTimeSinceActive",rh,void 0);var sh=r("yt.util.activity.setTimestamp")||ce;q("yt.util.activity.setTimestamp",sh,void 0);function th(a){N.call(this,1,arguments);this.b=a}
y(th,N);function S(a){N.call(this,1,arguments);this.b=a}
y(S,N);function uh(a,b,c){N.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
y(uh,N);function vh(a,b,c,d,e){N.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
y(vh,N);function wh(a,b,c){N.call(this,1,arguments);this.b=a;this.subscriptionId=b}
y(wh,N);function xh(a,b,c,d,e,f,g){N.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.j=d||null;this.i=e||null;this.g=f||null;this.source=g||null}
y(xh,N);
var yh=new O("subscription-batch-subscribe",th),zh=new O("subscription-batch-unsubscribe",th),Ah=new O("subscription-subscribe",vh),Bh=new O("subscription-subscribe-loading",S),Ch=new O("subscription-subscribe-loaded",S),Dh=new O("subscription-subscribe-success",wh),Eh=new O("subscription-subscribe-external",vh),Fh=new O("subscription-unsubscribe",xh),Gh=new O("subscription-unsubscirbe-loading",S),Hh=new O("subscription-unsubscribe-loaded",S),Ih=new O("subscription-unsubscribe-success",S),Jh=new O("subscription-external-unsubscribe",
xh),Kh=new O("subscription-enable-ypc",S),Lh=new O("subscription-disable-ypc",S),Mh=new O("subscription-prefs",uh),Nh=new O("subscription-prefs-success",uh),Oh=new O("subscription-prefs-failure",uh);function Ph(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Uc(c,"mode",b));b=Uc("/signin?context=popup","next",c);b=Uc(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0))c=Rb("LOGGED_IN",function(b){Tb(F("LOGGED_IN_PUBSUB_KEY",void 0));Fb("LOGGED_IN",!0);a(b)}),Fb("LOGGED_IN_PUBSUB_KEY",c),b.moveTo((screen.width-375)/2,(screen.height-440)/2)}
q("yt.pubsub.publish",Ub,void 0);function Qh(){var a=F("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!F("SESSION_INDEX")&&!F("LOGGED_IN"))}
;function Rh(){var a=Yd();return a?a:null}
;function Sh(a,b){(a=Fd(a))&&a.style&&(a.style.display=b?"":"none",wd(a,"hid",!b))}
function Th(a){z(arguments,function(a){!ea(a)||a instanceof Element?Sh(a,!0):z(a,function(a){Th(a)})})}
function Uh(a){z(arguments,function(a){!ea(a)||a instanceof Element?Sh(a,!1):z(a,function(a){Uh(a)})})}
;var Vh={},Wh="ontouchstart"in document;function Xh(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Vd(c,function(a){return td(a,b)},!0,d)}
function T(a){var b="mouseover"==a.type&&"mouseenter"in Vh||"mouseout"==a.type&&"mouseleave"in Vh,c=a.type in Vh||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=Vh[b],d;for(d in c.H){var e=Xh(b,d,a.target);e&&!Vd(a.relatedTarget,function(a){return a==e},!0)&&c.N(d,e,b,a)}}if(b=Vh[a.type])for(d in b.H)(e=Xh(a.type,d,a.target))&&b.N(d,e,a.type,a)}}
L(document,"blur",T,!0);L(document,"change",T,!0);L(document,"click",T);L(document,"focus",T,!0);L(document,"mouseover",T);L(document,"mouseout",T);L(document,"mousedown",T);L(document,"keydown",T);L(document,"keyup",T);L(document,"keypress",T);L(document,"cut",T);L(document,"paste",T);Wh&&(L(document,"touchstart",T),L(document,"touchend",T),L(document,"touchcancel",T));function Yh(a){this.j=a;this.g={};this.ka=[];this.i=[]}
function U(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
Yh.prototype.register=aa;Yh.prototype.unregister=function(){Tb(this.ka);this.ka.length=0;pg(this.i);this.i.length=0};
Yh.prototype.init=t;Yh.prototype.dispose=t;function Zh(a,b,c){a.i.push(R(b,c,a))}
function $h(a,b,c){var d=U(a,void 0),e=w(c,a);b in Vh||(Vh[b]=new E);Vh[b].subscribe(d,e);a.g[c]=e}
function ai(a,b,c){if(b in Vh){var d=Vh[b];d.unsubscribe(U(a,void 0),a.g[c]);0>=d.ba()&&(d.dispose(),delete Vh[b])}delete a.g[c]}
function bi(a,b){hb(a,"tooltip-text",b)}
;function ci(){Yh.call(this,"tooltip");this.b=0;this.f={}}
y(ci,Yh);ba(ci);k=ci.prototype;k.register=function(){$h(this,"mouseover",this.ja);$h(this,"mouseout",this.S);$h(this,"focus",this.Ia);$h(this,"blur",this.Ga);$h(this,"click",this.S);$h(this,"touchstart",this.Va);$h(this,"touchend",this.la);$h(this,"touchcancel",this.la)};
k.unregister=function(){ai(this,"mouseover",this.ja);ai(this,"mouseout",this.S);ai(this,"focus",this.Ia);ai(this,"blur",this.Ga);ai(this,"click",this.S);ai(this,"touchstart",this.Va);ai(this,"touchend",this.la);ai(this,"touchcancel",this.la);this.dispose();ci.B.unregister.call(this)};
k.dispose=function(){for(var a in this.f)this.S(this.f[a]);this.f={}};
k.ja=function(a){if(!(this.b&&1E3>x()-this.b)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(jb(a,"tooltip-hide-timer"),Ib(b));var b=w(function(){di(this,a);jb(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=G(b,c);
hb(a,"tooltip-show-timer",b.toString());a.title&&(bi(a,ei(a)),a.title="");b=ha(a).toString();this.f[b]=a}};
k.S=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(Ib(b),jb(a,"tooltip-show-timer"));b=w(function(){if(a){var b=Fd(fi(this,a));b&&(gi(b),b&&b.parentNode&&b.parentNode.removeChild(b),jb(a,"content-id"));(b=Fd(fi(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}jb(a,"tooltip-hide-timer")},this);
b=G(b,50);hb(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ha(a).toString();delete this.f[b]};
k.Ia=function(a){this.b=0;this.ja(a)};
k.Ga=function(a){this.b=0;this.S(a)};
k.Va=function(a,b,c){c.changedTouches&&(this.b=0,a=Xh(b,U(this),c.changedTouches[0].target),this.ja(a))};
k.la=function(a,b,c){c.changedTouches&&(this.b=x(),a=Xh(b,U(this),c.changedTouches[0].target),this.S(a))};
function hi(a,b){bi(a,b);a=C(a,"content-id");(a=Fd(a))&&Od(a,b)}
function ei(a){return C(a,"tooltip-text")||a.title}
function di(a,b){if(b){var c=ei(b);if(c){var d=Fd(fi(a,b));if(!d){d=document.createElement("div");d.id=fi(a,b);d.className=U(a,"tip");var e=document.createElement("div");e.className=U(a,"tip-body");var f=document.createElement("div");f.className=U(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=U(a,"tip-content");var l=ii(a,b),h=fi(a,b,"content");g.id=h;hb(b,"content-id",h);e.appendChild(g);l&&d.appendChild(l);d.appendChild(e);d.appendChild(f);var m=
Rd(b),h=fi(a,b,"arialabel"),f=document.createElement("div");ud(f,U(a,"arialabel"));f.id=h;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;Od(f,m);b.setAttribute("aria-labelledby",h);h=Rh()||document.body;h.appendChild(f);h.appendChild(d);hi(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",ud(g,U(a,"normal-wrap")));g=td(b,U(a,"reverse"));ji(a,b,d,e,l,g)||ji(a,b,d,e,l,!g);var v=U(a,"tip-visible");
G(function(){ud(d,v)},0)}}}}
function ji(a,b,c,d,e,f){var g;wd(c,U(a,"tip-reverse"),f);var l=0;f&&(l=1);a=hf(b);f=new K((a.width-10)/2,f?a.height:0);var h=Dd(b);g=new K(0,0);var m;m=h?Dd(h):document;m=!H||9<=Number(Cc)||Jd(Bd(m).b)?m.documentElement:m.body;b!=m&&(m=ff(b),h=Kd(Bd(h).b),g.l=m.left+h.l,g.o=m.top+h.o);f=new K(g.l+f.l,g.o+f.o);f=new K(f.l,f.o);g=(l&8&&"rtl"==ef(c,"direction")?l^4:l)&-9;l=hf(c);h=new pd(l.width,l.height);f=new K(f.l,f.o);h=new pd(h.width,h.height);0!=g&&(g&4?f.l-=h.width+0:g&2&&(f.l-=h.width/2),g&
1&&(f.o-=h.height+0));g=new cf(0,0,0,0);g.left=f.l;g.top=f.o;g.width=h.width;g.height=h.height;f=g;g=0;if(!(g&496||(g=f,h=new K(g.left,g.top),h instanceof K?(g=h.l,h=h.o):(g=h,h=void 0),c.style.left=gf(g,!1),c.style.top=gf(h,!1),h=new pd(f.width,f.height),l==h||l&&h&&l.width==h.width&&l.height==h.height)))if(l=h,g=Jd(Bd(Dd(c)).b),!H||I("10")||g&&I("8"))f=c.style,tc?f.MozBoxSizing="border-box":uc?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(l.width,0)+"px",f.height=Math.max(l.height,
0)+"px";else if(f=c.style,g){if(H){g=lf(c,"paddingLeft");h=lf(c,"paddingRight");m=lf(c,"paddingTop");var v=lf(c,"paddingBottom");g=new bf(m,h,v,g)}else g=df(c,"paddingLeft"),h=df(c,"paddingRight"),m=df(c,"paddingTop"),v=df(c,"paddingBottom"),g=new bf(parseFloat(m),parseFloat(h),parseFloat(v),parseFloat(g));if(!H||9<=Number(Cc))h=df(c,"borderLeftWidth"),m=df(c,"borderRightWidth"),v=df(c,"borderTopWidth"),Ba=df(c,"borderBottomWidth"),h=new bf(parseFloat(v),parseFloat(m),parseFloat(Ba),parseFloat(h));
else{h=nf(c,"borderLeft");m=nf(c,"borderRight");var v=nf(c,"borderTop"),Ba=nf(c,"borderBottom"),h=new bf(v,m,Ba,h)}f.pixelWidth=l.width-h.left-g.left-g.right-h.right;f.pixelHeight=l.height-h.top-g.top-g.bottom-h.bottom}else f.pixelWidth=l.width,f.pixelHeight=l.height;f=Id(window);1==c.nodeType?(c=ff(c),h=new K(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,h=new K(c.clientX,c.clientY));c=hf(d);m=Math.floor(c.width/2);l=!!(f.height<h.o+a.height);a=!!(h.o<a.height);g=!!(h.l<m);f=!!(f.width<
h.l+m);h=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||g)h=-5;else if("right"==b||f)h=20-c.width-3;b=Math.floor(h)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(l||a)}
function fi(a,b,c){a=U(a);var d=b.__yt_uid_key;d||(d=Wd(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function ii(a,b){var c=null;vc&&td(b,U(a,"masked"))&&((c=Fd("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Th(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=U(a,"tip-mask")));return c}
function gi(a){var b=Fd("yt-uix-tooltip-shared-mask"),c=b&&Vd(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Uh(b),document.body.appendChild(b))}
;function ki(){Yh.call(this,"subscription-button")}
y(ki,Yh);ba(ki);ki.prototype.register=function(){$h(this,"click",this.ra);Zh(this,Bh,this.Ma);Zh(this,Ch,this.La);Zh(this,Dh,this.Hb);Zh(this,Gh,this.Ma);Zh(this,Hh,this.La);Zh(this,Ih,this.Jb);Zh(this,Kh,this.Ab);Zh(this,Lh,this.zb)};
ki.prototype.unregister=function(){ai(this,"click",this.ra);ki.B.unregister.call(this)};
var Ud={za:"hover-enabled",$a:"yt-uix-button-subscribe",ab:"yt-uix-button-subscribed",Zb:"ypc-enabled",bb:"yt-uix-button-subscription-container",cb:"yt-subscription-button-disabled-mask-container"},li={$b:"channel-external-id",eb:"subscriber-count-show-when-subscribed",fb:"subscriber-count-tooltip",gb:"subscriber-count-title",ac:"href",cc:"insecure",Aa:"is-subscribed",dc:"parent-url",ec:"clicktracking",hb:"style-type",Ba:"subscription-id",fc:"target",jb:"ypc-enabled"};k=ki.prototype;
k.ra=function(a){var b=C(a,"href"),c=C(a,"insecure"),d=Qh(),c=c&&!0;if(b)a=C(a,"target")||"_self",window.open(b,a);else if(!c)if(d){b=C(a,"channel-external-id");d=C(a,"clicktracking");if(C(a,"ypc-enabled"))var c=C(a,"ypc-item-type"),e=C(a,"ypc-item-id"),c={itemType:c,itemId:e,subscriptionElement:a};else c=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");Q(Fh,new xh(b,f,c,a,d,e))}else Q(Ah,new vh(b,c,d,e))}else mi(this,a)};
k.Ma=function(a){this.V(a.b,this.Ta,!0)};
k.La=function(a){this.V(a.b,this.Ta,!1)};
k.Hb=function(a){this.V(a.b,this.Ua,!0,a.subscriptionId)};
k.Jb=function(a){this.V(a.b,this.Ua,!1)};
k.Ab=function(a){this.V(a.b,this.pb)};
k.zb=function(a){this.V(a.b,this.nb)};
k.Ua=function(a,b,c){b?(hb(a,li.Aa,"true"),c&&hb(a,li.Ba,c)):(jb(a,li.Aa),jb(a,li.Ba));ni(a)};
k.Ta=function(a,b){var c;c=Td(a);wd(c,Ud.cb,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function ni(a){var b=C(a,li.hb),c=!!C(a,"is-subscribed"),b="-"+b,d=Ud.ab+b;wd(a,Ud.$a+b,!c);wd(a,d,c);C(a,li.fb)&&!C(a,li.eb)&&(b=U(ci.getInstance()),wd(a,b,!c),a.title=c?"":C(a,li.gb));c?G(function(){ud(a,Ud.za)},1E3):vd(a,Ud.za)}
k.pb=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(ud(a,"ypc-enabled"),hb(a,li.jb,"true"))};
k.nb=function(a){C(a,"ypc-enabled")&&(vd(a,"ypc-enabled"),jb(a,"ypc-enabled"))};
function oi(a,b){return wa(Gd(U(a)),function(a){return b==C(a,"channel-external-id")},a)}
k.kb=function(a,b,c){var d=Ja(arguments,2);z(a,function(a){b.apply(this,Da(a,d))},this)};
k.V=function(a,b,c){var d=oi(this,a);this.kb.apply(this,Da([d],Ja(arguments,1)))};
function mi(a,b){a=w(function(a){a.discoverable_subscriptions&&Fb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ra(b)},a);
Ph(a,"subscribe")}
;var pi=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",pi,void 0);/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var qi=window,ri=document,si=qi.location;function ti(){}
var ui=/\[native code\]/;function V(a,b,c){return a[b]=a[b]||c}
function vi(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function wi(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function W(){var a;if((a=Object.create)&&ui.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var xi=V(qi,"gapi",{});var X;X=V(qi,"___jsl",W());V(X,"I",0);V(X,"hel",10);function yi(){var a=si.href,b;if(X.dpo)b=X.h;else{b=X.h;var c=/([#].*&|[#])jsh=([^&#]*)/g,d=/([?#].*&|[?#])jsh=([^&#]*)/g;if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function zi(a){var b=V(X,"PQ",[]);X.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Ai(a){return V(V(X,"H",W()),a,W())}
;var Bi=V(X,"perf",W());V(Bi,"g",W());var Ci=V(Bi,"i",W());V(Bi,"r",[]);W();W();function Di(a,b,c){b&&0<b.length&&(b=Ei(b),c&&0<c.length&&(b+="___"+Ei(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=V(Ci,"_p",W()),V(b,c,W())[a]=(new Date).getTime(),b=Bi.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Ei(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Fi=W(),Gi=[];function Hi(a){throw Error("Bad hint"+(a?": "+a:""));}
Gi.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?X[b]=V(X,b,[]).concat(c):V(X,b,c)}if(b=a.u)a=V(X,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Ii=/^(\/[a-zA-Z0-9_\-]+)+$/,Ji=/^[a-zA-Z0-9\-_\.,!]+$/,Ki=/^gapi\.loaded_[0-9]+$/,Li=/^[a-zA-Z0-9,._-]+$/;function Mi(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Fi[f],l=null;g?l=g(e,b,c,d):Hi("no hint processor for: "+f);l||Hi("failed to generate load url");b=l;c=b.match(Ni);(d=b.match(Oi))&&1===d.length&&Pi.test(b)&&c&&1===c.length||Hi("failed sanity: "+a);return l}
function Qi(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Ri(a);Ki.test(c)||Hi("invalid_callback");b=Si(b);d=d&&d.length?Si(d):null;return[encodeURIComponent(a.Lb).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Ea?"/am="+e(a.Ea):"",a.Ra?"/rs="+e(a.Ra):"",a.Za?"/t="+e(a.Za):"","/cb=",e(c)].join("")}
function Ri(a){"/"!==a.charAt(0)&&Hi("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Hi("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),l=decodeURIComponent(f[1]);2==f.length&&g&&l&&(a[g]=a[g]||l)}b="/"+c.join("/");Ii.test(b)||Hi("invalid_prefix");c=Ti(a,"k",!0);d=Ti(a,"am");e=Ti(a,"rs");a=Ti(a,"t");return{Lb:b,version:c,
Ea:d,Ra:e,Za:a}}
function Si(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Li.test(e)&&b.push(e)}return b.join(",")}
function Ti(a,b,c){a=a[b];!a&&c&&Hi("missing: "+b);if(a){if(Ji.test(a))return a;Hi("invalid: "+b)}return null}
var Pi=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Oi=/\/cb=/g,Ni=/\/\//g;function Ui(){var a=yi();if(!a)throw Error("Bad hint");return a}
Fi.m=function(a,b,c,d){(a=a[0])||Hi("missing_hint");return"https://apis.google.com"+Qi(a,b,c,d)};
var Vi=decodeURI("%73cript"),Wi=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Xi(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>vi.call(b,e)&&c.push(e)}return c}
function Yi(){var a=X.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Wi)?a:X.nonce=null;var b=V(X,"us",[]);if(!b||!b.length)return X.nonce=null;for(var c=ri.getElementsByTagName(Vi),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,l=b.length;g<l&&b[g]!==f.src;++g);if(g!==l&&a&&a===String(a)&&a.match(Wi))return X.nonce=a}}return null}
function Zi(a){if("loading"!=ri.readyState)$i(a);else{var b=Yi(),c="";null!==b&&(c=' nonce="'+b+'"');ri.write("<"+Vi+' src="'+encodeURI(a)+'"'+c+"></"+Vi+">")}}
function $i(a){var b=ri.createElement(Vi);b.setAttribute("src",a);a=Yi();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=ri.getElementsByTagName(Vi)[0])?a.parentNode.insertBefore(b,a):(ri.head||ri.body||ri.documentElement).appendChild(b)}
function aj(a,b){var c=b&&b._c;if(c)for(var d=0;d<Gi.length;d++){var e=Gi[d][0],f=Gi[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function bj(a,b,c){cj(function(){var c;c=b===yi()?V(xi,"_",W()):W();c=V(Ai(b),"_",c);a(c)},c)}
function dj(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);aj(a,c);b=a?a.split(":"):[];var d=c.h||Ui(),e=V(X,"ah",W());if(e["::"]&&b.length){a=[];for(var f=null;f=b.shift();){var g=f.split("."),g=e[f]||e[g[1]&&"ns:"+g[0]||""]||d,l=a.length&&a[a.length-1]||null,h=l;l&&l.hint==g||(h={hint:g,features:[]},a.push(h));h.features.push(f)}var m=a.length;if(1<m){var v=c.callback;v&&(c.callback=function(){0==--m&&v()})}for(;b=a.shift();)ej(b.features,c,b.hint)}else ej(b||[],c,d)}
function ej(a,b,c){function d(a,b){if(Ba)return 0;qi.clearTimeout(v);Ed.push.apply(Ed,ia);var d=((xi||{}).config||{}).update;d?d(f):f&&V(X,"cu",[]).push(f);if(b){Di("me0",a,qc);try{bj(b,c,m)}finally{Di("me1",a,qc)}}return 1}
a=wi(a)||[];var e=b.callback,f=b.config,g=b.timeout,l=b.ontimeout,h=b.onerror,m=void 0;"function"==typeof h&&(m=h);var v=null,Ba=!1;if(g&&!l||!g&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var h=V(Ai(c),"r",[]).sort(),Ed=V(Ai(c),"L",[]).sort(),qc=[].concat(h);0<g&&(v=qi.setTimeout(function(){Ba=!0;l()},g));
var ia=Xi(a,Ed);if(ia.length){var ia=Xi(a,h),Ha=V(X,"CP",[]),Ia=Ha.length;Ha[Ia]=function(a){function b(){var a=Ha[Ia+1];a&&a()}
function c(b){Ha[Ia]=null;d(ia,a)&&zi(function(){e&&e();b()})}
if(!a)return 0;Di("ml1",ia,qc);0<Ia&&Ha[Ia-1]?Ha[Ia]=function(){c(b)}:c(b)};
if(ia.length){var ve="loaded_"+X.I++;xi[ve]=function(a){Ha[Ia](a);xi[ve]=null};
a=Mi(c,ia,"gapi."+ve,h);h.push.apply(h,ia);Di("ml0",ia,qc);b.sync||qi.___gapisync?Zi(a):$i(a)}else Ha[Ia](ti)}else d(ia)&&e&&e()}
function cj(a,b){if(X.hee&&0<X.hel)try{return a()}catch(c){b&&b(c),X.hel--,dj("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
xi.load=function(a,b){return cj(function(){return dj(a,b)})};function fj(a){this.b=a||Qf();gj||(gj=hj(this.b))}
var gj=null;function hj(a){return(new P(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=fa(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Sa(d,{_c:{jsl:{h:F("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||F("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=Vc(1<g.length?g[1]:g[0])}else e={};var l=e.gapi_jsh;l&&Sa(d,{_c:{jsl:{h:l}}})}dj("client",d)}catch(h){Jb(h)}})).then(function(){})}
fj.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;ra(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Fa;ra(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",F("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
fj.prototype.f=function(){return{context:Rf(this.b)}};
fj.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=G(function(){e||(e=!0,c.R&&c.R())},c.timeout));
ij(this,a,b,function(a){if(!e)if(e=!0,d&&Ib(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function ij(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":F("VISITOR_DATA")},method:"POST",body:Hc(c)},f=w(a.i,a);gj.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function jj(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function kj(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;v=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],l=e[4],m,v,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),v=1518500249):(m=d^f^h,v=1859775393):60>c?(m=d&f|h&(d|f),v=2400959708):(m=d^f^h,v=3395469782),m=((a<<5|a>>>27)&4294967295)+m+l+v+b[c]&4294967295,l=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64;for(;d<c;)if(f[m++]=a[d++],v++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64}
function d(){var a=[],d=8*v;56>m?c(l,56-m):c(l,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var h=24;0<=h;h-=8)a[d++]=e[g]>>h&255;return a}
for(var e=[],f=[],g=[],l=[128],h=1;64>h;++h)l[h]=0;var m,v;a();return{reset:a,update:c,digest:d,mb:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function lj(a,b,c){var d=[],e=[];if(1==(da(c)?2:1))return e=[b,a],z(d,function(a){e.push(a)}),mj(e.join(" "));
var f=[],g=[];z(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];z(d,function(a){e.push(a)});
a=mj(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function mj(a){var b=kj();b.update(a);return b.mb().toLowerCase()}
;function nj(){this.b=Qf()}
nj.prototype.f=function(){return{context:Rf(this.b)}};
nj.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":F("VISITOR_DATA")},C:b,Pa:"JSON",R:c.R,F:c.F,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=jj(String(n.location.href)),e=n.__OVERRIDE_SID;null==e&&(e=(new Se(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==d&&(d=(new Se(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(n.location.href);
c=f&&d&&e?[e,lj(jj(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=F("SESSION_INDEX",0));bd("//"+this.b.Xb+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey,b)};function Ne(){return M("enable_youtubei_innertube")?nj:fj}
;function oj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function pj(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return qj(a)}
function qj(a,b,c){if(ga(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function rj(a,b,c,d){if(ga(a)&&!da(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function sj(a){var b=a.video_id||a.videoId;if(u(b)){var c=pe()||{},d=pe()||{};p(void 0)?d[b]=void 0:delete d[b];var e=x()+3E5,f=re;if(f&&window.JSON){u(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;var tj=null,uj=[];function vj(a){return{externalChannelId:a.externalChannelId,yb:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function wj(a){xj(vj(a))}
function xj(a){Qh()?(Q(Ah,new vh(a.externalChannelId,a.yb?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Tc({event:"subscribe",source:a.source}))&&sg(a)):yj(a)}
function yj(a){Ph(function(b){b.subscription_ajax&&xj(a)},null)}
function zj(a){a=vj(a);Q(Fh,new xh(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Tc({event:"unsubscribe",source:a.source}))&&sg(a)}
function Aj(a){tj&&tj.channelSubscribed(a.b,a.subscriptionId)}
function Bj(a){tj&&tj.channelUnsubscribed(a.b)}
;function Cj(a){D.call(this);this.g=a;this.g.subscribe("command",this.Qa,this);this.i={};this.j=!1}
y(Cj,D);k=Cj.prototype;k.start=function(){this.j||this.f||(this.j=!0,Dj(this.g,"RECEIVING"))};
k.Xa=aa;k.addEventListener=aa;k.removeEventListener=aa;k.Qa=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":u(c.event)&&(a=c.event,a in this.i||(b=w(this.Pb,this,a),this.i[a]=b,this.addEventListener(a,b)));break;case "removeEventListener":u(c.event)&&Ej(this,c.event);break;default:this.Xa(a,b)}}};
k.Pb=function(a,b){this.j&&!this.f&&Dj(this.g,a,this.sa(a,b))};
k.sa=function(a,b){if(null!=b)return{value:b}};
function Ej(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
k.A=function(){this.g.unsubscribe("command",this.Qa,this);this.g=null;for(var a in this.i)Ej(this,a);Cj.B.A.call(this)};function Fj(a,b){Cj.call(this,b);this.b=a;this.start()}
y(Fj,Cj);k=Fj.prototype;k.addEventListener=function(a,b){this.b.addEventListener(a,b)};
k.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
k.Xa=function(a,b){this.b.isReady()&&this.b[a]&&(b=Gj(a,b||{}),b=this.b[a].apply(this.b,b),(b=Hj(a,b))&&this.j&&!this.f&&Dj(this.g,a,b))};
function Gj(a,b){switch(a){case "loadVideoById":return b=qj(b),sj(b),[b];case "cueVideoById":return b=qj(b),sj(b),[b];case "loadVideoByPlayerVars":return sj(b),[b];case "cueVideoByPlayerVars":return sj(b),[b];case "loadPlaylist":return b=rj(b),sj(b),[b];case "cuePlaylist":return b=rj(b),sj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Hj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
k.sa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Fj.B.sa.call(this,a,b)};
k.A=function(){Fj.B.A.call(this);delete this.b};function Ij(a,b,c,d){D.call(this);this.i=b||null;this.G="*";this.j=c||null;this.b=null;this.channel=d||null;this.O=!!a;this.L=w(this.P,this);window.addEventListener("message",this.L)}
y(Ij,D);Ij.prototype.P=function(a){if(!("*"!=this.j&&a.origin!=this.j||this.i&&a.source!=this.i)&&u(a.data)){var b;try{b=Fc(a.data)}catch(c){return}null!=b&&(this.O&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel)||b&&this.J(a,b))}};
Ij.prototype.J=aa;Ij.prototype.sendMessage=function(a,b){if(b=b||this.i){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var c=Hc(a);b.postMessage(c,this.G)}catch(d){Jb(d,"WARNING")}}};
Ij.prototype.A=function(){window.removeEventListener("message",this.L);Ij.B.A.call(this)};function Jj(a,b,c){Ij.call(this,a,b,c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.D=this.g=this.w=null}
y(Jj,Ij);Jj.prototype.J=function(a,b){switch(b.event){case "listening":"null"!=a.origin?this.j=this.G=a.origin:Jb(Error("MessageEvent origin is null"),"WARNING");this.i=a.source;this.b=b.id;this.g&&(this.g(),this.g=null);break;case "command":this.w&&(this.D&&!Aa(this.D,b.func)||this.w(b.func,b.args))}};function Kj(){var a=this.f=new Jj(!!F("WIDGET_ID_ENFORCE")),b=w(this.Mb,this);a.w=b;a.D=null;this.f.channel="widget";if(a=F("WIDGET_ID"))this.f.b=a;this.i=[];this.w=!1;this.j={}}
k=Kj.prototype;k.Mb=function(a,b){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,Lj(this,a)),this.j[a]=!0)):this.Ya(a,b)};
k.Ya=function(){};
function Lj(a,b){return w(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.qb=function(){this.w=!0;this.sendMessage("initialDelivery",this.ta());this.sendMessage("onReady");z(this.i,this.Sa,this);this.i=[]};
k.ta=function(){return null};
function Mj(a,b){a.sendMessage("infoDelivery",b)}
k.Sa=function(a){this.w?this.f.sendMessage(a):this.i.push(a)};
k.sendMessage=function(a,b){this.Sa({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Nj(a){Kj.call(this);this.b=a;this.g=[];this.addEventListener("onReady",w(this.Gb,this));this.addEventListener("onVideoProgress",w(this.Tb,this));this.addEventListener("onVolumeChange",w(this.Ub,this));this.addEventListener("onApiChange",w(this.Ob,this));this.addEventListener("onPlaybackQualityChange",w(this.Qb,this));this.addEventListener("onPlaybackRateChange",w(this.Rb,this));this.addEventListener("onStateChange",w(this.Sb,this))}
y(Nj,Kj);k=Nj.prototype;k.Ya=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&oj(a)){var c;c=b;if(ga(c[0])&&!da(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=qj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=pj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=rj.apply(window,c)}c=d}sj(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);oj(a)&&Mj(this,this.ta())}};
k.Gb=function(){var a=w(this.qb,this);this.f.g=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ta=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ca(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var l=this.b[e]();b[f]=l}catch(h){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=x()/1E3;return b};
k.Sb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Mj(this,a)};
k.Qb=function(a){Mj(this,{playbackQuality:a})};
k.Rb=function(a){Mj(this,{playbackRate:a})};
k.Ob=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,l=f.length;g<l;g++){var h=f[g],m=this.b.getOption(e,h);b[e][h]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Ub=function(){Mj(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Tb=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Mj(this,a)};
k.dispose=function(){Nj.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Oj(){D.call(this);this.b=new E;zb(this,na(Ab,this.b))}
y(Oj,D);Oj.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
Oj.prototype.unsubscribe=function(a,b,c){return this.f?!1:this.b.unsubscribe(a,b,c)};
Oj.prototype.T=function(a){return this.f?!1:this.b.T(a)};
Oj.prototype.N=function(a,b){return this.f?!1:this.b.N.apply(this.b,arguments)};function Pj(a,b,c){Oj.call(this);this.g=a;this.i=b;this.j=c}
y(Pj,Oj);function Dj(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(Hc(a),d.i))}}
Pj.prototype.A=function(){this.i=this.g=null;Pj.B.A.call(this)};function Qj(a,b,c){D.call(this);this.b=a;this.i=c;this.j=L(window,"message",w(this.w,this));this.g=new Pj(this,a,b);zb(this,na(Ab,this.g))}
y(Qj,D);Qj.prototype.w=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,u(a))){try{a=Fc(a)}catch(d){return}a.command&&(b=this.g,b.f||b.N("command",a.command,a.data))}};
Qj.prototype.A=function(){ae(this.j);this.b=null;Qj.B.A.call(this)};var Rj=document,Y=window;var Sj=!1,Tj="";function Uj(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Sj=!0,a.description)){Tj=Uj(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Sj=!0;Tj="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Sj=!(!a||!a.enabledPlugin))){Tj=Uj(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Sj=!0;Tj=Uj(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Sj=!0;Tj="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Sj=!0,Tj=Uj(b.GetVariable("$version"))}catch(c){}})();
var Vj=Sj,Wj=Tj;function Xj(a){return(a=a.exec(A))?a[1]:""}
(function(){if(ue)return Xj(/Firefox\/([0-9.]+)/);if(H||sc||rc)return Bc;if(ze)return Xj(/Chrome\/([0-9.]+)/);if(Ae&&!(nc()||B("iPad")||B("iPod")))return Xj(/Version\/([0-9.]+)/);if(we||xe){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(A);if(a)return a[1]+"."+a[2]}else if(ye)return(a=Xj(/Android\s+([0-9.]+)/))?a:Xj(/Version\/([0-9.]+)/);return""})();function Yj(a){Zj();this.enabled=Math.random()<a;this.events=[]}
var Zj=n.performance&&n.performance.now?w(n.performance.now,n.performance):x;function ak(a){Yj.call(this,a)}
y(ak,Yj);new ak(1E-4);var bk=(new Date).getTime();function ck(){var a=Qa(dk);return new P(function(b,c){a.F=function(a){Yc(a)?b(a):c(new ek("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new ek("Unknown request error","net.unknown"))};
a.R=function(){c(new ek("Request timed out","net.timeout"))};
cd("//googleads.g.doubleclick.net/pagead/id",a)})}
function ek(a,b){pa.call(this,a+", errorCode="+b);this.errorCode=b}
y(ek,pa);ek.prototype.name="PromiseAjaxError";function fk(a){pa.call(this,a.message||a.description||a.name);this.b=a instanceof ag}
y(fk,pa);fk.prototype.name="BiscottiError";function gk(a,b){this.f=a;this.b=b}
gk.prototype.then=function(a,b,c){try{if(p(this.f))return a?Yf(a.call(c,this.f)):Yf(this.f);if(p(this.b)){if(!b)return Zf(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Zf(this.b):Yf(d)}throw Error("Invalid Result_ state");}catch(e){return Zf(e)}};
Mf(gk);var dk={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},hk=null;function ik(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return jk(""),hk=new gk(""),"";a=JSON.parse(a.substr(4)).id;jk(a);hk=new gk(a);kk(18E5,2);return a}
function lk(a,b){b=new fk(b);jk("");hk=new gk(void 0,b);0<a&&kk(12E4,a-1);throw b;}
function kk(a,b){G(function(){var a=w(lk,n,b),a=ck().then(ik,a);$f(a,null,t,void 0)},a)}
function jk(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function mk(){}
function nk(){try{var a;try{var b=r("yt.www.ads.biscotti.getId_"),c;if(b)c=b();else{if(!hk){var d=w(lk,n,2);hk=ck().then(ik,d)}c=hk}a=c}catch(e){a=Zf(e)}a.then(ok,mk);G(nk,18E5)}catch(e){Jb(e)}}
function ok(a){var b;a:{try{b=window.top.location.href}catch(v){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:bk,flash:Wj||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=Y.history.length}catch(v){c=0}b.u_his=c;b.u_java=!!Y.navigator&&"unknown"!==typeof Y.navigator.javaEnabled&&!!Y.navigator.javaEnabled&&Y.navigator.javaEnabled();Y.screen&&(b.u_h=Y.screen.height,b.u_w=Y.screen.width,b.u_ah=Y.screen.availHeight,b.u_aw=Y.screen.availWidth,b.u_cd=Y.screen.colorDepth);
Y.navigator&&Y.navigator.plugins&&(b.u_nplug=Y.navigator.plugins.length);Y.navigator&&Y.navigator.mimeTypes&&(b.u_nmime=Y.navigator.mimeTypes.length);b.bid=a;b.ca_type=Vj?"flash":"image";if(M("enable_server_side_search_pyv")||M("enable_server_side_mweb_search_pyv")){var d;a=window;try{d=a.screenX;var e=a.screenY}catch(v){}try{var f=a.outerWidth,g=a.outerHeight}catch(v){}try{var l=a.innerWidth,h=a.innerHeight}catch(v){}d=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,f,g,l,h];var m;e=window.top||Y;try{m=e.document&&!e.document.body?new pd(-1,-1):Id(e||window).round()}catch(v){m=new pd(-12245933,-12245933)}e=0;window.SVGElement&&document.createElementNS&&(e|=1);oa(b,{bc:e,bih:m.height,biw:m.width,brdim:d.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[Rj.webkitVisibilityState||Rj.mozVisibilityState||Rj.visibilityState||""]||0,wgl:!!Y.WebGLRenderingContext})}bd("/ad_data_204",{ub:!0,C:b})}
;function pk(){this.b=F("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Ue.get(""+this.b,void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
ba(pk);var Z=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Z,void 0);function qk(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function rk(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function sk(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
pk.prototype.get=function(a,b){rk(a);qk(a);a=void 0!==Z[a]?Z[a].toString():null;return null!=a?a:b?b:""};
pk.prototype.set=function(a,b){rk(a);qk(a);if(null==b)throw"ExpectedNotNull";Z[a]=b.toString()};
pk.prototype.remove=function(a){rk(a);qk(a);delete Z[a]};
pk.prototype.clear=function(){Z={}};function tk(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&sg(c)}}
;function uk(a){N.call(this,1,arguments);this.qa=a}
y(uk,N);function vk(a,b){N.call(this,2,arguments);this.f=a;this.b=b}
y(vk,N);function wk(a,b,c,d){N.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
y(wk,N);function xk(a,b){N.call(this,1,arguments);this.f=a;this.b=b||null}
y(xk,N);function yk(a){N.call(this,1,arguments)}
y(yk,N);var zk=new O("ypc-core-load",uk),Ak=new O("ypc-guide-sync-success",vk),Bk=new O("ypc-purchase-success",wk),Ck=new O("ypc-subscription-cancel",yk),Dk=new O("ypc-subscription-cancel-success",xk),Ek=new O("ypc-init-subscription",yk);var Fk=!1,Gk=[],Hk=[];function Ik(a){a.b?Fk?Q(Eh,a):Q(zk,new uk(function(){Q(Ek,new yk(a.b))})):Jk(a.f,a.i,a.g,a.source)}
function Kk(a){a.b?Fk?Q(Jh,a):Q(zk,new uk(function(){Q(Ck,new yk(a.b))})):Lk(a.f,a.subscriptionId,a.i,a.g,a.source)}
function Mk(a){Nk(Ea(a.b))}
function Ok(a){Pk(Ea(a.b))}
function Qk(a){Rk(a.g,a.f,a.b)}
function Sk(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&Q(Dh,new wh(b,c,a.b.channelInfo))}
function Tk(a){var b=a.b;Ka(a.f,function(a,d){Q(Dh,new wh(d,a,b[d]))})}
function Uk(a){Q(Ih,new S(a.f.itemId));a.b&&a.b.length&&(Vk(a.b,Ih),Vk(a.b,Kh))}
function Jk(a,b,c,d){var e=new S(a);Q(Bh,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=F("PLAYBACK_ID"))&&(c.plid=d);(d=F("EVENT_ID"))&&(c.ei=d);b&&Wk(b,c);cd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",xa:f,C:c,F:function(b,c){b=c.response;Q(Dh,new wh(a,b.id,b.channel_info));b.show_feed_privacy_dialog&&Ub("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);b.actions&&tk(b.actions)},
wa:function(){Q(Ch,e)}})}
function Lk(a,b,c,d,e){var f=new S(a);Q(Gh,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=F("PLAYBACK_ID"))&&(d.plid=a);(a=F("EVENT_ID"))&&(d.ei=a);c&&Wk(c,d);cd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",xa:g,C:d,F:function(a,b){a=b.response;Q(Ih,f);a.actions&&tk(a.actions)},
wa:function(){Q(Hh,f)}})}
function Rk(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new uh(a,b,c);cd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",C:d,onError:function(){Q(Oh,e)},
F:function(){Q(Nh,e)}})}}
function Nk(a){if(a.length){var b=Ga(a,0,40);Q("subscription-batch-subscribe-loading");Vk(b,Bh);var c={};c.a=b.join(",");var d=function(){Q("subscription-batch-subscribe-loaded");Vk(b,Ch)};
cd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",C:c,F:function(c,f){d();c=f.response;f=c.id;if(da(f)&&f.length==b.length){var e=c.channel_info_map;z(f,function(a,c){c=b[c];Q(Dh,new wh(c,a,e[c]))});
a.length?Nk(a):Q("subscription-batch-subscribe-finished")}},
onError:function(){d();Q("subscription-batch-subscribe-failure")}})}}
function Pk(a){if(a.length){var b=Ga(a,0,40);Q("subscription-batch-unsubscribe-loading");Vk(b,Gh);var c={};c.c=b.join(",");var d=function(){Q("subscription-batch-unsubscribe-loaded");Vk(b,Hh)};
cd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",C:c,F:function(){d();Vk(b,Ih);a.length&&Pk(a)},
onError:function(){d()}})}}
function Vk(a,b){z(a,function(a){Q(b,new S(a))})}
function Wk(a,b){a=Vc(a);oa(b,a)}
;var Xk=null,Yk=null,Zk=null,$k={};function al(a){var b=a.id;a=a.ve_type;var c=Ce++;a=new Be(void 0,a,c);$k[b]=a;b=Re();c=Qe();b&&c&&Le(b,c,a)}
function bl(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Fb("client-screen-nonce",b),Fb("ROOT_VE_TYPE",a),a=Qe()))for(var c in $k)Le(b,a,$k[c])}
function cl(a){$k[a.id]=new Be(a.tracking_params)}
function dl(a){var b=Re();a=$k[a.id];b&&a&&Me(Ne(),{click:{csn:b,visualElement:De(a)}},void 0)}
function el(a){a=a.ids;var b=Re();if(b){for(var c=[],d=0;d<a.length;d++){var e=$k[a[d]];e&&c.push(e)}c.length&&Oe(b,c)}}
function fl(){var a=Xk.startInteractionLogging;a&&a()}
;q("yt.setConfig",Fb,void 0);q("yt.setMsg",function(a){Gb(Eb,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=jd)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,l,h=!1;try{g=a.lineNumber||a.jc||"Not available"}catch(Ba){g="Not available",h=!0}try{l=a.fileName||a.filename||a.sourceURL||
n.$googDebugFname||f}catch(Ba){l="Not available",h=!0}a=!h&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(id[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={xa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},C:{url:F("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.C.stack=e);for(var m in c)b.C["client."+m]=c[m];if(m=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var v in m)b.C[v]=m[v];cd("/error_204",b);id[a.message]=!0;jd++}}},void 0);
q("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);"1"!=a.privembed&&nk();"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=F("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);F("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&sj(a.args);Xk=b=hh("player",a);b.addEventListener("onScreenChanged",bl);b.addEventListener("onLogClientVeCreated",al);b.addEventListener("onLogServerVeCreated",cl);b.addEventListener("onLogVeClicked",
dl);b.addEventListener("onLogVesShown",el);b.addEventListener("onReady",fl);var d=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?Zk=new Nj(b):F("ENABLE_POST_API")&&u(d)&&u(c)&&(Yk=new Qj(window.parent,d,c),Zk=new Fj(b,Yk.g));F("ENABLE_CAST_API")||(a.args.enablecastapi="0");F("BG_P")&&(F("BG_I")||F("BG_IU"))&&fc();nd();tj=b;tj.addEventListener("SUBSCRIBE",wj);tj.addEventListener("UNSUBSCRIBE",zj);uj.push(R(Dh,Aj),R(Ih,Bj))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&sg(a);return!0},void 0);
var gl=Hb(function(){Dg("ol");Fk=!0;Hk.push(R(Ah,Ik),R(Fh,Kk));Fk||Hk.push(R(Eh,Ik),R(Jh,Kk),R(yh,Mk),R(zh,Ok),R(Mh,Qk),R(Bk,Sk),R(Dk,Uk),R(Ak,Tk));var a=pk.getInstance(),b=1<window.devicePixelRatio;if(!!((sk("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=sk(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Z)b.push(e+"="+escape(Z[e]));Ue.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),hl=Hb(function(){var a=
Xk;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();F("PL_ATT")&&(ec=null);for(var a=0,b=ld.length;a<b;a++){var c=ld[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):Ib(c)}}ld.length=0;a=ac("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Wb(a),b.parentNode.removeChild(b);md=!1;Fb("DCLKSTAT",0);Tb(Gk);Gk.length=0;pg(Hk);Hk.length=0;Fk=!1;tj&&(tj.removeEventListener("SUBSCRIBE",xj),tj.removeEventListener("UNSUBSCRIBE",zj));tj=null;pg(uj);uj.length=0;
Bb(Zk,Yk);if(a=Xk)a.removeEventListener("onScreenChanged",bl),a.removeEventListener("onLogClientVeCreated",al),a.removeEventListener("onLogServerVeCreated",cl),a.removeEventListener("onLogVeClicked",dl),a.removeEventListener("onLogVesShown",el),a.removeEventListener("onReady",fl),a.destroy();$k={}});
window.addEventListener?(window.addEventListener("load",gl),window.addEventListener("unload",hl)):window.attachEvent&&(window.attachEvent("onload",gl),window.attachEvent("onunload",hl));var il=ki.getInstance(),jl=U(il);jl in pi||(il.register(),il.ka.push(Rb("yt-uix-init-"+jl,il.init,il)),il.ka.push(Rb("yt-uix-dispose-"+jl,il.dispose,il)),pi[jl]=il);})();
