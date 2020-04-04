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

    let indentLevelOfnewItem = pressed_button.parentNode.getAttribute('data-indentLevel');
    newItem.setAttribute('data-indentLevel', indentLevelOfnewItem);
    
    newItem.style.paddingLeft = 3*indentLevelOfnewItem + 'rem';

    let refItemToInsertBefore = pressed_button.parentNode.nextElementSibling;
    while(refItemToInsertBefore != null){
        let indentLevelOfRefItem = refItemToInsertBefore.getAttribute('data-indentLevel');
        if( parseInt(indentLevelOfRefItem) > parseInt(indentLevelOfnewItem) ){
            refItemToInsertBefore = refItemToInsertBefore.nextElementSibling;
        }else{
            break;
        }
    }
    


    allItemsContainer.insertBefore(newItem, refItemToInsertBefore);

/*  if(allItemsContainer.childElementCount > 3)
    allItemsContainer.childNodes[2].remove(); */
};

let addSubItem = (pressed_button) => {
    let newItem = document.createElement('div');
    newItem.classList.add('itemContainer');
    newItem.innerHTML = document.getElementById('todoItemHTML').innerHTML;
    newItem.setAttribute('data-indentLevel', 1 + parseInt(pressed_button.parentNode.parentNode.getAttribute('data-indentLevel')) );
    newItem.style.paddingLeft = 3*newItem.getAttribute('data-indentLevel') + 'rem';
    allItemsContainer.insertBefore(newItem, pressed_button.parentNode.nextElementSibling);
};

let removeItem = (pressed_button) => {
    pressed_button.parentNode.remove();
    


};


let title1 = document.querySelector('.todoTitle');
title1.addEventListener('blur', (event) => {
    if(title1.innerHTML === "" || title1.innerHTML ==="<br>")
    title1.innerHTML = "Sem título";
}, true);
