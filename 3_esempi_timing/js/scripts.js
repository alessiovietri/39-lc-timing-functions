function stampaUno() {
    console.log('Uno');
}

function stampaDue() {
    console.log('Due');
}

setTimeout(stampaUno, 1);
setTimeout(stampaDue, 1);

console.log('Ciao');

for (let i = 0; i < 100000; i++) {
    console.log('STAMPA');
}

function somma(numUno, numDue) {
    return numUno + numDue;
}

// Se ho bisogno di passare degli argomenti alla mia funzione di callback di setTimeout/setInterval/addEventListener:
// GIUSTO
setTimeout(function () {
    somma(1, 2);
}, 3000);

// SBAGLIATO
// setTimeout(somma(1, 2), 3000);