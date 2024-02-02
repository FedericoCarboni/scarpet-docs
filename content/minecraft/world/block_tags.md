---
title: block_tags()
name: block_tags
signatures:
  - params: []
  - params:
      - name: block
  - params:
      - name: block
      - name: tag
---

Without arguments, returns list of available tags, with block supplied (either
by coordinates, or via block name), returns lost of tags the block belongs to,
and if a tag is specified, returns `null` if tag is invalid, `false` if this
block doesn't belong to this tag, and `true` if the block belongs to the tag.

Throws `unknown_block` if `block` doesn't exist

```scarpet
block_tags() => [geode_invalid_blocks, wall_post_override, ice, wooden_stairs, bamboo_blocks, stone_bricks... ]
block_tags('iron_block') => [mineable/pickaxe, needs_stone_tool, beacon_base_blocks]
block_tags('glass') => [impermeable]
block_tags('glass', 'impermeable') => true
block_tags('glass', 'beacon_base_blocks') => false
```
