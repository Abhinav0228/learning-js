const userEmail = "a@gmail.com"

if ( userEmail ) {
    // console.log("Got user email");
}
else {
    // console.log("Don't have user email");
}

// here we did not compare userEmail to any value still it examined it as a truthy value and executed the statement

// falsy values
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//Truthy values
// "0", "false", " ", [], {}, function(){}

// how to check empty function 

const userName = []

if ( userName.length === 0){
    // console.log("Array is empty");
}

const emptyObj = {}

if ( Object.keys(emptyObj).length === 0 ) {
    console.log("Object is empty");
}