---
title: outer
signatures:
    - params:
        - name: variable
          type: variable
---
Captures a variable from the outer scope.

```scarpet
x = 2;
f(outer(x)) -> x += 1;
f();
x == 3
```

`outer()` can only exist inside a function signature and only takes a single
variable name as a parameter.
