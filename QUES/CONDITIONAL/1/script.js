let btn = document.querySelector("button");
let inp = document.querySelector("input");
let p = document.querySelector("p");

btn.addEventListener("click", () => {
  if (inp.value % 2 == 0) {
    p.innerText = `${inp.value} is an even number `;
    // console.log("even");
  } else {
    p.innerText = `${inp.value} is a odd number `;
    // console.log("odd");
  }
});

inp.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (inp.value % 2 == 0) {
      p.innerText = `${inp.value} is an even number `;
      // console.log("even");
    } else {
      p.innerText = `${inp.value} is a odd number `;
      // console.log("odd");
    }
  }
});
