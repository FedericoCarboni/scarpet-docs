---
title: store_app_data()
name: store_app_data
signatures:
  - params:
      - name: tag
---

Note: `store_app_data(tag, file)` and `store_app_data(tag, file, shared?)`
usages deprecated. Use `write_file` instead.

Stores the app data associated with the app from the world `/scripts` folder.
With the `file` parameter saves immediately and with every call to a specific
file defined by the `file`, either in app space, or in the scripts shared space
if `shared` is true. Without `file` parameter, it may take up to 10 seconds for
the output file to sync preventing flickering in case this tag changes
frequently. It will be synced when server closes.

Returns `true` if the file was saved successfully, `false` otherwise.

Uses the same file structure for exclusive app data, and shared data folder as
`load_app_data`.
