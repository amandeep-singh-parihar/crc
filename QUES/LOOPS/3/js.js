let inp = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector("p");
let ans;

btn.addEventListener("click", () => {
  ans = reverseNumber(parseInt(inp.value));
  p.innerText =  ans;
});

function reverseNumber(num) {
  let reversedNumber = 0;
  while (num !== 0) {
    let digit = num % 10;
    reversedNumber = reversedNumber * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversedNumber;
}
