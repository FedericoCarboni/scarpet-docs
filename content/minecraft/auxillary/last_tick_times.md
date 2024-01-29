---
title: last_tick_times()
name: last_tick_times
signatures:
  - params: []
---

_**Deprecated**. Use `system_info('server_last_tick_times')` instead._

Returns a 100-long array of recent tick times, in milliseconds. First item on
the list is the most recent tick If called outside of the main tick (either
through scheduled tasks, or async execution), then the first item on the list
may refer to the previous tick performance. In this case the last entry
(tick 100) would refer to the most current tick. For all intent and purpose,
`last_tick_times():0` should be used as last tick execution time, but individual
tick times may vary greatly, and these need to be taken with the little grain of
averaging.
