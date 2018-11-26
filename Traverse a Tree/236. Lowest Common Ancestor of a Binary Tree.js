/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function findPath(r, result, node) {
        result.push(r);

        if (r === node) {
            return true;
        }

        if (r.left && findPath(r.left, result, node)) {
            return true;
        }
        if (r.right && findPath(r.right, result, node)) {
            return true;
        }

        result.pop();
        return false;
    }

    var pPath = [], qPath = [];
    findPath(root, pPath, p);
    findPath(root, qPath, q);
    if (pPath.length > qPath.length) {
        while (qPath.length > 0) {
            let e = qPath.pop();
            if (pPath.indexOf(e) !== -1) {
                return e;
            }
        }
    } else {
        while (pPath.length > 0) {
            let e = pPath.pop();
            if (qPath.indexOf(e) !== -1) {
                return e;
            }
        }
    }
};

