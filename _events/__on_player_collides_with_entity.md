---
params: [
  "player",
  "entity"
]
# name: "__on_player_collides_with_entity"
---
Triggered every time a player - entity collisions are calculated, before effects of collisions are applied in the game.
Useful not only when colliding with living entities, but also to intercept items or XP orbs before they have an effect
on the player.
