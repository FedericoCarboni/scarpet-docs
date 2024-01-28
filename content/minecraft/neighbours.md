---
signatures:
  - params:
      - name: pos
name: neighbours
title: neighbours()
---


Returns the list of 6 neighbouring blocks to the argument. Commonly used with
other loop functions like `for`.

```scarpet
for(neighbours(x,y,z),air(_)) => 4 // number of air blocks around a block
```
