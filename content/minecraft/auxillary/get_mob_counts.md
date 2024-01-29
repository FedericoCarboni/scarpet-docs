---
title: get_mob_counts()
name: get_mob_counts
signatures:
  - params: []
---

, `get_mob_counts(category)` 1.16+

Returns either a map of mob categories with its respective counts and capacities
(a.k.a. mobcaps) or just a tuple of count and limit for a specific category. If
a category was not spawning for whatever reason it may not be returned from
`get_mob_counts()`, but could be retrieved for `get_mob_counts(category)`.
Returned counts is what spawning algorithm has taken in to account last time
mobs spawned.
