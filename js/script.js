// Un alert() espone 5 numeri generati casualmente.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

document.addEventListener('DOMContentLoaded', function(){
    function getRandomNum (min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var startBtn = document.getElementById('next-btn');

    var pcNums = [];
    var userNums = [];
    var guessedNums = [];
    var userNum = 0;
    var pcNum = 0;
    var rangeMaxInput = document.getElementById('range');
    var rangeMax = 100;
    var totalNumsInput = document.getElementById('nums-to-remember')
    var totalNums = 5;

    startBtn.addEventListener('click', function () {

        rangeMax = parseInt(rangeMaxInput.value);
        rangeMaxInput.disabled = true;

        totalNums = parseInt(totalNumsInput.value);  
        totalNumsInput.disabled = true; 
        startBtn.disabled = true;
              

        while (pcNums.length < totalNums) {
            pcNum = getRandomNum(1,rangeMax);
            if (!pcNums.includes(pcNum))
            pcNums.push(pcNum);
        }
        alert ('Ricorda ' + pcNums);
        
        setTimeout( function() {
    
            while (userNums.length < pcNums.length){
                userNum = parseInt(prompt('Ricordi i numeri mostrati?'));
                if (userNum > 0 && userNum <= rangeMax && !isNaN(userNum)) {
                    if(!userNums.includes(userNum)) {
                        userNums.push(userNum);
                    } else {
                        alert('Numero già inserito');
                    }
                } else {
                    alert('Inserisci un numero compreso fra 1 e ' + rangeMax);
                }
            }
    
            for ( var x = 0; x < userNums.length; x++) {
                if (pcNums.includes(userNums[x])) {
                guessedNums.push(userNums[x])
                }
            }
    
            if (guessedNums.length > 0) {
                document.getElementById('result').innerHTML = 'Complimenti hai ricordato perfettamente ' + guessedNums.length + ' su ' + totalNums;
            } else {
                document.getElementById('result').innerHTML = 'Oh no, non hai ricordato nessun numero';
            }
    
            //debug
            console.log ('numeri mostrati',pcNums)
            console.log('numeri dell"utente', userNums);
            console.log('numeri indovinati', guessedNums);
    
        },30000) 

    })
    
})
