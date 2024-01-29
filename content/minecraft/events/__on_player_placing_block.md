---
params:
  - name: player
  - name: item_tuple
  - name: hand
  - name: block
name: __on_player_placing_block
title: player_placing_block
---

Triggered when player places a block, before block is placed in the world.

This event can be cancelled by returning `'cancel'`, which prevents the block
from being placed.
