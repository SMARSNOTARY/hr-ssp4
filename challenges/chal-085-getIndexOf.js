// challenge-085-getIndexOf

/*
Write a function called “getIndexOf”.

Given a character and a string, “getIndexOf” returns the first position of the given character in the given string.

Notes:
* Strings are zero indexed, meaning the first character in a string is at position 0.
* When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
* If the character does not exist in the string, it should return -1.
* Do not use the native indexOf function in your implementation.

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2

Your Code Should Pass:

describe("getIndexOf", function() {
  it("should not use indexOf", function() {
    var body = getIndexOf.toString();
    expect(/indexOf/.test(body)).toBe(false);
    expect(getIndexOf("a", "I am a hacker")).toBe(2);
  });
  it("should return a number", function() {
    expect(typeof getIndexOf("a", "I am a hacker")).toBe("number");
  });
  it("should return the index of the first occurence of a string", function() {
    expect(getIndexOf("a", "I am a hacker")).toBe(2);
  });
  it("should return -1 when the character does not occur in the string", function() {
    expect(getIndexOf("x", "I am a hacker")).toBe(-1);
  });
});
*/

function getIndexOf(char, str) {
  var regex = new RegExp(char, "gi");
  return str.search(regex);
}
