goog.provide('pinot.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('pinot.util.clj');
goog.require('pinot.util.js');
goog.require('pinot.html');
goog.require('clojure.string');
pinot.events.body = cljs.core.atom.call(null,null);
pinot.events.get_body = (function get_body(){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.deref.call(null,pinot.events.body))))
{return cljs.core.reset_BANG_.call(null,pinot.events.body,cljs.core.first.call(null,pinot.html.dom_find.call(null,"body")));
} else
{return cljs.core.deref.call(null,pinot.events.body);
}
});
pinot.events.__GT_target = (function __GT_target(elem){
if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,elem)))
{return cljs.core.ObjMap.fromObject(["﷐'pinotGroup"],{"﷐'pinotGroup":pinot.html.attr.call(null,cljs.core.first.call(null,elem.call(null)),"﷐'pinotGroup")});
} else
{if(cljs.core.truth_(pinot.html.attr.call(null,elem,"﷐'pinotId")))
{return cljs.core.ObjMap.fromObject(["﷐'elem","﷐'pinotId"],{"﷐'elem":elem,"﷐'pinotId":pinot.html.attr.call(null,elem,"﷐'pinotId")});
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.ObjMap.fromObject(["﷐'elem"],{"﷐'elem":elem});
} else
{return null;
}
}
}
});
pinot.events.match_QMARK_ = (function match_QMARK_(p__3640,init_target){
var map__3641__3642 = p__3640;
var map__3641__3643 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3641__3642))?cljs.core.apply.call(null,cljs.core.hash_map,map__3641__3642):map__3641__3642);
var pinotId__3644 = cljs.core.get.call(null,map__3641__3643,"﷐'pinotId");
var pinotGroup__3645 = cljs.core.get.call(null,map__3641__3643,"﷐'pinotGroup");
var elem__3646 = cljs.core.get.call(null,map__3641__3643,"﷐'elem");

var target__3647 = init_target;

while(true){
var target_group__3648 = pinot.html.attr.call(null,target__3647,"﷐'pinotGroup");
var target_pinot__3649 = pinot.html.attr.call(null,target__3647,"﷐'pinotId");

if(cljs.core.truth_(cljs.core.not_EQ_.call(null,target__3647,pinot.html.parent.call(null,pinot.events.get_body.call(null)))))
{if(cljs.core.truth_((function (){var or__3576__auto____3651 = (function (){var and__3574__auto____3650 = elem__3646;

if(cljs.core.truth_(and__3574__auto____3650))
{return cljs.core._EQ_.call(null,elem__3646,target__3647);
} else
{return and__3574__auto____3650;
}
})();

if(cljs.core.truth_(or__3576__auto____3651))
{return or__3576__auto____3651;
} else
{var or__3576__auto____3653 = (function (){var and__3574__auto____3652 = pinotGroup__3645;

if(cljs.core.truth_(and__3574__auto____3652))
{return cljs.core._EQ_.call(null,pinotGroup__3645,target_group__3648);
} else
{return and__3574__auto____3652;
}
})();

if(cljs.core.truth_(or__3576__auto____3653))
{return or__3576__auto____3653;
} else
{var and__3574__auto____3654 = pinotId__3644;

if(cljs.core.truth_(and__3574__auto____3654))
{return cljs.core._EQ_.call(null,pinotId__3644,target_pinot__3649);
} else
{return and__3574__auto____3654;
}
}
}
})()))
{return target__3647;
} else
{{
var G__3655 = pinot.html.parent.call(null,target__3647);
target__3647 = G__3655;
continue;
}
}
} else
{return null;
}
break;
}
});
pinot.events.on = (function on(elem,event,func){
var ev_name__3656 = clojure.string.upper_case.call(null,cljs.core.name.call(null,event));
var event__3657 = (goog.events.EventType[ev_name__3656]);
var body_elem__3658 = pinot.events.get_body.call(null);

var G__3659__3660 = cljs.core.seq.call(null,pinot.util.clj.__GT_coll.call(null,elem));

while(true){
if(cljs.core.truth_(G__3659__3660))
{var el__3661 = cljs.core.first.call(null,G__3659__3660);

var parsed__3662 = pinot.events.__GT_target.call(null,el__3661);

goog.events.listen.call(null,body_elem__3658,event__3657,((function (G__3659__3660){
return (function (e){
var target__3663 = e.target;

var temp__3723__auto____3664 = pinot.events.match_QMARK_.call(null,parsed__3662,target__3663);

if(cljs.core.truth_(temp__3723__auto____3664))
{var match__3665 = temp__3723__auto____3664;

return func.call(null,match__3665,e);
} else
{return true;
}
});})(G__3659__3660))
);
{
var G__3666 = cljs.core.next.call(null,G__3659__3660);
G__3659__3660 = G__3666;
continue;
}
} else
{}
break;
}
return elem;
});
pinot.events.prevent = (function prevent(e){
return e.preventDefault();
});
