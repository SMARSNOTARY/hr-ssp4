// challenge-040-getLastElement

/*
Write a function called “getLastElement”.

Given an array, “getLastElement” returns the last element of the given array.

Notes:
* If the given array has a length of 0, it should return ‘undefined’.

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4

Your Code Should Pass:

describe("getLastElement", function() {
  it("should return the last element of an array", function() {
    expect(getLastElement([1, 3, 5])).toBe(5);
  });
  it("should return undefined if the array is empty", function() {
    expect(getLastElement([])).toBe(undefined);
  });
});
*/

function getLastElement(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[array.length-1];
}

// Michael Diodoro
function getLastElement(array) {
  return array[array.length - 1];
}

// Kegan Kinser
function getLastElement(array) {
  return array.pop();
}

// Dino Firmalino
const getLastElement = (arr) => arr.pop();

// Elvin Mooc
function getLastElement(array) {
  return array.slice(-1)[0]
}
