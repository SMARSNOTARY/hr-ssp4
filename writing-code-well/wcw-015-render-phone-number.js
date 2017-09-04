// preImmersive-[skeleton 04]-writingCodeWell-015-render phone number

// Accept an array of numbers that represent a phone number.
// E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]
// Return as a string in this format: ‘(650) 835-9172’

// written with Benji Richards

function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  string = this.getAreaCode() + ' ' + this.getExchangeCode() + '-' + this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  let areaCode = this.slice(0, 3);
  return areaCode = this.parenthesize(areaCode);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};


//Assertion
//given the ten digit string get areaCode return '(650)'

var input = [6, 5, 0, 2, 7, 1, 9, 3, 1, 8];
var formatter = new PhoneNumberFormatter(input);

var output = formatter.render();
console.log(output);
