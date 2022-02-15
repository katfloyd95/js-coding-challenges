// JAVASCRIPT CODING CHALLENGES

/* 
  Create a string to say hello in the format "Hello, {{name}}!"
  Ex. printHelloName("Aaron"), returns "Hello, Aaron!"
*/

var printHelloName = function(firstName) {
  return `Hello, ${firstName}!`;
}

printHelloName("Aaron");

// Test block:
const printHelloNameTests = [
  {args: ["Aaron"], expected: "Hello, Aaron!"},
  {args: [""], expected: "Hello, !"}
]