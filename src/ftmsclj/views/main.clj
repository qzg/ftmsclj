(ns ftmsclj.views.main
  (:require [ftmsclj.views.common :as common]
            [ftmsclj.views.home :as home])
  (:use [noir.core :only [defpage]]
        [noir.fetch.remotes :only [defremote]]
        [hiccup.core :only [html]]
        [ftmsclj.models.user :only [names]]))


(defpage "/" []
         (common/layout (home/home)))

(defremote meet [n]
  (println n)
  (if (@names n) nil
    (swap! names conj n)))

(defremote forget [n]
  (swap! names disj n)
  (println names))
