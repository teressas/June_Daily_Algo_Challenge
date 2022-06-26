/*
Design a logger system that receives a stream of messages along with their timestamps. Each unique message should only be printed at most every 10 seconds (i.e. a message printed at timestamp t will prevent other identical messages from being printed until timestamp t + 10).

All messages will come in chronological order. Several messages may arrive at the same timestamp.

Implement the Logger class:

Logger() Initializes the logger object.
bool shouldPrintMessage(int timestamp, string message) Returns true if the message should be printed in the given timestamp, otherwise returns false.

*/


var Logger = function () {
    this.map = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
    // put the message in a hash map and the value is the timestamp +10
    // have a if check to check if the message exists in the map already
    if(!this.map.get(message) || this.map.get(message) <= timestamp) {
        this.map.set(message,timestamp + 10);
        return true;
    }
    // console.log(this.map)
    return false;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

// ["Logger", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage"]
// [[], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]]
//[null, true, true, false, false, false, true]


let logger = new Logger();
console.log(logger.shouldPrintMessage(1, "foo"));  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
console.log(logger.shouldPrintMessage(2, "bar"));  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
console.log(logger.shouldPrintMessage(3, "foo"));  // 3 < 11, return false
console.log(logger.shouldPrintMessage(8, "bar"));  // 8 < 12, return false
console.log(logger.shouldPrintMessage(10, "foo")); // 10 < 11, return false
console.log(logger.shouldPrintMessage(11, "foo")); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
console.log(logger.shouldPrintMessage(22, "foo")); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
