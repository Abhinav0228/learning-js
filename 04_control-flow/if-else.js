// if statement

if( 2 == "2" ){                     // condition should be true to execute the statment inside if
    // console.log("execute");
}

if( 2 === "2" ){                     // datatype will be checked with triple ===
    // console.log("execute");
}

// <, >, <=, >=, ==, !=(not equal) 

// if else 
const temperature = 40

if (temperature < 50){
    // console.log("The temperatue is less than 50");
}
else{
    // console.log("The temperatue is greater than 50");
}

// short-hand notation

const balance = 1000

// if (balance > 500) console.log("great");  // not use code like this

// if else 

// if (balance < 500){
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){       // && => check both the condition ture, if not do not work
    // console.log("Allow to buy Courses");
}

if ( loggedInFromGoogle || loggedInFromEmail ){  // || either one of the condition should be true
    // console.log("User logged in");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 20 ?? 30

// console.log(val1);

// if the value is null or undefined it will do the saftey check because due to null or undefined the program can stop running



// terniary Operator

// condition ? true statement : false 

const coffePrice = 100
coffePrice >= 80 ? console.log("I will not buy") : console.log("i will buy");

