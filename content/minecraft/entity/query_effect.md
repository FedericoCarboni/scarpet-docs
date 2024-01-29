---
title: query(e, 'effect')
name: query
signatures:
  - params:
      - name: entity
      - name: "'effect'"
      - name: name
---

Without extra arguments, it returns list of effect active on a living entity.
Each entry is a triple of short effect name, amplifier, and remaining duration
in ticks (-1 if it has infinity duration). With an argument, if the living
entity has not that potion active, returns `null`, otherwise return a tuple of
amplifier and remaining duration.

```scarpet
query(p,'effect')  => [[haste, 0, 177], [speed, 0, 177]]
query(p,'effect','haste')  => [0, 177]
query(p,'effect','resistance')  => null
```
