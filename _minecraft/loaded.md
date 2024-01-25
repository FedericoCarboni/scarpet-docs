---
signatures:
  - params:
      - name: pos
---

Boolean function, true if the block is accessible for the game mechanics. Normally `scarpet` doesn't check if operates
on loaded area - the game will automatically load missing blocks. We see this as an advantage. Vanilla `fill/clone`
commands only check the specified corners for loadness.

To check if a block is truly loaded, I mean in memory, use `generation_status(x) != null`, as chunks can still be loaded
outside of the playable area, just are not used by any of the game mechanic processes.

```scarpet
loaded(pos(player()))  => 1
loaded(100000,100,1000000)  => 0
```
