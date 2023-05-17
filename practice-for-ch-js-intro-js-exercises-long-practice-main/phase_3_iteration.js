// Your code here

Array.prototype.bubblesort = function() {
    let sorted = false 
    while (sorted === false) {
        sorted = true
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                sorted = false
                // [this[i], this[i+1]] = [this[i+1], this[i]] 
                firstNum = this[i]
                secondNum = this[i + 1]
                this[i] = secondNum
                this[i + 1] = firstNum
            }
        }
    } 
    return this 
}

// console.log([2,3,5,1,2].bubblesort())

String.prototype.substrings = function() {
    let final = []
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            final.push(this.slice(i, j))
        }
    }
    return final
}

// console.log('catman'.substrings()); 
