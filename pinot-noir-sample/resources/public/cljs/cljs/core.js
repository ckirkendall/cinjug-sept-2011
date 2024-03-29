goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
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
var or__3576__auto____2067 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____2067))
{return or__3576__auto____2067;
} else
{var or__3576__auto____2068 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____2068))
{return or__3576__auto____2068;
} else
{return false;
}
}
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
return array[i];
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
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2069 = coll;

if(cljs.core.truth_(and__3574__auto____2069))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____2069;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____2070 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2070))
{return or__3576__auto____2070;
} else
{var or__3576__auto____2071 = (_count["_"]);

if(cljs.core.truth_(or__3576__auto____2071))
{return or__3576__auto____2071;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2072 = coll;

if(cljs.core.truth_(and__3574__auto____2072))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____2072;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____2073 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2073))
{return or__3576__auto____2073;
} else
{var or__3576__auto____2074 = (_empty["_"]);

if(cljs.core.truth_(or__3576__auto____2074))
{return or__3576__auto____2074;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____2075 = coll;

if(cljs.core.truth_(and__3574__auto____2075))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____2075;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____2076 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2076))
{return or__3576__auto____2076;
} else
{var or__3576__auto____2077 = (_conj["_"]);

if(cljs.core.truth_(or__3576__auto____2077))
{return or__3576__auto____2077;
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
var _nth__2084 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____2078 = coll;

if(cljs.core.truth_(and__3574__auto____2078))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2078;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____2079 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2079))
{return or__3576__auto____2079;
} else
{var or__3576__auto____2080 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2080))
{return or__3576__auto____2080;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2085 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2081 = coll;

if(cljs.core.truth_(and__3574__auto____2081))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2081;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____2082 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2082))
{return or__3576__auto____2082;
} else
{var or__3576__auto____2083 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2083))
{return or__3576__auto____2083;
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
return _nth__2084.call(this,coll,n);
case  3 :
return _nth__2085.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2087 = coll;

if(cljs.core.truth_(and__3574__auto____2087))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____2087;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____2088 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2088))
{return or__3576__auto____2088;
} else
{var or__3576__auto____2089 = (_first["_"]);

if(cljs.core.truth_(or__3576__auto____2089))
{return or__3576__auto____2089;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2090 = coll;

if(cljs.core.truth_(and__3574__auto____2090))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____2090;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____2091 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2091))
{return or__3576__auto____2091;
} else
{var or__3576__auto____2092 = (_rest["_"]);

if(cljs.core.truth_(or__3576__auto____2092))
{return or__3576__auto____2092;
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
var _lookup__2099 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____2093 = o;

if(cljs.core.truth_(and__3574__auto____2093))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2093;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____2094 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2094))
{return or__3576__auto____2094;
} else
{var or__3576__auto____2095 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2095))
{return or__3576__auto____2095;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2100 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2096 = o;

if(cljs.core.truth_(and__3574__auto____2096))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2096;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____2097 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2097))
{return or__3576__auto____2097;
} else
{var or__3576__auto____2098 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2098))
{return or__3576__auto____2098;
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
return _lookup__2099.call(this,o,k);
case  3 :
return _lookup__2100.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2102 = coll;

if(cljs.core.truth_(and__3574__auto____2102))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2102;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2103 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2103))
{return or__3576__auto____2103;
} else
{var or__3576__auto____2104 = (_contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2104))
{return or__3576__auto____2104;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2105 = coll;

if(cljs.core.truth_(and__3574__auto____2105))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2105;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2106 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2106))
{return or__3576__auto____2106;
} else
{var or__3576__auto____2107 = (_assoc["_"]);

if(cljs.core.truth_(or__3576__auto____2107))
{return or__3576__auto____2107;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2108 = coll;

if(cljs.core.truth_(and__3574__auto____2108))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2108;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2109 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2109))
{return or__3576__auto____2109;
} else
{var or__3576__auto____2110 = (_dissoc["_"]);

if(cljs.core.truth_(or__3576__auto____2110))
{return or__3576__auto____2110;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2111 = coll;

if(cljs.core.truth_(and__3574__auto____2111))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2111;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2112 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2112))
{return or__3576__auto____2112;
} else
{var or__3576__auto____2113 = (_disjoin["_"]);

if(cljs.core.truth_(or__3576__auto____2113))
{return or__3576__auto____2113;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2114 = coll;

if(cljs.core.truth_(and__3574__auto____2114))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2114;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2115 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2115))
{return or__3576__auto____2115;
} else
{var or__3576__auto____2116 = (_peek["_"]);

if(cljs.core.truth_(or__3576__auto____2116))
{return or__3576__auto____2116;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2117 = coll;

if(cljs.core.truth_(and__3574__auto____2117))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2117;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2118 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2118))
{return or__3576__auto____2118;
} else
{var or__3576__auto____2119 = (_pop["_"]);

if(cljs.core.truth_(or__3576__auto____2119))
{return or__3576__auto____2119;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2120 = coll;

if(cljs.core.truth_(and__3574__auto____2120))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2120;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2121 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2121))
{return or__3576__auto____2121;
} else
{var or__3576__auto____2122 = (_assoc_n["_"]);

if(cljs.core.truth_(or__3576__auto____2122))
{return or__3576__auto____2122;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2123 = o;

if(cljs.core.truth_(and__3574__auto____2123))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2123;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2124 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2124))
{return or__3576__auto____2124;
} else
{var or__3576__auto____2125 = (_deref["_"]);

if(cljs.core.truth_(or__3576__auto____2125))
{return or__3576__auto____2125;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2126 = o;

if(cljs.core.truth_(and__3574__auto____2126))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2126;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2127 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2127))
{return or__3576__auto____2127;
} else
{var or__3576__auto____2128 = (_deref_with_timeout["_"]);

if(cljs.core.truth_(or__3576__auto____2128))
{return or__3576__auto____2128;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2129 = o;

if(cljs.core.truth_(and__3574__auto____2129))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2129;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2130 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2130))
{return or__3576__auto____2130;
} else
{var or__3576__auto____2131 = (_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2131))
{return or__3576__auto____2131;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2132 = o;

if(cljs.core.truth_(and__3574__auto____2132))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2132;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2133 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2133))
{return or__3576__auto____2133;
} else
{var or__3576__auto____2134 = (_with_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2134))
{return or__3576__auto____2134;
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
var _reduce__2141 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2135 = coll;

if(cljs.core.truth_(and__3574__auto____2135))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2135;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2136 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2136))
{return or__3576__auto____2136;
} else
{var or__3576__auto____2137 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2137))
{return or__3576__auto____2137;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2142 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2138 = coll;

if(cljs.core.truth_(and__3574__auto____2138))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2138;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2139 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2139))
{return or__3576__auto____2139;
} else
{var or__3576__auto____2140 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2140))
{return or__3576__auto____2140;
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
return _reduce__2141.call(this,coll,f);
case  3 :
return _reduce__2142.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2144 = o;

if(cljs.core.truth_(and__3574__auto____2144))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2144;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2145 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2145))
{return or__3576__auto____2145;
} else
{var or__3576__auto____2146 = (_equiv["_"]);

if(cljs.core.truth_(or__3576__auto____2146))
{return or__3576__auto____2146;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2147 = o;

if(cljs.core.truth_(and__3574__auto____2147))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2147;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2148 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2148))
{return or__3576__auto____2148;
} else
{var or__3576__auto____2149 = (_hash["_"]);

if(cljs.core.truth_(or__3576__auto____2149))
{return or__3576__auto____2149;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2150 = o;

if(cljs.core.truth_(and__3574__auto____2150))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2150;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2151 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2151))
{return or__3576__auto____2151;
} else
{var or__3576__auto____2152 = (_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2152))
{return or__3576__auto____2152;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2153 = o;

if(cljs.core.truth_(and__3574__auto____2153))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2153;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2154 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2154))
{return or__3576__auto____2154;
} else
{var or__3576__auto____2155 = (_pr_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2155))
{return or__3576__auto____2155;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2156 = d;

if(cljs.core.truth_(and__3574__auto____2156))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2156;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2157 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2157))
{return or__3576__auto____2157;
} else
{var or__3576__auto____2158 = (_realized_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2158))
{return or__3576__auto____2158;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2159 = null;
var G__2159__2160 = (function (_,n){
return null;
});
var G__2159__2161 = (function (_,n,not_found){
return not_found;
});
G__2159 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2159__2160.call(this,_,n);
case  3 :
return G__2159__2161.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2159;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2163 = null;
var G__2163__2164 = (function (_,f){
return f.call(null);
});
var G__2163__2165 = (function (_,f,start){
return start;
});
G__2163 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2163__2164.call(this,_,f);
case  3 :
return G__2163__2165.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2163;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2167 = null;
var G__2167__2168 = (function (o,k){
return null;
});
var G__2167__2169 = (function (o,k,not_found){
return not_found;
});
G__2167 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2167__2168.call(this,o,k);
case  3 :
return G__2167__2169.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2167;
})()
);
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
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
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2177 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2171 = cljs.core._nth.call(null,cicoll,0);
var n__2172 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2172,cljs.core._count.call(null,cicoll))))
{{
var G__2181 = f.call(null,val__2171,cljs.core._nth.call(null,cicoll,n__2172));
var G__2182 = cljs.core.inc.call(null,n__2172);
val__2171 = G__2181;
n__2172 = G__2182;
continue;
}
} else
{return val__2171;
}
break;
}
}
});
var ci_reduce__2178 = (function (cicoll,f,val){
var val__2173 = val;
var n__2174 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2174,cljs.core._count.call(null,cicoll))))
{{
var G__2183 = f.call(null,val__2173,cljs.core._nth.call(null,cicoll,n__2174));
var G__2184 = cljs.core.inc.call(null,n__2174);
val__2173 = G__2183;
n__2174 = G__2184;
continue;
}
} else
{return val__2173;
}
break;
}
});
var ci_reduce__2179 = (function (cicoll,f,val,idx){
var val__2175 = val;
var n__2176 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2176,cljs.core._count.call(null,cicoll))))
{{
var G__2185 = f.call(null,val__2175,cljs.core._nth.call(null,cicoll,n__2176));
var G__2186 = cljs.core.inc.call(null,n__2176);
val__2175 = G__2185;
n__2176 = G__2186;
continue;
}
} else
{return val__2175;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2177.call(this,cicoll,f);
case  3 :
return ci_reduce__2178.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2179.call(this,cicoll,f,val,idx);
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
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2194 = null;
var G__2194__2195 = (function (coll,f){
var this__2187 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2187.a[this__2187.i]),cljs.core.inc.call(null,this__2187.i));
});
var G__2194__2196 = (function (coll,f,start){
var this__2188 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2188.i);
});
G__2194 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2194__2195.call(this,coll,f);
case  3 :
return G__2194__2196.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2194;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2189 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2190 = this;
return this__2190.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2191 = this;
return (this__2191.a[this__2191.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2192 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2192.i),this__2192.a.length)))
{return (new cljs.core.IndexedSeq(this__2192.a,cljs.core.inc.call(null,this__2192.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2193 = this;
return this$;
});
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
var G__2198 = null;
var G__2198__2199 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2198__2200 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2198 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2198__2199.call(this,array,f);
case  3 :
return G__2198__2200.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2198;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2202 = null;
var G__2202__2203 = (function (array,k){
return (array[k]);
});
var G__2202__2204 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2202 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2202__2203.call(this,array,k);
case  3 :
return G__2202__2204.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2202;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2206 = null;
var G__2206__2207 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2206__2208 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2206 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2206__2207.call(this,array,n);
case  3 :
return G__2206__2208.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2206;
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
var temp__3726__auto____2210 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2210))
{var s__2211 = temp__3726__auto____2210;

return cljs.core._first.call(null,s__2211);
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
var G__2212 = cljs.core.next.call(null,s);
s = G__2212;
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
var s__2213 = cljs.core.seq.call(null,x);
var n__2214 = 0;

while(true){
if(cljs.core.truth_(s__2213))
{{
var G__2215 = cljs.core.next.call(null,s__2213);
var G__2216 = cljs.core.inc.call(null,n__2214);
s__2213 = G__2215;
n__2214 = G__2216;
continue;
}
} else
{return n__2214;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
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
var conj__2217 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2218 = (function() { 
var G__2220__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2221 = conj.call(null,coll,x);
var G__2222 = cljs.core.first.call(null,xs);
var G__2223 = cljs.core.next.call(null,xs);
coll = G__2221;
x = G__2222;
xs = G__2223;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2220 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2220__delegate.call(this, coll, x, xs);
};
G__2220.cljs$lang$maxFixedArity = 2;
G__2220.cljs$lang$applyTo = (function (arglist__2224){
var coll = cljs.core.first(arglist__2224);
var x = cljs.core.first(cljs.core.next(arglist__2224));
var xs = cljs.core.rest(cljs.core.next(arglist__2224));
return G__2220__delegate.call(this, coll, x, xs);
});
return G__2220;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2217.call(this,coll,x);
default:
return conj__2218.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2218.cljs$lang$applyTo;
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
var nth__2225 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2226 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2225.call(this,coll,n);
case  3 :
return nth__2226.call(this,coll,n,not_found);
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
var get__2228 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2229 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2228.call(this,o,k);
case  3 :
return get__2229.call(this,o,k,not_found);
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
var assoc__2232 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2233 = (function() { 
var G__2235__delegate = function (coll,k,v,kvs){
while(true){
var ret__2231 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2236 = ret__2231;
var G__2237 = cljs.core.first.call(null,kvs);
var G__2238 = cljs.core.second.call(null,kvs);
var G__2239 = cljs.core.nnext.call(null,kvs);
coll = G__2236;
k = G__2237;
v = G__2238;
kvs = G__2239;
continue;
}
} else
{return ret__2231;
}
break;
}
};
var G__2235 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2235__delegate.call(this, coll, k, v, kvs);
};
G__2235.cljs$lang$maxFixedArity = 3;
G__2235.cljs$lang$applyTo = (function (arglist__2240){
var coll = cljs.core.first(arglist__2240);
var k = cljs.core.first(cljs.core.next(arglist__2240));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2240)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2240)));
return G__2235__delegate.call(this, coll, k, v, kvs);
});
return G__2235;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2232.call(this,coll,k,v);
default:
return assoc__2233.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2233.cljs$lang$applyTo;
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
var dissoc__2242 = (function (coll){
return coll;
});
var dissoc__2243 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2244 = (function() { 
var G__2246__delegate = function (coll,k,ks){
while(true){
var ret__2241 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2247 = ret__2241;
var G__2248 = cljs.core.first.call(null,ks);
var G__2249 = cljs.core.next.call(null,ks);
coll = G__2247;
k = G__2248;
ks = G__2249;
continue;
}
} else
{return ret__2241;
}
break;
}
};
var G__2246 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2246__delegate.call(this, coll, k, ks);
};
G__2246.cljs$lang$maxFixedArity = 2;
G__2246.cljs$lang$applyTo = (function (arglist__2250){
var coll = cljs.core.first(arglist__2250);
var k = cljs.core.first(cljs.core.next(arglist__2250));
var ks = cljs.core.rest(cljs.core.next(arglist__2250));
return G__2246__delegate.call(this, coll, k, ks);
});
return G__2246;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2242.call(this,coll);
case  2 :
return dissoc__2243.call(this,coll,k);
default:
return dissoc__2244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2244.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__107__auto____2251 = o;

