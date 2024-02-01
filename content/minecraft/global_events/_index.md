---
title: Global Events
kind: callback
order: 4
---

Global events will be handled once per app that is with `'global'` scope. With
`player` scoped apps, each player instance will be triggered once for each
player, so a global event may be executed multiple times for such apps.
