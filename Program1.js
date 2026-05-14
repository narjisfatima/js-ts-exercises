// Program1) JavaScript program to filter Admin users from an array of objects and convert their names to uppercase


let arrOfObjects = [
    {name: 'John', role:'Admin'}, 
    {name: 'Kate', role:'User'}, 
    {name: 'Gem', role:'Admin'}
]; 

//Using for..of
//Used to loop through values of iterable objects (arrays, strings, etc.)
console.log("Using for..of")
for(let i of arrOfObjects){
    if(i.role=='Admin'){
        console.log(i.name.toUpperCase());
    }
}

//Using for..in
//Used to loop through keys (properties) of an object.
console.log()
console.log("Using for..in")
for(let i in arrOfObjects){
    if(arrOfObjects[i].role=="Admin"){
        console.log(arrOfObjects[i].name.toUpperCase());
    }
}

//Using for loop
//When you want to loop a specific number of times
console.log()
console.log("Using for loop");
for(let i=0; i<arrOfObjects.length;i++){
    if(arrOfObjects[i].role=="Admin"){
        console.log(arrOfObjects[i].name.toUpperCase());
    }
}

//Using filter and map
//filter() is an array method used to create a new array with only the elements that pass a condition.
//map() is an array method used to create a new array by transforming each element of an existing array.
console.log()
console.log("Using filter and map");
arrOfObjects.filter(user => user.role=="Admin")
            .map(user => console.log(user.name.toUpperCase()));


//Using while loop
//While is a loop used to repeat a block of code as long as a condition is true.
console.log()
console.log("Using while loop");
let i = 0;
while(i < arrOfObjects.length){
    if(arrOfObjects[i].role=="Admin"){
        console.log(arrOfObjects[i].name.toUpperCase());
    }
    i++;
}


//Using do..while loop
//do...while loop is a JavaScript loop that executes a block of code once first, then repeats it while a condition is true.
console.log();
console.log("Using do..while loop");
let k = 0;
do{
    if(arrOfObjects[k].role=="Admin"){
        console.log(arrOfObjects[k].name.toUpperCase());
    }
    k++;
}while(k<arrOfObjects.length);


//Using reduce
//reduce() is a JavaScript array method that reduces an array to a single value by applying a function to each element one by one.

/**
Syntax
-------
array.reduce((acc, curr) => {
logic
}, initialValue);
 **/
//You must return in reduce() because each step needs the returned value to become the accumulator for the next iteration.
console.log();
console.log("Using reduce")
let adminUser = arrOfObjects.reduce((acc, curr)=>{
if(curr.role =="Admin"){
    acc.push(curr.name.toUpperCase());
}
return acc;
}, []).join("\n");
console.log(adminUser);


//Using find()
//find() is an array method used to return the first element that matches a condition
console.log();
console.log("Using find")
let res = arrOfObjects.find( user => user.role == "Admin");
if(res){
    console.log(res.name.toUpperCase());
}

