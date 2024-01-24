---
signatures:
  - params:
      - name: from_pos
      - name: to_pos
      - name: expr
---

Evaluates expression for each block in the area, the same as the `scan` function, but using two opposite corners of
the rectangular cuboid. Any corners can be specified, its like you would do with `/fill` command.
You can use a position or three coordinates to specify, it doesn't matter.

For return value and handling `break` and `continue` statements, see `scan` function above.
