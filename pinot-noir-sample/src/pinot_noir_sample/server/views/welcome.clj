(ns pinot-noir-sample.server.views.welcome
  (:require [pinot-noir-sample.server.views.common :as common]
            [noir.content.pages :as pages])
  (:use noir.core
        hiccup.core
        hiccup.page-helpers))

(defpage "/welcome" []
         (common/layout
           "Welcome to pinot-noir-sample" [:p] ))
