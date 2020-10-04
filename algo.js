const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const builder = () => {
  const events = [];
  const food = [
    [8, 9],
    [11, 12],
    [19, 20],
  ];

  for (var i = 0; i < 3; i++) {
    events.push([i, food[0][0], food[0][1], "BREAKFAST"]);
    events.push([i, food[1][0], food[1][1], "LUNCH"]);
    events.push([i, food[2][0], food[2][1], "DINNER"]);
  }

  const get_open_intervals = (events, food) => {
    events.sort((a, b) => {
      return a[0] != b[0] ? a[0] - b[0] : a[1] - b[1];
    });

    var end = 0;
    const open_intervals = [];

    events.concat([[2, 24, 24]]).forEach((x) => {
      const xstart = x[0] * 24 + x[1];
      const xend = x[0] * 24 + x[2];
      if (end != xstart) {
        open_intervals.push([end, xstart]);
      }
      end = xend;
    });

    return open_intervals;
  };

  var high = 0;
  const d = {};
  var count = 0;
  const combinations = (curr, schedule, intervals) => {
    if (!(schedule.length in d)) {
      const temp = [];
      schedule.forEach((x) => {
        temp.push([Math.floor(x[1] / 24), x[1] % 24, x[2] % 24, x[0]]);
      });
      d[schedule.length] = temp;
      if (schedule.length > high) high = schedule.length;
    }

    if (curr == intervals.length) {
      if (count == 0) {
        console.log(schedule);
        count = 1;
      }

      return;
    }

    const interval = intervals[curr];
    const start = interval[0];
    const end = interval[1];

    if (schedule.length == 0) {
      for (var i = start; i < end - 8 + 1; i++) {
        combinations(
          curr + 1,
          schedule.concat([["SLEEP", i, i + 8]]),
          intervals
        );
        combinations(curr, schedule.concat([["SLEEP", i, i + 8]]), intervals);
      }
      for (var i = start; i < end - 1 + 1; i++) {
        combinations(curr + 1, schedule.concat([["NAP", i, i + 1]]), intervals);
        combinations(curr, schedule.concat([["NAP", i, i + 1]]), intervals);
      }
    } else {
      const last_sleep_type = schedule[schedule.length - 1][0];
      const last_sleep_end = schedule[schedule.length - 1][2];
      if (last_sleep_type == "NAP") {
        for (
          var i = Math.max(start, last_sleep_end + 7);
          i < end - 5 + 1;
          i++
        ) {
          combinations(
            curr + 1,
            schedule.concat([["SLEEP", i, i + 5]]),
            intervals
          );
          combinations(curr, schedule.concat([["SLEEP", i, i + 5]]), intervals);
        }
      } else {
        for (
          var i = Math.max(start, last_sleep_end + 12);
          i < end - 8 + 1;
          i++
        ) {
          combinations(
            curr + 1,
            schedule.concat([["SLEEP", i, i + 8]]),
            intervals
          );
          combinations(curr, schedule.concat([["SLEEP", i, i + 8]]), intervals);
        }
        for (
          var i = Math.max(start, last_sleep_end + 6);
          i < end - 1 + 1;
          i++
        ) {
          combinations(
            curr + 1,
            schedule.concat([["NAP", i, i + 1]]),
            intervals
          );
          combinations(curr, schedule.concat([["NAP", i, i + 1]]), intervals);
        }
      }
      combinations(curr + 1, schedule, intervals);
    }
  };

  const open_intervals = get_open_intervals(events, food);
  console.log("available slots in 72hrs");
  console.log(open_intervals);

  combinations(0, [], open_intervals);

  console.log("\n\n\n");
  console.log("added");

  d[high].forEach((x) => {
    console.log(x);
  });

  console.log("\n\n\n");

  const final = events.concat(d[high]);
  final.sort((a, b) => {
    return a[0] != b[0] ? a[0] - b[0] : a[1] - b[1];
  });

  const open_intervals_2 = final;
  const open2 = get_open_intervals(open_intervals_2);

  open2.forEach((x) => {
    const start = x[0];
    const end = x[1];

    const add = getRandom(0, 3);
    if (add % 2 == 0) {
      const rand = getRandom(start, end - 1);

      final.push([
        Math.floor(start / 24),
        rand % 24,
        (rand + 1) % 24,
        "EXERCISE",
      ]);
    }
  });

  final.sort((a, b) => {
    return a[0] != b[0] ? a[0] - b[0] : a[1] - b[1];
  });

  return final;
};

const test = builder();

console.log("Final schedule");
test.forEach((x) => {
  console.log(x);
});
