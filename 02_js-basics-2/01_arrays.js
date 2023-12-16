// enables storing a collection of multiple items under a single variable name

const myArr = [0 ,5, 7, 3]
// console.log(myArr[2]);

// Array methods
// myArr.push(4)
// myArr.pop()
// console.log(myArr);
// myArr.unshift(6)  add value on the first index(0)
// myArr.shift()

// console.log(myArr.includes(8));      // boolean result
// console.log(myArr.indexOf(3));       // -1 is the result is false

// const anotherArr = myArr.join()
// console.log(myArr);
// console.log(anotherArr);     //will convert array to string
// console.log(typeof anotherArr);

// slice, splice 

// console.log("A ", myArr);
// console.log(myArr.slice(1, 3));
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("C ", myArr);

// slice does not change the original array but  nal array


const marvel_heros = ["iron_man", "spiderman", "thor"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros);   //this array will not merge together, it will add dc_heros as 3rd element in the marvel_heros array

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);   //flash

// concat operation
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// spread operator - all elements get individual value 
// think of like you had a glass cup and you dropped it


// if we have many arrays to merge together
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const multiple_array = [1, 2, 3, [4, 5, 6], 7, [6, 7 , [4, 5]]];
const real_multiple_array = multiple_array.flat(Infinity)
// console.log(real_multiple_array);

// console.log(Array.isArray("Abhinav"));   //Boolean
// console.log(Array.from("Abhinav"));   //converts string to array
// console.log(Array.from({name: "abhinav"}));   //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
