---
title: break
signatures:
  - params: []
  - params:
      - name: value
---

Exit early from a loop.

`break()` terminates the execution of the current loop.

```scarpet
for([1, 2, 3], if(_ == 2, break()));
```
