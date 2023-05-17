// Your code here

function range(start, end){

    if (start === end){ 
    return [start] }

    range(start, end-1)
}

console.log(range(1, 4))