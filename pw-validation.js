let password = prompt("Enter your password at least 8 characters:");
let isValid = false;

while (password.length >= 8) {
  isValid = true;
  break;
}
if (isValid) {
  document.write("<h2>Password is valid!</h2>");
} else {
  document.write("<h2>Password is too short. Try again.</h2>");
}
