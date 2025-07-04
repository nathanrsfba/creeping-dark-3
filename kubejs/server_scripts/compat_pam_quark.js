// priority: 0

// Compatibility between Pam and Quark foods

ServerEvents.tags( 'item', event => {
    // Tag crab as generic meat
    const crab = "quark:crab_leg";
    event.add( 'forge:rawmeats', crab );
    event.add( 'forge:stock_ingredients', crab );
    event.add( 'forge:foods/meat/raw', crab );

    event.add( 'forge:foods/meat/cooked', 'quark:cooked_crab_leg' );
});
