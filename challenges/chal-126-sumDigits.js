// preImmersive-buildingBlocksMastery-126-sumDigits*

/*
Write a function called “sumDigits”.

Given a number, “sumDigits” returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14
If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4
Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the “toString” method, as well as the “Number” function.

Your Code Should Pass:

describe("sumDigits", function() {
  it("should return a number", function() {
    expect(typeof sumDigits(2002)).toBe("number");
  });
  it("should sum the digits of a positive number", function() {
    expect(sumDigits(2002)).toBe(4);
  });
  it("should sum the digits of a negative number", function() {
    expect(sumDigits(-2004)).toBe(2);
  });
  it("should sum return 0 if the number is 0", function() {
    expect(sumDigits(0)).toBe(0);
  });
});
*/

function sumDigits(num) {
  let digits = num.toString().split('');
  if (digits[0] === "-") {
    digits[1] = "-" + digits[1];
    digits.shift();
  }
  return digits.reduce( (sum, elem) => sum + parseInt(elem), 0);
}
