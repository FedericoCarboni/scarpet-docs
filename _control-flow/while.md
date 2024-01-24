---
title: while
signatures:
  - params:
      - name: condition
      - name: body
        binds: [_]
  - params:
      - name: condition
      - name: limit
        type: number
      - name: body
        binds: [_]
---

Loop while a condition holds.

`while()` evaluates an expression repeatedly while its condition evaluates to
`true`. The expression receives a bound variable `_` indicating the current
iteration number.

Returns the result of the last iteration or `null`.

```scarpet
i = 0;
while(i < 5,
    print(_);
    i += 1;
);
```

`while()` may also be called with three arguments. Where the second argument
specifies an upper limit for the number of times to loop.

```scarpet
i = 0;
while(i < 7, 5, // can only loop 5 times
    print(_);
    i += 1;
);
```
