goog.provide('pinot.util.js');
goog.require('cljs.core');
pinot.util.js.map__GT_js = (function map__GT_js(m){
var out__3564 = cljs.core.js_obj.call(null);

var G__3565__3566 = cljs.core.seq.call(null,m);

while(true){
if(cljs.core.truth_(G__3565__3566))
{var vec__3567__3568 = cljs.core.first.call(null,G__3565__3566);
var k__3569 = cljs.core.nth.call(null,vec__3567__3568,0,null);
var v__3570 = cljs.core.nth.call(null,vec__3567__3568,1,null);

(out__3564[cljs.core.name.call(null,k__3569)] = v__3570);
{
var G__3571 = cljs.core.next.call(null,G__3565__3566);
G__3565__3566 = G__3571;
continue;
}
} else
{}
break;
}
return out__3564;
});
pinot.util.js.log = (function log(text){
return console.log(text);
});
pinot.util.js.as_int = (function as_int(n){
return parseInt.call(null,n);
});
