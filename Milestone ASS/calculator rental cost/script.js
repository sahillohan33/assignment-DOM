function calculatorRentCost(){
    let rentDays=document.getElementById("days").value;
    let carType=document.getElementById("carType").value;
    let rentalCost=0;
    switch(carType){
        case "Economy":
            rentalCost=4000;
            break;
        case "Midsize":
            rentalCost=10000;
            break;
        case "Luxury":
            rentalCost=20000;
            break;
    }
    let totalCost=rentalCost*rentDays;
    document.getElementById("outputscreen").innerHTML="Total Cost : Rs. "+totalCost+"/-";
}