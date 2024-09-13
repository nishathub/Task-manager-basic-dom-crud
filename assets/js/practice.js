// Variables 
let todoUl = document.getElementById('items');
let completeUl = document.querySelector('.complete-list ul');
let inputBox = document.getElementById('new-task');
let inputForm = document.getElementById('input-form');

// Function 

let createTask = function (labelName){
   let newTask = document.createElement('li');
   let checkBox = document.createElement('input');
   let label = document.createElement('label');

   label.innerText = labelName;
   checkBox.type = 'checkbox'

   newTask.appendChild(checkBox);
   newTask.appendChild(label);

   return newTask;

};

let addTask = function (event){
    event.preventDefault();
    if (inputBox.value !== ""){
    let newItem = createTask(inputBox.value);
    todoUl.appendChild(newItem);
    inputBox.value = "";
    
    bindIncompleteTask (newItem, moveTask)
    }
}

let bindIncompleteTask = function (item, run){
    let checkBox = item.querySelector('input[type = "checkbox"]');
    checkBox.addEventListener('change', run);
}

function moveTask (){
    let newListItem = this.parentNode;
    let checkBox = newListItem.querySelector('input[type = "checkbox"]');
    let dButton = document.createElement('button');
    dButton.className = 'delete';
    dButton.innerText = 'Delete';
    
    newListItem.appendChild(dButton);
    newListItem.removeChild(checkBox);

    completeUl.appendChild(newListItem);

    bindcompleteTask(newListItem, deleteTask);
   
}

let bindcompleteTask = function (finished, erase){
    let deleteBtn = finished.querySelector('.delete');
    deleteBtn.addEventListener('click', erase);
}

let deleteTask = function(){
    let taskDone = this.parentNode;
    let comUl = taskDone.parentNode;
    comUl.removeChild(taskDone);
}

for (let i = 0; i < todoUl.children.length; i++){
    bindIncompleteTask (todoUl.children[i], moveTask);
}
for (let i = 0; i < completeUl.children.length; i++){
    bindcompleteTask (completeUl.children[i], deleteTask);
}

inputForm.addEventListener('submit', addTask);