---
title: entity_area()
name: entity_area
signatures:
  - params:
      - name: type
      - name: center
      - name: distance
---

Returns entities of a specified type in an area centered on `center` and at most
`distance` blocks away from the center point/area. Uses the same `type`
selectors as `entities_list`.

`center` and `distance` can either be a triple of coordinates or three
consecutive arguments for `entity_area`. `center` can also be represented as a
block, in this case the search box will be centered on the middle of the block,
or an entity - in this case entire bounding box of the entity serves as a
'center' of search which is then expanded in all directions with the
`'distance'` vector.

In any case - returns all entities which bounding box collides with the bounding
box defined by `'center'` and `'distance'`.

entity_area is simpler than `entity_selector` and runs about 20% faster, but is
limited to predefined selectors and cuboid search area.
