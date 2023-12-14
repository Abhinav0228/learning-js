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

console.log(this);