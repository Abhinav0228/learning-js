// Immediately Invoked Function Expressions (IIFE)
// if we have many data in global scope so it can affect inside the funtion so we use iife 
// ()()
// in first () we declare the function expression and in second () we call the function 


// normal function 
// function dataBase(){
//     console.log(`Database connected`);
// }
// dataBase()


// with iife 
(function dataBase(){
    // mamed IIFE
    console.log(`Database connected`);
})();

( () => {
    console.log(`DB connected two`);
})();

// for using two iife we need to use ; after ending of first function 

( (name) => {
    console.log(`DB connected two, ${name}`);
})('abhinav')

