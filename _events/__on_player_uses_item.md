---
params: [
  "player",
  "item_tuple",
  "hand"
]
# name: "__on_player_uses_item"
---
Triggers with a right click action. Event is triggered right after a server receives the packet, before the
game manages to do anything about it. Event triggers when player starts eating food, or starts drawing a bow.
Use `player_finishes_using_item`, or `player_releases_item` to capture the end of these events.

This event can be cancelled by returning `'cancel'`, which prevents the item from being used.

Event is not triggered when a player places a block, for that use
`player_right_clicks_block` or `player_places_block` event.
