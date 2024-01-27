---
title: length()
name: length
signatures:
  - params:
      - name: expr
---

Returns length of the expression, the length of the string, the length of the
integer part of the number, or length of the list

```scarpet
length(pi) => 1
length(pi*pi) => 1
length(pi^pi) => 2
length([]) => 0
length([1,2,3]) => 3
length('') => 0
length('foo') => 3
```
