---
title: query(e, 'spawn_point')
name: query
signatures:
  - params:
      - name: entity
      - name: "'spawn_point'"
---

Returns position tuple, dimension, spawn angle, and whether spawn is forced,
assuming the player has a spawn position. Returns `false` if spawn position is
not set, and `null` if `e` is not a player.
