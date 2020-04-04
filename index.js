let todoItem = document.createElement('div');
todoItem.classList.add('todoItem');
todoItem.innerHTML = document.getElementById('todoItem').innerHTML;

let itemsContainer = document.querySelector('.todoItemsContainer');
itemsContainer.appendChild(todoItem);  