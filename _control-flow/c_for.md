---
title: c_for
signatures:
  - params:
      - name: init
      - name: condition
      - name: increment
      - name: body
---

Mimics a C-Style `for` loop `for (init; condition; increment) { body }`

```java
for (int i = 0; i < 5; i += 1) {
    printf("%d\n", i);
}
```

```scarpet
c_for(i = 0, i < 5, i += 1, print(i));
```
