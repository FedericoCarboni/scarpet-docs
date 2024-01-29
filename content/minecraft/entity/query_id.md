---
title: query(e, 'id')
name: query
signatures:
  - params:
      - name: entity
      - name: "'id'"
---

Returns numerical id of the entity. Most efficient way to keep track of entities
in a script. Ids are only unique within current game session (ids are not
preserved between restarts), and dimension (each dimension has its own ids which
can overlap).
