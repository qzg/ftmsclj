(ns ftms-clj.client.qtest
  (:require [crate.core :as crate]
            [waltz.state :as state])
  (:use [jayq.core :only [$ delegate]])
  (:use-macros [waltz.macros :only [in out defstate defevent]]))


(defn qcallit [] 
  (js/alert "This is a Kiyu test."))
