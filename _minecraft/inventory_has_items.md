---
signatures:
  - params:
      - name: inventory
---

Returns true, if the inventory is not empty, false if it is empty, and null, if
its not an inventory.

```scarpet inventory_has_items(player()) => true
    inventory_has_items(x,y,z) => false // empty chest
    inventory_has_items(block(pos)) => null // stone
```
