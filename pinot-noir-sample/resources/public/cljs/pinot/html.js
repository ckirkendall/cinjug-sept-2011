goog.provide('pinot.html');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.dom.query');
goog.require('goog.dom.forms');
goog.require('clojure.string');
goog.require('pinot.util.clj');
goog.require('pinot.util.js');
pinot.html.xmlns = cljs.core.ObjMap.fromObject(["﷐'xhtml","﷐'svg"],{"﷐'xhtml":"http://www.w3.org/1999/xhtml","﷐'svg":"http://www.w3.org/2000/svg"});
/**
* @param {...*} var_args
*/
pinot.html.css = (function() { 
var css__delegate = function (elem,k,p__3462){
var vec__3463__3464 = p__3462;
var v__3465 = cljs.core.nth.call(null,vec__3463__3464,0,null);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,k)))
{var G__3466__3467 = cljs.core.seq.call(null,k);

while(true){
if(cljs.core.truth_(G__3466__3467))
{var vec__3468__3469 = cljs.core.first.call(null,G__3466__3467);
var prop__3470 = cljs.core.nth.call(null,vec__3468__3469,0,null);
var value__3471 = cljs.core.nth.call(null,vec__3468__3469,1,null);

css.call(null,elem,prop__3470,value__3471);
{
var G__3475 = cljs.core.next.call(null,G__3466__3467);
G__3466__3467 = G__3475;
continue;
}
} else
{}
break;
}
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,v__3465)))
{goog.style.getStyle.call(null,elem,cljs.core.name.call(null,k));
} else
{if(cljs.core.truth_("﷐'else"))
{var G__3472__3473 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__3472__3473))
{var el__3474 = cljs.core.first.call(null,G__3472__3473);

goog.style.setStyle.call(null,el__3474,cljs.core.name.call(null,k),cljs.core.name.call(null,v__3465));
{
var G__3476 = cljs.core.next.call(null,G__3472__3473);
G__3472__3473 = G__3476;
continue;
}
} else
{}
break;
}
} else
{}
}
}
return elem;
};
var css = function (elem,k,var_args){
var p__3462 = null;
if (goog.isDef(var_args)) {
  p__3462 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return css__delegate.call(this, elem, k, p__3462);
};
css.cljs$lang$maxFixedArity = 2;
css.cljs$lang$applyTo = (function (arglist__3477){
var elem = cljs.core.first(arglist__3477);
var k = cljs.core.first(cljs.core.next(arglist__3477));
var p__3462 = cljs.core.rest(cljs.core.next(arglist__3477));
return css__delegate.call(this, elem, k, p__3462);
});
return css;
})()
;
pinot.html.attr = (function() {
var attr = null;
var attr__3487 = (function (elem,attrs){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__3478__3479 = cljs.core.seq.call(null,attrs);

while(true){
if(cljs.core.truth_(G__3478__3479))
{var vec__3480__3481 = cljs.core.first.call(null,G__3478__3479);
var k__3482 = cljs.core.nth.call(null,vec__3480__3481,0,null);
var v__3483 = cljs.core.nth.call(null,vec__3480__3481,1,null);

attr.call(null,elem,k__3482,v__3483);
{
var G__3490 = cljs.core.next.call(null,G__3478__3479);
G__3478__3479 = G__3490;
continue;
}
} else
{}
break;
}
return elem;
}
});
var attr__3488 = (function (elem,k,v){
var G__3484__3485 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__3484__3485))
{var el__3486 = cljs.core.first.call(null,G__3484__3485);

el__3486.setAttribute(cljs.core.name.call(null,k),v);
{
var G__3491 = cljs.core.next.call(null,G__3484__3485);
G__3484__3485 = G__3491;
continue;
}
} else
{}
break;
}
return elem;
});
attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return attr__3487.call(this,elem,k);
case  3 :
return attr__3488.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return attr;
})()
;
pinot.html.text = (function text(elem,v){
var G__3492__3493 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__3492__3493))
{var el__3494 = cljs.core.first.call(null,G__3492__3493);

goog.dom.setTextContent.call(null,el__3494,v);
{
var G__3495 = cljs.core.next.call(null,G__3492__3493);
G__3492__3493 = G__3495;
continue;
}
} else
{}
break;
}
return elem;
});
/**
* @param {...*} var_args
*/
pinot.html.val = (function() { 
var val__delegate = function (elem,p__3496){
var vec__3497__3498 = p__3496;
var v__3499 = cljs.core.nth.call(null,vec__3497__3498,0,null);

var elem__3500 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,elem))?cljs.core.first.call(null,elem):elem);

