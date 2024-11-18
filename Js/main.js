let $ = document;

let inputValue = $.querySelector('.getTodo');
let liElem = $.querySelector('.todo');
let ulElem = $.querySelector('#List');
let divElem = $.querySelector('.list');
let divAddTodo = $.querySelector('.addTodo');
let pWrong = $.createElement('p');


inputValue.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        if(inputValue.value){

            pWrong.style.display = 'none';
            let newLiItem = $.createElement('li');
            let newSpan = $.createElement('span');
            newSpan.innerHTML = inputValue.value;
            let newIElem = $.createElement('i');
            newIElem.className = 'fa-solid fa-trash';
            newIElem.id = 'trash';
            newLiItem.className = 'todo';

            newLiItem.append(newSpan);
            newLiItem.append(newIElem);
            ulElem.append(newLiItem);
            inputValue.value = '';

        }else{
            pWrong.innerHTML = "Wrong! Please enter your desired job."
            pWrong.className = 'wrong';
            pWrong.style.display = 'block';
            divAddTodo.append(pWrong);
        }
    }
})

$.body.addEventListener('click', function(event){

    if(event.target.id === 'trash'){
        let trashIcon = event.target;
        trashIcon.parentElement.remove();
    }
})