// preImmersive-buildingBlocksMastery-086-findMinLengthOfThreeWords

/*
Write a function called “findMinLengthOfThreeWords”.

Given 3 words, “findMinLengthOfThreeWords” returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

Your Code Should Pass:

describe("findMinLengthOfThreeWords", function() {
  it("should return a number", function() {
    expect(typeof findMinLengthOfThreeWords("a", "be", "see")).toBe("number");
  });
  it("should return the minimum length of three words", function() {
    expect(findMinLengthOfThreeWords("a", "be", "see")).toBe(1);
  });
  it("should return the minimum length of three words when there is a tie", function() {
    expect(findMinLengthOfThreeWords("these", "three", "words")).toBe(5);
  });
});
*/

function findMinLengthOfThreeWords(word1, word2, word3) {
  let len1 = word1.length;
  let len2 = word2.length;
  let len3 = word3.length;
  return len1 <= len2 ? ( len1 <= len3 ? len1 : len3 ) : ( len2 <= len3 ? len2 : word3.length )
  // return word1.length <= word2.length ? ( word1.length <= word3.length ? word1.length : word3.length ) : ( word2.length <= word3.length ? word2.length : word3.length )
}
