---
title: return
signatures:
  - params: []
  - params:
      - name: value
---

Return a value from a function.

A `return()` marks the end of an execution path in a function:

```scarpet
foo() -> (
    return(2);
    print('x'); // not reachable
);
```

`return()` is not needed when the returned value is the last expression in the
function:

```scarpet
foo() -> (
    3
);
```

A `return()` with no arguments returns
[`null`]({{ '/constants/null/' | relative_url }}).
