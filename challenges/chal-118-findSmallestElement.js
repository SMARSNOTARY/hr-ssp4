// preImmersive-buildingBlocksMastery-118-findSmallestElement*

/*
Write a function called “findSmallestElement”.

Given an array of numbers, “findSmallestElement” returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

Your Code Should Pass:

describe("findSmallestElement", function() {
  it("should return a number", function() {
    expect(typeof findSmallestElement([3, 5, 3, 1])).toBe("number");
  });
  it("should return the smallest element in an array", function() {
    expect(findSmallestElement([3, 5, 3, 1])).toBe(1);
  });
  it("should return the smallest element in an array when there are ties", function() {
    expect(findSmallestElement([3, 1, 3, 1, 5])).toBe(1);
  });
  it("should return the smallest element in an array when they are all negative", function() {
    expect(findSmallestElement([-1, -5, -3])).toBe(-5);
  });
  it("should return 0 if the array is empty", function() {
    expect(findSmallestElement([])).toBe(0);
  })
});
*/

function findSmallestElement(arr) {
  if (arr.length === 0) { return 0; }
  return arr.reduce( (smallest, elem) => (smallest < elem) ? smallest : elem );
}

// function findSmallestElement(arr) {
//   if (arr.length === 0) { return 0; }
//   return Math.min(...arr);
// }
