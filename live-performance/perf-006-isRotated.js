//preImmersive-livePerformance-006-oh yeah? Rotate THIS

/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

If you double the string, you'll be to trivially find another string inside it using regular String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '

If str2 is a subset of str1 doubled and includes extra duplicated letters, it will pass this simple test.
Search w/in it: '       orldhello wor  '
So check first to see if str2 is longer than str1, and if it is, return false
*/

// input: two strings (of equal length)
// output: boolean indicating whether the second string is a rotated version of the first

function isRotated(str1, str2) {
  let doubledStr = str1 + str1;
  if (str2.length > str1) {
    return false;
  }
  return doubledStr.includes(str2);
}

string1 = 'hello world';
string2 = 'orldhello w';
isRotated(string1, string2);
