/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.array = [];
    let total = 0;
    for(let element of w){
        total += element;
        this.array.push(total);
    }
    this.total = total;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {    
    let target = Math.floor(Math.random() * this.total);
    console.log(target);
    let left = 0, right = this.array.length - 1;
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        console.log(this.array[mid], mid, target)
        if(this.array[mid] > target) {
            right = mid;
            console.log("r",right)
        } 
        else {
            left = mid - 1;
            console.log("l",left)
        }
        return left;
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
w = [11, 20, 4, 42]
var obj = new Solution(w)
console.log(obj)
var param_1 = obj.pickIndex()
console.log(param_1)
console.log(param_1)
console.log(param_1)
console.log(param_1)

// w2 = [1, 3, 5,6 ]
// var obj = new Solution(w2)
// console.log(obj)
// var param_1 = obj.pickIndex()
// console.log(param_1)
// console.log(param_1)
// console.log(param_1)
// console.log(param_1)


// var Solution = function (w) {
//     this.array = []; 
//     let total = 0; // create var to store total
//     for (let x of w) { 
//         total += x; // sum each element
//         this.array.push(total); // add the total to the end of arr
//     }
//     // w.forEach(element => {
//     //     total += element;
//     //     this.array.push(total);
//     // })
//     this.total = total;
// };

// /**
//  * @return {number}
//  */
// Solution.prototype.pickIndex = function () {    
//     // Math.random() = 0.14422211297379217
//     // this.total = 45
//     // Math.random() * this.total = Math.floor(32.905676019837685) = 32
//     let target = Math.floor(Math.random() * this.total); 
//     console.log(target);
//     let l = 0, r = this.array.length-1;
//     while(l < r){
//         let mid = Math.floor((l+r) / 2);
//         console.log("mid",mid)
//         if(this.array[mid] > target) r = mid;
//         else l = mid + 1;
//     }
//     return l;

// };