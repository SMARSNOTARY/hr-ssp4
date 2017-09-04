// preImmersive-[testing 04]-writingCodeWell-006-writing "assertWithinRange"
/*
input : starting number, ending number, number to test, test description string
output : passed or FAIL message logged to console
assumptions : only valid values supplied, starting number is lower than ending number
constraints : starting and ending number are included in range

turn starting and ending numbers into an array
check if supplied number is a value in the array
*/
// my version
// function assertWithinRange(low, high, actual, testName) {
//   let rangeArr = [];
//   for (let i = low; i <= high; i++) {
//       rangeArr.push(i);
//   }
//   if ( rangeArr.includes(actual) ) {
//     console.log('passed');
//   } else {
//     console.log(`FAIL [${testName}] "${actual}" not within range ${low} to ${high}`);
//   }
// }
// assertWithinRange(5, 10, 20, 'my test');

// Alexander Mire version (modified to use template strings)
function assertWithinRange(low, high, actual, testName) {
  var message = `FAIL [${testName}] "${actual}" not within range ${low} to ${high}`
  return (actual >= low && actual <= high) ? console.log('passed') : console.log(message)
}
