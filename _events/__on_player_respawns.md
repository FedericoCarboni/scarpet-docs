---
params:
  - name: player
---

Triggered when a player respawns. This includes spawning after death, or landing in the overworld after leaving the end.
When the event is handled, a player is still in its previous location and dimension - will be repositioned right after. In
case player died, its previous inventory as already been scattered, and its current inventory will not be copied to the respawned
entity, so any manipulation to player data is
best to be scheduled at the end of the tick, but you can still use its current reference to query its status as of the respawn event.
