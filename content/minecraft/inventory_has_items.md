---
signatures:
  - params:
      - name: inventory
name: inventory_has_items
title: inventory_has_items()
---


Returns true, if the inventory is not empty, false if it is empty, and null, if
its not an inventory.

```scarpet inventory_has_items(player()) => true
    inventory_has_items(x,y,z) => false // empty chest
    inventory_has_items(block(pos)) => null // stone
```
