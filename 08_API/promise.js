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
    console.log("the promise is either resolved or rejected");
})