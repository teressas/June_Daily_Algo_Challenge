/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    // have a var to store the count of islands
    let numOfIslands = 0;

    function dfs(r, c) {
        if (r < 0 || r >= grid.length
            || c < 0 || c >= grid[r].length
            || grid[r][c] == 0) return;

        grid[r][c] = 0;

        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    // define m and n
    const row = grid.length;
    // loop through the grid
    for (let r = 0; r < row; r++) {
        const col = grid[r].length;
        for (let c = 0; c < col; c++) {
            // if there's a 1 use dfs to check all the adjacent cells and increment the count of islands
            if (grid[r][c] == '1') {
                // console.log(grid, i, j, m, n)
                numOfIslands++;
                // recursive call, 
                dfs(r, c);
            }
        }
    }
    return numOfIslands;
};
// grid = [
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"]
// ] 
// 1

grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
// 3
console.log(numIslands(grid))
/*

grid = [

["1","1","1","1","0"],  
["1","1","0",["1"],"0"],
["1","1","0","0","0"],  
["0","0","0","0","0"]  
]   
// 1

grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0",["1"],"0","0"],
    ["0","0","0",["1"],["1"]]
]
// 3
m == grid.length
!(m < 1)
n == grid[i].length
grid[i][j] will be either 1 or 0
*/