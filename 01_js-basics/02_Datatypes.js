let name = "abhinav"  //string
let age = 24  //number
let isLoogedIn = false  //boolean
const tempOutside = null;   //null
let userEmail;  //undefined

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);


//Bigint  => A very large number
//null
//undefined
//symbol => unique
//object

// console.log(typeof undefined);  //undefined
// console.log(typeof null);  //object

// Two datatypes:
// 1. Primitive => call by value   => 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// 2. Non-primitive => Reference type  => Arrays, Objects, Functions

const heros = ["ironman", "shaktiman", "spiderman"]  // Arrays

let obj = {                   // Object
    name: "Abhinav",
    age: 24
}

const myFunction = function(){    // Function
    // console.log("hello world");
}


// Javascript is a dynamic typing language. When you declare a variable, you do not need to specify what type this variable is.

// **************************************************************************************************

// Memory allocations

// Stack(Primitive), Heap(Non-primitive)
// In stack we get the copy of the datatype and in heap we get the refrence(value will be changed in the original value)

// Stack Example =>

let userName = "Abhinav"
let anotherUser = userName;
anotherUser = "Abhi"

// console.log(userName);   // it will have the same initial value abhinav as it was not get changed
// console.log(anotherUser);  // it will have the value abhi as it was changed
// in stack they give the copy of the value 

// Heap Example =>

let userOne = {
    email: "mymail@google.com",
    id: "myid"
}

let userTwo = userOne;
userTwo.email = "abhi@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);

// They both will have the same value as it was stored in a heap storage which call be refrence. actual value get changed.