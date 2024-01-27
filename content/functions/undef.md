---
title: undef()
name: undef
signatures:
  - params:
      - name: expr
---

Removes all bindings of a variable with a name of `expr`. Removes also all
function definitions with that name. It can affect global variable pool, and
local variable set for a particular function.

```scarpet
inc(i) -> i+1; foo = 5; inc(foo) => 6
inc(i) -> i+1; foo = 5; undef('foo'); inc(foo) => 1
inc(i) -> i+1; foo = 5; undef('inc'); undef('foo'); inc(foo) => Error: Function inc is not defined yet at pos 53
```
