---
signatures:
  - params:
      - name: expr
  - params:
      - name: player
      - name: expr
name: print
title: print()
---


prints the value of the expression to chat. Passes the result of the argument to
the output unchanged, so `print`-statements can be weaved in code to debug
programming issues. By default it uses the same communication channels that most
vanilla commands are using.

In case player is directly specified, it only sends the message to that player,
like `tell` command.

```scarpet
print('foo') => results in foo, prints: foo
a = 1; print(a = 5) => results in 5, prints: 5
a = 1; print(a) = 5 => results in 5, prints: 1
print('pi = '+pi) => prints: pi = 3.141592653589793
print(str('pi = %.2f',pi)) => prints: pi = 3.14
```
