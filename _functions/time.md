---
signatures:
  - params: []
---

Returns the number of milliseconds since 'some point', like Java's `System.nanoTime()`, which varies from system to
system and from Java to Java. This measure should NOT be used to determine the current (date)time, but to measure
durations of things.
it returns a float with time in milliseconds (ms) for convenience and microsecond (μs) resolution for sanity.


```scarpet
start_time = time();
flip_my_world_upside_down();
print(str('this took %d milliseconds',time()-start_time))
```
