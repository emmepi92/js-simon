// Un alert() espone 5 numeri generati casualmente.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

document.addEventListener('DOMContentLoaded', function(){
    function getRandomNum (min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function disabledHtml (name) {
        return name.disabled = true
    }

    var startBtn = document.getElementById('next-btn');
    var rangeMaxInput = document.getElementById('range');
    var totalNumsInput = document.getElementById('nums-to-remember')
    var outputResult = document.getElementById('result');
    var result = '';
    var pcNums = [];
    var userNums = [];
    var guessedNums = [];

    startBtn.addEventListener('click', function () {

        var rangeMax = parseInt(rangeMaxInput.value);
        var totalNums = parseInt(totalNumsInput.value);  
        
        disabledHtml(rangeMaxInput);
        disabledHtml(totalNumsInput); 
        disabledHtml(startBtn);              

        while (pcNums.length < totalNums) {
            var pcNum = getRandomNum(1,rangeMax);
            if (!pcNums.includes(pcNum))
            pcNums.push(pcNum);
        }
        console.log ('numeri mostrati',pcNums) // debug

        alert ('Ricorda ' + pcNums);
        
        setTimeout( function() {
    
            while (userNums.length < pcNums.length){
                var userNum = parseInt(prompt('Ricordi i numeri mostrati?'));
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
                result = 'Complimenti hai ricordato perfettamente ' + guessedNums.length + ' numeri su ' + totalNums + '.<br/>Numeri indovinati: ';
                if (guessedNums.length === 1) {
                    result = 'Complimenti hai ricordato perfettamente ' + guessedNums.length + ' numero su ' + totalNums + '.<br/>Numero indovinato: ';
                } else if (guessedNums.length === totalNums) {
                    result = 'Sei un mostro, li hai ricordati tutti: '
                }
            } else {
                result = 'Oh no, non hai ricordato nessun numero';
            }
            
            outputResult.style.paddingBottom = '24px';

            outputResult.innerHTML = result + guessedNums;
    
            //debug
            console.log ('numeri mostrati',pcNums)
            console.log('numeri dell"utente', userNums);
            console.log('numeri indovinati', guessedNums);
    
        },30000) 

    })
    
})
