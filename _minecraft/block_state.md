---
signatures:
  - params:
      - name: block
  - params:
      - name: block
      - name: property
---

, `block_state(block, property)`

If used with a `block` argument only, it returns a map of block properties and
their values. If a block has no properties, returns an empty map.

If `property` is specified, returns a string value of that property, or `null`
if property is not applicable.

Returned values or properties are always strings. It is expected from the user
to know what to expect and convert values to numbers using `number()` function
or booleans using `bool()` function. Returned string values can be directly used
back in state definition in various applications where block properties are
required.

`block_state` can also accept block names as input, returning block's default
state.

Throws `unknown_block` if the provided input is not valid.

```scarpet
set(x,y,z,'iron_block'); block_state(x,y,z)  => {}
set(x,y,z,'iron_trapdoor','half','top'); block_state(x,y,z)  => {waterlogged: false, half: top, open: false, ...}
set(x,y,z,'iron_trapdoor','half','top'); block_state(x,y,z,'half')  => top
block_state('iron_trapdoor','half')  => top
set(x,y,z,'air'); block_state(x,y,z,'half')  => null
block_state(block('iron_trapdoor[half=top]'),'half')  => top
block_state(block('iron_trapdoor[half=top]'),'powered')  => false
bool(block_state(block('iron_trapdoor[half=top]'),'powered'))  => 0
```
