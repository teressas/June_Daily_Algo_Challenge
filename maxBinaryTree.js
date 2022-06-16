/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    // let data = [];
    // // Create a root node whose value is the maximum value in nums.
    // let root = new TreeNode(Math.max(...nums))

    // let bfs = (root) => {
    //     if (root.left) bfs(root.left);
    //     if (root.right) bfs(root.right);

    //     data.push(root.val);
    //     console.log(data)
    // }
    // bfs(root);
    // return data

    if (nums.length === 0) return null;
    const maxVal = Math.max(...nums)
    const maxNumIdx = nums.indexOf(maxVal);
    console.log(maxNumIdx)
    const left = maxNumIdx > 0 ? nums.slice(0, maxNumIdx) : [];
    console.log(left)
    const right = maxNumIdx < nums.length - 1 ? nums.slice(maxNumIdx+1) : [];
    console.log(right)
    const node = new TreeNode(maxVal, constructMaximumBinaryTree(left), constructMaximumBinaryTree(right));
    return node;


};

nums = [3, 2, 1, 6, 0, 5]
// Output: [6,3,5,null,2,0,null,null,1]

console.log(constructMaximumBinaryTree(nums))