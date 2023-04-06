const form = document.getElementById("registration-form");

const passwordInput = document.getElementById("password");

const confirmPasswordInput = document.getElementById("confirm-password");

confirmPasswordInput.addEventListener("input", function () {

  if (confirmPasswordInput.value !== passwordInput.value) {

    confirmPasswordInput.setCustomValidity("Passwords do not match");

  } else {

    confirmPasswordInput.setCustomValidity("");

  }

});

form.addEventListener("submit", function (event) {

  event.preventDefault();

  // Handle form submission logic here

});

