---
title: scoreboard_add()
name: scoreboard_add
signatures:
  - params:
      - name: objective
  - params:
      - name: objective
      - name: criterion
---

Adds a new objective to scoreboard. If `criterion` is not specified, assumes
`'dummy'`. Returns `true` if the objective was created, or `null` if an
objective with the specified name already exists.

Throws `unknown_criterion` if criterion doesn't exist.

```scarpet
scoreboard_add('counter')
scoreboard_add('lvl','level')
```
