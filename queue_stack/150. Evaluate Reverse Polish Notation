/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

  let tokenMappedOperators = {
    '+': (lhs, rhs) => lhs + rhs,
    '-': (lhs, rhs) => lhs - rhs,
    '*': (lhs, rhs) => lhs * rhs,
    '/': (lhs, rhs) => Math.trunc(lhs/rhs),
  }

  let stack = [];
  for (let token of tokens) {
    if (!isNaN(Number(token))) {
      stack.push(token);
    } else {
      let rhs = Number(stack.pop());
      let lhs = Number(stack.pop());
      stack.push(tokenMappedOperators[token](lhs, rhs));
    }
  }

  return stack.pop();
};

