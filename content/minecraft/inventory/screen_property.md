---
title: screen_property()
name: screen_property
signatures:
  - params:
      - name: screen
      - name: property
      - name: value
---

Queries or modifies a certain `property` of a `screen`. The `property` is a
string with the name of the property. When called with `screen` and `property`
parameter, returns the current value of the property. When specifying a `value`,
the property will be assigned the new `value` and synced with the client.

**Options for `property` string:**

| `property`            | Required screen type         | Type    | Description                                                                                                                                        |
| --------------------- | ---------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                | **All**                      | text    | The name of the screen, as specified in the `create_screen()` function. Can only be queried.                                                       |
| `open`                | **All**                      | boolean | Returns `true` if the screen is open, `false` otherwise. Can only be queried.                                                                      |
| `fuel_progress`       | furnace/smoker/blast_furnace | number  | Current value of the fuel indicator.                                                                                                               |
| `max_fuel_progress`   | furnace/smoker/blast_furnace | number  | Maximum value for the full fuel indicator.                                                                                                         |
| `cook_progress`       | furnace/smoker/blast_furnace | number  | Cooking progress indicator value.                                                                                                                  |
| `max_cook_progress`   | furnace/smoker/blast_furnace | number  | Maximum value for the cooking progress indicator.                                                                                                  |
| `level_cost`          | anvil                        | number  | Displayed level cost for the anvil.                                                                                                                |
| `page`                | lectern                      | number  | Opened page in the lectern screen.                                                                                                                 |
| `beacon_level`        | beacon                       | number  | The power level of the beacon screen. This affects how many effects under primary power are grayed out. Should be a value between 0-5.             |
| `primary_effect`      | beacon                       | number  | The effect id of the primary effect. This changes the effect icon on the button on the secondary power side next to the regeneration effect.       |
| `secondary_effect`    | beacon                       | number  | The effect id of the secondary effect. This seems to change nothing, but it exists.                                                                |
| `brew_time`           | brewing_stand                | number  | The brewing time indicator value. This goes from 0 to 400.                                                                                         |
| `brewing_fuel`        | brewing_stand                | number  | The fuel indicator progress. Values range between 0 to 20.                                                                                         |
| `enchantment_power_x` | enchantment                  | number  | The level cost of the shown enchantment. Replace `x` with 1, 2 or 3 (e.g. `enchantment_power_2`) to target the first, second or third enchantment. |
| `enchantment_id_x`    | enchantment                  | number  | The id of the enchantment shown (replace `x` with the enchantment slot 1/2/3).                                                                     |
| `enchantment_level_x` | enchantment                  | number  | The enchantment level of the enchantment.                                                                                                          |
| `enchantment_seed`    | enchantment                  | number  | The seed of the enchanting screen. This affects the text shown in the standard Galactic alphabet.                                                  |
| `banner_pattern`      | loom                         | number  | The selected banner pattern inside the loom.                                                                                                       |
| `stonecutter_recipe`  | stonecutter                  | number  | The selected recipe in the stonecutter.                                                                                                            |
