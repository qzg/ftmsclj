goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3824__auto____8051 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3824__auto____8051))
{return or__3824__auto____8051;
} else
{var or__3824__auto____8052 = (p["_"]);

if(cljs.core.truth_(or__3824__auto____8052))
{return or__3824__auto____8052;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__8116 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____8053 = this$;

if(cljs.core.truth_(and__3822__auto____8053))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8053;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3824__auto____8054 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8054))
{return or__3824__auto____8054;
} else
{var or__3824__auto____8055 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8055))
{return or__3824__auto____8055;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__8117 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3822__auto____8056 = this$;

if(cljs.core.truth_(and__3822__auto____8056))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8056;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3824__auto____8057 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8057))
{return or__3824__auto____8057;
} else
{var or__3824__auto____8058 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8058))
{return or__3824__auto____8058;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__8118 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3822__auto____8059 = this$;

if(cljs.core.truth_(and__3822__auto____8059))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8059;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3824__auto____8060 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8060))
{return or__3824__auto____8060;
} else
{var or__3824__auto____8061 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8061))
{return or__3824__auto____8061;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__8119 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3822__auto____8062 = this$;

if(cljs.core.truth_(and__3822__auto____8062))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8062;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3824__auto____8063 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8063))
{return or__3824__auto____8063;
} else
{var or__3824__auto____8064 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8064))
{return or__3824__auto____8064;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__8120 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3822__auto____8065 = this$;

if(cljs.core.truth_(and__3822__auto____8065))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8065;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____8066 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8066))
{return or__3824__auto____8066;
} else
{var or__3824__auto____8067 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8067))
{return or__3824__auto____8067;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__8121 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3822__auto____8068 = this$;

if(cljs.core.truth_(and__3822__auto____8068))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8068;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____8069 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8069))
{return or__3824__auto____8069;
} else
{var or__3824__auto____8070 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8070))
{return or__3824__auto____8070;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__8122 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3822__auto____8071 = this$;

if(cljs.core.truth_(and__3822__auto____8071))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8071;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____8072 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8072))
{return or__3824__auto____8072;
} else
{var or__3824__auto____8073 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8073))
{return or__3824__auto____8073;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8123 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3822__auto____8074 = this$;

if(cljs.core.truth_(and__3822__auto____8074))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8074;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____8075 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8075))
{return or__3824__auto____8075;
} else
{var or__3824__auto____8076 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8076))
{return or__3824__auto____8076;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__8124 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3822__auto____8077 = this$;

if(cljs.core.truth_(and__3822__auto____8077))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8077;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____8078 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8078))
{return or__3824__auto____8078;
} else
{var or__3824__auto____8079 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8079))
{return or__3824__auto____8079;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__8125 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3822__auto____8080 = this$;

if(cljs.core.truth_(and__3822__auto____8080))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8080;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____8081 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8081))
{return or__3824__auto____8081;
} else
{var or__3824__auto____8082 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8082))
{return or__3824__auto____8082;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__8126 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3822__auto____8083 = this$;

if(cljs.core.truth_(and__3822__auto____8083))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8083;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____8084 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8084))
{return or__3824__auto____8084;
} else
{var or__3824__auto____8085 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8085))
{return or__3824__auto____8085;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__8127 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3822__auto____8086 = this$;

if(cljs.core.truth_(and__3822__auto____8086))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8086;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____8087 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8087))
{return or__3824__auto____8087;
} else
{var or__3824__auto____8088 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8088))
{return or__3824__auto____8088;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__8128 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3822__auto____8089 = this$;

if(cljs.core.truth_(and__3822__auto____8089))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8089;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____8090 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8090))
{return or__3824__auto____8090;
} else
{var or__3824__auto____8091 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8091))
{return or__3824__auto____8091;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__8129 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3822__auto____8092 = this$;

if(cljs.core.truth_(and__3822__auto____8092))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8092;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____8093 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8093))
{return or__3824__auto____8093;
} else
{var or__3824__auto____8094 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8094))
{return or__3824__auto____8094;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__8130 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3822__auto____8095 = this$;

if(cljs.core.truth_(and__3822__auto____8095))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8095;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____8096 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8096))
{return or__3824__auto____8096;
} else
{var or__3824__auto____8097 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8097))
{return or__3824__auto____8097;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__8131 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3822__auto____8098 = this$;

if(cljs.core.truth_(and__3822__auto____8098))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8098;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____8099 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8099))
{return or__3824__auto____8099;
} else
{var or__3824__auto____8100 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8100))
{return or__3824__auto____8100;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__8132 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3822__auto____8101 = this$;

if(cljs.core.truth_(and__3822__auto____8101))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8101;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____8102 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8102))
{return or__3824__auto____8102;
} else
{var or__3824__auto____8103 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8103))
{return or__3824__auto____8103;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__8133 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3822__auto____8104 = this$;

if(cljs.core.truth_(and__3822__auto____8104))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8104;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____8105 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8105))
{return or__3824__auto____8105;
} else
{var or__3824__auto____8106 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8106))
{return or__3824__auto____8106;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__8134 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3822__auto____8107 = this$;

if(cljs.core.truth_(and__3822__auto____8107))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8107;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____8108 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8108))
{return or__3824__auto____8108;
} else
{var or__3824__auto____8109 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8109))
{return or__3824__auto____8109;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__8135 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3822__auto____8110 = this$;

if(cljs.core.truth_(and__3822__auto____8110))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8110;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____8111 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8111))
{return or__3824__auto____8111;
} else
{var or__3824__auto____8112 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8112))
{return or__3824__auto____8112;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__8136 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3822__auto____8113 = this$;

if(cljs.core.truth_(and__3822__auto____8113))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____8113;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____8114 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8114))
{return or__3824__auto____8114;
} else
{var or__3824__auto____8115 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____8115))
{return or__3824__auto____8115;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__8116.call(this,this$);
case  2 :
return _invoke__8117.call(this,this$,a);
case  3 :
return _invoke__8118.call(this,this$,a,b);
case  4 :
return _invoke__8119.call(this,this$,a,b,c);
case  5 :
return _invoke__8120.call(this,this$,a,b,c,d);
case  6 :
return _invoke__8121.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__8122.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__8123.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__8124.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__8125.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__8126.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__8127.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__8128.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__8129.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__8130.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__8131.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__8132.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__8133.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__8134.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__8135.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__8136.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3822__auto____8138 = coll;

if(cljs.core.truth_(and__3822__auto____8138))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3822__auto____8138;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3824__auto____8139 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8139))
{return or__3824__auto____8139;
} else
{var or__3824__auto____8140 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3824__auto____8140))
{return or__3824__auto____8140;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3822__auto____8141 = coll;

if(cljs.core.truth_(and__3822__auto____8141))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3822__auto____8141;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3824__auto____8142 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8142))
{return or__3824__auto____8142;
} else
{var or__3824__auto____8143 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3824__auto____8143))
{return or__3824__auto____8143;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3822__auto____8144 = coll;

if(cljs.core.truth_(and__3822__auto____8144))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3822__auto____8144;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3824__auto____8145 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8145))
{return or__3824__auto____8145;
} else
{var or__3824__auto____8146 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3824__auto____8146))
{return or__3824__auto____8146;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__8153 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3822__auto____8147 = coll;

if(cljs.core.truth_(and__3822__auto____8147))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____8147;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3824__auto____8148 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8148))
{return or__3824__auto____8148;
} else
{var or__3824__auto____8149 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____8149))
{return or__3824__auto____8149;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__8154 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____8150 = coll;

if(cljs.core.truth_(and__3822__auto____8150))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____8150;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3824__auto____8151 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8151))
{return or__3824__auto____8151;
} else
{var or__3824__auto____8152 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____8152))
{return or__3824__auto____8152;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__8153.call(this,coll,n);
case  3 :
return _nth__8154.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3822__auto____8156 = coll;

if(cljs.core.truth_(and__3822__auto____8156))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3822__auto____8156;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3824__auto____8157 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8157))
{return or__3824__auto____8157;
} else
{var or__3824__auto____8158 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3824__auto____8158))
{return or__3824__auto____8158;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3822__auto____8159 = coll;

if(cljs.core.truth_(and__3822__auto____8159))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3822__auto____8159;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3824__auto____8160 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8160))
{return or__3824__auto____8160;
} else
{var or__3824__auto____8161 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3824__auto____8161))
{return or__3824__auto____8161;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__8168 = (function (o,k){
if(cljs.core.truth_((function (){var and__3822__auto____8162 = o;

if(cljs.core.truth_(and__3822__auto____8162))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____8162;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3824__auto____8163 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____8163))
{return or__3824__auto____8163;
} else
{var or__3824__auto____8164 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____8164))
{return or__3824__auto____8164;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__8169 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____8165 = o;

if(cljs.core.truth_(and__3822__auto____8165))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____8165;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3824__auto____8166 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____8166))
{return or__3824__auto____8166;
} else
{var or__3824__auto____8167 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____8167))
{return or__3824__auto____8167;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__8168.call(this,o,k);
case  3 :
return _lookup__8169.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____8171 = coll;

if(cljs.core.truth_(and__3822__auto____8171))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3822__auto____8171;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3824__auto____8172 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8172))
{return or__3824__auto____8172;
} else
{var or__3824__auto____8173 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____8173))
{return or__3824__auto____8173;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3822__auto____8174 = coll;

if(cljs.core.truth_(and__3822__auto____8174))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3822__auto____8174;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3824__auto____8175 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8175))
{return or__3824__auto____8175;
} else
{var or__3824__auto____8176 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3824__auto____8176))
{return or__3824__auto____8176;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____8177 = coll;

if(cljs.core.truth_(and__3822__auto____8177))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3822__auto____8177;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3824__auto____8178 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8178))
{return or__3824__auto____8178;
} else
{var or__3824__auto____8179 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3824__auto____8179))
{return or__3824__auto____8179;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3822__auto____8180 = coll;

if(cljs.core.truth_(and__3822__auto____8180))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3822__auto____8180;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3824__auto____8181 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8181))
{return or__3824__auto____8181;
} else
{var or__3824__auto____8182 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3824__auto____8182))
{return or__3824__auto____8182;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3822__auto____8183 = coll;

if(cljs.core.truth_(and__3822__auto____8183))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3822__auto____8183;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3824__auto____8184 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8184))
{return or__3824__auto____8184;
} else
{var or__3824__auto____8185 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3824__auto____8185))
{return or__3824__auto____8185;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3822__auto____8186 = coll;

if(cljs.core.truth_(and__3822__auto____8186))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3822__auto____8186;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3824__auto____8187 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8187))
{return or__3824__auto____8187;
} else
{var or__3824__auto____8188 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3824__auto____8188))
{return or__3824__auto____8188;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3822__auto____8189 = coll;

if(cljs.core.truth_(and__3822__auto____8189))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3822__auto____8189;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3824__auto____8190 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8190))
{return or__3824__auto____8190;
} else
{var or__3824__auto____8191 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3824__auto____8191))
{return or__3824__auto____8191;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3822__auto____8192 = o;

if(cljs.core.truth_(and__3822__auto____8192))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3822__auto____8192;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3824__auto____8193 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____8193))
{return or__3824__auto____8193;
} else
{var or__3824__auto____8194 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3824__auto____8194))
{return or__3824__auto____8194;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3822__auto____8195 = o;

if(cljs.core.truth_(and__3822__auto____8195))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3822__auto____8195;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____8196 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____8196))
{return or__3824__auto____8196;
} else
{var or__3824__auto____8197 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3824__auto____8197))
{return or__3824__auto____8197;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3822__auto____8198 = o;

if(cljs.core.truth_(and__3822__auto____8198))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3822__auto____8198;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3824__auto____8199 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____8199))
{return or__3824__auto____8199;
} else
{var or__3824__auto____8200 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3824__auto____8200))
{return or__3824__auto____8200;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3822__auto____8201 = o;

if(cljs.core.truth_(and__3822__auto____8201))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3822__auto____8201;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3824__auto____8202 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____8202))
{return or__3824__auto____8202;
} else
{var or__3824__auto____8203 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3824__auto____8203))
{return or__3824__auto____8203;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__8210 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3822__auto____8204 = coll;

if(cljs.core.truth_(and__3822__auto____8204))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____8204;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3824__auto____8205 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8205))
{return or__3824__auto____8205;
} else
{var or__3824__auto____8206 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____8206))
{return or__3824__auto____8206;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8211 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3822__auto____8207 = coll;

if(cljs.core.truth_(and__3822__auto____8207))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____8207;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3824__auto____8208 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____8208))
{return or__3824__auto____8208;
} else
{var or__3824__auto____8209 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____8209))
{return or__3824__auto____8209;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__8210.call(this,coll,f);
case  3 :
return _reduce__8211.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3822__auto____8213 = o;

if(cljs.core.truth_(and__3822__auto____8213))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3822__auto____8213;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3824__auto____8214 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____8214))
{return or__3824__auto____8214;
} else
{var or__3824__auto____8215 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3824__auto____8215))
{return or__3824__auto____8215;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3822__auto____8216 = o;

if(cljs.core.truth_(and__3822__auto____8216))
{return o.cljs$core$IHash$_hash;
} else
{return and__3822__auto____8216;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3824__auto____8217 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____8217))
{return or__3824__auto____8217;
} else
{var or__3824__auto____8218 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3824__auto____8218))
{return or__3824__auto____8218;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3822__auto____8219 = o;

if(cljs.core.truth_(and__3822__auto____8219))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3822__auto____8219;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3824__auto____8220 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____8220))
{return or__3824__auto____8220;
} else
{var or__3824__auto____8221 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3824__auto____8221))
{return or__3824__auto____8221;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3822__auto____8222 = o;

if(cljs.core.truth_(and__3822__auto____8222))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3822__auto____8222;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3824__auto____8223 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____8223))
{return or__3824__auto____8223;
} else
{var or__3824__auto____8224 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3824__auto____8224))
{return or__3824__auto____8224;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3822__auto____8225 = d;

if(cljs.core.truth_(and__3822__auto____8225))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3822__auto____8225;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3824__auto____8226 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3824__auto____8226))
{return or__3824__auto____8226;
} else
{var or__3824__auto____8227 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____8227))
{return or__3824__auto____8227;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3822__auto____8228 = this$;

if(cljs.core.truth_(and__3822__auto____8228))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3822__auto____8228;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____8229 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8229))
{return or__3824__auto____8229;
} else
{var or__3824__auto____8230 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3824__auto____8230))
{return or__3824__auto____8230;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3822__auto____8231 = this$;

if(cljs.core.truth_(and__3822__auto____8231))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3822__auto____8231;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3824__auto____8232 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8232))
{return or__3824__auto____8232;
} else
{var or__3824__auto____8233 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3824__auto____8233))
{return or__3824__auto____8233;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3822__auto____8234 = this$;

if(cljs.core.truth_(and__3822__auto____8234))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3822__auto____8234;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3824__auto____8235 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____8235))
{return or__3824__auto____8235;
} else
{var or__3824__auto____8236 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3824__auto____8236))
{return or__3824__auto____8236;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__8237 = null;
var G__8237__8238 = (function (o,k){
return null;
});
var G__8237__8239 = (function (o,k,not_found){
return not_found;
});
G__8237 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8237__8238.call(this,o,k);
case  3 :
return G__8237__8239.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8237;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__8241 = null;
var G__8241__8242 = (function (_,f){
return f.call(null);
});
var G__8241__8243 = (function (_,f,start){
return start;
});
G__8241 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8241__8242.call(this,_,f);
case  3 :
return G__8241__8243.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8241;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__8245 = null;
var G__8245__8246 = (function (_,n){
return null;
});
var G__8245__8247 = (function (_,n,not_found){
return not_found;
});
G__8245 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8245__8246.call(this,_,n);
case  3 :
return G__8245__8247.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8245;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__8255 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8249 = cljs.core._nth.call(null,cicoll,0);
var n__8250 = 1;

while(true){
if(cljs.core.truth_((n__8250 < cljs.core._count.call(null,cicoll))))
{{
var G__8259 = f.call(null,val__8249,cljs.core._nth.call(null,cicoll,n__8250));
var G__8260 = (n__8250 + 1);
val__8249 = G__8259;
n__8250 = G__8260;
continue;
}
} else
{return val__8249;
}
break;
}
}
});
var ci_reduce__8256 = (function (cicoll,f,val){
var val__8251 = val;
var n__8252 = 0;

while(true){
if(cljs.core.truth_((n__8252 < cljs.core._count.call(null,cicoll))))
{{
var G__8261 = f.call(null,val__8251,cljs.core._nth.call(null,cicoll,n__8252));
var G__8262 = (n__8252 + 1);
val__8251 = G__8261;
n__8252 = G__8262;
continue;
}
} else
{return val__8251;
}
break;
}
});
var ci_reduce__8257 = (function (cicoll,f,val,idx){
var val__8253 = val;
var n__8254 = idx;

while(true){
if(cljs.core.truth_((n__8254 < cljs.core._count.call(null,cicoll))))
{{
var G__8263 = f.call(null,val__8253,cljs.core._nth.call(null,cicoll,n__8254));
var G__8264 = (n__8254 + 1);
val__8253 = G__8263;
n__8254 = G__8264;
continue;
}
} else
{return val__8253;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8255.call(this,cicoll,f);
case  3 :
return ci_reduce__8256.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8257.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8265 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8278 = null;
var G__8278__8279 = (function (_,f){
var this__8266 = this;
return cljs.core.ci_reduce.call(null,this__8266.a,f,(this__8266.a[this__8266.i]),(this__8266.i + 1));
});
var G__8278__8280 = (function (_,f,start){
var this__8267 = this;
return cljs.core.ci_reduce.call(null,this__8267.a,f,start,this__8267.i);
});
G__8278 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8278__8279.call(this,_,f);
case  3 :
return G__8278__8280.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8278;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8268 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8269 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8282 = null;
var G__8282__8283 = (function (coll,n){
var this__8270 = this;
var i__8271 = (n + this__8270.i);

if(cljs.core.truth_((i__8271 < this__8270.a.length)))
{return (this__8270.a[i__8271]);
} else
{return null;
}
});
var G__8282__8284 = (function (coll,n,not_found){
var this__8272 = this;
var i__8273 = (n + this__8272.i);

if(cljs.core.truth_((i__8273 < this__8272.a.length)))
{return (this__8272.a[i__8273]);
} else
{return not_found;
}
});
G__8282 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8282__8283.call(this,coll,n);
case  3 :
return G__8282__8284.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8282;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8274 = this;
return (this__8274.a.length - this__8274.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8275 = this;
return (this__8275.a[this__8275.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8276 = this;
if(cljs.core.truth_(((this__8276.i + 1) < this__8276.a.length)))
{return (new cljs.core.IndexedSeq(this__8276.a,(this__8276.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8277 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__8286 = null;
var G__8286__8287 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8286__8288 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8286 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8286__8287.call(this,array,f);
case  3 :
return G__8286__8288.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8286;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8290 = null;
var G__8290__8291 = (function (array,k){
return (array[k]);
});
var G__8290__8292 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8290 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8290__8291.call(this,array,k);
case  3 :
return G__8290__8292.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8290;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8294 = null;
var G__8294__8295 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8294__8296 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8294 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8294__8295.call(this,array,n);
case  3 :
return G__8294__8296.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8294;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3974__auto____8298 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____8298))
{var s__8299 = temp__3974__auto____8298;

return cljs.core._first.call(null,s__8299);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__8300 = cljs.core.next.call(null,s);
s = G__8300;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__8301 = cljs.core.seq.call(null,x);
var n__8302 = 0;

while(true){
if(cljs.core.truth_(s__8301))
{{
var G__8303 = cljs.core.next.call(null,s__8301);
var G__8304 = (n__8302 + 1);
s__8301 = G__8303;
n__8302 = G__8304;
continue;
}
} else
{return n__8302;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__8305 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8306 = (function() { 
var G__8308__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8309 = conj.call(null,coll,x);
var G__8310 = cljs.core.first.call(null,xs);
var G__8311 = cljs.core.next.call(null,xs);
coll = G__8309;
x = G__8310;
xs = G__8311;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8308 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8308__delegate.call(this, coll, x, xs);
};
G__8308.cljs$lang$maxFixedArity = 2;
G__8308.cljs$lang$applyTo = (function (arglist__8312){
var coll = cljs.core.first(arglist__8312);
var x = cljs.core.first(cljs.core.next(arglist__8312));
var xs = cljs.core.rest(cljs.core.next(arglist__8312));
return G__8308__delegate.call(this, coll, x, xs);
});
return G__8308;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8305.call(this,coll,x);
default:
return conj__8306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8306.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__8313 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8314 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8313.call(this,coll,n);
case  3 :
return nth__8314.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__8316 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8317 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8316.call(this,o,k);
case  3 :
return get__8317.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__8320 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8321 = (function() { 
var G__8323__delegate = function (coll,k,v,kvs){
while(true){
var ret__8319 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8324 = ret__8319;
var G__8325 = cljs.core.first.call(null,kvs);
var G__8326 = cljs.core.second.call(null,kvs);
var G__8327 = cljs.core.nnext.call(null,kvs);
coll = G__8324;
k = G__8325;
v = G__8326;
kvs = G__8327;
continue;
}
} else
{return ret__8319;
}
break;
}
};
var G__8323 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8323__delegate.call(this, coll, k, v, kvs);
};
G__8323.cljs$lang$maxFixedArity = 3;
G__8323.cljs$lang$applyTo = (function (arglist__8328){
var coll = cljs.core.first(arglist__8328);
var k = cljs.core.first(cljs.core.next(arglist__8328));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8328)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8328)));
return G__8323__delegate.call(this, coll, k, v, kvs);
});
return G__8323;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8320.call(this,coll,k,v);
default:
return assoc__8321.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8321.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__8330 = (function (coll){
return coll;
});
var dissoc__8331 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8332 = (function() { 
var G__8334__delegate = function (coll,k,ks){
while(true){
var ret__8329 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8335 = ret__8329;
var G__8336 = cljs.core.first.call(null,ks);
var G__8337 = cljs.core.next.call(null,ks);
coll = G__8335;
k = G__8336;
ks = G__8337;
continue;
}
} else
{return ret__8329;
}
break;
}
};
var G__8334 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8334__delegate.call(this, coll, k, ks);
};
G__8334.cljs$lang$maxFixedArity = 2;
G__8334.cljs$lang$applyTo = (function (arglist__8338){
var coll = cljs.core.first(arglist__8338);
var k = cljs.core.first(cljs.core.next(arglist__8338));
var ks = cljs.core.rest(cljs.core.next(arglist__8338));
return G__8334__delegate.call(this, coll, k, ks);
});
return G__8334;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8330.call(this,coll);
case  2 :
return dissoc__8331.call(this,coll,k);
default:
return dissoc__8332.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8332.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__3556__auto____8339 = o;

if(cljs.core.truth_((function (){var and__3822__auto____8340 = x__3556__auto____8339;

if(cljs.core.truth_(and__3822__auto____8340))
{var and__3822__auto____8341 = x__3556__auto____8339.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____8341))
{return cljs.core.not.call(null,x__3556__auto____8339.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____8341;
}
} else
{return and__3822__auto____8340;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3556__auto____8339);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__8343 = (function (coll){
return coll;
});
var disj__8344 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8345 = (function() { 
var G__8347__delegate = function (coll,k,ks){
while(true){
var ret__8342 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8348 = ret__8342;
var G__8349 = cljs.core.first.call(null,ks);
var G__8350 = cljs.core.next.call(null,ks);
coll = G__8348;
k = G__8349;
ks = G__8350;
continue;
}
} else
{return ret__8342;
}
break;
}
};
var G__8347 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8347__delegate.call(this, coll, k, ks);
};
G__8347.cljs$lang$maxFixedArity = 2;
G__8347.cljs$lang$applyTo = (function (arglist__8351){
var coll = cljs.core.first(arglist__8351);
var k = cljs.core.first(cljs.core.next(arglist__8351));
var ks = cljs.core.rest(cljs.core.next(arglist__8351));
return G__8347__delegate.call(this, coll, k, ks);
});
return G__8347;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8343.call(this,coll);
case  2 :
return disj__8344.call(this,coll,k);
default:
return disj__8345.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8345.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3556__auto____8352 = x;

if(cljs.core.truth_((function (){var and__3822__auto____8353 = x__3556__auto____8352;

if(cljs.core.truth_(and__3822__auto____8353))
{var and__3822__auto____8354 = x__3556__auto____8352.cljs$core$ICollection$;

if(cljs.core.truth_(and__3822__auto____8354))
{return cljs.core.not.call(null,x__3556__auto____8352.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3822__auto____8354;
}
} else
{return and__3822__auto____8353;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3556__auto____8352);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3556__auto____8355 = x;

if(cljs.core.truth_((function (){var and__3822__auto____8356 = x__3556__auto____8355;

if(cljs.core.truth_(and__3822__auto____8356))
{var and__3822__auto____8357 = x__3556__auto____8355.cljs$core$ISet$;

if(cljs.core.truth_(and__3822__auto____8357))
{return cljs.core.not.call(null,x__3556__auto____8355.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3822__auto____8357;
}
} else
{return and__3822__auto____8356;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3556__auto____8355);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3556__auto____8358 = x;

if(cljs.core.truth_((function (){var and__3822__auto____8359 = x__3556__auto____8358;

if(cljs.core.truth_(and__3822__auto____8359))
{var and__3822__auto____8360 = x__3556__auto____8358.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3822__auto____8360))
{return cljs.core.not.call(null,x__3556__auto____8358.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3822__auto____8360;
}
} else
{return and__3822__auto____8359;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3556__auto____8358);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3556__auto____8361 = x;

if(cljs.core.truth_((function (){var and__3822__auto____8362 = x__3556__auto____8361;

if(cljs.core.truth_(and__3822__auto____8362))
{var and__3822__auto____8363 = x__3556__auto____8361.cljs$core$ISequential$;

if(cljs.core.truth_(and__3822__auto____8363))
{return cljs.core.not.call(null,x__3556__auto____8361.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3822__auto____8363;
}
} else
{return and__3822__auto____8362;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3556__auto____8361);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3556__auto____8364 = x;

if(cljs.core.truth_((function (){var and__3822__auto____8365 = x__3556__auto____8364;

if(cljs.core.truth_(and__3822__auto____8365))
{var and__3822__auto____8366 = x__3556__auto____8364.cljs$core$ICounted$;

if(cljs.core.truth_(and__3822__auto____8366))
{return cljs.core.not.call(null,x__3556__auto____8364.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3822__auto____8366;
}
} else
{return and__3822__auto____8365;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3556__auto____8364);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__3556__auto____8367 = x;

if(cljs.core.truth_((function (){var and__3822__auto____8368 = x__3556__auto____8367;

if(cljs.core.truth_(and__3822__auto____8368))
{var and__3822__auto____8369 = x__3556__auto____8367.cljs$core$IMap$;

if(cljs.core.truth_(and__3822__auto____8369))
{return cljs.core.not.call(null,x__3556__auto____8367.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3822__auto____8369;
}
} else
{return and__3822__auto____8368;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3556__auto____8367);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3556__auto____8370 = x;

if(cljs.core.truth_((function (){var and__3822__auto____8371 = x__3556__auto____8370;

if(cljs.core.truth_(and__3822__auto____8371))
{var and__3822__auto____8372 = x__3556__auto____8370.cljs$core$IVector$;

if(cljs.core.truth_(and__3822__auto____8372))
{return cljs.core.not.call(null,x__3556__auto____8370.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3822__auto____8372;
}
} else
{return and__3822__auto____8371;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3556__auto____8370);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8373 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8373.push(key);
}));
return keys__8373;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__3556__auto____8374 = s;

if(cljs.core.truth_((function (){var and__3822__auto____8375 = x__3556__auto____8374;

if(cljs.core.truth_(and__3822__auto____8375))
{var and__3822__auto____8376 = x__3556__auto____8374.cljs$core$ISeq$;

if(cljs.core.truth_(and__3822__auto____8376))
{return cljs.core.not.call(null,x__3556__auto____8374.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3822__auto____8376;
}
} else
{return and__3822__auto____8375;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3556__auto____8374);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____8377 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____8377))
{return cljs.core.not.call(null,(function (){var or__3824__auto____8378 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3824__auto____8378))
{return or__3824__auto____8378;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3822__auto____8377;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____8379 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____8379))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3822__auto____8379;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____8380 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____8380))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3822__auto____8380;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____8381 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3822__auto____8381))
{return (n == n.toFixed());
} else
{return and__3822__auto____8381;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____8382 = coll;

if(cljs.core.truth_(and__3822__auto____8382))
{var and__3822__auto____8383 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3822__auto____8383))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____8383;
}
} else
{return and__3822__auto____8382;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___8388 = (function (x){
return true;
});
var distinct_QMARK___8389 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8390 = (function() { 
var G__8392__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8384 = cljs.core.set([y,x]);
var xs__8385 = more;

while(true){
var x__8386 = cljs.core.first.call(null,xs__8385);
var etc__8387 = cljs.core.next.call(null,xs__8385);

if(cljs.core.truth_(xs__8385))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8384,x__8386)))
{return false;
} else
{{
var G__8393 = cljs.core.conj.call(null,s__8384,x__8386);
var G__8394 = etc__8387;
s__8384 = G__8393;
xs__8385 = G__8394;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__8392 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8392__delegate.call(this, x, y, more);
};
G__8392.cljs$lang$maxFixedArity = 2;
G__8392.cljs$lang$applyTo = (function (arglist__8395){
var x = cljs.core.first(arglist__8395);
var y = cljs.core.first(cljs.core.next(arglist__8395));
var more = cljs.core.rest(cljs.core.next(arglist__8395));
return G__8392__delegate.call(this, x, y, more);
});
return G__8392;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8388.call(this,x);
case  2 :
return distinct_QMARK___8389.call(this,x,y);
default:
return distinct_QMARK___8390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8390.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__8396 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8396)))
{return r__8396;
} else
{if(cljs.core.truth_(r__8396))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__8398 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8399 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8397 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8397,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8397);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8398.call(this,comp);
case  2 :
return sort__8399.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__8401 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8402 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8401.call(this,keyfn,comp);
case  3 :
return sort_by__8402.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__8404 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8405 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8404.call(this,f,val);
case  3 :
return reduce__8405.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8411 = (function (f,coll){
var temp__3971__auto____8407 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____8407))
{var s__8408 = temp__3971__auto____8407;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8408),cljs.core.next.call(null,s__8408));
} else
{return f.call(null);
}
});
var seq_reduce__8412 = (function (f,val,coll){
var val__8409 = val;
var coll__8410 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8410))
{{
var G__8414 = f.call(null,val__8409,cljs.core.first.call(null,coll__8410));
var G__8415 = cljs.core.next.call(null,coll__8410);
val__8409 = G__8414;
coll__8410 = G__8415;
continue;
}
} else
{return val__8409;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8411.call(this,f,val);
case  3 :
return seq_reduce__8412.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8416 = null;
var G__8416__8417 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8416__8418 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8416 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8416__8417.call(this,coll,f);
case  3 :
return G__8416__8418.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8416;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8420 = (function (){
return 0;
});
var _PLUS___8421 = (function (x){
return x;
});
var _PLUS___8422 = (function (x,y){
return (x + y);
});
var _PLUS___8423 = (function() { 
var G__8425__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8425 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8425__delegate.call(this, x, y, more);
};
G__8425.cljs$lang$maxFixedArity = 2;
G__8425.cljs$lang$applyTo = (function (arglist__8426){
var x = cljs.core.first(arglist__8426);
var y = cljs.core.first(cljs.core.next(arglist__8426));
var more = cljs.core.rest(cljs.core.next(arglist__8426));
return G__8425__delegate.call(this, x, y, more);
});
return G__8425;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8420.call(this);
case  1 :
return _PLUS___8421.call(this,x);
case  2 :
return _PLUS___8422.call(this,x,y);
default:
return _PLUS___8423.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8423.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___8427 = (function (x){
return (- x);
});
var ___8428 = (function (x,y){
return (x - y);
});
var ___8429 = (function() { 
var G__8431__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8431 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8431__delegate.call(this, x, y, more);
};
G__8431.cljs$lang$maxFixedArity = 2;
G__8431.cljs$lang$applyTo = (function (arglist__8432){
var x = cljs.core.first(arglist__8432);
var y = cljs.core.first(cljs.core.next(arglist__8432));
var more = cljs.core.rest(cljs.core.next(arglist__8432));
return G__8431__delegate.call(this, x, y, more);
});
return G__8431;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8427.call(this,x);
case  2 :
return ___8428.call(this,x,y);
default:
return ___8429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8429.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8433 = (function (){
return 1;
});
var _STAR___8434 = (function (x){
return x;
});
var _STAR___8435 = (function (x,y){
return (x * y);
});
var _STAR___8436 = (function() { 
var G__8438__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8438 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8438__delegate.call(this, x, y, more);
};
G__8438.cljs$lang$maxFixedArity = 2;
G__8438.cljs$lang$applyTo = (function (arglist__8439){
var x = cljs.core.first(arglist__8439);
var y = cljs.core.first(cljs.core.next(arglist__8439));
var more = cljs.core.rest(cljs.core.next(arglist__8439));
return G__8438__delegate.call(this, x, y, more);
});
return G__8438;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8433.call(this);
case  1 :
return _STAR___8434.call(this,x);
case  2 :
return _STAR___8435.call(this,x,y);
default:
return _STAR___8436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8436.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___8440 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8441 = (function (x,y){
return (x / y);
});
var _SLASH___8442 = (function() { 
var G__8444__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8444 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8444__delegate.call(this, x, y, more);
};
G__8444.cljs$lang$maxFixedArity = 2;
G__8444.cljs$lang$applyTo = (function (arglist__8445){
var x = cljs.core.first(arglist__8445);
var y = cljs.core.first(cljs.core.next(arglist__8445));
var more = cljs.core.rest(cljs.core.next(arglist__8445));
return G__8444__delegate.call(this, x, y, more);
});
return G__8444;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8440.call(this,x);
case  2 :
return _SLASH___8441.call(this,x,y);
default:
return _SLASH___8442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8442.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___8446 = (function (x){
return true;
});
var _LT___8447 = (function (x,y){
return (x < y);
});
var _LT___8448 = (function() { 
var G__8450__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8451 = y;
var G__8452 = cljs.core.first.call(null,more);
var G__8453 = cljs.core.next.call(null,more);
x = G__8451;
y = G__8452;
more = G__8453;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8450 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8450__delegate.call(this, x, y, more);
};
G__8450.cljs$lang$maxFixedArity = 2;
G__8450.cljs$lang$applyTo = (function (arglist__8454){
var x = cljs.core.first(arglist__8454);
var y = cljs.core.first(cljs.core.next(arglist__8454));
var more = cljs.core.rest(cljs.core.next(arglist__8454));
return G__8450__delegate.call(this, x, y, more);
});
return G__8450;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8446.call(this,x);
case  2 :
return _LT___8447.call(this,x,y);
default:
return _LT___8448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8448.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___8455 = (function (x){
return true;
});
var _LT__EQ___8456 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8457 = (function() { 
var G__8459__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8460 = y;
var G__8461 = cljs.core.first.call(null,more);
var G__8462 = cljs.core.next.call(null,more);
x = G__8460;
y = G__8461;
more = G__8462;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8459 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8459__delegate.call(this, x, y, more);
};
G__8459.cljs$lang$maxFixedArity = 2;
G__8459.cljs$lang$applyTo = (function (arglist__8463){
var x = cljs.core.first(arglist__8463);
var y = cljs.core.first(cljs.core.next(arglist__8463));
var more = cljs.core.rest(cljs.core.next(arglist__8463));
return G__8459__delegate.call(this, x, y, more);
});
return G__8459;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8455.call(this,x);
case  2 :
return _LT__EQ___8456.call(this,x,y);
default:
return _LT__EQ___8457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8457.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___8464 = (function (x){
return true;
});
var _GT___8465 = (function (x,y){
return (x > y);
});
var _GT___8466 = (function() { 
var G__8468__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8469 = y;
var G__8470 = cljs.core.first.call(null,more);
var G__8471 = cljs.core.next.call(null,more);
x = G__8469;
y = G__8470;
more = G__8471;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8468 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8468__delegate.call(this, x, y, more);
};
G__8468.cljs$lang$maxFixedArity = 2;
G__8468.cljs$lang$applyTo = (function (arglist__8472){
var x = cljs.core.first(arglist__8472);
var y = cljs.core.first(cljs.core.next(arglist__8472));
var more = cljs.core.rest(cljs.core.next(arglist__8472));
return G__8468__delegate.call(this, x, y, more);
});
return G__8468;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8464.call(this,x);
case  2 :
return _GT___8465.call(this,x,y);
default:
return _GT___8466.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8466.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___8473 = (function (x){
return true;
});
var _GT__EQ___8474 = (function (x,y){
return (x >= y);
});
var _GT__EQ___8475 = (function() { 
var G__8477__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8478 = y;
var G__8479 = cljs.core.first.call(null,more);
var G__8480 = cljs.core.next.call(null,more);
x = G__8478;
y = G__8479;
more = G__8480;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8477 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8477__delegate.call(this, x, y, more);
};
G__8477.cljs$lang$maxFixedArity = 2;
G__8477.cljs$lang$applyTo = (function (arglist__8481){
var x = cljs.core.first(arglist__8481);
var y = cljs.core.first(cljs.core.next(arglist__8481));
var more = cljs.core.rest(cljs.core.next(arglist__8481));
return G__8477__delegate.call(this, x, y, more);
});
return G__8477;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___8473.call(this,x);
case  2 :
return _GT__EQ___8474.call(this,x,y);
default:
return _GT__EQ___8475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___8475.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__8482 = (function (x){
return x;
});
var max__8483 = (function (x,y){
return ((x > y) ? x : y);
});
var max__8484 = (function() { 
var G__8486__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8486 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8486__delegate.call(this, x, y, more);
};
G__8486.cljs$lang$maxFixedArity = 2;
G__8486.cljs$lang$applyTo = (function (arglist__8487){
var x = cljs.core.first(arglist__8487);
var y = cljs.core.first(cljs.core.next(arglist__8487));
var more = cljs.core.rest(cljs.core.next(arglist__8487));
return G__8486__delegate.call(this, x, y, more);
});
return G__8486;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__8482.call(this,x);
case  2 :
return max__8483.call(this,x,y);
default:
return max__8484.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__8484.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8488 = (function (x){
return x;
});
var min__8489 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8490 = (function() { 
var G__8492__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8492 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8492__delegate.call(this, x, y, more);
};
G__8492.cljs$lang$maxFixedArity = 2;
G__8492.cljs$lang$applyTo = (function (arglist__8493){
var x = cljs.core.first(arglist__8493);
var y = cljs.core.first(cljs.core.next(arglist__8493));
var more = cljs.core.rest(cljs.core.next(arglist__8493));
return G__8492__delegate.call(this, x, y, more);
});
return G__8492;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8488.call(this,x);
case  2 :
return min__8489.call(this,x,y);
default:
return min__8490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8490.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__8494 = (n % d);

return cljs.core.fix.call(null,((n - rem__8494) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8495 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8495));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8496 = (function (){
return Math.random.call(null);
});
var rand__8497 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8496.call(this);
case  1 :
return rand__8497.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___8499 = (function (x){
return true;
});
var _EQ__EQ___8500 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8501 = (function() { 
var G__8503__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8504 = y;
var G__8505 = cljs.core.first.call(null,more);
var G__8506 = cljs.core.next.call(null,more);
x = G__8504;
y = G__8505;
more = G__8506;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8503 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8503__delegate.call(this, x, y, more);
};
G__8503.cljs$lang$maxFixedArity = 2;
G__8503.cljs$lang$applyTo = (function (arglist__8507){
var x = cljs.core.first(arglist__8507);
var y = cljs.core.first(cljs.core.next(arglist__8507));
var more = cljs.core.rest(cljs.core.next(arglist__8507));
return G__8503__delegate.call(this, x, y, more);
});
return G__8503;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8499.call(this,x);
case  2 :
return _EQ__EQ___8500.call(this,x,y);
default:
return _EQ__EQ___8501.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8501.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__8508 = n;
var xs__8509 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8510 = xs__8509;

if(cljs.core.truth_(and__3822__auto____8510))
{return (n__8508 > 0);
} else
{return and__3822__auto____8510;
}
})()))
{{
var G__8511 = (n__8508 - 1);
var G__8512 = cljs.core.next.call(null,xs__8509);
n__8508 = G__8511;
xs__8509 = G__8512;
continue;
}
} else
{return xs__8509;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8517 = null;
var G__8517__8518 = (function (coll,n){
var temp__3971__auto____8513 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____8513))
{var xs__8514 = temp__3971__auto____8513;

return cljs.core.first.call(null,xs__8514);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8517__8519 = (function (coll,n,not_found){
var temp__3971__auto____8515 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____8515))
{var xs__8516 = temp__3971__auto____8515;

return cljs.core.first.call(null,xs__8516);
} else
{return not_found;
}
});
G__8517 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8517__8518.call(this,coll,n);
case  3 :
return G__8517__8519.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8517;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8521 = (function (){
return "";
});
var str_STAR___8522 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___8523 = (function() { 
var G__8525__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8526 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8527 = cljs.core.next.call(null,more);
sb = G__8526;
more = G__8527;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8525 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8525__delegate.call(this, x, ys);
};
G__8525.cljs$lang$maxFixedArity = 1;
G__8525.cljs$lang$applyTo = (function (arglist__8528){
var x = cljs.core.first(arglist__8528);
var ys = cljs.core.rest(arglist__8528);
return G__8525__delegate.call(this, x, ys);
});
return G__8525;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8521.call(this);
case  1 :
return str_STAR___8522.call(this,x);
default:
return str_STAR___8523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8523.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__8529 = (function (){
return "";
});
var str__8530 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__8531 = (function() { 
var G__8533__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8534 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8535 = cljs.core.next.call(null,more);
sb = G__8534;
more = G__8535;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8533 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8533__delegate.call(this, x, ys);
};
G__8533.cljs$lang$maxFixedArity = 1;
G__8533.cljs$lang$applyTo = (function (arglist__8536){
var x = cljs.core.first(arglist__8536);
var ys = cljs.core.rest(arglist__8536);
return G__8533__delegate.call(this, x, ys);
});
return G__8533;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8529.call(this);
case  1 :
return str__8530.call(this,x);
default:
return str__8531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8531.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8537 = (function (s,start){
return s.substring(start);
});
var subs__8538 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8537.call(this,s,start);
case  3 :
return subs__8538.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__8540 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__8541 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8540.call(this,ns);
case  2 :
return symbol__8541.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__8543 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__8544 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8543.call(this,ns);
case  2 :
return keyword__8544.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8546 = cljs.core.seq.call(null,x);
var ys__8547 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__8546 === null)))
{return (ys__8547 === null);
} else
{if(cljs.core.truth_((ys__8547 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8546),cljs.core.first.call(null,ys__8547))))
{{
var G__8548 = cljs.core.next.call(null,xs__8546);
var G__8549 = cljs.core.next.call(null,ys__8547);
xs__8546 = G__8548;
ys__8547 = G__8549;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__8550_SHARP_,p2__8551_SHARP_){
return cljs.core.hash_combine.call(null,p1__8550_SHARP_,cljs.core.hash.call(null,p2__8551_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8552__8553 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8552__8553))
{var G__8555__8557 = cljs.core.first.call(null,G__8552__8553);
var vec__8556__8558 = G__8555__8557;
var key_name__8559 = cljs.core.nth.call(null,vec__8556__8558,0,null);
var f__8560 = cljs.core.nth.call(null,vec__8556__8558,1,null);
var G__8552__8561 = G__8552__8553;

var G__8555__8562 = G__8555__8557;
var G__8552__8563 = G__8552__8561;

while(true){
var vec__8564__8565 = G__8555__8562;
var key_name__8566 = cljs.core.nth.call(null,vec__8564__8565,0,null);
var f__8567 = cljs.core.nth.call(null,vec__8564__8565,1,null);
var G__8552__8568 = G__8552__8563;

var str_name__8569 = cljs.core.name.call(null,key_name__8566);

obj[str_name__8569] = f__8567;
var temp__3974__auto____8570 = cljs.core.next.call(null,G__8552__8568);

if(cljs.core.truth_(temp__3974__auto____8570))
{var G__8552__8571 = temp__3974__auto____8570;

{
var G__8572 = cljs.core.first.call(null,G__8552__8571);
var G__8573 = G__8552__8571;
G__8555__8562 = G__8572;
G__8552__8563 = G__8573;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8574 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8575 = this;
return (new cljs.core.List(this__8575.meta,o,coll,(this__8575.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8576 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8577 = this;
return this__8577.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8578 = this;
return this__8578.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8579 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8580 = this;
return this__8580.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8581 = this;
return this__8581.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8582 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8583 = this;
return (new cljs.core.List(meta,this__8583.first,this__8583.rest,this__8583.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8584 = this;
return this__8584.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8585 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8586 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8587 = this;
return (new cljs.core.List(this__8587.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8588 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8589 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8590 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8591 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8592 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8593 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8594 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8595 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8596 = this;
return this__8596.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8597 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__8598){
var items = cljs.core.seq( arglist__8598 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8599 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8600 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8601 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8602 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8602.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8603 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8604 = this;
return this__8604.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8605 = this;
if(cljs.core.truth_((this__8605.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__8605.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8606 = this;
return this__8606.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8607 = this;
return (new cljs.core.Cons(meta,this__8607.first,this__8607.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8608 = null;
var G__8608__8609 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8608__8610 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8608 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__8608__8609.call(this,string,f);
case  3 :
return G__8608__8610.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8608;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8612 = null;
var G__8612__8613 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8612__8614 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8612 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__8612__8613.call(this,string,k);
case  3 :
return G__8612__8614.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8612;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8616 = null;
var G__8616__8617 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__8616__8618 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8616 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__8616__8617.call(this,string,n);
case  3 :
return G__8616__8618.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8616;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__8626 = null;
var G__8626__8627 = (function (tsym8620,coll){
var tsym8620__8622 = this;

var this$__8623 = tsym8620__8622;

return cljs.core.get.call(null,coll,this$__8623.toString());
});
var G__8626__8628 = (function (tsym8621,coll,not_found){
var tsym8621__8624 = this;

var this$__8625 = tsym8621__8624;

return cljs.core.get.call(null,coll,this$__8625.toString(),not_found);
});
G__8626 = function(tsym8621,coll,not_found){
switch(arguments.length){
case  2 :
return G__8626__8627.call(this,tsym8621,coll);
case  3 :
return G__8626__8628.call(this,tsym8621,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8626;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8630 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__8630;
} else
{lazy_seq.x = x__8630.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8631 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8632 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8633 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8634 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8634.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8635 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8636 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8637 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8638 = this;
return this__8638.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8639 = this;
return (new cljs.core.LazySeq(meta,this__8639.realized,this__8639.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8640 = [];

var s__8641 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8641)))
{ary__8640.push(cljs.core.first.call(null,s__8641));
{
var G__8642 = cljs.core.next.call(null,s__8641);
s__8641 = G__8642;
continue;
}
} else
{return ary__8640;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__8643 = s;
var i__8644 = n;
var sum__8645 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8646 = (i__8644 > 0);

if(cljs.core.truth_(and__3822__auto____8646))
{return cljs.core.seq.call(null,s__8643);
} else
{return and__3822__auto____8646;
}
})()))
{{
var G__8647 = cljs.core.next.call(null,s__8643);
var G__8648 = (i__8644 - 1);
var G__8649 = (sum__8645 + 1);
s__8643 = G__8647;
i__8644 = G__8648;
sum__8645 = G__8649;
continue;
}
} else
{return sum__8645;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__8653 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__8654 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__8655 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8650 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__8650))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8650),concat.call(null,cljs.core.rest.call(null,s__8650),y));
} else
{return y;
}
})));
});
var concat__8656 = (function() { 
var G__8658__delegate = function (x,y,zs){
var cat__8652 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8651 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__8651))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8651),cat.call(null,cljs.core.rest.call(null,xys__8651),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__8652.call(null,concat.call(null,x,y),zs);
};
var G__8658 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8658__delegate.call(this, x, y, zs);
};
G__8658.cljs$lang$maxFixedArity = 2;
G__8658.cljs$lang$applyTo = (function (arglist__8659){
var x = cljs.core.first(arglist__8659);
var y = cljs.core.first(cljs.core.next(arglist__8659));
var zs = cljs.core.rest(cljs.core.next(arglist__8659));
return G__8658__delegate.call(this, x, y, zs);
});
return G__8658;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__8653.call(this);
case  1 :
return concat__8654.call(this,x);
case  2 :
return concat__8655.call(this,x,y);
default:
return concat__8656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__8656.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___8660 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___8661 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___8662 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___8663 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___8664 = (function() { 
var G__8666__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8666 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8666__delegate.call(this, a, b, c, d, more);
};
G__8666.cljs$lang$maxFixedArity = 4;
G__8666.cljs$lang$applyTo = (function (arglist__8667){
var a = cljs.core.first(arglist__8667);
var b = cljs.core.first(cljs.core.next(arglist__8667));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8667)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8667))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8667))));
return G__8666__delegate.call(this, a, b, c, d, more);
});
return G__8666;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___8660.call(this,a);
case  2 :
return list_STAR___8661.call(this,a,b);
case  3 :
return list_STAR___8662.call(this,a,b,c);
case  4 :
return list_STAR___8663.call(this,a,b,c,d);
default:
return list_STAR___8664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___8664.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__8677 = (function (f,args){
var fixed_arity__8668 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__8668 + 1)) <= fixed_arity__8668)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__8678 = (function (f,x,args){
var arglist__8669 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8670 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8669,fixed_arity__8670) <= fixed_arity__8670)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8669));
} else
{return f.cljs$lang$applyTo(arglist__8669);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8669));
}
});
var apply__8679 = (function (f,x,y,args){
var arglist__8671 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8672 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8671,fixed_arity__8672) <= fixed_arity__8672)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8671));
} else
{return f.cljs$lang$applyTo(arglist__8671);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8671));
}
});
var apply__8680 = (function (f,x,y,z,args){
var arglist__8673 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8674 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8673,fixed_arity__8674) <= fixed_arity__8674)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8673));
} else
{return f.cljs$lang$applyTo(arglist__8673);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8673));
}
});
var apply__8681 = (function() { 
var G__8683__delegate = function (f,a,b,c,d,args){
var arglist__8675 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8676 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8675,fixed_arity__8676) <= fixed_arity__8676)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8675));
} else
{return f.cljs$lang$applyTo(arglist__8675);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8675));
}
};
var G__8683 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8683__delegate.call(this, f, a, b, c, d, args);
};
G__8683.cljs$lang$maxFixedArity = 5;
G__8683.cljs$lang$applyTo = (function (arglist__8684){
var f = cljs.core.first(arglist__8684);
var a = cljs.core.first(cljs.core.next(arglist__8684));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8684)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8684))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8684)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8684)))));
return G__8683__delegate.call(this, f, a, b, c, d, args);
});
return G__8683;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__8677.call(this,f,a);
case  3 :
return apply__8678.call(this,f,a,b);
case  4 :
return apply__8679.call(this,f,a,b,c);
case  5 :
return apply__8680.call(this,f,a,b,c,d);
default:
return apply__8681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__8681.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__8685){
var obj = cljs.core.first(arglist__8685);
var f = cljs.core.first(cljs.core.next(arglist__8685));
var args = cljs.core.rest(cljs.core.next(arglist__8685));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___8686 = (function (x){
return false;
});
var not_EQ___8687 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___8688 = (function() { 
var G__8690__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8690 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8690__delegate.call(this, x, y, more);
};
G__8690.cljs$lang$maxFixedArity = 2;
G__8690.cljs$lang$applyTo = (function (arglist__8691){
var x = cljs.core.first(arglist__8691);
var y = cljs.core.first(cljs.core.next(arglist__8691));
var more = cljs.core.rest(cljs.core.next(arglist__8691));
return G__8690__delegate.call(this, x, y, more);
});
return G__8690;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___8686.call(this,x);
case  2 :
return not_EQ___8687.call(this,x,y);
default:
return not_EQ___8688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___8688.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__8692 = pred;
var G__8693 = cljs.core.next.call(null,coll);
pred = G__8692;
coll = G__8693;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3824__auto____8694 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3824__auto____8694))
{return or__3824__auto____8694;
} else
{{
var G__8695 = pred;
var G__8696 = cljs.core.next.call(null,coll);
pred = G__8695;
coll = G__8696;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__8697 = null;
var G__8697__8698 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8697__8699 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8697__8700 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8697__8701 = (function() { 
var G__8703__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8703 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8703__delegate.call(this, x, y, zs);
};
G__8703.cljs$lang$maxFixedArity = 2;
G__8703.cljs$lang$applyTo = (function (arglist__8704){
var x = cljs.core.first(arglist__8704);
var y = cljs.core.first(cljs.core.next(arglist__8704));
var zs = cljs.core.rest(cljs.core.next(arglist__8704));
return G__8703__delegate.call(this, x, y, zs);
});
return G__8703;
})()
;
G__8697 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__8697__8698.call(this);
case  1 :
return G__8697__8699.call(this,x);
case  2 :
return G__8697__8700.call(this,x,y);
default:
return G__8697__8701.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8697.cljs$lang$maxFixedArity = 2;
G__8697.cljs$lang$applyTo = G__8697__8701.cljs$lang$applyTo;
return G__8697;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8705__delegate = function (args){
return x;
};
var G__8705 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8705__delegate.call(this, args);
};
G__8705.cljs$lang$maxFixedArity = 0;
G__8705.cljs$lang$applyTo = (function (arglist__8706){
var args = cljs.core.seq( arglist__8706 );;
return G__8705__delegate.call(this, args);
});
return G__8705;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__8710 = (function (){
return cljs.core.identity;
});
var comp__8711 = (function (f){
return f;
});
var comp__8712 = (function (f,g){
return (function() {
var G__8716 = null;
var G__8716__8717 = (function (){
return f.call(null,g.call(null));
});
var G__8716__8718 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8716__8719 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8716__8720 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8716__8721 = (function() { 
var G__8723__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8723 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8723__delegate.call(this, x, y, z, args);
};
G__8723.cljs$lang$maxFixedArity = 3;
G__8723.cljs$lang$applyTo = (function (arglist__8724){
var x = cljs.core.first(arglist__8724);
var y = cljs.core.first(cljs.core.next(arglist__8724));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8724)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8724)));
return G__8723__delegate.call(this, x, y, z, args);
});
return G__8723;
})()
;
G__8716 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8716__8717.call(this);
case  1 :
return G__8716__8718.call(this,x);
case  2 :
return G__8716__8719.call(this,x,y);
case  3 :
return G__8716__8720.call(this,x,y,z);
default:
return G__8716__8721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8716.cljs$lang$maxFixedArity = 3;
G__8716.cljs$lang$applyTo = G__8716__8721.cljs$lang$applyTo;
return G__8716;
})()
});
var comp__8713 = (function (f,g,h){
return (function() {
var G__8725 = null;
var G__8725__8726 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8725__8727 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8725__8728 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8725__8729 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8725__8730 = (function() { 
var G__8732__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8732 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8732__delegate.call(this, x, y, z, args);
};
G__8732.cljs$lang$maxFixedArity = 3;
G__8732.cljs$lang$applyTo = (function (arglist__8733){
var x = cljs.core.first(arglist__8733);
var y = cljs.core.first(cljs.core.next(arglist__8733));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8733)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8733)));
return G__8732__delegate.call(this, x, y, z, args);
});
return G__8732;
})()
;
G__8725 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8725__8726.call(this);
case  1 :
return G__8725__8727.call(this,x);
case  2 :
return G__8725__8728.call(this,x,y);
case  3 :
return G__8725__8729.call(this,x,y,z);
default:
return G__8725__8730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8725.cljs$lang$maxFixedArity = 3;
G__8725.cljs$lang$applyTo = G__8725__8730.cljs$lang$applyTo;
return G__8725;
})()
});
var comp__8714 = (function() { 
var G__8734__delegate = function (f1,f2,f3,fs){
var fs__8707 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__8735__delegate = function (args){
var ret__8708 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8707),args);
var fs__8709 = cljs.core.next.call(null,fs__8707);

while(true){
if(cljs.core.truth_(fs__8709))
{{
var G__8736 = cljs.core.first.call(null,fs__8709).call(null,ret__8708);
var G__8737 = cljs.core.next.call(null,fs__8709);
ret__8708 = G__8736;
fs__8709 = G__8737;
continue;
}
} else
{return ret__8708;
}
break;
}
};
var G__8735 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8735__delegate.call(this, args);
};
G__8735.cljs$lang$maxFixedArity = 0;
G__8735.cljs$lang$applyTo = (function (arglist__8738){
var args = cljs.core.seq( arglist__8738 );;
return G__8735__delegate.call(this, args);
});
return G__8735;
})()
;
};
var G__8734 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8734__delegate.call(this, f1, f2, f3, fs);
};
G__8734.cljs$lang$maxFixedArity = 3;
G__8734.cljs$lang$applyTo = (function (arglist__8739){
var f1 = cljs.core.first(arglist__8739);
var f2 = cljs.core.first(cljs.core.next(arglist__8739));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8739)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8739)));
return G__8734__delegate.call(this, f1, f2, f3, fs);
});
return G__8734;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__8710.call(this);
case  1 :
return comp__8711.call(this,f1);
case  2 :
return comp__8712.call(this,f1,f2);
case  3 :
return comp__8713.call(this,f1,f2,f3);
default:
return comp__8714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__8714.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__8740 = (function (f,arg1){
return (function() { 
var G__8745__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8745 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8745__delegate.call(this, args);
};
G__8745.cljs$lang$maxFixedArity = 0;
G__8745.cljs$lang$applyTo = (function (arglist__8746){
var args = cljs.core.seq( arglist__8746 );;
return G__8745__delegate.call(this, args);
});
return G__8745;
})()
;
});
var partial__8741 = (function (f,arg1,arg2){
return (function() { 
var G__8747__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8747 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8747__delegate.call(this, args);
};
G__8747.cljs$lang$maxFixedArity = 0;
G__8747.cljs$lang$applyTo = (function (arglist__8748){
var args = cljs.core.seq( arglist__8748 );;
return G__8747__delegate.call(this, args);
});
return G__8747;
})()
;
});
var partial__8742 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8749__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8749 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8749__delegate.call(this, args);
};
G__8749.cljs$lang$maxFixedArity = 0;
G__8749.cljs$lang$applyTo = (function (arglist__8750){
var args = cljs.core.seq( arglist__8750 );;
return G__8749__delegate.call(this, args);
});
return G__8749;
})()
;
});
var partial__8743 = (function() { 
var G__8751__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8752__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8752 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8752__delegate.call(this, args);
};
G__8752.cljs$lang$maxFixedArity = 0;
G__8752.cljs$lang$applyTo = (function (arglist__8753){
var args = cljs.core.seq( arglist__8753 );;
return G__8752__delegate.call(this, args);
});
return G__8752;
})()
;
};
var G__8751 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8751__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8751.cljs$lang$maxFixedArity = 4;
G__8751.cljs$lang$applyTo = (function (arglist__8754){
var f = cljs.core.first(arglist__8754);
var arg1 = cljs.core.first(cljs.core.next(arglist__8754));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8754)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8754))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8754))));
return G__8751__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__8751;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__8740.call(this,f,arg1);
case  3 :
return partial__8741.call(this,f,arg1,arg2);
case  4 :
return partial__8742.call(this,f,arg1,arg2,arg3);
default:
return partial__8743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__8743.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__8755 = (function (f,x){
return (function() {
var G__8759 = null;
var G__8759__8760 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__8759__8761 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__8759__8762 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__8759__8763 = (function() { 
var G__8765__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__8765 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8765__delegate.call(this, a, b, c, ds);
};
G__8765.cljs$lang$maxFixedArity = 3;
G__8765.cljs$lang$applyTo = (function (arglist__8766){
var a = cljs.core.first(arglist__8766);
var b = cljs.core.first(cljs.core.next(arglist__8766));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8766)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8766)));
return G__8765__delegate.call(this, a, b, c, ds);
});
return G__8765;
})()
;
G__8759 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__8759__8760.call(this,a);
case  2 :
return G__8759__8761.call(this,a,b);
case  3 :
return G__8759__8762.call(this,a,b,c);
default:
return G__8759__8763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8759.cljs$lang$maxFixedArity = 3;
G__8759.cljs$lang$applyTo = G__8759__8763.cljs$lang$applyTo;
return G__8759;
})()
});
var fnil__8756 = (function (f,x,y){
return (function() {
var G__8767 = null;
var G__8767__8768 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8767__8769 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__8767__8770 = (function() { 
var G__8772__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__8772 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8772__delegate.call(this, a, b, c, ds);
};
G__8772.cljs$lang$maxFixedArity = 3;
G__8772.cljs$lang$applyTo = (function (arglist__8773){
var a = cljs.core.first(arglist__8773);
var b = cljs.core.first(cljs.core.next(arglist__8773));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8773)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8773)));
return G__8772__delegate.call(this, a, b, c, ds);
});
return G__8772;
})()
;
G__8767 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8767__8768.call(this,a,b);
case  3 :
return G__8767__8769.call(this,a,b,c);
default:
return G__8767__8770.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8767.cljs$lang$maxFixedArity = 3;
G__8767.cljs$lang$applyTo = G__8767__8770.cljs$lang$applyTo;
return G__8767;
})()
});
var fnil__8757 = (function (f,x,y,z){
return (function() {
var G__8774 = null;
var G__8774__8775 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__8774__8776 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__8774__8777 = (function() { 
var G__8779__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__8779 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8779__delegate.call(this, a, b, c, ds);
};
G__8779.cljs$lang$maxFixedArity = 3;
G__8779.cljs$lang$applyTo = (function (arglist__8780){
var a = cljs.core.first(arglist__8780);
var b = cljs.core.first(cljs.core.next(arglist__8780));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8780)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8780)));
return G__8779__delegate.call(this, a, b, c, ds);
});
return G__8779;
})()
;
G__8774 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8774__8775.call(this,a,b);
case  3 :
return G__8774__8776.call(this,a,b,c);
default:
return G__8774__8777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8774.cljs$lang$maxFixedArity = 3;
G__8774.cljs$lang$applyTo = G__8774__8777.cljs$lang$applyTo;
return G__8774;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__8755.call(this,f,x);
case  3 :
return fnil__8756.call(this,f,x,y);
case  4 :
return fnil__8757.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__8783 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8781 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____8781))
{var s__8782 = temp__3974__auto____8781;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8782)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8782)));
} else
{return null;
}
})));
});

