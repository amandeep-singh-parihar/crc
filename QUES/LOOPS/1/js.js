let inp = document.querySelector("input");
let btn = document.querySelector("button");
let p=document.querySelector("p");

btn.addEventListener("click", () => {
    let ans="";
    const num=parseInt(inp.value);
  for (let i = 1; i <= 10; i++) {
    ans+=`${num} X ${1} = ${num*i}\n`
  }
  p.innerText=ans;
  
});
