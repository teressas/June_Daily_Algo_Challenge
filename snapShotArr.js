/**
 * @param {number} length
 */

var SnapshotArray = function (length) {
    this.arr = new Array(length).fill(0); // fill sets the element val to 0.
    this.snapId = 0;
    this.snapMap = [];
    this.currentSnap = {};
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
//  sets the element at the given index to be equal to val.
SnapshotArray.prototype.set = function (index, val) {
    // add snap_id and element in an array to array, id starts at 0
    // 0: [0,5], [1,6]
    this.arr[index] = val;
    this.currentSnap[index] = val;
    
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
    // have a var count increment everytime snap func is called
    // return the count minus 1
    let id = this.snapId;
    this.snapMap[id] = {...this.currentSnap};
    this.currentSnap = {};
    this.snapId += 1;
    return id;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
    // find given index and snap_id in the array and return the element of the index
    for(let id = snap_id; id >= 0; id--){
        console.log("id", id, "snap_id", snap_id);
        if(this.snapMap[id][index] !== undefined){
            // console.log(this.snapMap[id][index])
            return this.snapMap[id][index];
        }
    }
    return 0;
};

/* class
class SnapshotArray {
    constructor(length){
        this.id = 0;
        this.current = [];
        this.archive = [];
    }
    set(index, val){
        this.current[index] = val;
    }

    snap(){
        this.archive.push([...this.current]);
        return this.id++;
    }

    get(index, snap_id){
        const val = this.archive[snap_id][index];
        return val !== undefined ? val : 0;
    }
}
*/

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
var obj = new SnapshotArray(3)
console.log(obj)
obj.set(0,5)

console.log(obj)
// obj.snap();
console.log(obj.snap())
obj.set(0,6)
console.log(obj)
console.log(obj)
obj.set(1,2)
console.log(obj.snap())
console.log(obj)

console.log(obj.get(0,1))
console.log(obj)
