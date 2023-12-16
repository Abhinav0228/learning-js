function sayMyName(){
    console.log("a");
    console.log("b");
    console.log("h");
    console.log("i");
}
// sayMyName       // it is a refrence
// sayMyName()        // it is execute

function addTwoNumbers(number1, number2){          // number1, number2=> parameters
    console.log(number1 + number2);
}

addTwoNumbers(4, 6)                                  // 4, 6  => arguments

function addTwoNumbers(number1, number2){   
    // let result = number1 + number2
    // return result                            //OR
    return number1 + number2
}
const newResult = addTwoNumbers(4, 8)
// console.log("Result: ", newResult);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
    console.log("hello");              // code will not run after return keyword
}
// console.log(loginUserMessage("abhinav"));



function calculateCartPrice(num1){
    return num1
}
// console.log(calculateCartPrice(10));
// console.log(calculateCartPrice(100, 200, 300));      // will consider only first value
// to calucalte all we have to use rest operator

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(300, 200, 300));


const user = {
    userName: "Abhinav",
    price: 199
}

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user)
// not neccessary we have to define object first we can also do like below

handleObject({
    userName: "abhi",
    price: 499
})

const myNewArray = [200, 500, 900, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
