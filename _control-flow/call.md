---
signatures:
  - params:
      - name: function
      - name: args
        rest: true
---

Calls a function with the provided arguments.

Function values cannot be called directly and can only be executed with
`call()`.

```scarpet
f = (_(x) -> x + 1);
val = call(f, 12);
val == 13
```

`call()` can also invoke functions by name.

```scarpet
f(x) -> x + 1;
val = call('f', 12);
```

`call()` resolves function names from the call site.
