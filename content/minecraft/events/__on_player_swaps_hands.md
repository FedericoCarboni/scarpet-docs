---
params:
  - name: player
name: __on_player_swaps_hands
title: player_swaps_hands
---

Triggered when a player sends a command to swap their offhand item. Executed
before the effect is applied on the server.

This event can be cancelled by returning `'cancel'`, which prevents the hands
from being swapped.
