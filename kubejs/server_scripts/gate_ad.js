// priority: 0

ServerEvents.recipes( event => {
    // Gate Astral Dimension to Mekanism
    event.remove({ output: 'astral_dimension:astral_dimension' });
    event.shapeless(
        Item.of( 'astral_dimension:astral_dimension' ),
        [
            'minecraft:glowstone_dust',
            'mekanism:crystal_iron' 
        ]
    )
});