if(cljs.core.truth_((function (){var and__3574__auto____2252 = x__107__auto____2251;

if(cljs.core.truth_(and__3574__auto____2252))
{return x__107__auto____2251.cljs$core$IMeta$;
} else
{return and__3574__auto____2252;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__107__auto____2251);
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
var disj__2254 = (function (coll){
return coll;
});
var disj__2255 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2256 = (function() { 
var G__2258__delegate = function (coll,k,ks){
while(true){
var ret__2253 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2259 = ret__2253;
var G__2260 = cljs.core.first.call(null,ks);
var G__2261 = cljs.core.next.call(null,ks);
coll = G__2259;
k = G__2260;
ks = G__2261;
continue;
}
} else
{return ret__2253;
}
break;
}
};
var G__2258 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2258__delegate.call(this, coll, k, ks);
};
G__2258.cljs$lang$maxFixedArity = 2;
G__2258.cljs$lang$applyTo = (function (arglist__2262){
var coll = cljs.core.first(arglist__2262);
var k = cljs.core.first(cljs.core.next(arglist__2262));
var ks = cljs.core.rest(cljs.core.next(arglist__2262));
return G__2258__delegate.call(this, coll, k, ks);
});
return G__2258;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2254.call(this,coll);
case  2 :
return disj__2255.call(this,coll,k);
default:
return disj__2256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2256.cljs$lang$applyTo;
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
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__107__auto____2263 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2264 = x__107__auto____2263;

if(cljs.core.truth_(and__3574__auto____2264))
{return x__107__auto____2263.cljs$core$ICollection$;
} else
{return and__3574__auto____2264;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__107__auto____2263);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__107__auto____2265 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2266 = x__107__auto____2265;

if(cljs.core.truth_(and__3574__auto____2266))
{return x__107__auto____2265.cljs$core$ISet$;
} else
{return and__3574__auto____2266;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__107__auto____2265);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__107__auto____2267 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2268 = x__107__auto____2267;

if(cljs.core.truth_(and__3574__auto____2268))
{return x__107__auto____2267.cljs$core$IAssociative$;
} else
{return and__3574__auto____2268;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__107__auto____2267);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__107__auto____2269 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2270 = x__107__auto____2269;

if(cljs.core.truth_(and__3574__auto____2270))
{return x__107__auto____2269.cljs$core$ISequential$;
} else
{return and__3574__auto____2270;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__107__auto____2269);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__107__auto____2271 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2272 = x__107__auto____2271;

if(cljs.core.truth_(and__3574__auto____2272))
{return x__107__auto____2271.cljs$core$ICounted$;
} else
{return and__3574__auto____2272;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__107__auto____2271);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__107__auto____2273 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2274 = x__107__auto____2273;

if(cljs.core.truth_(and__3574__auto____2274))
{return x__107__auto____2273.cljs$core$IMap$;
} else
{return and__3574__auto____2274;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__107__auto____2273);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__107__auto____2275 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2276 = x__107__auto____2275;

if(cljs.core.truth_(and__3574__auto____2276))
{return x__107__auto____2275.cljs$core$IVector$;
} else
{return and__3574__auto____2276;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__107__auto____2275);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2277 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2277.push(key);
}));
return keys__2277;
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
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__107__auto____2278 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2279 = x__107__auto____2278;

