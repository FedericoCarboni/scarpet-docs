---
title: fact()
name: fact
signatures:
  - params:
      - name: "n"
---

Factorial of a number, a.k.a `n!`, just not in `scarpet`. Gets big... quick...
Therefore, values larger than `fact(20)` will not return the exact value, but a
value with 'double-float' precision.
