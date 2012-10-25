(ns ftmsclj.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css include-js html5]]
        [hiccup.util :only [with-base-url]]
        [hiccup.element]))

(defpartial layout [title & content]
    (html5
      [:head
        [:title (str "Grace Adele : Fashion That Makes Sense :: " title)]
        [:meta {:name "description" :content "Grace Adele makes bags, clutches, jewelry and accessories that make sense out of fashion.  Buy online or sign up to become a Grace Adele fashion consultant."} ]
        [:link {:rel "icon" :href "/img/favicon.ico"}]
        (include-css "/css/bootstrap_and_overrides.css" "/css/welcome.css")
        (include-js "/js/jquery.js"                "/js/jquery_ujs.js" 
                    "/js/bootstrap-transition.js"  "/js/bootstrap-alert.js"
                    "/js/bootstrap-modal.js"       "/js/bootstrap-dropdown.js"
                    "/js/bootstrap-scrollspy.js"   "/js/bootstrap-tab.js"
                    "/js/bootstrap-tooltip.js"     "/js/bootstrap-popover.js"
                    "/js/bootstrap-button.js"      "/js/bootstrap-collapse.js"
                    "/js/bootstrap-carousel.js"    "/js/bootstrap-typeahead.js"
                    "/js/bootstrap.js"             "/js/application.js")]
      [:body
       [:div.container
        [:header#topbanner
          (image {:alt "Grace Adele" :id "galogo"} "/img/logo-black.png" )
          (image {:alt "Kiyu and Theresa Gabriel" :id "qtgabriel"} "/img/KiyuAndTheresaGabriel.png")
          [:nav 
            (link-to {:id "learnlink" :title "Learn more about Grace Adele"} "https://fashionthatmakessense.graceadele.us/GraceAdele/Home" [:span "Learn"])
            (link-to {:id "partylink" :title "Have a Grace Adele Home or Book Party"} "https://fashionthatmakessense.graceadele.us/GraceAdele/Host" [:span "Party"])
            (link-to {:id "selllink" :title "Sell Grace Adele by becoming a Grace Adele Independent Consultant"} "https://fashionthatmakessense.graceadele.us/GraceAdele/Join" [:span "Sell"])
            (link-to {:id "buylink" :title "Buy Grace Adele Products online"} "https://fashionthatmakessense.graceadele.us/GraceAdele/Buy/BuildMyLook" [:span "Buy"]) ]]
        content]]))


(defpartial minimal-layout [title & content]
  (html5
    [:head
     [:title title]
     (include-css "/css/reset.css")]
    [:body {:style "margin:20px;"}
     [:div#wrapper
      content]
     ]))



(defpartial include-navigation []
  [:div {:class "navbar navbar-fixed-top"}
    [:div {:class "navbar-inner"}
      [:a {:class "btn btn-navbar" :data-toggle "collapse" :data-target ".nav-collapse"}
        [:span {:class "icon-bar"}]
        [:span {:class "icon-bar"}]
        [:span {:class "icon-bar"}]]
      [:a {:class "brand" :href "#"}
        "&nbsp;" (name :ftmsclj)]
      [:div {:class "nav-collapse"}
        [:ul {:class "nav"}
          [:li 
            [:a {:href "#" :id "one-link"} "One Clone Demo"]]
          [:li {:class "dropdown" :id "templates"}
            [:a {:class "dropdown-toggle" :data-toggle "dropdown" :href "#templates"}
              "Bootstrap Templates"
              [:b {:class "caret"}]]
            [:ul {:class "dropdown-menu"}
              [:li 
                [:a {:id "blank-link"} "Blank"]]
              [:li 
                [:a {:id "welcome-link"} "Welcome"]]
              [:li 
                [:a {:id "fluid-link"} "Fluid"]]]]]]]])



(defpartial old-layout [& content]
  (html5
    [:head
      [:meta {:charset "utf-8"}]
      [:title (name :ftmsclj)]
      [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
      [:meta {:name "description" :content ""}]
      [:meta {:name "author" :content ""}]
      [:link {:rel "stylesheet/less" :type "text/css" :href "/less/bootstrap.less"}]
      [:link {:rel "stylesheet/less" :type "text/css" :href "/less/responsive.less"}]
      [:style "body {padding-top: 60px;}"]
      (include-js "/js/less-1.3.0.js")
      (include-css "/css/one.css")]
    [:body
     (include-navigation)
     [:div#content content]
     (include-js  "/js/jquery.js")
     (include-js  "/js/bootstrap-transition.js")
     (include-js  "/js/bootstrap-alert.js")
     (include-js  "/js/bootstrap-modal.js")
     (include-js  "/js/bootstrap-dropdown.js")
     (include-js  "/js/bootstrap-scrollspy.js")
     (include-js  "/js/bootstrap-tab.js")
     (include-js  "/js/bootstrap-tooltip.js")
     (include-js  "/js/bootstrap-popover.js")
     (include-js  "/js/bootstrap-button.js")
     (include-js  "/js/bootstrap-collapse.js")
     (include-js  "/js/bootstrap-carousel.js")
     (include-js  "/js/bootstrap-typeahead.js")
     (cljs/include-scripts)
     ]))


