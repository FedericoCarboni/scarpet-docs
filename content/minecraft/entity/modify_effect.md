---
title: modify(e, 'effect')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'effect'"
      - name: name
      - name: duration
      - name: amplifier
      - name: show_particles
      - name: show_icon
      - name: ambient
---

Applies status effect to the living entity. Takes several optional parameters,
which default to `0`, `true`, `true` and `false`. If no duration is specified,
or if it's null or 0, the effect is removed. If duration is less than 0, it will
represent infinity. If name is not specified, it clears all effects.
