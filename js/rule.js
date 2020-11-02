/**
 * Esporre 5 numeri casuali
 * Dopo 30 sec chiedere i numeri esposti
 * Il software dirà quali e quanti numeri sono stati azzeccati
 */

$(document).ready(function(){

    // REFERENXEZE
    var size = 5;

    var numeri = [];
    var numeriUtente = [];
    var numeriGiusti = [];
    var numIniziale = 0
    var numFinale = 100

    // CONTROLLO DOPPIONI
    for ( i = 0 ; i < size ; i++ ) {
        while ( numeri.length < size ) {
            var numeriRand = numRandom(numIniziale, numFinale);
            if (! numeri.includes(numeriRand)) {
                numeri.push(numeriRand);
                // alert(numeriRand)
                $('.num-rand').prepend('<li class="num-item">' + numeriRand + '</li>')
            }
        }
    }

    // CONTROLLO NUMERI TEMPORANEO
    console.log('Numeri casuali da indovinare ' + numeri);
    
    setTimeout(function (){
        
        $('.num-item').addClass('hide');

        var loadingBar = $('.bar');        
        var width = 100;
        var countdown = $('.timer');
        var secondi = 30;
        var tempoScaduto = setInterval(function() {

            if ( secondi == 0 ) {
                // RICHIESTA NUMERI GENRATI
                for ( var i = 0 ; i < size ; i++ ) {
                    var numUtente = parseInt( prompt( 'Inserisci un numero' ) );
                    while ( isNaN(numUtente) ) {
                        var numUtente = parseInt( prompt( 'Non è stato inserito un numero' ) );
                    }
                    numeriUtente.push(numUtente);  
                    if ( numeri.includes(numUtente) ) {
                        
                        if (! numeriGiusti.includes(numUtente)) {
                            numeriGiusti.push(numUtente);
                        } else {
                            while ( numeriGiusti.includes(numUtente) ) {
                                var numUtente = parseInt( prompt( 'Hai già inserito questo numero, inserirne un altro' ) );
                            }
                        }
                    }
                }
                $('.user-num').append('<li class="user-item">' + numeriUtente + '</li>');
                $('.num-quantity').text(numeriGiusti.length);
                $('.right-num').text(numeriGiusti);
                $('.num-rand .num-item').removeClass('hide');
                $('.title').text('Simon said:');

                clearInterval(tempoScaduto)
            } else {

                width = width - (100/30);
                loadingBar.css('width', width + '%');
                countdown.text(secondi);
                secondi--; 

            }
        },1000)
    }, 5000);

}); // <-- end doc ready

// FUNZIONE NUMERI RANDOM
function numRandom(min, max){
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}