// challenge-065-removeFromBack

/*
Write a function called “removeFromBack”.

Given an array, “removeFromBack” returns the given array with its last element removed.

Notes:
* You should be familiar with the method ‘pop’.

var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]

Your Code Should Pass:

describe("removeFromBack", function() {
  it("should return an array", function() {
    expect(Array.isArray(removeFromBack([1, 2, 3]))).toBe(true);
  });
  it("should remove the last element from a 3-element array", function() {
    expect(removeFromBack([1, 2, 3])).toEqual([1, 2]);
  });
  it("should remove the last element from a 2-element array", function() {
    expect(removeFromBack([1, 2])).toEqual([1]);
  });
  it("should handle an empty array", function() {
    expect(removeFromBack([])).toEqual([]);
  });
});
*/

function removeFromBack(arr) {
  arr.pop();
  return arr;
}

// Jonathan Rojas
function removeFromBack(arr) {
  arr.splice(-1,1);
  return arr;
}

// Syed Ahmed Naqvi
function removeFromBack(arr) {
  return arr.slice(0,arr.length - 1);
}

// easily modified to remove x chars from back
// John MacIsaac
function removeFromBack(arr) {
  arr.splice(arr.length-1, 1);
  return arr;
}

// don't alter the original array
// Justin Yoo
function removeFromBack(arr) {
  var newArr = arr;
  newArr.pop();
  return newArr;
}
