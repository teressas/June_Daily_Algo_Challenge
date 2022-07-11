/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/*
This is really a cycle detection problem. The only way that you can't schedule your courses is when the graph is not DAG (directed acyclic graph). In another word, it's cyclic.
In order to check if there is a cycle in graph, you need two sets (visiting and visited)
Whenever you reach a node that is visted, it means that that node is already got "DFS-ed". It's garanteed that that node wont have cycle down the road. Therefore that is one of my base cases to start backtracking.
If you reach a node that is not visited yet (brand new node), you put that node into visiting. It means that that node is currently being "DFS-ed" (past tense verb). In another word, it is being explored.
So whenever you reach this node again down the road, it means that there is a cycle. Therefore this is another base case in which cycle is detected and can return the result early (backtracking)
*/
let visiting; // being explored
let visited; // already explored
let graph;

var canFinish = function(numCourses, prerequisites) {
    graph = new Map();
    visiting = new Set();
    visited = new Set();

    /* build adjacency list from prerequisites
    child is the vertex, parent is the edge
    {4: [3], 3: [2], 2: [1]}
    */
    for(let [v, e] of prerequisites) {
        if(graph.has(v)) {
            let edges = graph.get(v);
            edges.push(e);
            graph.set(v, edges);
        } else {
            graph.set(v, [e]);
        }
    }
    // console.log(graph);

    // loop through adjacency list
    for(const [v,e] of graph) {
        // console.log("27v",v)
        // DFS each vertex
        if(DFS(v)) {
            //if cyclic it will not finish so it is false
            // { 1 => [ 0 ], 0 => [ 1 ] }
            return false; 
        }
    }
    return true;
    
};

var DFS = function(v){
    visiting.add(v); // add the vertex to indicate it's currently being explored
    // console.log("38visiting",visiting)
    
    // edges [ 3 ]
    let edges = graph.get(v); // get all the edges to explore

    if(edges){
        // console.log("edges",edges)
        for(let e of edges) {
            // console.log("e",e)            
            // 3 => [ 2 ]
            if(visited.has(e)) { //skip if it is explored already
                // console.log("cont") 
                continue; // visited Set(4) { 1, 2, 3, 4 }
            }

            if(visiting.has(e)) { //found e is being explored
                // console.log("51true")
                return true;
            }
            
            if(DFS(e)) { // DFS deeper if this e is cyclic
                // console.log("56true")
                return true;
            }
        }
    }
    // visting = { 4, 3, 2, 1 } =>  { 4, 3, 2 } =>  { 4, 3 } => { 4 }
    visiting.delete(v); // remove from visiting set when all decedant v are visited
    // console.log("62visiting",visiting)

    // visited =  { 1 } => { 1, 2 } => { 1, 2, 3 } =>  { 1, 2, 3, 4 }
    visited.add(v);
    // console.log("65visited",visited)
    return false;
}

// numCourses = 2,  
// prerequisites = [[1,0]]
// true

numCourses = 3
prerequisites = [[1,0],[2,1]]
/*
Map(3) { 4 => [ 3 ], 3 => [ 2 ], 2 => [ 1 ] }

*/
// true, DIRECTED ACYCLIC GRAPH (DAG)

// numCourses = 3
// prerequisites = [[1,0],[2,0],[4,2]]
// parent = 0; child = 1
// parent = 0; child = 2
// parent = 2; child = 4
// true



// numCourses = 2, prerequisites = [[1,0],[0,1]] // false, CYCLIC GRAPH
console.log(canFinish(numCourses, prerequisites));
