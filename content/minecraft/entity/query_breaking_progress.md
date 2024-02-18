---
title: query(e, 'breaking_progress')
name: query
signatures:
  - params:
      - name: entity
      - name: "'breaking_progress'"
---

Returns current breaking progress of a current player mining block, or `null`,
if no block is mined. Breaking progress, if not null, is any number 0 or above,
while 10 means that the block should already be broken by the client. This value
may tick above 10, if the client / connection is lagging.

Example:

The following program provides custom breaking times, including nice block
breaking animations, including instamine, for blocks that otherwise would take
longer to mine.

[Video demo](https://youtu.be/zvEEuGxgCio)

```scarpet
global_blocks = {
  'oak_planks' -> 0,
  'obsidian' -> 1,
  'end_portal_frame' -> 5,
  'bedrock' -> 10
};

__on_player_clicks_block(player, block, face) ->
(
   step = global_blocks:str(block);
   if (step == 0,
      destroy(block, -1); // instamine
   , step != null,
      schedule(0, '_break', player, pos(block), str(block), step, 0);
   )
);

_break(player, pos, name, step, lvl) ->
(
   current = player~'active_block';
   if (current != name || pos(current) != pos,
      modify(player, 'breaking_progress', null);
   ,
      modify(player, 'breaking_progress', lvl);
      if (lvl >= 10, destroy(pos, -1));
      schedule(step, '_break', player, pos, name, step, lvl+1)
   );
)
```
