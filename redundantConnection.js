/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    // loop through each element in edges
    // for (let i = 0; i < edges.length; i++) {
    //     let j = 0;
    //     console.log(edges[i][j])
    // }
    // if the val in one element occurs in another element 
    // then that val is the root
    // and the other vals are the children of that element
    // return the remaining element

    // const result = [];
    // const visited = {};
    // let start = edges[0];
    // (function dfs(vertex){
    //     if(!vertex) return null;
    //     if()
    //     visited[vertex] = true;
        
    //     result.push(vertex);
    //     console.log(visited, result);
    // })(start)

    let map = {};
    let currRedundant = null;
    
    const dfs = (u, v, visited) => {
        visited.add(u);

        if (u in map){
            if (map[u].has(v)) return true;
            for (let w of map[u]){
                
                if (!visited.has(w)){
                    visited.add(w);
                    if (dfs(w, v, visited)) return true;
                }
                // console.log("visited",visited,"map", map)
            }
            return false;
        }
        return false;
    }
    
    for (let edge of edges){
        let [u, v] = edge;
        
        if (dfs(u, v, new Set())) currRedundant = edge;
        
        if (!(u in map)) map[u] = new Set();
        if (!(v in map)) map[v] = new Set();
        
        map[u].add(v);
        map[v].add(u);
    }
    
    return currRedundant;

    // dfsRecursive(start) {
    //     const result = [];
    //     const visited = {};
    //     let adjacencyList = this.adjacencyList;

    //     (function dfs(vertex) {
    //         if (!vertex) return null;
    //         visited[vertex] = true;
    //         result.push(vertex);
    //         adjacencyList[vertex].forEach(neighbor => {
    //             // console.log(neighbor);
    //             if (!visited[neighbor]) {
    //                 return dfs(neighbor)
    //             }
    //         })
    //     })(start)

    //     return result;
    // }
};




edges = [[1, 2], [1, 3], [2, 3]] // [2,3]
console.log(findRedundantConnection(edges))
/*
[[1,2],[1,3],[2,3]] // [2,3]

loop through each element in edges
if the val in one element occurs in another element 
then that val is the root
and the other vals are the children of that element
return the remaining element


*/