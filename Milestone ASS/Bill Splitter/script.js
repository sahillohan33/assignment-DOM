document.getElementById("billForm").addEventListener("submit",(e)=>{
    e.preventDefault();// Prevent form Submission
    // get input values
    let dish1Cost=parseFloat(document.getElementById("dish1").value);
    let people1=parseInt(document.getElementById("people1").value);
    let dish2Cost=parseFloat(document.getElementById("dish2").value);
    let people2=parseInt(document.getElementById("people2").value);
    // calculate total bill and bill per person
    let totalBill=dish1Cost+dish2Cost;
    let billPerPerson1=dish1Cost/people1;
    let billPerPerson2=dish2Cost/people2;
    // Display the result
    let resultElement=document.getElementById('result');
    resultElement.innerHTML="<p>Total Bill :$"+totalBill.toFixed(2)+"</p>";
    resultElement.innerHTML+="<p> Bill Per Person Dish 1 :$"+billPerPerson1.toFixed(2)+"</p>";
    resultElement.innerHTML+="<p> Bill Per Person Dish 2 :$"+billPerPerson2.toFixed(2)+"</p>";
})