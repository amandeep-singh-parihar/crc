let imp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

function countCharacters(str) {
  let alphabets = 0;
  let digits = 0;
  let specialChars = 0;

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      alphabets++;
    } else if (/[0-9]/.test(char)) {
      digits++;
    } else {
      specialChars++;
    }
  }

  return { alphabets, digits, specialChars };
}

btn.addEventListener("click", function () {
  let str = imp.value;
  let counts = countCharacters(str);
  result.textContent = `Alphabets: ${counts.alphabets}, Digits: ${counts.digits}, Special Characters: ${counts.specialChars}`;
});
