---
title: system_info()
name: system_info
signatures:
  - params: []
  - params:
      - name: property
---

Fetches the value of one of the following system properties. If called without
arguments, it returns a list of available system_info options. It can be used to
fetch various information, mostly not changing, or only available via low level
system calls. In all circumstances, these are only provided as read-only.
Fetches the value of one of the following system properties. If called without
arguments, it returns a list of available system_info options. It can be used to
fetch various information, mostly not changing, or only available via low level
system calls. In all circumstances, these are only provided as read-only.

##### Available options in the scarpet app space:

- `app_name` - current app name or `null` if its a default app
- `app_list` - list of all loaded apps excluding default commandline app
- `app_scope` - scope of the global variables and function. Available options is
  `player` and `global`
- `app_players` - returns a player list that have app run under them. For
  `global` apps, the list is always empty

##### Relevant world related properties

- `world_name` - name of the world
- `world_seed` - a numeric seed of the world
- `world_dimensions` - a list of dimensions in the world
- `world_path` - full path to the world saves folder
- `world_folder` - name of the direct folder in the saves that holds world files
- `world_carpet_rules` - returns all Carpet rules in a map form
  (`rule`->`value`). Note that the values are always returned as strings, so you
  can't do boolean comparisons directly. Includes rules from extensions with
  their namespace (`namespace:rule`->`value`). You can later listen to rule
  changes with the `on_carpet_rule_changes(rule, newValue)` event.
- `world_gamerules` - returns all gamerules in a map form (`rule`->`value`).
  Like carpet rules, values are returned as strings, so you can use appropriate
  value conversions using `bool()` or `number()` to convert them to other
  values. Gamerules are read-only to discourage app programmers to mess up with
  the settings intentionally applied by server admins. Isn't that just super
  annoying when a datapack messes up with your gamerule settings? It is still
  possible to change them though using `run('gamerule ...`.
- `world_spawn_point` - world spawn point in the overworld dimension
- `world_time` - Returns dimension-specific tick counter.
- `world_top` - Returns current dimensions' topmost Y value where one can place
  blocks.
- `world_bottom` - Returns current dimensions' bottommost Y value where one can
  place blocks.
- `world_center` - Returns coordinates of the center of the world with respect
  of the world border
- `world_size` - Returns radius of world border for current dimension.
- `world_max_size` - Returns maximum possible radius of world border for current
  dimension.
- `world_min_spawning_light` - Returns minimum light level at which mobs can
  spawn for current dimension, taking into account datapacks

##### Relevant gameplay related properties

- `game_difficulty` - current difficulty of the game: `'peaceful'`, `'easy'`,
  `'normal'`, or `'hard'`
- `game_hardcore` - boolean whether the game is in hardcore mode
- `game_storage_format` - format of the world save files, either `'McRegion'` or
  `'Anvil'`
- `game_default_gamemode` - default gamemode for new players
- `game_max_players` - max allowed players when joining the world
- `game_view_distance` - the view distance
- `game_mod_name` - the name of the base mod. Expect `'fabric'`
- `game_version` - base version of the game
- `game_target` - target release version
- `game_major_target` - major release target. For 1.12.2, that would be 12
- `game_minor_release` - minor release target. For 1.12.2, that would be 2
- `game_protocol` - protocol version number
- `game_pack_version` - datapack version number
- `game_data_version` - data version of the game. Returns an integer, so it can
  be compared.
- `game_stable` - indicating if its a production release or a snapshot

##### Server related properties

- `server_motd` - the motd of the server visible when joining
- `server_ip` - IP adress of the game hosted
- `server_whitelisted` - boolean indicating whether the access to the server is
  only for whitelisted players
- `server_whitelist` - list of players allowed to log in
- `server_banned_players` - list of banned player names
- `server_banned_ips` - list of banned IP addresses
- `server_dev_environment` - boolean indicating whether this server is in a
  development environment.
- `server_mods` - map with all loaded mods mapped to their versions as strings
- `server_last_tick_times` - Returns a 100-long array of recent tick times, in
  milliseconds. First item on the list is the most recent tick If called outside
  of the main tick (either throgh scheduled tasks, or async execution), then the
  first item on the list may refer to the previous tick performance. In this
  case the last entry (tick 100) would refer to the most current tick. For all
  intent and purpose, `system_info('last_tick_times'):0` should be used as last
  tick execution time, but individual tick times may vary greatly, and these
  need to be taken with the little grain of averaging.

##### Source related properties

The source is what is the cause of the code running, with Carpet using it same
way as Minecraft commands use to run. Those are used in some API functions that
interact with the game or with commands, and can be manipulated if the execution
is caused by an `execute` command, modified by some functions or ran in
non-standard ways. This section provides useful information from these cases
(like running from a command block, right clicking a sign, etc)

- `source_entity` - The entity associated with the execution. This is usually a
  player (in which case `player()` would get the entity from this), but it may
  also be a different entity or `null` if the execution comes from the server
  console or a command block.
- `source_position` - The position associated with the execution. This is
  usually the position of the entity, but it may have been manipulated or it
  could come from a command block (no entity then). If this call comes from the
  server console, it will be the world spawn.
- `source_dimension` - The dimension associated with the execution. Execution
  from the server console provides `overworld` as the dimension. This can be
  manipulated by running code inside `in_dimension()`.
- `source_rotation` - The rotation associated with the execution. Usually
  `[0, 0]` in non-standard situations, the rotation of the entity otherwise.

##### System related properties

- `java_max_memory` - maximum allowed memory accessible by JVM
- `java_allocated_memory` - currently allocated memory by JVM
- `java_used_memory` - currently used memory by JVM
- `java_cpu_count` - number of processors
- `java_version` - version of Java
- `java_bits` - number indicating how many bits the Java has, 32 or 64
- `java_system_cpu_load` - current percentage of CPU used by the system
- `java_process_cpu_load` - current percentage of CPU used by JVM

##### Scarpet related properties

- `scarpet_version` - returns the version of the carpet your scarpet comes with.
