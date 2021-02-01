// Code your solution here

function findMatching( drivers, name ) {
    return drivers.filter( driver => driver.toUpperCase() === name.toUpperCase() );
}

function fuzzyMatch( drivers, search ) {
    return drivers.filter( driver => driver.slice( 0, search.length ) === search );
}

function matchName( drivers, name ) {
    let matches = [];
    drivers.forEach( function( driver ) { 
        if ( driver.name === name ) { matches.push( driver ); }
    } );
    return matches;
}
