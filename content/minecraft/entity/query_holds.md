---
title: query(e, 'holds')
name: query
signatures:
  - params:
      - name: entity
      - name: "'holds'"
      - name: slot
---

Returns triple of short name, stack count, and NBT of item held in `slot`, or
`null` if nothing or not applicable. Available options for `slot` are:

- `mainhand`
- `offhand`
- `head`
- `chest`
- `legs`
- `feet`

If `slot` is not specified, it defaults to the main hand.
