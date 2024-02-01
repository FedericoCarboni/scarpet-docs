---
params:
  - name: player
name: __on_player_drops_stack
title: player_drops_stack
---

Triggered when the game receives the request from a player to drop one item or
full stack from its inventory. Event happens before anything is changed server
side.

These events can be cancelled by returning `'cancel'`, which prevents the player
dropping the items.
