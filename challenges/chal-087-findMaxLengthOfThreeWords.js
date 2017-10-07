// preImmersive-buildingBlocksMastery-087-findMaxLengthOfThreeWords

/*
Write a function called “findMaxLengthOfThreeWords”.

Given 3 words, “findMaxLengthOfThreeWords” returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3

Your Code Should Pass:

describe("findMaxLengthOfThreeWords", function() {
  it("should return a string", function() {
    expect(typeof findMaxLengthOfThreeWords("a", "be", "see")).toBe("number");
  });
  it("should return the maximimum length of three words", function() {
    expect(findMaxLengthOfThreeWords("a", "be", "see")).toBe(3);
  });
  it("should return the maximimum length of three words when there is a tie", function() {
    expect(findMaxLengthOfThreeWords("these", "three", "words")).toBe(5);
  });
});
*/

function findMaxLengthOfThreeWords(word1, word2, word3) {
  return Math.max(word1.length, word2.length, word3.length);
}
