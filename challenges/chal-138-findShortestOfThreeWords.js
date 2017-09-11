// preImmersive-buildingBlocksMastery-138-findShortestOfThreeWords*

/*
Write a function called “findShortestOfThreeWords”.

Given 3 strings, “findShortestOfThreeWords” returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfOfThreeWords(word1, word2, word3) {
  return [...arguments].reduce((shortest, word) => shortest.length > word.length ? word : shortest);
}

// function findShortestOfOfThreeWords(word1, word2, word3) {
//   return [...arguments].reduce((shortest, word) => shortest.length > word.length ? shortest = word : shortest);
// }
