---
title: entity_selector()
name: entity_selector
signatures:
  - params:
      - name: selector
---

Returns entities satisfying given vanilla entity selector. Most complex among
all the methods of selecting entities, but the most capable. Selectors are
cached so it should be as fast as other methods of selecting entities. Unlike
other entities fetching / filtering method, this one doesn't guarantee to return
entities from current dimension, since selectors can return any loaded entity in
the world.
