// challenge-038-getNthElement

/*
Write a function called “getNthElement”.

Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.

Notes:
* If the array has a length of 0, it should return ‘undefined’.

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3

Your Code Should Pass:

describe("getNthElement", function() {
  it("should return the nth element of an array", function() {
    expect(getNthElement([1, 3, 5], 1)).toBe(3);
  });
  it("should return undefined if the array is empty", function() {
    expect(getNthElement([], 1)).toBe(undefined);
  });
});
*/

function getNthElement(array, n) {
  if (array.length === 0) {
    return undefined;
  }
  return array[n];
}

// Dino Firmalino
const getNthElement = (arr, n) => arr[n];
