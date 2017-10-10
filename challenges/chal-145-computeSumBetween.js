// preImmersive-buildingBlocksMastery-145-computeSumBetween

/*
Write a function called “computeSumBetween”.

Given 2 integers, “computeSumBetween” returns the sum between the two given integers, beinning at num1, and excluding num2.

Notes:
* The sum between 1 and 4 is 1 + 2 + 3 = 6.
* If num2 is not greater than num1, it should return 0.
var output = computeSumBetween(2, 5); console.log(output); // --> 9

Your Code Should Pass:

describe("computeSumBetween", function() {
  it("should return a number", function() {
    expect(typeof computeSumBetween(4, 8)).toBe("number");
  });
  it("should sum between the first and second number exclusive", function() {
    expect(computeSumBetween(4, 6)).toBe(9);
  });
  it("should sum between the first and second number exclusive with negatives", function() {
    expect(computeSumBetween(-1, 3)).toBe(2);
  });
  it("should return 0 if the second number is less than the first", function() {
    expect(computeSumBetween(1, -3)).toBe(0);
  });
  it("should return 0 if the 2 numbers are equal", function() {
    expect(computeSumBetween(1, 1)).toBe(0);
  });
});
*/

function computeSumBetween(num1, num2) {
  if (num1 >= num2) { return 0; }
  let sum = 0;
  for (let i = num1; i < num2; i++) {
    sum += i;
  }
  return sum;
}

// Yusaku Kasahara
function computeSumBetween(num1, num2) {
  var sum = num1 >= num2 ? 0 : num1;
  for (var i = num1 + 1; i < num2; i++) {
    sum += i;
  }
  return sum;
}

// Amanda Loftus
function computeSumBetween(num1, num2) {
  var total = 0;
  if (num1 < num2) {
    for (var x = num1; x < num2; x++) {
      total += x;
    }
  }
  return total;
}

// Jacob Seo
function computeSumBetween(num1, num2) {
  if(num1 > num2 || num1 === num2){
    return 0;
  }
  if(num1 === num2 - 1){
    return num1;
  }
  return num1 + computeSumBetween(num1 + 1, num2);
}

// Jeffrey Ng
function computeSumBetween(num1, num2) {
  if(num2 <= num1){
    return 0;
  } else if(num1 === num2 - 1){
    return num1;
  } else {
    return num1 + computeSumBetween(num1 + 1, num2)
  }
}

// MDN: The Array.from() method creates a new Array instance from an array-like or iterable object.
// Syntax: Array.from(arrayLike[, mapFn[, thisArg]])
// Array.from() has an optional parameter mapFn, which allows you to execute a map function on each element of the array (or subclass object) that is being created.
// Jen Diamond
function computeSumBetween(num1, num2) {
  if ((num1 > num2) || (num1 === num2)) {return 0;}

  var range = Array.from(new Array(num2-num1), (x,i) => i + num1);

  return range.reduce(function(a, b){
    return a + b
  });
}
