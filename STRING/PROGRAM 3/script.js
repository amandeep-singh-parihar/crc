let imp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

btn.addEventListener("click", function () {
  let str = imp.value;
  let vowelCount = countVowels(str);
  result.textContent = `The number of vowels in the string is ${vowelCount}`;
});
