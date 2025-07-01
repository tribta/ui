function Stopwatch() {
  let running,
    startTime,
    endTime,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started!!!");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started!!!");
    running = false;
    endTime = new Date();
    second = (endTime.getTime() - startTime.getTime()) / 1000; // useMemo(() => first, [second])
    duration += second;
  };

  this.reset = function () {
    startTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    // set: function (value) {
    //   duration += value;
    // },
  });
}

const sw = new Stopwatch();
