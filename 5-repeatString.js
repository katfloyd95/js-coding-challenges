// 5 - REPEAT STRING CHALLENGE

/*
  Given a string, duplicate in n times and return a single string
  Ex: repeatString("B", 5) returns "BBBBB"
  Ex: repeatString("Abc", 3) returns "AbcAbcAbc"
*/

var repeatString = function(s, n) {
  let resultString = "";
  for (var i = 1; i <= n; i++) {
    resultString += s;
  }
  return resultString;
}

console.log(repeatString("hello", 5));