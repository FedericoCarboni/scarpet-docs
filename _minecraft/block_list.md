---
signatures:
  - params: []
  - params:
      - name: tag
---

Returns list of all blocks in the game. If `tag` is provided, returns list of
all blocks that belong to this block tag.

```scarpet
block_list() => [dark_oak_button, wall_torch, structure_block, polished_blackstone_brick_slab, cherry_sapling... ]
block_list('impermeable') => [glass, white_stained_glass, orange_stained_glass, magenta_stained_glass... ] //All da glass
block_list('rails') => [rail, powered_rail, detector_rail, activator_rail]
block_list('not_a_valid_block_tag') => null //Not a valid block tag
```
