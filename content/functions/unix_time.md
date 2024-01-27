---
title: unix_time()
name: unix_time
signatures:
  - params: []
---

Returns standard POSIX time as a number of milliseconds since the start of the
epoch (00:00 am and 0 seconds, 1 Jan 1970).

Unlike the previous function, this can be used to get exact time, but it varies
from time zone to time zone.
