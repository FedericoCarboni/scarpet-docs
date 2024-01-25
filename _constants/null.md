---
title: "null"
---

No value.

`null` represents the absence of a value.

```scarpet
foo = null;
```

Any variable which is not yet defined will default to `null` (if strict mode is
not set).

```scarpet
print(bar); // bar == null
```

Similarly, trying to get a non-existent key from a collection will return
`null`.
