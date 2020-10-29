/**
 * Esporre 5 numeri casuali
 * Dopo 30 sec chiedere i numeri esposti
 * Il software dirà quali e quanti numeri sono stati azzeccati
 */


$(document).ready(function(){

    // REFERENXEZE
    var size = 0;

    var numeri = [];
    var numeriUtente = [];

    // RICHIESTA DATI

    size = parseInt( prompt( 'Inserisci con quanti numeri vuoi giocare' ) );
    while ( ( isNaN(size) ) || ( size < 2 ) ) {
        size = parseInt( prompt( 'Inserisci con quanti numeri vuoi giocare' ) );
    }

    var numIniziale = parseInt( prompt( 'Inserisci il primo numero del range' ) );
    while ( isNaN(numIniziale) ) {
        var numIniziale = parseInt( prompt( 'Inserisci il primo numero del range' ) );
    }

    var numFinale = parseInt( prompt( 'Inserisci il secondo numero del range, superiore a ' + ( size + numIniziale ) ) );
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
                alert(numeriRand)
            }
        }
    }
    // CONTROLLO NUMERI TEMPORANEO
    console.log(numeri);

    setTimeout(function (){

        // RICHIESTA NUMERI GENRATI
        for ( var i = 0 ; i < size ; i++ ) {
            var numUtente = parseInt( prompt( 'Inserisci un numero' ) );
            while ( isNaN(numUtente) ) {
                var numUtente = parseInt( prompt( 'Inserisci un numero cane' ) );
            }
            numeriUtente.push(numUtente);  
        }
        console.log(numeriUtente);

        for ( var i = 0 ; i < size ; i++ ) {
            if ( numeri[i] === numeriUtente[i] ) {
                console.log(numeri[i]);
            }
        }
    }, 1000);

}); // <-- end doc ready

// FUNZIONE NUMERI RANDOM
function numRandom(min, max){
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}