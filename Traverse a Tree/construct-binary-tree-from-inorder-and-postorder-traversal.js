/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!postorder.length) {
        return null;
    }
    var rootValue = postorder.pop();
    var rootNode = new TreeNode(rootValue);
    if (!postorder.length) {
        return rootNode;
    }
    var leftSubTreeIndex = inorder.indexOf(rootValue);
    rootNode.left = buildTree(inorder.slice(0, leftSubTreeIndex), postorder.slice(0, leftSubTreeIndex));
    rootNode.right = buildTree(inorder.slice(leftSubTreeIndex+1), postorder.slice(leftSubTreeIndex));
    return rootNode;
};
