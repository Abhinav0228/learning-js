let num = 33;
let numString = String(num);
console.log(typeof numString);


// changing to number
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

operations

// console.log("1" + 2);  // 12
// console.log(1 + "2");   // 12
// console.log("1" + 2 + 2);  //122

// displaying input of user

let userName = window.prompt("what's your name?")
// console.log(userName);

let temp = 15;

if (temp > 0 && temp < 30 ) {
    console.log('The weather is Good!!');
}
else {
    console.log('The weather is Bad!!');
}
