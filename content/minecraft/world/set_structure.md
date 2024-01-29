---
title: set_structure()
name: set_structure
signatures:
  - params:
      - name: pos
      - name: structure_name
      - name: set_structurepos
      - name: structure_name
      - name: "null"
---

Creates or removes structure information of a structure associated with a chunk
of `pos`. Unlike `plop`, blocks are not placed in the world, only structure
information is set. For the game this is a fully functional structure even if
blocks are not set. To remove the structure a given point is in, use
`structure_references` to find where current structure starts.

Requires a `Structure Variant` or `Standard Structure` name (see above). If
standard name is used, the variant of the structure may depend on the biome,
otherwise the default structure for this type will be generated.

Throws `unknown_structure` if structure doesn't exist.
