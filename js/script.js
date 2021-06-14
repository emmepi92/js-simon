// Un alert() espone 5 numeri generati casualmente.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

document.addEventListener('DOMContentLoaded', function(){
    function getRandomNum (min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var pcNums = [];
    var userNums = [];
    var guessedNums = [];
    var userNum = 0;
    var pcNum =0;
    var maxLimit = 100;
    
    while (pcNums.length < 5) {
        pcNum = getRandomNum(1,maxLimit);
        if (!pcNums.includes(pcNum))
        pcNums.push(pcNum);
    }
    alert ('Ricorda ' + pcNums);
    
    setTimeout( function() {

        while (userNums.length < pcNums.length){
            userNum = parseInt(prompt('Ricordi i numeri mostrati?'));
            if (userNum > 0 && userNum <= maxLimit && !isNaN(userNum)) {
                if(!userNums.includes(userNum)) {
                    userNums.push(userNum);
                } else {
                    alert('Numero già inserito');
                }
            } else {
                alert('Inserisci un numero compreso fra 1 e ' + maxLimit);
            }
        }

        for ( var x = 0; x < userNums.length; x++) {
            if (pcNums.includes(userNums[x])) {
            guessedNums.push(userNums[x])
            }
        }

        if (guessedNums.length > 0) {
            document.getElementById('result').innerHTML = 'Complimenti hai ricordato perfettamente' + guessedNums.length + ' su ' + pcNums.length;
        } else {
            document.getElementById('result').innerHTML = 'Oh no, non hai ricordato nessun numero';
        }

        console.log ('numeri mostrati',pcNums)
        console.log('numeri dell"utente', userNums);
        console.log('numeri indovinati', guessedNums);

    },2000)
})
