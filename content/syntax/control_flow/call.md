---
title: call
name: call
signatures:
  - params:
      - name: function
      - name: args
        rest: true
---

Calls a function with the provided arguments.

Function values cannot be called directly and can only be executed with
`call()`.

```scarpet
f = (_(x) -> x + 1);
val = call(f, 12);
val == 13
```

`call()` can also invoke functions by name.

```scarpet
f(x) -> x + 1;
val = call('f', 12);
```

`call()` resolves function names from the call site.

### Passing function references

In case a function is defined by its name, Scarpet will attempt to resolve its
definition in the given module and its imports, meaning if the call is in a
imported library, and not in the main module of your app, and that function is
not visible from the library perspective, but in the app, it won't be call-able.
In case you pass a function name to a separate module in your app, it should
import back that method from the main module for visibility.

Check an example of a problematic code of a library that expects a function
value as a passed argument and how it is called in the parent app:

```scarpet
//app.sc
import('lib', 'callme');
foo(x) -> x*x;
test() -> callme('foo' , 5);
```

```scarpet
//lib.scl
callme(fun, arg) -> call(fun, arg);
```

In this case `'foo'` will fail to dereference in `lib` as it is not visible by
name. In tightly coupled modules, where `lib` is just a component of your `app`
you can use circular import to acknowledge the symbol from the other module
(pretty much like imports in Java classes), and that solves the issue but makes
the library dependent on the main app:

```scarpet
//lib.scl
import('app','foo');
callme(fun, arg) -> call(fun, arg);
```

You can circumvent that issue by explicitly dereferencing the local function
where it is used as a lambda argument created in the module in which the
requested function is visible:

```scarpet
//app.sc
import('lib', 'callme');
foo(x) -> x*x;
test() -> callme(_(x) -> foo(x), 5);
```

```scarpet
//lib.scl
callme(fun, arg) -> call(fun, arg);
```

Or by passing an explicit reference to the function, instead of calling it by
name:

```scarpet
//app.sc
import('lib', 'callme');
global_foohandler = (foo(x) -> x*x);
test() -> callme(global_foohandler, 5);
```

Little technical note: the use of `_` in expression passed to built in functions
is much more efficient due to not creating new call stacks for each invoked
function, but anonymous functions is the only mechanism available for
programmers with their own lambda arguments

```scarpet
my_map(list, function) -> map(list, call(function, _));
my_map([1,2,3], _(x) -> x*x);    // => [1,4,9]
profile_expr(my_map([1,2,3], _(x) -> x*x));   // => ~32000
sq(x) -> x*x; profile_expr(my_map([1,2,3], 'sq'));   // => ~36000
sq = (_(x) -> x*x); profile_expr(my_map([1,2,3], sq));   // => ~36000
profile_expr(map([1,2,3], _*_));   // => ~80000
```
