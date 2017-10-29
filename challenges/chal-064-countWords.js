// preImmersive-buildingBlocksMastery-064-countWords

/*
Write a function called “countWords”.

Given a string, “countWords” returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

Your Code Should Pass:

describe("countWords", function() {
  it("should return an object", function() {
    expect(typeof countWords("ask a bunch try a bunch get a bunch")).toBe("object");
  });
  it("should return an object where each property gives a word in the string, with its number of appearances", function() {
    var result = {
      ask: 1,
      a: 2,
      bunch: 2,
      get: 1
    };
    expect(countWords("ask a bunch get a bunch")).toEqual(result);
  });
  it("should return an object empty object if passed an empty string", function() {
    expect(countWords("")).toEqual({});
  });
});
*/

function countWords(str) {
  let wordsObj = {};
  if (str === '') {
    return wordsObj;
  } // solution assumes no punctuation characters
  let wordsArr = str.split(' ');
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsObj.hasOwnProperty(wordsArr[i]) === false) {
      wordsObj[wordsArr[i]] = 1;
    } else {
      wordsObj[wordsArr[i]]++;
    }
  }
  return wordsObj;
}
