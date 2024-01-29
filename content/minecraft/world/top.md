---
title: top()
name: top
signatures:
  - params:
      - name: type
      - name: pos
---

Returns the Y value of the topmost block at given x, z coords (y value of a
block is not important), according to the heightmap specified by `type`. Valid
options are:

- `light`: topmost light blocking block (1.13 only)
- `motion`: topmost motion blocking block
- `terrain`: topmost motion blocking block except leaves
- `ocean_floor`: topmost non-water block
- `surface`: topmost surface block

```scarpet
top('motion', x, y, z)  => 63
top('ocean_floor', x, y, z)  => 41
```
