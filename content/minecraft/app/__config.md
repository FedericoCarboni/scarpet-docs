---
title: __config()
name: __config
params: []
---

If an app defines `__config` method, and that method returns a map, it will be
used to apply custom settings for this app. Currently, the following options are
supported:

- `'strict'` : if `true`, any use of an uninitialized variable will result in
  program failure. Defaults to `false` if not specified. With `'strict'`you have
  to assign an initial value to any variable before using it. It is very useful
  to use this setting for app debugging and for beginner programmers. Explicit
  initialization is not required for your code to work, but mistakes may result
  from improper assumptions about initial variable values of `null`.
- `'scope'`: default scope for global variables for the app, Default is
  `'player'`, which means that globals and defined functions will be unique for
  each player so that apps for each player will run in isolation. This is useful
  in tool-like applications, where behaviour of things is always from a player's
  perspective. With player scope the initial run of the app creates is initial
  state: defined functions, global variables, config and event handlers, which
  is then copied for each player that interacts with the app. With `'global'`
  scope - the state created by the initial load is the only variant of the app
  state and all players interactions run in the same context, sharing defined
  functions, globals, config and events. `'global'` scope is most applicable to
  world-focused apps, where either players are not relevant, or player data is
  stored explicitly keyed with players, player names, uuids, etc. Even for
  `'player'` scoped apps, you can access specific player app with with
  commandblocks using `/execute as <player> run script in <app> run ...`. To
  access global/server state for a player app, which you shouldn't do, you need
  to disown the command from any player, so either use a command block, or any
  arbitrary entity:
  `/execute as @e[type=bat,limit=1] run script in <app> globals` for instance,
  however running anything in the global scope for a `'player'` scoped app is
  not intended.
- `'event_priority'`: defaults to `0`. This specifies the order in which events
  will be run, from highest to lowest. This is need since cancelling an event
  will stop executing the event in subsequent apps with lower priority.
- `'stay_loaded'`: defaults to `true`. If true, and `/carpet scriptsAutoload` is
  turned on, the following apps will stay loaded after startup. Otherwise, after
  reading the app the first time, and fetching the config, server will drop them
  down. WARNING: all apps will run once at startup anyways, so be aware that
  their actions that are called statically, will be performed once anyways. Only
  apps present in the world's `scripts` folder will be autoloaded.
- `'legacy_command_type_support'` - if `true`, and the app defines the legacy
  command system via `__command()` function, all parameters of command functions
  will be interpreted and used using brigadier / vanilla style argument parser
  and their type will be inferred from their names, otherwise the legacy scarpet
  variable parser will be used to provide arguments to commands.
- `'allow_command_conflicts'` - if custom app commands tree is defined, the app
  engine will check and identify conflicts and ambiguities between different
  paths of execution. While ambiguous commands are allowed in brigadier, and
  they tend to execute correctly, the suggestion support works really poorly in
  these situations and scarpet will warn and prevent such apps from loading with
  an error message. If `allow_command_conflicts` is specified and `true`, then
  scarpet will load all provided commands regardless.
- `'requires'` - defines either a map of mod dependencies in Fabric's mod.json
  style, or a function to be executed. If it's a map, it will only allow the app
  to load if all of the mods specified in the map meet the version criteria. If
  it's a function, it will prevent the app from loading if the function does not
  execute to `false`, displaying whatever is returned to the user.

  Available prefixes for the version comparison are `>=`, `<=`, `>`, `<`, `~`,
  `^` and `=` (default if none specified), based in the spec at
  [NPM docs about SemVer ranges](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges)

  ```scarpet
  __config() -> {
    'requires' -> {
      'carpet' -> '>=1.4.33', // Will require Carpet with a version >= 1.4.32
      'minecraft' -> '>=1.16', // Will require Minecraft with a version >= 1.16
      'chat-up' -> '*' // Will require any version of the chat-up mod
    }
  }
  ```

  ```scarpet
  __config() -> {
    'requires' -> _() -> (
        d = convert_date(unix_time());
        if(d:6 == 5 && d:2 == 13,
          'Its Friday, 13th' // Will throw this if Friday 13th, will load else since `if` function returns `null` by default
        )
  }
  ```

- `'command_permission'` - indicates a custom permission to run the command. It
  can either be a number indicating permission level (from 1 to 4) or a string
  value, one of: `'all'` (default), `'ops'` (default opped player with
  permission level of 2), `'server'` - command accessible only through the
  server console and commandblocks, but not in chat, `'players'` - opposite of
  the former, allowing only use in player chat. It can also be a function
  (lambda function or function value, not function name) that takes 1 parameter,
  which represents the calling player, or `'null'` if the command represents a
  server call. The function will prevent the command from running if it
  evaluates to `false`. Please note, that Minecraft evaluates eligible commands
  for players when they join, or on reload/restart, so if you use a predicate
  that is volatile and might change, the command might falsely do or do not
  indicate that it is available to the player, however player will always be
  able to type it in and either succeed, or fail, based on their current
  permissions. Custom permission applies to legacy commands with
  `'legacy_command_type_support'` as well as for the custom commands defined
  with `'commands'`, see below.
- `'resources'` - list of all downloadable resources when installing the app
  from an app store. List of resources needs to be in a list and contain of
  map-like resources descriptors, looking like

```scarpet
  'resources' -> [
       {
           'source' -> 'https://raw.githubusercontent.com/gnembon/fabric-carpet/master/src/main/resources/assets/carpet/icon.png',
           'target' -> 'foo/photos.zip/foo/cm.png',
       },
       {
           'source' -> '/survival/README.md',
           'target' -> 'survival_readme.md',
           'shared' -> true,
       },
       {
           'source' -> 'circle.sc', // Relative path
           'target' -> 'apps/circle.sc', // This won't install the app, use 'libraries' for that
       },
   ]
```

`source` indicates resource location: either an arbitrary url (starting with
`http://` or `https://`), absolute location of a file in the app store (starting
with a slash `/`), or a relative location in the same folder as the app in
question (the relative location directly). `'target'` points to the path in app
data, or shared app data folder. If not specified it will place the app into the
main data folder with the name it has. if `'shared'` is specified and `true`.
When re-downloading the app, all resources will be re-downloaded as well.
Currently, app resources are only downloaded when using `/script download`
command.

- `libraries` - list of libraries or apps to be downloaded when installing the
  app from the app store. It needs to be a list of map-like resource
  descriptors, like the above `resources` field.

```scarpet
'libraries' -> [
     {
         'source' -> '/tutorial/carpets.sc'
     },
     {
         'source' -> '/fundamentals/heap.sc',
         'target' -> 'heap-lib.sc'
     }
 ]
```

`source` indicates resource location and must point to a scarpet app or library.
It can be either an arbitrary url (starting with `http://` or `https://`),
absolute location of a file in the app store (starting with a slash `/`), or a
relative location in the same folder as the app in question (the relative
location directly). `target` is an optional field indicating the new name of the
app. If not specified it will place the app into the main data folder with the
name it has.

If the app has relative resources dependencies, Carpet will use the app's path
for relatives if the app was loaded from the same app store, or none if the app
was loaded from an external url. If you need to `import()` from dependencies
indicated in this block, make sure to have the `__config()` map before any
import that references your remote dependencies, in order to allow them to be
downloaded and initialized before the import is executed.

- `'arguments'` - defines custom argument types for legacy commands with
  `'legacy_command_type_support'` as well as for the custom commands defined
  with `'commands'`, see below.
- `'commands'` - defines custom commands for the app to be executed with
  `/<app>` command, see below.
