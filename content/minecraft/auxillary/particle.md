---
title: particle()
name: particle
signatures:
  - params: []
  - params:
      - name: name
      - name: pos
  - params:
      - name: name
      - name: pos
      - name: count
  - params:
      - name: name
      - name: pos
      - name: count
      - name: spread
  - params:
      - name: name
      - name: pos
      - name: count
      - name: spread
      - name: speed
  - params:
      - name: name
      - name: pos
      - name: count
      - name: spread
      - name: speed
      - name: player
---

Renders a cloud of particles `name` centered around `pos` position, by default
`count` 10 of them, default `speed` of 0, and to all players nearby, but these
options can be changed via optional arguments. Follow vanilla `/particle`
command on details on those options. Valid particle names are for example
`'angry_villager', 'item diamond', 'block stone', 'dust 0.8 0.1 0.1 4'`.

Used with no arguments, return the list of available particle names. Note that
some of the names do not correspond to a valid particle that can be fed to
`particle(...)` function due to a fact that some particles need more
configuration to be valid, like `dust`, `block` etc. Should be used as a
reference only.

Throws `unknown_particle` if particle doesn't exist.
