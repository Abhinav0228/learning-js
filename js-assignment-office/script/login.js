const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("show-password");
const emailErrorDiv = document.getElementById("emailError");
const messageDiv = document.getElementById("message");

const passwordError = document.createElement("div");
passwordError.style.color = "red";
passwordError.style.marginTop = "5px";

const apiUrl = "http://localhost:3000/users";

showPasswordCheckbox.addEventListener("change", () => {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text"; 
  } else {
    passwordInput.type = "password"; 
  }
});

emailInput.addEventListener("blur", async () => {
  const email = emailInput.value;

  emailErrorDiv.textContent = '';
  passwordError.textContent = '';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();

    const user = users.find(user => user.email === email);

    if (!user && email !== "") {
      emailErrorDiv.textContent = "Email not found."; 
      emailErrorDiv.classList.add("d-block"); 
    } else {
      emailErrorDiv.textContent = ""; 
    }
  } catch (error) {
    emailErrorDiv.textContent = "Error checking email.";
    console.error("Error:", error);
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  emailErrorDiv.textContent = '';
  passwordError.textContent = '';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();

    const user = users.find(user => user.email === email);

    if (user) {
      if (user.password !== password) {
        passwordError.textContent = "Password is incorrect."; 
        passwordInput.insertAdjacentElement("afterend", passwordError); 
      } else {
        window.location.href = `/dash-custom.html?name=${user.name}`; 
      }
    } else {
      messageDiv.innerHTML = `<p style="color: red;">Invalid email or password.</p>`;
    }
  } catch (error) {
    messageDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    console.error("Error:", error);
  }
});