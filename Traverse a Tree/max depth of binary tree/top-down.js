/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
    var answer = 0;
    function helper(root, depth) {
        if (!root) {
            return 0;
        }
        if (!root.left && !root.right) {
            answer = Math.max(answer, depth);
        }
        helper(root.left, depth + 1);
        helper(root.right, depth + 1);
    }
    helper(root, 1);
    return answer;
};
