const form = document.querySelector("form");

const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPassword");
const result = document.getElementById("checkPassword");

const firstName = document.getElementById("FirstName");
const secondName = document.getElementById("SecondName");

const email = document.getElementById("email");
const phone = document.getElementById("phone");

firstName.addEventListener("input", () => {
  formValidationName(firstName);
});
secondName.addEventListener("input", (e) => {
  formValidationName(secondName);
});

email.addEventListener("input", (e) => {
  formValidationEmail(email);
});

phone.addEventListener("input", (e) => {
  formValidationPhone(phone);
});

password.addEventListener("input", (e) => {
  formValidationPassword(password);
  checkPasswordEquality();
});
confirmPass.addEventListener("input", (e) => {
  checkPasswordEquality();
  formValidationPassword(confirmPass);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  x = checkPasswordEquality();
  if (x === true) {
    result.textContent = "Form Submitted.";
    result.setAttribute("style", "color : green;");
  } else {
    result.textContent = "Cannot submit form. Check password and try again.";
    result.setAttribute("style", "color : orange;");
    result.setAttribute("style", "color : orange;");
  }
});

function checkPasswordEquality() {
  let passText = password.value.trim();
  let confirmPassText = confirmPass.value.trim();
  if (passText === "" || confirmPassText === "") {
    result.textContent = "";
    result.classList.add("show");
    return false;
  } else if (passText === confirmPassText) {
    result.textContent = "Passwords Match";
    result.setAttribute("style", "color : green;");
    result.classList.add("show");
    return true;
  } else {
    result.textContent = "Passwords didn't Match";
    result.setAttribute("style", "color : red;");
    result.classList.add("show");
    return false;
  }
}

function formValidationName(name) {
  if (name.validity.tooShort) {
    name.setCustomValidity("Name is too short");
  } else if (name.validity.patternMismatch) {
    name.setCustomValidity("Should not contain any spaces");
  } else {
    name.setCustomValidity("");
  }
}

function formValidationEmail(email) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
}

function formValidationPhone(phone) {
  if (phone.validity.patternMismatch) {
    phone.setCustomValidity("Please enter a 10 digit number");
  } else {
    phone.setCustomValidity("");
  }
}

function formValidationPassword(password) {
  if (password.validity.tooShort) {
    password.setCustomValidity("Password is too short.");
  } else if (password.validity.patternMismatch) {
    password.setCustomValidity(
      "Password is not strong enough. Should contain atleast one number, one special symbol, lowercase and uppercase letters."
    );
  } else {
    password.setCustomValidity("");
  }
}
