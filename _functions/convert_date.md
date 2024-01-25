---
signatures:
  - params:
      - name: year
      - name: month
      - name: day
      - name: hours
      - name: minutes
      - name: seconds
  - params:
      - name: date
---

If called with a single argument, converts standard POSIX time to a list in the format:

`[year, month, day, hours, mins, secs, day_of_week, day_of_year, week_of_year]`

eg: `convert_date(1592401346960) -> [2020, 6, 17, 10, 42, 26, 3, 169, 25]`

Where the `6` stands for June, but `17` stands for 17th, `10` stands for 10am,
`42` stands for 42 minutes past the hour, and `26` stands for 26 seconds past the minute,
and `3` stands for Wednesday, `169` is the day of year, and `25` is a week of year.

Run `convert_date(unix_time())` to get current time as list.

When called with a list, or with 3 or 6 arguments, returns standard POSIX time as a number of milliseconds since the
start of the epoch (1 Jan 1970),
using the time inputted into the function as opposed to the system time.

Example editing:

```scarpet
date = convert_date(unix_time());

months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

print(
  str('Its %s, %d %s %d, %02d:%02d:%02d',
    days:(date:6-1), date:2, months:(date:1-1), date:0, date:3, date:4, date:5
  )
)
```

This will give you a date:

It is currently `hrs`:`mins` and `secs` seconds on the `day`th of `month`, `year`
