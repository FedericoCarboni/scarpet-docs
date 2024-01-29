---
title: particle_line()
name: particle_line
signatures:
  - params:
      - name: name
      - name: pos
      - name: pos2
      - name: density
      - name: player
---

Renders a line of particles from point `pos` to `pos2` with supplied density
(defaults to 1), which indicates how far apart you would want particles to
appear, so `0.1` means one every 10cm. If a player (or player name) is supplied,
only that player will receive particles.

Throws `unknown_particle` if particle doesn't exist.
