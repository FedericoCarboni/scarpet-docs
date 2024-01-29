---
title: entity_load_handler()
name: entity_load_handler
signatures:
  - params:
      - name: descriptordescriptors
      - name: function
---

, `entity_load_handler(descriptor / descriptors, call_name, ... args?)`

Attaches a callback to trigger when any entity matching the following type /
types is loaded in the game, allowing to grab a handle to an entity right when
it is loaded to the world without querying them every tick. Callback expects two
parameters - the entity, and a boolean value indicating if the entity was newly
created(`true`) or just loaded from disk. Single argument functions accepting
only entities are allowed, but deprecated and will be removed at some point.

If callback is `null`, then the current entity handler, if present, is removed.
Consecutive calls to `entity_load_handler` will add / subtract of the currently
targeted entity types pool.

Like other global events, calls to `entity_load_handler` should only be attached
in apps with global scope. For player scope apps, it will be called multiple
times, once for each player. That's likely not what you want to do.

```
// veryfast method of getting rid of all the zombies. Callback is so early, its packets haven't reached yet the clients
// so to save on log errors, removal of mobs needs to be scheduled for later.
entity_load_handler('zombie', _(e, new) -> schedule(0, _(outer(e)) -> modify(e, 'remove')))

// another way to do it is to remove the entity when it starts ticking
entity_load_handler('zombie', _(e, new) -> entity_event(e, 'on_tick', _(e) -> modify(e, 'remove')))

// making all zombies immediately faster and less susceptible to friction of any sort
entity_load_handler('zombie', _(e, new) -> entity_event(e, 'on_tick', _(e) -> modify(e, 'motion', 1.2*e~'motion')))
```

Word of caution: entities can be loaded with chunks in various states, for
instance when a chunk is being generated, this means that accessing world blocks
would cause the game to freeze due to force generating that chunk while
generating the chunk. Make sure to never assume the chunk is ready and use
`entity_load_handler` to schedule actions around the loaded entity, or
manipulate entity directly.

Also, it is possible that mobs that spawn with world generation, while being
'added' have their metadata serialized and cached internally (vanilla
limitation), so some modifications to these entities may have no effect on them.
This affects mobs created with world generation.

For instance the following handler is safe, as it only accesses the entity
directly. It makes all spawned pigmen jump

```
/script run entity_load_handler('zombified_piglin', _(e, new) -> if(new, modify(e, 'motion', 0, 1, 0)) )
```

But the following handler, attempting to despawn pigmen that spawn in portals,
will cause the game to freeze due to cascading access to blocks that would cause
neighbouring chunks to force generate, causing also error messages for all
pigmen caused by packets send after entity is removed by script.

```
/script run entity_load_handler('zombified_piglin', _(e, new) -> if(new && block(pos(e))=='nether_portal', modify(e, 'remove') ) )
```

Easiest method to circumvent these issues is delay the check, which may or may
not cause cascade load to happen, but will definitely break the infinite chain.

```
/script run entity_load_handler('zombified_piglin', _(e, new) -> if(new, schedule(0, _(outer(e)) -> if(block(pos(e))=='nether_portal', modify(e, 'remove') ) ) ) )
```

But the best is to perform the check first time the entity will be ticked -
giving the game all the time to ensure chunk is fully loaded and entity
processing, removing the tick handler:

```
/script run entity_load_handler('zombified_piglin', _(e, new) -> if(new, entity_event(e, 'on_tick', _(e) -> ( if(block(pos(e))=='nether_portal', modify(e, 'remove')); entity_event(e, 'on_tick', null) ) ) ) )
```

Looks little convoluted, but that's the safest method to ensure your app won't
crash.
