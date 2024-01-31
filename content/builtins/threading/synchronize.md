---
title: synchronize()
name: synchronize
signatures:
  - params:
      - name: lock
      - name: expression
---

Evaluates `expression` synchronized with respect to the lock `lock`. Returns the
value of the expression.
