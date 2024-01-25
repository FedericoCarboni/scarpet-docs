---
signatures:
  - params:
      - name: expr
---

Returns the variable under the name of the string value of the expression. Allows to manipulate variables in more
programmatic manner, which allows to use local variable set with a hash map type key-value access,
can also be used with global variables

<pre>
a = 1; var('a') = 'foo'; a => a == 'foo'
</pre>
