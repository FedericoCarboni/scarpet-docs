---
title: if
signatures:
  - params:
    - name: condition
    - name: if_true
  - params:
    - name: condition
    - name: if_true
    - name: if_false
---

Evaluate an expression if a condition holds.

```scarpet
if(1 == 2, print('oops, maths broke'));
```

`if()` can also be used as an expression. An extra argument can be specified to
act as an `else` block.

```scarpet
message = if(player()~'gamemode' == 'creative',
    'Hi cheater',
    'Hello friend',
);
```

Unlike most programming languages there is no `else if`. More conditions and
expression can be added as arguments to the `if()` call.

```scarpet
if(gamemode == 'creative',
    'player is in creative',
    gamemode == 'survival',
    'player is in survival',
    'player is not in creative or survival',
);
```
