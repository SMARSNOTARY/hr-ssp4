// preImmersive-livePerformance-005-Find the pair
/*
Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

// input: array of numbers, and a single number that is our target
// output: an array containing a pair of numbers from the array, that when added together equal the target

function findPairForSum(array, target) {
  let smallerNumbers = array.filter(function(element) {
    return element <= target;
  })
// loop through the array
  let answer = [];
  for (let i = 0; i < smallerNumbers.length; i++) {
    let matchingNumber = target - smallerNumbers[i];
    if (smallerNumbers.includes(matchingNumber)) {
      answer.push(smallerNumbers[i]);
      answer.push(matchingNumber);
      break;
    }
  }
  return answer;
}
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
