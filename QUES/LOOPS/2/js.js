let inp = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector("p");
let ans;

btn.addEventListener("click", () => {
    ans = sumOfDigits(parseInt(inp.value));
    p.innerText = "Sum of digits: " + ans;
});

function sumOfDigits(num) {
    let sum = 0;
    while (num) {
        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
