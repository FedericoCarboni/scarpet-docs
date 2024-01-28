---
signatures:
  - params:
      - name: item
name: crafting_remaining_item
title: crafting_remaining_item()
---


returns `null` if the item has no remaining item in the crafting window when
used as a crafting ingredient, or an item name that serves as a replacement
after crafting is done. Currently it can only be buckets and glass bottles.
