let Task = []
function saveToLocalStorageByName(nameInput, descriptionInput, dateInput){
    //get current values that are saved into local storage
    //create an array of values to store into local storage
    let favorites = getLocalStorage('Task');
    let storedObject = {name: nameInput, description: descriptionInput, date: dateInput}
    //add new name to our favorites array
    favorites.push(storedObject);

    //save updated array to local storage
    localStorage.setItem('Task', JSON.stringify(favorites));
}
function saveToLocalStorageByNameInProgress(nameInput, descriptionInput, dateInput){
    //get current values that are saved into local storage
    //create an array of values to store into local storage
    let favorites = getLocalStorage('InProgress');
    let storedObject = {name: nameInput, description: descriptionInput, date: dateInput}
    //add new name to our favorites array
    favorites.push(storedObject);

    //save updated array to local storage
    localStorage.setItem('InProgress', JSON.stringify(favorites));
}






function getLocalStorage(){
    // get all of the values that are stored in Favorites in local storage
    let localStorageData = localStorage.getItem('Task');

    if(localStorageData == null){
        return [];
    }


    return JSON.parse(localStorageData);
}
function getLocalStorageInProgress(){
    // get all of the values that are stored in Favorites in local storage
    let localStorageData = localStorage.getItem('InProgress');

    if(localStorageData == null){
        return [];
    }


    return JSON.parse(localStorageData);
}














function removeFromLocalStorage(name){
    let Task = getLocalStorage('Task');
    
    Task.forEach(element => {
        if (element.description === name )
        {
            Task.splice(Task.indexOf(element), 1)
            console.log(Task.indexOf(element))
        }
    });
    localStorage.setItem('Task', JSON.stringify(Task));
}

function removeFromLocalStorageInProgress(name){
    let Task = getLocalStorage('InProgress');
    
    Task.forEach(element => {
        if (element.description === name )
        {
            Task.splice(Task.indexOf(element), 1)
            console.log(Task.indexOf(element))
        }

    });
    
 
    localStorage.setItem('Task', JSON.stringify(Task));
}

export { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage, saveToLocalStorageByNameInProgress, getLocalStorageInProgress, removeFromLocalStorageInProgress}