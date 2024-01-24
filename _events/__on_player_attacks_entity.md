---
params:
  - name: player
  - name: entity
---

Triggered when a player attacks entity, right before it happens server side.

This event can be cancelled by returning `'cancel'`, which prevents the player from attacking the entity.
