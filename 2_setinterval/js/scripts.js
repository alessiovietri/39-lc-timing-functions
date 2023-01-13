function saluta() {
    console.log('Ciao 1');
}

let interval = setInterval(saluta, 2000);
console.log(interval);

document.getElementById('button').addEventListener('click', 

    () => {
        if(interval === false){
            interval = setInterval(saluta, 2000);
        }
        else{
            clearInterval(interval);
            interval = false;
        }
        
        console.log(interval);
    }

);