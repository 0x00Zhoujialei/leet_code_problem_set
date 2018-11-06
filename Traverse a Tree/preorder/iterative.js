/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    function helper(root, output) {
        if (root !== null) {
            output.push(root.val);
            helper(root.left, output);
            helper(root.right, output);
        }
    }
    var output = [];
    helper(root, output);
    return output;
};
