---
title: enable_hidden_dimensions()
name: enable_hidden_dimensions
signatures:
  - params: []
---

(1.18.1 and lower)

The function reads current datapack settings detecting new dimensions defined by
these datapacks that have not yet been added to the list of current dimensions
and adds them so that they can be used and accessed right away. It doesn't
matter how the datapacks have been added to the game, either with
`create_datapack()` or manually by dropping a datapack file and calling
`/datapack enable` on it. Returns the list of valid dimension names /
identifiers that has been added in the process.

Fine print: The function should be considered experimental. For example: is not
supposed to work at all in vanilla, and its doing exactly that in 1.18.2+. There
'should not be' (famous last words) any side-effects if no worlds are added.
Already connected clients will not see suggestions for commands that use
dimensions `/execute in <dim>` (vanilla client limitation) but all commands
should work just fine with the new dimensions. Existing worlds that have gotten
modified settings by the datapacks will not be reloaded or replaced. The
usability of the dimensions added this way has not been fully tested, but it
seems it works just fine. Generator settings for the new dimensions will not be
added to `'level.dat'` but it will be added there automatically next time the
game restarts by vanilla. One could have said to use this method with caution,
and the authors take no responsibility of any losses incurred due to
mis-handlilng of the temporary added dimensions, yet the feature itself (custom
dimensions) is clearly experimental for Mojang themselves, so that's about it.
