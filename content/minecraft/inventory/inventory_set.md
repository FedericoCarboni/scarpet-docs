---
title: inventory_set()
name: inventory_set
signatures:
  - params:
      - name: inventory
      - name: slot
      - name: count
      - name: item
      - name: nbt
---

Modifies or sets a stack in inventory. specify count 0 to empty the slot. If
item is not specified, keeps existing item, just modifies the count. If item is
provided - replaces current item. If nbt is provided - adds a tag to the stack
at slot. Returns previous stack in that slot.

```scarpet
inventory_set(player(), 0, 0) => ['stone', 64, {}] // player had a stack of stone in first hotbar slot
inventory_set(player(), 0, 6) => ['diamond', 64, {}] // changed stack of diamonds in player slot to 6
inventory_set(player(), 0, 1, 'diamond_axe','{Damage:5}') => null //added slightly damaged diamond axe to first player slot
```
