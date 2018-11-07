/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// recursive, 对于根节点的两个子树，如果两个子树的根节点值相同，其左子树和
// 另一个子树的右子树互为镜像，其右子树和另一个子树的左子树互为镜像，则这个书是对称的
var isSymmetric = function(root) {
    function isMirror(lst, rst) {
        if (!lst && !rst) {
            return true;
        }
        if (!lst || !rst) {
            return false;
        }
        return lst.val === rst.val && isMirror(lst.left, rst.right) && isMirror(lst.right, rst.left);
    }
    
    return isMirror(root, root);
};
