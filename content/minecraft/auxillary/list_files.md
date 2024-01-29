---
title: list_files()
name: list_files
signatures:
  - params:
      - name: resource
      - name: type
---

With the specified `resource` in the scripts folder, of a specific `type`,
writes/appends `data` to it, reads its content, deletes the resource, or lists
other files under this resource.

Resource is identified by a path to the file. A path can contain letters,
numbers, characters `-`, `+`, or `_`, and a folder separator: `'/'`. Any other
characters are stripped from the name. Empty descriptors are invalid, except for
`list_files` where it means the root folder. Do not add file extensions to the
descriptor - extensions are inferred based on the `type` of the file. A path can
have one `'.zip'` component indicating a zip folder allowing to read / write to
and from zip files, although you cannot nest zip files in other zip files.

Resources can be located in the app specific space, or a shared space for all
the apps. Accessing of app-specific resources is guaranteed to be isolated from
other apps. Shared resources are... well, shared across all apes, meaning they
can eat of each others file, however all access to files is synchronized, and
files are never left open, so this should not lead to any access problems.

If the app's name is `'foo'`, the script location would be
`world/scripts/foo.sc`, app specific data directory is under
`world/scripts/foo.data/...`, and shared data space is under
`world/scripts/shared/...`.

The default no-name app, via `/script run` command can only save/load/read files
from the shared space.

Functions return `null` if no file is present (for read, list and delete
operations). Returns `true` for success writes and deletes, and requested data,
based on the file type, for read operations. It returns list of files for folder
listing.

Supported values for resource `type` are:

- `nbt` - NBT tag
- `json` - JSON file
- `text` - text resource with automatic newlines added
- `raw` - text resource without implied newlines
- `folder` - for `list_files` only - indicating folder listing instead of files
- `shared_nbt`, `shared_text`, `shared_raw`, `shared_folder`, `shared_json` -
  shared versions of the above

NBT files have extension `.nbt`, store one NBT tag, and return a NBT type value.
JSON files have `.json` extension, store Scarpet numbers, strings, lists, maps
and `null` values. Anything else will be saved as a string (including NBT). Text
files have `.txt` extension, stores multiple lines of text and returns lists of
all lines from the file. With `write_file`, multiple lines can be sent to the
file at once. The only difference between `raw` and `text` types are automatic
newlines added after each record to the file. Since files are closed after each
write, sending multiple lines of data to write is beneficial for writing speed.
To send multiple packs of data, either provide them flat or as a list in the
third argument.

Throws:

- `nbt_read_error`: When failed to read NBT file.
- `json_read_error`: When failed to read JSON file. The exception data will
  contain details about the problem.
- `io_exception`: For all other errors when handling data on disk not related to
  encoding issues

All other errors resulting of improper use of input arguments should result in
`null` returned from the function, rather than exception thrown.

```scarpet
write_file('foo', 'shared_text, ['one', 'two']);
write_file('foo', 'shared_text', 'three\n', 'four\n');
write_file('foo', 'shared_raw', 'five\n', 'six\n');

read_file('foo', 'shared_text')     => ['one', 'two', 'three', '', 'four', '', 'five', 'six']
```
