---
signatures:
  - params:
      - name: pos
      - name: type
      - name: radius
---

Adds a chunk ticket at a position, which makes the game to keep the designated area centered around
`pos` with radius of `radius` loaded for a predefined amount of ticks, defined by `type`. Allowed types
are `portal`: 300 ticks, `teleport`: 5 ticks, and `unknown`: 1 tick. Radius can be from 1 to 32 ticks.

This function is tentative - will likely change when chunk ticket API is properly fleshed out.
