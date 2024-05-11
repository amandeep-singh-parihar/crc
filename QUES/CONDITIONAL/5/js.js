let inp1 = document.querySelector("#one");
let inp2 = document.querySelector("#two");
let inp3 = document.querySelector("#three");
let btn = document.querySelector("button");
let p = document.querySelector("p");

btn.addEventListener("click", () => {
  const num1 = parseInt(inp1.value);
  const num2 = parseInt(inp2.value);
  const num3 = parseInt(inp3.value);
  if (num1 < num2 && num2 < num3) {
    p.innerText = `Increasing`;
  } else if (num1 > num2 && num2> num3) {
    p.innerText = `Decreasing`;
  } else {
    p.innerText = `Neither increasing Nor Decreasing`;
  }
});
