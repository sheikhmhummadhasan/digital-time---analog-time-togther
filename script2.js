let input = document.querySelector("#input");
let btn = document.querySelectorAll(".btn");
let str = "";

let arr = Array.from(btn);

arr.forEach((buttons) => {
     buttons.addEventListener("click",(e) => {
        if(e.target.innerHTML === "="){
            str = eval(str);
            input.value = str;
        }else if(e.target.innerHTML === "AC"){
            str = "";
            input.value = str;
        }else if(e.target.innerHTML === "DEL"){
            str = str.substr(0,str.length-1);
            input.value = str;
        }else{
            str += e.target.innerHTML;
            input.value = str;
        }
     })
})