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

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());



// ********************************************************************************************




// const newUser = new Object()    //singleton object
const newUser = {}
newUser.id = 123
newUser.name = "abhi"
newUser.isLoggedIn = false

// console.log(newUser);

const regularUser = {
    email: "ab@gmail.com",
    fullName: {
        userfullName: {
            firstName: "Abhinav",
            lastName: "Sharma"
        }
    }
}

// console.log(regularUser.fullName.userfullName.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = { obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

// users[1].email
// console.log(newUser);
// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
// console.log(Object.entries(newUser));
// console.log(newUser.hasOwnProperty('isLoggedIn'));



// *************************************************************************************



// Destructuring of obj 
const course = {
    courseName: "js learning",
    coursePrice: 999,
    courseInstructor: "youtube"
}

// course.courseInstructor
// instead of calling courseInstructor, courseName etc again and again we can destructure the obj 

const {courseInstructor: instructor} = course
// courseInstructor ko humne instructor naam de dia and can call it directly like below nd will give same result
console.log(instructor);


// API 
