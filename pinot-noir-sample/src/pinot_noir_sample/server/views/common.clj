(ns pinot-noir-sample.server.views.common
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))
 
(defpartial layout [header & content]
  (html5
    [:head
     [:title "pinot-noir-sample"]
     (include-css "/css/reset.css")
     (include-css "/css/ui-lightness/jquery-ui-1.8.16.custom.css_")
     (include-js "/js/jquery-1.6.4.min.js")
     (include-js "/js/jquery-ui-1.8.16.custom.min.js")
     (include-js "/cljs/bootstrap.js")
     (include-js "/cljs/todo.js")
     [:script "goog.require('todo')"]]
    [:body
     [:div {:id "header"} [:h2 {:id "header-title"} header]]
     [:div#wrapper {:id "content"}
      content]]))
