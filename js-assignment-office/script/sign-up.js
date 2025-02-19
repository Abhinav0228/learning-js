$(document).ready(function () {
    const showPasswordCheckbox = document.getElementById("show-password");
    const showPasswordCheckbox1 = document.getElementById("show-password1");
    const passwordInput = document.getElementById("password");
    const passwordInput1 = document.getElementById("confirmPassword");

    showPasswordCheckbox.addEventListener("change", () => {
        if (showPasswordCheckbox.checked) {
          passwordInput.type = "text"; 
        } else {
          passwordInput.type = "password"; 
        }
      });

      showPasswordCheckbox1.addEventListener("change", () => {
        if (showPasswordCheckbox1.checked) {
          passwordInput1.type = "text"; 
        } else {
          passwordInput1.type = "password"; 
        }
      });



    $.validator.addMethod("passwordMatch", function (value, element) {
        return value === $("#password").val();
    }, "Passwords do not match.");

    $("#signupForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            confirmPassword: {
                required: true,
                passwordMatch: true
            }
        },
        messages: {
            name: "Please enter your full name.",
            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },
            password: {
                required: "Please enter your password.",
                minlength: "Password must be at least 6 characters long."
            },
            confirmPassword: {
                required: "Please confirm your password.",
                passwordMatch: "Passwords do not match."
            }
        },
        submitHandler: function (form) {
            const userData = {
                name: $("#name").val(),
                email: $("#email").val(),
                password: $("#password").val(),
            };

            $.ajax({
                url: "http://localhost:3000/users", 
                method: "GET",
                success: function (data) {
                    const existingUser = data.find(user => user.email === userData.email);
                    if (existingUser) {
                        $("#email").addClass("is-invalid");
                        $("#emailError").text("Error: Email is already in use.");
                    } else {
                        $.ajax({
                            url: "http://localhost:3000/users",
                            method: "POST",
                            contentType: "application/json",
                            data: JSON.stringify(userData),
                            success: function () {
                                window.location.href = "/login.html"; 
                            },
                            error: function () {
                                alert("Error occurred while signing up. Please try again.");
                            }
                        });
                    }
                },
                error: function () {
                    alert("Error checking email. Please try again.");
                }
            });
        }
    });

    $("#email").on('blur', function() {
        const email = $(this).val();
        if (email) {
            $.ajax({
                url: "http://localhost:3000/users",
                method: "GET",
                success: function (data) {
                    const existingUser = data.find(user => user.email === email);
                    if (existingUser) {
                        $("#email").addClass("is-invalid");
                        $("#emailError").text("Error: Email is already in use.");
                    } else {
                        $("#email").removeClass("is-invalid");
                        $("#emailError").text("");
                    }
                },
                error: function () {
                    alert("Error checking email. Please try again.");
                }
            });
        }
    });
});