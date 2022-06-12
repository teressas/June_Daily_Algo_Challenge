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
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var checkTree = function(root) {
    const target = root.val
    const sum = root.left.val + root.right.val
    
    if((root.val < -100 || root.val > 100) || (root.left.val < -100 || root.left.val > 100) || (root.right.val < -100 || root.right.val > 100) ) return;
    // console.log(sum)
    if(target == sum) return true;
    else return false;
};

const root = new TreeNode(10);
root.left = new TreeNode(4)
root.right = new TreeNode(6)
// console.log(root)

console.log(checkTree(root))

const head = new TreeNode(5)
head.left = new TreeNode(3)
head.right = new TreeNode(1)
console.log(checkTree(head))

const front = new TreeNode(-101)
front.left = new TreeNode(5)
front.right = new TreeNode(1)
console.log(checkTree(front))
/*
root = [10,4,6]
Output: true

[10,4,6]
target = root
sum = TreeNode.left + TreeNode.right
if(sum == target) return sum
*/

