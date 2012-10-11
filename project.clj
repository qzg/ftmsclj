(defproject ftmsclj "0.1.0-SNAPSHOT"
  :description "Fashion That Makes Sense"
  :url "http://fashionthatmakessense.com"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir-cljs "0.3.2"]
                 [jayq "0.1.0-alpha4"]
                 [waltz "0.1.0-alpha1"]
                 [fetch "0.1.0-alpha2"]
                 [crate "0.2.0-alpha2"]
                 [noir "1.3.0-beta7"]
                 [com.datomic/datomic-free "0.8.3488"]]
  :plugins [[lein-git-deps "0.0.1-SNAPSHOT"]]
  :dev-dependencies [[lein-git-deps "0.0.1-SNAPSHOT"]]
  :git-dependencies [["https://github.com/twitter/bootstrap.git"]
                     ["https://github.com/cloudhead/less.js.git"]
                     ["https://github.com/brentonashworth/one.git"]]
  :cljsbuild {:builds [{}]}
  :main ^{:skip-aot true} ftmsclj.server)
;; aot == "ahead of time"
