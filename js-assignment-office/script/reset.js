$(document).ready(function () {
    $("#resetPasswordForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            oldPassword: {
                required: true
            },
            newPassword: {
                required: true,
                minlength: 6
            },
            confirmPassword: {
                required: true,
                equalTo: "#newPassword"
            }
        },
        messages: {
            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },
            oldPassword: {
                required: "Please enter your old password."
            },
            newPassword: {
                required: "Please enter a new password.",
                minlength: "Password must be at least 6 characters long."
            },
            confirmPassword: {
                required: "Please confirm your new password.",
                equalTo: "Password confirmation does not match."
            }
        },
        submitHandler: function (form) {
            const email = $("#email").val();
            const oldPassword = $("#oldPassword").val();
            const newPassword = $("#newPassword").val();

            $.ajax({
                url: "http://localhost:3000/users", 
                method: "GET",
                success: function (data) {
                    const user = data.find(user => user.email === email);

                    if (user) {
                        if (user.password === oldPassword) {
                            user.password = newPassword;

                            $.ajax({
                                url: `http://localhost:3000/users/${user.id}`, 
                                method: "PUT", 
                                contentType: "application/json",
                                data: JSON.stringify(user),
                                success: function () {
                                    window.location.href = "/login-new.html"; 
                                },
                                error: function () {
                                    alert("Error occurred while updating the password.");
                                }
                            });
                        } else {
                            alert("Old password is incorrect.");
                        }
                    } else {
                        alert("Email not found.");
                    }
                },
                error: function () {
                    alert("Error fetching users. Please try again.");
                }
            });
        }
    });
});