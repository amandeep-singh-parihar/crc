let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

btn.addEventListener("click", function () {
  let str1 = inp1.value;
  let str2 = inp2.value;
  let comparisonResult = compareStrings(str1, str2);
  if (comparisonResult === 0) {
    result.textContent = `${str1} is equal to ${str2}`;
  } else if (comparisonResult < 0) {
    result.textContent = `${str1} is less than ${str2}`;
  } else {
    result.textContent = `${str1} is greater than ${str2}`;
  }
});

function compareStrings(str1, str2) {
  return str1.localeCompare(str2);
}
