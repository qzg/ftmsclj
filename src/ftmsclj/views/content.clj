(ns ftmsclj.views.content
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css include-js html5]]
        [hiccup.element]))


(defpartial article [title content]
  [:article 
    [:h1 title] 
    content])


(defpartial buy []
  (article "Shop Grace Adele Online!" 
    [:div "You can definitely shop Grace Adele online ... HERE!"]))



(defpartial sell []
  (article "Sell Grace Adele Online!" 
    [:div "Sell Grace Adele!!!"]))



(defpartial learn []
  (article "Learn Grace Adele Online!" 
    [:div "Learn about Grace Adele!"]))


(defpartial party []
  (article "Party Grace Adele Online!" 
    [:div "Have a GA Party!!!"]))




