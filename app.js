//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions

function addTodo(event){

    // preventing from submitting
    event.preventDefault();

    //adding a div for the todo item(s)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    //add a new todo item
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    //adding a mark button 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');


    //adding a trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');

    
    todoDiv.appendChild(newTodo);   //appending newTodo(listed item) into the div
    todoDiv.appendChild(completedButton);   //appending mark button into the div
    todoDiv.appendChild(trashButton);   //appending trash button into the div

    // adding the div into the list
    todoList.appendChild(todoDiv);

    //clearing the input box
    todoInput.value = "";

}


function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });


    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    console.log(todos);
}