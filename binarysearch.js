/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0;
    let end = nums.length-1;
    let mid = Math.floor((start + end) / 2);

    while(nums[mid] !== target && start <= end) {
        if(target < nums[mid]) { end = mid-1}
        else { start = mid+1 }
        mid = Math.floor((start + end) / 2);
    }
    return nums[mid] === target ? mid : -1;

};

nums = [-1, 0, 3, 5, 9, 12], target = 9
console.log(search(nums, target))
nums2 = [-1, 0, 3, 5, 9, 12], target2 = 0
console.log(search(nums2, target2))

/*
nums = [-1,0,3,5,9,12], target = 9 // output: idx 4
start = 0 
end = nums.length-1
mid = Math.floor((start+end) / 2) = 3
 s    m      e     
[-1,0,3,5,9,12]

if t < m-1 => [-1,0]
if t > m+1 => [5,9,12]
calculate mid again => idx 1 or 9
return mid if it equals the target or return -1

*/