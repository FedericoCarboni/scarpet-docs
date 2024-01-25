---
signatures:
  - params:
      - name: pos
      - name: poipos
      - name: radius
      - name: type
      - name: status
      - name: column_search
---

Queries a POI (Point of Interest) at a given position, returning `null` if none
is found, or tuple of poi type and its occupancy load. With optional `type`,
`radius` and `status`, returns a list of POIs around `pos` within a given
`radius`. If the `type` is specified, returns only poi types of that types, or
everything if omitted or `'any'`. If `status` is specified (either `'any'`,
`'available'`, or `'occupied'`) returns only POIs with that status. With
`column_search` set to `true`, it will return all POIs in a cuboid with `radius`
blocks away on x and z, in the entire block column from 0 to 255. Default
(`false`) returns POIs within a spherical area centered on `pos` and with
`radius` radius.

All results of `poi` calls are returned in sorted order with respect to the
euclidean distance to the requested center of `pos`.

The return format of the results is a list of poi type, occupancy load, and
extra triple of coordinates.

Querying for POIs using the radius is the intended use of POI mechanics, and the
ability of accessing individual POIs via `poi(pos)` in only provided for
completeness.

```scarpet
poi(x,y,z) => null  // nothing set at position
poi(x,y,z) => ['meeting',3]  // its a bell-type meeting point occupied by 3 villagers
poi(x,y,z,5) => []  // nothing around
poi(x,y,z,5) => [['nether_portal',0,[7,8,9]],['nether_portal',0,[7,9,9]]] // two portal blocks in the range
```
