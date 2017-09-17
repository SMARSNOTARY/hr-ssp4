// preImmersive-buildingBlocksMastery-117-getLongestElement*
Write a function called “getLongestElement”.

Given an array, “getLongestElement” returns the longest string in the given array.

Notes:
* If there are ties, it returns the first element to appear.
* If the array is empty, it should return an empty string.

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

Your Code Should Pass:

describe("getLongestElement", function() {
  it("should return a string", function() {
    expect(typeof(getLongestElement(["one", "two", "three"]))).toBe("string");
  });
  it("should return the longest element in an array", function() {
    expect(getLongestElement(["one", "two", "three"])).toBe("three");
  });
  it("should return the first longest element in an array when there are ties", function() {
    expect(getLongestElement(["one", "two", "one"])).toBe("one");
  });
});
*/

function getLongestElement(arr) {
  if (arr.length === 0) {
    return '';
  }
  return arr.reduce( (longest, elem) => (longest.length > elem.length) ? longest : elem );
}

// function getLongestElement(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   const lengths = arr.map( elem => elem.length );
//   let longest = Math.max(...lengths);
//   for (let elem of arr) {
//     if (elem.length === longest) {;
//       return elem;
//     }
//   }
// }
