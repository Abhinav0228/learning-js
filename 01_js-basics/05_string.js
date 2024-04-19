const name = "Abhinav"
const repoCount = "20"

// console.log(name + repoCount);

// console.log(`My name is ${name} and my repo Count is ${repoCount}`);
// console.log(name[0]);

// another way to declare string 
// string is an object and have multiple properties

let gameName = new String('mygamee')  
// console.log(gameName[0]);
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('g'));

// const newString = gameName.substring(0, 4)  // does not include 4, only 0-1-2-3 not 4
// console.log(newString);

const anotherString = gameName.slice(-5, 4)   
// console.log(anotherString);

const trimString = "    Assd             "
// console.log(trimString);
// console.log(trimString.trim());

const url = "https://gaming.com/my%20game"
// console.log(url.replace('%20', '-'));

// console.log(url.includes('game'));

let splitStr = "my name is abhinav sharma"
// console.log(splitStr.split(" "));

const newSplit = splitStr.split(" ")
// console.log(newSplit[2]);

// console.log(splitStr.slice('0', '10'));

// Method chaining => calling one method after the another
//                    in one continous line of code  

let userName = "abhinav"
let letter = userName.charAt(0).toUpperCase();
console.log(letter);