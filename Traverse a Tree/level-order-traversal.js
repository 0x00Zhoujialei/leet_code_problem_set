/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    var level = [root];
    var output = [];
    while (level.length > 0) {
        output.push(level.map(node => node.val));
        var temp = level.map(node => {
            var o = [];
            if (node.left) {
                o.push(node.left);
            }
            if (node.right) {
                o.push(node.right);
            }
            return o;
        });
        var line = [];
        temp.forEach(e => {
            line = line.concat(e);
        });
        level = line;
    }
    return output;
};
