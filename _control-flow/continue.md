---
title: continue
signatures:
  - params: []
  - params:
      - name: value
---

Skip to the next iteration of the loop.

`continue()` terminates execution of the current iteration skipping to the next.

```scarpet
for([1, 2, 3, 4],
    if(_ == 3, continue());
    print(_); // 1, 2, 4
);
```
