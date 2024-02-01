---
title: explosion
name: __on_explosion
params:
  - name: pos
  - name: power
  - name: source
  - name: causer
  - name: mode
  - name: fire
---

Event triggered right before explosion takes place and before has any effect on
the world. `source` can be an entity causing the explosion, and `causer` the
entity triggering it, `mode` indicates block effects: `'none'`, `'break'` (drop
all blocks), or `'destroy'` - drop few blocks. Event is not captured when
`create_explosion()` is called.
