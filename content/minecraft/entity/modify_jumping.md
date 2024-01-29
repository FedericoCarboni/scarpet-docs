---
title: modify(e, 'jumping')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'jumping'"
      - name: boolean
---

Will make the entity constantly jump if set to true, and will stop the entity
from jumping if set to false. Note that jumping parameter can be fully
controlled by the entity AI, so don't expect that this will have a permanent
effect. Use `'jump'` to make an entity jump once for sure.

Requires a living entity as an argument.
