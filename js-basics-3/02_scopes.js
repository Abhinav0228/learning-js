let a = 300

if (true) {       
    let a = 10
    let b = 20
    // console.log(a);    // Block Scope
}
// console.log(a);    // Global Scope

function one(){
    const userName = "abhinav"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

    // two()
}

// one()

// child function can access the parents variable

if (true){
    const username = "abhinav"
    if (username === "abhinav") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++++++++++++  interesting  +++++++++++++++++++++++++++++++++++++++++++++


console.log(addOne(5));     // can be use before declaration
function addOne(num){
    return num + 1
}


addTwo(5)        // cannot be use before declaration, will give error because we have declared function in variable.
const addTwo = function(num){
    return num  + 2
}
