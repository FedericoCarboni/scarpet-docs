---
signatures:
  - params:
      - name: center
      - name: range
      - name: upper_range
      - name: expr
---

Evaluates expression over area of blocks defined by its center `center = (cx, cy, cz)`, expanded in all directions
by `range = (dx, dy, dz)` blocks, or optionally in negative with `range` coords, and `upper_range` coords in
positive values. That means that if you want a box starting at the northwest coord with given base, width and height
dimensions, you can do `'scan(center, 0, 0, 0, w, h, d, ...)`.

`center` can be defined either as three coordinates, a single tuple of three coords, or a block value.
`range` and `upper_range` can have the same representations, just if they are block values, it computes the distance to
the center as range instead of taking the values as is. That way you can iterate from the center to a box whose surface
area constains the `range` and/or `upper_range` blocks.

`expr` receives `_x, _y, _z` variables as coords of current analyzed block and `_`, which represents the block itself.

Returns number of successful evaluations of `expr` (with `true` boolean result) unless called in void context,
which would cause the expression not be evaluated for their boolean value.

`scan` also handles `continue` and `break` statements, using `continue`'s return value to use in place of expression
return value. `break` return value has no effect.
