---
params:
  - name: player
---

Triggered when the game receives the request from a player to drop one item or
full stack from its inventory. Event happens before anything is changed server
side.

These events can be cancelled by returning `'cancel'`, which prevents the player
dropping the items.
