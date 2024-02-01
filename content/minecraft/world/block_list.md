---
title: block_list()
name: block_list
signatures:
  - params: []
  - params:
      - name: tag
---

Returns a list of all blocks that belong to the given block tag. If omitted it
will return a list of all the blocks in the game.

### Examples

```scarpet
block_list(); // => [dark_oak_button, wall_torch, ...]
block_list('impermeable'); // => [glass, white_stained_glass, ...]
block_list('rails'); // => [rail, powered_rail, detector_rail, activator_rail]
block_list('not_a_valid_block_tag'); // => null
```
