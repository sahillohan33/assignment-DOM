
let n=6;
let string="";
for(let i=0;i<n;i++){
    for(let k=0;k<n-i;k++){
        string+="*";
    }
    string+="\n";
}
console.log(string);
/* Output:
    ******
    *****
    ****
    ***
    **
    *  
*/ 
