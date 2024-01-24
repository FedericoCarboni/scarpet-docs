---
params: [
  "player"
]
# name: "__on_player_escapes_sleep"
---
Same as `player_wakes_up` but only triggered when pressing the ESC button. Not sure why Mojang decided to send that event
twice when pressing escape, but might be interesting to be able to detect that.
