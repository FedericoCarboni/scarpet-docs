---
title: recipe_data()
name: recipe_data
signatures:
  - params:
      - name: recipe/item
  - params:
      - name: recipe/item
      - name: type
---

Returns all recipes matching either an `item`, or represent actual `recipe`
name. In vanilla datapack, for all items that have one recipe available, the
recipe name is the same as the item name but if an item has multiple recipes,
its direct name can be different.

Recipe type can take one of the following options:

- `'crafting'` - default, crafting table recipe
- `'smelting'` - furnace recipe
- `'blasting'` - blast furnace recipe
- `'smoking'` - smoker recipe
- `'campfire_cooking'` - campfire recipe
- `'stonecutting'` - stonecutter recipe
- `'smithing'` - smithing table (1.16+)

The return value is a list of available recipes (even if there is only one
recipe available). Each recipe contains of an item triple of the crafting
result, list of ingredients, each containing a list of possible variants of the
ingredients in this slot, as item triples, or `null` if its a shaped recipe and
a given slot in the patterns is left empty, and recipe specification as another
list. Possible recipe specs is:

- `['shaped', width, height]` - shaped crafting. `width` and `height` can be 1,
  2 or 3.
- `['shapeless']` - shapeless crafting
- `['smelting', duration, xp]` - smelting/cooking recipes
- `['cutting']` - stonecutter recipe
- `['special']` - special crafting recipe, typically not present in the crafting
  menu
- `['custom']` - other recipe types

Note that ingredients are specified as tripes, with count and nbt information.
Currently all recipes require always one of the ingredients, and for some
recipes, even if the nbt data for the ingredient is specified (e.g.
`dispenser`), it can accept items of any tags.

Also note that some recipes leave some products in the crafting window, and
these can be determined using `crafting_remaining_item()` function

Examples:

```scarpet
recipe_data('iron_ingot_from_nuggets')
recipe_data('iron_ingot')
recipe_data('glass', 'smelting')
```
