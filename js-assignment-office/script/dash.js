$(document).ready(function () {
    $('#signOutButton').click(function () {
        localStorage.removeItem('users'); 

        window.location.href = "/login.html";  
    });
});
const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('name');

    if (userName) {
      document.getElementById("welcomeMessage").textContent = `Welcome, ${userName}!`;
    } else {
      document.getElementById("welcomeMessage").textContent = "Welcome, Guest!";
    }