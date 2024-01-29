---
title: modify(e, 'breaking_progress')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'breaking_progress'"
      - name: value
---

Modifies the breaking progress of a player currently mined block. Value of
`null`, `-1` makes it reset. Values `0` to `10` will show respective animation
of a breaking block. Check `query(e, 'breaking_progress')` for examples.
