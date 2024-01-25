---
signatures:
  - params: []
  - params:
      - name: value
  - params:
      - name: type
      - name: value
  - params:
      - name: subtype
      - name: type
      - name: value
---

Throws an exception that can be caught in a `try` block (see above). If ran
without arguments, it will throw a `user_exception` passing `null` as the value
to the `catch_expr`. With two arguments you can mimic any other exception type
thrown in scarpet. With 3 arguments, you can specify a custom exception acting
as a `subtype` of a provided `type`, allowing to customize `try` statements with
custom exceptions.
