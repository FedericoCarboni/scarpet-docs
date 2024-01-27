---
title: profile_expr()
name: profile_expr
signatures:
  - params:
      - name: expr
---

Returns number of times given expression can be run in 50ms time. Useful to
profile and optimize your code. Note that, even if its only a number, it WILL
run these commands, so if they are destructive, you need to be careful.
