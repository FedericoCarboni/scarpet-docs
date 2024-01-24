---
params: [
  "player",
  "command"
]
# name: "__on_player_command"
---
Triggered when a player runs a command. Command value is returned without the / in front.

This event can be cancelled by returning `'cancel'`, which prevents the message from being sent.
