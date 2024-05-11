let inp = document.querySelector("input");
let btn = document.querySelector("button");

let p = document.querySelector("p");

let body = document.querySelector("body");

let ans = ``;
btn.addEventListener("click", () => {
  let n = inp.value;
  ans = "";
  for (let i = 1; i <= 10; i++) {
    ans += `${n} X ${i} = ${n * i} <br>`;
  }
  p.innerHTML = ans;
});

inp.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let n = inp.value;
    let ans = "";
    for (let i = 1; i <= 10; i++) {
      ans += `${n} X ${i} = ${n * i} <br>`;
    }
    p.innerHTML = ans;
  }
});
