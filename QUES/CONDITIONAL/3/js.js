let inp1 = document.querySelector("#one");
let inp2 = document.querySelector("#two");
let inp3 = document.querySelector("#three");
let btn = document.querySelector("button");
let p = document.querySelector("p");

function validTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return false;
  }
}

btn.addEventListener("click", () => {
  const side1 = parseInt(inp1.value);
  const side2 = parseInt(inp2.value);
  const side3 = parseInt(inp3.value);

  if (validTriangle(side1, side2, side3)) {
    if (side1 === side2 && side2 === side3) {
      p.innerText = "Equilateral triangle: All sides are equal.";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      p.innerText = "Isosceles triangle: Two sides are equal.";
    } else {
      p.innerText = "Scalene triangle: No sides are equal.";
    }
  } else {
    p.innerText = "Not a valid triangle";
  }
});
