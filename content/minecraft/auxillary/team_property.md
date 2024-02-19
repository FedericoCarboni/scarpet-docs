---
title: team_property()
name: team_property
signatures:
  - params:
      - name: team
      - name: property
    suggests:
      - property:
          values:
            - collisionRule
            - color
            - displayName
            - prefix
            - suffix
            - friendlyFire
            - seeFriendlyInvisibles
            - nametagVisibility
            - deathMessageVisibility
  - params:
      - name: team
      - name: property
      - name: value
    suggests:
      - property:
          values:
            - collisionRule
            - color
            - displayName
            - prefix
            - suffix
            - friendlyFire
            - seeFriendlyInvisibles
            - nametagVisibility
            - deathMessageVisibility
      - property:
          values: [collisionRule]
        value:
          values: [always, never, pushOtherTeams, pushOwnTeam]
      - property:
          values: [nametagVisibility, deathMessageVisibility]
        value:
          values: [always, never, hideForOtherTeams, hideForOwnTeam]
      - property:
          values: [friendlyFire, seeFriendlyInvisibles]
        value:
          type: bool
---

Reads the `property` of the `team` if no `value` is specified. If a `value` is
added as a third argument, it sets the `property` to that `value`.

- `collisionRule`

  - Type: String
  - Options: always, never, pushOtherTeams, pushOwnTeam

- `color`

  - Type: String
  - Options: See
    [team command](https://minecraft.wiki/w/Commands/team#Arguments) (same
    strings as `'teamcolor'`
    [command argument](https://github.com/gnembon/fabric-carpet/blob/master/docs/scarpet/Full.md#command-argument-types)
    options)

- `displayName`

  - Type: String or FormattedText, when querying returns FormattedText

- `prefix`

  - Type: String or FormattedText, when querying returns FormattedText

- `suffix`

  - Type: String or FormattedText, when querying returns FormattedText

- `friendlyFire`

  - Type: boolean

- `seeFriendlyInvisibles`

  - Type: boolean

- `nametagVisibility`

  - Type: String
  - Options: always, never, hideForOtherTeams, hideForOwnTeam

- `deathMessageVisibility`
  - Type: String
  - Options: always, never, hideForOtherTeams, hideForOwnTeam

Examples:

```scarpet
// Make the team color for team 'admin' dark red
team_property('admin', 'color', 'dark_red');
// Set prefix of all players in 'admin'
team_property('admin', 'prefix', format('r Admin | '));
// Set display name for team 'admin'
team_property('admin', 'display_name', 'Administrators');
// Make all players in 'admin' see other admins even when invisible
team_property('admin', 'seeFriendlyInvisibles', true);
// Make all players in 'admin' see other admins even when invisible
team_property('admin', 'deathMessageVisibility', 'hideForOtherTeams');
```
