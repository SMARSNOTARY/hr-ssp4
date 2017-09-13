// preImmersive-buildingBlocksMastery-129-findSmallestNumberAmongMixedElements*

/*
Write a function called “findSmallestNumberAmongMixedElements”.

Given an array of mixed elements, “findSmallestNumberAmongMixedElements” returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr
    .filter( elem => typeof elem === 'number')
    .reduce( (smallestNum, elem) => (smallestNum === 0 || elem < smallestNum) ? elem : smallestNum, 0 );
}
