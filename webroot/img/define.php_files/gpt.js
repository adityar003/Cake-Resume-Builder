(function(){var e=true,f=null,g=false,j,k=this,l=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b},m=function(a){return typeof a=="string"},n=function(a){return typeof a=="number"};Math.floor(Math.random()*2147483648).toString(36);
var aa=function(a,b){var c=b||k;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var h=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(h,d);return a.apply(c,h)}}else return function(){return a.apply(c,arguments)}},ba=function(a,b){function c(){}c.prototype=b.prototype;a.Ma=b.prototype;a.prototype=new c};var o=function(){return k.googletag||(k.googletag={})},p=function(a,b,c){var d=o();if(!(a in d)||c)d[a]=b;return d[a]},r=function(a,b){if(a.attachEvent){a.attachEvent("onload",b);return e}if(a.addEventListener){a.addEventListener("load",b,g);return e}return g};var s=function(a,b,c,d,h){this.N=new Date;this.Ia=d||f;this.Fa=c||f;this.Z=a;this.$=b;this.G=h||f};j=s.prototype;j.V=function(){return this.Ia};j.U=function(){return this.Fa};j.T=function(){return this.Z};j.W=function(){return this.N};j.ra=function(){return this.$};j.sa=function(){return this.G};var ca=["Debug","Info","Warning","Error","Fatal"];
s.prototype.toString=function(){var a=[];a.push(this.N.toTimeString());a.push(": ");a.push(ca[this.Z]);a.push(": ");a.push(this.$);if(this.G){a.push(" Duration: ");a.push(this.N.getTime()-this.G.W().getTime());a.push("ms.")}return a.join("")};s.prototype.getTimestamp=s.prototype.W;s.prototype.getService=s.prototype.U;s.prototype.getSlot=s.prototype.V;s.prototype.getLevel=s.prototype.T;s.prototype.getMessage=s.prototype.ra;s.prototype.getReference=s.prototype.sa;var v=function(){this.n=[]};v.prototype.ka=function(){return this.n};v.prototype.oa=function(a){return w(this,function(b){return b.U()===a})};v.prototype.pa=function(a){return w(this,function(b){return b.V()===a})};v.prototype.na=function(a){return w(this,function(b){return b.T()>=a})};var w=function(a,b){for(var c=[],d=0;d<a.n.length;++d)b(a.n[d])&&c.push(a.n[d]);return c};v.prototype.log=function(a,b,c,d,h){a=new s(a,b,c,d,h);this.n.push(a);return a};
v.prototype.info=function(a,b,c,d){return this.log(1,a,b,c,d)};v.prototype.error=function(a,b,c,d){return this.log(3,a,b,c,d)};var x=function(){var a=o();return a.debug_log||(a.debug_log=new v)};p("getEventLog",x);v.prototype.getAllEvents=v.prototype.ka;v.prototype.getEventsByService=v.prototype.oa;v.prototype.getEventsBySlot=v.prototype.pa;v.prototype.getEventsByLevel=v.prototype.na;var y=function(){this.aa=this.D=0};y.prototype.push=function(){for(var a=x(),b=0;b<arguments.length;++b)try{if(l(arguments[b])=="function"){arguments[b]();this.D++}}catch(c){this.aa++;a.error("Exception invoking function: "+c.message)}a.info("Invoked queued function. Total: "+this.D+" Errors: "+this.aa);return this.D};y.prototype.push=y.prototype.push;function da(a){this.t={};this.tick=function(b,c,d){this.t[b]=[d?d:(new Date).getTime(),c]};this.tick("start",f,a)}var ea=new da;window.GPT_jstiming={Timer:da,load:ea};try{var z=f;if(window.chrome&&window.chrome.csi)z=Math.floor(window.chrome.csi().pageT);if(z==f)if(window.gtbExternal)z=window.gtbExternal.pageT();if(z==f)if(window.external)z=window.external.pageT;if(z)window.GPT_jstiming.pt=z}catch(fa){};if(window.GPT_jstiming){window.GPT_jstiming.Q={};window.GPT_jstiming.Ea=1;var ga=function(a,b,c){var d=a.t[b],h=a.t.start;if(d&&(h||c)){d=a.t[b][0];h=c!=undefined?c:h[0];return d-h}},ha=function(a,b,c){var d="";if(window.GPT_jstiming.pt){d+="&srt="+window.GPT_jstiming.pt;delete window.GPT_jstiming.pt}try{if(window.external&&window.external.tran)d+="&tran="+window.external.tran;else if(window.gtbExternal&&window.gtbExternal.tran)d+="&tran="+window.gtbExternal.tran();else if(window.chrome&&window.chrome.csi)d+=
"&tran="+window.chrome.csi().tran}catch(h){}var i=window.chrome;if(i)if(i=i.loadTimes){if(i().wasFetchedViaSpdy)d+="&p=s";if(i().wasNpnNegotiated)d+="&npn=1";if(i().wasAlternateProtocolAvailable)d+="&apa=1"}if(a.ea)d+="&"+a.ea;i=a.t;var q=i.start,O=[],H=[],t;for(t in i)if(t!="start")if(t.indexOf("_")!=0){var I=i[t][1];if(I)i[I]&&H.push(t+"."+ga(a,t,i[I][0]));else q&&O.push(t+"."+ga(a,t))}delete i.start;if(b)for(var u in b)d+="&"+u+"="+b[u];return[c?c:"http://csi.gstatic.com/csi","?v=3","&s="+(window.GPT_jstiming.sn||
"gpt")+"&action=",a.name,H.length?"&it="+H.join(","):"","",d,"&rt=",O.join(",")].join("")};window.GPT_jstiming.report=function(a,b,c){a=ha(a,b,c);if(!a)return"";b=new Image;var d=window.GPT_jstiming.Ea++;window.GPT_jstiming.Q[d]=b;b.onload=b.onerror=function(){delete window.GPT_jstiming.Q[d]};b.src=a;b=f;return a}};var ia=function(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),h=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),i=Math.max(d.length,h.length),q=0;c==0&&q<i;q++){var O=d[q]||"",H=h[q]||"",t=RegExp("(\\d*)(\\D*)","g"),I=RegExp("(\\d*)(\\D*)","g");do{var u=t.exec(O)||["","",""],J=I.exec(H)||["","",""];if(u[0].length==0&&J[0].length==0)break;c=A(u[1].length==0?0:parseInt(u[1],10),J[1].length==0?0:parseInt(J[1],10))||A(u[2].length==0,J[2].length==0)||A(u[2],J[2])}while(c==
0)}return c},A=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var B,ja,C,ka,la=function(){return k.navigator?k.navigator.userAgent:f};ka=C=ja=B=g;var D;if(D=la()){var ma=k.navigator;B=D.indexOf("Opera")==0;ja=!B&&D.indexOf("MSIE")!=-1;C=!B&&D.indexOf("WebKit")!=-1;ka=!B&&!C&&ma.product=="Gecko"}var E=ja,na=ka,oa=C,pa;
a:{var F="",G;if(B&&k.opera){var qa=k.opera.version;F=typeof qa=="function"?qa():qa}else{if(na)G=/rv\:([^\);]+)(\)|;)/;else if(E)G=/MSIE\s+([^\);]+)(\)|;)/;else if(oa)G=/WebKit\/(\S+)/;if(G){var ra=G.exec(la());F=ra?ra[1]:""}}if(E){var sa,ta=k.document;sa=ta?ta.documentMode:undefined;if(sa>parseFloat(F)){pa=String(sa);break a}}pa=F}var ua=pa,K={};!E||K["9"]||(K["9"]=ia(ua,"9")>=0);E&&(K["9"]||(K["9"]=ia(ua,"9")>=0));var L=function(a,b){this.Ka=a;this.xa=b};L.prototype.wa=function(){return this.Ka};L.prototype.qa=function(){return this.xa};L.prototype.getWidth=L.prototype.wa;L.prototype.getHeight=L.prototype.qa;var M=function(a,b,c){this.h=a;this.Y=n(b)?b:0;this.g=this.h+"_"+this.Y;this.fa=c||"gpt_unit_"+this.g};j=M.prototype;j.A=function(){return this.g};j.getName=function(){return this.h};j.S=function(){return this.Y};j.toString=M.prototype.A;j.l=function(){return this.fa};M.prototype.getId=M.prototype.A;M.prototype.getName=M.prototype.getName;M.prototype.getDomId=M.prototype.l;M.prototype.getInstance=M.prototype.S;var N=function(a,b,c,d){this.h=a;var h=[];if(l(c)=="array")if(c.length>1&&n(c[0])&&n(c[1]))h.push(new L(c[0],c[1]));else for(var i=0;i<c.length;++i){var q=c[i];l(q)=="array"&&q.length>1&&n(q[0])&&n(q[1])&&h.push(new L(q[0],q[1]))}this.Ha=h;this.g=new M(a,b,d);this.c=[];this.f={};this.La=f;this.a=x();this.a.info("Created slot: "+this.g,f,this);this.Ca=this.I=this.ia=this.z=f;this.R="";this.C=e};j=N.prototype;
j.J=function(a,b){var c=[" attribute ",a," with value ",b," for slot ",this.getName()].join("");if(a&&m(a)&&b){this.f[a]=b;this.z||this.I?this.a.log(2,"Setting"+c+" after its contents have been loaded",f,this,void 0):this.a.info("Setting"+c,f,this)}else this.a.log(2,"Unable to set"+c,f,this,void 0);return this};j.i=function(a){if(a in this.f)return this.f[a];return f};j.o=function(){var a=[],b;for(b in this.f)l(this.f[b])=="function"||a.push(b);return a};
j.P=function(a){for(var b=0;b<this.c.length;++b)if(a==this.c[b]){this.a.log(2,"Service "+a.getName()+" is already associated with slot "+this.g,a,this,void 0);return this}this.c.push(a);a.K(this);return this};j.getName=function(){return this.h};j.m=function(){return this.g};j.ta=function(){return this.c};j.ua=function(){return this.Ha};j.X=function(){return!!document.getElementById(this.g.l())};j.ja=function(a){this.z=this.a.info("Fetching ad for slot "+this.getName(),f,this);this.R=a};j.la=function(){return this.R};
j.ha=function(){this.ia=this.a.info("Receiving ad for slot "+this.getName(),f,this,this.z)};j.Da=function(){this.I=this.a.info("Rendering ad for slot "+this.getName(),f,this)};j.Ba=function(){this.Ca=this.a.info("Completed rendering ad for slot "+this.getName(),f,this,this.I)};N.prototype.set=N.prototype.J;N.prototype.get=N.prototype.i;N.prototype.getName=N.prototype.getName;N.prototype.getSlotId=N.prototype.m;N.prototype.getSizes=N.prototype.ua;N.prototype.addService=N.prototype.P;
N.prototype.getServices=N.prototype.ta;N.prototype.getAttributeKeys=N.prototype.o;N.prototype.fetchStarted=N.prototype.ja;N.prototype.fetchEnded=N.prototype.ha;N.prototype.renderStarted=N.prototype.Da;N.prototype.renderEnded=N.prototype.Ba;N.prototype.hasWrapperDiv=N.prototype.X;N.prototype.getContentUrl=N.prototype.la;var P=function(){this.r={};this.s={};this.a=x()};P.prototype.add=function(a,b,c){if(!m(a)||a.length<=0||!b)return f;a in this.r||(this.r[a]=[]);b=new N(a,this.r[a].length,b,c);c=b.m().l();if(this.s[c]){this.a.error("Div element "+c+" is already associated with another slot");return f}this.r[a].push(b);return this.s[b.m().l()]=b};P.prototype.find=function(a,b){var c=b||0,d=m(a)&&this.r[a]||[];if(c>=0&&c<d.length){d=d[c];if(d.m().S()==c)return d}return f};
var va=function(){var a=o();return a.slot_manager_instance||(a.slot_manager_instance=new P)},Q=function(a,b,c){var d=va();return d&&d.add(a,b,c)};p("defineSlot",Q);p("defineUnit",Q);P.prototype.find=P.prototype.find;P.getInstance=va;var xa=function(a){var b=x();if(m(a)){var c;c=va();if(c.s[a])c=c.s[a];else{c.a.log(2,"Ad unit lookup for div "+a+" failed.",void 0,void 0,void 0);c=f}if(c){a=c;if(a.C&&!a.X())a.a.log(2,"Slot "+a.h+" does not have a container div with id: "+a.g.l()+".",f,a,void 0);else for(b=0;b<a.c.length;++b)a.c[b].k&&wa(a.c[b],a)}else b.error("Div "+a+" is not mapped to a known ad unit.")}else b.error("Unknown div id in display(): "+a.toString())};p("display",xa,e);var R=function(a,b){this.h=a;this.M=b?b:new k.GPT_jstiming.Timer;this.M.name=a;this.w=[]};j=R.prototype;j.getName=function(){return this.h};j.tick=function(a,b){this.M.tick(a,b)};j.O=function(a){a&&this.w.push(a)};j.report=function(){var a={};if(this.w.length)a.e=this.w.join();return k.GPT_jstiming.report(this.M,a)};j.H=function(a){r(window,a)};var S=function(a){this.h=a};ba(S,R);S.prototype.tick=function(){};S.prototype.O=function(){};S.prototype.report=function(){return f};S.prototype.H=function(){};
var ya=function(a,b,c,d){b=b;if(b==undefined)b=1;b=k.GPT_jstiming&&k.GPT_jstiming.load&&k.location.protocol=="http:"&&Math.random()<b?e:g;a=b?new R(a,d):new S(a,d);c&&a.H(aa(R.prototype.report,a));return a};(function(){if(!o()._gpt_timer_&&k.GPT_jstiming){var a=ya("global",1,g,k.GPT_jstiming.load);a.H(function(){a.tick("load");a.report()});p("_gpt_timer_",a)}return o()._gpt_timer_})();var T=function(a,b){this.u=[];this.k=g;this.f={};this.da=ya(this.getName(),a,b);this.log=x();this.log.info("Created service: "+this.getName(),this)};j=T.prototype;j.getName=function(){return"unknown"};j.ma=function(){return this.da};j.J=function(a,b){var c=["attribute ",a," with value ",b," for service ",this.getName()].join("");if(m(a)&&a.length>0){this.f[a]=b;this.log.info("Setting "+c,this,f)}else this.log.log(2,"Unable to set "+c,this,f,void 0);return this};j.i=function(a){return this.f[a]};
j.o=function(){var a=[],b;for(b in this.f)typeof this.f[b]!="function"&&a.push(b);return a};j.B=function(){return this.u};j.va=function(){for(var a={},b=0;b<this.u.length;++b){var c=this.u[b];a[c.m().A()]=c}return a};
j.v=function(){if(this.k)this.log.info("Service is already enabled.",this);else{this.k=e;try{if(this.d){if(!this.p){var a=document,b=a.createElement("script"),c=U();b.async=e;b.type="text/javascript";b.src=za(this,V(c,window,a));var d=a.getElementsByTagName("head")[0]||a.getElementsByTagName("body")[0];if(d){this.log.info("Fetching GDFP implementation",this);d.appendChild(b);this.p=e}else this.log.error("Unable to fetch GDFP implementation",this)}}else{a=U();if(!(this.p||a.F)){b=document;this.p=e;
b.write('<script type="text/javascript" src="'+za(this,V(a,window,b))+'"><\/script>')}}}catch(h){this.log.error("Failed to enable service: "+h,this)}}};j.display=function(a,b,c){this.v();a=c?Q(a,b,c):Q(a,b);a.P(this);xa(a.m().l())};j.K=function(a){this.u.push(a);this.log.info("Associated "+this.getName()+" service with slot "+a.getName(),this,a)};T.prototype.getSlots=T.prototype.B;T.prototype.getSlotIdMap=T.prototype.va;T.prototype.enable=T.prototype.v;T.prototype.set=T.prototype.J;
T.prototype.get=T.prototype.i;T.prototype.getAttributeKeys=T.prototype.o;T.prototype.getCsiTimer=T.prototype.ma;T.prototype.display=T.prototype.display;var W=function(){this.c={};this.F=g;this.a=x();this.Ja=this.a.info("Google service JS loaded");r(window,aa(W.prototype.Aa,this))};W.prototype.add=function(a){this.c[a.getName()]=a};W.prototype.find=function(a){var b=f;if(a in this.c)b=this.c[a];return b};W.prototype.Aa=function(){this.F=e;this.a.info("Page load complete",f,f,this.Ja)};
var V=function(a,b,c){a=g;try{a=b.top.document.URL===c.URL}catch(d){}return a?c.URL:c.referrer},U=function(){var a=o();return a.service_manager_instance||(a.service_manager_instance=new W)};p("enableServices",function(){var a=U(),b;for(b in a.c){var c=a.c[b];if(l(c)!="function"){c.v();c=b;var d=o()._gpt_timer_;d&&d.O(c)}}});var X=function(){T.call(this);this.p=g;this.b=f;this.L={};this.ba=g;this.ca=e;this.q=g;this.d=e;this.j=[]};ba(X,T);
var Y={adsense_ad_format:"google_ad_format",adsense_ad_types:"google_ad_type",adsense_allow_expandable_ads:"google_allow_expandable_ads",adsense_background_color:"google_color_bg",adsense_bid:"google_bid",adsense_border_color:"google_color_border",adsense_channel_ids:"google_ad_channel",adsense_content_section:"google_ad_section",adsense_cpm:"google_cpm",adsense_ed:"google_ed",adsense_encoding:"google_encoding",adsense_family_safe:"google_safe",adsense_feedback:"google_feedback",adsense_flash_version:"google_flash_version",
adsense_font_face:"google_font_face",adsense_font_size:"google_font_size",adsense_hints:"google_hints",adsense_host:"google_ad_host",adsense_host_channel:"google_ad_host_channel",adsense_host_tier_id:"google_ad_host_tier_id",adsense_keyword_type:"google_kw_type",adsense_keywords:"google_kw",adsense_line_color:"google_line_color",adsense_link_color:"google_color_link",adsense_relevant_content:"google_contents",adsense_reuse_colors:"google_reuse_colors",adsense_targeting:"google_targeting",adsense_targeting_types:"google_targeting",
adsense_test_mode:"google_adtest",adsense_text_color:"google_text_color",adsense_ui_features:"google_ui_features",adsense_ui_version:"google_ui_version",adsense_url_color:"google_color_url",alternate_ad_iframe_color:"google_alternate_color",alternate_ad_url:"google_alternate_ad_url",demographic_age:"google_cust_age",demographic_ch:"google_cust_ch",demographic_gender:"google_cust_gender",demographic_interests:"google_cust_interests",demographic_job:"google_cust_job",demographic_l:"google_cust_l",demographic_lh:"google_cust_lh",
demographic_u_url:"google_cust_u_url",demographic_unique_id:"google_cust_id",document_language:"google_language",geography_override_city:"google_city",geography_override_country:"google_country",geography_override_region:"google_region",page_url:"google_page_url"};X.prototype.getName=function(){return"publisher_ads"};var za=function(){return"http://partner.googleadservices.com/gampad/google_ads_gpt.js"};
X.prototype.za=function(){var a=U(),b=o().impl;if(b&&b.pubads){this.b=b.pubads;this.log.info("GDFP implementation fetched.",this);this.ca||this.b.disableFetch();if(this.q){this.d?this.b.enableAsyncSingleRequest():this.b.enableSingleRequest();Aa(this);a=this.B();for(b=0;b<a.length;++b)Ba(this,a[b])}else this.d&&this.b.enableAsyncRendering();if(this.j.length>0)for(b=0;b<this.j.length;++b)wa(this,this.j[b])}else this.log.error("Unable to fetch pubads service implementation from "+za(this,V(a,window,
document)),this)};X.prototype.K=function(a){if(!this.d)a.C=g;T.prototype.K.call(this,a)};
var wa=function(a,b){if(U().F&&!a.d)a.log.error("Attempting to display ad in sync mode after page load is complete.",a);else if(a.b){Aa(a);if(a.q||Ba(a,b)){a.log.info("Calling fillslot");a.b.fillSlot(b)}}else if(a.d||a.p&&a.j.length==0){for(var c=g,d=0;d<a.j.length;++d)if(b===a.j[d])c=e;if(!c){a.log.info("Delaying rendering of ad slot "+b.getName()+" pending loading of the GDFP implementation",a,b);a.j.push(b)}}else a.log.error("Skipping rendering of slot "+b.getName()+" due to missing GDFP implementaition",
a,b)},Ba=function(a,b){if(a.b&&a.b.addSlot(b)==f){a.log.error("Unable to process name for slot "+b.getName(),a,b);return g}for(var c=b.o(),d=0;d<c.length;++d)c[d]in Y?a.b.addAdSenseSlotAttribute(b,Y[c[d]],b.i(c[d])):a.log.log(2,"Ignoring unknown pubads attribute "+c[d]+" with value "+b.i(c[d])+" for slot "+b.getName(),a,b,void 0);return e},Aa=function(a){if(!a.ba){a.ba=e;for(var b=a.o(),c=0;c<b.length;++c)b[c]in Y?a.b.addAdSensePageAttribute(Y[b[c]],a.i(b[c])):a.log.log(2,"Ignoring unknown pubads attribute "+
b[c]+" with value "+a.i(b[c]),a,void 0,void 0);a.b.addAdSensePageAttribute("google_tag_info","v2");for(var d in a.L){b=a.L[d];if(l(b)=="array")for(c=0;c<b.length;++c)a.b.addAttribute(d,b[c])}}};j=X.prototype;j.Ga=function(a,b){var c=[];if(m(b))c.push(b);else c=b;var d=[" targeting attribute ",a," with value ",c.join()," for service ",this.getName()].join("");if(a&&m(a)){this.L[a]=c;this.log.info("Setting"+d,this)}else this.log.log(2,"Unable to set"+d,this,void 0,void 0);return this};
j.ya=function(){if(this.b)this.log.log(2,"Ignoring noFetch since the pubads service is already enabled",this,void 0,void 0);else this.ca=g};j.enableSingleRequest=function(){if(this.k&&!this.q)this.log.log(2,"Ignoring change to single request mode since the service is already enabled",this,void 0,void 0);else{this.log.info("Using single request mode to fetch ads",this);this.q=e}return this.q};
j.enableAsyncRendering=function(){if(this.k&&!this.d)this.log.log(2,"Ignoring change to async-rendering mode since the service is already enabled",this,void 0,void 0);else{this.log.info("Using async-rendering mode to fetch ads",this);this.d=e}return this.d};
j.ga=function(){if(this.k&&this.d)this.log.log(2,"Ignoring change to async-rendering mode since the service is already enabled",this,void 0,void 0);else{this.log.info("Using sync-rendering mode to fetch ads",this);this.d=g;for(var a=this.B(),b=0;b<a.length;++b)a[b].C=g}return!this.d};p("pubads",function(){var a=U(),b=a.find("publisher_ads");if(!b){b=new X;a.add(b)}return b});X.prototype.enableSingleRequest=X.prototype.enableSingleRequest;X.prototype.enableAsyncRendering=X.prototype.enableAsyncRendering;
X.prototype.enableSyncRendering=X.prototype.ga;X.prototype.noFetch=X.prototype.ya;X.prototype.setTargeting=X.prototype.Ga;X.prototype.onGoogleAdsJsLoad=X.prototype.za;var Ca=/#|$/,Da=function(a,b){var c=a.search(Ca),d;a:{d=0;for(var h=b.length;(d=a.indexOf(b,d))>=0&&d<c;){var i=a.charCodeAt(d-1);if(i==38||i==63){i=a.charCodeAt(d+h);if(!i||i==61||i==38||i==35){d=d;break a}}d+=h+1}d=-1}if(d<0)return f;else{h=a.indexOf("&",d);if(h<0||h>c)h=c;d+=b.length+1;return decodeURIComponent(a.substr(d,h-d).replace(/\+/g," "))}};var Ea=function(){var a=document,b=a.createElement("script");b.type="text/javascript";b.src="http://publisherconsole.appspot.com/js/loader.js";b.async=e;(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(b,a)},Fa;
a:{var Ga=window,Ha;var Ia=document.cookie.split("google_pubconsole=");Ha=Ia.length==2?Ia[1].split(";")[0]:"";if(Ha){var Ja=Ha.split("|");if(Ja.length>0&&(Ja[0]=="1"||Ja[0]=="0")){Fa=e;break a}}var Ka=V(U(),Ga,document);Fa=Da(Ka,"google_debug")!==f||Da(Ka,"google_console")!==f}Fa&&r(window,Ea);var Z=o().cmd;if(!Z||l(Z)=="array"){var La=o().cmd=new y;Z&&Z.length>0&&La.push.apply(La,Z)}var Ma=document.getElementsByTagName("script");if(Ma.length>0){var $=Ma[Ma.length-1];if($.src&&$.src.indexOf("/tag/js/gpt.js")>=0&&$.innerHTML&&!$.googletag_executed){$.googletag_executed=e;eval($.innerHTML)}};})()