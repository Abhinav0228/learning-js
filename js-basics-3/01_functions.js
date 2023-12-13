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

