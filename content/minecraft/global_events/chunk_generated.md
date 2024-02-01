---
title: chunk_generated
name: __on_chunk_generated
params:
  - name: x
  - name: z
---

Called right after a chunk at a given coordinate is full generated. `x` and `z` correspond
to the lowest x and z coords in the chunk. Handling of this event is scheduled as an off-tick task happening after the
chunk is confirmed to be generated and loaded to the game, due to the off-thread chunk loading in the game. So
handling of this event is not technically guaranteed if the game crashes while players are moving for example, and the game
decides to shut down after chunk is fully loaded and before its handler is processed in between ticks. In normal operation
this should not happen, but let you be warned.