return mapi__8783.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8784 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____8784))
{var s__8785 = temp__3974__auto____8784;

var x__8786 = f.call(null,cljs.core.first.call(null,s__8785));

if(cljs.core.truth_((x__8786 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__8785));
} else
{return cljs.core.cons.call(null,x__8786,keep.call(null,f,cljs.core.rest.call(null,s__8785)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8796 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8793 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____8793))
{var s__8794 = temp__3974__auto____8793;

var x__8795 = f.call(null,idx,cljs.core.first.call(null,s__8794));

if(cljs.core.truth_((x__8795 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8794));
} else
{return cljs.core.cons.call(null,x__8795,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8794)));
}
} else
{return null;
}
})));
});

return keepi__8796.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__8841 = (function (p){
return (function() {
var ep1 = null;
var ep1__8846 = (function (){
return true;
});
var ep1__8847 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__8848 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8803 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____8803))
{return p.call(null,y);
} else
{return and__3822__auto____8803;
}
})());
});
var ep1__8849 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8804 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____8804))
{var and__3822__auto____8805 = p.call(null,y);

if(cljs.core.truth_(and__3822__auto____8805))
{return p.call(null,z);
} else
{return and__3822__auto____8805;
}
} else
{return and__3822__auto____8804;
}
})());
});
var ep1__8850 = (function() { 
var G__8852__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8806 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____8806))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8806;
}
})());
};
var G__8852 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8852__delegate.call(this, x, y, z, args);
};
G__8852.cljs$lang$maxFixedArity = 3;
G__8852.cljs$lang$applyTo = (function (arglist__8853){
var x = cljs.core.first(arglist__8853);
var y = cljs.core.first(cljs.core.next(arglist__8853));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8853)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8853)));
return G__8852__delegate.call(this, x, y, z, args);
});
return G__8852;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__8846.call(this);
case  1 :
return ep1__8847.call(this,x);
case  2 :
return ep1__8848.call(this,x,y);
case  3 :
return ep1__8849.call(this,x,y,z);
default:
return ep1__8850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__8850.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__8842 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__8854 = (function (){
return true;
});
var ep2__8855 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8807 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____8807))
{return p2.call(null,x);
} else
{return and__3822__auto____8807;
}
})());
});
var ep2__8856 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8808 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____8808))
{var and__3822__auto____8809 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____8809))
{var and__3822__auto____8810 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____8810))
{return p2.call(null,y);
} else
{return and__3822__auto____8810;
}
} else
{return and__3822__auto____8809;
}
} else
{return and__3822__auto____8808;
}
})());
});
var ep2__8857 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8811 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____8811))
{var and__3822__auto____8812 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____8812))
{var and__3822__auto____8813 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____8813))
{var and__3822__auto____8814 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____8814))
{var and__3822__auto____8815 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____8815))
{return p2.call(null,z);
} else
{return and__3822__auto____8815;
}
} else
{return and__3822__auto____8814;
}
} else
{return and__3822__auto____8813;
}
} else
{return and__3822__auto____8812;
}
} else
{return and__3822__auto____8811;
}
})());
});
var ep2__8858 = (function() { 
var G__8860__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8816 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____8816))
{return cljs.core.every_QMARK_.call(null,(function (p1__8787_SHARP_){
var and__3822__auto____8817 = p1.call(null,p1__8787_SHARP_);

if(cljs.core.truth_(and__3822__auto____8817))
{return p2.call(null,p1__8787_SHARP_);
} else
{return and__3822__auto____8817;
}
}),args);
} else
{return and__3822__auto____8816;
}
})());
};
var G__8860 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8860__delegate.call(this, x, y, z, args);
};
G__8860.cljs$lang$maxFixedArity = 3;
G__8860.cljs$lang$applyTo = (function (arglist__8861){
var x = cljs.core.first(arglist__8861);
var y = cljs.core.first(cljs.core.next(arglist__8861));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8861)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8861)));
return G__8860__delegate.call(this, x, y, z, args);
});
return G__8860;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__8854.call(this);
case  1 :
return ep2__8855.call(this,x);
case  2 :
return ep2__8856.call(this,x,y);
case  3 :
return ep2__8857.call(this,x,y,z);
default:
return ep2__8858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__8858.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__8843 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__8862 = (function (){
return true;
});
var ep3__8863 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8818 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____8818))
{var and__3822__auto____8819 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____8819))
{return p3.call(null,x);
} else
{return and__3822__auto____8819;
}
} else
{return and__3822__auto____8818;
}
})());
});
var ep3__8864 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8820 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____8820))
{var and__3822__auto____8821 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____8821))
{var and__3822__auto____8822 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____8822))
{var and__3822__auto____8823 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____8823))
{var and__3822__auto____8824 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____8824))
{return p3.call(null,y);
} else
{return and__3822__auto____8824;
}
} else
{return and__3822__auto____8823;
}
} else
{return and__3822__auto____8822;
}
} else
{return and__3822__auto____8821;
}
} else
{return and__3822__auto____8820;
}
})());
});
var ep3__8865 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8825 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____8825))
{var and__3822__auto____8826 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____8826))
{var and__3822__auto____8827 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____8827))
{var and__3822__auto____8828 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____8828))
{var and__3822__auto____8829 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____8829))
{var and__3822__auto____8830 = p3.call(null,y);

if(cljs.core.truth_(and__3822__auto____8830))
{var and__3822__auto____8831 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____8831))
{var and__3822__auto____8832 = p2.call(null,z);

if(cljs.core.truth_(and__3822__auto____8832))
{return p3.call(null,z);
} else
{return and__3822__auto____8832;
}
} else
{return and__3822__auto____8831;
}
} else
{return and__3822__auto____8830;
}
} else
{return and__3822__auto____8829;
}
} else
{return and__3822__auto____8828;
}
} else
{return and__3822__auto____8827;
}
} else
{return and__3822__auto____8826;
}
} else
{return and__3822__auto____8825;
}
})());
});
var ep3__8866 = (function() { 
var G__8868__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8833 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____8833))
{return cljs.core.every_QMARK_.call(null,(function (p1__8788_SHARP_){
var and__3822__auto____8834 = p1.call(null,p1__8788_SHARP_);

if(cljs.core.truth_(and__3822__auto____8834))
{var and__3822__auto____8835 = p2.call(null,p1__8788_SHARP_);

if(cljs.core.truth_(and__3822__auto____8835))
{return p3.call(null,p1__8788_SHARP_);
} else
{return and__3822__auto____8835;
}
} else
{return and__3822__auto____8834;
}
}),args);
} else
{return and__3822__auto____8833;
}
})());
};
var G__8868 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8868__delegate.call(this, x, y, z, args);
};
G__8868.cljs$lang$maxFixedArity = 3;
G__8868.cljs$lang$applyTo = (function (arglist__8869){
var x = cljs.core.first(arglist__8869);
var y = cljs.core.first(cljs.core.next(arglist__8869));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8869)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8869)));
return G__8868__delegate.call(this, x, y, z, args);
});
return G__8868;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__8862.call(this);
case  1 :
return ep3__8863.call(this,x);
case  2 :
return ep3__8864.call(this,x,y);
case  3 :
return ep3__8865.call(this,x,y,z);
default:
return ep3__8866.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__8866.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__8844 = (function() { 
var G__8870__delegate = function (p1,p2,p3,ps){
var ps__8836 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__8871 = (function (){
return true;
});
var epn__8872 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8789_SHARP_){
return p1__8789_SHARP_.call(null,x);
}),ps__8836);
});
var epn__8873 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8790_SHARP_){
var and__3822__auto____8837 = p1__8790_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____8837))
{return p1__8790_SHARP_.call(null,y);
} else
{return and__3822__auto____8837;
}
}),ps__8836);
});
var epn__8874 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8791_SHARP_){
var and__3822__auto____8838 = p1__8791_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____8838))
{var and__3822__auto____8839 = p1__8791_SHARP_.call(null,y);

if(cljs.core.truth_(and__3822__auto____8839))
{return p1__8791_SHARP_.call(null,z);
} else
{return and__3822__auto____8839;
}
} else
{return and__3822__auto____8838;
}
}),ps__8836);
});
var epn__8875 = (function() { 
var G__8877__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8840 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____8840))
{return cljs.core.every_QMARK_.call(null,(function (p1__8792_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8792_SHARP_,args);
}),ps__8836);
} else
{return and__3822__auto____8840;
}
})());
};
var G__8877 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8877__delegate.call(this, x, y, z, args);
};
G__8877.cljs$lang$maxFixedArity = 3;
G__8877.cljs$lang$applyTo = (function (arglist__8878){
var x = cljs.core.first(arglist__8878);
var y = cljs.core.first(cljs.core.next(arglist__8878));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8878)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8878)));
return G__8877__delegate.call(this, x, y, z, args);
});
return G__8877;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__8871.call(this);
case  1 :
return epn__8872.call(this,x);
case  2 :
return epn__8873.call(this,x,y);
case  3 :
return epn__8874.call(this,x,y,z);
default:
return epn__8875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__8875.cljs$lang$applyTo;
return epn;
})()
};
var G__8870 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8870__delegate.call(this, p1, p2, p3, ps);
};
G__8870.cljs$lang$maxFixedArity = 3;
G__8870.cljs$lang$applyTo = (function (arglist__8879){
var p1 = cljs.core.first(arglist__8879);
var p2 = cljs.core.first(cljs.core.next(arglist__8879));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8879)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8879)));
return G__8870__delegate.call(this, p1, p2, p3, ps);
});
return G__8870;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__8841.call(this,p1);
case  2 :
return every_pred__8842.call(this,p1,p2);
case  3 :
return every_pred__8843.call(this,p1,p2,p3);
default:
return every_pred__8844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__8844.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__8919 = (function (p){
return (function() {
var sp1 = null;
var sp1__8924 = (function (){
return null;
});
var sp1__8925 = (function (x){
return p.call(null,x);
});
var sp1__8926 = (function (x,y){
var or__3824__auto____8881 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____8881))
{return or__3824__auto____8881;
} else
{return p.call(null,y);
}
});
var sp1__8927 = (function (x,y,z){
var or__3824__auto____8882 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____8882))
{return or__3824__auto____8882;
} else
{var or__3824__auto____8883 = p.call(null,y);

if(cljs.core.truth_(or__3824__auto____8883))
{return or__3824__auto____8883;
} else
{return p.call(null,z);
}
}
});
var sp1__8928 = (function() { 
var G__8930__delegate = function (x,y,z,args){
var or__3824__auto____8884 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____8884))
{return or__3824__auto____8884;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8930 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8930__delegate.call(this, x, y, z, args);
};
G__8930.cljs$lang$maxFixedArity = 3;
G__8930.cljs$lang$applyTo = (function (arglist__8931){
var x = cljs.core.first(arglist__8931);
var y = cljs.core.first(cljs.core.next(arglist__8931));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8931)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8931)));
return G__8930__delegate.call(this, x, y, z, args);
});
return G__8930;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__8924.call(this);
case  1 :
return sp1__8925.call(this,x);
case  2 :
return sp1__8926.call(this,x,y);
case  3 :
return sp1__8927.call(this,x,y,z);
default:
return sp1__8928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__8928.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__8920 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__8932 = (function (){
return null;
});
var sp2__8933 = (function (x){
var or__3824__auto____8885 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____8885))
{return or__3824__auto____8885;
} else
{return p2.call(null,x);
}
});
var sp2__8934 = (function (x,y){
var or__3824__auto____8886 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____8886))
{return or__3824__auto____8886;
} else
{var or__3824__auto____8887 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____8887))
{return or__3824__auto____8887;
} else
{var or__3824__auto____8888 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____8888))
{return or__3824__auto____8888;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__8935 = (function (x,y,z){
var or__3824__auto____8889 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____8889))
{return or__3824__auto____8889;
} else
{var or__3824__auto____8890 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____8890))
{return or__3824__auto____8890;
} else
{var or__3824__auto____8891 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____8891))
{return or__3824__auto____8891;
} else
{var or__3824__auto____8892 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____8892))
{return or__3824__auto____8892;
} else
{var or__3824__auto____8893 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____8893))
{return or__3824__auto____8893;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__8936 = (function() { 
var G__8938__delegate = function (x,y,z,args){
var or__3824__auto____8894 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____8894))
{return or__3824__auto____8894;
} else
{return cljs.core.some.call(null,(function (p1__8797_SHARP_){
var or__3824__auto____8895 = p1.call(null,p1__8797_SHARP_);

if(cljs.core.truth_(or__3824__auto____8895))
{return or__3824__auto____8895;
} else
{return p2.call(null,p1__8797_SHARP_);
}
}),args);
}
};
var G__8938 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8938__delegate.call(this, x, y, z, args);
};
G__8938.cljs$lang$maxFixedArity = 3;
G__8938.cljs$lang$applyTo = (function (arglist__8939){
var x = cljs.core.first(arglist__8939);
var y = cljs.core.first(cljs.core.next(arglist__8939));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8939)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8939)));
return G__8938__delegate.call(this, x, y, z, args);
});
return G__8938;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__8932.call(this);
case  1 :
return sp2__8933.call(this,x);
case  2 :
return sp2__8934.call(this,x,y);
case  3 :
return sp2__8935.call(this,x,y,z);
default:
return sp2__8936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__8936.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__8921 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__8940 = (function (){
return null;
});
var sp3__8941 = (function (x){
var or__3824__auto____8896 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____8896))
{return or__3824__auto____8896;
} else
{var or__3824__auto____8897 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____8897))
{return or__3824__auto____8897;
} else
{return p3.call(null,x);
}
}
});
var sp3__8942 = (function (x,y){
var or__3824__auto____8898 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____8898))
{return or__3824__auto____8898;
} else
{var or__3824__auto____8899 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____8899))
{return or__3824__auto____8899;
} else
{var or__3824__auto____8900 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____8900))
{return or__3824__auto____8900;
} else
{var or__3824__auto____8901 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____8901))
{return or__3824__auto____8901;
} else
{var or__3824__auto____8902 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____8902))
{return or__3824__auto____8902;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__8943 = (function (x,y,z){
var or__3824__auto____8903 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____8903))
{return or__3824__auto____8903;
} else
{var or__3824__auto____8904 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____8904))
{return or__3824__auto____8904;
} else
{var or__3824__auto____8905 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____8905))
{return or__3824__auto____8905;
} else
{var or__3824__auto____8906 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____8906))
{return or__3824__auto____8906;
} else
{var or__3824__auto____8907 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____8907))
{return or__3824__auto____8907;
} else
{var or__3824__auto____8908 = p3.call(null,y);

if(cljs.core.truth_(or__3824__auto____8908))
{return or__3824__auto____8908;
} else
{var or__3824__auto____8909 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____8909))
{return or__3824__auto____8909;
} else
{var or__3824__auto____8910 = p2.call(null,z);

if(cljs.core.truth_(or__3824__auto____8910))
{return or__3824__auto____8910;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__8944 = (function() { 
var G__8946__delegate = function (x,y,z,args){
var or__3824__auto____8911 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____8911))
{return or__3824__auto____8911;
} else
{return cljs.core.some.call(null,(function (p1__8798_SHARP_){
var or__3824__auto____8912 = p1.call(null,p1__8798_SHARP_);

if(cljs.core.truth_(or__3824__auto____8912))
{return or__3824__auto____8912;
} else
{var or__3824__auto____8913 = p2.call(null,p1__8798_SHARP_);

if(cljs.core.truth_(or__3824__auto____8913))
{return or__3824__auto____8913;
} else
{return p3.call(null,p1__8798_SHARP_);
}
}
}),args);
}
};
var G__8946 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8946__delegate.call(this, x, y, z, args);
};
G__8946.cljs$lang$maxFixedArity = 3;
G__8946.cljs$lang$applyTo = (function (arglist__8947){
var x = cljs.core.first(arglist__8947);
var y = cljs.core.first(cljs.core.next(arglist__8947));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8947)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8947)));
return G__8946__delegate.call(this, x, y, z, args);
});
return G__8946;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__8940.call(this);
case  1 :
return sp3__8941.call(this,x);
case  2 :
return sp3__8942.call(this,x,y);
case  3 :
return sp3__8943.call(this,x,y,z);
default:
return sp3__8944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__8944.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__8922 = (function() { 
var G__8948__delegate = function (p1,p2,p3,ps){
var ps__8914 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__8949 = (function (){
return null;
});
var spn__8950 = (function (x){
return cljs.core.some.call(null,(function (p1__8799_SHARP_){
return p1__8799_SHARP_.call(null,x);
}),ps__8914);
});
var spn__8951 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8800_SHARP_){
var or__3824__auto____8915 = p1__8800_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____8915))
{return or__3824__auto____8915;
} else
{return p1__8800_SHARP_.call(null,y);
}
}),ps__8914);
});
var spn__8952 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8801_SHARP_){
var or__3824__auto____8916 = p1__8801_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____8916))
{return or__3824__auto____8916;
} else
{var or__3824__auto____8917 = p1__8801_SHARP_.call(null,y);

if(cljs.core.truth_(or__3824__auto____8917))
{return or__3824__auto____8917;
} else
{return p1__8801_SHARP_.call(null,z);
}
}
}),ps__8914);
});
var spn__8953 = (function() { 
var G__8955__delegate = function (x,y,z,args){
var or__3824__auto____8918 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____8918))
{return or__3824__auto____8918;
} else
{return cljs.core.some.call(null,(function (p1__8802_SHARP_){
return cljs.core.some.call(null,p1__8802_SHARP_,args);
}),ps__8914);
}
};
var G__8955 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8955__delegate.call(this, x, y, z, args);
};
G__8955.cljs$lang$maxFixedArity = 3;
G__8955.cljs$lang$applyTo = (function (arglist__8956){
var x = cljs.core.first(arglist__8956);
var y = cljs.core.first(cljs.core.next(arglist__8956));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8956)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8956)));
return G__8955__delegate.call(this, x, y, z, args);
});
return G__8955;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__8949.call(this);
case  1 :
return spn__8950.call(this,x);
case  2 :
return spn__8951.call(this,x,y);
case  3 :
return spn__8952.call(this,x,y,z);
default:
return spn__8953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__8953.cljs$lang$applyTo;
return spn;
})()
};
var G__8948 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8948__delegate.call(this, p1, p2, p3, ps);
};
G__8948.cljs$lang$maxFixedArity = 3;
G__8948.cljs$lang$applyTo = (function (arglist__8957){
var p1 = cljs.core.first(arglist__8957);
var p2 = cljs.core.first(cljs.core.next(arglist__8957));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8957)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8957)));
return G__8948__delegate.call(this, p1, p2, p3, ps);
});
return G__8948;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__8919.call(this,p1);
case  2 :
return some_fn__8920.call(this,p1,p2);
case  3 :
return some_fn__8921.call(this,p1,p2,p3);
default:
return some_fn__8922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__8922.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__8970 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8958 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____8958))
{var s__8959 = temp__3974__auto____8958;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8959)),map.call(null,f,cljs.core.rest.call(null,s__8959)));
} else
{return null;
}
})));
});
var map__8971 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8960 = cljs.core.seq.call(null,c1);
var s2__8961 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____8962 = s1__8960;

