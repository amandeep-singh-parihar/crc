let inp1 = document.querySelector("#one");
let p = document.querySelector("p");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const inputValue = parseInt(inp1.value);

  if (inputValue >= 1 && inputValue <= 7) {
    let dayName;
    switch (inputValue) {
      case 1:
        dayName = "Sunday";
        break;
      case 2:
        dayName = "Monday";
        break;
      case 3:
        dayName = "Tuesday";
        break;
      case 4:
        dayName = "Wednesday";
        break;
      case 5:
        dayName = "Thursday";
        break;
      case 6:
        dayName = "Friday";
        break;
      case 7:
        dayName = "Saturday";
        break;
    }
    p.innerText = `${dayName}`;
  } else {
    p.innerText = "Please enter a number between 1 and 7";
  }
});
