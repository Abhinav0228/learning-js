// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

let greetings = "Hello world"
for (const greet of greetings) {
    console.log(greet);
}

let greeting = "Hello world"

for (const greet of greeting) {
    if ( greet == " " ) continue
    // console.log(`each char is ${greet}`);
}

// Maps
// collection of keys and value and have all unique values 


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")      // will not include this one, cant have repeated value

// console.log(map);

for (const key of map) {     // it will give an array
    // console.log(key);   
}


for (const [key, value] of map) {  
    // console.log(key, '-', value);   
}

const myObject = {          // will give eror, object is not iterable in for of loop
    game1: "NFS",
    game2: "spiderman"
}

// for (const [key, value] of myObject) {
//      console.log(key, '-', value); 
// }