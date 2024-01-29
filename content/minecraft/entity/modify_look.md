---
title: modify(e, 'look')
name: modify
signatures:
  - params:
      - name: entity
      - name: "'look'"
      - name: x
      - name: "y"
      - name: z
  - params:
      - name: entity
      - name: "'look'"
      - name: vec
---

Sets entity's 3d vector where the entity is looking. For cases where the vector
has a length of 0, yaw and pitch won't get changed. When pointing straight up or
down, yaw will stay the same.
