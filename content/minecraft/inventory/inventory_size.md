---
title: inventory_size()
name: inventory_size
signatures:
  - params:
      - name: inventory
---

Returns the size of the inventory for the entity or block in question. Returns
null if the block or entity don't have an inventory.

```scarpet
inventory_size(player()) => 41
inventory_size('enderchest', player()) => 27 // enderchest
inventory_size('equipment', player()) => 6 // equipment
inventory_size(null, player()) => 41  // default inventory for players

inventory_size(x,y,z) => 27 // chest
inventory_size(block(pos)) => 5 // hopper

horse = spawn('horse', x, y, z);
inventory_size(horse); => 2 // default horse inventory
inventory_size('equipment', horse); => 6 // unused horse equipment inventory
inventory_size(null, horse); => 2 // default horse

creeper = spawn('creeper', x, y, z);
inventory_size(creeper); => 6 // default creeper inventory is equipment since it has no other
inventory_size('equipment', creeper); => 6 // unused horse equipment inventory
inventory_size(null, creeper); => 6 // creeper default is its equipment
```
