// preImmersive-[evaluation 00]-writingCodeWell-001-variableJuggling01

/*
Take a look at the following steps of variable assignment:

var x = 7;
var y = 8;
var z = 9;

x = y + z;
z = x;
x = y;
z = x + y;
y = z - x;
z = y;
x = y * z;
z = y / z;
x = (z - x) / (y + z);
*/

var answer = {
  finalValueOfX: -7 // CHANGE 'null' to correct answer
};

function keepTrackOfX() {
  // after solving manually, track x, y and z in the console
  var x = 7;
  var y = 8;
  var z = 9;

  x = y + z;
  z = x;
  x = y;
  z = x + y;
  y = z - x;
  z = y;
  x = y * z;
  z = y / z;
  x = (z - x) / (y + z);
  return x;
}
