/*
Flip every pair of characters in a string.

Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

Your Code Should Pass:

describe("The Problem", function() {
  it("intentionally does not have any working tests.", function() {
    expect(0).toBe(1);
  });
});
*/

//  input: a string
//  output: a string in which every pair of characters in the original string will be flipped
// constraints: none
// edge cases: none

function flipPairs(str) {
  let workingCopy = str;
  let stringWithPairsReversed = '';
  // turn string into array
  let workingCopyArr = [...str];
  if (workingCopyArr.length % 2 === 1) {
    workingCopyArr.push(' ');
  }
  // loop
  do {
    let pair = workingCopyArr[1] + workingCopyArr[0];
    stringWithPairsReversed += pair;
    workingCopyArr.shift();
    workingCopyArr.shift();
  } while (workingCopyArr.length > 0);
  return stringWithPairsReversed;
  // read first two characters from array then remove from the array

    // flip the two characters' order and construct a new "pair"
  // insert the new pair into a new string
  // return the completed new string
}
