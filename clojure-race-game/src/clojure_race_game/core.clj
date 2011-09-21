(ns clojure-race-game.core)

(defrecord Player [first-name last-name response finished moves])
(defrecord GameState [total-moves highest-moves winner last-mov-fname last-mov-lname])
 

(defn get-player-vec []
  (map #(ref (Player. (str "fn" %1) (str "ln" %1) nil false 0)) (range 0 20)))

(defn create-game []
  (ref (GameState. 0 0 nil nil nil)))

(defn move-player [game-state ref-player max-moves]
  (dosync 
    (let [gstate @game-state
          player @ref-player]
      (ref-set game-state (assoc gstate 
                                 :total-moves (inc (:total-moves gstate))))
      (ref-set ref-player (assoc player 
                                 :moves (inc (:moves player))))))
  (dosync 
    (let [gstate @game-state
          player @ref-player]
      (if (< (:moves player) max-moves)
        (ref-set game-state (assoc gstate 
                                   :last-mov-fname (:first-name player)
                                   :last-mov-lname (:last-name player)))
        ;else
        (if (nil? (:winner gstate))
          (do
            (ref-set game-state (assoc gstate 
                                       :winner player))
            (ref-set ref-player (assoc player
                                       :response "COOL I WON!!!!"
                                       :finished true)))
          ;else
          (ref-set ref-player (assoc player
                                     :response "I lost..."
                                     :finished true))))))
    ref-player)

(defn run-race [game-state ref-player max-moves]
  (doseq [move (range 0 max-moves)]
    (. java.lang.Thread sleep 2)
    (move-player game-state ref-player max-moves)))

(defn game-finished? [ref-players]
  (empty? (filter #(not (:finished @%1)) ref-players)))
      
(defn monitor-game [game-state players game-log]
  (. java.lang.Thread sleep 10)
  ;(println @game-state)
  (if (not (game-finished? players))
    (recur game-state
           players
           (conj game-log (prn-str @game-state)))
    (let [winner (:winner @game-state)
          log (conj game-log "THE WINNER IS: " 
                    (:first-name winner) " " 
                    (:last-name winner) "\n")
          log (conj log "FINAL STATE:" (prn-str @game-state))
          log (reduce
                #(conj %1 (:first-name @%2) " " 
                    (:last-name @%2) ": "
                    (:response @%2) " "
                    "Num Moves: " (:moves @%2) "\n") log players)]
      (apply str log))))


(defn start-game [players max-moves]
  (let [game-state (create-game)]
    [(doall (map #(future (run-race game-state %1 max-moves)) players))
    (future (monitor-game game-state players []))]))
  
  
(defn run-game []
  (let [player-vec (get-player-vec)
        result (start-game player-vec 1000)
        millis (. java.lang.System currentTimeMillis)]
    (loop [fin (game-finished? player-vec)]
      (if fin (do
                (println (second result))
                (println (- (. java.lang.System currentTimeMillis) millis)))
        (do
          (. java.lang.Thread sleep 100)
          (recur (game-finished? player-vec)))))))
    



