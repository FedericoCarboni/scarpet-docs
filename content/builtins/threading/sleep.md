---
title: sleep()
name: sleep
signatures:
  - params:
      - name: timeout
  - params:
      - name: timeout
      - name: on_close
---

Puts the current thread to sleep for the specified timeout in milliseconds. If
the thread is interrupted, `on_close` is invoked if present and the thread
exits.

**Note**: sleeping on the main thread freezes the game until the specified
timeout is reached.

Since `on_close` is executed after app shutdown is initiated, you won't be able
to create new tasks in that block. Threads should periodically call `sleep` to
ensure all app tasks will finish when the app is closing or right after, but the
app engine will not forcefully remove your running tasks, so the tasks
themselves need to properly react to the closing request.

```scarpet
// Wait for 50 milliseconds
sleep(50);
// Waits for 1 second, outputs a message when thread is shut down.
sleep(1000, print('Interrupted'));
```
