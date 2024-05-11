function add1(a, b) {
  console.log(a + b);
}

let add2 = function (a, b) {
  console.log(a + b);
};

let add3 = (a, b) => {
  console.log(a + b);
};

let btn1 = document.querySelector("#one");
btn1.addEventListener("click", () => {
  add1(4, 3);
});

let btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => {
  add1(4, 3);
});

let btn3 = document.querySelector("#three");
btn3.addEventListener("click", () => {
  add1(4, 3);
});
