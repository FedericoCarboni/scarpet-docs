---
title: place_item()
name: place_item
signatures:
  - params:
      - name: item
      - name: pos
      - name: facing
      - name: sneak
---

Uses a given item in the world like it was used by a player. Item names are
default minecraft item name, less the minecraft prefix. Default facing is 'up',
but there are other options: 'down', 'north', 'east', 'south', 'west', but also
there are other secondary directions important for placement of blocks like
stairs, doors, etc. Try experiment with options like 'north-up' which is placed
facing north with cursor pointing to the upper part of the block, or 'up-north',
which means a block placed facing up (player looking down) and placed smidge
away of the block center towards north. Optional sneak is a boolean indicating
if a player would be sneaking while placing the block - this option only affects
placement of chests and scaffolding at the moment.

Works with items that have the right-click effect on the block placed, like
`bone_meal` on grass or axes on logs, but doesn't open chests / containers, so
have no effect on interactive blocks, like TNT, comparators, etc.

Returns true if placement/use was successful, false otherwise.

Throws `unknown_item` if `item` doesn't exist

```scarpet
place_item('stone',x,y,z) // places a stone block on x,y,z block
place_item('piston,x,y,z,'down') // places a piston facing down
place_item('carrot',x,y,z) // attempts to plant a carrot plant. Returns true if could place carrots at that position.
place_item('bone_meal',x,y,z) // attempts to bonemeal the ground.
place_item('wooden_axe',x,y,z) // attempts to strip the log.
```
