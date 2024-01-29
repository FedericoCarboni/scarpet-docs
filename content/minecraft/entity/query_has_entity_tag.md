---
title: query(e, 'has_entity_tag')
name: query
signatures:
  - params:
      - name: entity
      - name: "'has_entity_tag'"
      - name: tag
---

Returns `true` if the entity matches that entity tag, `false` if it doesn't, and
`null` if the tag is not valid.
