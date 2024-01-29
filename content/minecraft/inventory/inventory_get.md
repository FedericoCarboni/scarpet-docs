---
title: inventory_get()
name: inventory_get
signatures:
  - params:
      - name: inventory
      - name: slot
---

Returns the item in the corresponding inventory slot, or null if slot empty or
inventory is invalid. You can use negative numbers to indicate slots counted
from 'the back'.

<pre>
inventory_get(player(), 0) => null // nothing in first hotbar slot
inventory_get(x,y,z, 5) => ['stone', 1, {}]
inventory_get(player(), -1) => ['diamond_pickaxe', 1, {Damage:4}] // slightly damaged diamond pick in the offhand
</pre>
