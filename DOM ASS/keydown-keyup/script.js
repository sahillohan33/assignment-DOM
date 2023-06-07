let box=document.getElementById("box");
let display=document.getElementById("display");

// keydown
document.addEventListener("keydown",(e)=>{
    display.style.color="red";
    display.innerText=e.key + " is keyDown";
});

// keyup
document.addEventListener("keyup",(e)=>{
    display.style.color="green";
    display.innerText=e.key + " is keyUp";
})