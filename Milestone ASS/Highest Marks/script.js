// input the marks of all five students
const marks=[];
for(let i=0;i<5;i++){
    const mark=parseInt(prompt(`Enter the marks for student ${i+1}`));
    marks.push(mark);
}
// find the highest marks using the ternary operator
let highestMarks=marks[0];
for(let i=1;i<marks.length;i++){
    highestMarks=marks[i]>highestMarks?marks[i]:highestMarks;
}
// display the highest marks to the teacher
console.log("The highest marks scored be any students : ",highestMarks);
/*
Run :
Enter the marks for student 1:99
Enter the marks for  student 2:45
Enter the marks for  student 3:67
Enter the marks for  student 4:78
Enter the marks for  student 5: 90
The highest marks scored be any students :  99 */