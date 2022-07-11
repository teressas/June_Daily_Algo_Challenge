/*
Given two user's browser history, find the longest continuous common
history between user1 and user2.
Example: 
Input: [
    ["3234.html", "xys.html", "7hsaa.html"], 
    ["3234.html", ''sdhsfjdsh.html", "xys.html", "7hsaa.html"]
]
Output: ["xys.html", "7hsaa.html"]
*/

function longestCommonHistory(history1, history2) {
    // if there's no history or history is empty return empty array
    if (
        !history1 ||
        !history2 ||
        history1.length === 0 ||
        history2.length === 0
    ) {
        return [];
    }
    // initialize a count to -1 and an empty array
    let count = -1;
    let result = [];
    // create an array with the length of history1 +1 and each element will be an array with the history2
    const memo = Array.from({ length: history1.length + 1 }, () =>
        Array.from({ length: history2.length }, () => 0)
    );
    // loop through history1, starting at index 1
    for (let i = 1; i <= history1.length; i++) {
        // loop through history2, starting at index 1
        for (let j = 1; j <= history2.length; j++) {
            // if there's a match
            if (history1[i - 1] === history2[j - 1]) {
                // add 1 to the memo at the current index
                memo[i][j] = 1 + memo[i - 1][j - 1];
                // if the value at element is greater than count, this keeps track of the longest continuous common history
                if (memo[i][j] > count) {
                    // make the value the count value
                    count = memo[i][j];
                    // get that element and store it in the result to return at the end 
                    result = history1.slice(i - count, i);
                    console.log(history1.slice(i - count, i))
                }
            }
        }
    }
    return result;
}

/* 
[ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
3234.html 3234.html
[ [ 0, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
count = 1
result = [ '3234.html' ]
xys.html xys.html
[ [ 0, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 0, 1 ], [ 0, 0, 0, 0 ] ]
7hsaa.html 7hsaa.html
[ [ 0, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 0, 1 ], [ 0, 0, 0, 0, 2 ] ]
[ 'xys.html', '7hsaa.html' ]
*/
history1 = ["3234.html", "xys.html", "7hsaa.html"];
history2 = ["3234.html", "sdhsfjdsh.html", "xys.html", "7hsaa.html"];

console.log(longestCommonHistory(history1, history2));