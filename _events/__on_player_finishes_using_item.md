---
params: [
  "player",
  "item_tuple",
  "hand"
]
# name: "__on_player_finishes_using_item"
---
Player using of an item is done. This is controlled server side and is responsible for such events as finishing
eating. The event is triggered after confirming that the action is valid, and sending the feedback back
to the client, but before triggering it and its effects in game.

This event can be cancelled by returning `'cancel'`, which prevents the player from finishing using the item.
