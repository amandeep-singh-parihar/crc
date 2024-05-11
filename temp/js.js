let btn = document.querySelector("button");
let total = 0;
let remaining = 0;
let h2 = document.querySelector("h2");
let ul = document.querySelector(".tasklist");
let inp = document.querySelector("input");

btn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = inp.value;

  li.addEventListener("click", () => {
    ul.removeChild(li);
    remaining++; // Reduce the remaining count when a task is removed
    updateCounter();
  });

  ul.appendChild(li);

  total++; // Increase the total count when a new task is added
  updateCounter();
});

function updateCounter() {
  if (remaining === total) {
    h2.textContent = "No task";
  } else {
    h2.textContent = remaining + " / " + total;
  }
}

// let btn = document.querySelector("button");
// let total = 0;
// let remaining = 0;
// let counter = document.getElementById("counter");
// let ul = document.querySelector(".tasklist");
// let inp = document.querySelector("input");

// btn.addEventListener("click", () => {
//     let li = document.createElement("li");
//     li.textContent = inp.value;

//     li.addEventListener('click', () => {
//         ul.removeChild(li);
//         remaining = Math.max(0, remaining - 1);
//         updateCounter();
//     });

//     ul.appendChild(li);

//     total++;
//     remaining++;
//     updateCounter();
// });

// function updateCounter() {
//     if (remaining === total) {
//         counter.textContent = "No Task";
//     } else {
//         counter.textContent = remaining + " / " + total;
//     }
// }
