// JAVASCRIPT CODING CHALLENGES

/* 
  Create a string to say hello in the format "Hello, {{name}}!"
  Ex. printHelloName("Aaron"), returns "Hello, Aaron!"
*/

var printHelloName = function(firstName) {
  return `Hello, ${firstName}!`;
}

// another way to write this:
function printHelloName1(yourName) {
  var fullString = 'Hello, ' + yourName + '!';
  return fullString;
}

console.log(printHelloName("Aaron"));
console.log(printHelloName1("Aaron"));

// Test block:
const printHelloNameTests = [
  {args: ["Aaron"], expected: "Hello, Aaron!"},
  {args: [""], expected: "Hello, !"}
]