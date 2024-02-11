---
title: split()
name: split
signatures:
  - params:
      - name: string
  - params:
      - name: separator
      - name: string
---

Splits a string by `separator` which can be a regular expression. If no
separator is specified, it splits by characters.

If operating on a list, it will split the list into multiple sublists by the
element (s) which equal `separator`, or which equal the empty string in case no
separator is specified.

Splitting a `null` value will return an empty list.

```scarpet
split('foo'); // ['f', 'o', 'o']
split('', 'foo'); // ['f', 'o', 'o']
split('.', 'foo.bar'); // []
split('\\.', 'foo.bar'); // ['foo', 'bar']
split(1, [2, 5, 1, 2, 3, 1, 5, 6]); // [[2, 5], [2, 3], [5, 6]]
split(1, [1, 2, 3, 1, 4, 5, 1]; // [[], [2, 3], [4, 5], []]
split(null); // []
```
