function capitallizeName(name){
    const firstLetter=name.charAt(0);
    const capitalizedFirstLetter=firstLetter.toUpperCase();
    return firstLetter===capitalizedFirstLetter ? namesa:capitalizedFirstLetter+name.slice(1);
}
const name=prompt('Enter your name: ');
const modifiedName=capitallizeName(name);
document.write("Modified name : ",modifiedName);
/*
 Run: 
  Enter your name : sahil
  Modified name : Sahil
 */