// priority: 0

// Add coins
StartupEvents.registry( 'item', event => {
    event.create( 'coin_copper' ).displayName( 'Copper Coin' );
    event.create( 'coin_bronze' ).displayName( 'Bronze Coin' );
    event.create( 'coin_silver' ).displayName( 'Silver Coin' );
    event.create( 'coin_gold' ).displayName( 'Gold Coin' );
    event.create( 'coin_platinum' ).displayName( 'Platinum Coin' );
})
