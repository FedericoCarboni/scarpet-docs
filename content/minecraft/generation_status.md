---
signatures:
  - params:
      - name: pos
      - name: generation_statuspos
      - name: 'true'
name: generation_status
title: generation_status()
---


Returns generation status as per the ticket system. Can return any value from
several available but chunks can only be stable in a few states: `full`,
`features`, `liquid_carvers`, and `structure_starts`. Returns `null` if the
chunk is not in memory unless called with optional `true`.
