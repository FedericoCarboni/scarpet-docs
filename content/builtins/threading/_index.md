---
title: Threading
kind: function
---

Scarpet allows to run threads of execution in parallel to the main script
execution thread. In Minecraft, apps are executed on the main server thread.
Since Minecraft is inherently NOT thread safe, it is not that beneficial to
parallel execution in order to access world resources faster. Both
`getBlockState` and `setBlockState` are not thread safe and require the
execution to park on the server thread, where these requests can be executed in
the off-tick time in between ticks that didn't take all 50ms. There are however
benefits of running things in parallel, like fine time control not relying on
the tick clock, or running things independent on each other. You can still run
your actions on tick-by-tick basis, either taking control of the execution using
`game_tick()` API function (nasty solution), or scheduling tick using
`schedule()` function (preferred solution), but threading gives much more
control on the timings without impacting the main game and is the only solution
to solve problems in parallel (see [scarpet camera]).

Due to limitations with the game, there are some limits to the threading as
well. You cannot for instance `join_task()` at all from the main script and
server thread, because any use of Minecraft specific function that require any
world access, will require to park and join on the main thread to get world
access, meaning that calling join on that task would inevitably lead to a
typical deadlock. You can still join tasks from other threads, just because the
only possibility of a deadlock in this case would come explicitly from your bad
code, not the internal world access behaviour. Some things tough like players or
entities manipulation, can be effectively parallelized.

If the app is shutting down, creating new tasks via `task` will not succeed.
Instead the new task will do nothing and return `null`, so most threaded
application should handle closing apps naturally. Keep in mind in case you rely
on task return values, that they will return `null` regardless of anything in
these situations. When app handles `__on_close()` event, new tasks cannot be
submitted at this point, but current tasks are not terminated. Apps can use that
opportunity to gracefully shutdown their tasks. Regardless if the app handles
`__on_close()` event, or does anything with their tasks in it, all tasks will be
terminated exceptionally within the next 1.5 seconds.

[scarpet camera]:
  https://github.com/gnembon/fabric-carpet/blob/master/src/main/resources/assets/carpet/scripts/camera.sc
