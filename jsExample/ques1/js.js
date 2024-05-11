let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let num1 = parseInt(document.querySelector("#txt1").value);
    let num2 = parseInt(document.querySelector("#txt2").value);
    let num3 = parseInt(document.querySelector("#txt3").value);
    
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        let max =
        num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;
        document.querySelector("h1").innerText = max;
    } else {
        document.querySelector("h1").innerText = "Please enter valid numbers";
    }
});
//     if (num % 2 === 0) {
    //       document.querySelector("h1").innerText = "even";
    //       document.querySelector("h1").style.color = "green";
    //     } else {
        //       document.querySelector("h1").innerText = "odd";
        //       document.querySelector("h1").style.color = "green";
        //     }
        //   } else {
            //     document.querySelector("h1").innerText = "Please enter a valid number";
            //     document.querySelector("h1").style.color = "red";
            //   }
            