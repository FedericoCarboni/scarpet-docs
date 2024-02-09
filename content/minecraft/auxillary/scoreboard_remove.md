---
title: scoreboard_remove()
name: scoreboard_remove
signatures:
  - params:
      - name: objective
  - params:
      - name: objective
      - name: key
---

Removes an entire objective, or an entry in the scoreboard associated with the
key. Returns `true` if objective has existed and has been removed, or previous
value of the scoreboard if players score is removed. Returns `null` if objective
didn't exist, or a key was missing for the objective.
