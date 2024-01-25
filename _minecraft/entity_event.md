---
signatures:
  - params:
      - name: e
      - name: event
      - name: function
---

, `entity_event(e, event, call_name, ... args?)`

Attaches specific function from the current package to be called upon the
`event`, with extra `args` carried to the original required arguments for the
event handler.

```scarpet
protect_villager(entity, amount, source, source_entity, healing_player) ->
(
   if(source_entity && source_entity~'type' != 'player',
      modify(entity, 'health', amount + entity~'health' );
      particle('end_rod', pos(entity)+[0,3,0]);
      print(str('%s healed thanks to %s', entity, healing_player))
   )
);
__on_player_interacts_with_entity(player, entity, hand) ->
(
   if (entity~'type' == 'villager',
      entity_event(entity, 'on_damage', 'protect_villager', player~'name')
   )
)
```

In this case this will protect a villager from entity damage (zombies, etc.)
except from players by granting all the health back to the villager after being
harmed.
