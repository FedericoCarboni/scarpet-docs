---
title: List
name: l
signatures:
  - params:
      - name: values
        rest: true
syntax: '[...values]'
---

Creates a list of values of the expressions passed as parameters. It can be used
as an L-value and if all elements are variables, you coujld use it to return
multiple results from one function call, if that function returns a list of
results with the same size as the `[]` call uses. In case there is only one
argument and it is an iterator (vanilla expression specification has `range`,
but Minecraft API implements a bunch of them, like `diamond`), it will convert
it to a proper list. Iterators can only be used in high order functions, and are
treated as empty lists, unless unrolled with `[]`.

Internally, `[elem, ...]`(list syntax) and `l(elem, ...)`(function syntax) are
equivalent. `[]` is simply translated to `l()` in the scarpet preprocessing
stage. This means that internally the code has always expression syntax despite
`[]` not using different kinds of brackets and not being proper operators. This
means that `l(]` and `[)` are also valid although not recommended as they will
make your code far less readable.

```scarpet
l(1,2,'foo') <=> [1, 2, 'foo']
l() <=> [] (empty list)
[range(10)] => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2] = [3, 4] => Error: l is not a variable
[foo, bar] = [3, 4]; foo==3 && bar==4 => 1
[foo, bar, baz] = [2, 4, 6]; [min(foo, bar), baz] = [3, 5]; [foo, bar, baz]  => [3, 4, 5]
```

In the last example `[min(foo, bar), baz]` creates a valid L-value, as
`min(foo, bar)` finds the lower of the variables (in this case `foo`) creating a
valid assignable L-list of `[foo, baz]`, and these values will be assigned new
values
