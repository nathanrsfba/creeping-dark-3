// priority: 0


// Gate Aether to Botania elven trade
ServerEvents.tags('block', event => {
    event.removeAll( 'aether:aether_portal_blocks' );
    event.add( 'aether:aether_portal_blocks', 'kubejs:aether_portal' );
});

ServerEvents.recipes( event => {
    event.custom({
        "type": "botania:elven_trade",
        "ingredients": [
            { "item": "minecraft:glowstone" }
        ],
        "output": [
            { "item": "kubejs:aether_portal" }
        ]
    });

});
