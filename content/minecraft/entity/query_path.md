---
title: query(e, 'path')
name: query
signatures:
  - params:
      - name: entity
      - name: "'path'"
---

Returns path of the entity if present, `null` otherwise. The path comprises of
list of nodes, each is a list of block value, node type, penalty, and a boolean
indicated if the node has been visited.
