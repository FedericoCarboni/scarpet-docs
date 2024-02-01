---
title: create_explosion()
name: create_explosion
signatures:
  - params:
      - name: pos
  - params:
      - name: pos
      - name: power
  - params:
      - name: pos
      - name: power
      - name: mode
  - params:
      - name: pos
      - name: power
      - name: mode
      - name: fire
  - params:
      - name: pos
      - name: power
      - name: mode
      - name: fire
      - name: source
  - params:
      - name: pos
      - name: power
      - name: mode
      - name: fire
      - name: source
      - name: attacker
---

Creates an explosion at the given position.

### Parameters

- `power` --- how strong the blast is, negative values count as 0 (default: `4`
  (TNT power))
- `mode` --- how to deal with broken blocks: `keep` keeps them, `destroy`
  destroys them and drops items, and `destroy_with_decay` destroys them, but
  doesn't always drop the items (default: `destroy_with_decay`)
- `fire` --- whether extra fire blocks should be created (default: `false`)
- `source` --- entity that is exploding. Note that it will not take explosion
  damage from this explosion (default: `null`)
- `attacker` --- entity responsible for triggering, this will be displayed in
  death messages, and count towards kill counts, and can be damaged by the
  explosion (default: `null`)

Explosions created with this endpoint cannot be captured with `__on_explosion`
event, however they will be captured by `__on_explosion_outcome`.
