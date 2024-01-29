---
title: create_screen()
name: create_screen
signatures:
  - params:
      - name: player
      - name: type
      - name: name
      - name: callback
---

Creates and opens a screen for a `player`.

Available `type`s:

- `anvil`
- `beacon`
- `blast_furnace`
- `brewing_stand`
- `cartography_table`
- `crafting`
- `enchantment`
- `furnace`
- `generic_3x3`
- `generic_9x1`
- `generic_9x2`
- `generic_9x3`
- `generic_9x4`
- `generic_9x5`
- `generic_9x6`
- `grindstone`
- `hopper`
- `lectern`
- `loom`
- `merchant`
- `shulker_box`
- `smithing`
- `smoker`
- `stonecutter`

The `name` parameter can be a formatted text and will be displayed at the top of
the screen. Some screens like the lectern or beacon screen don't show it.

Optionally, a `callback` function can be passed as the fourth argument. This
functions needs to have four parameters:
`_(screen, player, action, data) -> ...`

The `screen` parameter is the screen value of the screen itself. `player` is the
player who interacted with the screen. `action` is a string corresponding to the
interaction type. Can be any of the following:

Slot interactions:

- `pickup`
- `quick_move`
- `swap`
- `clone`
- `throw`
- `quick_craft`
- `pickup_all`

The `data` for this interaction is a map, with a `slot` and `button` value.
`slot` is the slot index of the slot that was clicked. When holding an item in
the cursor stack and clicking inside the screen, but not in a slot, this is -1.
If clicked outside the screen (where it would drop held items), this value is
null. The `button` is the mouse button used to click the slot.

For the `swap` action, the `button` is the number key 0-8 for a certain hotbar
slot.

For the `quick_craft` action, the `data` also contains the `quick_craft_stage`,
which is either 0 (beginning of quick crafting), 1 (adding item to slot) or 2
(end of quick crafting).

Other interactions:

- `button` Pressing a button in certain screens that have button elements
  (enchantment table, lectern, loom and stonecutter) The `data` provides a
  `button`, which is the index of the button that was pressed. Note that for
  lecterns, this index can be certain a value above 100, for jumping to a
  certain page. This can come from formatted text inside the book, with a
  `change_page` click event action.

- `close` Triggers when the screen gets closed. No `data` provided.

- `select_recipe` When clicking on a recipe in the recipe book. `data` contains
  a `recipe`, which is the identifier of the clicked recipe, as well as
  `craft_all`, which is a boolean specifying whether shift was pressed when
  selecting the recipe.

- `slot_update` Gets called **after** a slot has changed contents. `data`
  provides a `slot` and `stack`.

By returning a string `'cancel'` in the callback function, the screen
interaction can be cancelled. This doesn't work for the `close` action.

The `create_screen` function returns a `screen` value, which can be used in all
inventory related functions to access the screens' slots. The screen inventory
covers all slots in the screen and the player inventory. The last slot is the
cursor stack of the screen, meaning that using `-1` can be used to modify the
stack the players' cursor is holding.
