/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    /* O(n^2) */
    // store the count
    let count = 0;
    // loop through board array
    for (let i = 0; i < board.length; i++) { 
        // loop through each array in board
        for (let j = 0; j < board[i].length; j++) {
            // if the element has an X
            // and both the current array and element before current element is not X
            // and the array before the current array is not X or the array before current and the current idx in the array is not X
            // then increment the count
            if (board[i][j] === 'X'
                && board[i][j-1] !== 'X'
                && (!board[i-1] || board[i-1][j] !== 'X')) count++;
        }
    }
    return count;
};



board = [["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]]
console.log(countBattleships(board))
board2 = [["."]]
console.log(countBattleships(board2))
/*
x x . . x
. . x . x
. . . . x
x x . . .
 */

board3 = [["X", "X", ".", ".", "X"], [".", ".", "X", ".", "X"], [".", ".", ".", ".", "X"], ["X", "X", ".", ".", "."]]
// console.log(countBattleships(board3))

board4 = [["X", ".", ".", "X"], [".", ".", ".", "."], [".", ".", ".", "X"]]
// console.log(countBattleships(board4))

/*
[
  [ 'X', '.', '.', 'X' ], 
  [ '.', '.', '.', 'X' ],board[i][j]
  [ '.', '.', '.', 'X' ]
]

X
.
.
X
.
.
.
X
.
.
.
X
*/