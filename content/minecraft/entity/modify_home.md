---
title: modify(e, 'home')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'home'"
      - name: "null"
  - params:
      - name: entity
      - name: "'home'"
      - name: block
      - name: distance
  - params:
      - name: entity
      - name: "'home'"
      - name: x
      - name: "y"
      - name: z
      - name: distance
---

Sets AI to stay around the home position, within `distance` blocks from it.
`distance` defaults to 16 blocks. `null` removes it. _May_ not work fully with
mobs that have this AI built in, like Villagers.
