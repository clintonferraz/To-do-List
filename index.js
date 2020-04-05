const INDENT_SIZE = 4; //default is 4
const MAX_AMOUNT_OF_LEVELS = 8; //default is 8

let firstItem = document.createElement('div');
firstItem.classList.add('itemContainer');
firstItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;
firstItem.setAttribute('data-indentLevel','0');
const allItemsContainer = document.querySelector('.allItemsContainer');
allItemsContainer.appendChild(firstItem);  

let title1 = document.querySelector('.todoTitle');
title1.addEventListener('blur', (event) => {
    if(title1.innerHTML === "" || title1.innerHTML ==="<br>")
    title1.innerHTML = "Sem título";
}, true);

let createItem = () => {
    let newItem = document.createElement('div');
    newItem.classList.add('itemContainer');
    newItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;
    return newItem;
};

let addItem = (pressed_button) => {
    newItem = createItem();

    let indentLevelOfnewItem = pressed_button.parentNode.parentNode.getAttribute('data-indentLevel');
    newItem.setAttribute('data-indentLevel', indentLevelOfnewItem);

    newItem.querySelector('.itemText').style.maxWidth= 43 - (INDENT_SIZE * indentLevelOfnewItem) + "rem";

    newItem.childNodes[1].style.paddingLeft = INDENT_SIZE * indentLevelOfnewItem + 'rem';

    let refItemToInsertBefore = pressed_button.parentNode.parentNode.nextElementSibling;
    let whereToInsert = pressed_button.parentNode.parentNode.parentNode;
    
    whereToInsert.insertBefore(newItem, refItemToInsertBefore);

};

let addSubItem = (pressed_button) => {
    
    let indentLevelOfnewItem = parseInt(pressed_button.parentNode.parentNode.getAttribute('data-indentLevel')) + 1;
    if(indentLevelOfnewItem <= MAX_AMOUNT_OF_LEVELS){
        newItem = createItem();
        newItem.setAttribute('data-indentLevel', indentLevelOfnewItem );
        newItem.querySelector('.itemText').style.maxWidth= 43 - (INDENT_SIZE * indentLevelOfnewItem) + "rem";
        newItem.childNodes[1].style.paddingLeft = INDENT_SIZE * newItem.getAttribute('data-indentLevel') + 'rem';
    
        let refItemToInsertBefore = pressed_button.parentNode.nextElementSibling;
        let itemContainerDiv = pressed_button.parentNode.parentNode;
    
        itemContainerDiv.insertBefore(newItem, refItemToInsertBefore);
    }
};

let removeItem = (pressed_button) => {
    let whatToRemove = pressed_button.parentNode.parentNode;
    whatToRemove.remove();
};

let moveUp = (pressed_button) => {
    let whatToMove = pressed_button.parentNode.parentNode;
    let targetElement = whatToMove.previousElementSibling;
    if(targetElement != null){
        if(targetElement.getAttribute('class') === 'itemContainer'){
            whatToMove.parentNode.insertBefore(whatToMove,targetElement);
        }
    }
}

let moveDown = (pressed_button) => {
    let whatToMove = pressed_button.parentNode.parentNode;
    let getSecondElementAfter = () => {
        if(whatToMove.nextElementSibling != null){
            return whatToMove.nextElementSibling.nextElementSibling;
        }
    }
    let targetElement = getSecondElementAfter();
    whatToMove.parentNode.insertBefore(whatToMove,targetElement);
}

let checkBoxClick = (clicked_checkbox) => {
    
};
