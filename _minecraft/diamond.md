---
signatures:
  - params:
      - name: center_pos
      - name: radius
      - name: height
---

Iterates over a diamond like area of blocks. With no radius and height, its 7
blocks centered around the middle (block + neighbours). With a radius specified,
it expands shape on x and z coords, and with a custom height, on y. Any of these
can be zero as well. radius of 0 makes a stick, height of 0 makes a diamond
shape pad.

If radius and height are the same, creats a 3D diamond, of all the blocks which
are a manhattan distance of `radius` away from the center.
