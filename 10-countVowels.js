// 10 - COUNT VOWELS CHALLENGE

/*
  Given a string, count the vowels and return that count
  Ex: countVowels("adsbecdei") -> a, e, e, i -> 4
  Ex: unbalancedArray("ffjnkjnj") -> no vowels -> 0
*/

var countVowels = function(s) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'o' || s[i] === 'i' || s[i] === 'u') {
      counter++;
    }
  }
  return counter;
}

console.log(countVowels("abcdefghi"));