if(cljs.core.truth_(and__3574__auto____2279))
{return x__107__auto____2278.cljs$core$ISeq$;
} else
{return and__3574__auto____2279;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__107__auto____2278);
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
var and__3574__auto____2280 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2280))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2281 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2281))
{return or__3576__auto____2281;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2280;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2282 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2282))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2282;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2283 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2283))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2283;
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
var and__3574__auto____2284 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2284))
{return (n == n.toFixed());
} else
{return and__3574__auto____2284;
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
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2285 = coll;

if(cljs.core.truth_(and__3574__auto____2285))
{var and__3574__auto____2286 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2286))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2286;
}
} else
{return and__3574__auto____2285;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
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
var distinct_QMARK___2291 = (function (x){
return true;
});
var distinct_QMARK___2292 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2293 = (function() { 
var G__2295__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2287 = cljs.core.set([y,x]);
var xs__2288 = more;

while(true){
var x__2289 = cljs.core.first.call(null,xs__2288);
var etc__2290 = cljs.core.next.call(null,xs__2288);

if(cljs.core.truth_(xs__2288))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2287,x__2289)))
{return false;
} else
{{
var G__2296 = cljs.core.conj.call(null,s__2287,x__2289);
var G__2297 = etc__2290;
s__2287 = G__2296;
xs__2288 = G__2297;
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
var G__2295 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2295__delegate.call(this, x, y, more);
};
G__2295.cljs$lang$maxFixedArity = 2;
G__2295.cljs$lang$applyTo = (function (arglist__2298){
var x = cljs.core.first(arglist__2298);
var y = cljs.core.first(cljs.core.next(arglist__2298));
var more = cljs.core.rest(cljs.core.next(arglist__2298));
return G__2295__delegate.call(this, x, y, more);
});
return G__2295;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2291.call(this,x);
case  2 :
return distinct_QMARK___2292.call(this,x,y);
default:
return distinct_QMARK___2293.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2293.cljs$lang$applyTo;
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
var r__2299 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2299)))
{return r__2299;
} else
{if(cljs.core.truth_(r__2299))
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
var sort__2301 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2302 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2300 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2300,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2300);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2301.call(this,comp);
case  2 :
return sort__2302.call(this,comp,coll);
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
var sort_by__2304 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2305 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2304.call(this,keyfn,comp);
case  3 :
return sort_by__2305.call(this,keyfn,comp,coll);
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
var reduce__2307 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2308 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2307.call(this,f,val);
case  3 :
return reduce__2308.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2314 = (function (f,coll){
var temp__3723__auto____2310 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2310))
{var s__2311 = temp__3723__auto____2310;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2311),cljs.core.next.call(null,s__2311));
} else
{return f.call(null);
}
});
var seq_reduce__2315 = (function (f,val,coll){
var val__2312 = val;
var coll__2313 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2313))
{{
var G__2317 = f.call(null,val__2312,cljs.core.first.call(null,coll__2313));
var G__2318 = cljs.core.next.call(null,coll__2313);
val__2312 = G__2317;
coll__2313 = G__2318;
continue;
}
} else
{return val__2312;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2314.call(this,f,val);
case  3 :
return seq_reduce__2315.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2319 = null;
var G__2319__2320 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2319__2321 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2319 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2319__2320.call(this,coll,f);
case  3 :
return G__2319__2321.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2319;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2323 = (function (){
return 0;
});
var _PLUS___2324 = (function (x){
return x;
});
var _PLUS___2325 = (function (x,y){
return (x + y);
});
var _PLUS___2326 = (function() { 
var G__2328__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2328 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2328__delegate.call(this, x, y, more);
};
G__2328.cljs$lang$maxFixedArity = 2;
G__2328.cljs$lang$applyTo = (function (arglist__2329){
var x = cljs.core.first(arglist__2329);
var y = cljs.core.first(cljs.core.next(arglist__2329));
var more = cljs.core.rest(cljs.core.next(arglist__2329));
return G__2328__delegate.call(this, x, y, more);
});
return G__2328;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2323.call(this);
case  1 :
return _PLUS___2324.call(this,x);
case  2 :
return _PLUS___2325.call(this,x,y);
default:
return _PLUS___2326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2326.cljs$lang$applyTo;
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
var ___2330 = (function (x){
return (- x);
});
var ___2331 = (function (x,y){
return (x - y);
});
var ___2332 = (function() { 
var G__2334__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2334 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2334__delegate.call(this, x, y, more);
};
G__2334.cljs$lang$maxFixedArity = 2;
G__2334.cljs$lang$applyTo = (function (arglist__2335){
var x = cljs.core.first(arglist__2335);
var y = cljs.core.first(cljs.core.next(arglist__2335));
var more = cljs.core.rest(cljs.core.next(arglist__2335));
return G__2334__delegate.call(this, x, y, more);
});
return G__2334;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2330.call(this,x);
case  2 :
return ___2331.call(this,x,y);
default:
return ___2332.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2332.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2336 = (function (){
return 1;
});
var _STAR___2337 = (function (x){
return x;
});
var _STAR___2338 = (function (x,y){
return (x * y);
});
var _STAR___2339 = (function() { 
var G__2341__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2341 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2341__delegate.call(this, x, y, more);
};
G__2341.cljs$lang$maxFixedArity = 2;
G__2341.cljs$lang$applyTo = (function (arglist__2342){
var x = cljs.core.first(arglist__2342);
var y = cljs.core.first(cljs.core.next(arglist__2342));
var more = cljs.core.rest(cljs.core.next(arglist__2342));
return G__2341__delegate.call(this, x, y, more);
});
return G__2341;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2336.call(this);
case  1 :
return _STAR___2337.call(this,x);
case  2 :
return _STAR___2338.call(this,x,y);
default:
return _STAR___2339.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2339.cljs$lang$applyTo;
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
var _SLASH___2343 = (function (x){
return (1 / x);
});
var _SLASH___2344 = (function (x,y){
return (x / y);
});
var _SLASH___2345 = (function() { 
var G__2347__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2347 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2347__delegate.call(this, x, y, more);
};
G__2347.cljs$lang$maxFixedArity = 2;
G__2347.cljs$lang$applyTo = (function (arglist__2348){
var x = cljs.core.first(arglist__2348);
var y = cljs.core.first(cljs.core.next(arglist__2348));
var more = cljs.core.rest(cljs.core.next(arglist__2348));
return G__2347__delegate.call(this, x, y, more);
});
return G__2347;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2343.call(this,x);
case  2 :
return _SLASH___2344.call(this,x,y);
default:
return _SLASH___2345.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2345.cljs$lang$applyTo;
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
var _LT___2349 = (function (x){
return true;
});
var _LT___2350 = (function (x,y){
return (x < y);
});
var _LT___2351 = (function() { 
var G__2353__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2354 = y;
var G__2355 = cljs.core.first.call(null,more);
var G__2356 = cljs.core.next.call(null,more);
x = G__2354;
y = G__2355;
more = G__2356;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2353 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2353__delegate.call(this, x, y, more);
};
G__2353.cljs$lang$maxFixedArity = 2;
G__2353.cljs$lang$applyTo = (function (arglist__2357){
var x = cljs.core.first(arglist__2357);
var y = cljs.core.first(cljs.core.next(arglist__2357));
var more = cljs.core.rest(cljs.core.next(arglist__2357));
return G__2353__delegate.call(this, x, y, more);
});
return G__2353;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2349.call(this,x);
case  2 :
return _LT___2350.call(this,x,y);
default:
return _LT___2351.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2351.cljs$lang$applyTo;
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
var _LT__EQ___2358 = (function (x){
return true;
});
var _LT__EQ___2359 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2360 = (function() { 
var G__2362__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2363 = y;
var G__2364 = cljs.core.first.call(null,more);
var G__2365 = cljs.core.next.call(null,more);
x = G__2363;
y = G__2364;
more = G__2365;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2362 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2362__delegate.call(this, x, y, more);
};
G__2362.cljs$lang$maxFixedArity = 2;
G__2362.cljs$lang$applyTo = (function (arglist__2366){
var x = cljs.core.first(arglist__2366);
var y = cljs.core.first(cljs.core.next(arglist__2366));
var more = cljs.core.rest(cljs.core.next(arglist__2366));
return G__2362__delegate.call(this, x, y, more);
});
return G__2362;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2358.call(this,x);
case  2 :
return _LT__EQ___2359.call(this,x,y);
default:
return _LT__EQ___2360.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2360.cljs$lang$applyTo;
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
var _GT___2367 = (function (x){
return true;
});
var _GT___2368 = (function (x,y){
return (x > y);
});
var _GT___2369 = (function() { 
var G__2371__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2372 = y;
var G__2373 = cljs.core.first.call(null,more);
var G__2374 = cljs.core.next.call(null,more);
x = G__2372;
y = G__2373;
more = G__2374;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2371 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2371__delegate.call(this, x, y, more);
};
G__2371.cljs$lang$maxFixedArity = 2;
G__2371.cljs$lang$applyTo = (function (arglist__2375){
var x = cljs.core.first(arglist__2375);
var y = cljs.core.first(cljs.core.next(arglist__2375));
var more = cljs.core.rest(cljs.core.next(arglist__2375));
return G__2371__delegate.call(this, x, y, more);
});
return G__2371;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2367.call(this,x);
case  2 :
return _GT___2368.call(this,x,y);
default:
return _GT___2369.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2369.cljs$lang$applyTo;
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
var _GT__EQ___2376 = (function (x){
return true;
});
var _GT__EQ___2377 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2378 = (function() { 
var G__2380__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2381 = y;
var G__2382 = cljs.core.first.call(null,more);
var G__2383 = cljs.core.next.call(null,more);
x = G__2381;
y = G__2382;
more = G__2383;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2380 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2380__delegate.call(this, x, y, more);
};
G__2380.cljs$lang$maxFixedArity = 2;
G__2380.cljs$lang$applyTo = (function (arglist__2384){
var x = cljs.core.first(arglist__2384);
var y = cljs.core.first(cljs.core.next(arglist__2384));
var more = cljs.core.rest(cljs.core.next(arglist__2384));
return G__2380__delegate.call(this, x, y, more);
});
return G__2380;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2376.call(this,x);
case  2 :
return _GT__EQ___2377.call(this,x,y);
default:
return _GT__EQ___2378.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2378.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2385 = (function (x){
return x;
});
var max__2386 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2387 = (function() { 
var G__2389__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2389 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2389__delegate.call(this, x, y, more);
};
G__2389.cljs$lang$maxFixedArity = 2;
G__2389.cljs$lang$applyTo = (function (arglist__2390){
var x = cljs.core.first(arglist__2390);
var y = cljs.core.first(cljs.core.next(arglist__2390));
var more = cljs.core.rest(cljs.core.next(arglist__2390));
return G__2389__delegate.call(this, x, y, more);
});
return G__2389;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2385.call(this,x);
case  2 :
return max__2386.call(this,x,y);
default:
return max__2387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2387.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2391 = (function (x){
return x;
});
var min__2392 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2393 = (function() { 
var G__2395__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2395 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2395__delegate.call(this, x, y, more);
};
G__2395.cljs$lang$maxFixedArity = 2;
G__2395.cljs$lang$applyTo = (function (arglist__2396){
var x = cljs.core.first(arglist__2396);
var y = cljs.core.first(cljs.core.next(arglist__2396));
var more = cljs.core.rest(cljs.core.next(arglist__2396));
return G__2395__delegate.call(this, x, y, more);
});
return G__2395;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2391.call(this,x);
case  2 :
return min__2392.call(this,x,y);
default:
return min__2393.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2393.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
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
var rem__2397 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2397) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2398 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2398));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2399 = (function (){
return Math.random.call(null);
});
var rand__2400 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2399.call(this);
case  1 :
return rand__2400.call(this,n);
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
return (~x);
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
var _EQ__EQ___2402 = (function (x){
return true;
});
var _EQ__EQ___2403 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2404 = (function() { 
var G__2406__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2407 = y;
var G__2408 = cljs.core.first.call(null,more);
var G__2409 = cljs.core.next.call(null,more);
x = G__2407;
y = G__2408;
more = G__2409;
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
var G__2406 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2406__delegate.call(this, x, y, more);
};
G__2406.cljs$lang$maxFixedArity = 2;
G__2406.cljs$lang$applyTo = (function (arglist__2410){
var x = cljs.core.first(arglist__2410);
var y = cljs.core.first(cljs.core.next(arglist__2410));
var more = cljs.core.rest(cljs.core.next(arglist__2410));
return G__2406__delegate.call(this, x, y, more);
});
return G__2406;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2402.call(this,x);
case  2 :
return _EQ__EQ___2403.call(this,x,y);
default:
return _EQ__EQ___2404.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2404.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
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
var n__2411 = n;
var xs__2412 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2413 = xs__2412;

if(cljs.core.truth_(and__3574__auto____2413))
{return cljs.core.pos_QMARK_.call(null,n__2411);
} else
{return and__3574__auto____2413;
}
})()))
{{
var G__2414 = cljs.core.dec.call(null,n__2411);
var G__2415 = cljs.core.next.call(null,xs__2412);
n__2411 = G__2414;
xs__2412 = G__2415;
continue;
}
} else
{return xs__2412;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2420 = null;
var G__2420__2421 = (function (coll,n){
var temp__3723__auto____2416 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2416))
{var xs__2417 = temp__3723__auto____2416;

return cljs.core.first.call(null,xs__2417);
} else
{throw "Index out of bounds";
}
});
var G__2420__2422 = (function (coll,n,not_found){
var temp__3723__auto____2418 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2418))
{var xs__2419 = temp__3723__auto____2418;

return cljs.core.first.call(null,xs__2419);
} else
{return not_found;
}
});
G__2420 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2420__2421.call(this,coll,n);
case  3 :
return G__2420__2422.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2420;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2424 = (function (){
return "";
});
var str__2425 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2426 = (function() { 
var G__2428__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2429 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2430 = cljs.core.next.call(null,more);
sb = G__2429;
more = G__2430;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2428 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2428__delegate.call(this, x, ys);
};
G__2428.cljs$lang$maxFixedArity = 1;
G__2428.cljs$lang$applyTo = (function (arglist__2431){
var x = cljs.core.first(arglist__2431);
var ys = cljs.core.rest(arglist__2431);
return G__2428__delegate.call(this, x, ys);
});
return G__2428;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2424.call(this);
case  1 :
return str__2425.call(this,x);
default:
return str__2426.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2426.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2432 = (function (s,start){
return s.substring(start);
});
var subs__2433 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2432.call(this,s,start);
case  3 :
return subs__2433.call(this,s,start,end);
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
var symbol__2435 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2436 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2435.call(this,ns);
case  2 :
return symbol__2436.call(this,ns,name);
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
var keyword__2438 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2439 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2438.call(this,ns);
case  2 :
return keyword__2439.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2441 = cljs.core.seq.call(null,x);
var ys__2442 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2441)))
{return cljs.core.nil_QMARK_.call(null,ys__2442);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2442)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2441),cljs.core.first.call(null,ys__2442))))
{{
var G__2443 = cljs.core.next.call(null,xs__2441);
var G__2444 = cljs.core.next.call(null,ys__2442);
xs__2441 = G__2443;
ys__2442 = G__2444;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
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
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2445_SHARP_,p2__2446_SHARP_){
return cljs.core.hash_combine.call(null,p1__2445_SHARP_,cljs.core.hash.call(null,p2__2446_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
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
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2447 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2448 = this;
return (new cljs.core.List(this__2448.meta,o,coll,cljs.core.inc.call(null,this__2448.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2449 = this;
return this__2449.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2450 = this;
return this__2450.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2451 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2452 = this;
return this__2452.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2453 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2454 = this;
return (new cljs.core.List(meta,this__2454.first,this__2454.rest,this__2454.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2455 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2456 = this;
return this__2456.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2457 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2458 = this;
return this__2458.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2459 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2460 = this;
return (new cljs.core.List(this__2460.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2461 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2462 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2463 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2464 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2465 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2466 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2467 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2468 = this;
return this__2468.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2469 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2470 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
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
list.cljs$lang$applyTo = (function (arglist__2471){
var items = cljs.core.seq( arglist__2471 );;
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
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2472 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2473 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2474 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2475 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2475.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2476 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2477 = this;
return this__2477.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2478 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2478.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2478.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2479 = this;
return this__2479.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2480 = this;
return (new cljs.core.Cons(meta,this__2480.first,this__2480.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2481 = null;
var G__2481__2482 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2481__2483 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2481 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2481__2482.call(this,string,f);
case  3 :
return G__2481__2483.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2481;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2485 = null;
var G__2485__2486 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2485__2487 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2485 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2485__2486.call(this,string,k);
case  3 :
return G__2485__2487.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2485;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2489 = null;
var G__2489__2490 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2489__2491 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2489 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2489__2490.call(this,string,n);
case  3 :
return G__2489__2491.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2489;
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
String['prototype']['call'] = (function() {
var G__2493 = null;
var G__2493__2494 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2493__2495 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2493 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2493__2494.call(this,_,coll);
case  3 :
return G__2493__2495.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2493;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2497 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2497;
} else
{lazy_seq.x = x__2497.call(null);
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
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2498 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2499 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2500 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2501 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2501.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2502 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2503 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2504 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2505 = this;
return this__2505.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2506 = this;
return (new cljs.core.LazySeq(meta,this__2506.realized,this__2506.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2507 = cljs.core.array.call(null);

var s__2508 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2508)))
{ary__2507.push(cljs.core.first.call(null,s__2508));
{
var G__2509 = cljs.core.next.call(null,s__2508);
s__2508 = G__2509;
continue;
}
} else
{return ary__2507;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2510 = s;
var i__2511 = n;
var sum__2512 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2513 = cljs.core.pos_QMARK_.call(null,i__2511);

if(cljs.core.truth_(and__3574__auto____2513))
{return cljs.core.seq.call(null,s__2510);
} else
{return and__3574__auto____2513;
}
})()))
{{
var G__2514 = cljs.core.next.call(null,s__2510);
var G__2515 = cljs.core.dec.call(null,i__2511);
var G__2516 = cljs.core.inc.call(null,sum__2512);
s__2510 = G__2514;
i__2511 = G__2515;
sum__2512 = G__2516;
continue;
}
} else
{return sum__2512;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
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
var concat__2520 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2521 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2522 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2517 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2517))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2517),concat.call(null,cljs.core.rest.call(null,s__2517),y));
} else
{return y;
}
})));
});
var concat__2523 = (function() { 
var G__2525__delegate = function (x,y,zs){
var cat__2519 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2518 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2518))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2518),cat.call(null,cljs.core.rest.call(null,xys__2518),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2519.call(null,concat.call(null,x,y),zs);
};
var G__2525 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2525__delegate.call(this, x, y, zs);
};
G__2525.cljs$lang$maxFixedArity = 2;
G__2525.cljs$lang$applyTo = (function (arglist__2526){
var x = cljs.core.first(arglist__2526);
var y = cljs.core.first(cljs.core.next(arglist__2526));
var zs = cljs.core.rest(cljs.core.next(arglist__2526));
return G__2525__delegate.call(this, x, y, zs);
});
return G__2525;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2520.call(this);
case  1 :
return concat__2521.call(this,x);
case  2 :
return concat__2522.call(this,x,y);
default:
return concat__2523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2523.cljs$lang$applyTo;
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
var list_STAR___2527 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2528 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2529 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2530 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2531 = (function() { 
var G__2533__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2533 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2533__delegate.call(this, a, b, c, d, more);
};
G__2533.cljs$lang$maxFixedArity = 4;
G__2533.cljs$lang$applyTo = (function (arglist__2534){
var a = cljs.core.first(arglist__2534);
var b = cljs.core.first(cljs.core.next(arglist__2534));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2534)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2534))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2534))));
return G__2533__delegate.call(this, a, b, c, d, more);
});
return G__2533;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2527.call(this,a);
case  2 :
return list_STAR___2528.call(this,a,b);
case  3 :
return list_STAR___2529.call(this,a,b,c);
case  4 :
return list_STAR___2530.call(this,a,b,c,d);
default:
return list_STAR___2531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2531.cljs$lang$applyTo;
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
var apply__2544 = (function (f,args){
var fixed_arity__2535 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2535)),fixed_arity__2535)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2545 = (function (f,x,args){
var arglist__2536 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2537 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2536,fixed_arity__2537),fixed_arity__2537)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2536));
} else
{return f.cljs$lang$applyTo(arglist__2536);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2536));
}
});
var apply__2546 = (function (f,x,y,args){
var arglist__2538 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2539 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2538,fixed_arity__2539),fixed_arity__2539)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2538));
} else
{return f.cljs$lang$applyTo(arglist__2538);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2538));
}
});
var apply__2547 = (function (f,x,y,z,args){
var arglist__2540 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2541 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2540,fixed_arity__2541),fixed_arity__2541)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2540));
} else
{return f.cljs$lang$applyTo(arglist__2540);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2540));
}
});
var apply__2548 = (function() { 
var G__2550__delegate = function (f,a,b,c,d,args){
var arglist__2542 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2543 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2542,fixed_arity__2543),fixed_arity__2543)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2542));
} else
{return f.cljs$lang$applyTo(arglist__2542);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2542));
}
};
var G__2550 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2550__delegate.call(this, f, a, b, c, d, args);
};
G__2550.cljs$lang$maxFixedArity = 5;
G__2550.cljs$lang$applyTo = (function (arglist__2551){
var f = cljs.core.first(arglist__2551);
var a = cljs.core.first(cljs.core.next(arglist__2551));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2551)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2551))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2551)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2551)))));
return G__2550__delegate.call(this, f, a, b, c, d, args);
});
return G__2550;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2544.call(this,f,a);
case  3 :
return apply__2545.call(this,f,a,b);
case  4 :
return apply__2546.call(this,f,a,b,c);
case  5 :
return apply__2547.call(this,f,a,b,c,d);
default:
return apply__2548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2548.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__2552){
var obj = cljs.core.first(arglist__2552);
var f = cljs.core.first(cljs.core.next(arglist__2552));
var args = cljs.core.rest(cljs.core.next(arglist__2552));
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
var not_EQ___2553 = (function (x){
return false;
});
var not_EQ___2554 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2555 = (function() { 
var G__2557__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2557 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2557__delegate.call(this, x, y, more);
};
G__2557.cljs$lang$maxFixedArity = 2;
G__2557.cljs$lang$applyTo = (function (arglist__2558){
var x = cljs.core.first(arglist__2558);
var y = cljs.core.first(cljs.core.next(arglist__2558));
var more = cljs.core.rest(cljs.core.next(arglist__2558));
return G__2557__delegate.call(this, x, y, more);
});
return G__2557;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2553.call(this,x);
case  2 :
return not_EQ___2554.call(this,x,y);
default:
return not_EQ___2555.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2555.cljs$lang$applyTo;
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
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2559 = pred;
var G__2560 = cljs.core.next.call(null,coll);
pred = G__2559;
coll = G__2560;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
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
{var or__3576__auto____2561 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2561))
{return or__3576__auto____2561;
} else
{{
var G__2562 = pred;
var G__2563 = cljs.core.next.call(null,coll);
pred = G__2562;
coll = G__2563;
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
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
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
var G__2564 = null;
var G__2564__2565 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2564__2566 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2564__2567 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2564__2568 = (function() { 
var G__2570__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2570 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2570__delegate.call(this, x, y, zs);
};
G__2570.cljs$lang$maxFixedArity = 2;
G__2570.cljs$lang$applyTo = (function (arglist__2571){
var x = cljs.core.first(arglist__2571);
var y = cljs.core.first(cljs.core.next(arglist__2571));
var zs = cljs.core.rest(cljs.core.next(arglist__2571));
return G__2570__delegate.call(this, x, y, zs);
});
return G__2570;
})()
;
G__2564 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2564__2565.call(this);
case  1 :
return G__2564__2566.call(this,x);
case  2 :
return G__2564__2567.call(this,x,y);
default:
return G__2564__2568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2564.cljs$lang$maxFixedArity = 2;
G__2564.cljs$lang$applyTo = G__2564__2568.cljs$lang$applyTo;
return G__2564;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2572__delegate = function (args){
return x;
};
var G__2572 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2572__delegate.call(this, args);
};
G__2572.cljs$lang$maxFixedArity = 0;
G__2572.cljs$lang$applyTo = (function (arglist__2573){
var args = cljs.core.seq( arglist__2573 );;
return G__2572__delegate.call(this, args);
});
return G__2572;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2577 = (function (){
return cljs.core.identity;
});
var comp__2578 = (function (f){
return f;
});
var comp__2579 = (function (f,g){
return (function() {
var G__2583 = null;
var G__2583__2584 = (function (){
return f.call(null,g.call(null));
});
var G__2583__2585 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2583__2586 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2583__2587 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2583__2588 = (function() { 
var G__2590__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2590 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2590__delegate.call(this, x, y, z, args);
};
G__2590.cljs$lang$maxFixedArity = 3;
G__2590.cljs$lang$applyTo = (function (arglist__2591){
var x = cljs.core.first(arglist__2591);
var y = cljs.core.first(cljs.core.next(arglist__2591));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2591)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2591)));
return G__2590__delegate.call(this, x, y, z, args);
});
return G__2590;
})()
;
G__2583 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2583__2584.call(this);
case  1 :
return G__2583__2585.call(this,x);
case  2 :
return G__2583__2586.call(this,x,y);
case  3 :
return G__2583__2587.call(this,x,y,z);
default:
return G__2583__2588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2583.cljs$lang$maxFixedArity = 3;
G__2583.cljs$lang$applyTo = G__2583__2588.cljs$lang$applyTo;
return G__2583;
})()
});
var comp__2580 = (function (f,g,h){
return (function() {
var G__2592 = null;
var G__2592__2593 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2592__2594 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2592__2595 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2592__2596 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2592__2597 = (function() { 
var G__2599__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2599 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2599__delegate.call(this, x, y, z, args);
};
G__2599.cljs$lang$maxFixedArity = 3;
G__2599.cljs$lang$applyTo = (function (arglist__2600){
var x = cljs.core.first(arglist__2600);
var y = cljs.core.first(cljs.core.next(arglist__2600));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2600)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2600)));
return G__2599__delegate.call(this, x, y, z, args);
});
return G__2599;
})()
;
G__2592 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2592__2593.call(this);
case  1 :
return G__2592__2594.call(this,x);
case  2 :
return G__2592__2595.call(this,x,y);
case  3 :
return G__2592__2596.call(this,x,y,z);
default:
return G__2592__2597.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2592.cljs$lang$maxFixedArity = 3;
G__2592.cljs$lang$applyTo = G__2592__2597.cljs$lang$applyTo;
return G__2592;
})()
});
var comp__2581 = (function() { 
var G__2601__delegate = function (f1,f2,f3,fs){
var fs__2574 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2602__delegate = function (args){
var ret__2575 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2574),args);
var fs__2576 = cljs.core.next.call(null,fs__2574);

while(true){
if(cljs.core.truth_(fs__2576))
{{
var G__2603 = cljs.core.first.call(null,fs__2576).call(null,ret__2575);
var G__2604 = cljs.core.next.call(null,fs__2576);
ret__2575 = G__2603;
fs__2576 = G__2604;
continue;
}
} else
{return ret__2575;
}
break;
}
};
var G__2602 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2602__delegate.call(this, args);
};
G__2602.cljs$lang$maxFixedArity = 0;
G__2602.cljs$lang$applyTo = (function (arglist__2605){
var args = cljs.core.seq( arglist__2605 );;
return G__2602__delegate.call(this, args);
});
return G__2602;
})()
;
};
var G__2601 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2601__delegate.call(this, f1, f2, f3, fs);
};
G__2601.cljs$lang$maxFixedArity = 3;
G__2601.cljs$lang$applyTo = (function (arglist__2606){
var f1 = cljs.core.first(arglist__2606);
var f2 = cljs.core.first(cljs.core.next(arglist__2606));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2606)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2606)));
return G__2601__delegate.call(this, f1, f2, f3, fs);
});
return G__2601;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2577.call(this);
case  1 :
return comp__2578.call(this,f1);
case  2 :
return comp__2579.call(this,f1,f2);
case  3 :
return comp__2580.call(this,f1,f2,f3);
default:
return comp__2581.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2581.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2607 = (function (f,arg1){
return (function() { 
var G__2612__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2612 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2612__delegate.call(this, args);
};
G__2612.cljs$lang$maxFixedArity = 0;
G__2612.cljs$lang$applyTo = (function (arglist__2613){
var args = cljs.core.seq( arglist__2613 );;
return G__2612__delegate.call(this, args);
});
return G__2612;
})()
;
});
var partial__2608 = (function (f,arg1,arg2){
return (function() { 
var G__2614__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2614 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2614__delegate.call(this, args);
};
G__2614.cljs$lang$maxFixedArity = 0;
G__2614.cljs$lang$applyTo = (function (arglist__2615){
var args = cljs.core.seq( arglist__2615 );;
return G__2614__delegate.call(this, args);
});
return G__2614;
})()
;
});
var partial__2609 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2616__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2616 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2616__delegate.call(this, args);
};
G__2616.cljs$lang$maxFixedArity = 0;
G__2616.cljs$lang$applyTo = (function (arglist__2617){
var args = cljs.core.seq( arglist__2617 );;
return G__2616__delegate.call(this, args);
});
return G__2616;
})()
;
});
var partial__2610 = (function() { 
var G__2618__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2619__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2619 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2619__delegate.call(this, args);
};
G__2619.cljs$lang$maxFixedArity = 0;
G__2619.cljs$lang$applyTo = (function (arglist__2620){
var args = cljs.core.seq( arglist__2620 );;
return G__2619__delegate.call(this, args);
});
return G__2619;
})()
;
};
var G__2618 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2618__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2618.cljs$lang$maxFixedArity = 4;
G__2618.cljs$lang$applyTo = (function (arglist__2621){
var f = cljs.core.first(arglist__2621);
var arg1 = cljs.core.first(cljs.core.next(arglist__2621));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2621)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2621))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2621))));
return G__2618__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2618;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2607.call(this,f,arg1);
case  3 :
return partial__2608.call(this,f,arg1,arg2);
case  4 :
return partial__2609.call(this,f,arg1,arg2,arg3);
default:
return partial__2610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2610.cljs$lang$applyTo;
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
var fnil__2622 = (function (f,x){
return (function() {
var G__2626 = null;
var G__2626__2627 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2626__2628 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2626__2629 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2626__2630 = (function() { 
var G__2632__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2632 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2632__delegate.call(this, a, b, c, ds);
};
G__2632.cljs$lang$maxFixedArity = 3;
G__2632.cljs$lang$applyTo = (function (arglist__2633){
var a = cljs.core.first(arglist__2633);
var b = cljs.core.first(cljs.core.next(arglist__2633));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2633)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2633)));
return G__2632__delegate.call(this, a, b, c, ds);
});
return G__2632;
})()
;
G__2626 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2626__2627.call(this,a);
case  2 :
return G__2626__2628.call(this,a,b);
case  3 :
return G__2626__2629.call(this,a,b,c);
default:
return G__2626__2630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2626.cljs$lang$maxFixedArity = 3;
G__2626.cljs$lang$applyTo = G__2626__2630.cljs$lang$applyTo;
return G__2626;
})()
});
var fnil__2623 = (function (f,x,y){
return (function() {
var G__2634 = null;
var G__2634__2635 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2634__2636 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2634__2637 = (function() { 
var G__2639__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2639 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2639__delegate.call(this, a, b, c, ds);
};
G__2639.cljs$lang$maxFixedArity = 3;
G__2639.cljs$lang$applyTo = (function (arglist__2640){
var a = cljs.core.first(arglist__2640);
var b = cljs.core.first(cljs.core.next(arglist__2640));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2640)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2640)));
return G__2639__delegate.call(this, a, b, c, ds);
});
return G__2639;
})()
;
G__2634 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2634__2635.call(this,a,b);
case  3 :
return G__2634__2636.call(this,a,b,c);
default:
return G__2634__2637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2634.cljs$lang$maxFixedArity = 3;
G__2634.cljs$lang$applyTo = G__2634__2637.cljs$lang$applyTo;
return G__2634;
})()
});
var fnil__2624 = (function (f,x,y,z){
return (function() {
var G__2641 = null;
var G__2641__2642 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2641__2643 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2641__2644 = (function() { 
var G__2646__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2646 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2646__delegate.call(this, a, b, c, ds);
};
G__2646.cljs$lang$maxFixedArity = 3;
G__2646.cljs$lang$applyTo = (function (arglist__2647){
var a = cljs.core.first(arglist__2647);
var b = cljs.core.first(cljs.core.next(arglist__2647));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2647)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2647)));
return G__2646__delegate.call(this, a, b, c, ds);
});
return G__2646;
})()
;
G__2641 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2641__2642.call(this,a,b);
case  3 :
return G__2641__2643.call(this,a,b,c);
default:
return G__2641__2644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2641.cljs$lang$maxFixedArity = 3;
G__2641.cljs$lang$applyTo = G__2641__2644.cljs$lang$applyTo;
return G__2641;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2622.call(this,f,x);
case  3 :
return fnil__2623.call(this,f,x,y);
case  4 :
return fnil__2624.call(this,f,x,y,z);
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
var mapi__2650 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2648 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2648))
{var s__2649 = temp__3726__auto____2648;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2649)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2649)));
} else
{return null;
}
})));
});

