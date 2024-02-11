---
title: Map
name: m
signatures:
  - params:
      - name: entries
        rest: true
syntax: "{key -> value, ...entries}"
---

Creates and initializes a map with supplied keys, and values. If the arguments
contains a flat list, these are all treated as keys with no value, same goes
with the iterator - creates a map that behaves like a set. If the arguments is a
list of lists, they have to have two elements each, and then first is a key, and
second, a value

In map creation context (directly inside `{}` or `m{}` call), `->` operator acts
like a pair constructor for simpler syntax providing key value pairs, so the
invocation to `{foo -> bar, baz -> quux}` is equivalent to
`{[foo, bar], [baz, quux]}`, which is equivalent to somewhat older, but more
traditional functional form of `m(l(foo, bar),l(baz, quuz))`.

Internally, `{?}`(list syntax) and `m(?)`(function syntax) are equivalent. `{}`
is simply translated to `m()` in the scarpet preprocessing stage. This means
that internally the code has always expression syntax despite `{}` not using
different kinds of brackets and not being proper operators. This means that
`m(}` and `{)` are also valid although not recommended as they will make your
code far less readable.

When converting map value to string, `':'` is used as a key-value separator due
to tentative compatibility with NBT notation, meaning in simpler cases maps can
be converted to NBT parsable string by calling `str()`. This however does not
guarantee a parsable output. To properly convert to NBT value, use
`encode_nbt()`.

```scarpet
{1, 2, 'foo'} => {1: null, 2: null, foo: null}
m() <=> {} (empty map)
{range(10)} => {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null}
m(l(1, 2), l(3, 4)) <=> {1 -> 2, 3 -> 4} => {1: 2, 3: 4}
reduce(range(10), put(_a, _, _*_); _a, {})
     => {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
```
