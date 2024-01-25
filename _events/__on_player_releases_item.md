---
params:
  - name: player
  - name: item_tuple
  - name: hand
---

Player stops right-click-holding on an item that can be held. This event is a
result of a client request. Example events that may cause it to happen is
releasing a bow. The event is triggered after the game processes the request,
however the `item_tuple` is provided representing the item that the player
started with. You can use that and compare with the currently held item for a
delta.
