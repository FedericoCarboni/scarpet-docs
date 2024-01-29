---
title: query(e, 'player_type')
name: query
signatures:
  - params:
      - name: entity
      - name: "'player_type'"
---

Returns `null` if the argument is not a player, otherwise:

- `singleplayer`: for singleplayer game
- `multiplayer`: for players on a dedicated server
- `lan_host`: for singleplayer owner that opened the game to LAN
- `lan_player`: for all other players that connected to a LAN host
- `fake`: any carpet-spawned fake player
- `shadow`: any carpet-shadowed real player
- `realms`: ?
