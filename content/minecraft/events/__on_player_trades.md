---
params:
  - name: player
  - name: entity
  - name: buy_left
  - name: buy_right
  - name: sell
name: __on_player_trades
title: player_trades
---

Triggered when player trades with a merchant. The event is invoked after the
server allow the trade, but before the inventory changes and merchant updates
its trade-uses counter. The parameter `entity` can be `null` if the merchant is
not an entity.
