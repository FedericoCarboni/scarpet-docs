---
title: query(e, 'uuid')
name: query
signatures:
  - params:
      - name: entity
      - name: "'uuid'"
---

Returns the UUID (unique id) of the entity. Can be used to access entities with
the other vanilla commands and remains unique regardless of the dimension, and
is preserved between game restarts. Apparently players cannot be accessed via
UUID, but should be accessed with their name instead.

<pre>
map(entities_area('*',x,y,z,30,30,30),run('kill '+query(_,'id'))) // doesn't kill the player
</pre>
