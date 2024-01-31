---
title: replace_first()
name: replace_first
signatures:
  - params:
      - name: string
      - name: regex
  - params:
      - name: string
      - name: regex
      - name: replacement
---

Returns a new string with the first match of `regex` replaced by `replacement`,
or removed if `replacement` is not specified.

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
print(replace_first(string, 'dog', 'cat')); // John doe's cat is cuter than Jane's dog
```

[Java `Pattern`]:
  https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/regex/Pattern.html
