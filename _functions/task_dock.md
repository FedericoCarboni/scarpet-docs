---
signatures:
  - params:
      - name: expr
---

In a not-task (running regular code on the main game thread) it is a
pass-through command. In tasks - it docks the current thread on the main server
thread and executes expression as one server offline server task. This is
especially helpful in case a task has several docking operations to perform,
such as setting a block, and it would be much more efficient to do them all at
once rather then packing each block access in each own call.

Be mindful, that docking the task means that the tick execution will be delayed
until the expression is evaluated. This will synchronize your task with other
tasks using `task_dock`, but if you should be using `synchronize` to synchronize
tasks without locking the main thread.
