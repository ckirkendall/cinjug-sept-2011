goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3574__auto____2063 = reader;

if(cljs.core.truth_(and__3574__auto____2063))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3574__auto____2063;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3576__auto____2064 = (read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3576__auto____2064))
{return or__3576__auto____2064;
} else
{var or__3576__auto____2065 = (read_char["_"]);

if(cljs.core.truth_(or__3576__auto____2065))
{return or__3576__auto____2065;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3574__auto____2066 = reader;

if(cljs.core.truth_(and__3574__auto____2066))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3574__auto____2066;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3576__auto____2067 = (unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3576__auto____2067))
{return or__3576__auto____2067;
} else
{var or__3576__auto____2068 = (unread["_"]);

if(cljs.core.truth_(or__3576__auto____2068))
{return or__3576__auto____2068;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__2069 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__2069.buffer_atom))))
{var idx__2070 = cljs.core.deref.call(null,this__2069.index_atom);

cljs.core.swap_BANG_.call(null,this__2069.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__2069.s,idx__2070);
} else
{var buf__2071 = cljs.core.deref.call(null,this__2069.buffer_atom);

cljs.core.swap_BANG_.call(null,this__2069.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__2071);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__2072 = this;
return cljs.core.swap_BANG_.call(null,this__2072.buffer_atom,(function (p1__2062_SHARP_){
return cljs.core.cons.call(null,ch,p1__2062_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3576__auto____2073 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3576__auto____2073))
{return or__3576__auto____2073;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3576__auto____2074 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3576__auto____2074))
{return or__3576__auto____2074;
} else
{var and__3574__auto____2076 = (function (){var or__3576__auto____2075 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3576__auto____2075))
{return or__3576__auto____2075;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3574__auto____2076))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__2077 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__2077);
return next_ch__2077;
})());
} else
{return and__3574__auto____2076;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__2078){
var rdr = cljs.core.first(arglist__2078);
var msg = cljs.core.rest(arglist__2078);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3574__auto____2079 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3574__auto____2079))
{var and__3574__auto____2080 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3574__auto____2080))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3574__auto____2080;
}
} else
{return and__3574__auto____2079;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__2081 = (new goog.string.StringBuffer(initch));
var ch__2082 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____2083 = cljs.core.nil_QMARK_.call(null,ch__2082);

if(cljs.core.truth_(or__3576__auto____2083))
{return or__3576__auto____2083;
} else
{var or__3576__auto____2084 = cljs.reader.whitespace_QMARK_.call(null,ch__2082);

if(cljs.core.truth_(or__3576__auto____2084))
{return or__3576__auto____2084;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__2082);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__2082);
return sb__2081.toString();
} else
{{
var G__2085 = (function (){sb__2081.append(ch__2082);
return sb__2081;
})();
var G__2086 = cljs.reader.read_char.call(null,rdr);
sb__2081 = G__2085;
ch__2082 = G__2086;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__2087 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3576__auto____2088 = cljs.core._EQ_.call(null,ch__2087,"n");

if(cljs.core.truth_(or__3576__auto____2088))
{return or__3576__auto____2088;
} else
{var or__3576__auto____2089 = cljs.core._EQ_.call(null,ch__2087,"r");

if(cljs.core.truth_(or__3576__auto____2089))
{return or__3576__auto____2089;
} else
{return cljs.core.nil_QMARK_.call(null,ch__2087);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.match_int = (function match_int(s){
var groups__2090 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);

if(cljs.core.truth_(cljs.core.nth.call(null,groups__2090,2)))
{return 0;
} else
{var negate__2092 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__2090,1)))?-1:1);
var vec__2091__2093 = (cljs.core.truth_(cljs.core.nth.call(null,groups__2090,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2090,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__2090,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2090,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__2090,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2090,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__2090,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2090,7),parseInt.call(null,cljs.core.nth.call(null,groups__2090,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__2094 = cljs.core.nth.call(null,vec__2091__2093,0,null);
var radix__2095 = cljs.core.nth.call(null,vec__2091__2093,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__2094)))
{return null;
} else
{return cljs.core._STAR_.call(null,negate__2092,parseInt.call(null,n__2094,radix__2095));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__2096 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__2097 = cljs.core.nth.call(null,groups__2096,1);
var denominator__2098 = cljs.core.nth.call(null,groups__2096,2);

return cljs.core._SLASH_.call(null,parseInt.call(null,numinator__2097),parseInt.call(null,denominator__2098));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__2099 = cljs.reader.read_char.call(null,reader);
var mapresult__2100 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__2099);

if(cljs.core.truth_(mapresult__2100))
{return mapresult__2100;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____2101 = cljs.core._EQ_.call(null,"u",ch__2099);

if(cljs.core.truth_(or__3576__auto____2101))
{return or__3576__auto____2101;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__2099);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__2099);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__2099);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__2102 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__2102)))
{{
var G__2103 = cljs.reader.read_char.call(null,rdr);
ch__2102 = G__2103;
continue;
}
} else
{return ch__2102;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__2104 = cljs.core.Vector.fromArray([]);

while(true){
var ch__2105 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__2105))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__2105)))
{return a__2104;
} else
{var temp__3723__auto____2106 = cljs.core.get.call(null,cljs.reader.macros,ch__2105);

if(cljs.core.truth_(temp__3723__auto____2106))
{var macrofn__2107 = temp__3723__auto____2106;

var mret__2108 = macrofn__2107.call(null,rdr,ch__2105);

{
var G__2110 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__2108,rdr))?a__2104:cljs.core.conj.call(null,a__2104,mret__2108));
a__2104 = G__2110;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__2105);
var o__2109 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__2111 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__2109,rdr))?a__2104:cljs.core.conj.call(null,a__2104,o__2109));
a__2104 = G__2111;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__2112 = cljs.reader.read_char.call(null,rdr);
var dm__2113 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__2112);

