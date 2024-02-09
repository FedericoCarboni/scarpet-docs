---
title: team_add()
name: team_add
signatures:
  - params:
      - name: team
  - params:
      - name: team
      - name: player
---

With one argument, creates a new `team` and returns its name if successful, or
`null` if team already exists.

- `team_add('admin')` -> Create a team with the name 'admin'
- `team_add('admin', 'Steve')` -> Joing the player 'Steve' into the team 'admin'

If a `player` is specified, the player will join the given `team`. Returns
`true` if player joined the team, or `false` if nothing changed since the player
was already in this team. If the team is invalid, returns `null`
