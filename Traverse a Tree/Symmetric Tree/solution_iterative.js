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
var isSymmetric = function(root) {
    var list = [];
    list.push(root);
    list.push(root);
    while (list.length > 0) {
        var lst = list.shift();
        var rst = list.shift();
        if (!lst && !rst) {
            continue;            
        }
        if (!lst || !rst) {
            return false;
        }
        if (lst.val !== rst.val) {
            return false;
        }
        list.push(lst.left);
        list.push(rst.right);
        list.push(lst.right);
        list.push(rst.left);
    }
    return true;
};
