---
title: reduce()
name: reduce
signatures:
  - params:
      - name: list
      - name: expr
        binds: [_a, _, _i]
      - name: initial
---

Applies `expr` for each element of the list and saves the result in `_a`
accumulator. Consecutive calls to `expr` can access that value to apply more
values. You also need to specify the initial value to apply for the accumulator.
`break` can be used to terminate reduction prematurely. If a value is provided
to `break` or `continue`, it will be used from now on as a new value for the
accumulator.

```scarpet
reduce([1, 2, 3, 4], _a + _, 0); // 10
reduce([1, 2, 3, 4], _a * _, 1); // 24
```
