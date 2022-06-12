/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function (n) {
        let start = 0;
        let end = n-1;
        while(start < end) {
            let mid = Math.floor((end - start)/2);
            if(isBadVersion(mid)) end = mid;
            else start = mid + 1;
        }
        return start;
    };
    
};

n = 5, bad = 4
solution(n)

/*

s
[1,2,3,4,5]
         e
     m


n = 5, bad = 4
output: 4
start = 0
end = n

*/
