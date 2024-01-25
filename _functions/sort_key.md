---
signatures:
  - params:
      - name: list
      - name: key_expr
---

Sorts a copy of the list in the order or keys as defined by the `key_expr` for each element

<pre>
sort_key([1,3,2],_)  => [1, 2, 3]
sort_key([1,3,2],-_)  => [3, 2, 1]
sort_key([range(10)],rand(1))  => [1, 0, 9, 6, 8, 2, 4, 5, 7, 3]
sort_key([range(20)],str(_))  => [0, 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 3, 4, 5, 6, 7, 8, 9]
</pre>
