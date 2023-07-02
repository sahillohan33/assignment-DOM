
function toggleText(){
    var heading=document.getElementById('heading');
    var currentText=heading.innerText;
    if(currentText==="The most affordable learning platform."){
        heading.innerText="PW Skills";
    }
    else{
        heading.innerText="The most affordable learning platform.";
    }
}