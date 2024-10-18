let first = document.querySelectorAll("input[name='first-term']");
let second = document.querySelectorAll("input[name='second-term']");
let third = document.querySelectorAll("input[name='third-term']");
let arr = [];
let arrSecond = []
let arrThird = []
let totalFirst = document.getElementById('totalFirst')
let calcFirst = document.getElementById('calcFirst')
let calcSecond = document.getElementById('calcSecond')
let calcThird = document.getElementById('calcThird')
let grandBtn = document.querySelectorAll('.finalTotalBtn')
let grandMain = document.querySelectorAll('.grandMain')
let grandMarksShow = document.querySelector('.grandMarksShow')


first.forEach((input, index) => {
    input.addEventListener('change', () => {
        let num = parseFloat(input.value);
        let status = document.querySelectorAll('.status1')[index];
        if (!isNaN(num)) {
            // arr.push(num)
            if (num >= 33) {
                // console.log('pass');
                status.innerHTML = "Pass";
            } else {
                console.log('fail');
                status.innerHTML = "Fail";
            }

            arr[index] = num;
        } else {
            console.log("Invalid input");
            status.innerHTML = ""; 
        }
    });
});

calcFirst.addEventListener('click', () => {
    const totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    totalFirstDisplay.textContent = `Total: ${totalSum}`; 
    console.log(`Total: ${totalSum}`);  
    
    const percentOne = (totalSum / 600 ) * 100 ;
    const statusFirst = document.getElementById('statusFirst')
    
    if ( percentOne >= 33 && percentOne <= 50 ) {
        statusFirst.innerHTML = "Third"
        statusFirst.style.backgroundColor = "#ff9033"
        statusFirst.style.color = "#fff"
    }
    else if ( percentOne >=51 && percentOne <=60 ) {
        statusFirst.innerHTML = "Second"
        statusFirst.style.backgroundColor = "#f6f69c"
        statusFirst.style.color = "#000"
    }
    else if ( percentOne >=61 && percentOne <=80 ) {
        statusFirst.innerHTML = "First"
        statusFirst.style.backgroundColor = "#d4fbffeb"
        statusFirst.style.color = "blue"
    }
    else if ( percentOne >=81 && percentOne <=90 ) {
        statusFirst.innerHTML = "Distinct"
        statusFirst.style.backgroundColor = "#6bff6b"
        statusFirst.style.color = "#000"
    }
    else if ( percentOne >=91 && percentOne <=100 ) {
        statusFirst.innerHTML = "Brilliant"
        statusFirst.style.background = "linear-gradient(25deg, #3eb489, #90EE90)";
        statusFirst.style.color = "#000"
    }
    else {
        statusFirst.innerHTML = "Fail"
        statusFirst.style.backgroundColor = "#e00c0cc7"
        statusFirst.style.color = "#fff"
    }
});

second.forEach((input, index) => {
    input.addEventListener('change', () => {
        let num = parseFloat(input.value);
        let status = document.querySelectorAll('.status2')[index];

        if (!isNaN(num)) {
            if (num >= 33) {
                // console.log('pass');
                status.innerHTML = "Pass";
            } else {
                console.log('fail');
                status.innerHTML = "Fail";
            }
            arrSecond[index] = num;
        } else {
            console.log("Invalid input");
            status.innerHTML = ""; 
        }
    });
});

calcSecond.addEventListener('click', () => {
    const totalSum2 = arrSecond.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    totalSecondDisplay.textContent = `Total: ${totalSum2}`; 
    console.log(`Total: ${totalSum2}`); 

    const percentSecond = (totalSum2 / 600 ) * 100 ;
    const statusSecond = document.getElementById('statusSecond')
    
    if ( percentSecond >= 33 && percentSecond <= 50 ) {
        statusSecond.innerHTML = "Third"
        statusSecond.style.backgroundColor = "#ff9033"
        statusSecond.style.color = "#fff"
    }
    else if ( percentSecond >=51 && percentSecond <=60 ) {
        statusSecond.innerHTML = "Second"
        statusSecond.style.backgroundColor = "#f6f69c"
        statusSecond.style.color = "#000"
    }
    else if ( percentSecond >=61 && percentSecond <=80 ) {
        statusSecond.innerHTML = "First"
        statusSecond.style.backgroundColor = "#d4fbffeb"
        statusSecond.style.color = "blue"
    }
    else if ( percentSecond >=81 && percentSecond <=90 ) {
        statusSecond.innerHTML = "Distinct"
        statusSecond.style.backgroundColor = "#6bff6b"
        statusSecond.style.color = "#000"
    }
    else if ( percentSecond >=91 && percentSecond <=100 ) {
        statusSecond.innerHTML = "Brilliant"
        statusSecond.style.background = "linear-gradient(25deg, #3eb489, #90EE90)";
        statusSecond.style.color = "#000"
    }
    else {
        statusSecond.innerHTML = "Fail"
        statusSecond.style.backgroundColor = "#e00c0cc7"
        statusSecond.style.color = "#fff"
    }
});


