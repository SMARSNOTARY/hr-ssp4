/*
Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

// input: an array of non-negative numbers, a target value
// output: two of the numbers from the array that addup to the target

function findPairForSum(array, target) {
    let results = []
  // loop through array
  for (let i = 0; i < array.length; i++) {
    if (array[i] < target) {
      let difference = target - array[i];
      if (array.indexOf(difference) !== -1) {
          console.log('found a match');
          results.push(array[i]);
          results.push(difference);
        return results;
      }
    }
  }
  return "no pairs found";
}
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
var anArray = [3, 34, 4, 12, 5, 2];
var amatch = anArray.indexOf(5)
console.log(pair); // --> [4, 5]
