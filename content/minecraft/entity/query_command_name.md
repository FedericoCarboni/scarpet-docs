---
title: query(e, 'command_name')
name: query
signatures:
  - params:
      - name: entity
      - name: "'command_name'"
---

Returns a valid string to be used in commands to address an entity. Its UUID for
all entities except player, where its their name.

<pre>
run('/kill ' + e~'command_name');
</pre>
