/**
 * @param {number} length
 */

// var SnapshotArray = function (length) {
//     this.arr = new Array(length).fill(0); // fill sets the element val to 0.
//     this.snapId = 0; // 1st snap() call will return 0
//     this.snapMap = []; // use array to store the array after the snap() call
//     this.currentSnap = {}; // use map to store snapId and element at the time of set
// };

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// //  sets the element at the given index to be equal to val.
// SnapshotArray.prototype.set = function (index, val) {
//     // add element to index in array and add index and val to map
//     /* SnapshotArray {
//         arr: [ 5, 0, 0 ],
//         snapId: 0,
//         snapMap: [],
//         currentSnap: { '0': 5 }
//       } */
//     this.arr[index] = val;
//     this.currentSnap[index] = val;
    
// };

// /**
//  * @return {number}
//  */
// SnapshotArray.prototype.snap = function () {
// /* 
//  SnapshotArray {
//   arr: [ 5, 0, 0 ],
//   snapId: 0, => 1
//   snapMap: [], =>   snapMap: [ { '0': 5 } ],
//   currentSnap: { '0': 5 } => {}
// }
// 0 */
//     let id = this.snapId;
//     // add the current array to snapMap and assign the current snapId as the key
//     this.snapMap[id] = {...this.currentSnap};
//     // make currentSnap an empty map
//     this.currentSnap = {};
//     // increment the snapId
//     this.snapId += 1;
//     // return the snapMap id
//     return id;
// };

// /**
//  * @param {number} index
//  * @param {number} snap_id
//  * @return {number}
//  */
// SnapshotArray.prototype.get = function (index, snap_id) {
// /* 
// SnapshotArray {
//   arr: [ 6, 0, 0 ],
//   snapId: 1,
//   snapMap: [ { '0': 5 } ],
//   currentSnap: { '0': 6 }
// }
// 5

// SnapshotArray {
//   arr: [ 6, 0, 0 ],
//   snapId: 1,
//   snapMap: [ { '0': 5 } ],
//   currentSnap: { '0': 6 }
// }
// 0
// */  // traverse through snapMap starting from current snap_id
//     for(let id = snap_id; id >= 0; id--){
//         // if the id and index is exists in the snapMap then return the element
//         if(this.snapMap[id][index] !== undefined){
//             // console.log(this.snapMap[id][index])
//             return this.snapMap[id][index];
//         }
//     }
//     // otherwise if there snapId exists, but there's no index then return 0;
//     return 0;
// };

/* class */
class SnapshotArray {
    // SnapshotArray { id: 0, current: [], archive: [] }
    constructor(length){ 
        this.id = 0;
        this.current = [];
        this.archive = [];
    }

    // SnapshotArray { id: 0, current: [ 5 ], archive: [] }
    set(index, val){
        this.current[index] = val;
    }

    /* 0
SnapshotArray { id: 1, current: [ 5 ], archive: [ [ 5 ] ] } */
    snap(){
        this.archive.push([...this.current]);
        return this.id++; // returns 0 and then increments id to 1
    }

    /* set(0,6)
    SnapshotArray { id: 1, current: [ 6 ], archive: [ [ 5 ] ] }
return 5 */
    get(index, snap_id){
        const val = this.archive[snap_id][index];
        return val !== undefined ? val : 0;
    }
}


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
console.log(obj)

obj.set(0,6)
console.log(obj)

console.log(obj.get(0,0))
// console.log(obj)
