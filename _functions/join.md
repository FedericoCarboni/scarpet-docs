---
signatures:
  - params:
      - name: delim
      - name: list
      - name: joindelim
      - name: values
---

Returns a string that contains joined elements of the list, iterator, or all values,
concatenated with `delim` delimiter

<pre>
join('-',range(10))  => 0-1-2-3-4-5-6-7-8-9
join('-','foo')  => foo
join('-', 'foo', 'bar')  => foo-bar
</pre>
