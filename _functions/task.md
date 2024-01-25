---
signatures:
  - params:
      - name: function
      - name: args
---

, `task_thread(executor, function, ... args)`

Creates and runs a parallel task, returning the handle to the task object. Task will return the return value of the
function when its completed, or will return `null` immediately if task is still in progress, so grabbing a value of
a task object is non-blocking. Function can be either function value, or function lambda, or a name of an existing
defined function. In case function needs arguments to be called with, they should be supplied after the function
name, or value. `executor` identifier in `task_thread`, places the task in a specific queue identified by this value.
The default thread value is the `null` thread. There are no limits on number of parallel tasks for any executor,
so using different queues is solely for synchronization purposes.

```scarpet
task( _() -> print('Hello Other World') )  => Runs print command on a separate thread
foo(a, b) -> print(a+b); task('foo',2,2)  => Uses existing function definition to start a task
task_thread('temp', 'foo',3,5);  => runs function foo with a different thread executor, identified as 'temp'
a = 3; task_thread('temp', _(outer(a), b) -> foo(a,b), 5)
    => Another example of running the same thing passing arguments using closure over anonymous function as well as passing a parameter.
```

In case you want to create a task based on a function that is not defined in your module, please read the tips on
 "Passing function references to other modules of your application" section in the `call(...)` section.
