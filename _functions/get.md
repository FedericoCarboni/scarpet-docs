---
signatures:
  - params:
      - name: container
      - name: address
      - name: addresses
        rest: true
  - params:
      - name: lvalue
---

Returns the value at `address` element from the `value`. For lists it indicates an index, use negative numbers to
reach elements from the end of the list. `get` call will always be able to find the index. In case there is few
items, it will loop over

for maps, retrieves the value under the key specified in the `address` or null otherwise

[Minecraft specific usecase]: In case `value` is of `nbt` type, uses address as the nbt path to query, returning null,
if path is not found, one value if there was one match, or list of values if result is a list. Returned elements can
be of numerical type, string texts, or another compound nbt tags

In case to simplify the access with nested objects, you can add chain of addresses to the arguments of `get` rather
than calling it multiple times. `get(get(foo,a),b)` is equivalent to `get(foo, a, b)`, or `foo:a:b`.

```scarpet
get([range(10)], 5)  => 5
get([range(10)], -1)  => 9
get([range(10)], 10)  => 0
[range(10)]:93  => 3
get(player() ~ 'nbt', 'Health') => 20 // inefficient way to get player health, use player() ~ 'health' instead
get({ 'foo' -> 2, 'bar' -> 3, 'baz' -> 4 }, 'bar')  => 3
```
