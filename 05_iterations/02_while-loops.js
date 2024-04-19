// while 

// while (condition) {
// }

// while loop ==> repeat some code 
//                while some condition is true
//                potentially infinite

let index = 0
while ( index <= 10 ) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}


let myArray = ["iron man", "batman", "spiderman"]

let superHeros = 0
while ( superHeros < myArray.length ) {
    // console.log(`value is ${myArray[superHeros]}`);
    superHeros = superHeros + 1
}

// do while loop
// do something then check the CSSConditionRule, 
// repeat if condition is true

let score = 11
do {
    console.log(`score is ${score}`);
    score++
} while (score <= 10);      