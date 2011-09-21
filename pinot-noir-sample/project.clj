(defproject pinot-noir-sample "0.1.0-SNAPSHOT"
            :description "A little drink of pinot noir"
            :dependencies [[org.clojure/clojure "1.2.1"]
                           [noir "1.1.0"]
                           [pinot "0.1.0-SNAPSHOT"]]
            :dev-dependencies[[lein-eclipse "1.0.0"]]
            :main pinot-noir-sample.server.core)

