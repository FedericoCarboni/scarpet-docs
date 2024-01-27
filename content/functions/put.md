---
title: put()
name: put
signatures:
  - params:
      - name: container
      - name: address
      - name: value
  - params:
      - name: container
      - name: address
      - name: value
      - name: mode
  - params:
      - name: lvalue
      - name: value
---

## Lists

Modifies the container by replacing the value under the address with the
supplied `value`. For lists, a valid index is required, but can be negative as
well to indicate positions from the end of the list. If `null` is supplied as
the address, it always means - add to the end of the list.

There are three modes that lists can have items added to them:

- `replace`(default): Replaces item under given index(address). Doesn't change
  the size of the array unless `null` address is used, which is an exception and
  then it appends to the end
- `insert`: Inserts given element at a specified index, shifting the rest of the
  array to make space for the item. Note that index of -1 points to the last
  element of the list, thus inserting at that position and moving the previous
  last element to the new last element position. To insert at the end, use `+=`
  operator, or `null` address in put
- `extend`: treats the supplied value as an iterable set of values to insert at
  a given index, extending the list by this amount of items. Again use `null`
  address/index to point to the end of the list

Due to the extra mode parameter, there is no chaining for `put`, but you can
still use l-value container access to indicate container and address, so
`put(foo, key, value)` is the same as `put(foo:key, value)` or `foo:key=value`

Returns true, if container got modified, false otherwise, and null if operation
was invalid.

## Maps

For maps there are no modes available (yet, seems there is no reason to). It
replaces the value under the supplied key (address), or sets it if not currently
present.

## NBT Tags

The address for nbt values is a valid nbt path that you would use with `/data`
command, and tag is any tag that would be applicable for a given insert
operation. Note that to distinguish between proper types (like integer types,
you need to use command notation, i.e. regular ints is `123`, while byte size
int would be `123b` and an explicit string would be `"5"`, so it helps that
scarpet uses single quotes in his strings. Unlike for lists and maps, it returns
the number of affected nodes, or 0 if none were affected.

There are three modes that NBT tags can have items added to them:

- `replace`(default): Replaces item under given path(address). Removes them
  first if possible, and then adds given element to the supplied position. The
  target path can indicate compound tag keys, lists, or individual elements of
  the lists.
- `<N>`: Index for list insertions. Inserts given element at a specified index,
  inside a list specified with the path address. Fails if list is not specified.
  It behaves like `insert` mode for lists, i.e. it is not removing any of the
  existing elements. Use `replace` to remove and replace existing element.
- `merge`: assumes that both path and replacement target are of compound type
  (dictionaries, maps, `{}` types), and merges keys from `value` with the
  compound tag under the path

```scarpet
a = [1, 2, 3]; put(a, 1, 4); a  => [1, 4, 3]
a = [1, 2, 3]; put(a, null, 4); a  => [1, 2, 3, 4]
a = [1, 2, 3]; put(a, 1, 4, 'insert'); a  => [1, 4, 2, 3]
a = [1, 2, 3]; put(a, null, [4, 5, 6], 'extend'); a  => [1, 2, 3, 4, 5, 6]
a = [1, 2, 3]; put(a, 1, [4, 5, 6], 'extend'); a  => [1, 4, 5, 6, 2, 3]
a = [[0,0,0],[0,0,0],[0,0,0]]; put(a:1, 1, 1); a  => [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
a = {1,2,3,4}; put(a, 5, null); a  => {1: null, 2: null, 3: null, 4: null, 5: null}
tag = nbt('{}'); put(tag, 'BlockData.Properties', '[1,2,3,4]'); tag  => {BlockData:{Properties:[1,2,3,4]}}
tag = nbt('{a:[{lvl:3},{lvl:5},{lvl:2}]}'); put(tag, 'a[].lvl', 1); tag  => {a:[{lvl:1},{lvl:1},{lvl:1}]}
tag = nbt('{a:[{lvl:[1,2,3]},{lvl:[3,2,1]},{lvl:[4,5,6]}]}'); put(tag, 'a[].lvl', 1, 2); tag
     => {a:[{lvl:[1,2,1,3]},{lvl:[3,2,1,1]},{lvl:[4,5,1,6]}]}
tag = nbt('{a:[{lvl:[1,2,3]},{lvl:[3,2,1]},{lvl:[4,5,6]}]}'); put(tag, 'a[].lvl[1]', 1); tag
     => {a:[{lvl:[1,1,3]},{lvl:[3,1,1]},{lvl:[4,1,6]}]}
```
