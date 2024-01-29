---
title: modify(e, 'custom_name')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'custom_name'"
---

, `modify(e, 'custom_name', name)`, `modify(e, 'custom_name', name, visible)`

Sets the custom name of the entity. Without arguments - clears current custom
name. Optional visible affects if the custom name is always visible, even
through blocks.
