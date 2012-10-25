(ns ftmsclj.views.main
  (:require [ftmsclj.views.common :as common]
            [ftmsclj.views.home :as home]
            [ftmsclj.views.content :as content])
  (:use [noir.core :only [defpage]]
        [noir.request :only [ring-request]]
        [noir.fetch.remotes :only [defremote]]
        [hiccup.core :only [html]]
        [ftmsclj.models.user :only [names]]))

(defn present [title content]
  "If the accept header calls for HTML, serve it within the layout"
  (if (> (.indexOf (get (:headers (ring-request)) "accept") "html") -1) 
    (common/layout title content)
    content))


(defpage "/" []
  (common/layout "Home" (home/home)))


(defpage "/GraceAdele/:pageid" {:keys [pageid]}
  ;; /GraceAdele/Buy ;; /GraceAdele/Sell ;; /GraceAdele/Party ;; /GraceAdele/Learn
  ;; filter out URLs we don't explicitly serve
  (if (some #(= (.toLowerCase pageid) %) ["buy" "sell" "learn" "party"])
    (present pageid (eval (read-string (str "(ftmsclj.views.content/" (.toLowerCase pageid) ")"))))
    {:status 404 :body (present "Not Found" (content/article "Not Found" (content/not-found)))}))


(defpage "/GraceAdele/Blog" {}
  (present "Blog" (content/bloghome)))


(defpage "/GraceAdele/Blog/:page" {:keys [page]}
  ;; /GraceAdele/Blog/permalink-title-goes-here.html
  (present page (content/blogpage page)))


(defremote meet [n]
  (println n)
  (if (@names n) nil
    (swap! names conj n)))

(defremote forget [n]
  (swap! names disj n)
  (println names))
