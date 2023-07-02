const todoForm=document.querySelector('.form-todo');
const todoInput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText=todoInput.value;
    const newLi=document.createElement("li");
    const newLiInnerHtml=`
    <span class="text">${newTodoText}</span>
    <div class="todo-button">
        <button class="todo-btn delete">Delete</button>
    </div>`;
    newLi.innerHTML=newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value=' ';
})
todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        const targetLi=e.target.parentNode.parentNode;
        targetLi.remove();
    }
}
)
