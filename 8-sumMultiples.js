// 8 - SUM MULTIPLES CHALLENGE

/*
  Given a number, count how many numbers below it are multiples of EITHER 3 OR 5
  Then, sum those multiples together
  Ex: sumMultiples(10) -> 3 + 5 + 6 + 9 -> returns 23
  Ex: countOdd(5) -> 1, 3 -> returns 2
*/

var sumMultiples = function(n) {
  targetNums = [];
  while (n--) {
    if (n % 3 == 0 || n % 5 == 0) {
      targetNums.push(n);
    }
  }
  return targetNums.reduce((sum, num) => sum + num);
}

console.log(sumMultiples(10));

// alternative way: 

var sumMultiples2 = function(n) {
  let sum = 0;
  while (n--) {
    if (n % 3 === 0 || n % 5 === 0) {
      sum += n;
    }
  }
  return sum;
}

console.log(sumMultiples2(10));