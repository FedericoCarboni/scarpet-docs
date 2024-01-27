---
title: split()
name: split
signatures:
  - params:
      - name: delim
      - name: expr
---

Splits a string under `expr` by `delim` which can be a regular expression. If no
delimiter is specified, it splits by characters.

If `expr` is a list, it will split the list into multiple sublists by the
element (s) which equal `delim`, or which equal the empty string in case no
delimiter is specified.

Splitting a `null` value will return an empty list.

```scarpet
split('foo') => [f, o, o]
split('','foo')  => [f, o, o]
split('.','foo.bar')  => []
split('\\.','foo.bar')  => [foo, bar]
split(1,[2,5,1,2,3,1,5,6]) => [[2,5],[2,3],[5,6]]
split(1,[1,2,3,1,4,5,1] => [[], [2,3], [4,5], []]
split(null) => []
```
