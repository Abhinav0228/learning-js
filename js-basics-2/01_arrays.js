// enables storing a collection of multiple items under a single variable name

const myArr = [0 ,5, 7, 3]
// console.log(myArr[2]);

// Array methods
// myArr.push(4)
// myArr.pop()
// console.log(myArr);
// myArr.unshift(6)  add value on the first index(0)
// myArr.shift()

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// const anotherArr = myArr.join()
// console.log(myArr);
// console.log(anotherArr);     //will convert array to string
// console.log(typeof anotherArr);

// slice, splice 

// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("C ", myArr);



const marvel_heros = ["iron_man", "spiderman", "thor"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros);   //this array will not merge together, it will add dc_heros as 4th element in the marvel_heros array
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);   //flash

// concat operation
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// spread operator - all elements get individual value 
// think of like you had a glass cup and you dropped it

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
