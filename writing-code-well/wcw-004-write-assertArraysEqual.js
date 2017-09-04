// preImmersive-[testing 02]-writingCodeWell-004-writing "assertArraysEqual"

/*
Write an “assertArraysEqual” function from scratch.

Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).

Do not use JSON.stringify(), Array.join(), or any other “convert the array to a string so I can compare two strings” type of technique to implement this.

Examples

SUCCESS CASE
var expected = ['b', 'r', 'o', 'k', 'e', 'n']; var actual = 'broken'.split(''); assertArraysEqual(actual, expected, 'splits string into array of characters'); // console output: // passed
FAILURE CASE
var expected = [1, 1, 2, 3, 5, 8, 13]; var actual = generateFirstNFibonaccis(7); assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers'); // console output: // FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"
*/

// input : array from some source, a second array whose contents should match the first array, a description of the test
// outout : string representing passed or failed, with details for failing test
// assumptions : the array being tested contains only scalar values
// constraints : do not use JSON.stringify, Array.join() or similar tools
// edge cases : none
//
function assertArraysEqual(actual, expected, testName) {
// check whether two arrays have the same length
// compare each element of the first array to the element with the same index in the second array
// if both comparisons pass, send 'passed' message to console
// otherwise send FAILED message with specifics
  var passesLengthTest = hasEqualLength( actual, expected );
  if ( passesLengthTest === true ) {
    var passesComparisonTest = compareEachElementInArray( actual, expected );
  }
  if ( passesLengthTest && passesComparisonTest ) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected \''${expected}\'', but got \''${actual}\'`)
  }
}

function hasEqualLength( arr1, arr2 ) {
  return arr1.length === arr2.length;
}

// function compareEachElementInArray( arr1, arr2 ) {
//   // loop through each element in arr1 and compare to element in arr2 at the same index
//   return arr1.reduce(function( isSame, element, idx) {
//     console.log( 'isSame: ' + isSame + ' element: ' + element + ' index: ' + idx + ' arr2[idx]: ' + arr2[idx]);
//    return (element === arr2[idx]) ? true : false;
//   }, true);
// } // this comparison doesn't stay false when proceeding beyond different element

function compareEachElementInArray( arr1, arr2 ) {
  // loop through each element in arr1 and compare to element in arr2 at the same index
  return arr1.reduce(function( isSame, element, idx) {
//     console.log( 'isSame: ' + isSame + ' element: ' + element + ' index: ' + idx);
   if (element === arr2[idx]) {
     if (isSame === false) {
       return false;
     } else {
       return true;
     }
   } else {
     return false;
   }

  }, true);
}

function generateFirstNFibonaccis(num) {
  // generates arrayfirst num elements of Fibonacci series
  return [1,1,2,3];
}
// var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
// var actual = 'broken'.split('');
// var expected = [1, 1, 2, 3, 5, 8, 13];
// var actual = [1, 1, 2, 3, 5, 8, 12];
var expected = [-5, '0', 5];
var actual = [-5, 0, 5];
compareEachElementInArray ( actual, expected );
// var expected = [1, 1, 2, 3, 5, 8, 13];
// var actual = generateFirstNFibonaccis(7);
// assertArraysEqual ( actual, expected, 'generates first 7 Fibonacci numbers');