return mapi__2650.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2651 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2651))
{var s__2652 = temp__3726__auto____2651;

var x__2653 = f.call(null,cljs.core.first.call(null,s__2652));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2653)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2652));
} else
{return cljs.core.cons.call(null,x__2653,keep.call(null,f,cljs.core.rest.call(null,s__2652)));
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
var keepi__2663 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2660 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2660))
{var s__2661 = temp__3726__auto____2660;

var x__2662 = f.call(null,idx,cljs.core.first.call(null,s__2661));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2662)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2661));
} else
{return cljs.core.cons.call(null,x__2662,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2661)));
}
} else
{return null;
}
})));
});

return keepi__2663.call(null,0,coll);
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
var every_pred__2708 = (function (p){
return (function() {
var ep1 = null;
var ep1__2713 = (function (){
return true;
});
var ep1__2714 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2715 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2670 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2670))
{return p.call(null,y);
} else
{return and__3574__auto____2670;
}
})());
});
var ep1__2716 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2671 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2671))
{var and__3574__auto____2672 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2672))
{return p.call(null,z);
} else
{return and__3574__auto____2672;
}
} else
{return and__3574__auto____2671;
}
})());
});
var ep1__2717 = (function() { 
var G__2719__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2673 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2673))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2673;
}
})());
};
var G__2719 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2719__delegate.call(this, x, y, z, args);
};
G__2719.cljs$lang$maxFixedArity = 3;
G__2719.cljs$lang$applyTo = (function (arglist__2720){
var x = cljs.core.first(arglist__2720);
var y = cljs.core.first(cljs.core.next(arglist__2720));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2720)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2720)));
return G__2719__delegate.call(this, x, y, z, args);
});
return G__2719;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2713.call(this);
case  1 :
return ep1__2714.call(this,x);
case  2 :
return ep1__2715.call(this,x,y);
case  3 :
return ep1__2716.call(this,x,y,z);
default:
return ep1__2717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2717.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2709 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2721 = (function (){
return true;
});
var ep2__2722 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2674 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2674))
{return p2.call(null,x);
} else
{return and__3574__auto____2674;
}
})());
});
var ep2__2723 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2675 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2675))
{var and__3574__auto____2676 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2676))
{var and__3574__auto____2677 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2677))
{return p2.call(null,y);
} else
{return and__3574__auto____2677;
}
} else
{return and__3574__auto____2676;
}
} else
{return and__3574__auto____2675;
}
})());
});
var ep2__2724 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2678 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2678))
{var and__3574__auto____2679 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2679))
{var and__3574__auto____2680 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2680))
{var and__3574__auto____2681 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2681))
{var and__3574__auto____2682 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2682))
{return p2.call(null,z);
} else
{return and__3574__auto____2682;
}
} else
{return and__3574__auto____2681;
}
} else
{return and__3574__auto____2680;
}
} else
{return and__3574__auto____2679;
}
} else
{return and__3574__auto____2678;
}
})());
});
var ep2__2725 = (function() { 
var G__2727__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2683 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2683))
{return cljs.core.every_QMARK_.call(null,(function (p1__2654_SHARP_){
var and__3574__auto____2684 = p1.call(null,p1__2654_SHARP_);

if(cljs.core.truth_(and__3574__auto____2684))
{return p2.call(null,p1__2654_SHARP_);
} else
{return and__3574__auto____2684;
}
}),args);
} else
{return and__3574__auto____2683;
}
})());
};
var G__2727 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2727__delegate.call(this, x, y, z, args);
};
G__2727.cljs$lang$maxFixedArity = 3;
G__2727.cljs$lang$applyTo = (function (arglist__2728){
var x = cljs.core.first(arglist__2728);
var y = cljs.core.first(cljs.core.next(arglist__2728));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2728)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2728)));
return G__2727__delegate.call(this, x, y, z, args);
});
return G__2727;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2721.call(this);
case  1 :
return ep2__2722.call(this,x);
case  2 :
return ep2__2723.call(this,x,y);
case  3 :
return ep2__2724.call(this,x,y,z);
default:
return ep2__2725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2725.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2710 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2729 = (function (){
return true;
});
var ep3__2730 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2685 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2685))
{var and__3574__auto____2686 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2686))
{return p3.call(null,x);
} else
{return and__3574__auto____2686;
}
} else
{return and__3574__auto____2685;
}
})());
});
var ep3__2731 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2687 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2687))
{var and__3574__auto____2688 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2688))
{var and__3574__auto____2689 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2689))
{var and__3574__auto____2690 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2690))
{var and__3574__auto____2691 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2691))
{return p3.call(null,y);
} else
{return and__3574__auto____2691;
}
} else
{return and__3574__auto____2690;
}
} else
{return and__3574__auto____2689;
}
} else
{return and__3574__auto____2688;
}
} else
{return and__3574__auto____2687;
}
})());
});
var ep3__2732 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2692 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2692))
{var and__3574__auto____2693 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2693))
{var and__3574__auto____2694 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2694))
{var and__3574__auto____2695 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2695))
{var and__3574__auto____2696 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2696))
{var and__3574__auto____2697 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2697))
{var and__3574__auto____2698 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2698))
{var and__3574__auto____2699 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2699))
{return p3.call(null,z);
} else
{return and__3574__auto____2699;
}
} else
{return and__3574__auto____2698;
}
} else
{return and__3574__auto____2697;
}
} else
{return and__3574__auto____2696;
}
} else
{return and__3574__auto____2695;
}
} else
{return and__3574__auto____2694;
}
} else
{return and__3574__auto____2693;
}
} else
{return and__3574__auto____2692;
}
})());
});
var ep3__2733 = (function() { 
var G__2735__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2700 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2700))
{return cljs.core.every_QMARK_.call(null,(function (p1__2655_SHARP_){
var and__3574__auto____2701 = p1.call(null,p1__2655_SHARP_);

if(cljs.core.truth_(and__3574__auto____2701))
{var and__3574__auto____2702 = p2.call(null,p1__2655_SHARP_);

if(cljs.core.truth_(and__3574__auto____2702))
{return p3.call(null,p1__2655_SHARP_);
} else
{return and__3574__auto____2702;
}
} else
{return and__3574__auto____2701;
}
}),args);
} else
{return and__3574__auto____2700;
}
})());
};
var G__2735 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2735__delegate.call(this, x, y, z, args);
};
G__2735.cljs$lang$maxFixedArity = 3;
G__2735.cljs$lang$applyTo = (function (arglist__2736){
var x = cljs.core.first(arglist__2736);
var y = cljs.core.first(cljs.core.next(arglist__2736));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2736)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2736)));
return G__2735__delegate.call(this, x, y, z, args);
});
return G__2735;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2729.call(this);
case  1 :
return ep3__2730.call(this,x);
case  2 :
return ep3__2731.call(this,x,y);
case  3 :
return ep3__2732.call(this,x,y,z);
default:
return ep3__2733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2733.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2711 = (function() { 
var G__2737__delegate = function (p1,p2,p3,ps){
var ps__2703 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2738 = (function (){
return true;
});
var epn__2739 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2656_SHARP_){
return p1__2656_SHARP_.call(null,x);
}),ps__2703);
});
var epn__2740 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2657_SHARP_){
var and__3574__auto____2704 = p1__2657_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2704))
{return p1__2657_SHARP_.call(null,y);
} else
{return and__3574__auto____2704;
}
}),ps__2703);
});
var epn__2741 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2658_SHARP_){
var and__3574__auto____2705 = p1__2658_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2705))
{var and__3574__auto____2706 = p1__2658_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2706))
{return p1__2658_SHARP_.call(null,z);
} else
{return and__3574__auto____2706;
}
} else
{return and__3574__auto____2705;
}
}),ps__2703);
});
var epn__2742 = (function() { 
var G__2744__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2707 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2707))
{return cljs.core.every_QMARK_.call(null,(function (p1__2659_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2659_SHARP_,args);
}),ps__2703);
} else
{return and__3574__auto____2707;
}
})());
};
var G__2744 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2744__delegate.call(this, x, y, z, args);
};
G__2744.cljs$lang$maxFixedArity = 3;
G__2744.cljs$lang$applyTo = (function (arglist__2745){
var x = cljs.core.first(arglist__2745);
var y = cljs.core.first(cljs.core.next(arglist__2745));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2745)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2745)));
return G__2744__delegate.call(this, x, y, z, args);
});
return G__2744;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2738.call(this);
case  1 :
return epn__2739.call(this,x);
case  2 :
return epn__2740.call(this,x,y);
case  3 :
return epn__2741.call(this,x,y,z);
default:
return epn__2742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2742.cljs$lang$applyTo;
return epn;
})()
};
var G__2737 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2737__delegate.call(this, p1, p2, p3, ps);
};
G__2737.cljs$lang$maxFixedArity = 3;
G__2737.cljs$lang$applyTo = (function (arglist__2746){
var p1 = cljs.core.first(arglist__2746);
var p2 = cljs.core.first(cljs.core.next(arglist__2746));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2746)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2746)));
return G__2737__delegate.call(this, p1, p2, p3, ps);
});
return G__2737;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2708.call(this,p1);
case  2 :
return every_pred__2709.call(this,p1,p2);
case  3 :
return every_pred__2710.call(this,p1,p2,p3);
default:
return every_pred__2711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2711.cljs$lang$applyTo;
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
var some_fn__2786 = (function (p){
return (function() {
var sp1 = null;
var sp1__2791 = (function (){
return null;
});
var sp1__2792 = (function (x){
return p.call(null,x);
});
var sp1__2793 = (function (x,y){
var or__3576__auto____2748 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2748))
{return or__3576__auto____2748;
} else
{return p.call(null,y);
}
});
var sp1__2794 = (function (x,y,z){
var or__3576__auto____2749 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2749))
{return or__3576__auto____2749;
} else
{var or__3576__auto____2750 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2750))
{return or__3576__auto____2750;
} else
{return p.call(null,z);
}
}
});
var sp1__2795 = (function() { 
var G__2797__delegate = function (x,y,z,args){
var or__3576__auto____2751 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2751))
{return or__3576__auto____2751;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2797 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2797__delegate.call(this, x, y, z, args);
};
G__2797.cljs$lang$maxFixedArity = 3;
G__2797.cljs$lang$applyTo = (function (arglist__2798){
var x = cljs.core.first(arglist__2798);
var y = cljs.core.first(cljs.core.next(arglist__2798));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2798)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2798)));
return G__2797__delegate.call(this, x, y, z, args);
});
return G__2797;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2791.call(this);
case  1 :
return sp1__2792.call(this,x);
case  2 :
return sp1__2793.call(this,x,y);
case  3 :
return sp1__2794.call(this,x,y,z);
default:
return sp1__2795.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2795.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2787 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2799 = (function (){
return null;
});
var sp2__2800 = (function (x){
var or__3576__auto____2752 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2752))
{return or__3576__auto____2752;
} else
{return p2.call(null,x);
}
});
var sp2__2801 = (function (x,y){
var or__3576__auto____2753 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2753))
{return or__3576__auto____2753;
} else
{var or__3576__auto____2754 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2754))
{return or__3576__auto____2754;
} else
{var or__3576__auto____2755 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2755))
{return or__3576__auto____2755;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2802 = (function (x,y,z){
var or__3576__auto____2756 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2756))
{return or__3576__auto____2756;
} else
{var or__3576__auto____2757 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2757))
{return or__3576__auto____2757;
} else
{var or__3576__auto____2758 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2758))
{return or__3576__auto____2758;
} else
{var or__3576__auto____2759 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2759))
{return or__3576__auto____2759;
} else
{var or__3576__auto____2760 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2760))
{return or__3576__auto____2760;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2803 = (function() { 
var G__2805__delegate = function (x,y,z,args){
var or__3576__auto____2761 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2761))
{return or__3576__auto____2761;
} else
{return cljs.core.some.call(null,(function (p1__2664_SHARP_){
var or__3576__auto____2762 = p1.call(null,p1__2664_SHARP_);

if(cljs.core.truth_(or__3576__auto____2762))
{return or__3576__auto____2762;
} else
{return p2.call(null,p1__2664_SHARP_);
}
}),args);
}
};
var G__2805 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2805__delegate.call(this, x, y, z, args);
};
G__2805.cljs$lang$maxFixedArity = 3;
G__2805.cljs$lang$applyTo = (function (arglist__2806){
var x = cljs.core.first(arglist__2806);
var y = cljs.core.first(cljs.core.next(arglist__2806));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2806)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2806)));
return G__2805__delegate.call(this, x, y, z, args);
});
return G__2805;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2799.call(this);
case  1 :
return sp2__2800.call(this,x);
case  2 :
return sp2__2801.call(this,x,y);
case  3 :
return sp2__2802.call(this,x,y,z);
default:
return sp2__2803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2803.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2788 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2807 = (function (){
return null;
});
var sp3__2808 = (function (x){
var or__3576__auto____2763 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2763))
{return or__3576__auto____2763;
} else
{var or__3576__auto____2764 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2764))
{return or__3576__auto____2764;
} else
{return p3.call(null,x);
}
}
});
var sp3__2809 = (function (x,y){
var or__3576__auto____2765 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2765))
{return or__3576__auto____2765;
} else
{var or__3576__auto____2766 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2766))
{return or__3576__auto____2766;
} else
{var or__3576__auto____2767 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2767))
{return or__3576__auto____2767;
} else
{var or__3576__auto____2768 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2768))
{return or__3576__auto____2768;
} else
{var or__3576__auto____2769 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2769))
{return or__3576__auto____2769;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2810 = (function (x,y,z){
var or__3576__auto____2770 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2770))
{return or__3576__auto____2770;
} else
{var or__3576__auto____2771 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2771))
{return or__3576__auto____2771;
} else
{var or__3576__auto____2772 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2772))
{return or__3576__auto____2772;
} else
{var or__3576__auto____2773 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2773))
{return or__3576__auto____2773;
} else
{var or__3576__auto____2774 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2774))
{return or__3576__auto____2774;
} else
{var or__3576__auto____2775 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2775))
{return or__3576__auto____2775;
} else
{var or__3576__auto____2776 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2776))
{return or__3576__auto____2776;
} else
{var or__3576__auto____2777 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2777))
{return or__3576__auto____2777;
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
var sp3__2811 = (function() { 
var G__2813__delegate = function (x,y,z,args){
var or__3576__auto____2778 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2778))
{return or__3576__auto____2778;
} else
{return cljs.core.some.call(null,(function (p1__2665_SHARP_){
var or__3576__auto____2779 = p1.call(null,p1__2665_SHARP_);

if(cljs.core.truth_(or__3576__auto____2779))
{return or__3576__auto____2779;
} else
{var or__3576__auto____2780 = p2.call(null,p1__2665_SHARP_);

if(cljs.core.truth_(or__3576__auto____2780))
{return or__3576__auto____2780;
} else
{return p3.call(null,p1__2665_SHARP_);
}
}
}),args);
}
};
var G__2813 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2813__delegate.call(this, x, y, z, args);
};
G__2813.cljs$lang$maxFixedArity = 3;
G__2813.cljs$lang$applyTo = (function (arglist__2814){
var x = cljs.core.first(arglist__2814);
var y = cljs.core.first(cljs.core.next(arglist__2814));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2814)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2814)));
return G__2813__delegate.call(this, x, y, z, args);
});
return G__2813;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2807.call(this);
case  1 :
return sp3__2808.call(this,x);
case  2 :
return sp3__2809.call(this,x,y);
case  3 :
return sp3__2810.call(this,x,y,z);
default:
return sp3__2811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2811.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2789 = (function() { 
var G__2815__delegate = function (p1,p2,p3,ps){
var ps__2781 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2816 = (function (){
return null;
});
var spn__2817 = (function (x){
return cljs.core.some.call(null,(function (p1__2666_SHARP_){
return p1__2666_SHARP_.call(null,x);
}),ps__2781);
});
var spn__2818 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2667_SHARP_){
var or__3576__auto____2782 = p1__2667_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2782))
{return or__3576__auto____2782;
} else
{return p1__2667_SHARP_.call(null,y);
}
}),ps__2781);
});
var spn__2819 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2668_SHARP_){
var or__3576__auto____2783 = p1__2668_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2783))
{return or__3576__auto____2783;
} else
{var or__3576__auto____2784 = p1__2668_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2784))
{return or__3576__auto____2784;
} else
{return p1__2668_SHARP_.call(null,z);
}
}
}),ps__2781);
});
var spn__2820 = (function() { 
var G__2822__delegate = function (x,y,z,args){
var or__3576__auto____2785 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2785))
{return or__3576__auto____2785;
} else
{return cljs.core.some.call(null,(function (p1__2669_SHARP_){
return cljs.core.some.call(null,p1__2669_SHARP_,args);
}),ps__2781);
}
};
var G__2822 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2822__delegate.call(this, x, y, z, args);
};
G__2822.cljs$lang$maxFixedArity = 3;
G__2822.cljs$lang$applyTo = (function (arglist__2823){
var x = cljs.core.first(arglist__2823);
var y = cljs.core.first(cljs.core.next(arglist__2823));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2823)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2823)));
return G__2822__delegate.call(this, x, y, z, args);
});
return G__2822;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2816.call(this);
case  1 :
return spn__2817.call(this,x);
case  2 :
return spn__2818.call(this,x,y);
case  3 :
return spn__2819.call(this,x,y,z);
default:
return spn__2820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2820.cljs$lang$applyTo;
return spn;
})()
};
var G__2815 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2815__delegate.call(this, p1, p2, p3, ps);
};
G__2815.cljs$lang$maxFixedArity = 3;
G__2815.cljs$lang$applyTo = (function (arglist__2824){
var p1 = cljs.core.first(arglist__2824);
var p2 = cljs.core.first(cljs.core.next(arglist__2824));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2824)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2824)));
return G__2815__delegate.call(this, p1, p2, p3, ps);
});
return G__2815;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2786.call(this,p1);
case  2 :
return some_fn__2787.call(this,p1,p2);
case  3 :
return some_fn__2788.call(this,p1,p2,p3);
default:
return some_fn__2789.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2789.cljs$lang$applyTo;
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
var map__2837 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2825 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2825))
{var s__2826 = temp__3726__auto____2825;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2826)),map.call(null,f,cljs.core.rest.call(null,s__2826)));
} else
{return null;
}
})));
});
var map__2838 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2827 = cljs.core.seq.call(null,c1);
var s2__2828 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2829 = s1__2827;

