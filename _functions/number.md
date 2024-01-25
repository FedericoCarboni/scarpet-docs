---
signatures:
  - params:
      - name: expr
---

Returns a numeric context of the expression. Can be used to read numbers from strings, or other types

<pre>
number(null) => 0
number(false) => 0
number(true) => 1
number('') => null
number('3.14') => 3.14
number([]) => 0
number(['']) => 1
number('foo') => null
number('3bar') => null
number('2')+number('2') => 4
</pre>
