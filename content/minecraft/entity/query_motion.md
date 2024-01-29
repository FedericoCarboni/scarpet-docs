---
title: query(e, 'motion')
name: query
signatures:
  - params:
      - name: entity
      - name: "'motion'"
---

Triple of entity's motion vector, `[motion_x, motion_y, motion_z]`. Motion
represents the velocity from all the forces that exert on the given entity.
Things that are not 'forces' like voluntary movement, or reaction from the
ground are not part of said forces.
