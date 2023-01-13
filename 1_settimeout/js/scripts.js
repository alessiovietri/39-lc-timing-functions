function saluta() {
    alert('Ciao 1');
}

function salutaDue() {
    alert('Ciao 2');
}

// Così, il primo parametro di setTimeout rappresenta una DEFINIZIONE di una funzione (nello specifico, la definizione della funzione "saluta()")
// Quindi, la funzione saluta() viene eseguita dopo 3000 millisecondi (cioè 3 secondi, cioè in modo asincrono)
setTimeout(saluta, 1000);

// Invece così, il primo parametro di setTimeout rappresenta una CHIAMATA ad una funzione (nello specifico, alla funzione "saluta()")
// Quindi, la funzione saluta() viene eseguita IMMEDIATAMENTE (in modo sincrono)
// setTimeout(saluta(), 3000);




setTimeout(function () {
    alert('Ciao 3');
}, 5000);

setTimeout(() => {
    alert('Ciao 4');
}, 10000);

























// Così, il secondo parametro di addEventListener rappresenta una DEFINIZIONE di una funzione (nello specifico, la definizione della funzione "saluta()")
// document.getElementById('button').addEventListener('click', saluta);

// Invece così, il secondo parametro di addEventListener rappresenta una CHIAMATA ad una funzione (nello specifico, alla funzione "salutaDue()")
// document.getElementById('button').addEventListener('click', salutaDue());