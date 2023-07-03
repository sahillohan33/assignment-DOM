function convert(){
    let celsiusInput=document.getElementById("celsius").value;
    let fahrenheitResult=celsiusInput=1.8+32;
    document.getElementById("result").innerText=`Celsius Data is ${celsiusInput}C converter into fahrenheit is ${fahrenheitResult}F`;
}