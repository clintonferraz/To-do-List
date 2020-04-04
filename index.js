let todoItem = document.createElement('div');
todoItem.classList.add('todoItem');
todoItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;

let itemsContainer = document.querySelector('.todoItemsContainer');
itemsContainer.appendChild(todoItem);  

let addItem = (pressed_button) => {
    let todoItem = document.createElement('div');
    todoItem.classList.add('todoItem');
    todoItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;
    itemsContainer.insertBefore(todoItem, pressed_button.parentNode.nextElementSibling);

/*     if(itemsContainer.childElementCount > 3)
        itemsContainer.childNodes[2].remove(); */
}

let removeItem = (pressed_button) => {
    pressed_button.parentNode.remove();
    console.log(pressed_button);

}