---
title: signal_event()
name: signal_event
signatures:
  - params:
      - name: event
      - name: args
        rest: true
---

Fires a specific event. If the event does not exist (only `handle_event` creates missing new events), or provided argument list
was not matching the callee expected arguments, returns `null`,
otherwise returns number of apps notified. If `target_player` is specified and not `null` triggers a player specific event, targeting
only `player` scoped apps for that player. Apps with globals scope will not be notified even if they handle this event.
If the `target_player` is omitted or `null`, it will target `global` scoped apps and all instances of `player` scoped apps.
Note that all built-in player events have a player as a first argument, so to trigger these events, you need to
provide them twice - once to specify the target player scope and second - to provide as an argument to the handler function.

```scarpet
signal_event('player_breaks_block', player, player, block); // to target all player scoped apps
signal_event('player_breaks_block', null  , player, block); // to target all global scoped apps and all player instances
signal_event('tick'); // trigger all apps with a tick event
```
