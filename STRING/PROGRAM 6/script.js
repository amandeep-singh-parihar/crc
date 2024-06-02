let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

btn.addEventListener("click", function () {
  let str1 = inp1.value;
  let str2 = inp2.value;
  let c = str1 + str2;
  result.textContent = `Concatenated String: ${c}`;
});
