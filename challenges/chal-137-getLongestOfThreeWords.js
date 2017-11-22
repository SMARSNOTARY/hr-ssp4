// challenge-137-getLongestOfThreeWords*

/*
Write a function called “getLongestOfThreeWords”.

Given 3 words, “getLongestOfThreeWords” returns the longest of three words.

Notes:
* If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
*/

function getLongestOfThreeWords(word1, word2, word3) {
  return [...arguments].reduce( (longest, word) => (longest.length >= word.length) ? longest : word );
}

// function getLongestOfThreeWords(word1, word2, word3) {
//   return [word1, word2, word3].reduce( (longest, word) => (longest.length >= word.length) ? longest : word );
// }

// function getLongestOfThreeWords(word1, word2, word3) {
//   let longestWord =  (word1.length >= word2.length) ? word1 : word2;
//   longestWord =  (longestWord.length >= word3.length) ? longestWord : word3;
//   return longestWord;
// }
