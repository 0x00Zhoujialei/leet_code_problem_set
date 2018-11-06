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
var postorderTraversal = function(root) {
    function helper(node, output) {
        if (node) {
            helper(node.left, output);
            helper(node.right, output);
            output.push(node.val);
        }
    }
    var output = [];
    helper(root, output);
    return output;
};
