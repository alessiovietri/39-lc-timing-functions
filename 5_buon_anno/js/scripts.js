/*

    Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"

*/

let contatore = 10;

const clock = setInterval(function () {

    if (contatore == 0) {
        clearInterval(clock);
        console.log('Buon anno!');
    }
    else {
        console.log(contatore);
        contatore--;
    }
    

}, 1000);
