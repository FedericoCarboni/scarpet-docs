---
title: query(e, 'name')
name: query
signatures:
  - params:
      - name: entity
      - name: "'name'"
      - name: querye
      - name: display_name
      - name: querye
      - name: custom_name
      - name: querye
      - name: type
---

String of entity name or formatted text in the case of `display_name`

<pre>
query(e,'name')  => Leatherworker
query(e,'custom_name')  => null
query(e,'type')  => villager
</pre>
