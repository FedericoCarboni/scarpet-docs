---
signatures:
  - params:
      - name: item
      - name: tag
name: item_tags
title: item_tags()
---


Returns list of tags the item belongs to, or, if tag is provided, `true` if an
item matches the tag, `false` if it doesn't and `null` if that's not a valid tag

Throws `unknown_item` if item doesn't exist.
