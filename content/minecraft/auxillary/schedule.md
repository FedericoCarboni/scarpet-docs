---
title: schedule()
name: schedule
signatures:
  - params:
      - name: delay
      - name: function
      - name: args
---

Schedules a user defined function to run with a specified `delay` ticks of
delay. Scheduled functions run at the end of the tick, and they will run in
order they were scheduled.

In case you want to schedule a function that is not defined in your module,
please read the tips on "Passing function references to other modules of your
application" section in the `call(...)` section.
