/**
 * 
 * height of a node is the number of edges from the node to the deepest leaf.
 * The nodes that are located in the ith height will be appear in the ith collection in the final answer. For any given node in the binary tree, the height is obtained by adding 1 to the maximum height of any children. Formally, for a given node of the binary tree \text{root}root, 
 * it's height can be represented as

height(root)=1+max(height(root.left), height(root.right))


 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var findLeaves = function (root) {

    // need to get the layer farthest away from the root
    // use postorder, start with the left most node, then go to the sibiling and then back to the parent
    // when you get to the child and it's children is null 
    // then use helper function to create hashtable to ref the height and nodeval
    // if the height(key) already exists, then get that val from the ref map and store the current val into the arr
    // then set that height and arr(val) as the new height in the ref map

    // at the end traverse through the keys and get each key(idx) in the ref map and push it into the finalArr and return the finalArr

    let minHeight = Infinity;
    let maxHeight = -Infinity;
    let map = new Map(); // hash table to store height and the node val
    let finalArr = [];

    let updateMap = (height, nodeVal) => {
        minHeight = Math.min(height, minHeight);// set the min height to get the lowest layer of tree
        maxHeight = Math.max(height, maxHeight);// set the max height to get the highest layer of tree
        if(map.has(height)) { // get the key from the hashmap
            let arr = map.get(height); // store the current val of key into a var
            arr.push(nodeVal); // push the val into the curr arr
            map.set(height, arr); // update the key val
        } else {
            map.set(height, [nodeVal]);
            console.log(map)
        }

    }

    // get children nodes height and val
    let postOrder = (node) => {
        if(!node) return null;
        if(node.left == null && node.right == null) { // the node has no children, right and left
            updateMap(0, node.val);
            return 0;
        }
        let lHeight = postOrder(node.left);
        let rHeight = postOrder(node.right);
        let currHeight = 1 + Math.max(lHeight, rHeight);
        // console.log(lHeight, rHeight, currHeight)
        updateMap(currHeight, node.val);
        return currHeight;
    };

    postOrder(root);

    for (let i = minHeight; i <= maxHeight; i++) { // traverse through the 1st key to the last key in map
        finalArr.push(map.get(i)); // add it to the final arr
    }
    return finalArr; // return finalArr
    
};

root = [1,2,3,4,5]
let node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);

// root = [1, 2]

// let node = new TreeNode(1);
// node.left = new TreeNode(2);

// console.log(node)

console.log(findLeaves(node));

// traverse through array using post order
// go through left's children first and then the right's children and put it in an array

/*
[1,2,3,4,5]
4
0 [ 4 ] Map(1) { 0 => [ 4 ] }
5
0 [ 5 ] Map(1) { 0 => [ 4, 5 ] }
lHeight 0 rHeight 0 1 2
1 [ 2 ] Map(2) { 0 => [ 4, 5 ], 1 => [ 2 ] }
3
0 [ 3 ] Map(2) { 0 => [ 4, 5, 3 ], 1 => [ 2 ] }
lHeight 1 rHeight 0 2 1
2 [ 1 ] Map(3) { 0 => [ 4, 5, 3 ], 1 => [ 2 ], 2 => [ 1 ] }
minH 0 maxH 2
[ [ 4, 5, 3 ], [ 2 ], [ 1 ] ]

*/