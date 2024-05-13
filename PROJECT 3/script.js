let btn = document.querySelector("#generate");
let h2 = document.querySelector("#otp");
btn.addEventListener("click", () => {
  const o = Math.floor(1000 + Math.random() * 9000);
  h2.textContent = o;
});

//rpc
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);
  if (userChoice === compChoice) {
    msg.textContent = "it is a draw";
  } else {
    if (userChoice === "rock") {
      //scissors,paper
      if (compChoice == "paper") {
        msg.textContent = "computer wins";
      } else {
        msg.textContent = "you wins";
      }
    } else if (userChoice === "paper") {
      if (compChoice == "scissors") {
        msg.textContent = "computer wins";
      } else {
        msg.textContent = "you wins";
      }
    } else {
      if (compChoice == "rock") {
        msg.textContent = "computer wins";
      } else {
        msg.textContent = "you wins";
      }
    }
  }
};

//roll the dice
let roll = document.querySelector("#roll");
let dice = document.querySelector("#dice");
roll.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  dice.textContent = roll;
});

//pass

let pas = document.querySelector("#pas");
let pass = document.querySelector("#pass");

function generateRandomPassword() {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_+=<>?";

  // Generate random characters
  const firstLetter = uppercaseLetters.charAt(
    Math.floor(Math.random() * uppercaseLetters.length)
  );
  const firstNumber = numbers.charAt(
    Math.floor(Math.random() * numbers.length)
  );
  const secondNumber = numbers.charAt(
    Math.floor(Math.random() * numbers.length)
  );
  const randomLowercaseLetter1 = lowercaseLetters.charAt(
    Math.floor(Math.random() * lowercaseLetters.length)
  );
  const randomLowercaseLetter2 = lowercaseLetters.charAt(
    Math.floor(Math.random() * lowercaseLetters.length)
  );
  const specialChar = specialCharacters.charAt(
    Math.floor(Math.random() * specialCharacters.length)
  );

  // Combine characters to form password
  const password =
    firstLetter +
    firstNumber +
    randomLowercaseLetter1 +
    randomLowercaseLetter2 +
    secondNumber +
    specialChar;

  return password;
}

pass.addEventListener("click", () => {
  pas.textContent = generateRandomPassword();
});

//atm

let atm = document.querySelector("#atm");
let atmpin = document.querySelector("#atmpin");

function generateATMPin() {
  const pin = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
  return pin.toString().padStart(4, "0"); // Ensure it's always 4 digits
}

atmpin.addEventListener("click", () => {
  atm.textContent = generateATMPin();
});
