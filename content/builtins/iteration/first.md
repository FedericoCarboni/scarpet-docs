---
title: first()
name: first
signatures:
  - params:
      - name: list
      - name: expr
        binds: [_, _i]
---

Finds and returns the first item in the list that satisfies `expr`. It sets `_`
for current element value, and `_i` for index of that element. `break` can be
called inside the iteration code, using its argument value instead of the
current item. `continue` has no sense and cannot be called inside `first` call.

```scarpet
// first prime after 1000
first(range(1000, 10000), n = _; !first(range(2, sqrt(n) + 1), !(n % _))); // 1009
```

Notice in the example above, that we needed to rename the outer `_` to be able
to use in in the inner `first` call
