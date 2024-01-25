---
signatures:
  - params:
      - name: executor
---

If no argument provided, returns total number of tasks being executed in parallel at this moment using scarpet
threading system. If the executor is provided, returns number of active tasks for that provider. Use `task_count(null)`
to get the task count of the default executor only.
