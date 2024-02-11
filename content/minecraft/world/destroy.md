---
title: destroy()
name: destroy
signatures:
  - params:
      - name: pos
  - params:
      - name: pos
      - name: tool
  - params:
      - name: pos
      - name: tool
      - name: nbt
---

Destroys the block like it was mined by a player. Add -1 for silk touch, and a
positive number for fortune level. If tool is specified, and optionally its nbt,
it will use that tool and will attempt to mine the block with this tool. If
called without item context, this function, unlike harvest, will affect all
kinds of blocks. If called with item in context, it will fail to break blocks
that cannot be broken by a survival player.

Without item context it returns `false` if failed to destroy the block and
`true` if block breaking was successful. In item context, `true` means that
breaking item has no nbt to use, `null` indicating that the tool should be
considered broken in process, and `nbt` type value, for a resulting NBT tag on a
hypothetical tool. Its up to the programmer to use that nbt to apply it where it
belong

Throws `unknown_item` if `tool` doesn't exist.

Here is a sample code that can be used to mine blocks using items in player
inventory, without using player context for mining. Obviously, in this case the
use of `harvest` would be much more applicable:

```scarpet
mine(x,y,z) ->
(
  p = player();
  slot = p~'selected_slot';
  item_tuple = inventory_get(p, slot);
  if (!item_tuple, destroy(x,y,z,'air'); return()); // empty hand, just break with 'air'
  [item, count, tag] = item_tuple;
  tag_back = destroy(x,y,z, item, tag);
  if (tag_back == false, // failed to break the item
    return(tag_back)
  );
  if (tag_back == true, // block broke, tool has no tag
    return(tag_back)
  );
  if (tag_back == null, //item broke
    delete(tag:'Damage');
    inventory_set(p, slot, count-1, item, tag);
    return(tag_back)
  );
  if (type(tag_back) == 'nbt', // item didn't break, here is the effective nbt
    inventory_set(p, slot, count, item, tag_back);
    return(tag_back)
  );
  print('How did we get here?');
)
```
