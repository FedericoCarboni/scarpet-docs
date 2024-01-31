---
title: for
name: for
signatures:
  - params:
      - name: iterable
      - name: body
        binds: [_, _i]
    returns: number
---

Iterate over each item in an iterable value.

`for()` takes two arguments, an iterable value such as a `list` or a `map`
(iterates over the keys of the map), and an expression to evaluate for every
item. The expression receives two bound variables `_` (value) and `_i` (current
iteration number) are supplied to the expression.

```scarpet
for([1, 2, 3, 4, 5], print(_));
```

`for()` returns the number of times the expression evaluated to a successful
value.

Like other looping functions `for()` supports `break()` and `continue()`. An
optional argument can be passed to `break()` or `continue()` to determine if the
iteration was successful.

```scarpet
i = for([42, 12, 56, 29], print(_i)); // 0, 1, 2, 3
i; // 4
```
