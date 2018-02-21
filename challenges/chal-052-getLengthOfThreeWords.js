// challenge-052-getLengthOfThreeWords

/*
Write a function called “getLengthOfThreeWords”.

Given 3 words, “getLengthOfThreeWords” returns the sum of their lengths.

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14

Your Code Should Pass:

describe("getLengthOfThreeWords", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfThreeWords("three", "random", "words")).toBe("number");
  });
  it("should return the sum length of three words", function() {
    expect(getLengthOfThreeWords("some", "other", "words")).toBe(14)
  });
});
*/

function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;
}

// Mohamed Bouyagui Gassama
const getLengthOfThreeWords = (word1, word2, word3) => {
  return (word1 + word2 + word3).length;
};

// Dino Firmalino
const getLengthOfThreeWords = (str1, str2, str3) => str1.length + str2.length + str3.length;

// Amanda Loftus
function getLengthOfThreeWords(word1, word2, word3) {
  var args = [...arguments];
  return args.reduce(function(acc, val) {
    return acc + val.length;
  }, 0);
}

// Yusaku Kasahara
function getLengthOfThreeWords(word1, word2, word3) {
  return [...arguments].reduce(function(acc, current){
    return acc + current.length
  }, 0);
}
