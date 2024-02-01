---
title: server_shuts_down
name: __on_server_shuts_down
params: []
---

Event triggers when the server started the shutdown process, before `__on_close()` is executed. Unlike `__on_close()`, it doesn't
trigger with `/reload`.
