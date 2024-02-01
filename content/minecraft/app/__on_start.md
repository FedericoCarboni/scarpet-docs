---
title: __on_start()
name: __on_start
params: []
---

Called once per app in its logical execution run. For `global` scope apps its
executed right after the app is loaded. For `player` scope apps, it is triggered
once per player before the app can be used by that player. Since each player app
acts independently from other player apps, this is probably the best location to
include some player specific initializations. Static code (i.e. code typed
directly in the app code that executes immediately, outside of function
definitions), will only execute once per app, regardless of scope,
`__on_start()` allows to reliably call player specific initializations. However,
most event handlers defined in the static body of the app will be copied over to
each player scoped instance when they join.
