/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    /* 1st time */
    // const visited = {};

    // edges.forEach((node)=> {
    //     for(let val of node) {
    //         visited[val] = (visited[val] || 0) + 1;
    //     }
    // })
    // // console.log(visited);
    // for(const [key,val] of Object.entries(visited)) {
    //     if(val > 1) {
    //         return key
    //     }
    // }
/* using Map */
    const map = new Map();
    let center = null;

    while (edges.length) {
        console.log(map, edges)
        if (map.has(edges[0][0])) {
            center = edges[0][0];
            break;
        } else if (map.has(edges[0][1])) {
            center = edges[0][1];
            break;
        } else {
            map.set(edges[0][0], 1);
            map.set(edges[0][1], 1);
            edges.shift();
        }
    }
    return center;
/* fastest: O(1) each node will have the center so just need to look at the first 2 nodes,   */
    // const [[a,b], [c,d]] = edges;
    // console.log([[a,b], [c,d]])
    // return a === c || b === c ? c : d;

};
edges = [[1, 2], [2, 3], [4, 2]] // 2
console.log(findCenter(edges));
edges = [[1, 2], [5, 1], [1, 3], [1, 4]]
Output: 1
/*
edges = [[1,2],[2,3],[4,2]] // 2
edges[0][0] === edges[1][0] 
[1] === [2] 
edges[0][0] === edges[1][1] 
[1] === [3]
return edges[0][0] => [1]

else return edges[0][1]

[1,2] => [2,3] => [4,2]
visited = {1: 1, 2: 3, 3: 1, 4:1}
result = 
find the common integer in each node

loop through each edge's node
increment key if node has been visited
return the key with the greatest value
*/


