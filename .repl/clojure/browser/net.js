goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9859){
var vec__9860__9861 = p__9859;
var k__9862 = cljs.core.nth.call(null,vec__9860__9861,0,null);
var v__9863 = cljs.core.nth.call(null,vec__9860__9861,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9862.toLowerCase()),v__9863]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__9894 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____9864 = this$;

if(cljs.core.truth_(and__3822__auto____9864))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____9864;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3824__auto____9865 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9865))
{return or__3824__auto____9865;
} else
{var or__3824__auto____9866 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____9866))
{return or__3824__auto____9866;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__9895 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3822__auto____9867 = this$;

if(cljs.core.truth_(and__3822__auto____9867))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____9867;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3824__auto____9868 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9868))
{return or__3824__auto____9868;
} else
{var or__3824__auto____9869 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____9869))
{return or__3824__auto____9869;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__9896 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____9870 = this$;

if(cljs.core.truth_(and__3822__auto____9870))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____9870;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3824__auto____9871 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9871))
{return or__3824__auto____9871;
} else
{var or__3824__auto____9872 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____9872))
{return or__3824__auto____9872;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__9897 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____9873 = this$;

if(cljs.core.truth_(and__3822__auto____9873))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____9873;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3824__auto____9874 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9874))
{return or__3824__auto____9874;
} else
{var or__3824__auto____9875 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____9875))
{return or__3824__auto____9875;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__9894.call(this,this$);
case  2 :
return connect__9895.call(this,this$,opt1);
case  3 :
return connect__9896.call(this,this$,opt1,opt2);
case  4 :
return connect__9897.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__9899 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3822__auto____9876 = this$;

if(cljs.core.truth_(and__3822__auto____9876))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____9876;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3824__auto____9877 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9877))
{return or__3824__auto____9877;
} else
{var or__3824__auto____9878 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____9878))
{return or__3824__auto____9878;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__9900 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____9879 = this$;

if(cljs.core.truth_(and__3822__auto____9879))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____9879;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3824__auto____9880 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9880))
{return or__3824__auto____9880;
} else
{var or__3824__auto____9881 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____9881))
{return or__3824__auto____9881;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__9901 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____9882 = this$;

if(cljs.core.truth_(and__3822__auto____9882))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____9882;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3824__auto____9883 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9883))
{return or__3824__auto____9883;
} else
{var or__3824__auto____9884 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____9884))
{return or__3824__auto____9884;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__9902 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3822__auto____9885 = this$;

if(cljs.core.truth_(and__3822__auto____9885))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____9885;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3824__auto____9886 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9886))
{return or__3824__auto____9886;
} else
{var or__3824__auto____9887 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____9887))
{return or__3824__auto____9887;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__9903 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3822__auto____9888 = this$;

if(cljs.core.truth_(and__3822__auto____9888))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____9888;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3824__auto____9889 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9889))
{return or__3824__auto____9889;
} else
{var or__3824__auto____9890 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____9890))
{return or__3824__auto____9890;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__9899.call(this,this$,opt);
case  3 :
return transmit__9900.call(this,this$,opt,opt2);
case  4 :
return transmit__9901.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__9902.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__9903.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3822__auto____9891 = this$;

if(cljs.core.truth_(and__3822__auto____9891))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3822__auto____9891;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3824__auto____9892 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9892))
{return or__3824__auto____9892;
} else
{var or__3824__auto____9893 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3824__auto____9893))
{return or__3824__auto____9893;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9905){
var vec__9906__9907 = p__9905;
var k__9908 = cljs.core.nth.call(null,vec__9906__9907,0,null);
var v__9909 = cljs.core.nth.call(null,vec__9906__9907,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9908.toLowerCase()),v__9909]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__9910 = null;
var G__9910__9911 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9910__9912 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9910__9913 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9910__9914 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__9910__9915 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__9910 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__9910__9911.call(this,this$,uri);
case  3 :
return G__9910__9912.call(this,this$,uri,method);
case  4 :
return G__9910__9913.call(this,this$,uri,method,content);
case  5 :
return G__9910__9914.call(this,this$,uri,method,content,headers);
case  6 :
return G__9910__9915.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9910;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__9917){
var vec__9918__9919 = p__9917;
var k__9920 = cljs.core.nth.call(null,vec__9918__9919,0,null);
var v__9921 = cljs.core.nth.call(null,vec__9918__9919,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__9920.toLowerCase()),v__9921]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__9928 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3822__auto____9922 = this$;

if(cljs.core.truth_(and__3822__auto____9922))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____9922;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3824__auto____9923 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9923))
{return or__3824__auto____9923;
} else
{var or__3824__auto____9924 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____9924))
{return or__3824__auto____9924;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__9929 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3822__auto____9925 = this$;

if(cljs.core.truth_(and__3822__auto____9925))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____9925;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3824__auto____9926 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____9926))
{return or__3824__auto____9926;
} else
{var or__3824__auto____9927 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____9927))
{return or__3824__auto____9927;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__9928.call(this,this$,service_name,fn);
case  4 :
return register_service__9929.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__9931 = null;
var G__9931__9932 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__9931__9933 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__9931__9934 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__9931__9935 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__9931 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__9931__9932.call(this,this$);
case  2 :
return G__9931__9933.call(this,this$,on_connect_fn);
case  3 :
return G__9931__9934.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__9931__9935.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9931;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__9937 = null;
var G__9937__9938 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__9937__9939 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__9937 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__9937__9938.call(this,this$,service_name,fn);
case  4 :
return G__9937__9939.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9937;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__9950 = (function (){
var temp__3974__auto____9941 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3974__auto____9941))
{var config__9942 = temp__3974__auto____9941;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__9942)));
} else
{return null;
}
});
var xpc_connection__9951 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__9943){
var vec__9944__9945 = p__9943;
var k__9946 = cljs.core.nth.call(null,vec__9944__9945,0,null);
var v__9947 = cljs.core.nth.call(null,vec__9944__9945,1,null);

var temp__3971__auto____9948 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__9946);

if(cljs.core.truth_(temp__3971__auto____9948))
{var field__9949 = temp__3971__auto____9948;

return cljs.core.assoc.call(null,sum,field__9949,v__9947);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__9950.call(this);
case  1 :
return xpc_connection__9951.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
