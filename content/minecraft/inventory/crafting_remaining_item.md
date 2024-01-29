---
title: crafting_remaining_item()
name: crafting_remaining_item
signatures:
  - params:
      - name: item
---

Returns `null` if the item has no remaining item in the crafting window when
used as a crafting ingredient, or an item name that serves as a replacement
after crafting is done. Currently it can only be buckets and glass bottles.
