// challenge-061-countCharacter

/*
Write a function called “countCharacter”.

Given a string input and a character, “countCharacter” returns the number of occurences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

Your Code Should Pass:

describe("countCharacter", function() {
  it("should return a number", function() {
    expect(typeof countCharacter("say what!?", "a")).toBe("number");
  });
  it("should return the number of occurences of a character in a string when the character exists", function() {
    expect(countCharacter("say what!?", "a")).toBe(2);
  });
  it("should return the number of occurences of a character in a string when the character does not exist", function() {
    expect(countCharacter("say what!?", "x")).toBe(0);
  });
  it("should return the number of occurences of a non-alphanumeric character in a string when the character exists", function() {
    expect(countCharacter("say what!?", " ")).toBe(1);
  });
});
*/

function countCharacter(str, char) {
  if (str.indexOf(char) === -1) {
    return 0;
  } else {
    var regex = new RegExp(char, "gi");
    var matches_array = str.match(regex);
    return matches_array.length;
  }
}

// Amanda Loftus
function countCharacter(str, char) {
  var count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === char) {
      ++count;
    }
  }
  return count;
}

// Benji Richards
function countCharacter(str, char) {
  return(str.split(char).length - 1);
}

// Elizabeth Bland
function countCharacter(str, char) {
  if (char) return str.split(char).length - 1;
  return 0;
}

// Calvin Wong
function countCharacter(str, char) {
  var arr = str.split('');
  var count = arr.filter((a) => {
    return a === char;
  })
  return count.length;
}

// Michael Diodoro
function countCharacter(str, char) {
  return str.split('').reduce((acc, value) => {
    if (value === char) {
      acc++;
    }
    return acc;
  }, 0);
}

// Wayne Harris
function countCharacter(str, char) {
  var lowerCase = str.toLowerCase();
  var numOfChar = 0;
  for (var i = 0; i < lowerCase.length; i++) {
    if (lowerCase.charAt(i) === char) {
      numOfChar++;
    }
  }
  return numOfChar;
}
