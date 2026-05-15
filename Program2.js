// Program2) JavaScript program to check the presence of property. Consider 'id' in this case. 

let response = [{id:1, x:2}, {id:2, x:2}, {idd:3, x:2}]

//some() is a JavaScript array method that checks whether at least one element in the array satisfies a condition.
console.log(response.some(obj => obj?.id !== undefined));

console.log(response.some(obj => obj.hasOwnProperty('id')));

//every() is a JavaScript array method that checks whether all elements in the array satisfy a condition.
console.log(response.every(o => 'id' in o));

// Object.assign({}, ..) is a JavaScript method used to copy properties from one or more objects into a target object.
console.log('id' in Object.assign({}, ...response));

//hasOwnProperty is a JavaScript method used to check whether an object directly contains a property (not inherited).
console.log("\nUsing hasOwnProperty")
for(let i in response){ 
    let result = response[i].hasOwnProperty('id');
    console.log(result);
}

//Object.hasOwn is a modern JavaScript method used to check whether an object directly has a given property.
console.log("\nUsing hasOwn")
for(let i in response){
    let result = Object.hasOwn(response[i], 'id');
    console.log(result);
}

console.log("\nCheck id property not equals undefined");
for(let i in response){
    let result = response[i].id !== undefined;
    //Checks safely whether response[i] exists and has an id property without throwing an error.
    //let result = response[i]?.id !== undefined;
    console.log(result);
}

console.log("\nUsing [{}] destructuring")
// Array destructuring: Extracting values from an array into variables.
// Object destructuring: Extracting properties from an object into variables.
const [{id}] = response;
console.log(id);



console.log("\nUsing for..in")
for(let i in response){
    if('id' in response[i]){
        console.log("ID exists in - ", response[i])
    }
}

console.log("\nUsing for..of")
for(let i of response){
    if('id' in i){
        console.log('ID exists in - ', i);
    }
}

console.log("\nUsing forEach")
response.forEach(value => {
    if('id' in value){
        console.log('ID exists in - ', value);
    }
})

console.log("\nUsing map")
response.map(value => {
    if('id' in value){
        console.log('ID exists in - ', value);
    }
})

console.log("\nUsing filter")
response.filter(item => 'id' in item)
        .forEach(item => {
            console.log('ID exists in - ', item);
        })