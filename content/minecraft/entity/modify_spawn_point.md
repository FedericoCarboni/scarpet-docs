---
title: modify(e, 'spawn_point')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'spawn_point'"
---

, `modify(e, 'spawn_point', null)`,
`modify(e, 'spawn_point', pos, dimension?, angle?, forced?)`

Changes player respawn position to given position, optional dimension (defaults
to current player dimension), angle (defaults to current player facing) and
spawn forced/fixed (defaults to `false`). If `none` or nothing is passed, the
respawn point will be reset (as removed) instead.
