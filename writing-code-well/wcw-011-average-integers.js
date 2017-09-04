// preImmersive-[skeleton 00]-writingCodeWell-011-average integers

/*
Use the skeleton provided to write a working implementation.

Notes:
* Do not leave any functions in the skeleton unused.
* Test that your implementation works.

Specifically – your code reviewer should be able to just press the [Run] button and see convincing evidence that your code works, because of:
a) the categorical reasoning displayed by your tests
b) the line(s) of output in the console log saying “passed” coming from those tests
*/

// Done with Benji Richards

/////START////

//Input: Array of numbers
//Output: return a number, represents avg. of numbers in array
//Constraints:
//Edge Cases:
//Assumptions: get valid number, no empty array, will be array, not infinite

function average(numbers){
  var total = sum(numbers);
  var length = numbers.length;
  return total/length;
}

function sum(numbers) {
// reduce numbers to a single total
  return numbers.reduce(function(total, element){
    return total += element;
  });
}

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log('Passed');
  } else {
    console.log('FAILED [' + testName + '] Expected  ' + expected + ', but got ' + actual);
  }
}

function testOfTotal(){
  let testName = 'adds all the elements together correctly';
  let input = [1, 2, 4, 8, 2, 1];
  let actual = sum(input);
  let expected = 18;
  assertEqual(actual, expected, testName);
}
//   testOfTotal();

function testOfAverage(){
  let testName = 'should give average of elements in array';
  let input = [1, 2, 4, 9, 2, 1];
  let actual = average(input);
  let expected = 3;
  assertEqual(actual, expected, testName);
}

testOfAverage();
