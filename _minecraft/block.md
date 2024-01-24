---
signatures:
  - params:
      - name: x
      - name: 'y'
      - name: z
  - params:
      - name: pos
  - params:
      - name: state
---

Returns either a block from specified location, or block with a specific state (as used by `/setblock` command),
so allowing for block properties, block entity data etc. Blocks otherwise can be referenced everywhere by its simple
string name, but its only used in its default state.

```scarpet
block('air')  => air
block('iron_trapdoor[half=top]')  => iron_trapdoor
block(0,0,0) == block('bedrock')  => 1
block('hopper[facing=north]{Items:[{Slot:1b,id:"minecraft:slime_ball",Count:16b}]}') => hopper
```

Retrieving a block with `block` function has also a side-effect of evaluating its current state and data.
So if you use it later it will reflect block state and data of the block that was when block was called, rather than
when it was used. Block values passed in various places like `scan` functions, etc, are not fully evaluated unless
its properties are needed. This means that if the block at the location changes before its queried in the program this
might result in getting the later state, which might not be desired. Consider the following example:

Throws `unknown_block` if provided input is not valid.

```scarpet
set(10,10,10,'stone');
scan(10,10,10,0,0,0, b = _);
set(10,10,10,'air');
print(b); // 'air', block was remembered 'lazily', and evaluated by `print`, when it was already set to air
set(10,10,10,'stone');
scan(10,10,10,0,0,0, b = block(_));
set(10,10,10,'air');
print(b); // 'stone', block was evaluated 'eagerly' but call to `block`
```
