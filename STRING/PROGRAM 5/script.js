let imp = document.querySelector("#inp");
let seqInput = document.querySelector("#seq");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

function containsSequence(str, seq) {
  return str.includes(seq);
}

btn.addEventListener("click", function () {
  let str = imp.value;
  let seq = seqInput.value;
  let contains = containsSequence(str, seq);
  if (contains) {
    result.textContent = `The string contains the sequence '${seq}'`;
  } else {
    result.textContent = `The string does not contain the sequence '${seq}'`;
  }
});
