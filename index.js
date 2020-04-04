let firstItem = document.createElement('div');
firstItem.classList.add('todoItem');
firstItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;
firstItem.setAttribute('data-indentLevel','0');
let itemsContainer = document.querySelector('.todoItemsContainer');
itemsContainer.appendChild(firstItem);  

let addItem = (pressed_button) => {
    let todoItem = document.createElement('div');
    todoItem.classList.add('todoItem');
    todoItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;
    todoItem.setAttribute('data-indentLevel',pressed_button.parentNode.getAttribute('data-indentLevel'));
    todoItem.style.paddingLeft = 3*todoItem.getAttribute('data-indentLevel') + 'rem';
    itemsContainer.insertBefore(todoItem, pressed_button.parentNode.nextElementSibling);

/*  if(itemsContainer.childElementCount > 3)
    itemsContainer.childNodes[2].remove(); */
};

let addSubItem = (pressed_button) => {
    let todoItem = document.createElement('div');
    todoItem.classList.add('todoItem');
    todoItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;
    todoItem.setAttribute('data-indentLevel', 1 + parseInt(pressed_button.parentNode.getAttribute('data-indentLevel')) );
    todoItem.style.paddingLeft = 3*todoItem.getAttribute('data-indentLevel') + 'rem';
    itemsContainer.insertBefore(todoItem, pressed_button.parentNode.nextElementSibling);
};

let removeItem = (pressed_button) => {
    pressed_button.parentNode.remove();
};


let title1 = document.querySelector('.todoTitle');
title1.addEventListener('blur', (event) => {
    if(title1.innerHTML === "" || title1.innerHTML ==="<br>")
    title1.innerHTML = "Sem título";
}, true);
