---
title: team_leave()
name: team_leave
signatures:
  - params:
      - name: player
  - params:
      - name: team
      - name: player
---

Removes the `player` from the team he is in. Returns `true` if the player left a
team, otherwise `false`.

`team_leave('Steve')` -> Removes Steve from the team he is currently in
`for(team_list('admin'), team_leave('admin', _))` -> Remove all players from
team 'admin'
