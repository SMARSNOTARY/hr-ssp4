// interviewer: Beth Nelson
// Tuesday, 19 September 2017
// 30 mins, at 7:30 Eastern

/*
Write a function named intersection, which takes two arrays as input, and
returns a new array as output. The output array should contain all (and
only) the elements that appear in both input arrays. To determine equality,
the elements should be compared using strict equals (===). The order of
result values should match the order they appear within first array.
*/

// example use
intersection([1, 2, 3, 4, 5], [5, 2, 6, 8, 0])
// returns [2, 5]

// inputs: two arrays, with some elements possible in both
// output: a single array of only those elements in both arrays
function intersection(arr1, arr2) {
  let resultsArr = [];
  // loop through first array
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      resultsArr.push(arr1[i]);
    }
  }
  return resultsArr;
  // check if element is in second array
  // if so, push into results array
}
// var output = intersection([1, 2, 3, 4, 5], [5, 2, 6, 8, 0]);
// console.log(output);


// ************************** *******************************


/*
Write a function that calculates the digit sum of a number. Use a higher order
function (such as forEach, map, reduce) in your solution.
*/

// example use
// digitSum(1374)
// returns 15 (1 + 3 + 7 + 4 = 15)

// input: a positive number
// output: a number that is the sum of the digits of the input number

// arr.reduce(callback[, initialValue])
// Number("5")

function digitSum(num) {
  let arr = num.toString().split('');
  return arr.reduce(function(sum, elem) {
    return sum = sum + Number(elem);
  }, 0);
}

var output = digitSum(1374);
console.log(output);
