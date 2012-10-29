(ns ftmsclj.views.content
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css include-js html5]]
        [hiccup.element]))


(defpartial article [title content & more-content]
  [:article#content-block  
    [:h1 title] 
    (conj content more-content)])


(defpartial buy []
  (article "Are you ready?" 
   [:div.row-fluid
    [:div.span7 "this is a test"]
    [:p 
      [:ul 
        [:li.lead "You" [:i " like "] "wearing a beautifully coordinated outfit."]
        [:li.lead "Putting it together" [:i " every day "] "can be pretty challenging."]
        [:li.lead "GraceAdele makes it " [:i "easy."]]]]
    [:h2 "A Beautifully Coordinated Outfit"]
    [:p "What goes into just" [:em " one "] "&ldquo;beautifully coordinated outfit&rdquo;?"]
    [:ul
     [:li "clothes"]
     [:li "purse/clutch"]
     [:li "jewelry"]
     [:li "accessories"]
     [:li "shoes"]]
    [:p "... and it all has to" [:em " match"] ".  You already have clothes and shoes that match.
        GraceAdele provides the rest.  Professionally designed and color-coordinated collections of
        purses, clutches, jewelry and accessories.  Just pick a color.  Your purse, jewelry and 
        accesory selections are suddenly easy. You can be certain you'll be the recipient of 
        compliments all day long." ]]))


(defpartial sell []
  (article "Sell Grace Adele Online!" 
    [:div "Sell Grace Adele!!!"]))


(defpartial learn []
  (article "Learn Grace Adele Online!" 
    [:div "Learn about Grace Adele!"]))


(defpartial party []
  (article "Party Grace Adele Online!" 
    [:div "Have a GA Party!!!"]))


(defpartial bloghome []
  (article "Welcome to the blog!" 
    [:div "Blog Index Goes Here"]))


(defpartial blogpage [page-name]
  (article (str "Shouldn't I be looking up the page " page-name "?")
    [:div page-name]))


(defpartial not-found []
  [:div "Return to the " [:a "homepage"]])

