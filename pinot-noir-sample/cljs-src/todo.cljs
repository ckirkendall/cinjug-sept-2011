(ns todo.core
  (:require [pinot.html :as ph]
            [pinot.html.tags :as tags]
            [pinot.events :as pe]
            [pinot.remotes :as remotes])
  (:require-macros [pinot.macros :as pm]))

(def jquery (js* "$"))
(def alert (js* "alert"))



(defn show-logon-form [] 
  (ph/append-to (ph/dom-find "body")
                (ph/html [:div {:id "logonDiv" }
                          (tags/form-to {:id "todoForm"} [:post "return false;"]
                                        [:table
                                         [:tr
                                          [:td (tags/label "name" "User Name: ")]
                                          [:td (tags/text-field "userName")]]
                                         [:tr
                                           [:td (tags/label "name" "Password: ")]
                                           [:td (tags/text-field "password")]]])
                                         [:button {:id "button1" } "logon"]])))

(defn show-user-info []
  (pm/remote (get-user-info) [user-info]
             (ph/unappend (ph/dom-find "#logonDiv"))
             (ph/unappend (ph/dom-find "#header-title"))
             (ph/append-to (ph/dom-find "#header")
                           (ph/html [:h2 {:id "header-title"} 
                                     "Welcome " 
                                          (:fname user-info) 
                                          (:lname user-info)]))
             (ph/append-to (ph/dom-find "body")
                           (ph/html [:div {:class "panel-header"} "User Info"]
                                    [:div {:class "panel"}
                                     [:table
                                      [:tr
                                       [:th "First Name:"]
                                       [:td (:fname user-info)]]
                                      [:tr
                                       [:th "Last name:"]
                                       [:td (:lname user-info)]]
                                      [:tr
                                       [:th "Email Address:"]
                                       [:td (:email user-info)]]
                                      [:tr
                                       [:th "Twitter:"]
                                       [:td (:twitter user-info)]]]]))))
                            
                          

(defn check-user []
  (let [username (.. js/document (getElementById "userName") value)
        password (.. js/document (getElementById "password") value)]
        (pm/remote (logon username password) [result]
                   (if (= result "success")
                     (show-user-info)
                     (alert "logon failed")))))

(defn decorate-button []
  (. (jquery "#button1") (button))
  (. (jquery "#button1") (click #(check-user)))) 

(defn init []
  (show-logon-form)
  (decorate-button))

(jquery init)