---
title: String
name: str
signatures:
  - params:
      - name: value
  - params:
      - name: format
      - name: args
        rest: true
  - params:
      - name: format
      - name: args
---

If called with one argument, returns string representation of such value.

Otherwise, returns a formatted string representing the expression. Arguments for
formatting can either be provided as each consecutive parameter, or as a list
which then would be the only extra parameter. To format one list argument , you
can use `str(list)`, or `str('foo %s', [list])`.

Accepts formatting style accepted by [`String.format()`]. Supported types (with
`"%<?>"` syntax):

- `d`, `o`, `x`: integers, octal, hex
- `a`, `e`, `f`, `g`: floats
- `b`: booleans
- `s`: strings
- `%%`: '%' character

```scarpet
str(null) => 'null'
str(false) => 'false'
str('') => ''
str('3.14') => '3.14'
str([]) => '[]'
str(['']) => '[]'
str('foo') => 'foo'
str('3bar') => '3bar'
str(2)+str(2) => '22'
str('pi: %.2f',pi) => 'pi: 3.14'
str('player at: %d, %d, %d',pos(player())) => 'player at: 567, -2423, 124'
```

[`String.format()`]:
  https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/String.html#format(java.lang.String,java.lang.Object...)
