---
params: [
  "player",
  "entity",
  "hand"
]
# name: "__on_player_interacts_with_entity"
---
Triggered when player right clicks (interacts) with an entity, even if the entity has no vanilla interaction with the player or
the item they are holding. The event is invoked after receiving a packet from the client, before anything happens server side
with that interaction.

This event can be cancelled by returning `'cancel'`, which prevents the player interacting with the entity.
