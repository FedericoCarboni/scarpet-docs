---
title: entity_types()
name: entity_types
signatures:
  - params:
      - name: descriptor
---

Resolves a given descriptor returning list of entity types that match it. The
returned list of types is also a valid list of descriptors that can be use
elsewhere where entity types are required.

Currently, the following descriptors are available:

- `*`: all entities, even `!valid`, matches all entity types.
- `valid` - all entities that are not dead (health > 0). All main categories
  below also return only entities in the `valid` category. matches all entity
  types. `!valid` matches all entites that are already dead of all types.
- `living` - all entities that resemble a creature of some sort
- `projectile` - all entities or types that are not living that can be throw or
  projected, `!projectile` matches all types that are not living, but cannot the
  thrown or projected.
- `minecarts` matches all minecart types. `!minecarts` matches all types that
  are not live, but also not minecarts. Using plural since `minecart` is a
  proper entity type on its own.
- `undead`, `arthropod`, `aquatic`, `regular`, `illager` - all entities / types
  that belong to any of these groups. All living entities belong to one and only
  one of these. Corresponding negative (e.g. `!undead`) corresponds to all mobs
  that are living but don't belong to that group. Entity groups are used in
  interaction / battle mechanics like smite for undead, or impaling for aquatic.
  Also certain mechanics interact with groups, like ringing a bell with
  illagers. All other mobs that don't have any of these traits belong to the
  `regular` group.
- `monster`, `creature`, `ambient`, `water_creature`, `water_ambient`, `misc` -
  another categorization of living entities based on their spawn group. Negative
  descriptor resolves to all living types that don't belong to that category.
- All entity tags including those provided with datapacks. Built-in entity tags
  include: `skeletons`, `raiders`, `beehive_inhabitors` (bee, duh), `arrows` and
  `impact_projectiles`.
- Any of the standard entity types, equivalent to selection from `/summon`
  vanilla command, which is one of the options returned by `entity_types()`,
  except for `'fishing_bobber'` and `'player'`.

All categories can be preceded with `'!'` which will fetch all entities (unless
otherwise noted) that are valid (health > 0) but not belonging to that group.
