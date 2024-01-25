---
signatures:
  - params:
      - name: x
      - name: "y"
  - params:
      - name: x
      - name: "y"
      - name: z
  - params:
      - name: x
      - name: "y"
      - name: z
      - name: seed
---

Returns a noise value from `0.0` to `1.0` (roughly) for 2 or 3 dimensional
coordinate. The default seed it samples from is `0`, but seed can be specified
as a 4th argument as well. In case you need 2D noise values with custom seed,
use `null` for `z` argument.

Simplex noise is based on a triangular grid and generates smoother maps
comparing to Perlin. To sample 1D simplex noise, affix other coordinate to a
constant.

Thou shall not sample from noise changing seed frequently. Scarpet will keep
track of the last 256 simplex seeds used for sampling providing similar speed
comparing to the default seed of `0`. In case the app engine uses more than 256
seeds at the same time, switching between them can get much more expensive.
