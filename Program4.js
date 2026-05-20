// Program4) A Javascript Program to count the duplicate characters in the string

function duplicateCount(str) {
    let freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for(let char in freq){
        if(freq[char]>1){
            console.log(char+" occurs "+freq[char]+" times");
        }
    }
}

duplicateCount("programming");


function findDuplicates(str) {
    return str.split('').filter((char, index) =>
        str.indexOf(char) !== index
    );
}

console.log(findDuplicates("javascript"));