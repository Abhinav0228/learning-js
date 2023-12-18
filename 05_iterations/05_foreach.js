const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {      for each is a call back function so it will not have function name so we use arrow function mostly
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )


function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe)    // do not execute only giving the refrence by not adding () after printME

// coding.forEach( (item, index, arr) => {  
//     console.log(item, index, arr);
// } )


// *******************************************************************************************

//  iteration of objects inside array 
// important


const myCoding = [
    {
        languageName: "javascript",
        shortName: "js"
    },
    {
        languageName: "java",
        shortName: "java"
    },
    {
        languageName: "python",
        shortName: "py"
    }
]

myCoding.forEach ( (item)=> {
    // console.log(item);     // it will print the whole obj
    console.log(item.languageName);
} )