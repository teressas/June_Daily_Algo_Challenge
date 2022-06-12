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
 * @param {number} k
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var findTarget = function (root, k, map={}) {
    // O(n)
    if (root === null) return false; // no root
    // console.log(k-head.val)
    if(map.hasOwnProperty(root.val)) return true; // if node val is a key in the map return true
    map[k-root.val] = 0; // create the map, set k- node val as key and val as 0 : {4:0, 6:0 , 7:0}
    // console.log(map)
    // do the same for the left and right side of the tree until you find a node val that matches an existing key in the object
    return findTarget(root.left, k, map) ? true : findTarget(root.right, k, map) ? true : false;
};

const head = new TreeNode(5);

head.left = new TreeNode(3);
head.left.left = new TreeNode(2);
head.left.right = new TreeNode(4);

head.right = new TreeNode(6);
head.right.right = new TreeNode(7);

// console.log(head)
root = [5, 3, 6, 2, 4, null, 7], k = 9
console.log(findTarget(head, k))


/*
root = [5,3,6,2,4,null,7], k = 9
{4:0, 6:0, 7:0, } 
9-5 = 4
9-3 = 6
9-7 = 2
9-4 => 4 is in map = > return true

create a tree
if the root val is null then return false
use a object so we can check the target - node val already exists as a key
if the target-node equal to key in the map then return true
check the left and right of tree, if there's a node val already found in the map then return true, 
otherwise check the right and return true

*/