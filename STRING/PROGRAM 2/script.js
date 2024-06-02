let imp = document.querySelector("#inp");
let startIndexInput = document.querySelector("#start");
let endIndexInput = document.querySelector("#end");
let btn = document.querySelector("#btn");
let result = document.querySelector("#res");

function getSubstring(str, start, end) {
  if (start < 0 || end >= str.length || start > end) {
    return "Invalid indices";
  }
  return str.substring(start, end + 1);
}

btn.addEventListener("click", function () {
  let str = imp.value;
  let start = parseInt(startIndexInput.value, 10);
  let end = parseInt(endIndexInput.value, 10);
  let substring = getSubstring(str, start, end);
  result.textContent = `The substring from index ${start} to ${end} is '${substring}'`;
});
