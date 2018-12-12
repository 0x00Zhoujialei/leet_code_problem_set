/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  function helper(sum, pivot) {
    if (pivot === nums.length) {
      if (sum === 0) {
        return 1;
      } else {
        return 0;
      }
    }
    let e = nums[pivot];
    let minusSum = sum - e;
    let addSum = sum + e;

    return helper(minusSum, pivot+1) + helper(addSum, pivot+1);
  }

  let maxSum = nums.reduce((acc, cur) => acc + cur);
  if (maxSum < S) {
    return 0;
  }

  return helper(S, 0);
};


