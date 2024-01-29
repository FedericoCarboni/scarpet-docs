---
params:
  - name: player
name: __on_player_dies
title: player_dies
---

Triggered when a player dies. Player is already dead, so don't revive them then.
Event applied before broadcasting messages about players death and applying
external effects (like mob anger etc).
