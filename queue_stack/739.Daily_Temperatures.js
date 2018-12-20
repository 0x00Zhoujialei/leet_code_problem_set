/**
 * @param {number[]} T
 * @return {number[]}
 */
let dailyTemperatures = function(temperatures) {
  if (!temperatures.length) {
    return [];
  }
  let result = new Array(temperatures.length).fill(0);
  let stack = [0];
  for (let i = 1; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]) {
      let index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }
  return result;
};
