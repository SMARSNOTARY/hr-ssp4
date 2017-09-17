// preImmersive-buildingBlocksMastery-121-computeSumOfAllElements*

/*
Write a function called “computeSumOfAllElements”.

Given an array of numbers, “computeSumOfAllElements” returns the sum of all the elements in the given array.

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6

Your Code Should Pass:

describe("computeSumOfAllElements", function() {
  it("should return a number", function() {
    expect(typeof computeSumOfAllElements([1, 2, 4])).toBe("number");
  });
  it("return the sum of all elements", function() {
    expect(computeSumOfAllElements([1, 2, 4])).toBe(7);
  });
  it("return 0 if the passed in array is empty", function() {
    expect(computeSumOfAllElements([])).toBe(0);
  });
});
*/

function computeSumOfAllElements(arr) {
  return arr.reduce( (sum, elem) => sum + elem, 0 );
}
