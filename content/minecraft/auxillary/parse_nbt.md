---
title: parse_nbt()
name: parse_nbt
signatures:
  - params:
      - name: tag
---

Converts NBT tag to a scarpet value, which you can navigate through much better.

Converts:

- Compound tags into maps with string keys
- List tags into list values
- Numbers (Ints, Floats, Doubles, Longs) into a number
- Rest is converted to strings.
