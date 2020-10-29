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

    // RICHIESTA DATI

    size = parseInt( prompt( 'CON QUANTI NUMERI VUOI GIOCARE' ) );
    while ( ( isNaN(size) ) || ( size < 2 ) ) {
        size = parseInt( prompt( 'INSERISCI CON QUANTI NUMERI VUOI GIOCARE' ) );
    }

    var numIniziale = parseInt( prompt( 'Inserisci il primo numero del range' ) );
    while ( isNaN(numIniziale) ) {
        var numIniziale = parseInt( prompt( 'Inserisci il primo numero del range' ) );
    }

    var numFinale = parseInt( prompt( 'Inserisci l\'ultimo numero del range, superiore a ' + ( size + numIniziale ) ) );
    while ( ( isNaN(numFinale) ) || ( numFinale < ( size + numIniziale ) )  ) {
        if ( isNaN(numFinale) ) {
            var numFinale = parseInt( prompt( 'Non è stato insetito un numero, prego inserire l\'ultimo numero del range, superiore a ' + ( size + numIniziale ) ) );
        } else if ( numFinale < ( size + numIniziale ) ) {
            var numFinale = parseInt( prompt( 'Non hai inserito un numero superiore a ' + ( size + numIniziale ) ) );
        }
    }

    // CONTROLLO DOPPIONI
    for ( i = 0 ; i < size ; i++ ) {
        while ( numeri.length < size ) {
            var numeriRand = numRandom(numIniziale, numFinale);
            if (! numeri.includes(numeriRand)) {
                numeri.push(numeriRand);
                // alert(numeriRand)
                $('.numbers').prepend('<li class="number-item">' + numeriRand + '</li>')
            }
        }
    }
    // CONTROLLO NUMERI TEMPORANEO
    console.log('Numeri casuali da indovinare ' + numeri);
    
    setTimeout(function (){
        
        $('.number-item').addClass('hide');
        
        setTimeout(function(){
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
            $('.number-result').addClass('visible')
            $('.user-numbers').prepend('<span>' + numeriUtente + '</span>');
            $('.num').text(numeriGiusti.length);
            $('.correct-numbers').text(numeriGiusti);
            $('.number-item').removeClass('hide');
            $('.title').text('I NUMERI SONO:');
        },30000)
    }, 5000);

}); // <-- end doc ready

// FUNZIONE NUMERI RANDOM
function numRandom(min, max){
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}