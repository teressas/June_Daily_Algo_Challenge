/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var inorderTraversal = function (root) {
    let data = []; // store results

    // helper function to check left and right nodes
    let traverse = (root) => {
        if (!root) return
        if (root.left) traverse(root.left);
        data.push(root.val); // push the left vals first
        if (root.right) traverse(root.right);
    }
    traverse(root);
    return data;

};

root = [1, null, 2, 3] // [1,3,2]

const node = new TreeNode(root[2], root[0], root[3])
node.left = new TreeNode(root[0])
node.right = new TreeNode(root[3])

// console.log(node)

console.log(inorderTraversal(node))


