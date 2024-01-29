---
title: statistic()
name: statistic
signatures:
  - params:
      - name: player
      - name: category
      - name: entry
---

Queries in-game statistics for certain values. Categories include:

- `mined`: blocks mined
- `crafted`: items crafted
- `used`: items used
- `broken`: items broken
- `picked_up`: items picked up
- `dropped`: items dropped
- `killed`: mobs killed
- `killed_by`: mobs killed by
- `custom`: various random stats

For the options of `entry`, consult your statistics page, or give it a guess.

The call will return `null` if the statistics options are incorrect, or player
doesn't have them in their history. If the player encountered the statistic, or
game created for him empty one, it will return a number. Scarpet will not affect
the entries of the statistics, even if it is just creating empty ones. With
`null` response it could either mean your input is wrong, or statistic
effectively has a value of `0`.
