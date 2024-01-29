---
signatures:
  - params:
      - name: pos
      - name: block
      - name: properties
  - params:
      - name: pos
      - name: block
      - name: properties
      - name: block_data
name: set
title: set()
---


First argument for the `set` function is either a coord triple, list of three
numbers, or a world localized block value. Second argument, `block`, is either
an existing block value, a result of `block()` function, or a string value
indicating the block name with optional state and block data. It is then
followed by an optional `property - value` pairs for extra block state (which
can also be provided in a list or a map). Optional `block_data` include the
block data to be set for the target block.

If `block` is specified only by name, then if a destination block is the same
the `set` operation is skipped, otherwise is executed, for other potential extra
properties that the original source block may have contained.

The returned value is either the block state that has been set, or `false` if
block setting was skipped, or failed

Throws `unknown_block` if provided block to set is not valid

```scarpet
set(0,5,0,'bedrock')  => bedrock
set([0,5,0], 'bedrock')  => bedrock
set(block(0,5,0), 'bedrock')  => bedrock
scan(0,5,0,0,0,0,set(_,'bedrock'))  => 1
set(pos(player()), 'bedrock')  => bedrock
set(0,0,0,'bedrock')  => 0   // or 1 in overworlds generated in 1.8 and before
scan(0,100,0,20,20,20,set(_,'glass'))
    // filling the area with glass
scan(0,100,0,20,20,20,set(_,block('glass')))
    // little bit faster due to internal caching of block state selectors
b = block('glass'); scan(0,100,0,20,20,20,set(_,b))
    // yet another option, skips all parsing
set(x,y,z,'iron_trapdoor')  // sets bottom iron trapdoor

set(x,y,z,'iron_trapdoor[half=top]')  // sets the top trapdoor
set(x,y,z,'iron_trapdoor','half','top') // also correct - top trapdoor
set(x,y,z,'iron_trapdoor', ['half','top']) // same
set(x,y,z,'iron_trapdoor', {'half' -> 'top'}) // same
set(x,y,z, block('iron_trapdoor[half=top]')) // also correct, block() provides extra parsing of block state

set(x,y,z,'hopper[facing=north]{Items:[{Slot:1b,id:"minecraft:slime_ball",Count:16b}]}') // extra block data
set(x,y,z,'hopper', {'facing' -> 'north'}, nbt('{Items:[{Slot:1b,id:"minecraft:slime_ball",Count:16b}]}') ) // same
```
