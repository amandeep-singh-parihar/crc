let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

btn.addEventListener("click", function () {
  let str = inp.value;
  let isPalindrome = checkPalindrome(str);
  if (isPalindrome) {
    result.textContent = `'${str}' is a palindrome`;
  } else {
    result.textContent = `'${str}' is not a palindrome`;
  }
});

function checkPalindrome(str) {
  let str1 = str.toLowerCase();
  let str2 = str1.split("").reverse().join("");
  return str1 === str2;
}
