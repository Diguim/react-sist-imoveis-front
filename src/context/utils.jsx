

export function setLocalStorage(user){

    localStorage.setItem('TesteKey', JSON.stringify(user));
    
}

export function getLocalStorage(){
    const json = localStorage.getItem('TesteKey');

    if(!json){
        return null;
    }
    const user = JSON.parse(json);

    return user??null;
}