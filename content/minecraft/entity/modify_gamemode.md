---
title: modify(e, 'gamemode')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'gamemode'"
      - name: gamemode
  - params:
      - name: entity
      - name: "'gamemode'"
      - name: gamemode_id
---

Modifies gamemode of player to whatever string (case-insensitive) or number you
put in.

- 0: survival
- 1: creative
- 2: adventure
- 3: spectator
