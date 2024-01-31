---
title: vars()
name: vars
signatures:
  - params:
      - name: prefix
---

It returns all names of variables from local scope (if prefix does not start
with 'global') or global variables (otherwise). Here is a larger example that
uses combination of `vars` and `var` functions to be used for object counting

```scarpet
count_blocks(ent) -> (
  [cx, cy, cz] = query(ent, 'pos');
  scan(cx, cy, cz, 16, 16, 16, var('count_'+_) += 1);
  for (sort_key(vars('count_'), -var(_)),
    print(str('%s: %d', slice(_, 6), var(_)))
  );
);
count_blocks(player());
```
