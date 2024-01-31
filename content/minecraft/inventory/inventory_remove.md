---
title: inventory_remove()
name: inventory_remove
signatures:
  - params:
      - name: inventory
      - name: item
      - name: amount
---

Removes amount (defaults to 1) of item from inventory. If the inventory doesn't
have the defined amount, nothing happens, otherwise the given amount of items is
removed wherever they are in the inventory. Returns boolean whether the removal
operation was successful. Easiest way to remove a specific item from player
inventory without specifying the slot.

### Returns

Returns `true` on success.

### Examples

```scarpet
inventory_remove(player(), 'diamond'); // true: removed diamond from player inventory
inventory_remove(player(), 'diamond', 100); // false: player doesn't have 100 diamonds, nothing happened
```
