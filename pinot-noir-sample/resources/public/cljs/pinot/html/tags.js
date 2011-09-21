goog.provide('pinot.html.tags');
goog.require('cljs.core');
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
pinot.html.tags.add_optional_attrs = (function add_optional_attrs(func){
return (function() { 
var G__3608__delegate = function (args){
if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{var vec__3604__3605 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag__3606 = cljs.core.nth.call(null,vec__3604__3605,0,null);
var body__3607 = cljs.core.nthnext.call(null,vec__3604__3605,1);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body__3607))))
{return cljs.core.apply.call(null,cljs.core.vector,tag__3606,cljs.core.merge.call(null,cljs.core.first.call(null,body__3607),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body__3607));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag__3606,cljs.core.first.call(null,args),body__3607);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__3608 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3608__delegate.call(this, args);
};
G__3608.cljs$lang$maxFixedArity = 0;
G__3608.cljs$lang$applyTo = (function (arglist__3609){
var args = cljs.core.seq( arglist__3609 );;
return G__3608__delegate.call(this, args);
});
return G__3608;
})()
;
});
var func__2032__auto____3615 = (function() { 
var G__3616__delegate = function (p__3610,content){
var vec__3611__3612 = p__3610;
var method__3613 = cljs.core.nth.call(null,vec__3611__3612,0,null);
var action__3614 = cljs.core.nth.call(null,vec__3611__3612,1,null);

return cljs.core.Vector.fromArray(["﷐'form",cljs.core.ObjMap.fromObject(["﷐'method","﷐'action"],{"﷐'method":cljs.core.name.call(null,method__3613),"﷐'action":action__3614}),content]);
};
var G__3616 = function (p__3610,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3616__delegate.call(this, p__3610, content);
};
G__3616.cljs$lang$maxFixedArity = 1;
G__3616.cljs$lang$applyTo = (function (arglist__3617){
var p__3610 = cljs.core.first(arglist__3617);
var content = cljs.core.rest(arglist__3617);
return G__3616__delegate.call(this, p__3610, content);
});
return G__3616;
})()
;

pinot.html.tags.form_to = pinot.html.tags.add_optional_attrs.call(null,func__2032__auto____3615);
var func__2032__auto____3621 = (function (tpe,nme,value){
return cljs.core.Vector.fromArray(["﷐'input",cljs.core.ObjMap.fromObject(["﷐'type","﷐'name","﷐'id","﷐'value"],{"﷐'type":tpe,"﷐'name":(function (){var or__3576__auto____3618 = nme;

if(cljs.core.truth_(or__3576__auto____3618))
{return or__3576__auto____3618;
} else
{return null;
}
})(),"﷐'id":(function (){var or__3576__auto____3619 = nme;

if(cljs.core.truth_(or__3576__auto____3619))
{return or__3576__auto____3619;
} else
{return null;
}
})(),"﷐'value":(function (){var or__3576__auto____3620 = value;

if(cljs.core.truth_(or__3576__auto____3620))
{return or__3576__auto____3620;
} else
{return null;
}
})()})]);
});

pinot.html.tags.input_field = pinot.html.tags.add_optional_attrs.call(null,func__2032__auto____3621);
var func__2032__auto____3622 = (function (nme,value){
return pinot.html.tags.input_field.call(null,"text",nme,value);
});

pinot.html.tags.text_field = pinot.html.tags.add_optional_attrs.call(null,func__2032__auto____3622);
var func__2032__auto____3623 = (function (nme,value){
return pinot.html.tags.input_field.call(null,"password",nme,value);
});

pinot.html.tags.password_field = pinot.html.tags.add_optional_attrs.call(null,func__2032__auto____3623);
var func__2032__auto____3624 = (function (for$,text){
return cljs.core.Vector.fromArray(["﷐'label",cljs.core.ObjMap.fromObject(["﷐'for"],{"﷐'for":for$}),text]);
});

pinot.html.tags.label = pinot.html.tags.add_optional_attrs.call(null,func__2032__auto____3624);
var func__2032__auto____3625 = (function (val){
return pinot.html.tags.input_field.call(null,"submit",null,val);
});

pinot.html.tags.submit_button = pinot.html.tags.add_optional_attrs.call(null,func__2032__auto____3625);
var func__2032__auto____3626 = (function() { 
var G__3627__delegate = function (url,content){
return cljs.core.Vector.fromArray(["﷐'a",cljs.core.ObjMap.fromObject(["﷐'href"],{"﷐'href":url}),content]);
};
var G__3627 = function (url,var_args){
var content = null;
if (goog.isDef(var_args)) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3627__delegate.call(this, url, content);
};
G__3627.cljs$lang$maxFixedArity = 1;
G__3627.cljs$lang$applyTo = (function (arglist__3628){
var url = cljs.core.first(arglist__3628);
var content = cljs.core.rest(arglist__3628);
return G__3627__delegate.call(this, url, content);
});
return G__3627;
})()
;

pinot.html.tags.link_to = pinot.html.tags.add_optional_attrs.call(null,func__2032__auto____3626);
