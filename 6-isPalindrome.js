// 6 - IS PALINDROME CHALLENGE

/*
  Given a string, determine whether it is a palindrome (same forwards and backwards, case-sensitive)
  Ex: isPalindrome("racecar") returns true
  Ex: isPalindrome("abcd") returns false
*/

var string = "racecar";

var isPalindrome = function(str) {
  for (let i = 0; i < str.length / 2; i++) {
    let rightIndex = str.length -1 - i;
    if (str[i] != str[rightIndex]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(string));

// you could also calculate the palindrome of a string like so:

var isPalindrome2 = function(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome2("helleh"));