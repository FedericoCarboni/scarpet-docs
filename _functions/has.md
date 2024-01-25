Similar to `get`, but returns boolean value indicating if the given index / key / path is in the container.
Can be used to determine if `get(...)==null` means the element doesn't exist, or the stored value for this
address is `null`, and is cheaper to run than `get`.

Like get, it can accept multiple addresses for chains in nested containers. In this case `has(foo:a:b)` is
equivalent to `has(get(foo,a), b)` or `has(foo, a, b)`
