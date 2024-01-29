---
title: display_title()
name: display_title
signatures:
  - params:
      - name: players
      - name: player_list_footer
      - name: text
---

Changes the header or footer of the player list for the specified targets. If
`text` is `null` or an empty string it will remove the header or footer for the
specified targets. In case the player has Carpet loggers running, the footer
specified by Scarpet will appear above the loggers.
