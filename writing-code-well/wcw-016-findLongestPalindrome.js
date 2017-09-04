// preImmersive-[skeleton 05]-writingCodeWell-016-find longest palindrome

/*
Find the longest single-word palindrome within a phrase.
The phrase will only contain letters (no symbols, punctuation, or numbers).
Your palindrome detection should be case-insensitive.
If there are multiple longest palindromes of equal length, return the last one.
*/
// input: sentence or phrase with no symbols, punctuation or numbers
// output: longest palindrome
// constraints: of equally long palindromes, identify the last
// assumption: no palindromes extend beyond word boundaries

function findLongestPalindrome(sentence) {
  let words = sentence.split(' ');
  let palindromes = words.filter(function(word) {
    return isPalindrome(word);
  });
  console.log(palindromes);
  palindromes.sort(sortAscendingByLength).reverse();
  return palindromes[0];
}

function reverseString(string) {
  let reversed = string.split('').reverse().join('');
  return reversed;
}

function isPalindrome(word) {
  return word === reverseString(word);
}

function sortAscendingByLength(a, b) {
  return a.length - b.length;
}
var phrase = 'Our civic duty is to kayak without a ';
// isPalindrome('hannah');
findLongestPalindrome(phrase);
