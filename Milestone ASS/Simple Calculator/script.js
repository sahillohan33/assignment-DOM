function dis(val){
    document.getElementById("result").value+=val;
}
function clr(){
    document.getElementById("result").value='';
}
function less(){
    document.getElementById("result").value=result.value.toString().slice(0,-1);
}
function solve(){
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}