if(cljs.core.truth_(dm__2113))
{return dm__2113.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__2112);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__2114 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__2114))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__2114);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__2115 = (new goog.string.StringBuffer(initch));
var ch__2116 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____2117 = cljs.core.nil_QMARK_.call(null,ch__2116);

if(cljs.core.truth_(or__3576__auto____2117))
{return or__3576__auto____2117;
} else
{var or__3576__auto____2118 = cljs.reader.whitespace_QMARK_.call(null,ch__2116);

if(cljs.core.truth_(or__3576__auto____2118))
{return or__3576__auto____2118;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__2116);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__2116);
var s__2119 = buffer__2115.toString();

var or__3576__auto____2120 = cljs.reader.match_number.call(null,s__2119);

if(cljs.core.truth_(or__3576__auto____2120))
{return or__3576__auto____2120;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__2119,"]");
}
} else
{{
var G__2121 = (function (){buffer__2115.append(ch__2116);
return buffer__2115;
})();
var G__2122 = cljs.reader.read_char.call(null,reader);
buffer__2115 = G__2121;
ch__2116 = G__2122;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__2123 = (new goog.string.StringBuffer());
var ch__2124 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__2124)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__2124)))
{{
var G__2125 = cljs.reader.escape_char.call(null,buffer__2123,reader);
var G__2126 = cljs.reader.read_char.call(null,reader);
buffer__2123 = G__2125;
ch__2124 = G__2126;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__2124)))
{return buffer__2123.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__2127 = (function (){buffer__2123.append(ch__2124);
return buffer__2123;
})();
var G__2128 = cljs.reader.read_char.call(null,reader);
buffer__2123 = G__2127;
ch__2124 = G__2128;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__2129 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__2129,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__2129,0,token__2129.indexOf("/")),cljs.core.subs.call(null,cljs.core.inc.call(null,token__2129.indexOf("/")),token__2129.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__2129,cljs.core.symbol.call(null,token__2129));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__2130 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));

if(cljs.core.truth_(goog.string.contains.call(null,token__2130,"/")))
{return cljs.core.keyword.call(null,cljs.core.subs.call(null,token__2130,0,token__2130.indexOf("/")),cljs.core.subs.call(null,token__2130,cljs.core.inc.call(null,token__2130.indexOf("/")),token__2130.length));
} else
{return cljs.core.keyword.call(null,token__2130);
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__2131 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__2131)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__2132 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__107__auto____2133 = o__2132;

if(cljs.core.truth_((function (){var and__3574__auto____2134 = x__107__auto____2133;

if(cljs.core.truth_(and__3574__auto____2134))
{return x__107__auto____2133.cljs$core$IWithMeta$;
} else
{return and__3574__auto____2134;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__107__auto____2133);
}
})()))
{return cljs.core.with_meta.call(null,o__2132,cljs.core.merge.call(null,cljs.core.meta.call(null,o__2132),m__2131));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__2135 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__2135)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__2135)))
{{
var G__2137 = reader;
var G__2138 = eof_is_error;
var G__2139 = sentinel;
var G__2140 = is_recursive;
reader = G__2137;
eof_is_error = G__2138;
sentinel = G__2139;
is_recursive = G__2140;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__2135)))
{{
var G__2141 = cljs.reader.read_comment.call(null,reader,ch__2135);
var G__2142 = eof_is_error;
var G__2143 = sentinel;
var G__2144 = is_recursive;
reader = G__2141;
eof_is_error = G__2142;
sentinel = G__2143;
is_recursive = G__2144;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__2136 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__2135))?cljs.reader.macros.call(null,ch__2135).call(null,reader,ch__2135):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__2135))?cljs.reader.read_number.call(null,reader,ch__2135):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__2135):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__2136,reader)))
{{
var G__2145 = reader;
var G__2146 = eof_is_error;
var G__2147 = sentinel;
var G__2148 = is_recursive;
reader = G__2145;
eof_is_error = G__2146;
sentinel = G__2147;
is_recursive = G__2148;
continue;
}
} else
{return res__2136;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__2149 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__2149,true,null,false);
});
