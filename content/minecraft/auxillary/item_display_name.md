---
title: item_display_name()
name: item_display_name
signatures:
  - params:
      - name: item
---

Returns the name of the item as a Text Value. `item` should be a list of
`[item_name, count, nbt]`, or just an item name.

Please note that it is a translated value. treating it like a string
(eg.slicing, breaking, changing its case) will turn it back into a normal string
without translatable properties. just like a colorful formatted text loose its
color. And the result of it converting to a string will use en-us (in a server)
or your single player's language, but when you use print() or others functions
that accept a text value to broadcast it to players, it will use each player's
own language.

If the item is renamed, it will also be reflected in the results.
