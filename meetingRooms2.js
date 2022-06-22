/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    // compare the start and end times
    const start = intervals.map(n => n[0]).sort((a, b) => a - b);
    const end = intervals.map(n => n[1]).sort((a, b) => a - b);
    let s = 0, e = 0, count = 0, maxCount = 0;
    while (s < intervals.length) {
        let sTime = start[s],
            eTime = end[e];
        console.log(s, sTime, eTime)
        // if the start < end then increment the count,
        if (sTime < eTime) {
            count++;
            maxCount = Math.max(maxCount, count); // make sure we keep track of the greatest count val
            // increment the start to look at the next idx
            s++;
        }
        else {
            // else decrement the count and increment end
            count--;
            e++;
        }
        console.log("count",count, "maxCount", maxCount)

    }
    return maxCount;
};

intervals = [[0, 30], [5, 10], [15, 20]] //  2

console.log(minMeetingRooms(intervals))
/*
[[0,30],[5,10],[15,20]]
0 0 10
count 1 maxCount 1
1 5 10
count 2 maxCount 2
2 15 10
count 1 maxCount 2
2 15 20
count 2 maxCount 2
2

5,10 can't go into same room as 0,30 because 0 < 5 and 10 < 30 
if start and end < next start and end then increment count
else if start < next start and end > next end then increment count
        s
[0, 5, 15]
     e
[10, 20, 30]

count = 2
maxCount = 2 


[[7,10],[2,4]]
[2, 7]
[4, 10]

2 < 4 => count = 1, maxCount = 1
*/


intervals2 = [[7, 10], [2, 4]] // 1
// console.log(minMeetingRooms(intervals2))
