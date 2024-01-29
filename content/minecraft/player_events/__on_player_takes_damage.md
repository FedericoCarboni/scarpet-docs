---
params:
  - name: player
  - name: amount
  - name: source
  - name: source_entity
name: __on_player_takes_damage
title: player_takes_damage
---

Triggered when a player is taking damage. Event is executed right after
potential absorption was applied and before the actual damage is applied to the
player.

This event can be cancelled by returning `'cancel'`, which prevents the player
from taking damage.
