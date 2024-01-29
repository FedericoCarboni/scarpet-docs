---
title: query(e, 'facing')
name: query
signatures:
  - params:
      - name: entity
      - name: "'facing'"
      - name: order
---

Returns where the entity is facing. optional order (number from 0 to 5, and
negative), indicating primary directions where entity is looking at. From most
prominent (order 0) to opposite (order 5, or -1).
