---
signatures:
  - params:
      - name: player
      - name: pos
name: harvest
title: harvest()
---


Causes a block to be harvested by a specified player entity. Honors player item
enchantments, as well as damages the tool if applicable. If the entity is not a
valid player, no block gets destroyed. If a player is not allowed to break that
block, a block doesn't get destroyed either.
