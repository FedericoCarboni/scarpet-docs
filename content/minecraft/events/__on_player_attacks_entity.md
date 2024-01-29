---
params:
  - name: player
  - name: entity
name: __on_player_attacks_entity
title: player_attacks_entity
---

Triggered when a player attacks entity, right before it happens server side.

This event can be cancelled by returning `'cancel'`, which prevents the player
from attacking the entity.