third.forEach((input, index) => {
    input.addEventListener('change', () => {
        let num = parseFloat(input.value);
        let status = document.querySelectorAll('.status3')[index];

        if (!isNaN(num)) {
            if (num >= 33) {
                // console.log('pass');
                status.innerHTML = "Pass";
            } else {
                console.log('fail');
                status.innerHTML = "Fail";
            }

            arrThird[index] = num;
        } else {
            console.log("Invalid input");
            status.innerHTML = ""; 
        }
    });
});

calcThird.addEventListener('click', () => {
    const totalSum3 = arrThird.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    totalThirdDisplay.textContent = `Total: ${totalSum3}`; 
    console.log(`Total: ${totalSum3}`); 

    const percentThree = (totalSum3 / 600 ) * 100 ;
    const statusThird = document.getElementById('statusThird')
    
    if ( percentThree >= 33 && percentThree <= 50 ) {
        statusThird.innerHTML = "Third"
        statusThird.style.backgroundColor = "#ff9033"
        statusThird.style.color = "#000"
    }
    else if ( percentThree >=51 && percentThree <=60 ) {
        statusThird.innerHTML = "Second"
        statusThird.style.backgroundColor = "#f6f69c"
        statusThird.style.color = "#000"
    }
    else if ( percentThree >=61 && percentThree <=80 ) {
        statusThird.innerHTML = "First"
        statusThird.style.backgroundColor = "#d4fbffeb"
        statusThird.style.color = "blue"
    }
    else if ( percentThree >=81 && percentThree <=90 ) {
        statusThird.innerHTML = "Distinct"
        statusThird.style.backgroundColor = "#6bff6b"
        statusThird.style.color = "#000"
    }
    else if ( percentThree >=91 && percentThree <=100 ) {
        statusThird.innerHTML = "Brilliant"
        statusThird.style.background = "linear-gradient(25deg, #3eb489, #90EE90)";
        statusThird.style.color = "#000"
    }
    else {
        statusThird.innerHTML = "Fail"
        statusThird.style.backgroundColor = "#e00c0cc7"
        statusThird.style.color = "#fff"
    }
});

// let finalResult = []

// for ( let i =0; i < arr.length; i++ ) {
//     finalResult[i] = arr[i] + arrSecond + arrThird
// }

// console.log(finalResult);





// let arrGrand = [];

// grandMain.forEach((item, index) => {
//     arrGrand[index] = []; 
// });

// console.log(arrGrand);

// grandBtn.forEach((item) => {
//     item.addEventListener ('click', ()=> {
                
        
//         for ( let i =0; i < arr.length; i++  ) {
//             let finalResult = [i]
//             finalResult[i] = arr[i] + arrSecond[i] + arrThird[i]
           

//             grandMarksShow.innerHTML = finalResult[i]  
//         }
    
//     })
// })


grandBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let finalResult = []; 

        for (let i = 0; i < arr.length; i++) {
            finalResult[i] = (arr[i] || 0) + (arrSecond[i] || 0) + (arrThird[i] || 0);
        }

        document.getElementById(`showData${index + 1}`).innerHTML=finalResult[index]
        // console.log(`Total Marks for Subject ${index + 1}:`, finalResult[index]);
    });
});





// grandBtn.forEach((index) => {
//     let btnTotal = index
//     btnTotal.addEventListener ('click', ()=> {
            
    
//         for ( let i =0; i < arr.length; i++  ) {
//             let finalResult = []
//             finalResult = arr[i] + arrSecond[i] + arrThird[i]
//             console.log(finalResult);
//         }
       
    
//     })

// })



// grandBtn.forEach((item, index) => {
//     let newArr = []
//     item.addEventListener ('click', ()=> {
//         for (let i = 0; i <= index; i++){
//             newArr += index
//             console.log(newArr, index);
            

//         }
        
//         let arr = []
        
//     })
// })







let finalBtn = document.querySelectorAll('.finalTotalBtn') 
finalBtn.forEach ((element, index) => {
    element.setAttribute('id', 'grandBtn-' + index )
    
})

