// Your code here

Array.prototype.myEach = function(callback) {
    
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

function timesTwo(num) {
     return num * 2
}

// console.log([1,2,3].myEach(timesTwo))

Array.prototype.myMap = function(callback) {
    let final = [];
this.myEach(function (ele) {
    final.push(callback(ele))
})
    // for (let i = 0; i < this.length; i++) {
       
    return final;
}

// console.log([2,1,3,4].myMap(timesTwo))

Array.prototype.myReduce = function(callback, initialValue) {

    const arrayCopy = this.slice() 
    
    if (initialValue !== undefined){
        arrayCopy.unshift(initialValue)
    }
    let acc = arrayCopy.shift()
    arrayCopy.myEach(function (ele) {
        acc = callback(acc, ele)
    })
    return acc

    // let count = 0
    // if (initialValue !== null) {
    //     count += initialValue 
    //     this.myEach(function (ele) {
    //         count += callback(ele)
    //     })
    // }
    // return count
}

// console.log([1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   })); // => 6

//  console.log([1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }, 25)); // => 31