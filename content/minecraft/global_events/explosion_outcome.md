---
title: explosion_outcome
name: __on_explosion_outcome
params:
  - name: pos
  - name: power
  - name: source
  - name: causer
  - name: mode
  - name: fire
  - name: blocks
  - name: entities
---

Triggered during the explosion, before any changes to the blocks are done,
but the decision to blow up is already made and entities are already affected.
The parameter `blocks` contains the list of blocks that will blow up (empty if `explosionNoBlockDamage` is set to `true`).
The parameter `entities` contains the list of entities that have been affected by the explosion. Triggered even with `create_explosion()`.
