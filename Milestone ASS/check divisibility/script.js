
function printNumberDivisible(numbers){
    for(let i=0;i<number.length;i++){
        const number=numbers[i];
        if(number%3!==0){
            continue;
        }
        if(number%2==0){
            continue;
        }
        console.log(number);
    }
}
const number=[1,2,3,4,5,6,7,8,9,10];
printNumberDivisible(number);
/*
    Output: 
    3
    9
 */