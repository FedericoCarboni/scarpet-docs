---
title: block_data()
name: block_data
signatures:
  - params:
      - name: pos
---

Return NBT string associated with specific location, or null if the block does
not carry block data. Can be currently used to match specific information from
it, or use it to copy to another block

```scarpet
block_data(x,y,z) => '{TransferCooldown:0,x:450,y:68, ... }'
```
