---
title: scoreboard_property()
name: scoreboard_property
signatures:
  - params:
      - name: objective
      - name: property
  - params:
      - name: objective
      - name: property
      - name: value
---

Reads a property of an `objective` or sets it to a `value` if specified.
Available properties are:

- `criterion`
- `display_name` (Formatted text supported)
- `display_slot`: When reading, returns a list of slots this objective is
  displayed in, when modifying, displays the objective in the specified slot
- `render_type`: Either `'integer'` or `'hearts'`, defaults to `'integer'` if
  invalid value specified
