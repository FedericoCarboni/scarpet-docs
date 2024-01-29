---
title: structure_eligibility()
name: structure_eligibility
signatures:
  - params:
      - name: pos
      - name: structure
      - name: size_needed
---

Checks worldgen eligibility for a structure in a given chunk. Requires a
`Structure Variant` name (see above), or `Standard Structure` to check
structures of this type. If no structure is given, or `null`, then it will check
for all structures. If bounding box of the structures is also requested, it will
compute size of potential structures. This function, unlike other in the
`structure*` category is not using world data nor accesses chunks making it
preferred for scoping ungenerated terrain, but it takes some compute resources
to calculate the structure.

Unlike `'structure'` this will return a tentative structure location. Random
factors in world generation may prevent the actual structure from forming.

If structure is specified, it will return `null` if a chunk is not eligible or
invalid, `true` if the structure should appear, or a map with two values:
`'box'` for a pair of coordinates indicating bounding box of the structure, and
`'pieces'` for list of elements of the structure (as a tuple), with its name,
direction, and box coordinates of the piece.

If structure is not specified, or a `Standard Structure` was specified, like
`'village'`,it will return a set of structure names that are eligible, or a map
with structures as keys, and same type of map values as with a single structure
call. An empty set or an empty map would indicate that nothing should be
generated there.

Throws `unknown_structure` if structure doesn't exist.
