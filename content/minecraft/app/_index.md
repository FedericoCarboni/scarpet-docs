---
title: App
kind: callback
order: 0
---

The main delivery method for scarpet programs into the game is in the form of
apps in `*.sc` files located in the world `scripts` folder, flat. In
singleplayer, you can also save apps in `.minecraft/config/carpet/scripts` for
them to be available in any world, and here you can actually organize them in
folders. When loaded (via `/script load` command, etc.), the game will run the
content of the app once, regardless of its scope (more about the app scopes
below), without executing of any functions, unless called directly, and with the
exception of the `__config()` function, if present, which will be executed once.
Loading the app will also bind specific events to the event system (check Events
section for details).

If an app defines `__on_start()` function, it will be executed once before
running anything else. For global scoped apps, this is just after they are
loaded, and for player scoped apps, before they are used first time by a player.
Unlike static code (written directly in the body of the app code), that always
run once per app, this may run multiple times if its a player app nd multiple
players are on the server.

Unloading an app removes all of its state from the game, disables commands,
removes bounded events, and saves its global state. If more cleanup is needed,
one can define `__on_close()` function which will be executed when the module is
unloaded, or server is closing or crashing. However, there is no need to do that
explicitly for the things that clean up automatically, as indicated in the
previous statement. With `'global'` scoped apps `__on_close()` will execute once
per app, and with `'player'` scoped apps, will execute once per player per app.