if(cljs.core.truth_(and__3574__auto____2829))
{return s2__2828;
} else
{return and__3574__auto____2829;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2827),cljs.core.first.call(null,s2__2828)),map.call(null,f,cljs.core.rest.call(null,s1__2827),cljs.core.rest.call(null,s2__2828)));
} else
{return null;
}
})));
});
var map__2839 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2830 = cljs.core.seq.call(null,c1);
var s2__2831 = cljs.core.seq.call(null,c2);
var s3__2832 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2833 = s1__2830;

if(cljs.core.truth_(and__3574__auto____2833))
{var and__3574__auto____2834 = s2__2831;

if(cljs.core.truth_(and__3574__auto____2834))
{return s3__2832;
} else
{return and__3574__auto____2834;
}
} else
{return and__3574__auto____2833;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2830),cljs.core.first.call(null,s2__2831),cljs.core.first.call(null,s3__2832)),map.call(null,f,cljs.core.rest.call(null,s1__2830),cljs.core.rest.call(null,s2__2831),cljs.core.rest.call(null,s3__2832)));
} else
{return null;
}
})));
});
var map__2840 = (function() { 
var G__2842__delegate = function (f,c1,c2,c3,colls){
var step__2836 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2835 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2835)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2835),step.call(null,map.call(null,cljs.core.rest,ss__2835)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2747_SHARP_){
return cljs.core.apply.call(null,f,p1__2747_SHARP_);
}),step__2836.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2842 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2842__delegate.call(this, f, c1, c2, c3, colls);
};
G__2842.cljs$lang$maxFixedArity = 4;
G__2842.cljs$lang$applyTo = (function (arglist__2843){
var f = cljs.core.first(arglist__2843);
var c1 = cljs.core.first(cljs.core.next(arglist__2843));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2843)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2843))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2843))));
return G__2842__delegate.call(this, f, c1, c2, c3, colls);
});
return G__2842;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2837.call(this,f,c1);
case  3 :
return map__2838.call(this,f,c1,c2);
case  4 :
return map__2839.call(this,f,c1,c2,c3);
default:
return map__2840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2840.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____2844 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2844))
{var s__2845 = temp__3726__auto____2844;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2845),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2845)));
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
var step__2848 = (function (n,coll){
while(true){
var s__2846 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2847 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2847))
{return s__2846;
} else
{return and__3574__auto____2847;
}
})()))
{{
var G__2849 = cljs.core.dec.call(null,n);
var G__2850 = cljs.core.rest.call(null,s__2846);
n = G__2849;
coll = G__2850;
continue;
}
} else
{return s__2846;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2848.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2851 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2852 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2851.call(this,n);
case  2 :
return drop_last__2852.call(this,n,s);
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
var s__2854 = cljs.core.seq.call(null,coll);
var lead__2855 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2855))
{{
var G__2856 = cljs.core.next.call(null,s__2854);
var G__2857 = cljs.core.next.call(null,lead__2855);
s__2854 = G__2856;
lead__2855 = G__2857;
continue;
}
} else
{return s__2854;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2860 = (function (pred,coll){
while(true){
var s__2858 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2859 = s__2858;

if(cljs.core.truth_(and__3574__auto____2859))
{return pred.call(null,cljs.core.first.call(null,s__2858));
} else
{return and__3574__auto____2859;
}
})()))
{{
var G__2861 = pred;
var G__2862 = cljs.core.rest.call(null,s__2858);
pred = G__2861;
coll = G__2862;
continue;
}
} else
{return s__2858;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2860.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2863 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2863))
{var s__2864 = temp__3726__auto____2863;

return cljs.core.concat.call(null,s__2864,cycle.call(null,s__2864));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2865 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2866 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2865.call(this,n);
case  2 :
return repeat__2866.call(this,n,x);
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
var repeatedly__2868 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2869 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2868.call(this,n);
case  2 :
return repeatedly__2869.call(this,n,f);
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
var interleave__2875 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2871 = cljs.core.seq.call(null,c1);
var s2__2872 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2873 = s1__2871;

if(cljs.core.truth_(and__3574__auto____2873))
{return s2__2872;
} else
{return and__3574__auto____2873;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2871),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2872),interleave.call(null,cljs.core.rest.call(null,s1__2871),cljs.core.rest.call(null,s2__2872))));
} else
{return null;
}
})));
});
var interleave__2876 = (function() { 
var G__2878__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2874 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2874)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2874),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2874)));
} else
{return null;
}
})));
};
var G__2878 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2878__delegate.call(this, c1, c2, colls);
};
G__2878.cljs$lang$maxFixedArity = 2;
G__2878.cljs$lang$applyTo = (function (arglist__2879){
var c1 = cljs.core.first(arglist__2879);
var c2 = cljs.core.first(cljs.core.next(arglist__2879));
var colls = cljs.core.rest(cljs.core.next(arglist__2879));
return G__2878__delegate.call(this, c1, c2, colls);
});
return G__2878;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2875.call(this,c1,c2);
default:
return interleave__2876.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2876.cljs$lang$applyTo;
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
var cat__2882 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2880 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2880))
{var coll__2881 = temp__3723__auto____2880;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2881),cat.call(null,cljs.core.rest.call(null,coll__2881),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2882.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2883 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2884 = (function() { 
var G__2886__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2886 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2886__delegate.call(this, f, coll, colls);
};
G__2886.cljs$lang$maxFixedArity = 2;
G__2886.cljs$lang$applyTo = (function (arglist__2887){
var f = cljs.core.first(arglist__2887);
var coll = cljs.core.first(cljs.core.next(arglist__2887));
var colls = cljs.core.rest(cljs.core.next(arglist__2887));
return G__2886__delegate.call(this, f, coll, colls);
});
return G__2886;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2883.call(this,f,coll);
default:
return mapcat__2884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2884.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2888 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2888))
{var s__2889 = temp__3726__auto____2888;

var f__2890 = cljs.core.first.call(null,s__2889);
var r__2891 = cljs.core.rest.call(null,s__2889);

if(cljs.core.truth_(pred.call(null,f__2890)))
{return cljs.core.cons.call(null,f__2890,filter.call(null,pred,r__2891));
} else
{return filter.call(null,pred,r__2891);
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
var walk__2893 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2893.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2892_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2892_SHARP_));
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
var partition__2900 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2901 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2894 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2894))
{var s__2895 = temp__3726__auto____2894;

var p__2896 = cljs.core.take.call(null,n,s__2895);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2896))))
{return cljs.core.cons.call(null,p__2896,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2895)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2902 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2897 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2897))
{var s__2898 = temp__3726__auto____2897;

var p__2899 = cljs.core.take.call(null,n,s__2898);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2899))))
{return cljs.core.cons.call(null,p__2899,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2898)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2899,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2900.call(this,n,step);
case  3 :
return partition__2901.call(this,n,step,pad);
case  4 :
return partition__2902.call(this,n,step,pad,coll);
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
var get_in__2908 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2909 = (function (m,ks,not_found){
var sentinel__2904 = cljs.core.lookup_sentinel;
var m__2905 = m;
var ks__2906 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2906))
{var m__2907 = cljs.core.get.call(null,m__2905,cljs.core.first.call(null,ks__2906),sentinel__2904);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2904,m__2907)))
{return not_found;
} else
{{
var G__2911 = sentinel__2904;
var G__2912 = m__2907;
var G__2913 = cljs.core.next.call(null,ks__2906);
sentinel__2904 = G__2911;
m__2905 = G__2912;
ks__2906 = G__2913;
continue;
}
}
} else
{return m__2905;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2908.call(this,m,ks);
case  3 :
return get_in__2909.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__2914,v){
var vec__2915__2916 = p__2914;
var k__2917 = cljs.core.nth.call(null,vec__2915__2916,0,null);
var ks__2918 = cljs.core.nthnext.call(null,vec__2915__2916,1);

if(cljs.core.truth_(ks__2918))
{return cljs.core.assoc.call(null,m,k__2917,assoc_in.call(null,cljs.core.get.call(null,m,k__2917),ks__2918,v));
} else
{return cljs.core.assoc.call(null,m,k__2917,v);
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
var update_in__delegate = function (m,p__2919,f,args){
var vec__2920__2921 = p__2919;
var k__2922 = cljs.core.nth.call(null,vec__2920__2921,0,null);
var ks__2923 = cljs.core.nthnext.call(null,vec__2920__2921,1);

if(cljs.core.truth_(ks__2923))
{return cljs.core.assoc.call(null,m,k__2922,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2922),ks__2923,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2922,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2922),args));
}
};
var update_in = function (m,p__2919,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2919, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2924){
var m = cljs.core.first(arglist__2924);
var p__2919 = cljs.core.first(cljs.core.next(arglist__2924));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2924)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2924)));
return update_in__delegate.call(this, m, p__2919, f, args);
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
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2925 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2926 = this;
var new_array__2927 = cljs.core.aclone.call(null,this__2926.array);

