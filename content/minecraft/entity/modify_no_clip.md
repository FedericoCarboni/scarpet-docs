---
title: modify(e, 'no_clip')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'no_clip'"
      - name: boolean
---

Sets if the entity obeys any collisions, including collisions with the terrain
and basic physics. Not affecting players, since they are controlled client side.
