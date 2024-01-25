---
signatures:
  - params:
      - name: list
      - name: expr
        binds: [_, _i]
---

filters `list` elements returning only these that return positive result of the `expr`. With `break` and `continue`
statements, the supplied value can be used as a boolean check instead.

```scarpet
filter(range(100), !(_%5), _*_>1000)  => [0, 5, 10, 15, 20, 25, 30]
map(filter(entity_list('*'),_=='Witch'), query(_,'pos') )  => [[1082.5, 57, 1243.5]]
```
