---
params: [
  "player",
  "from_pos",
  "from_dimension",
  "to_pos",
  "to_dimension"
]
# name: "__on_player_changes_dimension"
---
Called when a player moves from one dimension to another. Event is handled still when the player is in its previous
dimension and position.

`player_changes_dimension` returns `null` as `to_pos` when player goes back to the overworld from the end
, since the respawn location of the player is not controlled by the teleport, or a player can still see the end credits. After
 the player is eligible to respawn in the overworld, `player_respawns` will be triggered.
