/*Sales Path
The car manufacturer Honda holds their distribution system in the form of a tree (not necessarily binary). The root is the company itself, and every node in the tree represents a car distributor that receives cars from the parent node and ships them to its children nodes. The leaf nodes are car dealerships that sell cars direct to consumers. In addition, every node holds an integer that is the cost of shipping a car to it.

Take for example the tree below:

alt

A path from Honda’s factory to a car dealership, which is a path from the root to a leaf in the tree, is called a Sales Path. The cost of a Sales Path is the sum of the costs for every node in the path. For example, in the tree above one Sales Path is 0→3→0→10, and its cost is 13 (0+3+0+10).

Honda wishes to find the minimal Sales Path cost in its distribution tree. Given a node rootNode, write a function getCheapestCost that calculates the minimal Sales Path cost in the tree.

Implement your function in the most efficient manner and analyze its time and space complexities.

For example:

Given the rootNode of the tree in diagram above

Your function would return:

7 since it’s the minimal Sales Path cost (there are actually two Sales Paths in the tree whose cost is 7: 0→6→1 and 0→3→2→1→1)

Constraints:

[time limit] 5000ms

[input] Node rootNode

0 ≤ rootNode.cost ≤ 100000
[output] integer
*/


function getCheapestCost(rootNode) {
    let node = rootNode,
        queue = [],
        minSumSoFar = Number.MAX_VALUE

    queue.push([node, 0]);
    while (queue.length) {
        item = queue.shift() // 4,9
        node = item[0] // node = 4
        curPath = item[1] // 9

        // only update minSumSoFar if current node is a leaf (aka no children)
        console.log(node.children)
        // if (node.children.length == 0) {
        //     minSumSoFar = Math.min(minSumSoFar, curPath)
        // }
        for (let child in node.children) {  // node.children = []
            queue.push([child, child.cost + curPath]) //1, 6
        }


    }
    return minSumSoFar

    // return the sum of the shortest path
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/

// Constructor to create a new Node
function Node(cost) {
    this.cost = cost;
    this.children = [];
}
getCheapestCost(0)
/*  
           0
      5.   3.      6
  4.    2.  0    1.  5
      1    10
         1
  
  minSumSoFar = big num, 9
  
  Q: (0,0)
  Q: (5,5), (3,3), (6,6)
  Q: (3,3), (6,6), (4,9)
  Q: (6,6), (4,9), (2,5), (0,3)
  Q: (4,9), (2,5), (0,3) ,(1,7), (5,11)
  Q: (2,5), (0,3) ,(1,7), (5,11)
  Q: (0,3) ,(1,7), (5,11), (1,6)
  Q: (1,7), (5,11), (1,6) , (10,13)
*/    