if(cljs.core.truth_(and__3822__auto____8962))
{return s2__8961;
} else
{return and__3822__auto____8962;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8960),cljs.core.first.call(null,s2__8961)),map.call(null,f,cljs.core.rest.call(null,s1__8960),cljs.core.rest.call(null,s2__8961)));
} else
{return null;
}
})));
});
var map__8972 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8963 = cljs.core.seq.call(null,c1);
var s2__8964 = cljs.core.seq.call(null,c2);
var s3__8965 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3822__auto____8966 = s1__8963;

if(cljs.core.truth_(and__3822__auto____8966))
{var and__3822__auto____8967 = s2__8964;

if(cljs.core.truth_(and__3822__auto____8967))
{return s3__8965;
} else
{return and__3822__auto____8967;
}
} else
{return and__3822__auto____8966;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8963),cljs.core.first.call(null,s2__8964),cljs.core.first.call(null,s3__8965)),map.call(null,f,cljs.core.rest.call(null,s1__8963),cljs.core.rest.call(null,s2__8964),cljs.core.rest.call(null,s3__8965)));
} else
{return null;
}
})));
});
var map__8973 = (function() { 
var G__8975__delegate = function (f,c1,c2,c3,colls){
var step__8969 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8968 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8968)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8968),step.call(null,map.call(null,cljs.core.rest,ss__8968)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__8880_SHARP_){
return cljs.core.apply.call(null,f,p1__8880_SHARP_);
}),step__8969.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8975 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8975__delegate.call(this, f, c1, c2, c3, colls);
};
G__8975.cljs$lang$maxFixedArity = 4;
G__8975.cljs$lang$applyTo = (function (arglist__8976){
var f = cljs.core.first(arglist__8976);
var c1 = cljs.core.first(cljs.core.next(arglist__8976));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8976)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8976))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8976))));
return G__8975__delegate.call(this, f, c1, c2, c3, colls);
});
return G__8975;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__8970.call(this,f,c1);
case  3 :
return map__8971.call(this,f,c1,c2);
case  4 :
return map__8972.call(this,f,c1,c2,c3);
default:
return map__8973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__8973.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3974__auto____8977 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____8977))
{var s__8978 = temp__3974__auto____8977;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__8978),take.call(null,(n - 1),cljs.core.rest.call(null,s__8978)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8981 = (function (n,coll){
while(true){
var s__8979 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____8980 = (n > 0);

if(cljs.core.truth_(and__3822__auto____8980))
{return s__8979;
} else
{return and__3822__auto____8980;
}
})()))
{{
var G__8982 = (n - 1);
var G__8983 = cljs.core.rest.call(null,s__8979);
n = G__8982;
coll = G__8983;
continue;
}
} else
{return s__8979;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8981.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__8984 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__8985 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__8984.call(this,n);
case  2 :
return drop_last__8985.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8987 = cljs.core.seq.call(null,coll);
var lead__8988 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__8988))
{{
var G__8989 = cljs.core.next.call(null,s__8987);
var G__8990 = cljs.core.next.call(null,lead__8988);
s__8987 = G__8989;
lead__8988 = G__8990;
continue;
}
} else
{return s__8987;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8993 = (function (pred,coll){
while(true){
var s__8991 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____8992 = s__8991;

if(cljs.core.truth_(and__3822__auto____8992))
{return pred.call(null,cljs.core.first.call(null,s__8991));
} else
{return and__3822__auto____8992;
}
})()))
{{
var G__8994 = pred;
var G__8995 = cljs.core.rest.call(null,s__8991);
pred = G__8994;
coll = G__8995;
continue;
}
} else
{return s__8991;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__8993.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8996 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____8996))
{var s__8997 = temp__3974__auto____8996;

return cljs.core.concat.call(null,s__8997,cycle.call(null,s__8997));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__8998 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__8999 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__8998.call(this,n);
case  2 :
return repeat__8999.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__9001 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__9002 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__9001.call(this,n);
case  2 :
return repeatedly__9002.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__9008 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9004 = cljs.core.seq.call(null,c1);
var s2__9005 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____9006 = s1__9004;

if(cljs.core.truth_(and__3822__auto____9006))
{return s2__9005;
} else
{return and__3822__auto____9006;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__9004),cljs.core.cons.call(null,cljs.core.first.call(null,s2__9005),interleave.call(null,cljs.core.rest.call(null,s1__9004),cljs.core.rest.call(null,s2__9005))));
} else
{return null;
}
})));
});
var interleave__9009 = (function() { 
var G__9011__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9007 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9007)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__9007),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__9007)));
} else
{return null;
}
})));
};
var G__9011 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9011__delegate.call(this, c1, c2, colls);
};
G__9011.cljs$lang$maxFixedArity = 2;
G__9011.cljs$lang$applyTo = (function (arglist__9012){
var c1 = cljs.core.first(arglist__9012);
var c2 = cljs.core.first(cljs.core.next(arglist__9012));
var colls = cljs.core.rest(cljs.core.next(arglist__9012));
return G__9011__delegate.call(this, c1, c2, colls);
});
return G__9011;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__9008.call(this,c1,c2);
default:
return interleave__9009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__9009.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__9015 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9013 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____9013))
{var coll__9014 = temp__3971__auto____9013;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__9014),cat.call(null,cljs.core.rest.call(null,coll__9014),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__9015.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__9016 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__9017 = (function() { 
var G__9019__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__9019 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9019__delegate.call(this, f, coll, colls);
};
G__9019.cljs$lang$maxFixedArity = 2;
G__9019.cljs$lang$applyTo = (function (arglist__9020){
var f = cljs.core.first(arglist__9020);
var coll = cljs.core.first(cljs.core.next(arglist__9020));
var colls = cljs.core.rest(cljs.core.next(arglist__9020));
return G__9019__delegate.call(this, f, coll, colls);
});
return G__9019;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__9016.call(this,f,coll);
default:
return mapcat__9017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__9017.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9021 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____9021))
{var s__9022 = temp__3974__auto____9021;

var f__9023 = cljs.core.first.call(null,s__9022);
var r__9024 = cljs.core.rest.call(null,s__9022);

if(cljs.core.truth_(pred.call(null,f__9023)))
{return cljs.core.cons.call(null,f__9023,filter.call(null,pred,r__9024));
} else
{return filter.call(null,pred,r__9024);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__9026 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__9026.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__9025_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__9025_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__9033 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__9034 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9027 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____9027))
{var s__9028 = temp__3974__auto____9027;

var p__9029 = cljs.core.take.call(null,n,s__9028);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__9029))))
{return cljs.core.cons.call(null,p__9029,partition.call(null,n,step,cljs.core.drop.call(null,step,s__9028)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__9035 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9030 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____9030))
{var s__9031 = temp__3974__auto____9030;

var p__9032 = cljs.core.take.call(null,n,s__9031);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__9032))))
{return cljs.core.cons.call(null,p__9032,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__9031)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__9032,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__9033.call(this,n,step);
case  3 :
return partition__9034.call(this,n,step,pad);
case  4 :
return partition__9035.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__9041 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__9042 = (function (m,ks,not_found){
var sentinel__9037 = cljs.core.lookup_sentinel;
var m__9038 = m;
var ks__9039 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__9039))
{var m__9040 = cljs.core.get.call(null,m__9038,cljs.core.first.call(null,ks__9039),sentinel__9037);

if(cljs.core.truth_((sentinel__9037 === m__9040)))
{return not_found;
} else
{{
var G__9044 = sentinel__9037;
var G__9045 = m__9040;
var G__9046 = cljs.core.next.call(null,ks__9039);
sentinel__9037 = G__9044;
m__9038 = G__9045;
ks__9039 = G__9046;
continue;
}
}
} else
{return m__9038;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__9041.call(this,m,ks);
case  3 :
return get_in__9042.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__9047,v){
var vec__9048__9049 = p__9047;
var k__9050 = cljs.core.nth.call(null,vec__9048__9049,0,null);
var ks__9051 = cljs.core.nthnext.call(null,vec__9048__9049,1);

if(cljs.core.truth_(ks__9051))
{return cljs.core.assoc.call(null,m,k__9050,assoc_in.call(null,cljs.core.get.call(null,m,k__9050),ks__9051,v));
} else
{return cljs.core.assoc.call(null,m,k__9050,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__9052,f,args){
var vec__9053__9054 = p__9052;
var k__9055 = cljs.core.nth.call(null,vec__9053__9054,0,null);
var ks__9056 = cljs.core.nthnext.call(null,vec__9053__9054,1);

if(cljs.core.truth_(ks__9056))
{return cljs.core.assoc.call(null,m,k__9055,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__9055),ks__9056,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9055,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__9055),args));
}
};
var update_in = function (m,p__9052,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9052, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9057){
var m = cljs.core.first(arglist__9057);
var p__9052 = cljs.core.first(cljs.core.next(arglist__9057));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9057)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9057)));
return update_in__delegate.call(this, m, p__9052, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9058 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9091 = null;
var G__9091__9092 = (function (coll,k){
var this__9059 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__9091__9093 = (function (coll,k,not_found){
var this__9060 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__9091 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9091__9092.call(this,coll,k);
case  3 :
return G__9091__9093.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9091;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9061 = this;
var new_array__9062 = cljs.core.aclone.call(null,this__9061.array);

(new_array__9062[k] = v);
return (new cljs.core.Vector(this__9061.meta,new_array__9062));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__9095 = null;
var G__9095__9096 = (function (tsym9063,k){
var this__9065 = this;
var tsym9063__9066 = this;

var coll__9067 = tsym9063__9066;

return cljs.core._lookup.call(null,coll__9067,k);
});
var G__9095__9097 = (function (tsym9064,k,not_found){
var this__9068 = this;
var tsym9064__9069 = this;

var coll__9070 = tsym9064__9069;

return cljs.core._lookup.call(null,coll__9070,k,not_found);
});
G__9095 = function(tsym9064,k,not_found){
switch(arguments.length){
case  2 :
return G__9095__9096.call(this,tsym9064,k);
case  3 :
return G__9095__9097.call(this,tsym9064,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9095;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9071 = this;
var new_array__9072 = cljs.core.aclone.call(null,this__9071.array);

new_array__9072.push(o);
return (new cljs.core.Vector(this__9071.meta,new_array__9072));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9099 = null;
var G__9099__9100 = (function (v,f){
var this__9073 = this;
return cljs.core.ci_reduce.call(null,this__9073.array,f);
});
var G__9099__9101 = (function (v,f,start){
var this__9074 = this;
return cljs.core.ci_reduce.call(null,this__9074.array,f,start);
});
G__9099 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__9099__9100.call(this,v,f);
case  3 :
return G__9099__9101.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9099;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9075 = this;
if(cljs.core.truth_((this__9075.array.length > 0)))
{var vector_seq__9076 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__9075.array.length)))
{return cljs.core.cons.call(null,(this__9075.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__9076.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9077 = this;
return this__9077.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9078 = this;
var count__9079 = this__9078.array.length;

if(cljs.core.truth_((count__9079 > 0)))
{return (this__9078.array[(count__9079 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9080 = this;
if(cljs.core.truth_((this__9080.array.length > 0)))
{var new_array__9081 = cljs.core.aclone.call(null,this__9080.array);

new_array__9081.pop();
return (new cljs.core.Vector(this__9080.meta,new_array__9081));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__9082 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9083 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9084 = this;
return (new cljs.core.Vector(meta,this__9084.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9085 = this;
return this__9085.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9103 = null;
var G__9103__9104 = (function (coll,n){
var this__9086 = this;
if(cljs.core.truth_((function (){var and__3822__auto____9087 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____9087))
{return (n < this__9086.array.length);
} else
{return and__3822__auto____9087;
}
})()))
{return (this__9086.array[n]);
} else
{return null;
}
});
var G__9103__9105 = (function (coll,n,not_found){
var this__9088 = this;
if(cljs.core.truth_((function (){var and__3822__auto____9089 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____9089))
{return (n < this__9088.array.length);
} else
{return and__3822__auto____9089;
}
})()))
{return (this__9088.array[n]);
} else
{return not_found;
}
});
G__9103 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9103__9104.call(this,coll,n);
case  3 :
return G__9103__9105.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9103;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9090 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9090.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__9107 = pv.cnt;

if(cljs.core.truth_((cnt__9107 < 32)))
{return 0;
} else
{return (((cnt__9107 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__9108 = level;
var ret__9109 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__9108)))
{return ret__9109;
} else
{var embed__9110 = ret__9109;
var r__9111 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___9112 = (r__9111[0] = embed__9110);

{
var G__9113 = (ll__9108 - 5);
var G__9114 = r__9111;
ll__9108 = G__9113;
ret__9109 = G__9114;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9115 = cljs.core.aclone.call(null,parent);
var subidx__9116 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__9115[subidx__9116] = tailnode);
return ret__9115;
} else
{var temp__3971__auto____9117 = (parent[subidx__9116]);

if(cljs.core.truth_(temp__3971__auto____9117))
{var child__9118 = temp__3971__auto____9117;

var node_to_insert__9119 = push_tail.call(null,pv,(level - 5),child__9118,tailnode);
var ___9120 = (ret__9115[subidx__9116] = node_to_insert__9119);

return ret__9115;
} else
{var node_to_insert__9121 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___9122 = (ret__9115[subidx__9116] = node_to_insert__9121);

return ret__9115;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3822__auto____9123 = (0 <= i);

if(cljs.core.truth_(and__3822__auto____9123))
{return (i < pv.cnt);
} else
{return and__3822__auto____9123;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__9124 = pv.root;
var level__9125 = pv.shift;

while(true){
if(cljs.core.truth_((level__9125 > 0)))
{{
var G__9126 = (node__9124[((i >> level__9125) & 31)]);
var G__9127 = (level__9125 - 5);
node__9124 = G__9126;
level__9125 = G__9127;
continue;
}
} else
{return node__9124;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9128 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__9128[(i & 31)] = val);
return ret__9128;
} else
{var subidx__9129 = ((i >> level) & 31);
var ___9130 = (ret__9128[subidx__9129] = do_assoc.call(null,pv,(level - 5),(node[subidx__9129]),i,val));

return ret__9128;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9131 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__9132 = pop_tail.call(null,pv,(level - 5),(node[subidx__9131]));

if(cljs.core.truth_((function (){var and__3822__auto____9133 = (new_child__9132 === null);

if(cljs.core.truth_(and__3822__auto____9133))
{return (subidx__9131 === 0);
} else
{return and__3822__auto____9133;
}
})()))
{return null;
} else
{var ret__9134 = cljs.core.aclone.call(null,node);
var ___9135 = (ret__9134[subidx__9131] = new_child__9132);

return ret__9134;
}
} else
{if(cljs.core.truth_((subidx__9131 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__9136 = cljs.core.aclone.call(null,node);
var ___9137 = (ret__9136[subidx__9131] = null);

return ret__9136;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
})
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9138 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9178 = null;
var G__9178__9179 = (function (coll,k){
var this__9139 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__9178__9180 = (function (coll,k,not_found){
var this__9140 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__9178 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9178__9179.call(this,coll,k);
case  3 :
return G__9178__9180.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9178;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9141 = this;
if(cljs.core.truth_((function (){var and__3822__auto____9142 = (0 <= k);

if(cljs.core.truth_(and__3822__auto____9142))
{return (k < this__9141.cnt);
} else
{return and__3822__auto____9142;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__9143 = cljs.core.aclone.call(null,this__9141.tail);

(new_tail__9143[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9141.meta,this__9141.cnt,this__9141.shift,this__9141.root,new_tail__9143));
} else
{return (new cljs.core.PersistentVector(this__9141.meta,this__9141.cnt,this__9141.shift,cljs.core.do_assoc.call(null,coll,this__9141.shift,this__9141.root,k,v),this__9141.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__9141.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__9141.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__9182 = null;
var G__9182__9183 = (function (tsym9144,k){
var this__9146 = this;
var tsym9144__9147 = this;

var coll__9148 = tsym9144__9147;

return cljs.core._lookup.call(null,coll__9148,k);
});
var G__9182__9184 = (function (tsym9145,k,not_found){
var this__9149 = this;
var tsym9145__9150 = this;

var coll__9151 = tsym9145__9150;

return cljs.core._lookup.call(null,coll__9151,k,not_found);
});
G__9182 = function(tsym9145,k,not_found){
switch(arguments.length){
case  2 :
return G__9182__9183.call(this,tsym9145,k);
case  3 :
return G__9182__9184.call(this,tsym9145,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9182;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9152 = this;
if(cljs.core.truth_(((this__9152.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__9153 = cljs.core.aclone.call(null,this__9152.tail);

new_tail__9153.push(o);
return (new cljs.core.PersistentVector(this__9152.meta,(this__9152.cnt + 1),this__9152.shift,this__9152.root,new_tail__9153));
} else
{var root_overflow_QMARK___9154 = ((this__9152.cnt >> 5) > (1 << this__9152.shift));
var new_shift__9155 = (cljs.core.truth_(root_overflow_QMARK___9154)?(this__9152.shift + 5):this__9152.shift);
var new_root__9157 = (cljs.core.truth_(root_overflow_QMARK___9154)?(function (){var n_r__9156 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__9156[0] = this__9152.root);
(n_r__9156[1] = cljs.core.new_path.call(null,this__9152.shift,this__9152.tail));
return n_r__9156;
})():cljs.core.push_tail.call(null,coll,this__9152.shift,this__9152.root,this__9152.tail));

return (new cljs.core.PersistentVector(this__9152.meta,(this__9152.cnt + 1),new_shift__9155,new_root__9157,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9186 = null;
var G__9186__9187 = (function (v,f){
var this__9158 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__9186__9188 = (function (v,f,start){
var this__9159 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__9186 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__9186__9187.call(this,v,f);
case  3 :
return G__9186__9188.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9186;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9160 = this;
if(cljs.core.truth_((this__9160.cnt > 0)))
{var vector_seq__9161 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__9160.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__9161.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9162 = this;
return this__9162.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9163 = this;
if(cljs.core.truth_((this__9163.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__9163.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9164 = this;
if(cljs.core.truth_((this__9164.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__9164.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9164.meta);
} else
{if(cljs.core.truth_((1 < (this__9164.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__9164.meta,(this__9164.cnt - 1),this__9164.shift,this__9164.root,cljs.core.aclone.call(null,this__9164.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__9165 = cljs.core.array_for.call(null,coll,(this__9164.cnt - 2));
var nr__9166 = cljs.core.pop_tail.call(null,this__9164.shift,this__9164.root);
var new_root__9167 = (cljs.core.truth_((nr__9166 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9166);
var cnt_1__9168 = (this__9164.cnt - 1);

if(cljs.core.truth_((function (){var and__3822__auto____9169 = (5 < this__9164.shift);

if(cljs.core.truth_(and__3822__auto____9169))
{return ((new_root__9167[1]) === null);
} else
{return and__3822__auto____9169;
}
})()))
{return (new cljs.core.PersistentVector(this__9164.meta,cnt_1__9168,(this__9164.shift - 5),(new_root__9167[0]),new_tail__9165));
} else
{return (new cljs.core.PersistentVector(this__9164.meta,cnt_1__9168,this__9164.shift,new_root__9167,new_tail__9165));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__9170 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9171 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9172 = this;
return (new cljs.core.PersistentVector(meta,this__9172.cnt,this__9172.shift,this__9172.root,this__9172.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9173 = this;
return this__9173.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9190 = null;
var G__9190__9191 = (function (coll,n){
var this__9174 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__9190__9192 = (function (coll,n,not_found){
var this__9175 = this;
if(cljs.core.truth_((function (){var and__3822__auto____9176 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____9176))
{return (n < this__9175.cnt);
} else
{return and__3822__auto____9176;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__9190 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9190__9191.call(this,coll,n);
case  3 :
return G__9190__9192.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9190;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9177 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9177.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = (new Array(32));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[]));
cljs.core.PersistentVector.fromArray = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__9194){
var args = cljs.core.seq( arglist__9194 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9195 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9223 = null;
var G__9223__9224 = (function (coll,k){
var this__9196 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__9223__9225 = (function (coll,k,not_found){
var this__9197 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__9223 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9223__9224.call(this,coll,k);
case  3 :
return G__9223__9225.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9223;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__9198 = this;
var v_pos__9199 = (this__9198.start + key);

return (new cljs.core.Subvec(this__9198.meta,cljs.core._assoc.call(null,this__9198.v,v_pos__9199,val),this__9198.start,((this__9198.end > (v_pos__9199 + 1)) ? this__9198.end : (v_pos__9199 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__9227 = null;
var G__9227__9228 = (function (tsym9200,k){
var this__9202 = this;
var tsym9200__9203 = this;

var coll__9204 = tsym9200__9203;

return cljs.core._lookup.call(null,coll__9204,k);
});
var G__9227__9229 = (function (tsym9201,k,not_found){
var this__9205 = this;
var tsym9201__9206 = this;

var coll__9207 = tsym9201__9206;

return cljs.core._lookup.call(null,coll__9207,k,not_found);
});
G__9227 = function(tsym9201,k,not_found){
switch(arguments.length){
case  2 :
return G__9227__9228.call(this,tsym9201,k);
case  3 :
return G__9227__9229.call(this,tsym9201,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9227;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9208 = this;
return (new cljs.core.Subvec(this__9208.meta,cljs.core._assoc_n.call(null,this__9208.v,this__9208.end,o),this__9208.start,(this__9208.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9231 = null;
var G__9231__9232 = (function (coll,f){
var this__9209 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__9231__9233 = (function (coll,f,start){
var this__9210 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__9231 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9231__9232.call(this,coll,f);
case  3 :
return G__9231__9233.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9231;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9211 = this;
var subvec_seq__9212 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__9211.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9211.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__9212.call(null,this__9211.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9213 = this;
return (this__9213.end - this__9213.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9214 = this;
return cljs.core._nth.call(null,this__9214.v,(this__9214.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9215 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__9215.start,this__9215.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9215.meta,this__9215.v,this__9215.start,(this__9215.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__9216 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9217 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9218 = this;
return (new cljs.core.Subvec(meta,this__9218.v,this__9218.start,this__9218.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9219 = this;
return this__9219.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9235 = null;
var G__9235__9236 = (function (coll,n){
var this__9220 = this;
return cljs.core._nth.call(null,this__9220.v,(this__9220.start + n));
});
var G__9235__9237 = (function (coll,n,not_found){
var this__9221 = this;
return cljs.core._nth.call(null,this__9221.v,(this__9221.start + n),not_found);
});
G__9235 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9235__9236.call(this,coll,n);
case  3 :
return G__9235__9237.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9235;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9222 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9222.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__9239 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__9240 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__9239.call(this,v,start);
case  3 :
return subvec__9240.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9242 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9243 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9244 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9245 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9245.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9246 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9247 = this;
return cljs.core._first.call(null,this__9247.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9248 = this;
var temp__3971__auto____9249 = cljs.core.next.call(null,this__9248.front);

if(cljs.core.truth_(temp__3971__auto____9249))
{var f1__9250 = temp__3971__auto____9249;

return (new cljs.core.PersistentQueueSeq(this__9248.meta,f1__9250,this__9248.rear));
} else
{if(cljs.core.truth_((this__9248.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9248.meta,this__9248.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9251 = this;
return this__9251.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9252 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9252.front,this__9252.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9253 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9254 = this;
if(cljs.core.truth_(this__9254.front))
{return (new cljs.core.PersistentQueue(this__9254.meta,(this__9254.count + 1),this__9254.front,cljs.core.conj.call(null,(function (){var or__3824__auto____9255 = this__9254.rear;

if(cljs.core.truth_(or__3824__auto____9255))
{return or__3824__auto____9255;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__9254.meta,(this__9254.count + 1),cljs.core.conj.call(null,this__9254.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9256 = this;
var rear__9257 = cljs.core.seq.call(null,this__9256.rear);

if(cljs.core.truth_((function (){var or__3824__auto____9258 = this__9256.front;

if(cljs.core.truth_(or__3824__auto____9258))
{return or__3824__auto____9258;
} else
{return rear__9257;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9256.front,cljs.core.seq.call(null,rear__9257)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9259 = this;
return this__9259.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9260 = this;
return cljs.core._first.call(null,this__9260.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9261 = this;
if(cljs.core.truth_(this__9261.front))
{var temp__3971__auto____9262 = cljs.core.next.call(null,this__9261.front);

if(cljs.core.truth_(temp__3971__auto____9262))
{var f1__9263 = temp__3971__auto____9262;

return (new cljs.core.PersistentQueue(this__9261.meta,(this__9261.count - 1),f1__9263,this__9261.rear));
} else
{return (new cljs.core.PersistentQueue(this__9261.meta,(this__9261.count - 1),cljs.core.seq.call(null,this__9261.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9264 = this;
return cljs.core.first.call(null,this__9264.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9265 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9266 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9267 = this;
return (new cljs.core.PersistentQueue(meta,this__9267.count,this__9267.front,this__9267.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9268 = this;
return this__9268.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9269 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__9270 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__9271 = array.length;

var i__9272 = 0;

while(true){
if(cljs.core.truth_((i__9272 < len__9271)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__9272]))))
{return i__9272;
} else
{{
var G__9273 = (i__9272 + incr);
i__9272 = G__9273;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___9275 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___9276 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3822__auto____9274 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____9274))
{return strobj.hasOwnProperty(k);
} else
{return and__3822__auto____9274;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___9275.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___9276.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__9279 = cljs.core.hash.call(null,a);
var b__9280 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__9279 < b__9280)))
{return -1;
} else
{if(cljs.core.truth_((a__9279 > b__9280)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9281 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9308 = null;
var G__9308__9309 = (function (coll,k){
var this__9282 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__9308__9310 = (function (coll,k,not_found){
var this__9283 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__9283.strobj,(this__9283.strobj[k]),not_found);
});
G__9308 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9308__9309.call(this,coll,k);
case  3 :
return G__9308__9310.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9308;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9284 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__9285 = goog.object.clone.call(null,this__9284.strobj);
var overwrite_QMARK___9286 = new_strobj__9285.hasOwnProperty(k);

(new_strobj__9285[k] = v);
if(cljs.core.truth_(overwrite_QMARK___9286))
{return (new cljs.core.ObjMap(this__9284.meta,this__9284.keys,new_strobj__9285));
} else
{var new_keys__9287 = cljs.core.aclone.call(null,this__9284.keys);

new_keys__9287.push(k);
return (new cljs.core.ObjMap(this__9284.meta,new_keys__9287,new_strobj__9285));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__9284.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__9288 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__9288.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__9312 = null;
var G__9312__9313 = (function (tsym9289,k){
var this__9291 = this;
var tsym9289__9292 = this;

var coll__9293 = tsym9289__9292;

return cljs.core._lookup.call(null,coll__9293,k);
});
var G__9312__9314 = (function (tsym9290,k,not_found){
var this__9294 = this;
var tsym9290__9295 = this;

var coll__9296 = tsym9290__9295;

return cljs.core._lookup.call(null,coll__9296,k,not_found);
});
G__9312 = function(tsym9290,k,not_found){
switch(arguments.length){
case  2 :
return G__9312__9313.call(this,tsym9290,k);
case  3 :
return G__9312__9314.call(this,tsym9290,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9312;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__9297 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9298 = this;
if(cljs.core.truth_((this__9298.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__9278_SHARP_){
return cljs.core.vector.call(null,p1__9278_SHARP_,(this__9298.strobj[p1__9278_SHARP_]));
}),this__9298.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9299 = this;
return this__9299.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9300 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9301 = this;
return (new cljs.core.ObjMap(meta,this__9301.keys,this__9301.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9302 = this;
return this__9302.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9303 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__9303.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__9304 = this;
if(cljs.core.truth_((function (){var and__3822__auto____9305 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____9305))
{return this__9304.strobj.hasOwnProperty(k);
} else
{return and__3822__auto____9305;
}
})()))
{var new_keys__9306 = cljs.core.aclone.call(null,this__9304.keys);
var new_strobj__9307 = goog.object.clone.call(null,this__9304.strobj);

new_keys__9306.splice(cljs.core.scan_array.call(null,1,k,new_keys__9306),1);
cljs.core.js_delete.call(null,new_strobj__9307,k);
return (new cljs.core.ObjMap(this__9304.meta,new_keys__9306,new_strobj__9307));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9317 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9355 = null;
var G__9355__9356 = (function (coll,k){
var this__9318 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__9355__9357 = (function (coll,k,not_found){
var this__9319 = this;
var bucket__9320 = (this__9319.hashobj[cljs.core.hash.call(null,k)]);
var i__9321 = (cljs.core.truth_(bucket__9320)?cljs.core.scan_array.call(null,2,k,bucket__9320):null);

if(cljs.core.truth_(i__9321))
{return (bucket__9320[(i__9321 + 1)]);
} else
{return not_found;
}
});
G__9355 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__9355__9356.call(this,coll,k);
case  3 :
return G__9355__9357.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9355;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__9322 = this;
var h__9323 = cljs.core.hash.call(null,k);
var bucket__9324 = (this__9322.hashobj[h__9323]);

if(cljs.core.truth_(bucket__9324))
{var new_bucket__9325 = cljs.core.aclone.call(null,bucket__9324);
var new_hashobj__9326 = goog.object.clone.call(null,this__9322.hashobj);

(new_hashobj__9326[h__9323] = new_bucket__9325);
var temp__3971__auto____9327 = cljs.core.scan_array.call(null,2,k,new_bucket__9325);

if(cljs.core.truth_(temp__3971__auto____9327))
{var i__9328 = temp__3971__auto____9327;

(new_bucket__9325[(i__9328 + 1)] = v);
return (new cljs.core.HashMap(this__9322.meta,this__9322.count,new_hashobj__9326));
} else
{new_bucket__9325.push(k,v);
return (new cljs.core.HashMap(this__9322.meta,(this__9322.count + 1),new_hashobj__9326));
}
} else
{var new_hashobj__9329 = goog.object.clone.call(null,this__9322.hashobj);

(new_hashobj__9329[h__9323] = [k,v]);
return (new cljs.core.HashMap(this__9322.meta,(this__9322.count + 1),new_hashobj__9329));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__9330 = this;
var bucket__9331 = (this__9330.hashobj[cljs.core.hash.call(null,k)]);
var i__9332 = (cljs.core.truth_(bucket__9331)?cljs.core.scan_array.call(null,2,k,bucket__9331):null);

if(cljs.core.truth_(i__9332))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__9359 = null;
var G__9359__9360 = (function (tsym9333,k){
var this__9335 = this;
var tsym9333__9336 = this;

var coll__9337 = tsym9333__9336;

return cljs.core._lookup.call(null,coll__9337,k);
});
var G__9359__9361 = (function (tsym9334,k,not_found){
var this__9338 = this;
var tsym9334__9339 = this;

var coll__9340 = tsym9334__9339;

return cljs.core._lookup.call(null,coll__9340,k,not_found);
});
G__9359 = function(tsym9334,k,not_found){
switch(arguments.length){
case  2 :
return G__9359__9360.call(this,tsym9334,k);
case  3 :
return G__9359__9361.call(this,tsym9334,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9359;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__9341 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9342 = this;
if(cljs.core.truth_((this__9342.count > 0)))
{var hashes__9343 = cljs.core.js_keys.call(null,this__9342.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__9316_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__9342.hashobj[p1__9316_SHARP_])));
}),hashes__9343);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9344 = this;
return this__9344.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9345 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9346 = this;
return (new cljs.core.HashMap(meta,this__9346.count,this__9346.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9347 = this;
return this__9347.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9348 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__9348.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__9349 = this;
var h__9350 = cljs.core.hash.call(null,k);
var bucket__9351 = (this__9349.hashobj[h__9350]);
var i__9352 = (cljs.core.truth_(bucket__9351)?cljs.core.scan_array.call(null,2,k,bucket__9351):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__9352)))
{return coll;
} else
{var new_hashobj__9353 = goog.object.clone.call(null,this__9349.hashobj);

if(cljs.core.truth_((3 > bucket__9351.length)))
{cljs.core.js_delete.call(null,new_hashobj__9353,h__9350);
} else
{var new_bucket__9354 = cljs.core.aclone.call(null,bucket__9351);

new_bucket__9354.splice(i__9352,2);
(new_hashobj__9353[h__9350] = new_bucket__9354);
}
return (new cljs.core.HashMap(this__9349.meta,(this__9349.count - 1),new_hashobj__9353));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9363 = ks.length;

var i__9364 = 0;
var out__9365 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__9364 < len__9363)))
{{
var G__9366 = (i__9364 + 1);
var G__9367 = cljs.core.assoc.call(null,out__9365,(ks[i__9364]),(vs[i__9364]));
i__9364 = G__9366;
out__9365 = G__9367;
continue;
}
} else
{return out__9365;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__9368 = cljs.core.seq.call(null,keyvals);
var out__9369 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__9368))
{{
var G__9370 = cljs.core.nnext.call(null,in$__9368);
var G__9371 = cljs.core.assoc.call(null,out__9369,cljs.core.first.call(null,in$__9368),cljs.core.second.call(null,in$__9368));
in$__9368 = G__9370;
out__9369 = G__9371;
continue;
}
} else
{return out__9369;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9372){
var keyvals = cljs.core.seq( arglist__9372 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9373_SHARP_,p2__9374_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9375 = p1__9373_SHARP_;

if(cljs.core.truth_(or__3824__auto____9375))
{return or__3824__auto____9375;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__9374_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9376){
var maps = cljs.core.seq( arglist__9376 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9379 = (function (m,e){
var k__9377 = cljs.core.first.call(null,e);
var v__9378 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__9377)))
{return cljs.core.assoc.call(null,m,k__9377,f.call(null,cljs.core.get.call(null,m,k__9377),v__9378));
} else
{return cljs.core.assoc.call(null,m,k__9377,v__9378);
}
});
var merge2__9381 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9379,(function (){var or__3824__auto____9380 = m1;

if(cljs.core.truth_(or__3824__auto____9380))
{return or__3824__auto____9380;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__9381,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9382){
var f = cljs.core.first(arglist__9382);
var maps = cljs.core.rest(arglist__9382);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9384 = cljs.core.ObjMap.fromObject([],{});
var keys__9385 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__9385))
{var key__9386 = cljs.core.first.call(null,keys__9385);
var entry__9387 = cljs.core.get.call(null,map,key__9386,"\uFDD0'ftms-clj.server/not-found");

{
var G__9388 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__9387,"\uFDD0'ftms-clj.server/not-found"))?cljs.core.assoc.call(null,ret__9384,key__9386,entry__9387):ret__9384);
var G__9389 = cljs.core.next.call(null,keys__9385);
ret__9384 = G__9388;
keys__9385 = G__9389;
continue;
}
} else
{return ret__9384;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9390 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__9411 = null;
var G__9411__9412 = (function (coll,v){
var this__9391 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__9411__9413 = (function (coll,v,not_found){
var this__9392 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9392.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__9411 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__9411__9412.call(this,coll,v);
case  3 :
return G__9411__9413.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9411;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__9415 = null;
var G__9415__9416 = (function (tsym9393,k){
var this__9395 = this;
var tsym9393__9396 = this;

var coll__9397 = tsym9393__9396;

return cljs.core._lookup.call(null,coll__9397,k);
});
var G__9415__9417 = (function (tsym9394,k,not_found){
var this__9398 = this;
var tsym9394__9399 = this;

var coll__9400 = tsym9394__9399;

return cljs.core._lookup.call(null,coll__9400,k,not_found);
});
G__9415 = function(tsym9394,k,not_found){
switch(arguments.length){
case  2 :
return G__9415__9416.call(this,tsym9394,k);
case  3 :
return G__9415__9417.call(this,tsym9394,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9415;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9401 = this;
return (new cljs.core.Set(this__9401.meta,cljs.core.assoc.call(null,this__9401.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9402 = this;
return cljs.core.keys.call(null,this__9402.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__9403 = this;
return (new cljs.core.Set(this__9403.meta,cljs.core.dissoc.call(null,this__9403.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9404 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9405 = this;
var and__3822__auto____9406 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3822__auto____9406))
{var and__3822__auto____9407 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3822__auto____9407))
{return cljs.core.every_QMARK_.call(null,(function (p1__9383_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9383_SHARP_);
}),other);
} else
{return and__3822__auto____9407;
}
} else
{return and__3822__auto____9406;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9408 = this;
return (new cljs.core.Set(meta,this__9408.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9409 = this;
return this__9409.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9410 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__9410.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__9420 = cljs.core.seq.call(null,coll);
var out__9421 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__9420))))
{{
var G__9422 = cljs.core.rest.call(null,in$__9420);
var G__9423 = cljs.core.conj.call(null,out__9421,cljs.core.first.call(null,in$__9420));
in$__9420 = G__9422;
out__9421 = G__9423;
continue;
}
} else
{return out__9421;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__9424 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9425 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3971__auto____9425))
{var e__9426 = temp__3971__auto____9425;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9426));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9424,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9419_SHARP_){
var temp__3971__auto____9427 = cljs.core.find.call(null,smap,p1__9419_SHARP_);

if(cljs.core.truth_(temp__3971__auto____9427))
{var e__9428 = temp__3971__auto____9427;

return cljs.core.second.call(null,e__9428);
} else
{return p1__9419_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9436 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9429,seen){
while(true){
var vec__9430__9431 = p__9429;
var f__9432 = cljs.core.nth.call(null,vec__9430__9431,0,null);
var xs__9433 = vec__9430__9431;

var temp__3974__auto____9434 = cljs.core.seq.call(null,xs__9433);

if(cljs.core.truth_(temp__3974__auto____9434))
{var s__9435 = temp__3974__auto____9434;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__9432)))
{{
var G__9437 = cljs.core.rest.call(null,s__9435);
var G__9438 = seen;
p__9429 = G__9437;
seen = G__9438;
continue;
}
} else
{return cljs.core.cons.call(null,f__9432,step.call(null,cljs.core.rest.call(null,s__9435),cljs.core.conj.call(null,seen,f__9432)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__9436.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9439 = cljs.core.PersistentVector.fromArray([]);
var s__9440 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__9440)))
{{
var G__9441 = cljs.core.conj.call(null,ret__9439,cljs.core.first.call(null,s__9440));
var G__9442 = cljs.core.next.call(null,s__9440);
ret__9439 = G__9441;
s__9440 = G__9442;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9439);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3824__auto____9443 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____9443))
{return or__3824__auto____9443;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__9444 = x.lastIndexOf("/");

if(cljs.core.truth_((i__9444 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9444 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3824__auto____9445 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____9445))
{return or__3824__auto____9445;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__9446 = x.lastIndexOf("/");

if(cljs.core.truth_((i__9446 > -1)))
{return cljs.core.subs.call(null,x,2,i__9446);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9449 = cljs.core.ObjMap.fromObject([],{});
var ks__9450 = cljs.core.seq.call(null,keys);
var vs__9451 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9452 = ks__9450;

if(cljs.core.truth_(and__3822__auto____9452))
{return vs__9451;
} else
{return and__3822__auto____9452;
}
})()))
{{
var G__9453 = cljs.core.assoc.call(null,map__9449,cljs.core.first.call(null,ks__9450),cljs.core.first.call(null,vs__9451));
var G__9454 = cljs.core.next.call(null,ks__9450);
var G__9455 = cljs.core.next.call(null,vs__9451);
map__9449 = G__9453;
ks__9450 = G__9454;
vs__9451 = G__9455;
continue;
}
} else
{return map__9449;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__9458 = (function (k,x){
return x;
});
var max_key__9459 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__9460 = (function() { 
var G__9462__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9447_SHARP_,p2__9448_SHARP_){
return max_key.call(null,k,p1__9447_SHARP_,p2__9448_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9462 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9462__delegate.call(this, k, x, y, more);
};
G__9462.cljs$lang$maxFixedArity = 3;
G__9462.cljs$lang$applyTo = (function (arglist__9463){
var k = cljs.core.first(arglist__9463);
var x = cljs.core.first(cljs.core.next(arglist__9463));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9463)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9463)));
return G__9462__delegate.call(this, k, x, y, more);
});
return G__9462;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__9458.call(this,k,x);
case  3 :
return max_key__9459.call(this,k,x,y);
default:
return max_key__9460.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__9460.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__9464 = (function (k,x){
return x;
});
var min_key__9465 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__9466 = (function() { 
var G__9468__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9456_SHARP_,p2__9457_SHARP_){
return min_key.call(null,k,p1__9456_SHARP_,p2__9457_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9468 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9468__delegate.call(this, k, x, y, more);
};
G__9468.cljs$lang$maxFixedArity = 3;
G__9468.cljs$lang$applyTo = (function (arglist__9469){
var k = cljs.core.first(arglist__9469);
var x = cljs.core.first(cljs.core.next(arglist__9469));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9469)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9469)));
return G__9468__delegate.call(this, k, x, y, more);
});
return G__9468;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__9464.call(this,k,x);
case  3 :
return min_key__9465.call(this,k,x,y);
default:
return min_key__9466.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__9466.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__9472 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__9473 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9470 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____9470))
{var s__9471 = temp__3974__auto____9470;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9471),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9471)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__9472.call(this,n,step);
case  3 :
return partition_all__9473.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9475 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____9475))
{var s__9476 = temp__3974__auto____9475;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9476))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9476),take_while.call(null,pred,cljs.core.rest.call(null,s__9476)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__9477 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__9478 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__9494 = null;
var G__9494__9495 = (function (rng,f){
var this__9479 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__9494__9496 = (function (rng,f,s){
var this__9480 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__9494 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__9494__9495.call(this,rng,f);
case  3 :
return G__9494__9496.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9494;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__9481 = this;
var comp__9482 = (cljs.core.truth_((this__9481.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__9482.call(null,this__9481.start,this__9481.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__9483 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__9483.end - this__9483.start) / this__9483.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__9484 = this;
return this__9484.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__9485 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__9485.meta,(this__9485.start + this__9485.step),this__9485.end,this__9485.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__9486 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__9487 = this;
return (new cljs.core.Range(meta,this__9487.start,this__9487.end,this__9487.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__9488 = this;
return this__9488.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__9498 = null;
var G__9498__9499 = (function (rng,n){
var this__9489 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__9489.start + (n * this__9489.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____9490 = (this__9489.start > this__9489.end);

if(cljs.core.truth_(and__3822__auto____9490))
{return cljs.core._EQ_.call(null,this__9489.step,0);
} else
{return and__3822__auto____9490;
}
})()))
{return this__9489.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__9498__9500 = (function (rng,n,not_found){
var this__9491 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__9491.start + (n * this__9491.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____9492 = (this__9491.start > this__9491.end);

if(cljs.core.truth_(and__3822__auto____9492))
{return cljs.core._EQ_.call(null,this__9491.step,0);
} else
{return and__3822__auto____9492;
}
})()))
{return this__9491.start;
} else
{return not_found;
}
}
});
G__9498 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__9498__9499.call(this,rng,n);
case  3 :
return G__9498__9500.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9498;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__9493 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9493.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__9502 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__9503 = (function (end){
return range.call(null,0,end,1);
});
var range__9504 = (function (start,end){
return range.call(null,start,end,1);
});
var range__9505 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__9502.call(this);
case  1 :
return range__9503.call(this,start);
case  2 :
return range__9504.call(this,start,end);
case  3 :
return range__9505.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9507 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____9507))
{var s__9508 = temp__3974__auto____9507;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__9508),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9508)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9510 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____9510))
{var s__9511 = temp__3974__auto____9510;

var fst__9512 = cljs.core.first.call(null,s__9511);
var fv__9513 = f.call(null,fst__9512);
var run__9514 = cljs.core.cons.call(null,fst__9512,cljs.core.take_while.call(null,(function (p1__9509_SHARP_){
return cljs.core._EQ_.call(null,fv__9513,f.call(null,p1__9509_SHARP_));
}),cljs.core.next.call(null,s__9511)));

return cljs.core.cons.call(null,run__9514,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9514),s__9511))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__9529 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9525 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____9525))
{var s__9526 = temp__3971__auto____9525;

return reductions.call(null,f,cljs.core.first.call(null,s__9526),cljs.core.rest.call(null,s__9526));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__9530 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9527 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____9527))
{var s__9528 = temp__3974__auto____9527;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9528)),cljs.core.rest.call(null,s__9528));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__9529.call(this,f,init);
case  3 :
return reductions__9530.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__9533 = (function (f){
return (function() {
var G__9538 = null;
var G__9538__9539 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9538__9540 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9538__9541 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9538__9542 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9538__9543 = (function() { 
var G__9545__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9545 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9545__delegate.call(this, x, y, z, args);
};
G__9545.cljs$lang$maxFixedArity = 3;
G__9545.cljs$lang$applyTo = (function (arglist__9546){
var x = cljs.core.first(arglist__9546);
var y = cljs.core.first(cljs.core.next(arglist__9546));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9546)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9546)));
return G__9545__delegate.call(this, x, y, z, args);
});
return G__9545;
})()
;
G__9538 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9538__9539.call(this);
case  1 :
return G__9538__9540.call(this,x);
case  2 :
return G__9538__9541.call(this,x,y);
case  3 :
return G__9538__9542.call(this,x,y,z);
default:
return G__9538__9543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9538.cljs$lang$maxFixedArity = 3;
G__9538.cljs$lang$applyTo = G__9538__9543.cljs$lang$applyTo;
return G__9538;
})()
});
var juxt__9534 = (function (f,g){
return (function() {
var G__9547 = null;
var G__9547__9548 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9547__9549 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9547__9550 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9547__9551 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9547__9552 = (function() { 
var G__9554__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9554 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9554__delegate.call(this, x, y, z, args);
};
G__9554.cljs$lang$maxFixedArity = 3;
G__9554.cljs$lang$applyTo = (function (arglist__9555){
var x = cljs.core.first(arglist__9555);
var y = cljs.core.first(cljs.core.next(arglist__9555));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9555)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9555)));
return G__9554__delegate.call(this, x, y, z, args);
});
return G__9554;
})()
;
G__9547 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9547__9548.call(this);
case  1 :
return G__9547__9549.call(this,x);
case  2 :
return G__9547__9550.call(this,x,y);
case  3 :
return G__9547__9551.call(this,x,y,z);
default:
return G__9547__9552.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9547.cljs$lang$maxFixedArity = 3;
G__9547.cljs$lang$applyTo = G__9547__9552.cljs$lang$applyTo;
return G__9547;
})()
});
var juxt__9535 = (function (f,g,h){
return (function() {
var G__9556 = null;
var G__9556__9557 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9556__9558 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9556__9559 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9556__9560 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9556__9561 = (function() { 
var G__9563__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9563 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9563__delegate.call(this, x, y, z, args);
};
G__9563.cljs$lang$maxFixedArity = 3;
G__9563.cljs$lang$applyTo = (function (arglist__9564){
var x = cljs.core.first(arglist__9564);
var y = cljs.core.first(cljs.core.next(arglist__9564));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9564)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9564)));
return G__9563__delegate.call(this, x, y, z, args);
});
return G__9563;
})()
;
G__9556 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9556__9557.call(this);
case  1 :
return G__9556__9558.call(this,x);
case  2 :
return G__9556__9559.call(this,x,y);
case  3 :
return G__9556__9560.call(this,x,y,z);
default:
return G__9556__9561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9556.cljs$lang$maxFixedArity = 3;
G__9556.cljs$lang$applyTo = G__9556__9561.cljs$lang$applyTo;
return G__9556;
})()
});
var juxt__9536 = (function() { 
var G__9565__delegate = function (f,g,h,fs){
var fs__9532 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__9566 = null;
var G__9566__9567 = (function (){
return cljs.core.reduce.call(null,(function (p1__9515_SHARP_,p2__9516_SHARP_){
return cljs.core.conj.call(null,p1__9515_SHARP_,p2__9516_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__9532);
});
var G__9566__9568 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9517_SHARP_,p2__9518_SHARP_){
return cljs.core.conj.call(null,p1__9517_SHARP_,p2__9518_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__9532);
});
var G__9566__9569 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9519_SHARP_,p2__9520_SHARP_){
return cljs.core.conj.call(null,p1__9519_SHARP_,p2__9520_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__9532);
});
var G__9566__9570 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9521_SHARP_,p2__9522_SHARP_){
return cljs.core.conj.call(null,p1__9521_SHARP_,p2__9522_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__9532);
});
var G__9566__9571 = (function() { 
var G__9573__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9523_SHARP_,p2__9524_SHARP_){
return cljs.core.conj.call(null,p1__9523_SHARP_,cljs.core.apply.call(null,p2__9524_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__9532);
};
var G__9573 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9573__delegate.call(this, x, y, z, args);
};
G__9573.cljs$lang$maxFixedArity = 3;
G__9573.cljs$lang$applyTo = (function (arglist__9574){
var x = cljs.core.first(arglist__9574);
var y = cljs.core.first(cljs.core.next(arglist__9574));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9574)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9574)));
return G__9573__delegate.call(this, x, y, z, args);
});
return G__9573;
})()
;
G__9566 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9566__9567.call(this);
case  1 :
return G__9566__9568.call(this,x);
case  2 :
return G__9566__9569.call(this,x,y);
case  3 :
return G__9566__9570.call(this,x,y,z);
default:
return G__9566__9571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9566.cljs$lang$maxFixedArity = 3;
G__9566.cljs$lang$applyTo = G__9566__9571.cljs$lang$applyTo;
return G__9566;
})()
};
var G__9565 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9565__delegate.call(this, f, g, h, fs);
};
G__9565.cljs$lang$maxFixedArity = 3;
G__9565.cljs$lang$applyTo = (function (arglist__9575){
var f = cljs.core.first(arglist__9575);
var g = cljs.core.first(cljs.core.next(arglist__9575));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9575)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9575)));
return G__9565__delegate.call(this, f, g, h, fs);
});
return G__9565;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__9533.call(this,f);
case  2 :
return juxt__9534.call(this,f,g);
case  3 :
return juxt__9535.call(this,f,g,h);
default:
return juxt__9536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__9536.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__9577 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__9580 = cljs.core.next.call(null,coll);
coll = G__9580;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__9578 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9576 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3822__auto____9576))
{return (n > 0);
} else
{return and__3822__auto____9576;
}
})()))
{{
var G__9581 = (n - 1);
var G__9582 = cljs.core.next.call(null,coll);
n = G__9581;
coll = G__9582;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__9577.call(this,n);
case  2 :
return dorun__9578.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__9583 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__9584 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__9583.call(this,n);
case  2 :
return doall__9584.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9586 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9586),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9586),1)))
{return cljs.core.first.call(null,matches__9586);
} else
{return cljs.core.vec.call(null,matches__9586);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9587 = re.exec(s);

if(cljs.core.truth_((matches__9587 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__9587),1)))
{return cljs.core.first.call(null,matches__9587);
} else
{return cljs.core.vec.call(null,matches__9587);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9588 = cljs.core.re_find.call(null,re,s);
var match_idx__9589 = s.search(re);
var match_str__9590 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__9588))?cljs.core.first.call(null,match_data__9588):match_data__9588);
var post_match__9591 = cljs.core.subs.call(null,s,(match_idx__9589 + cljs.core.count.call(null,match_str__9590)));

if(cljs.core.truth_(match_data__9588))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9588,re_seq.call(null,re,post_match__9591));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9593__9594 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9595 = cljs.core.nth.call(null,vec__9593__9594,0,null);
var flags__9596 = cljs.core.nth.call(null,vec__9593__9594,1,null);
var pattern__9597 = cljs.core.nth.call(null,vec__9593__9594,2,null);

return (new RegExp(pattern__9597,flags__9596));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__9592_SHARP_){
return print_one.call(null,p1__9592_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9598 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3822__auto____9598))
{var and__3822__auto____9602 = (function (){var x__3556__auto____9599 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____9600 = x__3556__auto____9599;

if(cljs.core.truth_(and__3822__auto____9600))
{var and__3822__auto____9601 = x__3556__auto____9599.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____9601))
{return cljs.core.not.call(null,x__3556__auto____9599.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____9601;
}
} else
{return and__3822__auto____9600;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3556__auto____9599);
}
})();

if(cljs.core.truth_(and__3822__auto____9602))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9602;
}
} else
{return and__3822__auto____9598;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3556__auto____9603 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____9604 = x__3556__auto____9603;

if(cljs.core.truth_(and__3822__auto____9604))
{var and__3822__auto____9605 = x__3556__auto____9603.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3822__auto____9605))
{return cljs.core.not.call(null,x__3556__auto____9603.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3822__auto____9605;
}
} else
{return and__3822__auto____9604;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3556__auto____9603);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9606 = cljs.core.first.call(null,objs);
var sb__9607 = (new goog.string.StringBuffer());

var G__9608__9609 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9608__9609))
{var obj__9610 = cljs.core.first.call(null,G__9608__9609);
var G__9608__9611 = G__9608__9609;

while(true){
if(cljs.core.truth_((obj__9610 === first_obj__9606)))
{} else
{sb__9607.append(" ");
}
var G__9612__9613 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9610,opts));

if(cljs.core.truth_(G__9612__9613))
{var string__9614 = cljs.core.first.call(null,G__9612__9613);
var G__9612__9615 = G__9612__9613;

while(true){
sb__9607.append(string__9614);
var temp__3974__auto____9616 = cljs.core.next.call(null,G__9612__9615);

if(cljs.core.truth_(temp__3974__auto____9616))
{var G__9612__9617 = temp__3974__auto____9616;

{
var G__9620 = cljs.core.first.call(null,G__9612__9617);
var G__9621 = G__9612__9617;
string__9614 = G__9620;
G__9612__9615 = G__9621;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9618 = cljs.core.next.call(null,G__9608__9611);

if(cljs.core.truth_(temp__3974__auto____9618))
{var G__9608__9619 = temp__3974__auto____9618;

{
var G__9622 = cljs.core.first.call(null,G__9608__9619);
var G__9623 = G__9608__9619;
obj__9610 = G__9622;
G__9608__9611 = G__9623;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9607;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return cljs.core.str.call(null,cljs.core.pr_sb.call(null,objs,opts));
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9624 = cljs.core.pr_sb.call(null,objs,opts);

sb__9624.append("\n");
return cljs.core.str.call(null,sb__9624);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9625 = cljs.core.first.call(null,objs);

var G__9626__9627 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__9626__9627))
{var obj__9628 = cljs.core.first.call(null,G__9626__9627);
var G__9626__9629 = G__9626__9627;

while(true){
if(cljs.core.truth_((obj__9628 === first_obj__9625)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9630__9631 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9628,opts));

if(cljs.core.truth_(G__9630__9631))
{var string__9632 = cljs.core.first.call(null,G__9630__9631);
var G__9630__9633 = G__9630__9631;

while(true){
cljs.core.string_print.call(null,string__9632);
var temp__3974__auto____9634 = cljs.core.next.call(null,G__9630__9633);

if(cljs.core.truth_(temp__3974__auto____9634))
{var G__9630__9635 = temp__3974__auto____9634;

{
var G__9638 = cljs.core.first.call(null,G__9630__9635);
var G__9639 = G__9630__9635;
string__9632 = G__9638;
G__9630__9633 = G__9639;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9636 = cljs.core.next.call(null,G__9626__9629);

if(cljs.core.truth_(temp__3974__auto____9636))
{var G__9626__9637 = temp__3974__auto____9636;

{
var G__9640 = cljs.core.first.call(null,G__9626__9637);
var G__9641 = G__9626__9637;
obj__9628 = G__9640;
G__9626__9629 = G__9641;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9642){
var objs = cljs.core.seq( arglist__9642 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9643){
var objs = cljs.core.seq( arglist__9643 );;
return prn_str__delegate.call(this, objs);
});
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9644){
var objs = cljs.core.seq( arglist__9644 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9645){
var objs = cljs.core.seq( arglist__9645 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9646){
var objs = cljs.core.seq( arglist__9646 );;
return print_str__delegate.call(this, objs);
});
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9647){
var objs = cljs.core.seq( arglist__9647 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9648){
var objs = cljs.core.seq( arglist__9648 );;
return println_str__delegate.call(this, objs);
});
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9649){
var objs = cljs.core.seq( arglist__9649 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__9650 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9650,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3974__auto____9651 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____9651))
{var nspc__9652 = temp__3974__auto____9651;

return cljs.core.str.call(null,nspc__9652,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3974__auto____9653 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____9653))
{var nspc__9654 = temp__3974__auto____9653;

return cljs.core.str.call(null,nspc__9654,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__9655 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__9655,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__9656 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__9657 = this;
var G__9658__9659 = cljs.core.seq.call(null,this__9657.watches);

if(cljs.core.truth_(G__9658__9659))
{var G__9661__9663 = cljs.core.first.call(null,G__9658__9659);
var vec__9662__9664 = G__9661__9663;
var key__9665 = cljs.core.nth.call(null,vec__9662__9664,0,null);
var f__9666 = cljs.core.nth.call(null,vec__9662__9664,1,null);
var G__9658__9667 = G__9658__9659;

var G__9661__9668 = G__9661__9663;
var G__9658__9669 = G__9658__9667;

while(true){
var vec__9670__9671 = G__9661__9668;
var key__9672 = cljs.core.nth.call(null,vec__9670__9671,0,null);
var f__9673 = cljs.core.nth.call(null,vec__9670__9671,1,null);
var G__9658__9674 = G__9658__9669;

f__9673.call(null,key__9672,this$,oldval,newval);
var temp__3974__auto____9675 = cljs.core.next.call(null,G__9658__9674);

if(cljs.core.truth_(temp__3974__auto____9675))
{var G__9658__9676 = temp__3974__auto____9675;

{
var G__9683 = cljs.core.first.call(null,G__9658__9676);
var G__9684 = G__9658__9676;
G__9661__9668 = G__9683;
G__9658__9669 = G__9684;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__9677 = this;
return this$.watches = cljs.core.assoc.call(null,this__9677.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__9678 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9678.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__9679 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__9679.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__9680 = this;
return this__9680.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9681 = this;
return this__9681.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__9682 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__9691 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__9692 = (function() { 
var G__9694__delegate = function (x,p__9685){
var map__9686__9687 = p__9685;
var map__9686__9688 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9686__9687))?cljs.core.apply.call(null,cljs.core.hash_map,map__9686__9687):map__9686__9687);
var validator__9689 = cljs.core.get.call(null,map__9686__9688,"\uFDD0'validator");
var meta__9690 = cljs.core.get.call(null,map__9686__9688,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__9690,validator__9689,null));
};
var G__9694 = function (x,var_args){
var p__9685 = null;
if (goog.isDef(var_args)) {
  p__9685 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9694__delegate.call(this, x, p__9685);
};
G__9694.cljs$lang$maxFixedArity = 1;
G__9694.cljs$lang$applyTo = (function (arglist__9695){
var x = cljs.core.first(arglist__9695);
var p__9685 = cljs.core.rest(arglist__9695);
return G__9694__delegate.call(this, x, p__9685);
});
return G__9694;
})()
;
atom = function(x,var_args){
var p__9685 = var_args;
switch(arguments.length){
case  1 :
return atom__9691.call(this,x);
default:
return atom__9692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__9692.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____9696 = a.validator;

if(cljs.core.truth_(temp__3974__auto____9696))
{var validate__9697 = temp__3974__auto____9696;

if(cljs.core.truth_(validate__9697.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__9698 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9698,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___9699 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___9700 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___9701 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___9702 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___9703 = (function() { 
var G__9705__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9705 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9705__delegate.call(this, a, f, x, y, z, more);
};
G__9705.cljs$lang$maxFixedArity = 5;
G__9705.cljs$lang$applyTo = (function (arglist__9706){
var a = cljs.core.first(arglist__9706);
var f = cljs.core.first(cljs.core.next(arglist__9706));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9706)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9706))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9706)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9706)))));
return G__9705__delegate.call(this, a, f, x, y, z, more);
});
return G__9705;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___9699.call(this,a,f);
case  3 :
return swap_BANG___9700.call(this,a,f,x);
case  4 :
return swap_BANG___9701.call(this,a,f,x,y);
case  5 :
return swap_BANG___9702.call(this,a,f,x,y,z);
default:
return swap_BANG___9703.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___9703.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9707){
var iref = cljs.core.first(arglist__9707);
var f = cljs.core.first(cljs.core.next(arglist__9707));
var args = cljs.core.rest(cljs.core.next(arglist__9707));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__9708 = (function (){
return gensym.call(null,"G__");
});
var gensym__9709 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__9708.call(this);
case  1 :
return gensym__9709.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__9711 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__9711.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__9712 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__9712.state,(function (p__9713){
var curr_state__9714 = p__9713;
var curr_state__9715 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__9714))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9714):curr_state__9714);
var done__9716 = cljs.core.get.call(null,curr_state__9715,"\uFDD0'done");

if(cljs.core.truth_(done__9716))
{return curr_state__9715;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9712.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__9717__9718 = options;
var map__9717__9719 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__9717__9718))?cljs.core.apply.call(null,cljs.core.hash_map,map__9717__9718):map__9717__9718);
var keywordize_keys__9720 = cljs.core.get.call(null,map__9717__9719,"\uFDD0'keywordize-keys");
var keyfn__9721 = (cljs.core.truth_(keywordize_keys__9720)?cljs.core.keyword:cljs.core.str);
var f__9727 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__3625__auto____9726 = (function iter__9722(s__9723){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9723__9724 = s__9723;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9723__9724)))
{var k__9725 = cljs.core.first.call(null,s__9723__9724);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9721.call(null,k__9725),thisfn.call(null,(x[k__9725]))]),iter__9722.call(null,cljs.core.rest.call(null,s__9723__9724)));
} else
{return null;
}
break;
}
})));
});

return iter__3625__auto____9726.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__9727.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9728){
var x = cljs.core.first(arglist__9728);
var options = cljs.core.rest(arglist__9728);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__9729 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__9733__delegate = function (args){
var temp__3971__auto____9730 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__9729),args);

if(cljs.core.truth_(temp__3971__auto____9730))
{var v__9731 = temp__3971__auto____9730;

return v__9731;
} else
{var ret__9732 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__9729,cljs.core.assoc,args,ret__9732);
return ret__9732;
}
};
var G__9733 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9733__delegate.call(this, args);
};
G__9733.cljs$lang$maxFixedArity = 0;
G__9733.cljs$lang$applyTo = (function (arglist__9734){
var args = cljs.core.seq( arglist__9734 );;
return G__9733__delegate.call(this, args);
});
return G__9733;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__9736 = (function (f){
while(true){
var ret__9735 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__9735)))
{{
var G__9739 = ret__9735;
f = G__9739;
continue;
}
} else
{return ret__9735;
}
break;
}
});
var trampoline__9737 = (function() { 
var G__9740__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9740 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9740__delegate.call(this, f, args);
};
G__9740.cljs$lang$maxFixedArity = 1;
G__9740.cljs$lang$applyTo = (function (arglist__9741){
var f = cljs.core.first(arglist__9741);
var args = cljs.core.rest(arglist__9741);
return G__9740__delegate.call(this, f, args);
});
return G__9740;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__9736.call(this,f);
default:
return trampoline__9737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__9737.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9742 = (function (){
return rand.call(null,1);
});
var rand__9743 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9742.call(this);
case  1 :
return rand__9743.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__9745 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__9745,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__9745,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___9754 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___9755 = (function (h,child,parent){
var or__3824__auto____9746 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3824__auto____9746))
{return or__3824__auto____9746;
} else
{var or__3824__auto____9747 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3824__auto____9747))
{return or__3824__auto____9747;
} else
{var and__3822__auto____9748 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3822__auto____9748))
{var and__3822__auto____9749 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3822__auto____9749))
{var and__3822__auto____9750 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3822__auto____9750))
{var ret__9751 = true;
var i__9752 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____9753 = cljs.core.not.call(null,ret__9751);

if(cljs.core.truth_(or__3824__auto____9753))
{return or__3824__auto____9753;
} else
{return cljs.core._EQ_.call(null,i__9752,cljs.core.count.call(null,parent));
}
})()))
{return ret__9751;
} else
{{
var G__9757 = isa_QMARK_.call(null,h,child.call(null,i__9752),parent.call(null,i__9752));
var G__9758 = (i__9752 + 1);
ret__9751 = G__9757;
i__9752 = G__9758;
continue;
}
}
break;
}
} else
{return and__3822__auto____9750;
}
} else
{return and__3822__auto____9749;
}
} else
{return and__3822__auto____9748;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___9754.call(this,h,child);
case  3 :
return isa_QMARK___9755.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__9759 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__9760 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__9759.call(this,h);
case  2 :
return parents__9760.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__9762 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__9763 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__9762.call(this,h);
case  2 :
return ancestors__9763.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__9765 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__9766 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__9765.call(this,h);
case  2 :
return descendants__9766.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__9776 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__9777 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__9771 = "\uFDD0'parents".call(null,h);
var td__9772 = "\uFDD0'descendants".call(null,h);
var ta__9773 = "\uFDD0'ancestors".call(null,h);
var tf__9774 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3824__auto____9775 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__9771.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9773.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__9773.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__9771,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9774.call(null,"\uFDD0'ancestors".call(null,h),tag,td__9772,parent,ta__9773),"\uFDD0'descendants":tf__9774.call(null,"\uFDD0'descendants".call(null,h),parent,ta__9773,tag,td__9772)});
})());

if(cljs.core.truth_(or__3824__auto____9775))
{return or__3824__auto____9775;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__9776.call(this,h,tag);
case  3 :
return derive__9777.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__9783 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__9784 = (function (h,tag,parent){
var parentMap__9779 = "\uFDD0'parents".call(null,h);
var childsParents__9780 = (cljs.core.truth_(parentMap__9779.call(null,tag))?cljs.core.disj.call(null,parentMap__9779.call(null,tag),parent):cljs.core.set([]));
var newParents__9781 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9780))?cljs.core.assoc.call(null,parentMap__9779,tag,childsParents__9780):cljs.core.dissoc.call(null,parentMap__9779,tag));
var deriv_seq__9782 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9768_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9768_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9768_SHARP_),cljs.core.second.call(null,p1__9768_SHARP_)));
}),cljs.core.seq.call(null,newParents__9781)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__9779.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__9769_SHARP_,p2__9770_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9769_SHARP_,p2__9770_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9782));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__9783.call(this,h,tag);
case  3 :
return underive__9784.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__9786 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3824__auto____9788 = (cljs.core.truth_((function (){var and__3822__auto____9787 = xprefs__9786;

if(cljs.core.truth_(and__3822__auto____9787))
{return xprefs__9786.call(null,y);
} else
{return and__3822__auto____9787;
}
})())?true:null);

if(cljs.core.truth_(or__3824__auto____9788))
{return or__3824__auto____9788;
} else
{var or__3824__auto____9790 = (function (){var ps__9789 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9789) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9789),prefer_table)))
{} else
{}
{
var G__9793 = cljs.core.rest.call(null,ps__9789);
ps__9789 = G__9793;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____9790))
{return or__3824__auto____9790;
} else
{var or__3824__auto____9792 = (function (){var ps__9791 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__9791) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9791),y,prefer_table)))
{} else
{}
{
var G__9794 = cljs.core.rest.call(null,ps__9791);
ps__9791 = G__9794;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____9792))
{return or__3824__auto____9792;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____9795 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3824__auto____9795))
{return or__3824__auto____9795;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9804 = cljs.core.reduce.call(null,(function (be,p__9796){
var vec__9797__9798 = p__9796;
var k__9799 = cljs.core.nth.call(null,vec__9797__9798,0,null);
var ___9800 = cljs.core.nth.call(null,vec__9797__9798,1,null);
var e__9801 = vec__9797__9798;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9799)))
{var be2__9803 = (cljs.core.truth_((function (){var or__3824__auto____9802 = (be === null);

if(cljs.core.truth_(or__3824__auto____9802))
{return or__3824__auto____9802;
} else
{return cljs.core.dominates.call(null,k__9799,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9801:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9803),k__9799,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__9799," and ",cljs.core.first.call(null,be2__9803),", and neither is preferred")));
}
return be2__9803;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__9804))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9804));
return cljs.core.second.call(null,best_entry__9804);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3822__auto____9805 = mf;

if(cljs.core.truth_(and__3822__auto____9805))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3822__auto____9805;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3824__auto____9806 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____9806))
{return or__3824__auto____9806;
} else
{var or__3824__auto____9807 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3824__auto____9807))
{return or__3824__auto____9807;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3822__auto____9808 = mf;

if(cljs.core.truth_(and__3822__auto____9808))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3822__auto____9808;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____9809 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____9809))
{return or__3824__auto____9809;
} else
{var or__3824__auto____9810 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3824__auto____9810))
{return or__3824__auto____9810;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____9811 = mf;

if(cljs.core.truth_(and__3822__auto____9811))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3822__auto____9811;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9812 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____9812))
{return or__3824__auto____9812;
} else
{var or__3824__auto____9813 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3824__auto____9813))
{return or__3824__auto____9813;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3822__auto____9814 = mf;

if(cljs.core.truth_(and__3822__auto____9814))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3822__auto____9814;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____9815 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____9815))
{return or__3824__auto____9815;
} else
{var or__3824__auto____9816 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3824__auto____9816))
{return or__3824__auto____9816;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____9817 = mf;

if(cljs.core.truth_(and__3822__auto____9817))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3822__auto____9817;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9818 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____9818))
{return or__3824__auto____9818;
} else
{var or__3824__auto____9819 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3824__auto____9819))
{return or__3824__auto____9819;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3822__auto____9820 = mf;

if(cljs.core.truth_(and__3822__auto____9820))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3822__auto____9820;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3824__auto____9821 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____9821))
{return or__3824__auto____9821;
} else
{var or__3824__auto____9822 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3824__auto____9822))
{return or__3824__auto____9822;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3822__auto____9823 = mf;

if(cljs.core.truth_(and__3822__auto____9823))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3822__auto____9823;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3824__auto____9824 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____9824))
{return or__3824__auto____9824;
} else
{var or__3824__auto____9825 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3824__auto____9825))
{return or__3824__auto____9825;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3822__auto____9826 = mf;

if(cljs.core.truth_(and__3822__auto____9826))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3822__auto____9826;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3824__auto____9827 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____9827))
{return or__3824__auto____9827;
} else
{var or__3824__auto____9828 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3824__auto____9828))
{return or__3824__auto____9828;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9829 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9830 = cljs.core._get_method.call(null,mf,dispatch_val__9829);

if(cljs.core.truth_(target_fn__9830))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__9829)));
}
return cljs.core.apply.call(null,target_fn__9830,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__3472__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__9831 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__9832 = this;
cljs.core.swap_BANG_.call(null,this__9832.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9832.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9832.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__9832.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__9833 = this;
cljs.core.swap_BANG_.call(null,this__9833.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9833.method_cache,this__9833.method_table,this__9833.cached_hierarchy,this__9833.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__9834 = this;
cljs.core.swap_BANG_.call(null,this__9834.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9834.method_cache,this__9834.method_table,this__9834.cached_hierarchy,this__9834.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__9835 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9835.cached_hierarchy),cljs.core.deref.call(null,this__9835.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__9835.method_cache,this__9835.method_table,this__9835.cached_hierarchy,this__9835.hierarchy);
}
var temp__3971__auto____9836 = cljs.core.deref.call(null,this__9835.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3971__auto____9836))
{var target_fn__9837 = temp__3971__auto____9836;

return target_fn__9837;
} else
{var temp__3971__auto____9838 = cljs.core.find_and_cache_best_method.call(null,this__9835.name,dispatch_val,this__9835.hierarchy,this__9835.method_table,this__9835.prefer_table,this__9835.method_cache,this__9835.cached_hierarchy);

if(cljs.core.truth_(temp__3971__auto____9838))
{var target_fn__9839 = temp__3971__auto____9838;

return target_fn__9839;
} else
{return cljs.core.deref.call(null,this__9835.method_table).call(null,this__9835.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9840 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9840.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__9840.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__9840.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9840.method_cache,this__9840.method_table,this__9840.cached_hierarchy,this__9840.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__9841 = this;
return cljs.core.deref.call(null,this__9841.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__9842 = this;
return cljs.core.deref.call(null,this__9842.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__9843 = this;
return cljs.core.do_dispatch.call(null,mf,this__9843.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9844__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__9844 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9844__delegate.call(this, _, args);
};
G__9844.cljs$lang$maxFixedArity = 1;
G__9844.cljs$lang$applyTo = (function (arglist__9845){
var _ = cljs.core.first(arglist__9845);
var args = cljs.core.rest(arglist__9845);
return G__9844__delegate.call(this, _, args);
});
return G__9844;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
