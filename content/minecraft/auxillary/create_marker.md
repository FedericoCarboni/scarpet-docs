---
title: create_marker()
name: create_marker
signatures:
  - params:
      - name: text
      - name: pos
      - name: rotation
      - name: block
      - name: interactive
---

Spawns a (permanent) marker entity with text or block at position. Returns that
entity for further manipulations. Unloading the app that spawned them will cause
all the markers from the loaded portion of the world to be removed. Also, if the
game loads that marker in the future and the app is not loaded, it will be
removed as well.

If `interactive` (`true` by default) is `false`, the armorstand will be a marker
and would not be interactive in any gamemode. But blocks can be placed inside
markers and will not catch any interaction events.

Y Position of a marker text or block will be adjusted to make blocks or text
appear at the specified position. This makes so that actual armorstand position
may be offset on Y axis. You would need to adjust your entity locations if you
plan to move the armorstand around after the fact. If both text and block are
specified - one of them will be aligned (armorstand type markers text shows up
at their feet, while for regular armorstands - above the head, while block on
the head always render in the same position regardless if its a marker or not).
