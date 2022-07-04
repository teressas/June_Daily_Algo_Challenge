/*
Suppose we have an unsorted log file of accesses to web resources. Each log entry consists of an access time, the ID of the user making the access, and the resource ID. 

The access time is represented as seconds since 00:00:00, and all times are assumed to be in the same day.

For example:
logs1 = [
    ["58523", "user_1", "resource_1"],
    ["62314", "user_2", "resource_2"],
    ["54001", "user_1", "resource_3"],
    ["200", "user_6", "resource_5"],    
    ["215", "user_6", "resource_4"],
    ["54060", "user_2", "resource_3"],
    ["53760", "user_3", "resource_3"],
    ["58522", "user_22", "resource_1"],
    ["53651", "user_5", "resource_3"],
    ["2", "user_6", "resource_1"],
    ["100", "user_6", "resource_6"],
    ["400", "user_7", "resource_2"],
    ["100", "user_8", "resource_6"],
    ["54359", "user_1", "resource_3"],
]

We would like to compute user sessions, specifically: write a function that takes the logs and returns a data structure that associates to each user their earliest and latest access times.

Example:
{
    'user_1': [54001, 58523], 
    'user_2': [54060, 62314], 
    'user_3': [53760, 53760], 
    'user_5': [53651, 53651], 
    'user_6': [2, 215], 
    'user_7': [400, 400], 
    'user_8': [100, 100],
    'user_22': [58522, 58522], 
    }

Example 2:
logs2 = [
    ["300", "user_1", "resource_3"],
    ["599", "user_1", "resource_3"],
    ["900", "user_1", "resource_3"],
    ["1199", "user_1", "resource_3"],
    ["1200", "user_1", "resource_3"],
    ["1201", "user_1", "resource_3"],
    ["1202", "user_1", "resource_3"]
]

Should return:
{'user_1': [300, 1202]}



Example 3:
logs3 = [
    ["300", "user_10", "resource_5"]
]

Should return:
{'user_10': [300, 300]}
*/

function userLog(array) {
    const map = new Map();
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // get the user from each element and store it as a key in an object 
        let [accessTime] = array[i];
        let userId = array[i][1]
        if (map.has(userId)) {
            // every time we encounter that same user
            // check if the access time is less than or greater than the earliest and latest time that's currently set as the value in the obj
            // if it's less or equal, then the value is the earliest time, 
            // if it's greater or equal, the access time is the latest.
            // console.log(accessTime, map.get(userId)[0])
            let latestTime = Math.max(accessTime, map.get(userId)[1])
            let earliestTime = Math.min(accessTime, map.get(userId)[0])
            // console.log(latestTime,earliestTime)
            map.set(userId, [earliestTime, latestTime])
            // if(map.get(userId) > accessTime) {
            // }
        } else {
            // set earliest and latest access time from that element initially as the value => { user_1: [et, lt] }
            map.set(userId, [accessTime, accessTime])
        }
        // console.log(map)
    }
    return map

}

const logs1 = [
    ["58523", "user_1", "resource_1"],
    ["62314", "user_2", "resource_2"],
    ["54001", "user_1", "resource_3"],
    ["200", "user_6", "resource_5"],
    ["215", "user_6", "resource_4"],
    ["54060", "user_2", "resource_3"],
    ["53760", "user_3", "resource_3"],
    ["58522", "user_22", "resource_1"],
    ["53651", "user_5", "resource_3"],
    ["2", "user_6", "resource_1"],
    ["100", "user_6", "resource_6"],
    ["400", "user_7", "resource_2"],
    ["100", "user_8", "resource_6"],
    ["54359", "user_1", "resource_3"],
];

console.log(userLog(logs1))

/*
e     l
{user_1 : [54001,58523], user_2: [54060, 62314], user_6: [200, 215], user_3: [53760], user_22: [58522], user_5: [53651]}
{user_1 : [54001,58523], user_2: [54060, 62314], user_6: [2, 215], user_3: [53760], user_22: [58522], user_5: [53651], user_7: [400, 400], user_8: [100 ,100]}

*/
const logs2 = [
    ["300", "user_1", "resource_3"],
    ["599", "user_1", "resource_3"],
    ["900", "user_1", "resource_3"],
    ["1199", "user_1", "resource_3"],
    ["1200", "user_1", "resource_3"],
    ["1201", "user_1", "resource_3"],
    ["1202", "user_1", "resource_3"],
];

const logs3 = [
    ["300", "user_10", "resource_5"],
];

