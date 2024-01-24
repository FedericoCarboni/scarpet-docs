---
params:
  - name: player
  - name: amount
  - name: source
  - name: source_entity
---

Triggered when a player is taking damage. Event is executed right after potential absorption was applied and before
the actual damage is applied to the player.

This event can be cancelled by returning `'cancel'`, which prevents the player from taking damage.
