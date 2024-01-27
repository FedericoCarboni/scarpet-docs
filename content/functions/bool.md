---
title: bool()
name: bool
signatures:
  - params:
      - name: expr
---

Returns a boolean context of the expression. Bool is also interpreting string
values as boolean, which is different from other places where boolean context
can be used. This can be used in places where API functions return string values
to represent binary values.

```scarpet
bool(pi) => true
bool(false) => false
bool('') => false
bool([]) => false
bool(['']) => true
bool('foo') => true
bool('false') => false
bool('nulL') => false
if('false',1,0) => true
```
