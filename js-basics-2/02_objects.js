// Singleton :
// The Singleton Pattern ensures that a class can only have a single instance throughout the lifetime of an application.
// object.create

// object literals
const mySym = Symbol("key1")    // for using symbol we have to declare symbol first then adding it in object its key should be in [] [mySym]: "key1"

const jsUser = {
    name: "abhinav",
    age: 24,
    location: "chandigarh",
    email: "myemail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "key1"
}

// by default key is taken as string 
// if key is declared in string then you cannot access the data using .(jsUser.age)
// console.log(jsUser.age);     // one method to access object data
// console.log(jsUser["age"]);   // another method to access object data

// console.log(jsUser[mySym]);  // to access symbol data
// console.log(jsUser); 


// jsUser.email = "mynewgmail.com"
// Object.freeze(jsUser)
// jsUser.email = "myanothernewgmail.com"   // no error but will not be reflect in main object due to freeze object
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello there");
}
jsUser.greetingTwo = function(){
    console.log(`hello there, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
