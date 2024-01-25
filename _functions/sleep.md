---
signatures:
  - params:
      - name: ""
---

`sleep(timeout)`, `sleep(timeout, close_expr)`

Halts the execution of the thread (or the game itself, if run not as a part of a
task) for `expr` milliseconds. It checks for interrupted execution, in that case
exits the thread (or the entire program, if not run on a thread) in case the app
is being stopped/removed. If the closing expression is specified, executes the
expression when a shutdown signal is triggered. If run on the main thread (i.e.
not as a task) the close expression may only be invoked when the entire game
shuts down, so close call only makes sense for threads. For regular programs,
use `__on_close()` handler.

Since `close_expr` is executed after app shutdown is initiated, you won't be
able to create new tasks in that block. Threads should periodically call `sleep`
to ensure all app tasks will finish when the app is closing or right after, but
the app engine will not forcefully remove your running tasks, so the tasks
themselves need to properly react to the closing request.

```scarpet
sleep(50)  # wait for 50 milliseconds
sleep(1000, print('Interrupted')) # waits for 1 second, outputs a message when thread is shut down.
```
