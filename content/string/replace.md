---
title: replace()
name: replace
signatures:
  - params:
      - name: string
      - name: regex
      - name: replacement
  - params:
      - name: string
      - name: regex
---

Returns a new string with all matches of `regex` replaced by `replacement`, or
removed if `replacement` is not specified.

### Regex

Regular expressions are based on [Java `Pattern`].

### Escaping

Backslashes (`\`) inside Scarpet strings are interpreted as character escapes.
It is necessary to use double backslashes in the regular expression literal to
prevent Scarpet from interpreting them. For example `'\w'` produces an error so
`'\\w'` must be used instead.

### Examples

```scarpet
string = 'John doe\'s dog is cuter than Jane\'s dog';
print(replace(string, 'dog', 'cat')); // John doe's cat is cuter than Jane's cat
```

[Java `Pattern`]: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/regex/Pattern.html
