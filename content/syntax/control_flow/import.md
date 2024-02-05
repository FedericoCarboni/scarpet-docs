---
title: import
name: import
signatures:
  - params:
      - name: module
      - name: symbols
        rest: true
---

Imports symbols from other apps and libraries into the current one: global
variables or functions, allowing to use them in the current app. This includes
other symbols imported by these modules. Scarpet supports circular dependencies,
but if symbols are used directly in the module body rather than functions, it
may not be able to retrieve them.

Returns full list of available symbols that could be imported from this module,
which can be used to debug import issues, and list contents of libraries.

You can load and import functions from dependencies in a remote app store's
source specified in your config's `libraries` block, but make sure to place your
config _before_ the import in order to allow the remote dependency to be
downloaded (currently, app resources are only downloaded when using the
`/carpet download` command).
