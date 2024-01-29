---
title: structures()
name: structures
signatures:
  - params:
      - name: pos
      - name: structurespos
      - name: structure_name
---

Returns structure information for a given block position. Note that structure
information is the same for all the blocks from the same chunk. `structures`
function can be called with a block, or a block and a structure name. In the
first case it returns a map of structures at a given position, keyed by
structure name, with values indicating the bounding box of the structure - a
pair of two 3-value coords (see examples). When called with an extra structure
name, returns a map with two values, `'box'` for bounding box of the structure,
and `'pieces'` for a list of components for that structure, with their name,
direction and two sets of coordinates indicating the bounding box of the
structure piece. If structure is invalid, its data will be `null`.

Requires a `Standard Structure` name (see above).
