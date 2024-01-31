---
title: min()
name: min
signatures:
  - params:
      - name: arg
      - name: args
        rest: true
  - params:
      - name: args
        type: number[]
---

Returns the smallest of the input arguments.

Compute minimum or maximum of supplied arguments assuming default sorthoraphical
order. In case you are missing `argmax`, just use `a ~ max(a)`, little less
efficient, but still fun.

Interesting bit - `min` and `max` don't remove variable associations from
arguments, which means can be used as LHS of assignments (obvious case), or
argument spec in function definitions (far less obvious).

```scarpet
a = 1; b = 2; min(a,b) = 3; [a,b]  => [3, 2]
a = 1; b = 2; fun(x, min(a,b)) -> [a,b]; fun(3,5)  => [5, 0]
```

Absolutely no idea, how the latter might be useful in practice. But since it
compiles, can ship it.
