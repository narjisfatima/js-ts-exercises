// Program3) Write a Javascript Program to reverse a string

let word = "programming";
let reverse = "";

for(let i in word){
    reverse += word[word.length-1-i];
}
console.log(reverse);


//Another way
let reversed = word.split('').reverse().join('');
console.log(reversed);
