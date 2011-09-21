(ns pinot.html
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [goog.style :as gstyle]
            [goog.dom.query :as query]
            [goog.dom.forms :as forms]
            [clojure.string :as string]
            [pinot.util.clj :as pclj]
            [pinot.util.js :as pjs]))

(def xmlns {:xhtml "http://www.w3.org/1999/xhtml"
            :svg "http://www.w3.org/2000/svg"})

;; ********************************************
;; Attribute manipulation
;; ********************************************

(defn css [elem k & [v]]
  (cond
    (map? k) (doseq [[prop value] k]
               (css elem prop value))
    (nil? v) (gstyle/getStyle elem (name k))
    :else (doseq [el (pclj/->coll elem)]
            (gstyle/setStyle el (name k) (name v))))
  elem)

(defn attr 
  ([elem attrs]
   (if-not (map? attrs)
     (. elem (getAttribute (name attrs)))
     (do
       (doseq [[k v] attrs]
         (attr elem k v))
       elem)))
  ([elem k v]
   (doseq [el (pclj/->coll elem)]
     (. el (setAttribute (name k) v)))
   elem))

(defn text [elem v]
  (doseq [el (pclj/->coll elem)]
    (dom/setTextContent el v))
  elem)

(defn val [elem & [v]]
  (let [elem (if (coll? elem)
               (first elem)
               elem)]
    (if v
      (do 
        (forms/setValue elem v)
        elem)
      (forms/getValue elem))))

;; ********************************************
;; Element creation via Hiccup-like vectors 
;; ********************************************

(declare elem-factory)
(def elem-id (atom 0))
(def group-id (atom 0))

(defn as-content [parent content]
  (doseq[c content]
    (let [child (cond
                  (nil? c) nil
                  (map? c) (throw "Maps cannot be used as content")
                  (string? c) (dom/createTextNode c)
                  (vector? c) (elem-factory c)
                  ;;TODO: there's a bug in clojurescript that prevents seqs from
                  ;; being considered collections
                  (seq? c) (as-content parent c)
                  (.nodeName c) c)]
      (when child
        (dom/appendChild parent child)))))

;; From Weavejester's Hiccup: https://github.com/weavejester/hiccup/blob/master/src/hiccup/core.clj#L57
(def ^{:doc "Regular expression that parses a CSS-style id and class from a tag name." :private true}
  re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(defn- normalize-element
  "Ensure a tag vector is of the form [tag-name attrs content]."
  [[tag & content]]
  (when (not (or (keyword? tag) (symbol? tag) (string? tag)))
    (throw (str tag " is not a valid tag name.")))
  (let [[_ tag id class] (re-matches re-tag (name tag))
        [nsp tag]     (let [[nsp t] (string/split tag #":")
                               ns-xmlns (xmlns (keyword nsp))]
                           (if t
                             [(or ns-xmlns nsp) t]
                             [(:xhtml xmlns) nsp]))
        tag-attrs        (into {} 
                               (filter #(not (nil? (second %)))
                                       {:id (or id nil)
                                        :class (if class (string/replace class #"\." " "))}))
        map-attrs        (first content)]
    (if (map? map-attrs)
      [nsp tag (merge tag-attrs map-attrs) (next content)]
      [nsp tag tag-attrs content])))


(defn parse-content [elem content]
  (let [attrs (first content)]
  (if (map? attrs)
    (do
      (attr elem attrs)
      (rest content))
    content)))

(defn create-elem [nsp tag]
  (. js/document (createElementNS nsp tag)))

(defn elem-factory [tag-def]
  (let [[nsp tag attrs content] (normalize-element tag-def)
        elem (create-elem nsp tag)]
    (attr elem (merge attrs {:pinotId (swap! elem-id inc)}))
    (as-content elem content)
    elem))

(defn html [& tags]
  (map elem-factory tags))

;; ********************************************
;; Dom interaction functions
;; ********************************************

(defn pinot-group [func]
  (when (fn? func)
    (let [elem (func)]
      (attr (first elem) :pinotGroup))))

(defn parent [elem]
  (.parentNode elem))

(defn is-dom? [elem]
  (dom/isNodeLike elem))

(defn dom-clone [elem]
  (let [neue (. elem (cloneNode true))]
    neue))

;;TODO: for a collection of elements it appends the same DOM
;; element to each one, causing it just to move around. Really
;; if it's a collection we should clone the html element(s) and
;; append new ones to each of the items in elem. This, however,
;; makes it impossible to keep track of an individual dom fragment
;; for named view objects.
(defn append-to [elem html]
  (doseq [el (pclj/->coll elem)
          tag (pclj/->coll html)]
    (dom/appendChild el (dom-clone tag))))

(defn unappend [elem]
  (doseq [elem (pclj/->coll elem)]
    (dom/removeNode elem)))

(defn nodelist->coll [nl]
    ;; The results are a nodelist, which looks like an array, but
    ;; isn't one. We have to turn it into a collection that we can
    ;; work with.
  (for [x (range 0 (.length nl))]
    (aget nl x)))

(defn dom-find [query]
  (let [q (if (fn? query)
            (str "[pinotGroup$=" (pinot-group query) "]")
            query)
        results (dom/query q)]
    (nodelist->coll results)))
