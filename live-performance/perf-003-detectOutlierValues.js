// preImmersive-livePerformance-003-Outliers

/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/

// input: a string of numbers, only one of which will be even or only one of which will be odd
// output: the position in the string of the sole even or sole odd number, 1-indexed (eg, the third number
// will be indicated by 3)
function detectOutlierValue(str) {
  let evens = [];
  let odds = [];
  let numbers = str.split(' ');
  for (let i = 0; i < numbers.length; i++) {
    putNumberIntoEvenOrOddArray(numbers[i], i)
  }
  if (evens.length === 1) {
    return evens[0][1];
  } else if (odds.length === 1) {
    return odds[0][1];
  } else {
    console.log("Something has gone wrong in the determination.")
  }

  function putNumberIntoEvenOrOddArray(num, idx) {
    if (isEven(num)) {
      evens.push([num,idx + 1]);
    } else {
      odds.push([num,idx + 1]);
    }
  }
}

function isEven(num) {
  return num % 2 === 0;
}

// detectOutlierValue("2 4 7 8 10");
let output = detectOutlierValue("1 10 1 1");
