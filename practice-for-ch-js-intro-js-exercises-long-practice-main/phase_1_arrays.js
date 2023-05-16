// Your code here
console.log("message")

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
        for (j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0)
            final.push([i,j])
        };
    };
    return final
};

console.log([-1, 0, 2, -2, 1].twoSum()) // => [[0,4] [2,3]]