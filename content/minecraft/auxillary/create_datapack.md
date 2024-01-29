---
title: create_datapack()
name: create_datapack
signatures:
  - params:
      - name: name
      - name: data
---

Creates and loads custom datapack. The data has to be a map representing the
file structure and the content of the json files of the target pack.

Returns `null` if the pack with this name already exists or is loaded, meaning
no change has been made. Returns `false` if adding of the datapack wasn't
successful. Returns `true` if creation and loading of the datapack was
successful. Loading of a datapack results in reloading of all other datapacks
(vanilla restrictions, identical to /datapack enable), however unlike with
`/reload` command, scarpet apps will not be reloaded by adding a datapack using
`create_datapack`.

Currently, only json/nbt/mcfunction files are supported in the packs.
`'pack.mcmeta'` file is added automatically.

Reloading of datapacks that define new dimensions is not implemented in vanilla.
Vanilla game only loads dimension information on server start. `create_datapack`
is therefore a direct replacement of manually ploping of the specified file
structure in a datapack file and calling `/datapack enable` on the new datapack
with all its quirks and sideeffects (like no worldgen changes, reloading all
other datapacks, etc.). To enable newly added custom dimensions, call much more
experimental `enable_hidden_dimensions()` after adding a datapack if needed.

Synopsis:

```scarpet
script run create_datapack('foo',
{
    'foo' -> { 'bar.json' -> {
        'c' -> true,
        'd' -> false,
        'e' -> {'foo' -> [1,2,3]},
        'a' -> 'foobar',
        'b' -> 5
    } }
})
```

Custom dimension example:

```scarpet
// 1.17
script run create_datapack('funky_world',  {
    'data' -> { 'minecraft' -> { 'dimension' -> { 'custom_ow.json' -> {
        'type' -> 'minecraft:the_end',
        'generator' -> {
            'biome_source' -> {
                 'seed' -> 0,
                 'large_biomes' -> false,
                 'type' -> 'minecraft:vanilla_layered'
            },
            'seed' -> 0,
            'settings' -> 'minecraft:nether',
            'type' -> 'minecraft:noise'
    } } } } }
});

// 1.18
script run a() -> create_datapack('funky_world',  {
   'data' -> { 'minecraft' -> { 'dimension' -> { 'custom_ow.json' -> {
      'type' -> 'minecraft:overworld',
         'generator' -> {
            'biome_source' -> {
               'biomes' -> [
                  {
                     'parameters' -> {
                        'erosion' -> [-1.0,1.0],
                        'depth' -> 0.0,
                        'weirdness' -> [-1.0,1.0],
                        'offset' -> 0.0,
                        'temperature' -> [-1.0,1.0],
                        'humidity' -> [-1.0,1.0],
                        'continentalness' -> [ -1.2,-1.05]
                     },
                     'biome' -> 'minecraft:mushroom_fields'
                  }
               ],
               'type' -> 'minecraft:multi_noise'
            },
            'seed' -> 0,
            'settings' -> 'minecraft:overworld',
            'type' -> 'minecraft:noise'
         }
     } } } }
});
enable_hidden_dimensions();  => ['funky_world']
```

Loot table example:

```scarpet
script run create_datapack('silverfishes_drop_gravel', {
    'data' -> { 'minecraft' -> { 'loot_tables' -> { 'entities' -> { 'silverfish.json' -> {
        'type' -> 'minecraft:entity',
        'pools' -> [
            {
                'rolls' -> {
                    'min' -> 0,
                    'max' -> 1
                },
                'entries' -> [
                    {
                        'type' -> 'minecraft:item',
                        'name' -> 'minecraft:gravel'
                    }
                ]
            }
        ]
    } } } } }
});
```

Recipe example:

```scarpet
script run create_datapack('craftable_cobwebs', {
    'data' -> { 'scarpet' -> { 'recipes' -> { 'cobweb.json' -> {
        'type' -> 'crafting_shaped',
        'pattern' -> [
            'SSS',
            'SSS',
            'SSS'
        ],
        'key' -> {
            'S' -> {
                'item' -> 'minecraft:string'
            }
        },
        'result' -> {
            'item' -> 'minecraft:cobweb',
            'count' -> 1
        }
    } } } }
});
```

Function example:

```scarpet
 script run create_datapack('example',{'data/test/functions/talk.mcfunction'->'say 1\nsay 2'})
```
