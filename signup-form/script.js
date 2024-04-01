
const password = document.querySelector('input[name="password"]');
const confirmPassword = document.querySelector('input[name="confirmPassword"]');
const passwordLabel = document.querySelector('label[for="password"]');
const createAccountButton = document.querySelector(".createAcc");
const errorDiv = document.querySelector(".error"); 

function check() {
  if (password.value !== confirmPassword.value) {
    password.classList.add("invalid");
    errorDiv.textContent = "Passwords do not match"; 
  } else {
    password.classList.remove("invalid");
    errorDiv.textContent = ""; 
  }
}

confirmPassword.addEventListener("input", check);