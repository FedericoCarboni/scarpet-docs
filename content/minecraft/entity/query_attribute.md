---
title: query(e, 'attribute')
name: query
signatures:
  - params:
      - name: entity
      - name: "'attribute'"
  - params:
      - name: entity
      - name: "'attribute'"
      - name: name
---

returns the value of an attribute of the living entity. If the name is not
provided, returns a map of all attributes and values of this entity. If an
attribute doesn't apply to the entity, or the entity is not a living entity,
`null` is returned.
