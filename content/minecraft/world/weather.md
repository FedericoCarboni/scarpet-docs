---
title: weather()
name: weather
signatures:
  - params: []
  - params:
      - name: type
        suggest: [clear, rain, thunder]
  - params:
      - name: type
        suggest: [clear, rain, thunder]
      - name: ticks
---

### Querying

Called with no parameters, returns a string `clear`, `rain` or `thunder` based
on the current weather.

Called with a single parameter, either `clear`, `rain` or `thunder`, returns the
number of remaining ticks of that weather type.

**Note**: it can thunder without there being a thunderstorm; it has to _thunder_
and _rain_ to have a thunderstorm.

#### Examples

```scarpet
if(weather() == 'thunder' && weather('rain') > 0,
    print('There is a thunderstorm!'));
```

### Changing Weather

Call with both `type` and `ticks` to set the weather to the given type for the
specified amount of ticks.

#### Examples

```scarpet
weather('rain', 200); // set to rain for 200 ticks
```
