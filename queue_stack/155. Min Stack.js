/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.minIndexes = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (!this.stack.length) {
    this.minIndexes.push(0);
  } else {
    let lastIndex = this.minIndexes.length - 1;
    let minIndex = this.minIndexes[lastIndex];
    let minElement = this.stack[minIndex];
    if (minElement > x) {
      this.minIndexes.push(lastIndex+1);
    } else {
      this.minIndexes.push(minIndex);
    }
  }

  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minIndexes.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let lastIndex = this.minIndexes.length - 1;
  let minIndex = this.minIndexes[lastIndex];
  return this.stack[minIndex];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
