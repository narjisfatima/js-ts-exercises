// Program5) A JavaScript program to check for duplicate elements in an array.

let arr = [1, 2, 3, 3, 4, 2, 1];
let count = []

for(let i of arr){
    count[i] = (count[i] || 0) + 1;
}

for(let i in count){
    if(count[i] > 1){
        console.log(i +" appeared for "+count[i]+" times.");
    }
}

