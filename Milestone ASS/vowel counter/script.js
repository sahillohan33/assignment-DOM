function countVowels(name){
    const vowel=['a','e','i','o','u'];
    let count=0;
    for(let i=0;i<name.length;i++){
        const char=name[i].toLowerCase();
        if(vowel.includes(char)){
            count++;
        }
    }
    return count;
}
const name=prompt('Enter a name: ');
const vowelCount=countVowels(name);
console.log('Number of vowels in the name : ',vowelCount);
/*
 Output: 
    Enter a name: sahil
    Number of vowels in the name : 2
 */