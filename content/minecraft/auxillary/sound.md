---
title: sound()
name: sound
signatures:
  - params: []
  - params:
      - name: name
      - name: pos
  - params:
      - name: name
      - name: pos
      - name: volume
  - params:
      - name: name
      - name: pos
      - name: volume
      - name: pitch
  - params:
      - name: name
      - name: pos
      - name: volume
      - name: pitch
      - name: mixer
---

Plays a specific sound `name`, at block or position `pos`, with optional
`volume` and modified `pitch`, and under optional `mixer`. Default values for
`volume`, `pitch` and `mixer` are `1.0`, `1.0`, and `master`. Valid mixer
options are `master`, `music`, `record`, `weather`, `block`,
`hostile`,`neutral`, `player`, `ambient` and `voice`. `pos` can be either a
block, triple of coords, or a list of three numbers. Uses the same options as a
corresponding `playsound` command.

Used with no arguments, returns a list of available sound names. Note that this
list may not include all sounds that clients will actually be able to receive
(they may have more available via resourcepacks for example).
