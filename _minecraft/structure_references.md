---
signatures:
  - params:
      - name: pos
      - name: structure_referencespos
      - name: structure_name
---

Returns structure information that a chunk with a given block position is part of. `structure_references` function
can be called with a block, or a block and a structure name. In the first case it returns a list of structure names
that give chunk belongs to. When called with an extra structure name, returns list of positions pointing to the
lowest block position in chunks that hold structure starts for these structures. You can query that chunk structures
then to get its bounding boxes.

Requires a `Standard Structure` name (see above).
