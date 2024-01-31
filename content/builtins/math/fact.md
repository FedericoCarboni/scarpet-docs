---
title: fact()
name: fact
signatures:
  - params:
      - name: "n"
---

Returns the factorial of a number. `fact(n)` is equal to `1*2*3*...n`.

It can easily produce huge numbers so when `n` is greater than or equal to `20`
it will produce a double-precision floating point approximation of the result.
