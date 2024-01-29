---
title: game_tick()
name: game_tick
signatures:
  - params:
      - name: mstime
---

Causes game to run for one tick. By default, it runs it and returns control to
the program, but can optionally accept expected tick length, in milliseconds,
waits that extra remaining time and then returns the control to the program. You
can't use it to permanently change the game speed, but setting longer commands
with custom tick speeds can be interrupted via `/script stop` command - if you
can get access to the command terminal.

Running `game_tick()` as part of the code that runs within the game tick itself
is generally a bad idea, unless you know what this entails. Triggering the
`game_tick()` will cause the current (shoulder) tick to pause, then run the
internal tick, then run the rest of the shoulder tick, which may lead to
artifacts in between regular code execution and your game simulation code. If
you need to break up your execution into chunks, you could queue the rest of the
work into the next task using `schedule`, or perform your actions defining
`__on_tick()` event handler, but in case you need to take a full control over
the game loop and run some simulations using `game_tick()` as the way to advance
the game progress, that might be the simplest way to do it, and triggering the
script in a 'proper' way (there is not 'proper' way, but via command line, or
server chat is the most 'proper'), would be the safest way to do it. For
instance, running `game_tick()` from a command block triggered with a button, or
in an entity event triggered in an entity tick, may technically cause the game
to run and encounter that call again, causing stack to overflow. Thankfully it
doesn't happen in vanilla running carpet, but may happen with other modified
(modded) versions of the game.

<pre>
loop(1000,game_tick())  // runs the game as fast as it can for 1000 ticks
loop(1000,game_tick(100)) // runs the game twice as slow for 1000 ticks
</pre>
