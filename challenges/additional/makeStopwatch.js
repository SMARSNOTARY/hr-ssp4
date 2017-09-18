var makeStopwatch = function() {
  var elapsed = 0;
  var stopwatch = function() { return elapsed; };
  var increase = function() { elapsed++; };
  setInterval(increase, 1000);
  return stopwatch;
}

var stopwatch1 = makeStopwatch();
var stopwatch2 = makeStopwatch();
stopwatch1();
stopwatch2();
