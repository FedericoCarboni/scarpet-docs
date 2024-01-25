---
signatures:
  - params:
      - name: pos
      - name: direction
      - name: amount
---

Returns a coords triple that is offset in a specified `direction` by `amount` of blocks. The default offset amount is
1 block. To offset into opposite facing, use negative numbers for the `amount`.

```scarpet
pos_offset(block(0,5,0), 'up', 2)  => [0,7,0]
pos_offset([0,5,0], 'up', -2 ) => [0,3,0]
```
