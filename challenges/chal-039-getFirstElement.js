// challenge-039-getFirstElement

/*
Write a function called “getFirstElement”.

Given an array, “getFirstElement” returns the first element of the given array.

Notes:
* If the given array has a length of 0, it should return undefined.

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1

Your Code Should Pass:

describe("getFirstElement", function() {
  it("should return the first element of an array", function() {
    expect(getFirstElement([1, 3, 5])).toBe(1);
  });
  it("should return undefined if the array is empty", function() {
    expect(getFirstElement([])).toBe(undefined);
  });
});
*/

function getFirstElement(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];

// Diana Tecson
function getFirstElement(array) {
  // input: array
  // output: first element of array

  // if array has length of 0, return undefined
  // use shift method to obtain first element
  return array.shift();
}

// Dino Firmalino
const getFirstElement = (arr) => arr[0];
