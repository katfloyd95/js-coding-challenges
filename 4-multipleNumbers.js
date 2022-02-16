// 4 - MULTIPLE NUMBERS

/*
  Given 2 numbers, multiply them WITHOUT THE * OPERATOR!
  Ex. multiplyNumbers(2, 5) returns 10
*/

var multiplyNumbers = function(num1, num2) {
    var result = 0;
    for(var i = 0; i < num2; i++) {
      result += num1;
    }
    return result;
}

console.log(multiplyNumbers(2,5));

// NOTE: if you are ever stuck, try to expand the problem into it's simplest form, e.g.:
// 2 * 5 = 2 + 2 + 2 + 2 + 2 ----- AKA use a FOR LOOP