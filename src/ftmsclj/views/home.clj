(ns ftmsclj.views.home
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css include-js html5]]
        [hiccup.element]))


(defpartial home []
  [:section.span12
    (image {:alt "What color are you feeling like today?" :id "what-color-feeling"} "/img/whatcolorareyoufeeling.png")
    [:div#color-swatches
      (link-to "https://fashionthatmakessense.graceadele.us/GraceAdele/Buy/BuildMyLook?sgi=5" [:div#swatch-red [:span "Red"]])
      (link-to "https://fashionthatmakessense.graceadele.us/GraceAdele/Buy/BuildMyLook?sgi=7" [:div#swatch-zebra [:span "Zebra"]])
      (link-to "https://fashionthatmakessense.graceadele.us/GraceAdele/Buy/BuildMyLook?sgi=6" [:div#swatch-teal [:span "Teal"]])
      (link-to "https://fashionthatmakessense.graceadele.us/GraceAdele/Buy/BuildMyLook?sgi=1" [:div#swatch-black [:span "Black"]])
      (link-to "https://fashionthatmakessense.graceadele.us/GraceAdele/Buy/BuildMyLook?sgi=2" [:div#swatch-leopard [:span "Leopard"]])
      (link-to "https://fashionthatmakessense.graceadele.us/GraceAdele/Buy/BuildMyLook?sgi=3" [:div#swatch-natural [:span "Natural"]])
      (link-to "https://fashionthatmakessense.graceadele.us/GraceAdele/Buy/BuildMyLook?sgi=4" [:div#swatch-purple [:span "Purple"]])]]

  [:footer#page-footer.span12 
    (link-to "http://www.fashionthatmakessense.com" (image {:id "grace-adele-approved"} "/img/ga_approved.png"))
    (link-to {:rel "nofollow"} "http://www.graceadele.com" (image {:id "gacrb"} "/img/GACRB.jpg"))
    [:div.row
      [:section#ga-style-system.span6 {:title "The Grace Adele Style System"}
        [:h3 [:span "The Grace Adele Style System"]]
        [:h4 "Follow five simple steps to create your perfect look with Grace Adele."]
        [:ol 
          [:li [:strong "Pick My Bag Color: "] "From glam purple to zebra striped, discover the color that suits you best."]
          [:li [:strong "Choose My Bag: "] "Choose from beautiful bags that will anchor your style and organize your must-haves."]
          [:li [:strong "Add My Clutch:"] "This is where it gets really fun! Select a clutch — or two or three — to adorn your bag. Slide the clutch into the outer pocket on your bag and put your style on display. Change it as often as the mood strikes you."]
          [:li [:strong "Style My Bag: "] "Add a little flair and organize your essentials with clip-ons, then fill your bag with accessories so you can find what you need in a pinch."]
          [:li [:strong "Style Me: "] "Elevate your look with signature jewelry and scarves."] ]

        [:ul#simple-steps
          [:li (image {:alt "Grace Adele colors, patterns and prints swatches" :id "simple-step-1"} "/img/step1-color.jpg")]
          [:li (image {:alt "Grace Adele colors, patterns and prints swatches" :id "simple-step-1"} "/img/step2-bag.jpg")]
          [:li (image {:alt "Grace Adele colors, patterns and prints swatches" :id "simple-step-1"} "/img/step3-clutch.jpg")]
          [:li (image {:alt "Grace Adele colors, patterns and prints swatches" :id "simple-step-1"} "/img/step4-accessories.jpg")]
          [:li (image {:alt "Grace Adele colors, patterns and prints swatches" :id "simple-step-1"} "/img/step5-jewelry.jpg")] ]]

      [:section#buy-party-information.span3
        [:h3.buy [:span "Buy..."]]
        [:p "Find the bag / clutch / jewelry / accessory combinations which best fit your personal style. There are literally <em>thousands</em> of combinations.  Order online at your leisure.  Need guidance?  Theresa is your personal fashion consultant."  (link-to "https://fashionthatmakessense.graceadele.us/GraceAdele/Contact" "Contact her.")]
        [:h3.party [:span "...or Party..."]]
        [:p "Plan a fun get-together with friends to share style selections.  As hostess, you earn free and half-price Grace Adele rewards from any oders placed at your party.  Have fun with friends and add to your personal style collection."] ]

      [:section#sell-information.span3
        [:h3.sell [:span "...or Sell"]]
        [:p "Want an occupational change of pace?  How about being a fashion consultant?  Help women of all ages find the Grace Adele bags, clutches, jewelry and accessories that make them feel pretty.  Earn 20-30% commission and exotic incentive trips."] ] ] ])


