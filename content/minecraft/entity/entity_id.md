---
title: entity_id()
name: entity_id
signatures:
  - params:
      - name: id
---

Fetching entities either by their ID obtained via `entity ~ 'id'`, which is
unique for a dimension and current world run, or by UUID, obtained via
`entity ~ 'uuid'`. It returns null if no such entity is found. Safer way to
'store' entities between calls, as missing entities will be returning `null`.
Both calls using UUID or numerical ID are `O(1)`, but obviously using UUIDs
takes more memory and compute.
