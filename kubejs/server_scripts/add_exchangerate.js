// priority: 0

function addTags( event, item, name, groups, extras )
{
    groups.forEach( group => {
        event.add( `forge:${group}`, item );
        event.add( `forge:${group}/${name}`, item );
    });
    if( extras === undefined )
    {
        // ignore
    }
    else
    {
        extras.forEach( extra => {
            event.add( `forge:${extra}`, item );
        });
    }
}
ServerEvents.recipes( event => {
    // Exchange rates for coins

    /*
     * Add a recipe to convert 8 of the smaller to the larger,
     * and vice versa
     */
    function addExchange( smaller, larger )
    {
        var sid = `kubejs:coin_${smaller}`;
        var lid = `kubejs:coin_${larger}`;
        event.shapeless( Item.of( sid, 8 ), [lid] );
        event.shapeless( Item.of( lid, 1 ), [`8x ${sid}`] );
    }

    addExchange( 'copper', 'bronze' );
    addExchange( 'bronze', 'silver' );
    addExchange( 'silver', 'gold' );
    addExchange( 'gold', 'platinum' );
});
