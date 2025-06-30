// priority: 0

// Gate Twilight Forest to netherite
ServerEvents.tags( 'item', event => {
    event.removeAll( 'twilightforest:portal/activator' );
    event.add( 'twilightforest:portal/activator',
        "minecraft:netherite_ingot" );
});
