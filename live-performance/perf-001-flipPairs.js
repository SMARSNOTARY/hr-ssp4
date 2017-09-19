// preImmersive-livePerformance-001-Flipper

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

// input: a string
// output: a string with each pair of characters in the input string flipped

function flipPairs(str) {
  let flippedStr = '';
  let origStringAsArray = str.split('');
  for (let i = 0; i < Math.round(str.length/2); i++) {
    let twoChars = grabTwoCharacters(origStringAsArray);
    flippedStr += twoChars;
  }
}

function grabTwoCharacters(arr) {
  let char1 = arr.splice(0,1);
  let char2 = arr.splice(0,1);
  let twoCharArray = char2.concat(char1);
  let twoChars = twoCharArray.join('');
  return twoChars;
}
// var abc = ['a','b','c'];
// grabTwoCharacters(abc);
// console.log(abc);
// grabTwoCharacters(abc);
// console.log(abc);
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
