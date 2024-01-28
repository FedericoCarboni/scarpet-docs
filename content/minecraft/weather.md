---
signatures:
  - params:
      - name: ''
name: weather
title: weather()
---


,`weather(type)`,`weather(type, ticks)`

If called with no args, returns `'clear'`, `'rain` or `'thunder'` based on the
current weather. If thundering, will always return `'thunder'`, if not will
return `'rain'` or `'clear'` based on the current weather.

With one arg, (either `'clear'`, `'rain` or `'thunder'`), returns the number of
remaining ticks for that weather type. NB: It can thunder without there being a
thunderstorm; there has to be both rain and thunder to form a storm. So if
running `weather()` returns `'thunder'`, you can use `weather('rain')>0` to see
if there's a storm going on.

With two args, sets the weather to the given `type` for `ticks` ticks.

## Block and World querying
