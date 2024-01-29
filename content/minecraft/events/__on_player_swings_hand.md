---
params:
  - name: player
  - name: hand
name: __on_player_swings_hand
title: player_swings_hand
---

Triggered when a player starts swinging their hand. The event typically triggers
after a corresponding event that caused it (`player_uses_item`,
`player_breaks_block`, etc.), but it triggers also after some failed events,
like attacking the air. When swinging continues as an effect of an action, no
new swinging events will be issued until the swinging is stopped.
