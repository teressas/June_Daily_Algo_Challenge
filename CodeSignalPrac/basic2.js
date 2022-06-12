/*
Given an integer n and an array a of length n, your task is to apply the following mutation to a:

Array a mutates into a new array b of length n.
For each i from 0 to n - 1, b[i] = a[i - 1] + a[i] + a[i + 1].
If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it should be set to 0. For example, b[0] should be equal to 0 + a[0] + a[1].
Example

For n = 5 and a = [4, 0, 1, -2, 3], the output should be solution(n, a) = [4, 5, -1, 2, 1].

b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4
b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1
So, the resulting array after the mutation will be [4, 5, -1, 2, 1].
b[i] = a[i - 1] + a[i] + a[i + 1]
If some element in the sum a[i - 1] + a[i] + a[i + 1] 
does not exist, it should be set to 0.
b[0] should be equal to 0 + a[0] + a[1].

n = 5 ; b.length  = 5
a = [4, 0, 1, -2, 3]

b[i] = a[i - 1] + a[i] + a[i + 1]

     (i-1)
b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4

b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5

b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1

b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2

b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1

solution(n, a) = [4, 5, -1, 2, 1]
*/

function solution(n, a) {
    // have b array to store results
    let b = [];
    b.length = n;
    // loop through a arr
    for (let i = 0; i < b.length; i++) {
        // console.log(a[i - 1], a[i], a[i + 1])
        // if any of the elements do not exist set val to 0
        
        if (a[i - 1] == undefined) {
            a[i - 1] = 0
            // console.log(a[i - 1])
            // return a[i-1]
        }
        if (a[i] == undefined) {
            a[i] = 0
            // console.log(a[i])
            // return a[i]
        }
        if (a[i + 1] == undefined) {
            a[i + 1] = 0
            // console.log(a[i + 1])
            // return a[i+1]
        }
        // console.log(a[i - 1], a[i], a[i + 1])
        b[i] = a[i - 1] + a[i] + a[i + 1]
        
        
        // b.push(b[i])
        
        // create the val and add the element to the b arr
        console.log(b)
        
    }
    
    return b
    // create index to store in results
    // b[i] = a[i - 1] + a[i] + a[i + 1]
    // if index doesn't exist return 0
    // o(n)
}
a = [4, 0, 1, -2, 3]
n = 5
console.log(solution(n, a))