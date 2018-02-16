// challenge-056-getAllElementsButFirst

/*
Write a function called “getAllElementsButFirst”.

Given an array, “getAllElementsButFirst” returns an array with all the elements but the first.

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]

Your Code Should Pass:

describe("getAllElementsButFirst", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllElementsButFirst([4, 5, 6]))).toBe(true);
  });
  it("should return an array with all the elements of the passed in array, except for the first", function() {
    expect(getAllElementsButFirst([4, 5, 6])).toEqual([5, 6]);
  });
  it("should return an empty array when passed in a single element array", function() {
    expect(getAllElementsButFirst([4])).toEqual([]);
  });
  it("should return an empty array when passed in an empty array", function() {
    expect(getAllElementsButFirst([])).toEqual([]);
  });
});
*/

function getAllElementsButFirst(array) {
  return array.slice(1);
}

// Bethany Shao
function getAllElementsButFirst(array) {
  return array.splice(1);  // Angelo Deleon:  return array.splice(0,1);
}

// Arianna Kellogg
function getAllElementsButFirst(array) {
  array.shift();   // Anthony William Chang:  array.shift(0);
  return array;
}

// Dino Firmalino
const getAllElementsButFirst = (arr) => arr.splice(1);
