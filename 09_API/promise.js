// a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. Promises are used to handle asynchronous operations such as fetching data from a server, reading files, or any operation that takes time to complete.

const promiseOne = new Promise((resolve, reject ) => {
    // Do asyn task
    // DB calls, network call
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    }, 1000);
});

// then keyword is assosiated with resolve 
promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('async 2 resolved');
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "abhinav", email: "abhi.com"})
    }, 1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "abhinav", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

PromiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then( (username) => {
    console.log(username);
} ).catch(function(error){
    console.log(error);
}).finally(()=>{
    //this will always be executed either it is resolved or rejected
    console.log("the promise is either resolved or rejected");
})


// Promise using async await 
const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: Js went wrong')
        }
    }, 1000);
});

// async await wait till the work is done, if done then proceed else give error
// catch not handled propery in async await

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response =  await fetch ('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("User not found");
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
} )
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// task queue in js execution 
// In JavaScript, the task queue is a part of the event loop mechanism that helps manage the execution of asynchronous code. The event loop is a fundamental concept in JavaScript that handles the execution of code, managing tasks, and handling events in a non-blocking manner.

// Here's a simplified overview of the event loop process:

// Execution Stack (Call Stack): This is where synchronous code execution happens. Functions are pushed onto the stack and executed one by one.

// Web APIs and Callback Queue: Asynchronous operations, such as network requests, timers, and other events, are handled by Web APIs (provided by the browser or environment). When these asynchronous operations complete, their associated callbacks are placed in the Callback Queue.

// Event Loop: The event loop constantly checks if the execution stack is empty. If it is, it takes the first task from the Callback Queue (if any) and pushes it onto the Execution Stack.

// Task Queue (or Microtask Queue): This is where tasks scheduled by the event loop, like Promises and other microtasks, are placed. Tasks in the Task Queue have a higher priority than the Callback Queue.



// chat gpt example
// Example Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const data = { message: 'Data fetched successfully' };
        resolve(data);
      }, 1000);
    });
  };
  
  // Using two .then() for promise chaining
  fetchData()
    .then((result) => {
      // First .then(): Handling the resolved value
      console.log(result.message); // Outputs: Data fetched successfully
      
      // Performing some transformation
      return result.message.toUpperCase();
    })
    .then((transformedResult) => {
      // Second .then(): Handling the result of the transformation
      console.log(transformedResult); // Outputs: DATA FETCHED SUCCESSFULLY
    })
    .catch((error) => {
      // Handling errors from any step in the chain
      console.error('Error:', error);
    });
  