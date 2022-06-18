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
 * @return {TreeNode[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var findDuplicateSubtrees = function(root) {
    // const result = [],
    // map = new Map();
    // // traverse using post order to get left nodes first
    // let postOrder = (node) => {
    
    //     // at anytime the node is null return blank
    //     if(!node) return '';
        
    //     // add the current node val and the node's parent as the key in the map
    //     const key = node.val + "." + postOrder(node.left) + "." + postOrder(node.right),
    //     // add the val as 0 if it doesn't exist in the map otherwise add 1
    //         val = (map.get(key) || 0) + 1;
	// 	// if the val is 2 then we found a duplicate, push into the return arr
    //     if(val == 2) result.push(node);
        
	// 	// if the val is less than 3, add the key and val to the map
    //     if(val < 3) map.set(key,val);
    
    //     console.log("map",map,"result",result)
    //     return key
    // }
    // postOrder(root);
    // return result;

    const map = new Map(),
		res = [];
	const dfs = (node) => {
		if (!node) return '';
		const key = node.val + "." + dfs(node.left) + "." + dfs(node.right),
			value = (map.get(key) || 0) + 1;
		if (value == 2) res.push(node);
		if (value < 3) map.set(key, value);
		return key;
	};
	dfs(root);
	return res;
};

root = [1,2,3,4,null,2,4,null,null,4] // [[2,4],[4]]
let node = new TreeNode(1);
node.left = new TreeNode(2);
node.left.left = new TreeNode(4);
node.right = new TreeNode(3);
node.right.left = new TreeNode(2);
node.right.right = new TreeNode(4);
node.right.left.left = new TreeNode(4);

// root = [2,1,1] // [[1]]
// let node = new TreeNode(2);
// node.left = new TreeNode(1);
// node.right = new TreeNode(1);

// root = [2,2,2,3,null,3,null] // [[2,3],[3]]
// let node = new TreeNode(2);
// node.left = new TreeNode(2);
// node.right = new TreeNode(2);
// node.left.left = new TreeNode(3);
// node.right.left = new TreeNode(3);

// console.log(node); 

console.log(findDuplicateSubtrees(node))