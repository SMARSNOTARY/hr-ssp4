// preImmersive-buildingBlocksMastery-128-findShortestWordAmongMixedElements*

/*
Write a function called “findShortestWordAmongMixedElements”.

Given an array, “findShortestWordAmongMixedElements” returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

Your Code Should Pass:

describe("findShortestWordAmongMixedElements", function() {
  it("should return a string", function() {
    expect(typeof findShortestWordAmongMixedElements(["these", "are", "strings"])).toBe("string");
  });
  it("should return the shortest string in an array", function() {
    expect(findShortestWordAmongMixedElements([3, "word", 5, "up", 3, 1])).toBe("up");
  });
  it("should return the shortest string in an array that appears first when there are ties", function() {
    expect(findShortestWordAmongMixedElements(["word", 3, 5, 3, "yo", "up", 1, 5])).toBe("yo");
  });
  it("should return an empty string when the array is empty", function() {
    expect(findShortestWordAmongMixedElements([])).toBe("");
  });
  it("should return an empty string there are no strings", function() {
    expect(findShortestWordAmongMixedElements([1, 2, 4])).toBe("");
  });
});
*/

function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0) { return ''; }
  let allStrings = arr.filter( elem => (isString(elem) ) );
  if (allStrings.length === 0) { return ''; }
  // if (allStrings.length === 1) { return allStrings[0]; }
  return allStrings.reduce( (shortest, elem) => (shortest.length <= elem.length) ? shortest : elem );

  function isString(elem) {
    return (typeof elem === 'string') ? true : false;
  }
}


// function findShortestWordAmongMixedElements(arr) {
//   if (arr.length === 0) {
//     return '';
//   }
//   let shortest;
//   for (let elem of arr) {
//     if (!isString(elem)) {
//       continue;
//     } else if (shortest === undefined) {
//       shortest = elem;
//       continue;
//     } else {
//       if (elem.length < shortest.length)
//         shortest = elem;
//     }
//   }
//   return shortest || '';

//   function isString(elem) {
//     return (typeof elem === 'string') ? true : false;
//   }
// }
