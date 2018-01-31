// challenge-064-countWords

/*
Write a function called “countWords”.

Given a string, “countWords” returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

Your Code Should Pass:

describe("countWords", function() {
  it("should return an object", function() {
    expect(typeof countWords("ask a bunch try a bunch get a bunch")).toBe("object");
  });
  it("should return an object where each property gives a word in the string, with its number of appearances", function() {
    var result = {
      ask: 1,
      a: 2,
      bunch: 2,
      get: 1
    };
    expect(countWords("ask a bunch get a bunch")).toEqual(result);
  });
  it("should return an object empty object if passed an empty string", function() {
    expect(countWords("")).toEqual({});
  });
});
*/

function countWords(str) {
  let wordsObj = {};
  if (str === '') {
    return wordsObj;
  } // solution assumes no punctuation characters
  let wordsArr = str.split(' ');
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsObj.hasOwnProperty(wordsArr[i]) === false) {
      wordsObj[wordsArr[i]] = 1;
    } else {
      wordsObj[wordsArr[i]]++;
    }
  }
  return wordsObj;
}

// Ana Stijovic
function countWords(str) {
  var output = {};
  var words = str.split(" ");

  if(str.length === 0){
    return output
}
  words.forEach(function(element){
  output[element] ? output[element] ++ : output[element] = 1
})
  return output
}

// Bowen Li
function countWords(str) {
  var words = str.split(' ');
  var ans = {}
  if (str.length === 0) {
    return ans;
  }
  for (var i=0; i<words.length; i++) {
    ans[words[i]] = ans[words[i]] + 1 || 1
  }
  return ans;
}

// Four similar approaches, with differing levels of clarity
// Edward Kim
function countWords(str) {
  return str.length ? str.split(' ').reduce((acc, el) => {
    acc[el] = acc[el] + 1 || 1;
    return acc;
  }, {}) : {};
}

// Michael Diodoro
function countWords(str) {
  return str.length ? str.split(' ').reduce((obj, word) => {
    if (obj[word]) {
      obj[word]++;
      return obj;
    }
    obj[word] = 1;
    return obj;
  }, {}) : {};
}

// Sukhpaul Nijjar
function countWords(str) {
  if(str.length > 0) {
    return str.split(' ').reduce((obj, word) => {
      obj[word] ? obj[word]++ : obj[word] = 1;
      return obj;
    },{});
  }
  return {};
}

// Yusaku Kasahara
function countWords(str) {
  return str.split(' ').reduce((output, word) => {
    !word.length || (output[word] = output[word] + 1 || 1);
    return output;
  }, {});
}
