/*

    Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
    Dopo il tempo indicato, appare un alert().

*/

const seconds = parseInt(prompt('Inserisci il tempo di cottura:'));

const risultato = trasformazioneDiSecondiWow(seconds);

// TUTTE LE SEGUENTI SINTASSI SONO EQUIVALENTI
// Sintassi 1
setTimeout(alertTime, risultato);

// Sintassi 2
// setTimeout(alertTime, trasformazioneDiSecondiWow(seconds));

// Sintassi 3
// setTimeout(function () {
//     alert('La pasta è pronta!');
// }, trasformazioneDiSecondiWow(seconds));

// Sintassi 4
// setTimeout(() => {
//     alert('La pasta è pronta!');
// }, trasformazioneDiSecondiWow(seconds));




function trasformazioneDiSecondiWow(inputUtente) {

    return inputUtente * 1000;

}

function alertTime() {

    alert('La pasta è pronta!');

}
