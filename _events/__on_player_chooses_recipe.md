---
params:
  - name: player
  - name: recipe
  - name: full_stack
---

Triggered when a player clicks a recipe in the crafting window from the crafting book, after server received
a client request, but before any items are moved from its inventory to the crafting menu.

This event can be cancelled by returning `'cancel'`, which prevents the recipe from being moved into the crafting grid.
