// let p1 = document.querySelector("#p1");
// let p2 = document.querySelector("#p2");
// let p3 = document.querySelector("#p3");
// let p4 = document.querySelector("#p4");
let btn = document.querySelector(".btn");
let cp=document.createElement("p");
let body=document.querySelector("body");
// btn.addEventListener("click", () => {
//   p1.classList.toggle("redColor");
// });

btn.addEventListener("click",()=>{
    cp.classList.add("redColor");
    cp.innerHTML="hello";
    body.appendChild(cp);
})
