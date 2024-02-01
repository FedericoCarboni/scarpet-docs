---
title: carpet_rule_changes
name: __on_carpet_rule_changes
params:
  - name: rule
  - name: new_value
---

Triggered when a carpet mod rule is changed. It includes extension rules, not using default `/carpet` command,
which will then be namespaced as `namespace:rule`.
