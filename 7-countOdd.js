// 7 - COUNT ODD CHALLENGE

/*
  Given a number, count how many odd numbers are below that number
  Ex: countOdd(5) -> 1, 3 -> returns 2
  Ex: countOdd(10) -> 1, 3, 5, 7, 9 -> returns 5
*/

var countOdd = function(n) {
  let allNums = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 != 0) {
    allNums.push(i);
    }
  }
  return allNums.length;
}

console.log(countOdd(10));

// alternative way to write:

var countOdd2 = function(n) {
  let counter = 0;
    while(n--) { // 4 3 2 1 0
        if (n % 2 === 1) {
            counter++;
        }
    }
    return counter;
}

console.log(countOdd2(10));