---
title: perlin()
name: perlin
signatures:
  - params:
      - name: x
      - name: perlinx
      - name: "y"
      - name: perlinx
      - name: "y"
      - name: z
      - name: perlinx
      - name: "y"
      - name: z
      - name: seed
---

returns a noise value from `0.0` to `1.0` (roughly) for 1, 2 or 3 dimensional
coordinate. The default seed it samples from is `0`, but seed can be specified
as a 4th argument as well. In case you need 1D or 2D noise values with custom
seed, use `null` for `y` and `z`, or `z` arguments respectively.

Perlin noise is based on a square grid and generates rougher maps comparing to
Simplex, which is creamier. Querying for lower-dimensional result, rather than
affixing unused dimensions to constants has a speed benefit,

Thou shall not sample from noise changing seed frequently. Scarpet will keep
track of the last 256 perlin seeds used for sampling providing similar speed
comparing to the default seed of `0`. In case the app engine uses more than 256
seeds at the same time, switching between them can get much more expensive.
