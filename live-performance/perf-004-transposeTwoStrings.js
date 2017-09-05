// preImmersive-livePerformance-004-Transpose
/*You will be given an array that contains two strings. Your job is to
create a function that will take those two strings and transpose them,
so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W
e o
l r
l l
o d
*/

// input: an array containing two strings
// output: an array containing three-character strings, the number being the
//   length of the longer of the two words and each string containing a character
//   from the first string and from the matching index of the second string

function transposeTwoStrings(array) {
  let resultsArray = [];
  let str1 = array[0];
  let str2 = array[1];
  let length1 = str1.length;
  let length2 = str2.length;
  let longerLength = length1;
  if (length1 > length2) {
    let difference = length1 - length2;
    let equalizer = " ".repeat(difference);
    str2 += equalizer;
  } else if (length1 < length2) {
    let difference = length2 - length1;
    let equalizer = " ".repeat(difference);
    str1 += equalizer;
    longerLength = length2;
  }
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');
  for (let i = 0; i < longerLength; i++) {
    let combinationStr = str1Arr[i] + ' ' + str2Arr[i];
    resultsArray.push(combinationStr);
  }
  return resultsArray;
}

var newArray2 = transposeTwoStrings(['Hello-o','World']);
console.log(newArray2);
