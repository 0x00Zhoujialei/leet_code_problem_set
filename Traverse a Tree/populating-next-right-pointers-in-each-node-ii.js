/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {

    function helper(nodes) {
        if (!nodes.length) {
            return;
        }
        var nextLevel = [];
        while (nodes.length > 1) {
            var leftSideNode = nodes.shift();
            leftSideNode.next = nodes[0];
            if (leftSideNode.left) {
                nextLevel.push(leftSideNode.left);
            }
            if (leftSideNode.right) {
                nextLevel.push(leftSideNode.right);
            }
        }
        nodes[0].next = null;
        if (nodes[0].left) {
            nextLevel.push(nodes[0].left);
        }
        if (nodes[0].right) {
            nextLevel.push(nodes[0].right);
        }
        helper(nextLevel);
    }

    if (root instanceof TreeLinkNode) {
        helper([root]);
    } else {
        root = new TreeLinkNode(0); // just hack for passing test of leetcode, weird
    }
};
