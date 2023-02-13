import { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage, saveToLocalStorageByNameInProgress, getLocalStorageInProgress, removeFromLocalStorageInProgress } from './localStorage.js';


let taskName = document.getElementById('taskName');
let taskDesc = document.getElementById('taskDesc');
let taskDate = document.getElementById('taskDate');
let toDoCheck = document.getElementById('toDoCheck');
let inProgCheck = document.getElementById('inProgCheck');


let toDoInject = document.getElementById('toDoInject');
let inProgInject = document.getElementById('inProgInject');

let saveButton = document.getElementById('saveButton');



saveButton.addEventListener('click', () => {
    console.log(taskName.value)
    console.log(taskDesc.value)
    console.log(taskDate.value)
    console.log(toDoCheck.checked)
    if(toDoCheck.checked === true)
    {
    saveToLocalStorageByName(taskName.value, taskDesc.value, taskDate.value)
    CreateElements();
   
    }
    if (inProgCheck.checked === true)
    {
        saveToLocalStorageByNameInProgress(taskName.value, taskDesc.value, taskDate.value)
        CreateElementsInProgress();
    }
    

})

function CreateElements(){
    let tasks = getLocalStorage();
    toDoInject.innerHTML = "";
    tasks.map(person => {
        let p = document.createElement('p');
        p.textContent = person.name;
        p.className = 'checkListName';
        let p2 = document.createElement('p')
        p2.textContent =`Description: ${person.description}`;
        let p3 = document.createElement('p')
        p3.textContent = `Due Date: ${person.date}`;
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'button';
        deleteBtn.textContent = 'Delete';
        deleteBtn.type = 'button';
        let editBtn = document.createElement('button');
        editBtn.className = 'editBtn';
        editBtn.textContent = 'edit';
        editBtn.type = 'button';

        deleteBtn.addEventListener('click', function() {
        removeFromLocalStorage(person.description)
        CreateElements()
        })
        editBtn.addEventListener('click', function() {
            removeFromLocalStorage(person.name)
            CreateElements()
            })


        toDoInject.appendChild(p);
        p.appendChild(p2)
        p.appendChild(p3)


        p.appendChild(deleteBtn)
        p.appendChild(editBtn)
    })
    
}
function CreateElementsInProgress(){
    let tasks = getLocalStorageInProgress();
    inProgInject.innerHTML = "";
    tasks.map(person => {
        let p = document.createElement('p');
        p.textContent = person.name;
        p.className = 'checkListName';
        let p2 = document.createElement('p')
        p2.textContent =`Description: ${person.description}`;
        let p3 = document.createElement('p')
        p3.textContent = `Due Date: ${person.date}`;
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'button';
        deleteBtn.textContent = 'Delete';
        deleteBtn.type = 'button';
        let editBtn = document.createElement('button');
        editBtn.className = 'editBtn';
        editBtn.textContent = 'edit';
        editBtn.type = 'button';

        deleteBtn.addEventListener('click', function() {
        removeFromLocalStorageInProgress(person.description)
        CreateElementsInProgress()
        })
        editBtn.addEventListener('click', function() {

    
            })


            inProgInject.appendChild(p);
        p.appendChild(p2)
        p.appendChild(p3)


        p.appendChild(deleteBtn)
        p.appendChild(editBtn)
    })
    
}
























CreateElements();
CreateElementsInProgress();
