let name = "abhinav"  //string
let age = 24  //number
let isLoogedIn = false  //boolean
const tempOutside = null;   //null
let userEmail;  //undefined

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


//Bigint  => A very large number
//null
//undefined
//symbol => unique
//object

// console.log(typeof undefined);  //undefined
// console.log(typeof null);  //object

// Two datatypes:
// 1. Primitive => call by value   =>7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// 2. Non-primitive => Reference type  => Arrays, Objects, Functions

const heros = ["ironman", "shaktiman", "spiderman"]  // Arrays

let obj = {                   // Object
    name: "Abhinav",
    age: 24
}

const myFunction = function(){    // Function
    console.log("hello world");
}


// Javascript is a dynamic typing language. When you declare a variable, you do not need to specify what type this variable is.