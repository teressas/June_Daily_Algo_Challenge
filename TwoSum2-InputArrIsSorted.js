

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    if (numbers.length < 2) return;
    if (numbers.length == 2 && numbers[i] + numbers[j] == target) {
        return [i + 1, j + 1];
    }

    while (i < j) {
        // console.log(numbers[i], numbers[j])
        let sum = numbers[i] + numbers[j]
        if (sum == target) {
            return [i + 1, j + 1];
        
        } else if (sum > target) {
            j--
        }
        else if (sum < target){
            i++
        }
    }
};

numbers = [2, 7, 11, 15], target = 9 // [1,2]

numbers2 = [2, 3, 4], target2 = 6 // [1,3]

numbers3 = [-1, 0], target3 = -1 // [1,2]

numbers4 = [2, 7, 11, 15], target4 = 26 // [3,4]

numbers5 = [], target5 = 2 // []

console.log(twoSum(numbers, target))
console.log(twoSum(numbers2, target2))
console.log(twoSum(numbers3, target3))
console.log(twoSum(numbers4, target4))
console.log(twoSum(numbers5, target5))

/*
if num arr length is less than 2 or greater than 3 * 10^4
return 
if target is less than -1000 or more than 1000 return 
loop through arr
element at j can't be greater than target if it is decrement j
target minus ele at j and see if it equals to ele at i, if not increment i
if it does return [i+1, j+1]


i
[2,3,4]
     j
  i
 [2,7,11,15] // 9    
    j
i
[-1,0] // -1
    j
i
[2,7,11,15] // 26
         j
*/

