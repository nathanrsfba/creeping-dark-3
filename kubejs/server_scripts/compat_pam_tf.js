// priority: 0

// Compatibility between Pam and Twilight foods

ServerEvents.tags( 'item', event => {
    // Tag generic meat
    [
        "twilightforest:raw_venison",
        "twilightforest:raw_meef"
    ].forEach( item => {
        event.add( 'forge:rawmeats', item );
        event.add( 'forge:stock_ingredients', item );
        event.add( 'forge:foods/meat/raw', item );
    });

    [
        "twilightforest:cooked_venison",
        "twilightforest:cooked_meef"
    ].forEach( item => {
        event.add( 'forge:foods/meat/cooked', item );
    });

});
