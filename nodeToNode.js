/*
Step-By-Step Directions From a Binary Tree Node to Another
starting from the given startVal and the destVal,
return how many times you need to go to the parent node, parent's left node and parent's right node to get to destination node
node val > 0
always be 2 nodes
all vals are unique
Node: s - startVal(int), t - destVal(int)

Idea:

Get the paths to both the start node and the end node
Find the node that is the lowest common ancestor to both nodes
This is equivalent to the last character in which the prefix of startPath and endPath are the same
The final path consists of walking "up" ('U') from the start node to the ancestor, then walking "down" ('L/R') to the end node
O(n) time for the tree traversal.
O(h) space for recursion, stack depth is at most h where h is the height of the tree.
3 => UURL => 6
root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
5
1       2
3   null    6   4
5 > 1 > 3
startPath: root => LL
5 > 2 > 6
destPath: root => RL
find LCA - least common ancestor = 5
loop through startPath and destPath length if startPath[0] and destPath[0] is equal
starting at startPath[i], loop through startPath length and add U to output
return the concatenation of output and destPath at substring of i 

other testcases:
startValue = 6; destValue = 3
startValue = 6; destValue = 4
startValue = 3; destValue = 1
startValue = 5; destValue = 3
*/

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
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
    getPath  = function (node, targetVal, pathStr = ''){
        if(!node) {
            return ''
        }
        if(node.val == targetVal) {
            console.log("node.val", node.val,"pathStr",pathStr)
            return pathStr;
        }
        /* node.val 3 acc LL
        node.val 6 acc RL */
    
        // starts at 5, every time it goes to the left node it adds L to acc; same for right
        else {
            return getPath(node.left, targetVal, pathStr + 'L') + getPath(node.right, targetVal, pathStr + 'R');
        }
    }
        
    
	// generate the paths
    let startPath = getPath(root, startValue);
    let destPath = getPath(root, destValue);
    console.log("startPath", startPath, "destPath", destPath)
    
    // find the lowest common ancestor
    // console.log("SPL",startPath.length, startPath[i], destPath[i])
    // loop through startPath and destPath as long as startPath[i] equals to destPath[i]
    let i = 0;
    for(; i < startPath.length && i < destPath.length && startPath[i] == destPath[i]; i++);
    
	// starting at i of startPath, add U to output; 
    let output = "";
    for(j = i; j < startPath.length; j++){
        output += "U";
    }
    // from the start node, you're going up to parent so you replace the steps, L or R, with U 
    // LL(startPath) => UU + RL(destPath)
    
    // output UU  destPath RL 0
    // destPath.substring(i) RL
    console.log("output",output," destPath", destPath, i)
    console.log("destPath.substring(i)", destPath.substring(i) )
    return output + destPath.substring(i)
};

/*
5 > 1 > node.left !== null => route [ 'L' ] => go(node.left, route)
*/
root = [5, 1, 2, 3, null, 6, 4], startValue = 3, destValue = 4

let node = new TreeNode(root[0]);
node.left = new TreeNode(root[1]);
node.right = new TreeNode(root[2]);
node.left.left = new TreeNode(root[3]);
node.left.right = new TreeNode(root[4]);
node.right.left = new TreeNode(root[5]);
node.right.right = new TreeNode(root[6]);
// console.log(node)

console.log(getDirections(node, startValue, destValue));