if(cljs.core.truth_(v__3499))
{goog.dom.forms.setValue.call(null,elem__3500,v__3499);
return elem__3500;
} else
{return goog.dom.forms.getValue.call(null,elem__3500);
}
};
var val = function (elem,var_args){
var p__3496 = null;
if (goog.isDef(var_args)) {
  p__3496 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, elem, p__3496);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__3501){
var elem = cljs.core.first(arglist__3501);
var p__3496 = cljs.core.rest(arglist__3501);
return val__delegate.call(this, elem, p__3496);
});
return val;
})()
;
pinot.html.elem_id = cljs.core.atom.call(null,0);
pinot.html.group_id = cljs.core.atom.call(null,0);
pinot.html.as_content = (function as_content(parent,content){
var G__3502__3503 = cljs.core.seq.call(null,content);

while(true){
if(cljs.core.truth_(G__3502__3503))
{var c__3504 = cljs.core.first.call(null,G__3502__3503);

var child__3505 = (cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c__3504))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__3504))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__3504))?goog.dom.createTextNode.call(null,c__3504):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__3504))?pinot.html.elem_factory.call(null,c__3504):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__3504))?as_content.call(null,parent,c__3504):(cljs.core.truth_(c__3504.nodeName)?c__3504:null))))));

if(cljs.core.truth_(child__3505))
{goog.dom.appendChild.call(null,parent,child__3505);
} else
{}
{
var G__3506 = cljs.core.next.call(null,G__3502__3503);
G__3502__3503 = G__3506;
continue;
}
} else
{return null;
}
break;
}
});
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
pinot.html.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
pinot.html.normalize_element = (function normalize_element(p__3508){
var vec__3509__3510 = p__3508;
var tag__3511 = cljs.core.nth.call(null,vec__3509__3510,0,null);
var content__3512 = cljs.core.nthnext.call(null,vec__3509__3510,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3576__auto____3513 = cljs.core.keyword_QMARK_.call(null,tag__3511);

if(cljs.core.truth_(or__3576__auto____3513))
{return or__3576__auto____3513;
} else
{var or__3576__auto____3514 = cljs.core.symbol_QMARK_.call(null,tag__3511);

if(cljs.core.truth_(or__3576__auto____3514))
{return or__3576__auto____3514;
} else
{return cljs.core.string_QMARK_.call(null,tag__3511);
}
}
})())))
{throw cljs.core.str.call(null,tag__3511," is not a valid tag name.");
} else
{}
var vec__3515__3517 = cljs.core.re_matches.call(null,pinot.html.re_tag,cljs.core.name.call(null,tag__3511));
var ___3518 = cljs.core.nth.call(null,vec__3515__3517,0,null);
var tag__3519 = cljs.core.nth.call(null,vec__3515__3517,1,null);
var id__3520 = cljs.core.nth.call(null,vec__3515__3517,2,null);
var class$__3521 = cljs.core.nth.call(null,vec__3515__3517,3,null);
var vec__3516__3528 = (function (){var vec__3522__3523 = clojure.string.split.call(null,tag__3519,/:/);
var nsp__3524 = cljs.core.nth.call(null,vec__3522__3523,0,null);
var t__3525 = cljs.core.nth.call(null,vec__3522__3523,1,null);
var ns_xmlns__3526 = pinot.html.xmlns.call(null,cljs.core.keyword.call(null,nsp__3524));

if(cljs.core.truth_(t__3525))
{return cljs.core.Vector.fromArray([(function (){var or__3576__auto____3527 = ns_xmlns__3526;

if(cljs.core.truth_(or__3576__auto____3527))
{return or__3576__auto____3527;
} else
{return nsp__3524;
}
})(),t__3525]);
} else
{return cljs.core.Vector.fromArray(["﷐'xhtml".call(null,pinot.html.xmlns),nsp__3524]);
}
})();
var nsp__3529 = cljs.core.nth.call(null,vec__3516__3528,0,null);
var tag__3530 = cljs.core.nth.call(null,vec__3516__3528,1,null);
var tag_attrs__3532 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__3507_SHARP_){
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.second.call(null,p1__3507_SHARP_)));
}),cljs.core.ObjMap.fromObject(["﷐'id","﷐'class"],{"﷐'id":(function (){var or__3576__auto____3531 = id__3520;

if(cljs.core.truth_(or__3576__auto____3531))
{return or__3576__auto____3531;
} else
{return null;
}
})(),"﷐'class":(cljs.core.truth_(class$__3521)?clojure.string.replace.call(null,class$__3521,/\./," "):null)})));
var map_attrs__3533 = cljs.core.first.call(null,content__3512);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__3533)))
{return cljs.core.Vector.fromArray([nsp__3529,tag__3530,cljs.core.merge.call(null,tag_attrs__3532,map_attrs__3533),cljs.core.next.call(null,content__3512)]);
} else
{return cljs.core.Vector.fromArray([nsp__3529,tag__3530,tag_attrs__3532,content__3512]);
}
});
pinot.html.parse_content = (function parse_content(elem,content){
var attrs__3534 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__3534)))
{pinot.html.attr.call(null,elem,attrs__3534);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
pinot.html.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
pinot.html.elem_factory = (function elem_factory(tag_def){
var vec__3535__3536 = pinot.html.normalize_element.call(null,tag_def);
var nsp__3537 = cljs.core.nth.call(null,vec__3535__3536,0,null);
var tag__3538 = cljs.core.nth.call(null,vec__3535__3536,1,null);
var attrs__3539 = cljs.core.nth.call(null,vec__3535__3536,2,null);
var content__3540 = cljs.core.nth.call(null,vec__3535__3536,3,null);
var elem__3541 = pinot.html.create_elem.call(null,nsp__3537,tag__3538);

pinot.html.attr.call(null,elem__3541,cljs.core.merge.call(null,attrs__3539,cljs.core.ObjMap.fromObject(["﷐'pinotId"],{"﷐'pinotId":cljs.core.swap_BANG_.call(null,pinot.html.elem_id,cljs.core.inc)})));
pinot.html.as_content.call(null,elem__3541,content__3540);
return elem__3541;
});
/**
* @param {...*} var_args
*/
pinot.html.html = (function() { 
var html__delegate = function (tags){
return cljs.core.map.call(null,pinot.html.elem_factory,tags);
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__3542){
var tags = cljs.core.seq( arglist__3542 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
pinot.html.pinot_group = (function pinot_group(func){
if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,func)))
{var elem__3543 = func.call(null);

return pinot.html.attr.call(null,cljs.core.first.call(null,elem__3543),"﷐'pinotGroup");
} else
{return null;
}
});
pinot.html.parent = (function parent(elem){
return elem.parentNode;
});
pinot.html.is_dom_QMARK_ = (function is_dom_QMARK_(elem){
return goog.dom.isNodeLike.call(null,elem);
});
pinot.html.dom_clone = (function dom_clone(elem){
var neue__3544 = elem.cloneNode(true);

return neue__3544;
});
pinot.html.append_to = (function append_to(elem,html){
var G__3545__3547 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__3545__3547))
{var el__3548 = cljs.core.first.call(null,G__3545__3547);

var G__3546__3549 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,html));

while(true){
if(cljs.core.truth_(G__3546__3549))
{var tag__3550 = cljs.core.first.call(null,G__3546__3549);

goog.dom.appendChild.call(null,el__3548,pinot.html.dom_clone.call(null,tag__3550));
{
var G__3551 = cljs.core.next.call(null,G__3546__3549);
G__3546__3549 = G__3551;
continue;
}
} else
{}
break;
}
{
var G__3552 = cljs.core.next.call(null,G__3545__3547);
G__3545__3547 = G__3552;
continue;
}
} else
{return null;
}
break;
}
});
pinot.html.unappend = (function unappend(elem){
var G__3553__3554 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__3553__3554))
{var elem__3555 = cljs.core.first.call(null,G__3553__3554);

goog.dom.removeNode.call(null,elem__3555);
{
var G__3556 = cljs.core.next.call(null,G__3553__3554);
G__3553__3554 = G__3556;
continue;
}
} else
{return null;
}
break;
}
});
pinot.html.nodelist__GT_coll = (function nodelist__GT_coll(nl){
var iter__161__auto____3561 = (function iter__3557(s__3558){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3558__3559 = s__3558;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3558__3559)))
{var x__3560 = cljs.core.first.call(null,s__3558__3559);

return cljs.core.cons.call(null,(nl[x__3560]),iter__3557.call(null,cljs.core.rest.call(null,s__3558__3559)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____3561.call(null,cljs.core.range.call(null,0,nl.length));
});
pinot.html.dom_find = (function dom_find(query){
var q__3562 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,query))?cljs.core.str.call(null,"[pinotGroup$=",pinot.html.pinot_group.call(null,query),"]"):query);
var results__3563 = goog.dom.query.call(null,q__3562);

return pinot.html.nodelist__GT_coll.call(null,results__3563);
});
