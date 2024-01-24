---
signatures:
  - params:
      - name: expr
---

Evaluates subexpression without causing updates when blocks change in the world.

For synchronization sake, as well as from the fact that suppressed update can only happen within a tick,
the call to the `expr` is docked on the main server task.

Consider following scenario: We would like to generate a bunch of terrain in a flat world following a perlin noise
generator. The following code causes a cascading effect as blocks placed on chunk borders will cause other chunks to get
loaded to full, thus generated:

<pre>
__config() -> {'scope' -> 'global'};
__on_chunk_generated(x, z) -> (
  scan(x,0,z,0,0,0,15,15,15,
    if (perlin(_x/16, _y/8, _z/16) > _y/16,
      set(_, 'black_stained_glass');
    )
  )
)
</pre>

The following addition resolves this issue, by not allowing block updates past chunk borders:

<pre>
__config() -> {'scope' -> 'global'};
__on_chunk_generated(x, z) -> (
  without_updates(
    scan(x,0,z,0,0,0,15,15,15,
      if (perlin(_x/16, _y/8, _z/16) > _y/16,
        set(_, 'black_stained_glass');
      )
    )
  )
)
</pre>
