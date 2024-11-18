let $ = document;

let inputElem = $.querySelector('.getTodo');
let addTodoForm = $.querySelector('.addTodo');
let ulTodoElem = $.querySelector('#List');

let divAddTodo = $.querySelector('.addTodo');
let pWrong = $.createElement('p');



function addNewTodo(newTodoValue){

    let newTodoLi = $.createElement('li');
    newTodoLi.className = 'todo';
    
    let newTodoSpan = $.createElement('span');
    newTodoSpan.innerHTML = newTodoValue;

    let newTodoTrash = $.createElement('i');
    newTodoTrash.className = 'fa-solid fa-trash';
    newTodoTrash.id = 'trash';

    newTodoTrash.addEventListener('click', function(event){
        event.target.parentElement.remove();
    })

    newTodoLi.append(newTodoSpan, newTodoTrash);
    ulTodoElem.append(newTodoLi);
}


addTodoForm.addEventListener('submit', function(event){
    event.preventDefault();
});


inputElem.addEventListener('keydown', function(event){

    let newTodoValue = event.target.value.trim();

    if(event.key === "Enter"){
        if(newTodoValue){

            pWrong.style.display = 'none';
            inputElem.value = '';
            addNewTodo(newTodoValue);

        }else{
            pWrong.innerHTML = "Wrong! Please enter your desired job."
            pWrong.className = 'wrong';
            pWrong.style.display = 'block';
            divAddTodo.append(pWrong);
        }
    }
})