// priority: 0

// Gate EIO machines to osmium, via machine frame
ServerEvents.recipes( event => {
    // Remove primitive alloy smelter. Require the full one
    // for quest purposes.
    event.remove({ output: 'enderio:primitive_alloy_smelter' });

    // Void Chassis
    event.remove({ output: 'enderio:void_chassis' });
    event.shaped(
        Item.of( 'enderio:void_chassis' ),
        [
            'BIB',
            'OGO',
            'BIB'
        ],
        {
            B: 'minecraft:iron_bars',
            G: 'enderio:grains_of_infinity',
            O: 'mekanism:ingot_osmium',
            I: 'minecraft:iron_ingot'
        }
    );

    // Ensouled Chassis
    event.remove({ output: 'enderio:ensouled_chassis' });
    event.shaped(
        Item.of( 'enderio:ensouled_chassis' ),
        [
            'CSC',
            'OQO',
            'CSC'
        ],
        {
            C: 'enderio:soul_chain',
            S: 'enderio:soularium_ingot',
            O: 'mekanism:ingot_osmium',
            Q: 'minecraft:quartz'
        }
    );


});

