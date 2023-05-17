// Your code here


Array.prototype.uniq = function() {
    let final = [];
    for (let i = 0; i < this.length; i++) {
        if (!final.includes(this[i]))
        
            final.push(this[i])
    };
    return final 
};


// console.log([1,2,2,3,3,3].uniq()) // => [1,2,3]


Array.prototype.twoSum = function() {
    // debugger
    let final = [] 
    for (let i = 0; i < this.length; i++){
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0)
            final.push([i,j])
        };
    };
    return final
};

// console.log([-1, 0, 2, -2, 1].twoSum()) // => [[0,4] [2,3]]


Array.prototype.transpose = function() {
    let final = [] 
    for (let i = 0; i < this.length; i++){
        let subArray = [] 
        for (let j = 0; j < this.length; j++) {
            subArray.push(this[j][i])
        };
        final.push(subArray)
    };
    return final
};

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose()) // => [[0,3,6], [1,4,7], [2,5,8]]


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