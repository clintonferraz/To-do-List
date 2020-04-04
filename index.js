let firstItem = document.createElement('div');
firstItem.classList.add('itemContainer');
firstItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;
firstItem.setAttribute('data-indentLevel','0');
let allItemsContainer = document.querySelector('.allItemsContainer');
allItemsContainer.appendChild(firstItem);  

let addItem = (pressed_button) => {
    let newItem = document.createElement('div');
    newItem.classList.add('itemContainer');
    newItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;

    let indentLevelOfnewItem = pressed_button.parentNode.parentNode.getAttribute('data-indentLevel');
    newItem.setAttribute('data-indentLevel', indentLevelOfnewItem);

    newItem.childNodes[1].style.paddingLeft = 4*indentLevelOfnewItem + 'rem';

    let refItemToInsertBefore = pressed_button.parentNode.parentNode.nextElementSibling;
    let whereToInsert = pressed_button.parentNode.parentNode.parentNode;
    
    whereToInsert.insertBefore(newItem, refItemToInsertBefore);

};

let addSubItem = (pressed_button) => {
    let newItem = document.createElement('div');
    newItem.classList.add('itemContainer');
    newItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;

    let indentLevelOfnewItem = parseInt(pressed_button.parentNode.parentNode.getAttribute('data-indentLevel')) + 1;
    newItem.setAttribute('data-indentLevel', indentLevelOfnewItem );

    newItem.childNodes[1].style.paddingLeft = 4*newItem.getAttribute('data-indentLevel') + 'rem';

    let refItemToInsertBefore = pressed_button.parentNode.nextElementSibling;
    let itemContainerDiv = pressed_button.parentNode.parentNode;

    itemContainerDiv.insertBefore(newItem, refItemToInsertBefore);
};

let removeItem = (pressed_button) => {
    let whatToRemove = pressed_button.parentNode.parentNode;
    whatToRemove.remove();
};


let title1 = document.querySelector('.todoTitle');
title1.addEventListener('blur', (event) => {
    if(title1.innerHTML === "" || title1.innerHTML ==="<br>")
    title1.innerHTML = "Sem título";
}, true);
