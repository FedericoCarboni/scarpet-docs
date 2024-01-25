---
signatures:
  - params:
      - name: ""
---

, `sample_noise(pos, ... types?)` 1.18+

Samples the world generation noise values / data driven density function(s) at a
given position.

If no types are passed in, or no arguments are given, it returns a list of all
the available registry defined density functions.

With a single function name passed in, it returns a scalar. With multiple
function names passed in, it returns a list of results.

Function accepts any registry defined density functions, both built in, as well
as namespaced defined in datapacks. On top of that, scarpet provides the
following list of noises sampled directly from the current level (and not
returned with no-argument call):

`'barrier_noise'`, `'fluid_level_floodedness_noise'`,
`'fluid_level_spread_noise'`, `'lava_noise'`, `'temperature'`, `'vegetation'`,
`'continents'`, `'erosion'`, `'depth'`, `'ridges'`,
`'initial_density_without_jaggedness'`, `'final_density'`, `'vein_toggle'`,
`'vein_ridged'` and `'vein_gap'`

```scarpet
// requesting single value
sample_density(pos, 'continents') => 0.211626790923
// passing type as multiple arguments
sample_density(pos, 'continents', 'depth', 'overworld/caves/pillars', 'mydatapack:foo/my_function') => [-0.205013844481, 1.04772473438, 0.211626790923, 0.123]
```
