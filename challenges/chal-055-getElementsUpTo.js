// challenge-055-getElementsUpTo

/*
Write a function called “getElementsUpTo”.

Given an array and an index, “getElementsUpTo” returns an array with all the elements up until, but not including, the element at the given index.

Notes:
* In order to do this you should be familiar with the ‘slice’ method.

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
console.log(output); // --> ['a', 'b', 'c']

Your Code Should Pass:

describe("getElementsUpTo", function() {
  it("should return an array", function() {
    expect(Array.isArray(getElementsUpTo([4, 5, 6], 2))).toBe(true);
  });
  it("should return an array with all the elements of the passed in array up until the nth", function() {
    expect(getElementsUpTo([4, 5, 6], 2)).toEqual([4, 5]);
  });
  it("should return an empty array when passed in a single element array", function() {
    expect(getElementsUpTo([4], 0)).toEqual([]);
  });
  it("should return a mirror of the original array when passed an n out of range", function() {
    expect(getElementsUpTo([4], 10)).toEqual([4]);
  });
  it("should return an empty array when passed in an empty array", function() {
    expect(getElementsUpTo([])).toEqual([]);
  });
});
*/

function getElementsUpTo(array, n) {
  return array.slice(0,n);
}

// Houssein Abil
function getElementsUpTo(array, n) {
  return array.splice(0, n);   // Jessica Thompson:  array.splice(n); return array;
}

// Jen Diamond
function getElementsUpTo(arr, n){
  if ( arr.length === 0 ){ return [] }
  if ( n > arr.length ){ return arr }
  if ( arr.length === 1){ return [] }
  if ( n === 0 ){ return [] }
  return arr.slice(0, n)
}
