/*You are given an array of integers numbers and two integers left and right. 
You task is to calculate a boolean array result, 
where result[i] = true if there exists an integer x, 
such that numbers[i] = (i + 1) * x and left ≤ x ≤ right. Otherwise, result[i] should be set to false.

Example
For numbers = [8, 5, 6, 16, 5], left = 1, and right = 3, 
the output should be solution(numbers, left, right) = [false, false, true, false, true].

For numbers[0] = 8, we need to find a value of x such that 1 * x = 8, 
but the only value that would work is x = 8 which doesn't satisfy the boundaries 1 ≤ x ≤ 3, so result[0] = false.
For numbers[1] = 5, we need to find a value of x such that 2 * x = 5, 
but there is no integer value that would satisfy this equation, so result[1] = false.
For numbers[2] = 6, we can choose x = 2 because 3 * 2 = 6 and 1 ≤ 2 ≤ 3, so result[2] = true.
For numbers[3] = 16, there is no an integer 1 ≤ x ≤ 3, such that 4 * x = 16, so result[3] = false.
For numbers[4] = 5, we can choose x = 1 because 5 * 1 = 5 and 1 ≤ 1 ≤ 3, so result[4] = true.
Input/Output
numbers[i] = (i + 1) * x and left ≤ x ≤ right
numbers[2] = (3) * x and 1 <= x <= 3

[execution time limit] 4 seconds (js)

[input] array.integer numbers

An array of integers.

Guaranteed constraints:
1 ≤ numbers.length ≤ 100,
1 ≤ numbers[i] ≤ 106.

[input] integer left

An integer representing the lower bound for x.

Guaranteed constraints:
1 ≤ left ≤ 104.

[input] integer right

An integer representing the upper bound for x.

Guaranteed constraints:
1 ≤ left ≤ right ≤ 104.

[output] array.boolean

A boolean array result described above.
*/
function solution(numbers, left, right) {

    //     have x var ; get x by dividing numbers[i] by i + 1 // 1 (0+1) * x = 8 => 8 / 1 = 8 =>  1 <= x <= 3 => false
    //     nums[i] / i + 1 = x 
    // check x => 1 <= x <= 3

    //     numbers[0] => 8 / 1 = 8; 1 <= 8 <= 3  => false
    //     numbers[1] => 5 / 2 = isInt(2.5) => false
    //     numbers[2] => 6 / 3 = 2; 1 <= 2 <= 3 => true
    //     numbers[3] => 16 / 4 = 4; 1 <= 4 <= 3 => false
    //     numbers[4] => 5 / 5 = 1; 1 <= 1 <= 3 => true
    // 1 ≤ left ≤ right ≤ 104.
    // console.log(left, right, numbers.length)
    if (left < 1 || left > right || right > 104) { return false; }
    // 1 ≤ numbers.length ≤ 100,
    if (numbers.length < 1 || numbers.length > 100) { return false; }
    // have arr store result
    const result = []
    // loop through numbers
    for (let i = 0; i < numbers.length; i++) {
        // have x calculate the remainder of nums[i] / i+1
        let x = numbers[i] / (i + 1)
        // console.log(x)
        // console.log(y)
        // 1 ≤ numbers[i] ≤ 106.
        if (numbers[i] >= 1 && numbers[i] <= 106) {
            // check if num is an int
            if (Number.isInteger(x)) {
                // check if x is a num within left and right
                if (x >= left && x <= right) {
                    // console.log("75",x)
                    // int exists in numbers
                    result.push(true)
                } else {
                    // console.log("78",x)
                    result.push(false)
                }
            } else {
                // console.log("82",x)
                result.push(false)
            }
        } else {
            result.push(false)
        }
    }
    return result
}
numbers = [8, 5, 6, 16, 5]
left = 1
right = 3
console.log(solution(numbers, left, right))  // [false, false, true, false, true]
