---
title: player()
name: player
signatures:
  - params: []
  - params:
      - name: name
    suggests:
      - name:
          type: string
          values: [all, "*"]
---

With no arguments, it returns the calling player or the player closest to the
caller. For player-scoped apps (which is a default) its always the owning player
or `null` if it not present even if some code still runs in their name. Note
that the main context will receive `p` variable pointing to this player. With
`type` or `name` specified, it will try first to match a type, returning a list
of players matching a type, and if this fails, will assume its player name query
retuning player with that name, or `null` if no player was found. With `'all'`,
list of all players in the game, in all dimensions, so end user needs to be
cautious, that you might be referring to wrong blocks and entities around the
player in question. With `type = '*'` it returns all players in caller
dimension, `'survival'` returns all survival and adventure players, `'creative'`
returns all creative players, `'spectating'` returns all spectating players, and
`'!spectating'`, all not-spectating players. If all fails, with `name`, the
player in question, if he/she is logged in.
