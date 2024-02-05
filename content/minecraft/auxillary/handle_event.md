---
title: handle_event()
name: handle_event
signatures:
  - params:
      - name: event
      - name: function
      - name: args
        rest: true
---

Provides a handler for an event identified by the '`event`' argument. If the
event doesn't exist yet, it will be created. All loaded apps globally can
trigger that event, when they call corresponding `signal_event(event, ...)`.
Callback can be defined as a function name, function value (or a lambda
function), along with optional extra arguments that will be passed to it when
the event is triggered. All custom events expect a function that takes one free
argument, passed by the event trigger. If extra arguments are provided, they
will be appended to the argument list of the callback function.

Returns `true` if subscription to the event was successful, or `false` if it
failed (for instance wrong scope for built-in event, or incorrect number of
parameters for the event).

If a callback is specified as `null`, the given app (or player app instance
)stops handling that event.

```scarpet
foo(a) -> print(a);
handle_event('boohoo', 'foo');

bar(a, b, c) -> print([a, b, c]);
handle_event('boohoo', 'bar', 2, 3) // using b = 2, c = 3, a - passed by the caller

handle_event('tick', _() -> foo('tick happened')); // built-in event

handle_event('tick', null);  // nah, ima good, kthxbai
```

In case you want to pass an event handler that is not defined in your module,
please read the tips on "Passing function references to other modules of your
application" section in the `call(...)` section.
