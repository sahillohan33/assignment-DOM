const decrementbtn=document.getElementById("decrement");
const incremetnbtn=document.getElementById("increment");
const resetbtn=document.getElementById("resetbtn");
const displayValue=document.getElementById("displayvalue");

// for decrement button click 
decrementbtn.addEventListener("click",()=>{
    const value=Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText=value-1;
    }
    else{
        alert("Negative value not allowed");
    }
});

// for increment button click
incremetnbtn.addEventListener("click",()=>{
    const value=Number(displayValue.innerText);
    if(value>=10){
        alert("10+ value not allowed");
    }
    else{
        displayValue.innerText=value+1;
    }
});

// for reset button
resetbtn.addEventListener("click",()=>{
    displayValue.innerText=0;
});