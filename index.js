const INDENT_SIZE = 4; //default is 4
const MAX_AMOUNT_OF_LEVELS = 8; //default is 8

let addFirstItem = () => {
    let firstItem = document.createElement('div');
    firstItem.classList.add('itemContainer');
    firstItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;
    firstItem.setAttribute('data-indentLevel','0');
    const allItemsContainer = document.querySelector('.allItemsContainer');
    allItemsContainer.appendChild(firstItem); 
}

addFirstItem();

let title = document.querySelector('.todoTitle');
title.addEventListener('blur', (event) => {
    if(title.innerHTML === "" || title.innerHTML ==="<br>")
    title.innerHTML = "Untitled";
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
    var answer = true;
    if(whatToRemove.childElementCount > 1){
        answer = confirm('All subitems will also be deleted. Are you sure?')
    } 
    if(answer === true){
        if(whatToRemove.parentNode.childElementCount === 1){
            addFirstItem();
        }
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
    };
    let targetElement = getSecondElementAfter();
    whatToMove.parentNode.insertBefore(whatToMove,targetElement);
};

let checkBoxClick = (clicked_checkbox) => {
    thisItemText = clicked_checkbox.parentNode.parentNode.querySelector('.itemText');
    if(clicked_checkbox.checked === true){      
        thisItemText.style.textDecoration = "line-through";
        thisItemText.style.textDecorationColor = "#007EA7";
        thisItemText.style.color = '#004E72';
    }else{
        thisItemText.style.textDecorationColor = 'rgba(0, 0, 0, 0)';
        thisItemText.style.textDecoration = 'none';
        thisItemText.style.color = "#CCDBDC";
    }
};

let showButtons = (hoveredDiv) => {
    let buttons = hoveredDiv.querySelectorAll('button');
    buttons.forEach( button => {
        button.classList.remove('hidden');
    });
};

let hideButtons = (hoveredDiv) => {
    let buttons = hoveredDiv.querySelectorAll('button');
    buttons.forEach( button => {
        button.classList.add('hidden');
    });
};
