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

first.forEach((input, index) => {
    input.addEventListener('change', () => {
        let num = parseFloat(input.value);
        let status = document.querySelectorAll('.status1')[index];

        if (!isNaN(num)) {
            if (num >= 33) {
                console.log('pass');
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
        statusFirst.style.color = "red"
    }
    else if ( percentOne >=51 && percentOne <=60 ) {
        statusFirst.innerHTML = "Second"
        statusFirst.style.color = "yellow"
    }
    else if ( percentOne >=61 && percentOne <=80 ) {
        statusFirst.innerHTML = "First"
        statusFirst.style.color = "blue"
    }
    else if ( percentOne >=81 && percentOne <=90 ) {
        statusFirst.innerHTML = "Distinct"
        statusFirst.style.color = "green"
    }
    else if ( percentOne >=91 && percentOne <=100 ) {
        statusFirst.innerHTML = "Brilliant"
        statusFirst.style.color = "purple"
    }
    else {
        statusFirst.innerHTML = "Fail"
        statusFirst.style.color = "gray"
    }
});



second.forEach((input, index) => {
    input.addEventListener('change', () => {
        let num = parseFloat(input.value);
        let status = document.querySelectorAll('.status2')[index];

        if (!isNaN(num)) {
            if (num >= 33) {
                console.log('pass');
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
        statusSecond.style.color = "red"
    }
    else if ( percentSecond >=51 && percentSecond <=60 ) {
        statusSecond.innerHTML = "Second"
        statusSecond.style.color = "yellow"
    }
    else if ( percentSecond >=61 && percentSecond <=80 ) {
        statusSecond.innerHTML = "First"
        statusSecond.style.color = "blue"
    }
    else if ( percentSecond >=81 && percentSecond <=90 ) {
        statusSecond.innerHTML = "Distinct"
        statusSecond.style.color = "green"
    }
    else if ( percentSecond >=91 && percentSecond <=100 ) {
        statusSecond.innerHTML = "Brilliant"
        statusSecond.style.color = "purple"
    }
    else {
        statusSecond.innerHTML = "Fail"
        statusSecond.style.color = "gray"
    }
});


third.forEach((input, index) => {
    input.addEventListener('change', () => {
        let num = parseFloat(input.value);
        let status = document.querySelectorAll('.status3')[index];

        if (!isNaN(num)) {
            if (num >= 33) {
                console.log('pass');
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
        statusThird.style.color = "red"
    }
    else if ( percentThree >=51 && percentThree <=60 ) {
        statusThird.innerHTML = "Second"
        statusThird.style.color = "yellow"
    }
    else if ( percentThree >=61 && percentThree <=80 ) {
        statusThird.innerHTML = "First"
        statusThird.style.color = "blue"
    }
    else if ( percentThree >=81 && percentThree <=90 ) {
        statusThird.innerHTML = "Distinct"
        statusThird.style.color = "green"
    }
    else if ( percentThree >=91 && percentThree <=100 ) {
        statusThird.innerHTML = "Brilliant"
        statusThird.style.color = "purple"
    }
    else {
        statusThird.innerHTML = "Fail"
        statusThird.style.color = "gray"
    }
});
