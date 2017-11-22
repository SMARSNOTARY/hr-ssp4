// challenge-099-computeAverageOfNumbers*

/*
Write a function called “computeAverageOfNumbers”.

Given an array of numbers, “computeAverageOfNumbers” returns their average.

Notes:
* If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

Your Code Should Pass:

describe("computeAverageOfNumbers", function() {
  it("should return a number", function() {
    expect(typeof(computeAverageOfNumbers([6, 8, 10]))).toBe("number");
  });
  it("should return the average of the numbers in the given array", function() {
    expect(computeAverageOfNumbers([6, 8, 10])).toBe(8);
  });
  it("should return the average of negative numbers in the given array", function() {
    expect(computeAverageOfNumbers([-6, -8, -10])).toBe(-8);
  });
  it("should return 0 if given an empty array", function() {
    expect(computeAverageOfNumbers([])).toBe(0);
  });
});
*/

function computeAverageOfNumbers(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return (nums.reduce( (accum, elem) => accum + elem, 0)) / nums.length;
}
