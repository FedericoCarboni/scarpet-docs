---
title: scoreboard()
name: scoreboard
signatures:
  - params: []
  - params:
      - name: objective
  - params:
      - name: objective
      - name: key
  - params:
      - name: objective
      - name: key
      - name: value
---

Displays or modifies individual scoreboard values. With no arguments, returns
the list of current objectives. With specified `objective`, lists all keys
(players) associated with current objective, or null if objective does not
exist. With specified `objective` and `key`, returns current value of the
objective for a given player (key). With additional `value` sets a new
scoreboard value, returning previous value associated with the `key`. If the
`value` is `null`, resets the scoreboard value.
