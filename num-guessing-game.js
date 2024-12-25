const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Enter a number:");

do {
  guess = prompt("Try again:Enter a number:");
} while (guess != correctNumber);
document.write(
  "Congratulations! You guessed the correct number:" + correctNumber
);
