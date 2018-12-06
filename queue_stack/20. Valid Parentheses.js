/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  function isOpenBracket(c) {
    return c === '(' || c === '[' || c === '{';
  }

  function isMatch(stack, c) {
    let lastChar = stack[stack.length-1];

    if (lastChar === '(' && c === ')') {
      return true;
    }
    if (lastChar === '[' && c === ']') {
      return true;
    }
    if (lastChar === '{' && c === '}') {
      return true;
    }

    return false;
  }

  let stack = [];
  for (let b of s) {
    if (isOpenBracket(b)) {
      stack.push(b);
    } else {
      if (!stack.length) {
        return false;
      }
      if (!isMatch(stack, b)) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};
