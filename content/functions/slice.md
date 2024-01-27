---
title: slice()
name: slice
signatures:
  - params:
      - name: expr
      - name: from
      - name: to
---

Extracts a substring, or sublist (based on the type of the result of the
expression under expr with starting index of `from`, and ending at `to` if
provided, or the end, if omitted. Can use negative indices to indicate counting
form the back of the list, so `-1 <=> length(_)`.

Special case is made for iterators (`range`, `rect` etc), which does require
non-negative indices (negative `from` is treated as `0`, and negative `to` as
`inf`), but allows retrieving parts of the sequence and ignore other parts. In
that case consecutive calls to `slice` will refer to index `0` the current
iteration position since iterators cannot go back nor track where they are in
the sequence (see examples).

```scarpet
slice([0,1,2,3,4,5], 1, 3)  => [1, 2]
slice('foobar', 0, 1)  => 'f'
slice('foobar', 3)  => 'bar'
slice(range(10), 3, 5)  => [3, 4]
slice(range(10), 5)  => [5, 6, 7, 8, 9]
r = range(100); [slice(r, 5, 7), slice(r, 1, 3)]  => [[5, 6], [8, 9]]
```
