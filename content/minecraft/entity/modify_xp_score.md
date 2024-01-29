---
title: modify(e, 'xp_score')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'xp_score'"
      - name: value
---

Manipulates player xp values - `'add_xp'` the method you probably want to use to
manipulate how much 'xp' an action should give. `'xp_score'` only affects the
number you see when you die, and `'xp_progress'` controls the xp progressbar
above the hotbar, should take values from 0 to 1, but you can set it to any
value, maybe you will get a double, who knows.