new_array__2927.push(o);
return (new cljs.core.Vector(this__2926.meta,new_array__2927));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2928 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2928.array.length,0)))
{var vector_seq__2929 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2928.array.length)))
{return cljs.core.cons.call(null,(this__2928.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2929.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2930 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2931 = this;
var count__2932 = this__2931.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2932,0)))
{return (this__2931.array[cljs.core.dec.call(null,count__2932)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2933 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2933.array.length,0)))
{var new_array__2934 = cljs.core.aclone.call(null,this__2933.array);

new_array__2934.pop();
return (new cljs.core.Vector(this__2933.meta,new_array__2934));
} else
{throw "Can't pop empty vector";
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2935 = this;
return (new cljs.core.Vector(meta,this__2935.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2936 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2936.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2950 = null;
var G__2950__2951 = (function (coll,n){
var this__2937 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2938 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2938))
{return cljs.core._LT_.call(null,n,this__2937.array.length);
} else
{return and__3574__auto____2938;
}
})()))
{return (this__2937.array[n]);
} else
{return null;
}
});
var G__2950__2952 = (function (coll,n,not_found){
var this__2939 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2940 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2940))
{return cljs.core._LT_.call(null,n,this__2939.array.length);
} else
{return and__3574__auto____2940;
}
})()))
{return (this__2939.array[n]);
} else
{return not_found;
}
});
G__2950 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2950__2951.call(this,coll,n);
case  3 :
return G__2950__2952.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2950;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2941 = this;
return this__2941.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2954 = null;
var G__2954__2955 = (function (v,f){
var this__2942 = this;
return cljs.core.ci_reduce.call(null,this__2942.array,f);
});
var G__2954__2956 = (function (v,f,start){
var this__2943 = this;
return cljs.core.ci_reduce.call(null,this__2943.array,f,start);
});
G__2954 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2954__2955.call(this,v,f);
case  3 :
return G__2954__2956.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2954;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2944 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2945 = this;
return this__2945.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2946 = this;
var new_array__2947 = cljs.core.aclone.call(null,this__2946.array);

(new_array__2947[k] = v);
return (new cljs.core.Vector(this__2946.meta,new_array__2947));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2958 = null;
var G__2958__2959 = (function (coll,k){
var this__2948 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2958__2960 = (function (coll,k,not_found){
var this__2949 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2958 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2958__2959.call(this,coll,k);
case  3 :
return G__2958__2960.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2958;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2962 = null;
var G__2962__2963 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2962__2964 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2962 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2962__2963.call(this,_,k);
case  3 :
return G__2962__2964.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2962;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
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
vector.cljs$lang$applyTo = (function (arglist__2966){
var args = cljs.core.seq( arglist__2966 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__2967 = this;
return false;
});
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
var len__2968 = array.length;

var i__2969 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2969,len__2968)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2969]))))
{return i__2969;
} else
{{
var G__2970 = cljs.core._PLUS_.call(null,i__2969,incr);
i__2969 = G__2970;
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
var obj_map_contains_key_QMARK___2972 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2973 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____2971 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2971))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2971;
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
return obj_map_contains_key_QMARK___2972.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2973.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2976 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2977 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2978 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2978.keys.length)))
{return cljs.core.map.call(null,(function (p1__2975_SHARP_){
return cljs.core.vector.call(null,p1__2975_SHARP_,(this__2978.strobj[p1__2975_SHARP_]));
}),this__2978.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2979 = this;
return (new cljs.core.ObjMap(meta,this__2979.keys,this__2979.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2980 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2981 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2981))
{return this__2980.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2981;
}
})()))
{var new_keys__2982 = cljs.core.aclone.call(null,this__2980.keys);
var new_strobj__2983 = goog.object.clone.call(null,this__2980.strobj);

new_keys__2982.splice(cljs.core.scan_array.call(null,1,k,new_keys__2982),1);
cljs.core.js_delete.call(null,new_strobj__2983,k);
return (new cljs.core.ObjMap(this__2980.meta,new_keys__2982,new_strobj__2983));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2984 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__2984.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2985 = this;
return this__2985.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2986 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2987 = this;
return this__2987.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2988 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__2989 = goog.object.clone.call(null,this__2988.strobj);
var overwrite_QMARK___2990 = new_strobj__2989.hasOwnProperty(k);

(new_strobj__2989[k] = v);
if(cljs.core.truth_(overwrite_QMARK___2990))
{return (new cljs.core.ObjMap(this__2988.meta,this__2988.keys,new_strobj__2989));
} else
{var new_keys__2991 = cljs.core.aclone.call(null,this__2988.keys);

new_keys__2991.push(k);
return (new cljs.core.ObjMap(this__2988.meta,new_keys__2991,new_strobj__2989));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__2988.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2992 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2992.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2995 = null;
var G__2995__2996 = (function (coll,k){
var this__2993 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2995__2997 = (function (coll,k,not_found){
var this__2994 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2994.strobj,(this__2994.strobj[k]),not_found);
});
G__2995 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2995__2996.call(this,coll,k);
case  3 :
return G__2995__2997.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2995;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3000 = null;
var G__3000__3001 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3000__3002 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3000 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3000__3001.call(this,_,k);
case  3 :
return G__3000__3002.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3000;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3004 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3005 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3006 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3006.count)))
{var hashes__3007 = cljs.core.js_keys.call(null,this__3006.hashobj);

return cljs.core.mapcat.call(null,(function (p1__2999_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3006.hashobj[p1__2999_SHARP_])));
}),hashes__3007);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3008 = this;
return (new cljs.core.HashMap(meta,this__3008.count,this__3008.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3009 = this;
var h__3010 = cljs.core.hash.call(null,k);
var bucket__3011 = (this__3009.hashobj[h__3010]);
var i__3012 = (cljs.core.truth_(bucket__3011)?cljs.core.scan_array.call(null,2,k,bucket__3011):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3012)))
{return coll;
} else
{var new_hashobj__3013 = goog.object.clone.call(null,this__3009.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__3011.length)))
{cljs.core.js_delete.call(null,new_hashobj__3013,h__3010);
} else
{var new_bucket__3014 = cljs.core.aclone.call(null,bucket__3011);

new_bucket__3014.splice(i__3012,2);
(new_hashobj__3013[h__3010] = new_bucket__3014);
}
return (new cljs.core.HashMap(this__3009.meta,cljs.core.dec.call(null,this__3009.count),new_hashobj__3013));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3015 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3015.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3016 = this;
return this__3016.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3017 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3018 = this;
return this__3018.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3019 = this;
var h__3020 = cljs.core.hash.call(null,k);
var bucket__3021 = (this__3019.hashobj[h__3020]);

if(cljs.core.truth_(bucket__3021))
{var new_bucket__3022 = cljs.core.aclone.call(null,bucket__3021);
var new_hashobj__3023 = goog.object.clone.call(null,this__3019.hashobj);

(new_hashobj__3023[h__3020] = new_bucket__3022);
var temp__3723__auto____3024 = cljs.core.scan_array.call(null,2,k,new_bucket__3022);

if(cljs.core.truth_(temp__3723__auto____3024))
{var i__3025 = temp__3723__auto____3024;

(new_bucket__3022[cljs.core.inc.call(null,i__3025)] = v);
return (new cljs.core.HashMap(this__3019.meta,this__3019.count,new_hashobj__3023));
} else
{new_bucket__3022.push(k,v);
return (new cljs.core.HashMap(this__3019.meta,cljs.core.inc.call(null,this__3019.count),new_hashobj__3023));
}
} else
{var new_hashobj__3026 = goog.object.clone.call(null,this__3019.hashobj);

(new_hashobj__3026[h__3020] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3019.meta,cljs.core.inc.call(null,this__3019.count),new_hashobj__3026));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3027 = this;
var bucket__3028 = (this__3027.hashobj[cljs.core.hash.call(null,k)]);
var i__3029 = (cljs.core.truth_(bucket__3028)?cljs.core.scan_array.call(null,2,k,bucket__3028):null);

