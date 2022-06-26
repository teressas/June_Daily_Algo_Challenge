/*
add even that does not already exist

[10, 20] [15 , 25] [20, 30]
[10,20] => true ; no other bookings

[15, 25]
10 < 15 < 20 => [15,25] false

[20, 30]
10 < 20 < 30 
20 <= 30 
15 <= 20 <= 25

*/
// there's initially no root
var MyCalendar = function () {
    this.root = null;
};


/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */

// let Node have a start, end, left and right val
function Node(start, end) {
    this.start = start;
    this.end = end;
    this.left = null;
    this.right = null;
}

MyCalendar.prototype.book = function (start, end) {
    // if no root return the root node
    if(!this.root) return this.root = new Node(start,end);
    else {
        // add the start and end to the root node
        let checkBooking = (start, end, root) => {
            // console.log("root.e", root.end, " start", start, "root.s", root.start, "end", end)

            // if the root end time is before or same as the start time param
            if(root.end <= start) {
                // if the root has a right, run the function again with the root's right
                // console.log("root.right", root.right)
                if(root.right) return checkBooking(start, end, root.right);
                // if not make a new node and make it the root's right
                else {
                    root.right = new Node(start, end);
                    return true;
                }
            }
            // if the root's start is after the param end
            else if(root.start >= end) {
                // if the root has a left then run the function again with the root's left
                if(root.left) return checkBooking(start, end, root.left);
                else {
                    // if not make a new node and make it the root's left
                    root.left = new Node(start, end);
                    return true;
                }
            }
            // if not, return false; root.e 20  start 15 root.s 10 end 25
            else {
                return false;
            }
        }
        // return the result and add the start and end to the current root node
        return checkBooking(start, end, this.root);
    }

};
// [10, 15, 20] [20, 25, 30]
// [[], [10, 20], [15, 25], [20, 30]]
/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

obj = new MyCalendar();
// console.log(obj)
start = 10, end = 20;
param_1 = obj.book(start, end);
console.log(param_1)
start = 15, end = 25;
param_1 = obj.book(start, end);
console.log(param_1)
start = 20, end = 30;
param_1 = obj.book(start, end);
console.log(param_1)
start = 1, end = 9;
param_1 = obj.book(start, end);
console.log(param_1)


