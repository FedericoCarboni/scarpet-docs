---
signatures:
  - params:
      - name: task
---

Waits for the task completion and returns its computed value. If the task has already finished returns it immediately.
Unless taking the task value directly, i.e. via `task_value`, this operation is blocking. Since Minecraft has a
limitation that all world access operations have to be performed on the main game thread in the off-tick time,
joining any tasks that use Minecraft API from the main thread would mean automatic lock, so joining from the main
thread is not allowed. Join tasks from other threads, if you really need to, or communicate asynchronously with
the task via globals or function data / arguments to monitor its progress, communicate, get partial results,
or signal termination.
