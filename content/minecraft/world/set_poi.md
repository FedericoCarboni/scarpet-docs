---
title: set_poi()
name: set_poi
signatures:
  - params:
      - name: pos
      - name: type
      - name: occupancy
---

Sets a Point of Interest (POI) of a specified type with optional custom
occupancy. By default new POIs are not occupied. If type is `null`, POI at
position is removed. In any case, previous POI is also removed. Available POI
types are:

- `'unemployed', 'armorer', 'butcher', 'cartographer', 'cleric', 'farmer', 'fisherman', 'fletcher', 'leatherworker', 'librarian', 'mason', 'nitwit', 'shepherd', 'toolsmith', 'weaponsmith', 'home', 'meeting', 'beehive', 'bee_nest', 'nether_portal'`

Interestingly, `unemployed`, and `nitwit` are not used in the game, meaning,
they could be used as permanent spatial markers for scarpet apps. `meeting` is
the only one with increased max occupancy of 32.

Throws `unknown_poi` if the provided point of interest doesn't exist
