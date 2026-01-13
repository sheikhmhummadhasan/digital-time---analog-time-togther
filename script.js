let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

setInterval(() => {
    let time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let hdeg = (h % 12) * 30 + m * 0.5;
    let mdeg = m * 6;
    let sdeg = s * 6;

    hour.style.transform = `translate(-50%, -100%) rotate(${hdeg}deg)`
    min.style.transform = `translate(-50%, -100%) rotate(${mdeg}deg)`
    sec.style.transform = `translate(-50%, -100%) rotate(${sdeg}deg)`

},1000)

let gigitalwatch = document.querySelector(".gigital-watch");

setInterval(()=>{
    let date = new Date();
    gigitalwatch.innerHTML=date.toLocaleTimeString()
},1000)