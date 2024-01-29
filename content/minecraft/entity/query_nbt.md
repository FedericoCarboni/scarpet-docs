---
title: query(e, 'nbt')
name: query
signatures:
  - params:
      - name: entity
      - name: "'nbt'"
      - name: path
---

Returns full NBT of the entity. If path is specified, it fetches only the
portion of the NBT that corresponds to the path. For specification of `path`
attribute, consult vanilla `/data get entity` command.

Note that calls to `nbt` are considerably more expensive comparing to other
calls in Minecraft API, and should only be used when there is no other option.
Returned value is of type `nbt`, which can be further manipulated with nbt type
objects via `get, put, has, delete`, so try to use API calls first for that.
