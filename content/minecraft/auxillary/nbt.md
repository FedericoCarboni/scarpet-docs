---
title: nbt()
name: nbt
signatures:
  - params:
      - name: expr
---

Treats the argument as a nbt serializable string and returns its nbt value. In
case nbt is not in a correct nbt compound tag format, it will return `null`
value.

Consult section about container operations in `Expression` to learn about
possible operations on nbt values.
