
const customer={
    name:"Sahil Lohan",
    balance:0,
};
// function to update the balance 
function updateBalance(){
    let balanceElement=document.getElementById("balance");
    balanceElement.textContent=customer.balance;
}
// function deposit 
function deposit(){
    let amountElement=document.getElementById("amount");
    let amount=Number(amountElement.value);
    if(amount>0){
        customer.balance+=amount;
        updateBalance();
    }
    amountElement.value=" ";
}
// function withdraw
function withdraw(){
    let amountElement=document.getElementById("amount");
    let amount=Number(amountElement.value);
    if(amount>0 && amount<=customer.balance){
        customer.balance-=amount;
        updateBalance();
    }
    amountElement.value=" ";
}
// event listeners for the button
document.getElementById("deposit-btn").addEventListener("click",deposit);
document.getElementById("withdraw-btn").addEventListener("click",withdraw);