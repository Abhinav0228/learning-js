let first = document.querySelectorAll("input[name='first-term']");
let second = document.querySelectorAll("input[name='second-term']");
let third = document.querySelectorAll("input[name='third-term']");
let arr = [];
let arrSecond = [];
let arrThird = [];
let totalFirstDisplay = document.getElementById('totalFirstDisplay');
let totalSecondDisplay = document.getElementById('totalSecondDisplay');
let totalThirdDisplay = document.getElementById('totalThirdDisplay');
let calcFirst = document.getElementById('calcFirst');
let calcSecond = document.getElementById('calcSecond');
let calcThird = document.getElementById('calcThird');

// First Term Marks Calculation
first.forEach((input, index) => {
    input.addEventListener('change', () => {
        let num = parseFloat(input.value);
        let status = document.querySelectorAll('.status1')[index];
        if (!isNaN(num)) {
            arr[index] = num; // Store in arr
            status.innerHTML = num >= 33 ? "Pass" : "Fail";
        } else {
            status.innerHTML = ""; 
        }
    });
});

calcFirst.addEventListener('click', () => {
    const totalSum = arr.reduce((accumulator, currentValue) => accumulator + (currentValue || 0), 0);
    totalFirstDisplay.textContent = `Total: ${totalSum}`; 
    console.log(`Total for 1st Term: ${totalSum}`);
});

// Second Term Marks Calculation
second.forEach((input, index) => {
    input.addEventListener('change', () => {
        let num = parseFloat(input.value);
        let status = document.querySelectorAll('.status2')[index];
        if (!isNaN(num)) {
            arrSecond[index] = num; // Store in arrSecond
            status.innerHTML = num >= 33 ? "Pass" : "Fail";
        } else {
            status.innerHTML = ""; 
        }
    });
});

calcSecond.addEventListener('click', () => {
    const totalSum2 = arrSecond.reduce((accumulator, currentValue) => accumulator + (currentValue || 0), 0);
    totalSecondDisplay.textContent = `Total: ${totalSum2}`; 
    console.log(`Total for 2nd Term: ${totalSum2}`);
});

// Final Term Marks Calculation
third.forEach((input, index) => {
    input.addEventListener('change', () => {
        let num = parseFloat(input.value);
        let status = document.querySelectorAll('.status3')[index];
        if (!isNaN(num)) {
            arrThird[index] = num; // Store in arrThird
            status.innerHTML = num >= 33 ? "Pass" : "Fail";
        } else {
            status.innerHTML = ""; 
        }
    });
});

calcThird.addEventListener('click', () => {
    const totalSum3 = arrThird.reduce((accumulator, currentValue) => accumulator + (currentValue || 0), 0);
    totalThirdDisplay.textContent = `Total: ${totalSum3}`; 
    console.log(`Total for Final Term: ${totalSum3}`);
});
