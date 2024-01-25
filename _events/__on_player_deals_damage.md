---
params:
  - name: player
  - name: amount
  - name: entity
---

Triggered when a player deals damage to another entity. Its applied in the same moment as `player_takes_damage` if both
sides of the event are players, and similar for all other entities, just their absorption is taken twice, just noone ever
notices that ¯\\\_(ツ)\_/¯

This event can be cancelled by returning `'cancel'`, which prevents the damage from being dealt.
