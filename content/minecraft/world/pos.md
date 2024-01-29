---
title: pos()
name: pos
signatures:
  - params:
      - name: block
      - name: posentity
---

Returns a triple of coordinates of a specified block or entity. Technically
entities are queried with `query` function and the same can be achieved with
`query(entity,'pos')`, but for simplicity `pos` allows to pass all positional
objects.

```scarpet
pos(block(0,5,0)) => [0,5,0]
pos(player()) => [12.3, 45.6, 32.05]
pos(block('stone')) => Error: Cannot fetch position of an unrealized block
```
