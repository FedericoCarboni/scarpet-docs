---
title: map()
name: map
signatures:
  - params:
      - name: list
      - name: expr
        binds: [_, _i]
---

Converts a `list` of values, to another list where each value is result of an
expression `v = expr(_, _i)` where `_` is passed as each element of the list,
and `_i` is the index of such element. If `break` is called the map returns
whatever collected thus far. If `continue` and `break` are used with supplied
argument, it is used in place of the resulting map element, otherwise current
element is skipped.

```scarpet
map(range(10), _*_)  => [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
map(player('*'), _+' is stoopid') [gnembon is stoopid, herobrine is stoopid]
```