if(cljs.core.truth_(i__3029))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3034 = null;
var G__3034__3035 = (function (coll,k){
var this__3030 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3034__3036 = (function (coll,k,not_found){
var this__3031 = this;
var bucket__3032 = (this__3031.hashobj[cljs.core.hash.call(null,k)]);
var i__3033 = (cljs.core.truth_(bucket__3032)?cljs.core.scan_array.call(null,2,k,bucket__3032):null);

if(cljs.core.truth_(i__3033))
{return (bucket__3032[cljs.core.inc.call(null,i__3033)]);
} else
{return not_found;
}
});
G__3034 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3034__3035.call(this,coll,k);
case  3 :
return G__3034__3036.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3034;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3038 = ks.length;

var i__3039 = 0;
var out__3040 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3039,len__3038)))
{{
var G__3041 = cljs.core.inc.call(null,i__3039);
var G__3042 = cljs.core.assoc.call(null,out__3040,(ks[i__3039]),(vs[i__3039]));
i__3039 = G__3041;
out__3040 = G__3042;
continue;
}
} else
{return out__3040;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3043 = null;
var G__3043__3044 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3043__3045 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3043 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3043__3044.call(this,_,k);
case  3 :
return G__3043__3045.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3043;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3047 = cljs.core.seq.call(null,keyvals);
var out__3048 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3047))
{{
var G__3049 = cljs.core.nnext.call(null,in$__3047);
var G__3050 = cljs.core.assoc.call(null,out__3048,cljs.core.first.call(null,in$__3047),cljs.core.second.call(null,in$__3047));
in$__3047 = G__3049;
out__3048 = G__3050;
continue;
}
} else
{return out__3048;
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
hash_map.cljs$lang$applyTo = (function (arglist__3051){
var keyvals = cljs.core.seq( arglist__3051 );;
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
{return cljs.core.reduce.call(null,(function (p1__3052_SHARP_,p2__3053_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____3054 = p1__3052_SHARP_;

if(cljs.core.truth_(or__3576__auto____3054))
{return or__3576__auto____3054;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3053_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3055){
var maps = cljs.core.seq( arglist__3055 );;
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
{var merge_entry__3058 = (function (m,e){
var k__3056 = cljs.core.first.call(null,e);
var v__3057 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3056)))
{return cljs.core.assoc.call(null,m,k__3056,f.call(null,cljs.core.get.call(null,m,k__3056),v__3057));
} else
{return cljs.core.assoc.call(null,m,k__3056,v__3057);
}
});
var merge2__3060 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3058,(function (){var or__3576__auto____3059 = m1;

if(cljs.core.truth_(or__3576__auto____3059))
{return or__3576__auto____3059;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3060,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3061){
var f = cljs.core.first(arglist__3061);
var maps = cljs.core.rest(arglist__3061);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3063 = cljs.core.ObjMap.fromObject([],{});
var keys__3064 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3064))
{var key__3065 = cljs.core.first.call(null,keys__3064);
var entry__3066 = cljs.core.get.call(null,map,key__3065);

{
var G__3067 = (cljs.core.truth_(entry__3066)?cljs.core.assoc.call(null,ret__3063,key__3065,entry__3066):ret__3063);
var G__3068 = cljs.core.next.call(null,keys__3064);
ret__3063 = G__3067;
keys__3064 = G__3068;
continue;
}
} else
{return ret__3063;
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
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3069 = this;
return (new cljs.core.Set(this__3069.meta,cljs.core.dissoc.call(null,this__3069.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3070 = this;
var and__3574__auto____3071 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____3071))
{var and__3574__auto____3072 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____3072))
{return cljs.core.every_QMARK_.call(null,(function (p1__3062_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3062_SHARP_);
}),other);
} else
{return and__3574__auto____3072;
}
} else
{return and__3574__auto____3071;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3073 = this;
return (new cljs.core.Set(this__3073.meta,cljs.core.assoc.call(null,this__3073.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3074 = this;
return cljs.core.keys.call(null,this__3074.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3075 = this;
return (new cljs.core.Set(meta,this__3075.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3076 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3076.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3077 = this;
return this__3077.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3078 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3079 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3082 = null;
var G__3082__3083 = (function (coll,v){
var this__3080 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3082__3084 = (function (coll,v,not_found){
var this__3081 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3081.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3082 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3082__3083.call(this,coll,v);
case  3 :
return G__3082__3084.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3082;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3086 = null;
var G__3086__3087 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3086__3088 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3086 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3086__3087.call(this,_,k);
case  3 :
return G__3086__3088.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3086;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3091 = cljs.core.seq.call(null,coll);
var out__3092 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3091))))
{{
var G__3093 = cljs.core.rest.call(null,in$__3091);
var G__3094 = cljs.core.conj.call(null,out__3092,cljs.core.first.call(null,in$__3091));
in$__3091 = G__3093;
out__3092 = G__3094;
continue;
}
} else
{return out__3092;
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
{var n__3095 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____3096 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____3096))
{var e__3097 = temp__3723__auto____3096;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3097));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3095,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3090_SHARP_){
var temp__3723__auto____3098 = cljs.core.find.call(null,smap,p1__3090_SHARP_);

if(cljs.core.truth_(temp__3723__auto____3098))
{var e__3099 = temp__3723__auto____3098;

return cljs.core.second.call(null,e__3099);
} else
{return p1__3090_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3107 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3100,seen){
while(true){
var vec__3101__3102 = p__3100;
var f__3103 = cljs.core.nth.call(null,vec__3101__3102,0,null);
var xs__3104 = vec__3101__3102;

var temp__3726__auto____3105 = cljs.core.seq.call(null,xs__3104);

if(cljs.core.truth_(temp__3726__auto____3105))
{var s__3106 = temp__3726__auto____3105;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3103)))
{{
var G__3108 = cljs.core.rest.call(null,s__3106);
var G__3109 = seen;
p__3100 = G__3108;
seen = G__3109;
continue;
}
} else
{return cljs.core.cons.call(null,f__3103,step.call(null,cljs.core.rest.call(null,s__3106),cljs.core.conj.call(null,seen,f__3103)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3107.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3110 = cljs.core.Vector.fromArray([]);
var s__3111 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3111)))
{{
var G__3112 = cljs.core.conj.call(null,ret__3110,cljs.core.first.call(null,s__3111));
var G__3113 = cljs.core.next.call(null,s__3111);
ret__3110 = G__3112;
s__3111 = G__3113;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3110);
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
{if(cljs.core.truth_((function (){var or__3576__auto____3114 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3114))
{return or__3576__auto____3114;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3115 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3115,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3115));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
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
if(cljs.core.truth_((function (){var or__3576__auto____3116 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3116))
{return or__3576__auto____3116;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3117 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3117,-1)))
{return cljs.core.subs.call(null,x,2,i__3117);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3120 = cljs.core.ObjMap.fromObject([],{});
var ks__3121 = cljs.core.seq.call(null,keys);
var vs__3122 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3123 = ks__3121;

if(cljs.core.truth_(and__3574__auto____3123))
{return vs__3122;
} else
{return and__3574__auto____3123;
}
})()))
{{
var G__3124 = cljs.core.assoc.call(null,map__3120,cljs.core.first.call(null,ks__3121),cljs.core.first.call(null,vs__3122));
var G__3125 = cljs.core.next.call(null,ks__3121);
var G__3126 = cljs.core.next.call(null,vs__3122);
map__3120 = G__3124;
ks__3121 = G__3125;
vs__3122 = G__3126;
continue;
}
} else
{return map__3120;
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
var max_key__3129 = (function (k,x){
return x;
});
var max_key__3130 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3131 = (function() { 
var G__3133__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3118_SHARP_,p2__3119_SHARP_){
return max_key.call(null,k,p1__3118_SHARP_,p2__3119_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3133 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3133__delegate.call(this, k, x, y, more);
};
G__3133.cljs$lang$maxFixedArity = 3;
G__3133.cljs$lang$applyTo = (function (arglist__3134){
var k = cljs.core.first(arglist__3134);
var x = cljs.core.first(cljs.core.next(arglist__3134));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3134)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3134)));
return G__3133__delegate.call(this, k, x, y, more);
});
return G__3133;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3129.call(this,k,x);
case  3 :
return max_key__3130.call(this,k,x,y);
default:
return max_key__3131.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3131.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3135 = (function (k,x){
return x;
});
var min_key__3136 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3137 = (function() { 
var G__3139__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3127_SHARP_,p2__3128_SHARP_){
return min_key.call(null,k,p1__3127_SHARP_,p2__3128_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3139 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3139__delegate.call(this, k, x, y, more);
};
G__3139.cljs$lang$maxFixedArity = 3;
G__3139.cljs$lang$applyTo = (function (arglist__3140){
var k = cljs.core.first(arglist__3140);
var x = cljs.core.first(cljs.core.next(arglist__3140));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3140)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3140)));
return G__3139__delegate.call(this, k, x, y, more);
});
return G__3139;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3135.call(this,k,x);
case  3 :
return min_key__3136.call(this,k,x,y);
default:
return min_key__3137.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3137.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3143 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3144 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3141 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3141))
{var s__3142 = temp__3726__auto____3141;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3142),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3142)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3143.call(this,n,step);
case  3 :
return partition_all__3144.call(this,n,step,coll);
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
var temp__3726__auto____3146 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3146))
{var s__3147 = temp__3726__auto____3146;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3147))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3147),take_while.call(null,pred,cljs.core.rest.call(null,s__3147)));
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
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3148 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3149 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3150 = this;
return this__3150.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3151 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core._seq.call(null,rng)))))
{return (new cljs.core.Range(this__3151.meta,cljs.core._PLUS_.call(null,this__3151.start,this__3151.step),this__3151.end,this__3151.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3152 = this;
var comp__3153 = (cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3152.step))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3153.call(null,this__3152.start,this__3152.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3154 = this;
return (new cljs.core.Range(meta,this__3154.start,this__3154.end,this__3154.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3155 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3155.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3167 = null;
var G__3167__3168 = (function (rng,n){
var this__3156 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3156.start,cljs.core._STAR_.call(null,n,this__3156.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3157 = cljs.core._GT_.call(null,this__3156.start,this__3156.end);

if(cljs.core.truth_(and__3574__auto____3157))
{return cljs.core._EQ_.call(null,this__3156.step,0);
} else
{return and__3574__auto____3157;
}
})()))
{return this__3156.start;
} else
{throw "Index out of bounds";
}
}
});
var G__3167__3169 = (function (rng,n,not_found){
var this__3158 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3158.start,cljs.core._STAR_.call(null,n,this__3158.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3159 = cljs.core._GT_.call(null,this__3158.start,this__3158.end);

if(cljs.core.truth_(and__3574__auto____3159))
{return cljs.core._EQ_.call(null,this__3158.step,0);
} else
{return and__3574__auto____3159;
}
})()))
{return this__3158.start;
} else
{return not_found;
}
}
});
G__3167 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3167__3168.call(this,rng,n);
case  3 :
return G__3167__3169.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3167;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3160 = this;
return this__3160.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3171 = null;
var G__3171__3172 = (function (rng,f){
var this__3161 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3171__3173 = (function (rng,f,s){
var this__3162 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3171 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3171__3172.call(this,rng,f);
case  3 :
return G__3171__3173.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3171;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3163 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3164 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3165 = cljs.core._EQ_.call(null,this__3164.start,0);

if(cljs.core.truth_(and__3574__auto____3165))
{var and__3574__auto____3166 = cljs.core._LT_.call(null,this__3164.start,this__3164.end);

if(cljs.core.truth_(and__3574__auto____3166))
{return cljs.core._EQ_.call(null,this__3164.step,1);
} else
{return and__3574__auto____3166;
}
} else
{return and__3574__auto____3165;
}
})()))
{return cljs.core._.call(null,this__3164.end,this__3164.start);
} else
{if(cljs.core.truth_("﷐'else"))
{return Math['ceil'].call(null,cljs.core._SLASH_.call(null,cljs.core._.call(null,this__3164.end,this__3164.start),this__3164.step));
} else
{return null;
}
}
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3175 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3176 = (function (end){
return range.call(null,0,end,1);
});
var range__3177 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3178 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3175.call(this);
case  1 :
return range__3176.call(this,start);
case  2 :
return range__3177.call(this,start,end);
case  3 :
return range__3178.call(this,start,end,step);
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
var temp__3726__auto____3180 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3180))
{var s__3181 = temp__3726__auto____3180;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3181),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3181)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3183 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3183))
{var s__3184 = temp__3726__auto____3183;

var fst__3185 = cljs.core.first.call(null,s__3184);
var fv__3186 = f.call(null,fst__3185);
var run__3187 = cljs.core.cons.call(null,fst__3185,cljs.core.take_while.call(null,(function (p1__3182_SHARP_){
return cljs.core._EQ_.call(null,fv__3186,f.call(null,p1__3182_SHARP_));
}),cljs.core.next.call(null,s__3184)));

return cljs.core.cons.call(null,run__3187,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3187),s__3184))));
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
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3202 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3198 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3198))
{var s__3199 = temp__3723__auto____3198;

return reductions.call(null,f,cljs.core.first.call(null,s__3199),cljs.core.rest.call(null,s__3199));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3203 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3200 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3200))
{var s__3201 = temp__3726__auto____3200;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3201)),cljs.core.rest.call(null,s__3201));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3202.call(this,f,init);
case  3 :
return reductions__3203.call(this,f,init,coll);
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
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3206 = (function (f){
return (function() {
var G__3211 = null;
var G__3211__3212 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3211__3213 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3211__3214 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3211__3215 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3211__3216 = (function() { 
var G__3218__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3218 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3218__delegate.call(this, x, y, z, args);
};
G__3218.cljs$lang$maxFixedArity = 3;
G__3218.cljs$lang$applyTo = (function (arglist__3219){
var x = cljs.core.first(arglist__3219);
var y = cljs.core.first(cljs.core.next(arglist__3219));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3219)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3219)));
return G__3218__delegate.call(this, x, y, z, args);
});
return G__3218;
})()
;
G__3211 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3211__3212.call(this);
case  1 :
return G__3211__3213.call(this,x);
case  2 :
return G__3211__3214.call(this,x,y);
case  3 :
return G__3211__3215.call(this,x,y,z);
default:
return G__3211__3216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3211.cljs$lang$maxFixedArity = 3;
G__3211.cljs$lang$applyTo = G__3211__3216.cljs$lang$applyTo;
return G__3211;
})()
});
var juxt__3207 = (function (f,g){
return (function() {
var G__3220 = null;
var G__3220__3221 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3220__3222 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3220__3223 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3220__3224 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3220__3225 = (function() { 
var G__3227__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3227 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3227__delegate.call(this, x, y, z, args);
};
G__3227.cljs$lang$maxFixedArity = 3;
G__3227.cljs$lang$applyTo = (function (arglist__3228){
var x = cljs.core.first(arglist__3228);
var y = cljs.core.first(cljs.core.next(arglist__3228));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3228)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3228)));
return G__3227__delegate.call(this, x, y, z, args);
});
return G__3227;
})()
;
G__3220 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3220__3221.call(this);
case  1 :
return G__3220__3222.call(this,x);
case  2 :
return G__3220__3223.call(this,x,y);
case  3 :
return G__3220__3224.call(this,x,y,z);
default:
return G__3220__3225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3220.cljs$lang$maxFixedArity = 3;
G__3220.cljs$lang$applyTo = G__3220__3225.cljs$lang$applyTo;
return G__3220;
})()
});
var juxt__3208 = (function (f,g,h){
return (function() {
var G__3229 = null;
var G__3229__3230 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3229__3231 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3229__3232 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3229__3233 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3229__3234 = (function() { 
var G__3236__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3236 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3236__delegate.call(this, x, y, z, args);
};
G__3236.cljs$lang$maxFixedArity = 3;
G__3236.cljs$lang$applyTo = (function (arglist__3237){
var x = cljs.core.first(arglist__3237);
var y = cljs.core.first(cljs.core.next(arglist__3237));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3237)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3237)));
return G__3236__delegate.call(this, x, y, z, args);
});
return G__3236;
})()
;
G__3229 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3229__3230.call(this);
case  1 :
return G__3229__3231.call(this,x);
case  2 :
return G__3229__3232.call(this,x,y);
case  3 :
return G__3229__3233.call(this,x,y,z);
default:
return G__3229__3234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3229.cljs$lang$maxFixedArity = 3;
G__3229.cljs$lang$applyTo = G__3229__3234.cljs$lang$applyTo;
return G__3229;
})()
});
var juxt__3209 = (function() { 
var G__3238__delegate = function (f,g,h,fs){
var fs__3205 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3239 = null;
var G__3239__3240 = (function (){
return cljs.core.reduce.call(null,(function (p1__3188_SHARP_,p2__3189_SHARP_){
return cljs.core.conj.call(null,p1__3188_SHARP_,p2__3189_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3205);
});
var G__3239__3241 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3190_SHARP_,p2__3191_SHARP_){
return cljs.core.conj.call(null,p1__3190_SHARP_,p2__3191_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3205);
});
var G__3239__3242 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3192_SHARP_,p2__3193_SHARP_){
return cljs.core.conj.call(null,p1__3192_SHARP_,p2__3193_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3205);
});
var G__3239__3243 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3194_SHARP_,p2__3195_SHARP_){
return cljs.core.conj.call(null,p1__3194_SHARP_,p2__3195_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3205);
});
var G__3239__3244 = (function() { 
var G__3246__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3196_SHARP_,p2__3197_SHARP_){
return cljs.core.conj.call(null,p1__3196_SHARP_,cljs.core.apply.call(null,p2__3197_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3205);
};
var G__3246 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3246__delegate.call(this, x, y, z, args);
};
G__3246.cljs$lang$maxFixedArity = 3;
G__3246.cljs$lang$applyTo = (function (arglist__3247){
var x = cljs.core.first(arglist__3247);
var y = cljs.core.first(cljs.core.next(arglist__3247));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3247)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3247)));
return G__3246__delegate.call(this, x, y, z, args);
});
return G__3246;
})()
;
G__3239 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3239__3240.call(this);
case  1 :
return G__3239__3241.call(this,x);
case  2 :
return G__3239__3242.call(this,x,y);
case  3 :
return G__3239__3243.call(this,x,y,z);
default:
return G__3239__3244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3239.cljs$lang$maxFixedArity = 3;
G__3239.cljs$lang$applyTo = G__3239__3244.cljs$lang$applyTo;
return G__3239;
})()
};
var G__3238 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3238__delegate.call(this, f, g, h, fs);
};
G__3238.cljs$lang$maxFixedArity = 3;
G__3238.cljs$lang$applyTo = (function (arglist__3248){
var f = cljs.core.first(arglist__3248);
var g = cljs.core.first(cljs.core.next(arglist__3248));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3248)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3248)));
return G__3238__delegate.call(this, f, g, h, fs);
});
return G__3238;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3206.call(this,f);
case  2 :
return juxt__3207.call(this,f,g);
case  3 :
return juxt__3208.call(this,f,g,h);
default:
return juxt__3209.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3209.cljs$lang$applyTo;
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
var dorun__3250 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3253 = cljs.core.next.call(null,coll);
coll = G__3253;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3251 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3249 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3249))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3249;
}
})()))
{{
var G__3254 = cljs.core.dec.call(null,n);
var G__3255 = cljs.core.next.call(null,coll);
n = G__3254;
coll = G__3255;
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
return dorun__3250.call(this,n);
case  2 :
return dorun__3251.call(this,n,coll);
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
var doall__3256 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3257 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3256.call(this,n);
case  2 :
return doall__3257.call(this,n,coll);
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
var matches__3259 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3259),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3259),1)))
{return cljs.core.first.call(null,matches__3259);
} else
{return cljs.core.vec.call(null,matches__3259);
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
var matches__3260 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3260)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3260),1)))
{return cljs.core.first.call(null,matches__3260);
} else
{return cljs.core.vec.call(null,matches__3260);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3261 = cljs.core.re_find.call(null,re,s);
var match_idx__3262 = s.search(re);
var match_str__3263 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3261))?cljs.core.first.call(null,match_data__3261):match_data__3261);
var post_match__3264 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3262,cljs.core.count.call(null,match_str__3263)));

if(cljs.core.truth_(match_data__3261))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3261,re_seq.call(null,re,post_match__3264));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3265_SHARP_){
return print_one.call(null,p1__3265_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
print.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3266 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3266))
{var and__3574__auto____3269 = (function (){var x__107__auto____3267 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3268 = x__107__auto____3267;

if(cljs.core.truth_(and__3574__auto____3268))
{return x__107__auto____3267.cljs$core$IMeta$;
} else
{return and__3574__auto____3268;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__107__auto____3267);
}
})();

if(cljs.core.truth_(and__3574__auto____3269))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3269;
}
} else
{return and__3574__auto____3266;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__107__auto____3270 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3271 = x__107__auto____3270;

if(cljs.core.truth_(and__3574__auto____3271))
{return x__107__auto____3270.cljs$core$IPrintable$;
} else
{return and__3574__auto____3271;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__107__auto____3270);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3272 = cljs.core.first.call(null,objs);
var sb__3273 = (new goog.string.StringBuffer());

var G__3274__3275 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3274__3275))
{var obj__3276 = cljs.core.first.call(null,G__3274__3275);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3276,first_obj__3272)))
{} else
{sb__3273.append(" ");
}
var G__3277__3278 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3276,opts));

while(true){
if(cljs.core.truth_(G__3277__3278))
{var string__3279 = cljs.core.first.call(null,G__3277__3278);

sb__3273.append(string__3279);
{
var G__3280 = cljs.core.next.call(null,G__3277__3278);
G__3277__3278 = G__3280;
continue;
}
} else
{}
break;
}
{
var G__3281 = cljs.core.next.call(null,G__3274__3275);
G__3274__3275 = G__3281;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3273);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3282 = cljs.core.first.call(null,objs);

var G__3283__3284 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3283__3284))
{var obj__3285 = cljs.core.first.call(null,G__3283__3284);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3285,first_obj__3282)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3286__3287 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3285,opts));

