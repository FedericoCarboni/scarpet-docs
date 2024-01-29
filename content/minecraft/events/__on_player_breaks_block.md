---
params:
  - name: player
  - name: block
name: __on_player_breaks_block
title: player_breaks_block
---

Called when player breaks a block, right before any changes to the world are
done, but the decision is made to remove the block.

This event can be cancelled by returning `'cancel'`, which prevents the block
from being placed.
