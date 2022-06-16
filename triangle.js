/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    // let sum = triangle[0];
    // console.log(sum)
    // console.log(sum.concat(triangle[1].splice(0,1)));
    // for (let i = 1; i < triangle.length; i++) {
    //     let j = 0;
    //     if (triangle[i][j] < triangle[i][j + 1]) {
    //         sum = triangle[0] + triangle[i][j]
    //         console.log(sum)
    //     }
    // }
    for (let i = triangle.length - 2; i >= 0; i--) {
        console.log(i,triangle[i])
        for (let j = 0; j < triangle[i].length; j++) {
            console.log(j,triangle[j])
            console.log(triangle[i][j],"min",Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]),triangle[i][j])
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
        }

    }
    return triangle[0][0]



};

triangle = [[2], [3, 4], [4, 5, 7]]
console.log(minimumTotal(triangle));

// looks for lesser val in each row
// use only one val in one row
// arr to store sum
// arr to store temp sum
/*
2 
compare 3 and 4 => 3
sum = 2 + 3
compare 6, 5 , 7 => 5
sum = 5 + 5
compare 4, 1, 8, 3 => 1
sum = 10 + 1
*/