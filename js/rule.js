/**
 * Esporre 5 numeri casuali
 * Dopo 30 sec chiedere i numeri esposti
 * Il software dirà quali e quanti numeri sono stati azzeccati
 */


$(document).ready(function(){

    // REFERENCES

    var numeri = [];

    var size = parseInt( prompt( 'Inserisci con quanti numeri vuoi giocare' ) );
    while ( isNaN(size) ) {
        var size = parseInt( prompt( 'Inserisci il primo numero del range' ) );
    }

    var numIniziale = parseInt( prompt( 'Inserisci il primo numero del range' ) );
    while ( isNaN(numIniziale) ) {
        var numIniziale = parseInt( prompt( 'Inserisci il primo numero del range' ) );
    }

    var numFinale = parseInt( prompt( 'Inserisci il secondo numero del range, superiore di ' + size ) );
    while ( ( isNaN(numFinale) ) || ( numFinale < size )  ) {
        if ( isNaN(numFinale) ) {
            var numFinale = parseInt( prompt( 'Non è stato insetito un numero, prego inserire l\'ultimo numero del range, superiore a ' + size ) );
        } else if ( numFinale < size ) {
            var numFinale = parseInt( prompt( 'Non hai inserito un numero superiore a ' + size ) );
        }
    }

    
    for ( i = 0 ; i < 5 ; i++ ) {

        
        while ( numeri.length < size ) {
            var numeriRand = numRandom(numIniziale, numFinale);
            if (! numeri.includes(numeriRand)) {
                numeri.push(numeriRand);
            }
        }

    }
    console.log(numeri);

}); // <-- end doc ready

// FUNZIONE NUMERI RANDOM
function numRandom(min, max){
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}