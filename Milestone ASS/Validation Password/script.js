function validationPassword(){
const email=document.getElementById("email");
const password=document.getElementById("password");
email.addEventListener('input',()=>{
    const emailBox=document.querySelector(".emailbox");
    const emailText=document.querySelector(".emailText");
    const emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(emailPattern)){
        emailText.innerHTML="Your Email Address in valid";
        emailText.style.color="green";
    }
    else{
        emailText.innerHTML="Please Enter Valid Email id";
        emailText.style.color="red";
    }

})

password.addEventListener('input',()=>{
    const passbox=document.querySelector(".passbox");
    const passText=document.querySelector(".passText");
    const passPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
if(password.value.match(passPattern)){
    passText.innerHTML="Password Created Successfully";
    passText.style.color="green";
}
else{
    passText.innerHTML=
    " at least 8 characters <br>must contain at least 1 uppercase letter <br> 1 lowercase letter <br>  1 number Can contain special characters";
    passText.style.color="red";
}
})
}
