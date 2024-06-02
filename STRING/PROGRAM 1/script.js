let imp = document.querySelector("#inp");
let indexInput = document.querySelector("#index");
let btn = document.querySelector("#btn");
let result = document.querySelector("#res");

function getCharAtIndex(str, index) {
  if (index < 0 || index >= str.length) {
    return "Index out of bounds";
  }
  return str.charAt(index);
}

btn.addEventListener("click", function () {
  let str = imp.value;
  let index = parseInt(indexInput.value, 10);
  let char = getCharAtIndex(str, index);
  result.textContent = `The character at index ${index} is '${char}'`;
});
