---
signatures:
  - params:
      - name: task
---

Returns the task return value, or `null` if task hasn't finished yet. Its a non-blocking operation. Unlike `join_task`,
can be called on any task at any point
