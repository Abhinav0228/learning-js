// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for ( let i = 0; i <= 10; i++ ) {
//     let element = i;
//     console.log(element);
// }

for ( let i = 0; i <= 10; i++ ) {
        let element = i;

        if( element == 5 ) {
            // console.log("5 is middle number");
        }

        // console.log(element);
    }


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
        // console.log(`${i}*${j} = ${i*j}` );
    }
}

let myArray = ["iron man", "batman", "spiderman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue

// break == breaks out of loop entirely
// continue == skip an iteration of loop


for (let index = 1; index <= 20; index++) {
    if ( index == 5 ) {
        // console.log(`Detected 5`);
        break
    }
    // console.log(`Value of index is ${index}`); 
}

// continue
for (let index = 1; index <= 20; index++) {
    if ( index == 5 ) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of index is ${index}`); 
}
