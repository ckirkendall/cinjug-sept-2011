(ns pinot-noir-sample.server.core
  (:require [noir.server :as server]
            [noir.session :as session]))
(use 'noir.pinot.remotes)


(defremote logon [id password]
  (if (and (= id "captain") (= password "kirk"))
    (do 
      (println "success id:" id)
      (session/put! :userinfo 
                    {:fname "Creighton"
                     :lname "Kirkendall"
                     :email "ckirkendall@gmail.com"
                     :twitter "@crkirkendall"})
      "success")
    (do  
      (println "failure id:" id)
      "failure")))


(defremote get-user-info []
  (println (session/get :userinfo))
  (session/get :userinfo))

(server/add-middleware wrap-remotes)


(server/load-views "src/pinot_noir_sample/server/views/")

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'pinot-noir-sample})))

