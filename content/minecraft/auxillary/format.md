---
title: format()
name: format
signatures:
  - params:
      - name: components
        rest: true
---

Creates a line of formatted text. Each component is either a string indicating
formatting and text it corresponds to or a decorator affecting the component
preceding it.

Regular formatting components is a string that have the structure of:
`'<format> <text>'`, like `'gi Hi'`, which in this case indicates a grey,
italicised word `'Hi'`. The space to separate the format and the text is
mandatory. The format can be empty, but the space still needs to be there
otherwise the first word of the text will be used as format, which nobody wants.

Format is a list of formatting symbols indicating the format. They can be mixed
and matched although color will only be applied once. Available symbols include:

- `i` - _italic_
- `b` - **bold**
- `s` - ~~strikethrough~~
- `u` - <u>underline</u>
- `o` - obfuscated

And colors:

- `w` - White (default)
- `y` - Yellow
- `m` - Magenta (light purple)
- `r` - Red
- `c` - Cyan (aqua)
- `l` - Lime
- `t` - lighT blue
- `f` - dark grayF (weird Flex, but ok)
- `g` - Gray
- `d` - golD
- `p` - PurPle
- `n` - browN (dark red)
- `q` - turQuoise (dark aqua)
- `e` - grEEn
- `v` - naVy blue
- `k` - blaK
- `#FFAACC` - arbitrary RGB color (1.16+), hex notation. Use uppercase for A-F
  symbols

Decorators (listed as extra argument after the component they would affect):

- `'^<format> <text>'` - hover over tooltip text, appearing when hovering with
  your mouse over the text below.
- `'?<suggestion>` - command suggestion - a message that will be pasted to chat
  when text below it is clicked.
- `'!<message>'` - a chat message that will be executed when the text below it
  is clicked.
- `'@<url>'` - a URL that will be opened when the text below it is clicked.
- `'&<text>'` - a text that will be copied to clipboard when the text below it
  is clicked.

Both suggestions and messages can contain a command, which will be executed as a
player that clicks it.

So far the only usecase for formatted texts is with a `print` command. Otherwise
it functions like a normal string value representing what is actually displayed
on screen.

Example usages:

```scarpet
 print(format('rbu Error: ', 'r Stuff happened!'))
 print(format('w Click ','tb [HERE]', '^di Awesome!', '!/kill', 'w \ button to win $1000'))
  // the reason why I backslash the second space is that otherwise command parser may contract consecutive spaces
  // not a problem in apps
```
