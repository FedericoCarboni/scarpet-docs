---
title: modify(e, 'persistence')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'persistence'"
      - name: bool
---

Sets the entity persistence tag to `true` (default) or `false`. Only affects
mobs. Persistent mobs don't despawn and don't count towards the mobcap.
