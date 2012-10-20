(ns ftmsclj.views.main
  (:require [ftmsclj.views.common :as common]
            [ftmsclj.views.home :as home]
            [ftmsclj.views.content :as content])
  (:use [noir.core :only [defpage]]
        [noir.request :only [ring-request]]
        [noir.fetch.remotes :only [defremote]]
        [hiccup.core :only [html]]
        [ftmsclj.models.user :only [names]]))

(defn present [content]
  "If the accept header calls for HTML, serve it within the layout"
  (if (> (.indexOf (get (:headers (ring-request)) "accept") "html") -1) 
    (common/layout content)
    content))

(defpage "/" []
         (common/layout (home/home)))

(defpage "/GraceAdele/:pageid" {:keys [pageid]}
  ;; filter out URLs we don't explicitly serve
  (if (some #(= (.toLowerCase pageid) %) ["buy" "sell" "learn" "party"])
    (present (eval (read-string (str "(ftmsclj.views.content/" (.toLowerCase pageid) ")"))))
    false))


(defpage "/GraceAdele/Blog" {}
  (present (content/buy)))

;; /GraceAdele/Buy
;; /GraceAdele/Sell
;; /GraceAdele/Party
;; /GraceAdele/Learn
;; /GraceAdele/Blog/permalink-title-goes-here.html

(defremote meet [n]
  (println n)
  (if (@names n) nil
    (swap! names conj n)))

(defremote forget [n]
  (swap! names disj n)
  (println names))
