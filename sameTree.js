/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/* Recursive
var isSameTree = function (p, q) {
    // console.log("p:",p)
    // console.log("q:",q)

    // if p or q is null, check if p and q are equal and return true
    if (p == null || q == null) {
        console.log(p == q)
        return p == q;
    }
    // returns true if p and q are equal, 
    // recursively check for the left and right nodes and all of that node's left and right
    return (p.val == q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
 */
/* DFS
var isSameTree = function (p, q) {
    let same = true;
    dfs(p, q);
    function dfs(p, q) {
        if (!p && !q) { // both are null
            // console.log(49)
            return;
        }
        if (!q || !p) { // only one is null 
            // console.log(52)
            same = false;
            return;
        }
        if (p.val !== q.val) { //
            // console.log(56)
            same = false;
            return;
        }

        dfs(p.left, q.left);
        dfs(p.right, q.right);
        // console.log(p,q)
    }
    return same;
};
*/
/* BFS */
var isSameTree = function(a, b) {
    if(!a && !b) return true;
    if(!a || !b) return false;
	
	// let's push both roots into a queue and process them simultaneously 
    let q = [[a,b]];
    console.log("q",q)
    while(q.length) {
        let [nodeA, nodeB] = q.shift();
        console.log([nodeA, nodeB])
		// if values don't match then they are not the same tree
        if(nodeA.val != nodeB.val) return false;
        
	    // if a nodeA has a right child nodeB has to have one too
		// if only one of them has right child they are not the same tree
        if(nodeA.right && nodeB.right) {
            q.push([nodeA.right, nodeB.right])
            console.log("79",q)
            
        } else if (nodeA.right || nodeB.right) {
            console.log("82")
            
            return false;
        }
        
		// if a nodeA has a left child nodeB has to have one too
		// if only one of them has left child they are not the same tree
        if(nodeA.left && nodeB.left)  {
            q.push([nodeA.left, nodeB.left])
            console.log("90",q)
        } else if (nodeA.left || nodeB.left) {
            console.log("94")

            return false;
        }
    }
    
    return true;
};
/*
false scenarios
if nodes are null
if nodes are null
if the node vals do not equal

*/
// p = [1,2,3], q = [1,2,3] // true
let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);
let q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);
// console.log(p,q)
// console.log(isSameTree(p, q))

//p = [1,2], q = [1,null,2] // false
let p2 = new TreeNode(1);
p2.left = new TreeNode(2);
// console.log(p2)
let q2 = new TreeNode(1);
// q.left = new TreeNode();
q2.right = new TreeNode(2);
// console.log(q2)
// console.log(isSameTree( p2, q2))

// p = [1,2,1], q = [1,1,2] // false
let p3 = new TreeNode(1);
p3.left = new TreeNode(2);
p3.right = new TreeNode(1);
let q3 = new TreeNode(1);
q3.left = new TreeNode(1);
q3.right = new TreeNode(2);
// console.log(p3,q3)
console.log(isSameTree( p3, q3))

/*
p = [1,2,3], q = [1,2,3] // true
return true if p and q val are equal
recursively check for the left and right nodes and it's children
if p is null or q is null then check if p and q are equal return true
p: TreeNode {
  val: 1,
  left: TreeNode { val: 2, left: null, right: null },
  right: TreeNode { val: 3, left: null, right: null }
}
q: TreeNode {
  val: 1,
  left: TreeNode { val: 2, left: null, right: null },
  right: TreeNode { val: 3, left: null, right: null }
}
p: TreeNode { val: 2, left: null, right: null }
q: TreeNode { val: 2, left: null, right: null }
p: null
q: null
true
p: null
q: null
true
p: TreeNode { val: 3, left: null, right: null }
q: TreeNode { val: 3, left: null, right: null }
p: null
q: null
true
p: null
q: null
true
true
*/

/*
p = [1,2], q = [1,null,2] // false
p: TreeNode {
  val: 1,
  left: TreeNode { val: 2, left: null, right: null },
  right: null
}
q: TreeNode {
  val: 1,
  left: null,
  right: TreeNode { val: 2, left: null, right: null }
}
p: TreeNode { val: 2, left: null, right: null }
q: null
false
false
*/