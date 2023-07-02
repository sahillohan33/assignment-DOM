const listitems=[
    "HTML and Semantics","Starting with CSS","Working Template","Mobile responsive webpages","Grid and Flex-box in CSS","Projects using HTML & CSS","Version Control and Git","Getting Started with JavaScript","Advance JavaScript","Working with DOM","Making Projects using HTML, CSS and JavaScript","Understanding Fundamental of Computer Science","Getting Started with Database","Understanding the Database","Starting with NodeJS and Express","Understanding React and its Fundamentals","Understanding Hooks and Routers","Starting and Completing Full Fledge Projects"
];
let currentItemIndex=0;
const  addListItem=()=>{
    const list=document.getElementById('list');
    if(currentItemIndex<listitems.length){
        const listItem=document.createElement("li");
        listItem.textContent=listitems[currentItemIndex];
        list.appendChild(listItem);
        currentItemIndex++;
    }
    else{
        const message=document.getElementById("message");
        message=alert('Add items are added');
    }
}