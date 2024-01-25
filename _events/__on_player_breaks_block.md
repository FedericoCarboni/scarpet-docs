---
params:
  - name: player
  - name: block
---

Called when player breaks a block, right before any changes to the world are
done, but the decision is made to remove the block.

This event can be cancelled by returning `'cancel'`, which prevents the block
from being placed.
