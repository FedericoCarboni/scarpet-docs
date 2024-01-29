---
title: query(e, 'client_brand')
name: query
signatures:
  - params:
      - name: entity
      - name: "'client_brand'"
---

Returns recognized type of client of the client connected. Possible results
include `'vanilla'`, or `'carpet <version>'` where version indicates the version
of the connected carpet client.
