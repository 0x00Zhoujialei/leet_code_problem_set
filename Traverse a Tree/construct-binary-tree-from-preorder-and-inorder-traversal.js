/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) {
        return null;
    }
    var rootValue = preorder.shift();
    var rootNode = new TreeNode(rootValue);
    if (!preorder.length) {
        return rootNode;
    }
    var leftSubTreeIndex = inorder.indexOf(rootValue);
    rootNode.left = buildTree(preorder.slice(0, leftSubTreeIndex), inorder.slice(0, leftSubTreeIndex));
    rootNode.right = buildTree(preorder.slice(leftSubTreeIndex), inorder.slice(leftSubTreeIndex+1));
    return rootNode;
};
