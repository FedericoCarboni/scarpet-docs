---
params:
  - name: player
  - name: item_tuple
  - name: hand
  - name: block
---

Triggered when player places a block, before block is placed in the world.

This event can be cancelled by returning `'cancel'`, which prevents the block from being placed.
