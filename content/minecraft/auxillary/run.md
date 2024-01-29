---
title: run()
name: run
signatures:
  - params:
      - name: command
---

Runs a vanilla command from the string result of the `expr` and returns a triple
of 0 (unused after success count removal), intercepted list of output messages,
and error message if the command resulted in a failure. Successful commands
return `null` as their error.

```scarpet
run('fill 1 1 1 10 10 10 air') -> [0, ["Successfully filled 123 blocks"], null]
run('give @s stone 4') -> [0, ["Gave 4 [Stone] to gnembon"], null]
run('seed') -> [0, ["Seed: [4031384495743822299]"], null]
run('sed') -> [0, [], "sed<--[HERE]"] // wrong command
```
