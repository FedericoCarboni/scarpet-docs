---
title: load_app_data()
name: load_app_data
signatures:
  - params: []
---

NOTE: usages with arguments, so `load_app_data(file)` and
`load_app_data(file, shared?)` are deprecated. Use `read_file` instead.

Loads the app data associated with the app from the world /scripts folder.
Without argument returns the memory managed and buffered / throttled NBT tag.
With a file name, reads explicitly a file with that name from the scripts folder
that belongs exclusively to the app. if `shared` is true, the file location is
not exclusive to the app anymore, but located in a shared app space.

File descriptor can contain letters, numbers and folder separator: `'/'`. Any
other characters are stripped from the name before saving/loading. Empty
descriptors are invalid. Do not add file extensions to the descriptor

Function returns nbt value with the file content, or `null` if the file is
missing or there were problems with retrieving the data.

The default no-name app, via `/script run` command can only save/load file from
the shared data location.

If the app's name is `'foo'`, the script location would be
`world/scripts/foo.sc`, system-managed default app data storage is in
`world/scripts/foo.data.nbt`, app specific data directory is under
`world/scripts/foo.data/bar/../baz.nbt`, and shared data space is under
`world/scripts/shared/bar/../baz.nbt`.

You can use app data to save non-vanilla information separately from the world
and other scripts.

Throws `nbt_read_error` if failed to read app data.
