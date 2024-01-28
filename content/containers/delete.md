---
title: delete()
name: delete
signatures:
  - params:
      - name: container
      - name: address
      - name: addresses
        rest: true
  - params:
      - name: lvalue
---

Removes a specific entry from the container.

## Lists

For lists it removes the element and shrinks it.

## Maps

For maps, it removes the key from the map.

## NBT

For NBT removes content from a given path.

Like with the `get` and `has`, `delete` can accept chained addresses, as well as
l-value container access, removing the value from the leaf of the path provided,
so `delete(foo, a, b)` is the same as `delete(get(foo,a),b)` or
`delete(foo:a:b)`

## Parameters

## Returns

Returns true, if container was changed, false, if it was left unchanged, and
null if operation was invalid.
