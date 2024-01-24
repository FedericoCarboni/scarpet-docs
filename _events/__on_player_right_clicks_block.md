---
params: [
  "player",
  "item_tuple",
  "hand",
  "block",
  "face",
  "hitvec"
]
# name: "__on_player_right_clicks_block"
---
Called when player right clicks on a block with anything, or interacts with a block. This event is triggered right
before other interaction events, like `'player_interacts_with_block'` or `'player_places_block'`.

This event can be cancelled by returning `'cancel'`, which prevents the player interaction.
