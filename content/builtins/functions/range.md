---
title: range()
name: range
signatures:
  - params:
      - name: to
  - params:
      - name: from
      - name: to
  - params:
      - name: from
      - name: to
      - name: step
---

Creates a range of numbers from `from`, no greater/larger than `to`. The `step`
parameter dictates not only the increment size, but also direction (can be
negative). The returned value is not a proper list, just the iterator but if for
whatever reason you need a proper list with all items evaluated, use
`[range(to)]`. Primarily to be used in higher order functions

```scarpet
range(10)  => [...]
[range(10)]  => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
map(range(10),_*_)  => [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
reduce(range(10),_a+_, 0)  => 45
range(5,10)  => [5, 6, 7, 8, 9]
range(20, 10, -2)  => [20, 18, 16, 14, 12]
range(-0.3, 0.3, 0.1)  => [-0.3, -0.2, -0.1, 0, 0.1, 0.2]
range(0.3, -0.3, -0.1) => [0.3, 0.2, 0.1, -0, -0.1, -0.2]
```
