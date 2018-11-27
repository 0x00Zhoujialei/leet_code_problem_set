/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) {
    return '[]';
  }
  function helper(node, result) {
    if (!node) {
      result.push('null');
      return;
    }
    result.push(node.val);
    helper(node.left, result);
    helper(node.right, result);
  }

  var r = [];
  helper(root, r);

  return r.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === '[]') {
    return null;
  }

  var serialArray = data.split(',');

  function helper() {
    let e = serialArray.shift();
    if (e === 'null') {
      return null;
    }

    var r = new TreeNode(Number(e));
    r.left = helper();
    r.right = helper();

    return r;
  }

  var root = helper();

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