while(true){
if(cljs.core.truth_(G__3286__3287))
{var string__3288 = cljs.core.first.call(null,G__3286__3287);

cljs.core.string_print.call(null,string__3288);
{
var G__3289 = cljs.core.next.call(null,G__3286__3287);
G__3286__3287 = G__3289;
continue;
}
} else
{}
break;
}
{
var G__3290 = cljs.core.next.call(null,G__3283__3284);
G__3283__3284 = G__3290;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
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
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
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
pr_str.cljs$lang$applyTo = (function (arglist__3291){
var objs = cljs.core.seq( arglist__3291 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
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
pr.cljs$lang$applyTo = (function (arglist__3292){
var objs = cljs.core.seq( arglist__3292 );;
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
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3293){
var objs = cljs.core.seq( arglist__3293 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
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
println.cljs$lang$applyTo = (function (arglist__3294){
var objs = cljs.core.seq( arglist__3294 );;
return println__delegate.call(this, objs);
});
return println;
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
prn.cljs$lang$applyTo = (function (arglist__3295){
var objs = cljs.core.seq( arglist__3295 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3296 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3296,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3297 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3297))
{var nspc__3298 = temp__3726__auto____3297;

return cljs.core.str.call(null,nspc__3298,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3299 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3299))
{var nspc__3300 = temp__3726__auto____3299;

return cljs.core.str.call(null,nspc__3300,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
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
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
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
var pr_pair__3301 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3301,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3302 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3302.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3303 = this;
return this__3303.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3304 = this;
return this__3304.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3305 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
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
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3312 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3313 = (function() { 
var G__3315__delegate = function (x,p__3306){
var map__3307__3308 = p__3306;
var map__3307__3309 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3307__3308))?cljs.core.apply.call(null,cljs.core.hash_map,map__3307__3308):map__3307__3308);
var validator__3310 = cljs.core.get.call(null,map__3307__3309,"﷐'validator");
var meta__3311 = cljs.core.get.call(null,map__3307__3309,"﷐'meta");

return (new cljs.core.Atom(x,meta__3311,validator__3310));
};
var G__3315 = function (x,var_args){
var p__3306 = null;
if (goog.isDef(var_args)) {
  p__3306 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3315__delegate.call(this, x, p__3306);
};
G__3315.cljs$lang$maxFixedArity = 1;
G__3315.cljs$lang$applyTo = (function (arglist__3316){
var x = cljs.core.first(arglist__3316);
var p__3306 = cljs.core.rest(arglist__3316);
return G__3315__delegate.call(this, x, p__3306);
});
return G__3315;
})()
;
atom = function(x,var_args){
var p__3306 = var_args;
switch(arguments.length){
case  1 :
return atom__3312.call(this,x);
default:
return atom__3313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3313.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3317 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3317))
{var v__3318 = temp__3726__auto____3317;

if(cljs.core.truth_(v__3318.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
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
var swap_BANG___3319 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3320 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3321 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3322 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3323 = (function() { 
var G__3325__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3325 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3325__delegate.call(this, a, f, x, y, z, more);
};
G__3325.cljs$lang$maxFixedArity = 5;
G__3325.cljs$lang$applyTo = (function (arglist__3326){
var a = cljs.core.first(arglist__3326);
var f = cljs.core.first(cljs.core.next(arglist__3326));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3326)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3326))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3326)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3326)))));
return G__3325__delegate.call(this, a, f, x, y, z, more);
});
return G__3325;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3319.call(this,a,f);
case  3 :
return swap_BANG___3320.call(this,a,f,x);
case  4 :
return swap_BANG___3321.call(this,a,f,x,y);
case  5 :
return swap_BANG___3322.call(this,a,f,x,y,z);
default:
return swap_BANG___3323.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3323.cljs$lang$applyTo;
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
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3327){
var iref = cljs.core.first(arglist__3327);
var f = cljs.core.first(cljs.core.next(arglist__3327));
var args = cljs.core.rest(cljs.core.next(arglist__3327));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3328 = (function (){
return gensym.call(null,"G__");
});
var gensym__3329 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3328.call(this);
case  1 :
return gensym__3329.call(this,prefix_string);
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
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3331 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3331.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3332 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3332.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3332.state,this__3332.f);
}
return cljs.core.deref.call(null,this__3332.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3333){
var body = cljs.core.seq( arglist__3333 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
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
var map__3334__3335 = options;
var map__3334__3336 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3334__3335))?cljs.core.apply.call(null,cljs.core.hash_map,map__3334__3335):map__3334__3335);
var keywordize_keys__3337 = cljs.core.get.call(null,map__3334__3336,"﷐'keywordize-keys");
var keyfn__3338 = (cljs.core.truth_(keywordize_keys__3337)?cljs.core.keyword:cljs.core.str);
var f__3344 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__161__auto____3343 = (function iter__3339(s__3340){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3340__3341 = s__3340;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3340__3341)))
{var k__3342 = cljs.core.first.call(null,s__3340__3341);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3338.call(null,k__3342),thisfn.call(null,(x[k__3342]))]),iter__3339.call(null,cljs.core.rest.call(null,s__3340__3341)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____3343.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3344.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3345){
var x = cljs.core.first(arglist__3345);
var options = cljs.core.rest(arglist__3345);
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
var mem__3346 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3350__delegate = function (args){
var temp__3723__auto____3347 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3346),args);

if(cljs.core.truth_(temp__3723__auto____3347))
{var v__3348 = temp__3723__auto____3347;

return v__3348;
} else
{var ret__3349 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3346,cljs.core.assoc,args,ret__3349);
return ret__3349;
}
};
var G__3350 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3350__delegate.call(this, args);
};
G__3350.cljs$lang$maxFixedArity = 0;
G__3350.cljs$lang$applyTo = (function (arglist__3351){
var args = cljs.core.seq( arglist__3351 );;
return G__3350__delegate.call(this, args);
});
return G__3350;
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
var trampoline__3353 = (function (f){
while(true){
var ret__3352 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3352)))
{{
var G__3356 = ret__3352;
f = G__3356;
continue;
}
} else
{return ret__3352;
}
break;
}
});
var trampoline__3354 = (function() { 
var G__3357__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3357 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3357__delegate.call(this, f, args);
};
G__3357.cljs$lang$maxFixedArity = 1;
G__3357.cljs$lang$applyTo = (function (arglist__3358){
var f = cljs.core.first(arglist__3358);
var args = cljs.core.rest(arglist__3358);
return G__3357__delegate.call(this, f, args);
});
return G__3357;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3353.call(this,f);
default:
return trampoline__3354.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3354.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3359 = (function (){
return rand.call(null,1);
});
var rand__3360 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3359.call(this);
case  1 :
return rand__3360.call(this,n);
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
var k__3362 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3362,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3362,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
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
var isa_QMARK___3371 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3372 = (function (h,child,parent){
var or__3576__auto____3363 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____3363))
{return or__3576__auto____3363;
} else
{var or__3576__auto____3364 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____3364))
{return or__3576__auto____3364;
} else
{var and__3574__auto____3365 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____3365))
{var and__3574__auto____3366 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____3366))
{var and__3574__auto____3367 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____3367))
{var ret__3368 = true;
var i__3369 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3370 = cljs.core.not.call(null,ret__3368);

if(cljs.core.truth_(or__3576__auto____3370))
{return or__3576__auto____3370;
} else
{return cljs.core._EQ_.call(null,i__3369,cljs.core.count.call(null,parent));
}
})()))
{return ret__3368;
} else
{{
var G__3374 = isa_QMARK_.call(null,h,child.call(null,i__3369),parent.call(null,i__3369));
var G__3375 = cljs.core.inc.call(null,i__3369);
ret__3368 = G__3374;
i__3369 = G__3375;
continue;
}
}
break;
}
} else
{return and__3574__auto____3367;
}
} else
{return and__3574__auto____3366;
}
} else
{return and__3574__auto____3365;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3371.call(this,h,child);
case  3 :
return isa_QMARK___3372.call(this,h,child,parent);
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
var parents__3376 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3377 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3376.call(this,h);
case  2 :
return parents__3377.call(this,h,tag);
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
var ancestors__3379 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3380 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3379.call(this,h);
case  2 :
return ancestors__3380.call(this,h,tag);
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
var descendants__3382 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3383 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3382.call(this,h);
case  2 :
return descendants__3383.call(this,h,tag);
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
var derive__3393 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3394 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3388 = "﷐'parents".call(null,h);
var td__3389 = "﷐'descendants".call(null,h);
var ta__3390 = "﷐'ancestors".call(null,h);
var tf__3391 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____3392 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3388.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3390.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3390.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3388,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3391.call(null,"﷐'ancestors".call(null,h),tag,td__3389,parent,ta__3390),"﷐'descendants":tf__3391.call(null,"﷐'descendants".call(null,h),parent,ta__3390,tag,td__3389)});
})());

if(cljs.core.truth_(or__3576__auto____3392))
{return or__3576__auto____3392;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3393.call(this,h,tag);
case  3 :
return derive__3394.call(this,h,tag,parent);
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
var underive__3400 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3401 = (function (h,tag,parent){
var parentMap__3396 = "﷐'parents".call(null,h);
var childsParents__3397 = (cljs.core.truth_(parentMap__3396.call(null,tag))?cljs.core.disj.call(null,parentMap__3396.call(null,tag),parent):cljs.core.set([]));
var newParents__3398 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3397))?cljs.core.assoc.call(null,parentMap__3396,tag,childsParents__3397):cljs.core.dissoc.call(null,parentMap__3396,tag));
var deriv_seq__3399 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3385_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3385_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3385_SHARP_),cljs.core.second.call(null,p1__3385_SHARP_)));
}),cljs.core.seq.call(null,newParents__3398)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3396.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3386_SHARP_,p2__3387_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3386_SHARP_,p2__3387_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3399));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3400.call(this,h,tag);
case  3 :
return underive__3401.call(this,h,tag,parent);
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
var xprefs__3403 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____3405 = (cljs.core.truth_((function (){var and__3574__auto____3404 = xprefs__3403;

if(cljs.core.truth_(and__3574__auto____3404))
{return xprefs__3403.call(null,y);
} else
{return and__3574__auto____3404;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____3405))
{return or__3576__auto____3405;
} else
{var or__3576__auto____3407 = (function (){var ps__3406 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3406))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3406),prefer_table)))
{} else
{}
{
var G__3410 = cljs.core.rest.call(null,ps__3406);
ps__3406 = G__3410;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3407))
{return or__3576__auto____3407;
} else
{var or__3576__auto____3409 = (function (){var ps__3408 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3408))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3408),y,prefer_table)))
{} else
{}
{
var G__3411 = cljs.core.rest.call(null,ps__3408);
ps__3408 = G__3411;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3409))
{return or__3576__auto____3409;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____3412 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____3412))
{return or__3576__auto____3412;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3421 = cljs.core.reduce.call(null,(function (be,p__3413){
var vec__3414__3415 = p__3413;
var k__3416 = cljs.core.nth.call(null,vec__3414__3415,0,null);
var ___3417 = cljs.core.nth.call(null,vec__3414__3415,1,null);
var e__3418 = vec__3414__3415;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3416)))
{var be2__3420 = (cljs.core.truth_((function (){var or__3576__auto____3419 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____3419))
{return or__3576__auto____3419;
} else
{return cljs.core.dominates.call(null,k__3416,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3418:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3420),k__3416,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3416," and ",cljs.core.first.call(null,be2__3420),", and neither is preferred");
}
return be2__3420;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3421))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3421));
return cljs.core.second.call(null,best_entry__3421);
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
if(cljs.core.truth_((function (){var and__3574__auto____3422 = mf;

if(cljs.core.truth_(and__3574__auto____3422))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____3422;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____3423 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3423))
{return or__3576__auto____3423;
} else
{var or__3576__auto____3424 = (_reset["_"]);

if(cljs.core.truth_(or__3576__auto____3424))
{return or__3576__auto____3424;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____3425 = mf;

if(cljs.core.truth_(and__3574__auto____3425))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____3425;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____3426 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3426))
{return or__3576__auto____3426;
} else
{var or__3576__auto____3427 = (_add_method["_"]);

if(cljs.core.truth_(or__3576__auto____3427))
{return or__3576__auto____3427;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3428 = mf;

if(cljs.core.truth_(and__3574__auto____3428))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____3428;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3429 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3429))
{return or__3576__auto____3429;
} else
{var or__3576__auto____3430 = (_remove_method["_"]);

if(cljs.core.truth_(or__3576__auto____3430))
{return or__3576__auto____3430;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____3431 = mf;

if(cljs.core.truth_(and__3574__auto____3431))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____3431;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____3432 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3432))
{return or__3576__auto____3432;
} else
{var or__3576__auto____3433 = (_prefer_method["_"]);

if(cljs.core.truth_(or__3576__auto____3433))
{return or__3576__auto____3433;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3434 = mf;

if(cljs.core.truth_(and__3574__auto____3434))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____3434;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3435 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3435))
{return or__3576__auto____3435;
} else
{var or__3576__auto____3436 = (_get_method["_"]);

if(cljs.core.truth_(or__3576__auto____3436))
{return or__3576__auto____3436;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3437 = mf;

if(cljs.core.truth_(and__3574__auto____3437))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____3437;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____3438 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3438))
{return or__3576__auto____3438;
} else
{var or__3576__auto____3439 = (_methods["_"]);

if(cljs.core.truth_(or__3576__auto____3439))
{return or__3576__auto____3439;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3440 = mf;

if(cljs.core.truth_(and__3574__auto____3440))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____3440;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____3441 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3441))
{return or__3576__auto____3441;
} else
{var or__3576__auto____3442 = (_prefers["_"]);

if(cljs.core.truth_(or__3576__auto____3442))
{return or__3576__auto____3442;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____3443 = mf;

if(cljs.core.truth_(and__3574__auto____3443))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____3443;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____3444 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3444))
{return or__3576__auto____3444;
} else
{var or__3576__auto____3445 = (_invoke["_"]);

if(cljs.core.truth_(or__3576__auto____3445))
{return or__3576__auto____3445;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3446 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3447 = cljs.core._get_method.call(null,mf,dispatch_val__3446);

if(cljs.core.truth_(target_fn__3447))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3446);
}
return cljs.core.apply.call(null,target_fn__3447,args);
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
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3448 = this;
cljs.core.swap_BANG_.call(null,this__3448.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3448.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3448.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3448.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3449 = this;
cljs.core.swap_BANG_.call(null,this__3449.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3449.method_cache,this__3449.method_table,this__3449.cached_hierarchy,this__3449.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3450 = this;
cljs.core.swap_BANG_.call(null,this__3450.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3450.method_cache,this__3450.method_table,this__3450.cached_hierarchy,this__3450.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3451 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3451.cached_hierarchy),cljs.core.deref.call(null,this__3451.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3451.method_cache,this__3451.method_table,this__3451.cached_hierarchy,this__3451.hierarchy);
}
var temp__3723__auto____3452 = cljs.core.deref.call(null,this__3451.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____3452))
{var target_fn__3453 = temp__3723__auto____3452;

return target_fn__3453;
} else
{var temp__3723__auto____3454 = cljs.core.find_and_cache_best_method.call(null,this__3451.name,dispatch_val,this__3451.hierarchy,this__3451.method_table,this__3451.prefer_table,this__3451.method_cache,this__3451.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____3454))
{var target_fn__3455 = temp__3723__auto____3454;

return target_fn__3455;
} else
{return cljs.core.deref.call(null,this__3451.method_table).call(null,this__3451.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3456 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3456.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3456.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3456.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3456.method_cache,this__3456.method_table,this__3456.cached_hierarchy,this__3456.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3457 = this;
return cljs.core.deref.call(null,this__3457.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3458 = this;
return cljs.core.deref.call(null,this__3458.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3459 = this;
return cljs.core.do_invoke.call(null,mf,this__3459.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3460__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3460 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3460__delegate.call(this, _, args);
};
G__3460.cljs$lang$maxFixedArity = 1;
G__3460.cljs$lang$applyTo = (function (arglist__3461){
var _ = cljs.core.first(arglist__3461);
var args = cljs.core.rest(arglist__3461);
return G__3460__delegate.call(this, _, args);
});
return G__3460;
})()
;
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
