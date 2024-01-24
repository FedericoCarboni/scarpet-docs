---
params:
  - name: player
  - name: category
  - name: event
  - name: value
---

Triggered when a player statistic changes. Doesn't notify on periodic an rhythmic events, i.e.
`time_since_death`, `time_since_rest`, and `played_one_minute` since these are triggered every tick. Event
is handled before scoreboard values for these statistics are changed.
