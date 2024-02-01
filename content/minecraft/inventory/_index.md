---
title: Inventory
kind: function
order: 3
---

Most functions in this category require inventory as the first argument.
Inventory could be specified by an entity, or a block, or position (three
coordinates) of a potential block with inventory, or can be preceded with
inventory type. Inventory type can be `null` (default), `'enderchest'` denoting
player enderchest storage, or `'equipment'` applying to entities hand and armour
pieces. Then the type can be followed by entity, block or position coordinates.
For instance, player enderchest inventory requires two arguments, keyword
`'enderchest'`, followed by the player entity argument, (or a single argument as
a string of a form: `'enderchest_steve'` for legacy support). If your player
name starts with `'enderchest_'`, first of all, tough luck, but then it can be
always accessed by passing a player entity value. If all else fails, it will try
to identify first three arguments as coordinates of a block position of a block
inventory. Player inventories can also be called by their name.

A few living entities can have both: their regular inventory, and their
equipment inventory. Player's regular inventory already contains the equipment,
but you can access the equipment part as well, as well as their enderchest
separately. For entity types that only have their equipment inventory, the
equipment is returned by default (`null` type).

If that's confusing see examples under `inventory_size` on how to access
inventories. All other `inventory_...()` functions use the same scheme.

If the entity or a block doesn't have an inventory, all API functions typically
do nothing and return null.

Most items returned are in the form of a triple of item name, count, and nbt or
the extra data associated with an item.
