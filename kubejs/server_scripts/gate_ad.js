// priority: 0

ServerEvents.recipes( event => {
    // Gate Astral Dimension to Mekanism
    event.remove({ output: 'astral_dimension:astral_dimension' });
    event.shapeless(
        Item.of( 'astral_dimension:astral_dimension' ),
        [
            'mekanism:dust_lithium',
            'minecraft:glowstone_dust',
            'minecraft:iron_ingot'
        ]
    )
});

