let inp1 = document.querySelector("#one");
let btn = document.querySelector("button");
let p = document.querySelector("p");

btn.addEventListener("click", () => {
  const num = parseFloat(inp1.value);
  if (num === 0) {
    p.innerText = `${num} is a zero`;
  } else if (num > 0) {
    p.innerText = `${num} is positive`;
  } else {
    p.innerText = `${num} is negative`;
  }
});
