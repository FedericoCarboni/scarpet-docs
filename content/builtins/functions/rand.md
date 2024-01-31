---
title: rand()
name: rand
signatures:
  - params:
      - name: max
  - params:
      - name: max
      - name: seed
---

`rand()` returns a floating-point random number that is greater than or equal to
0 and less than `max`.

In boolean context (in conditions, boolean functions, or `bool`), returns false
if the randomly selected value is less than 1. This means that `bool(rand(2))`
returns true half of the time and `!rand(5)` returns true for 20% (1/5) of the
time. If seed is not provided, uses a random seed that's shared across all
scarpet apps. If seed is provided, each consecutive call to rand() will act like
'next' call to the same random object. Scarpet keeps track of up to 65536 custom
random number generators (custom seeds, per app), so if you exceed this number,
your random sequences will revert to the beginning and start over.

## Parameters

- `max`

- `seed`

## Returns

A floating-point, pseudo-random number between 0 (inclusive) and `max`
(exclusive).

## Examples

```scarpet
map(range(10), floor(rand(10))) => [5, 8, 0, 6, 9, 3, 9, 9, 1, 8]
map(range(10), bool(rand(2))) => [false, false, true, false, false, false, true, false, true, false]
map(range(10), str('%.1f',rand(_))) => [0.0, 0.4, 0.6, 1.9, 2.8, 3.8, 5.3, 2.2, 1.6, 5.6]
```
