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
var lowestCommonAncestor = function (root, p, q) {
    // console.log(root) 
    // if (!root || !p || !q) return; // slows down runtime 
    // Solution : O(n)
    const dfs = (node) => {
        // at any time there's a null node return 
        // console.log("node",node)
        if (node === null) {
            // console.log("21", node)
            return null;
        }
        // if node equals to p or q return the node
        if(node === p || node === q) {
            // console.log("26", node)
            return node;
        }

        // recursive call for all of node's left and another for node's right to check if the node is equal to p or q
        let left = dfs(node.left);
        let right = dfs(node.right);
        // console.log("l",left, right)

        // if there's left and right then return the node else return either left or right
        return left && right ? node : left || right;
    }

    // helper function to do dfs
    return dfs(root);

};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1
// 3
const tree = new TreeNode(3);
tree.left = new TreeNode(5);
tree.left.left = new TreeNode(6);
tree.left.right = new TreeNode(2);
tree.left.right.left = new TreeNode(7);
tree.left.right.right = new TreeNode(4);
tree.right = new TreeNode(1);
tree.right.left = new TreeNode(0);
tree.right.right = new TreeNode(8);
// // console.log(tree)

// root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// 5

// root = [1,2], p = 1, q = 2 
// const tree = new TreeNode(root[0]);
// tree.left = new TreeNode(root[1])
// console.log(tree)
// 1 

console.log(lowestCommonAncestor(tree, p, q))

/*
build the tree
from the root go to p node,
at p node evaluate the following to check if q exists:
recursive call:
    1.its children 
    2.it's parent
    3. it's parent's other child
    4. parent's other child's children
won't be dups
always be a p and q and p !== q
root > root's child > rc's child > 

*/