/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    function helper(root, sum) {
        if (!root) {
            return false;
        }
        if (!root.left && !root.right) {
            return sum === root.val;
        }
        return helper(root.left, sum-root.val) || helper(root.right, sum-root.val);
    }
    if (!root) {
        return false;
    }
    return helper(root, sum);
};
