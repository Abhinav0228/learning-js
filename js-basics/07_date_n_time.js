let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myNewDate = new Date(2023, 0, 23)
// console.log( myNewDate.toDateString());

// let myNewDate = new Date(2023, 0, 23, 5, 3)
// console.log( myNewDate.toLocaleString());

// let myTimeStemp = Date.now();
// let myTimeStemp = (Math.floor(Date.now()/1000))
// console.log(myTimeStemp);


let newDate = new Date()
console.log(newDate.getMonth() + 1);
let neww = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(neww);