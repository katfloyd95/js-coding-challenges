// 9 - UNBALANCED ARRAYS

/*
  Given an array of positive and negative integers, find the number that does not have an opposite
  Ex: unbalancedArray([-1, 4, 1, 5, -4]) -> 5
  Ex: unbalancedArray([12, 1, 21, -21, -1]) -> 12]
*/

let arr = [-1, 4, 1, 5, -4];

var unbalancedArray = function(nums) {
  return nums.reduce((sum, num) => { 
    return sum + num;
  })
}

console.log(unbalancedArray(arr));