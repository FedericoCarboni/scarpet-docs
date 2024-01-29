---
title: modify(e, 'nbt_merge')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'nbt_merge'"
      - name: partial_tag
---

Merges a partial tag into the entity data and reloads the entity from its
updated tag. Cannot be applied to players.
