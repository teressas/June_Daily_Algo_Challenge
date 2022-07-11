/*718. Maximum Length of Repeated Subarray
Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

Example 1:

Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].
Example 2:

Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 100
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (A,B) {
    const [len1, len2] = [A.length, B.length];
    // console.log([len1,len2])
    const dp = [...new Array(len1 + 1)].map(() => new Array(len2 + 1).fill(0));
    // console.log(dp)
    let result = 0;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            console.log("A",A[i - 1],"B",B[j - 1])
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                console.log("dp",dp[i][j])

                result = Math.max(result, dp[i][j]);
                console.log("re",result)
            }
        }
    }

    return result;
};
// time: O (m * n) -  traverse through lengths of A, B.
// space: O (m * n) - space used by dp
nums1 = [1, 2, 3, 2, 1], nums2 = [3, 2, 1, 4, 7] // 3
console.log(findLength(nums1,nums2))
/*
[3, 2, 1]

i
[1, 2, 3, 2, 1]

j
[3, 2, 1, 4, 7]

two pointers i for nums1 and j for nums2
while (nums1 and nums2)
if elements from either nums arr match then increment a count


return count
time and complexity: O(m + n)

sliding window 
get the length of shorter arr
traverse through longer arr by the shorter length
[1, 2, 3, 2, 1]
[1, [2, [3, 2, 1]
[3, 2, 1]

binary search
get the shorter length
loop through the longer arr
    for each element, use each element as the target for binary search func
*/