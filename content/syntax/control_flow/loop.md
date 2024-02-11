---
title: loop
name: loop
signatures:
  - params:
      - name: "n"
      - name: expr
  - params:
      - name: "n"
      - name: expr
      - name: exit
---

Evaluates expression `expr`, `n` number of times. `expr` receives `_` system
variable indicating the iteration.

```scarpet
loop(5, game_tick())  => repeat tick 5 times
list = []; loop(5, x = _; loop(5, list += [x, _] ) ); list
// double loop, produces: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 0], [1, 1], ... , [4, 2], [4, 3], [4, 4]]
```

In this small example we will search for first 10 primes, apparently including
0:

```scarpet
check_prime(n) -> !first( range(2, sqrt(n)+1), !(n % _) );
primes = [];
loop(10000, if(check_prime(_), primes += _ ; if (length(primes) >= 10, break())));
primes
// outputs: [0, 1, 2, 3, 5, 7, 11, 13, 17, 19]
```
