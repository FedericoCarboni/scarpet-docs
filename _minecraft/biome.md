---
signatures:
  - params: []
  - params:
      - name: name_or_block
  - params:
      - name: name_or_block
      - name: feature
  - params: noise_map
---

Without arguments, returns the list of biomes in the world.

With block, or name, returns the name of the biome in that position, or throws
`'unknown_biome'` if provided biome or block are not valid.

(1.18+) if passed a map of `continentalness`, `depth`, `erosion`, `humidity`,
`temperature`, `weirdness`, returns the biome that exists at those noise values.
Note: Have to pass all 6 of the mentioned noise types and only these noise types
for it to evaluate a biome.

With an optional feature, it returns value for the specified attribute for that
biome. Available and queryable features include:

- `'top_material'`: unlocalized block representing the top surface material
  (1.17.1 and below only)
- `'under_material'`: unlocalized block representing what sits below topsoil
  (1.17.1 and below only)
- `'category'`: the parent biome this biome is derived from. Possible values
  include (1.18.2 and below only): `'none'`, `'taiga'`, `'extreme_hills'`,
  `'jungle'`, `'mesa'`, `'plains'`, `'savanna'`, `'icy'`, `'the_end'`,
  `'beach'`, `'forest'`, `'ocean'`, `'desert'`, `'river'`, `'swamp'`,
  `'mushroom'` , `'nether'`, `'underground'` (1.18+) and `'mountain'` (1.18+).
- `'tags'`: list of biome tags associated with this biome
- `'temperature'`: temperature from 0 to 1
- `'fog_color'`: RGBA color value of fog
- `'foliage_color'`: RGBA color value of foliage
- `'sky_color'`: RGBA color value of sky
- `'water_color'`: RGBA color value of water
- `'water_fog_color'`: RGBA color value of water fog
- `'humidity'`: value from 0 to 1 indicating how wet is the biome
- `'precipitation'`: `'rain'` `'snot'`, or `'none'`... ok, maybe `'snow'`, but
  that means snots for sure as well.
- `'depth'`: (1.17.1 and below only) float value indicating how high or low the
  terrain should generate. Values > 0 indicate generation above sea level and
  values < 0, below sea level.
- `'scale'`: (1.17.1 and below only) float value indicating how flat is the
  terrain.
- `'features'`: list of features that generate in the biome, grouped by
  generation steps
- `'structures'`: (1.17.1 and below only) list of structures that generate in
  the biome.
