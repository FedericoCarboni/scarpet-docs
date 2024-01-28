---
signatures:
  - params:
      - name: inventory
      - name: item
      - name: start_slot
      - name: ''
      - name: inventory_findinventory
      - name: 'null'
      - name: start_slot
name: inventory_find
title: inventory_find()
---


Finds the first slot with a corresponding item in the inventory, or if queried
with null: the first empty slot. Returns slot number if found, or null
otherwise. Optional start_slot argument allows to skip all preceeding slots
allowing for efficient (so not slot-by-slot) inventory search for items.

```scarpet
inventory_find(player(), 'stone') => 0 // player has stone in first hotbar slot
inventory_find(player(), null) => null // player's inventory has no empty spot
while( (slot = inventory_find(p, 'diamond', slot)) != null, 41, drop_item(p, slot) )
    // spits all diamonds from player inventory wherever they are
inventory_drop(x,y,z, 0) => 64 // removed and spawned in the world a full stack of items
```

Throws `unknown_item` if item doesn't exist.
