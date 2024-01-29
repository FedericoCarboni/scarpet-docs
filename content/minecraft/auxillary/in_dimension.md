---
title: in_dimension()
name: in_dimension
signatures:
  - params:
      - name: smth
      - name: expr
---

Evaluates the expression `expr` with different dimension execution context.
`smth` can be an entity, world-localized block, so not `block('stone')`, or a
string representing a dimension like: `'nether'`, `'the_nether'`, `'end'` or
`'overworld'`, etc.

Throws `unknown_dimension` if provided dimension can't be found.
