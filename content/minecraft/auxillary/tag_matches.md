---
title: tag_matches()
name: tag_matches
signatures:
  - params:
      - name: daddy_tag
      - name: baby_tag
      - name: match_lists
---

Utility returning `true` if `baby_tag` is fully contained in `daddy_tag`.
Anything matches `null` baby tag, and Nothing is contained in a `null` daddy
tag. If `match_lists` is specified and `false`, content of nested lists is
ignored. Default behaviour is to match them.
