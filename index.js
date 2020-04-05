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

let addItem = (pressedButton) => {
    newItem = createItem();

    let indentLevelOfnewItem = pressedButton.parentNode.parentNode.getAttribute('data-indentLevel');
    newItem.setAttribute('data-indentLevel', indentLevelOfnewItem);

    newItem.querySelector('.itemText').style.maxWidth= 43 - (INDENT_SIZE * indentLevelOfnewItem) + "rem";

    newItem.childNodes[1].style.paddingLeft = INDENT_SIZE * indentLevelOfnewItem + 'rem';

    let refItemToInsertBefore = pressedButton.parentNode.parentNode.nextElementSibling;
    let whereToInsert = pressedButton.parentNode.parentNode.parentNode;
    
    whereToInsert.insertBefore(newItem, refItemToInsertBefore);

};

let addSubItem = (pressedButton) => {
    
    let indentLevelOfnewItem = parseInt(pressedButton.parentNode.parentNode.getAttribute('data-indentLevel')) + 1;
    if(indentLevelOfnewItem <= MAX_AMOUNT_OF_LEVELS){
        newItem = createItem();
        newItem.setAttribute('data-indentLevel', indentLevelOfnewItem );
        newItem.querySelector('.itemText').style.maxWidth= 43 - (INDENT_SIZE * indentLevelOfnewItem) + "rem";
        newItem.childNodes[1].style.paddingLeft = INDENT_SIZE * newItem.getAttribute('data-indentLevel') + 'rem';
    
        let refItemToInsertBefore = pressedButton.parentNode.nextElementSibling;
        let itemContainerDiv = pressedButton.parentNode.parentNode;
    
        itemContainerDiv.insertBefore(newItem, refItemToInsertBefore);
    }
};

let removeItem = (pressedButton) => {
    let whatToRemove = pressedButton.parentNode.parentNode;
    if(whatToRemove.parentNode.childNodes[1] != whatToRemove){
        whatToRemove.remove();
    }
    
};

let moveUp = (pressedButton) => {
    let whatToMove = pressedButton.parentNode.parentNode;
    let targetElement = whatToMove.previousElementSibling;
    if(targetElement != null){
        if(targetElement.getAttribute('class') === 'itemContainer'){
            whatToMove.parentNode.insertBefore(whatToMove,targetElement);
        }
    }
}

let moveDown = (pressedButton) => {
    let whatToMove = pressedButton.parentNode.parentNode;
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

let showButtons = (hoveredDiv) => {
    let buttons = hoveredDiv.querySelectorAll('button');
    if(document.activeElement.className != 'itemText'){
        buttons.forEach( button => {
            button.classList.remove('hidden');
        });
    }
};

let hideButtons = (hoveredDiv) => {
    let buttons = hoveredDiv.querySelectorAll('button');
    let itemText = hoveredDiv.querySelector('.itemText');
    if(document.activeElement != itemText){
        buttons.forEach( button => {
            button.classList.add('hidden');
        });
    }

};

let onItemTextFocus = (focusedItem) => {
    let shownButtons = document.querySelectorAll('button:not(.hidden)');
    let thisButtons = focusedItem.parentNode.querySelectorAll('button');
    
    shownButtons.forEach( button => {
        button.classList.add('hidden');
    });

    thisButtons.forEach( button => {
        button.classList.remove('hidden');
    });
    
};
