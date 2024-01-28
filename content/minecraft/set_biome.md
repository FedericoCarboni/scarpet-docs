---
signatures:
  - params:
      - name: pos
      - name: biome_name
      - name: updatetrue
name: set_biome
title: set_biome()
---


Changes the biome at that block position. if update is specified and false, then
chunk will not be refreshed on the clients. Biome changes can only be sent to
clients with the entire data from the chunk.

Be aware that depending on the MC version and dimension settings biome can be
set either in a 1x1x256 column or 4x4x4 hyperblock, so for some versions Y will
be ignored and for some precision of biome setting is less than 1x1x1 block.

Throws `unknown_biome` if the `biome_name` doesn't exist.
