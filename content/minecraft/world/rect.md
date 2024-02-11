---
title: rect()
name: rect
params:
  - name: center
  - name: range
  - name: upper_range
---

Returns an iterator, just like `range` function that iterates over a rectangular area of blocks. If only center
point is specified, it iterates over 27 blocks (range of 1). If `range` arguments are specified, expands selection by
the respective number of blocks in each direction. If `upper_range` arguments are specified, it uses `range` for
negative offset, and `upper_range` for positive, similar to `scan`.

Basically the arguments are the same as the first three arguments of `scan`, except this function returns the list of
blocks that `scan` would evaluate over. If you are going to iterate over these blocks, like `for(rect(args), do_something())`,
then `scan(args, do_something())` is an equivalent, yet more compute-friendly alternative, especially for very large areas.

`center` can be defined either as three coordinates, a list of three coords, or a block value.
`range` and `upper_range` can have the same representations, just if they are block values, it computes the distance to the center
as range instead of taking the values as is.`
