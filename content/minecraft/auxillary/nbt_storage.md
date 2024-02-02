---
title: nbt_storage()
name: nbt_storage
signatures:
  - params: []
  - params:
      - name: key
  - params:
      - name: key
      - name: value
---

Displays or modifies individual storage NBT tags. With no arguments, returns the
list of current NBT storages. With specified `key`, returns the `nbt` associated
with current `key`, or `null` if storage does not exist. With specified `key`
and `nbt`, sets a new `nbt` value, returning previous value associated with the
`key`. NOTE: This NBT storage is shared with all vanilla datapacks and scripts
of the entire server and is persistent between restarts and reloads. You can
also access this NBT storage with vanilla
`/data <get|modify|merge> storage <key> ...` command.
