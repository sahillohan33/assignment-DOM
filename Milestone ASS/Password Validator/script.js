function passwordValidator(password,confirmPassword){
    if(password===confirmPassword){
        console.log('Password Matched. Password Validation Successfully');
    }
    else{
        console.log("Password don't Matched. Password Validation UnSuccessfully");
    }
}
var password="mypassword123";
var confirmPassword="mypassword123";
passwordValidator(password,confirmPassword);

// Output : Password Matched. Password Validation Successfully
