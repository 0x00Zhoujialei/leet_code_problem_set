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
// 以树的遍历的角度来解这道题
// 后序遍历根节点左子树所得的节点上的值的数组
// 应该等于以先遍历右子树后遍历左子树最后遍历根这样的顺序遍历根节点右子树所得的节点上的值的数组
// 遍历子树时，遇到非叶子节点上子树不存在的情况时，我们替它补上节点值为‘empty’的子树
// 最后比较以这样两种顺序遍历得到的数组是否所含元素相等即可
var isSymmetric = function(root) {
    function leftTraversal(root, leftOrders) {
        if (!root) { // 对应非叶子节点遇到子树不存在的情况
            leftOrders.push('empty');
            return;
        }
        if (root.left || root.right) { // 若当前节点为非叶子节点
            leftTraversal(root.left, leftOrders);
            leftTraversal(root.right, leftOrders);
        }
        leftOrders.push(root.val);
    }
    function rightTraversal(root, rightOrders) {
        if (!root) { // 同上
            rightOrders.push('empty');
            return;
        }
        if (root.left || root.right) { // 同上
            rightTraversal(root.right, rightOrders);
            rightTraversal(root.left, rightOrders);   
        }
        rightOrders.push(root.val);
    }
    var leftOrders = [];
    var rightOrders = [];
    if (root) {
        leftTraversal(root.left, leftOrders);
        rightTraversal(root.right, rightOrders);
    }
    
    return JSON.stringify(leftOrders) === JSON.stringify(rightOrders);
};
