---
title: is_chunk_generated()
name: is_chunk_generated
signatures:
  - params:
      - name: pos
  - params:
      - name: pos
      - name: force
---

Returns `true` if the region file for the chunk exists, `false` otherwise. If
optional force is `true` it will also check if the chunk has a non-empty entry
in its region file Can be used to assess if the chunk has been touched by the
game or not.

`generation_status(pos, false)` only works on currently loaded chunks, and
`generation_status(pos, true)` will create an empty loaded chunk, even if it is
not needed, so `is_chunk_generated` can be used as a efficient proxy to
determine if the chunk physically exists.

Running `is_chunk_generated` is has no effects on the world, but since it is an
external file operation, it is considerably more expensive (unless area is
loaded) than other generation and loaded checks.
