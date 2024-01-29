---
title: logger()
name: logger
signatures:
  - params:
      - name: message
  - params:
      - name: level
      - name: message
---

Prints the message to system logs, and not to chat. By default prints an info,
unless you specify otherwise in the `type` parameter.

Available output types:

`'debug'`, `'warn'`, `'fatal'`, `'info'` and `'error'`
