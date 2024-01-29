---
title: query(e, 'trace')
name: query
signatures:
  - params:
      - name: entity
      - name: "'trace'"
      - name: reach
      - name: options
---

Returns the result of ray tracing from entity perspective, indicating what it is
looking at. Default reach is 4.5 blocks (5 for creative players), and by default
it traces for blocks and entities, identical to player attack tracing action.
This can be customized with `options`, use `'blocks'` to trace for blocks,
`'liquids'` to include liquid blocks as possible results, and `'entities'` to
trace entities. You can also specify `'exact'` which returns the actual hit
coordinate as a triple, instead of a block or entity value. Any combination of
the above is possible. When tracing entities and blocks, blocks will take over
the priority even if transparent or non-colliding (aka fighting chickens in tall
grass).

Regardless of the options selected, the result could be:

- `null` if nothing is in reach
- an entity if look targets an entity
- block value if block is in reach, or
- a coordinate triple if `'exact'` option was used and hit was successful.
