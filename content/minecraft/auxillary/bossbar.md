---
title: bossbar()
name: bossbar
signatures:
  - params: []
  - params:
      - name: id
  - params:
      - name: id
      - name: property
  - params:
      - name: id
      - name: property
      - name: value
suggests:
  - property:
      type: string
      values: [name, players, add_player, remove]
  - property:
      color:
        value:
          type: string
          values: [pink, blue, red, green, yellow, purple, white]

---

Manage bossbars just like with the `/bossbar` command.

Without any arguments, returns a list of all bossbars.

When an id is specified, creates a bossbar with that `id` and returns the id of
the created bossbar. Bossbar ids need a namespace and a name. If no namespace is
specified, it will automatically use `minecraft:`. In that case you should keep
track of the bossbar with the id that `bossbar(id)` returns, because a namespace
may be added automatically. If the id was invalid (for example by having more
than one colon), returns `null`. If the bossbar already exists, returns `false`.

`bossbar('timer') => 'minecraft:timer'` (Adds the namespace `minecraft:` because
none is specified)

`bossbar('scarpet:test') => 'scarpet:test'` In this case there is already a
namespace specified

`bossbar('foo:bar:baz') => null` Invalid identifier

`bossbar(id, property)` is used to query the `property` of a bossbar.

`bossbar(id, property, value)` can modify the `property` of the bossbar to a
specified `value`.

Available properties are:

- `color`: can be `'pink'`, `'blue'`, `'red'`, `'green'`, `'yellow'`, `'purple'`
  or `'white'`
- `style`: can be `'progress'`, `'notched_6'`, `'notched_10'`, `'notched_12'` or
  `'notched_20'`
- `value`: value of the bossbar progress
- `max`: maximum value of the bossbar progress, by default 100
- `name`: Text to display above the bossbar, supports formatted text
- `visible`: whether the bossbar is visible or not
- `players`: List of players that can see the bossbar
- `add_player`: add a player to the players that can see this bossbar, this can
  only be used for modifying (`value` must be present)
- `remove`: remove this bossbar, no `value` required

```scarpet
bossbar('script:test','style','notched_12')
bossbar('script:test','value',74)
bossbar('script:test','name',format('rb Test'))  -> Change text
bossbar('script:test','visible',false)  -> removes visibility, but keeps players
bossbar('script:test','players',player('all'))  -> Visible for all players
bossbar('script:test','players',player('Steve'))  -> Visible for Steve only
bossbar('script:test','players',null)  -> Invalid player, removing all players
bossbar('script:test','add_player',player('Alex'))  -> Add Alex to the list of players that can see the bossbar
bossbar('script:test','remove')  -> remove bossbar 'script:test'
for(bossbar(),bossbar(_,'remove'))  -> remove all bossbars
```
