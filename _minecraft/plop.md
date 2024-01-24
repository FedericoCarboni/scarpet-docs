---
signatures:
  - params:
      - name: pos
      - name: what
---

Plops a structure or a feature at a given `pos`, so block, triple position coordinates or a list of coordinates.
To `what` gets plopped and exactly where it often depends on the feature or structure itself.

Requires a `Structure Type`,  `Structure`, `World Generation Feature` or `Custom Scarpet Feature` name (see
above). If standard name is used, the variant of the structure may depend on the biome, otherwise the default
structure for this type will be generated.

All structures are chunk aligned, and often span multiple chunks. Repeated calls to plop a structure in the same chunk
would result either in the same structure generated on top of each other, or with different state, but same position.
Most structures generate at specific altitudes, which are hardcoded, or with certain blocks around them. API will
cancel all extra position / biome / random requirements for structure / feature placement, but some hardcoded
limitations may still cause some of structures/features not to place. Some features require special blocks to be
present, like coral -> water or ice spikes -> snow block, and for some features, like fossils, placement is all sorts
of messed up. This can be partially avoided for structures by setting their structure information via `set_structure`,
which sets it without looking into world blocks, and then use `plop` to fill it with blocks. This may, or may not work.

All generated structures will retain their properties, like mob spawning, however in many cases the world / dimension
itself has certain rules to spawn mobs, like plopping a nether fortress in the overworld will not spawn nether mobs,
because nether mobs can spawn only in the nether, but plopped in the nether - will behave like a valid nether fortress.
# Iterating over larger areas of blocks

These functions help scan larger areas of blocks without using generic loop functions, like nested `loop`.
