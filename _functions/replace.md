---
signatures:
  - params:
      - name: string
      - name: regex
      - name: replreplace_firststring
      - name: regex
      - name: repl
---

Replaces all, or first occurrence of a regular expression in the string with
`repl` expression, or nothing, if not specified. To use escape characters
(`\(`,`\+`,...), metacharacters (`\d`,`\w`,...), or position anchors
(`\b`,`\z`,...) in your regular expression, use two backslashes.

```scarpet
replace('abbccddebfg','b+','z')  // => azccddezfg
replace('abbccddebfg','\\w$','z')  // => abbccddebfz
replace_first('abbccddebfg','b+','z')  // => azccddebfg
```
