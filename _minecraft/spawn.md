---
signatures:
  - params:
      - name: name
      - name: pos
      - name: nbt
---

Spawns and places an entity in world, like `/summon` vanilla command. Requires a position to spawn, and optional
extra nbt data to merge with the entity. What makes it different from calling `run('summon ...')`, is the fact that
you get the entity back as a return value, which is swell.
