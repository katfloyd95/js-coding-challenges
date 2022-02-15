// 3 - SUM OF POSITIVE CHALLENGE

/*
  Given an array of numbers, add together the positive nums & return the sum
  If no numbers are positive, return 0
  Ex. sumOfPositive([1, -2, 3, 4]), returns 8
*/

var arr = [-1,-2,-3,4];

function sumOfPositive(nums) {
  const positiveNums = nums.filter(num => num > 0);
  if (nums.some(num => num > 0)) {
    return positiveNums.reduce((sum, num) => sum + num);
  } else {
    return 0;
  }
}

console.log(sumOfPositive(arr));

// alternative method:

function sumOfPositive2(nums) {
  var sum = 0;
  for (var num of nums) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumOfPositive2(arr));