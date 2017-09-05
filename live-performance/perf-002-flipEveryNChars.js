// preImmersive-livePerformance-002-Big Flipper

function flipEveryNChars(str, n) {
  // convert the string into an array of characters
  // grab n number of characters destructively
  // reverse those characters' order
  // reconvert to a string, add them to what is initially a blank result string
  let resultStr = '';
  let charArray = str.split('');
  for (let i = 0; i < Math.trunc((str.length / n) + 1); i++) {
      console.log(charArray, i);
    let group = charArray.splice(0,n);
    resultStr +=  group.reverse().join('');
  }
  return resultStr;
}
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Notes:
// I made two mistakes when entering the code:
// - I mistakenly entered > when I meant < in the stop condition of the for loop
// - I mistakenly entered =+ when I intended += adding characters to the string
//   (this is a typo I've made more than once)
// I did not find places to assert what should be happening
// I could have broken off the splicing to make that operation easier to check
// or I could have console.logged that line to check
// Ditto with the reversing, joining and concatenating to the resultStr
