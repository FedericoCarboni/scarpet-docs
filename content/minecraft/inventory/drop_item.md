---
title: drop_item()
name: drop_item
signatures:
  - params:
      - name: inventory
      - name: slot
      - name: amount
---

Drops the items from indicated inventory slot, like player that Q's an item or
villager, that exchanges food. You can Q items from block inventories as well.
default amount is 0 - which is all from the slot. NOTE: hoppers are quick enough
to pick all the queued items from their inventory anyways. Returns size of the
actual dropped items.

```scarpet
inventory_drop(player(), 0, 1); // 1 Q's one item on the ground
inventory_drop(x,y,z, 0); // 64 removed and spawned in the world a full stack of items
```
