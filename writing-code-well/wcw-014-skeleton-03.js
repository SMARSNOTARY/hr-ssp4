// preImmersive-[skeleton 03]-writingCodeWell-014-read my skeleton to understand the problem statement

function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  let chars = word.split('');
  // Count the instances of each letter
  let countChars = chars.reduce(function(counts,char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {})
  // Iterate all the counts and find the highest
  let maxCount = 0;
  for (let j = 0; j < chars.length; j++) {
    if (countChars[chars[j]] > maxCount) {
      maxCount = countChars[chars[j]];
    }
  }
  return maxCount;
  // Return this word's max repeat count
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  let textArr = text.split(' ');
  textArr.forEach(function(word) {
    var repeatCountForWord = findMaxRepeatCountInWord(word);
    if (repeatCountForWord > maxRepeatCountOverall) {
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = word;
    }
  });
  return wordWithMaxRepeatCount;
}
var input = 'foo bar bazzz';
var actual = findFirstWordWithMostRepeatedChars(input);
console.log(actual);
