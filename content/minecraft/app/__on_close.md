---
title: __on_close()
name: __on_close
params: []
---

Called once per app when the app is closing or reloading, right before the app
is removed. For player scoped apps, its called once per player. Scarpet app
engine will attempt to call `__on_close()` even if the system is closing down
exceptionally.
