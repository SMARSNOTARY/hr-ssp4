// challenge-057-getAllElementsButLast

/*
Write a function called “getAllElementsButLast”.

Given an array, “getAllElementsButLast” returns an array with all the elements but the last.

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]

Your Code Should Pass:

describe("getAllElementsButLast", function() {
  it("should return an array", function() {
    expect(Array.isArray(getAllElementsButLast([4, 5, 6]))).toBe(true);
  });
  it("should return an array with all the elements of the passed in array, except for the last", function() {
    expect(getAllElementsButLast([4, 5, 6])).toEqual([4, 5]);
  });
  it("should return an empty array when passed in a single element array", function() {
    expect(getAllElementsButLast([4])).toEqual([]);
  });
  it("should return an empty array when passed in an empty array", function() {
    expect(getAllElementsButLast([])).toEqual([]);
  });
});
*/

function getAllElementsButLast(array) {
  return array.slice(0,-1);
}

// Andy Qi
function getAllElementsButLast(array) {
  array.pop ();
  return array;
}

// austin chin long wong
function getAllElementsButLast (a) {
    return a.splice(0,a.length-1)
}

// Dino Firmalino
const getAllElementsButLast = (arr) => arr.slice(0, arr.length - 1);
