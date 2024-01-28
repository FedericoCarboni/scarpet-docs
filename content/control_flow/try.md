---
title: try
name: try
signatures:
  - params:
      - name: expr
  - params:
      - name: expr
      - name: catch_expr
  - params:
      - name: expr
      - name: type
      - name: catch_expr
      - rest: true
---

Evaluate an expression catching any exceptions thrown.

The exceptions can be thrown explicitly using `throw()` or internally by scarpet
where code is correct but detects illegal state. The 2-argument form catches
only user-thrown exceptions and one argument call `try(expr)` is equivalent to
`try(expr, null)`, or `try(expr, 'user_exception', null)`. If multiple
`type-catch` pairs are defined, the execution terminates on the first applicable
type for the exception thrown. Therefore, even if the caught exception matches
multiple filters, only the first matching block will be executed.

Catch expressions are evaluated with `_` set to the value associated with the
exception and `_trace` set to contain details about point of error (token, and
line and column positions), call stack and local variables at the time of
failure. The `type` will catch any exception of that type and any subtype of
this type.

You can use `try` mechanism to exit from large portion of a convoluted call
stack and continue program execution, although catching exceptions is typically
much more expensive comparing to not throwing them.

The `try` function allows you to catch some scarpet exceptions for cases
covering invalid data, like invalid blocks, biomes, dimensions and other things,
that may have been modified by datapacks, resourcepacks or other mods, or when
an error is outside of the programmers scope, such as problems when reading or
decoding files.

This is the hierarchy of the exceptions that could be thrown/caught in the with
the `try` function:

- `exception`: This is the base exception. Catching `'exception'` allows to
  catch everything that can be caught, but like everywhere else, doing that
  sounds like a bad idea.
  - `value_exception`: This is the parent for any exception that occurs due to
    an incorrect argument value provided to a built-in function
    - `unknown_item`, `unknown_block`, `unknown_biome`, `unknown_sound`,
      `unknown_particle`, `unknown_poi_type`, `unknown_dimension`,
      `unknown_structure`, `unknown_criterion`: Specific errors thrown when a
      specified internal name does not exist or is invalid.
  - `io_exception`: This is the parent for any exception that occurs due to an
    error handling external data.
    - `nbt_error`: Incorrect input/output NBT file.
    - `json_error`: Incorrect input/output JSON data.
    - `b64_error`: Incorrect input/output b64 (base 64) string
  - `user_exception`: Exception thrown by default with `throw` function.

Synopsis:

```scarpet
inner_call() -> (
    aaa = 'booyah';
    try(
      for(range(10), item_tags('stick'+_*'k')),
      print(_trace), // not caught, only catching user_exceptions
    );
);

outer_call() -> (
    try(
        inner_call(),
        'exception', // catching everything
        print(_trace),
    );
);
```

Producing:

```text
{
  stack: [[<app>, inner_call, 1, 14]],
  locals: {_a: 0, aaa: booyah, _: 1, _y: 0, _i: 1, _x: 0, _z: 0},
  token: [item_tags, 5, 23]
}
```
