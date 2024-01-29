---
signatures:
  - params:
      - name: item
name: stack_limit
title: stack_limit()
---


Returns number indicating what is the stack limit for the item. Its typically 1
(non-stackable), 16 (like buckets), or 64 - rest. It is recommended to consult
this, as other inventory API functions ignore normal stack limits, and it is up
to the programmer to keep it at bay. As of 1.13, game checks for negative
numbers and setting an item to negative is the same as empty.

Throws `unknown_item` if item doesn't exist.

```scarpet
stack_limit('wooden_axe') => 1
stack_limit('ender_pearl') => 16
stack_limit('stone') => 64
```
