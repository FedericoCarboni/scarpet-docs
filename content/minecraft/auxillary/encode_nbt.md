---
title: encode_nbt()
name: encode_nbt
signatures:
  - params:
      - name: value
  - params:
      - name: value
      - name: force
        type: bool
---

Encodes value of the expression as an NBT tag. By default (or when `force` is
false), it will only allow to encode values that are guaranteed to return the
same value when applied the resulting tag to `parse_nbt()`. Supported types that
can reliably convert back and forth to and from NBT values are:

- Maps with string keywords
- Lists of items of the same type (scarpet will take care of unifying value
  types if possible)
- Numbers (encoded as Ints -> Longs -> Doubles, as needed)
- Strings

Other value types will only be converted to tags (including NBT tags) if `force`
is true. They would require extra treatment when loading them back from NBT, but
using `force` true will always produce output / never produce an exception.
