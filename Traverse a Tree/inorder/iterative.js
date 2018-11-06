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
var inorderTraversal = function(root) {
    function helper(node, output) {
        if (node) {
            helper(node.left, output);
            output.push(node.val);
            helper(node.right, output);
        }
    }
    var output = [];
    helper(root, output);
    return output;
};
