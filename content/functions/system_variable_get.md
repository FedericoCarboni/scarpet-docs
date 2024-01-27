---
title: system_variable_get()
name: system_variable_get
signatures:
  - params:
      - name: key
      - name: default_value
---

Returns the variable from the system shared key-value storage keyed with a `key`
value, optionally if value is not present, and default expression is provided,
sets a new value to be associated with that key
