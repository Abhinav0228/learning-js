// usage of this keyword

const user = {
    userName: "abhinav",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "sharma"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let uername = "abhinav"
//     console.log(this.username);    // this cannot be used inside function
// }
// one()

// Arrow function

// const addTwo = (num1, num2)=> {     // Explcit retun
//     return num1 + num2
// }  
// const addTwo = (num1, num2)=> num1 + num2   // Implicit retun   // can be written like this and we do not need reurn keyword here
// if we use {} then we have to use reutn keyword if we are not using it we can wrap them in paranthesis
// like below
// const addTwo = (num1, num2)=> (num1 + num2)    // Implicit retun
// console.log(addTwo(4, 5));

// const addTwo = (num1, num2)=> ( {username: "abhinav"} )
// console.log(addTwo());
// if we want to declare object so we use () in arrow function, if we do not use it then the result will be undefined