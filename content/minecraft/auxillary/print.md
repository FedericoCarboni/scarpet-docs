---
title: print()
name: print
signatures:
  - params:
      - name: text
  - params:
      - name: player
      - name: text
---

Displays the result of the expression to the chat. Overrides default `scarpet`
behaviour of sending everything to stderr. For player scoped apps it always by
default targets the player for whom the app runs on behalf. Can optionally
define player or list of players to send the message to.
